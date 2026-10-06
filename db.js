// db.js – Datenzugriff: Firebase Realtime Database oder DEMO-Modus (localStorage).
import { FIREBASE_CONFIG, ADMIN_UID, ROOT } from './config.js?v=20261006a';

const qs = new URLSearchParams(location.search);
if (qs.has('demo')) sessionStorage.setItem('ueb_demo', '1');
export const DEMO = sessionStorage.getItem('ueb_demo') === '1' || !FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey.startsWith('HIER');

const V = '10.12.2', BASE = `https://www.gstatic.com/firebasejs/${V}/`;
let fb = null;
async function F() {
  if (fb) return fb;
  const [app, rd, au] = await Promise.all([
    import(BASE + 'firebase-app.js'), import(BASE + 'firebase-database.js'), import(BASE + 'firebase-auth.js')]);
  const a = app.initializeApp(FIREBASE_CONFIG);
  fb = { ...rd, ...au, db: rd.getDatabase(a), auth: au.getAuth(a) };
  fb.r = p => rd.ref(fb.db, p ? ROOT + '/' + p : ROOT);
  await fb.auth.authStateReady();
  return fb;
}

/* ---------------- Firebase ---------------- */
const Fire = {
  async get(p) { const f = await F(); const s = await f.get(f.r(p)); return s.exists() ? s.val() : null; },
  async set(p, v) { const f = await F(); await f.set(f.r(p), v); },
  async update(p, obj) { const f = await F(); await f.update(f.r(p), obj); },
  async remove(p) { const f = await F(); await f.remove(f.r(p)); },
  listen(p, cb, onErr) {
    let off = null, dead = false;
    F().then(f => { if (dead) return; off = f.onValue(f.r(p), s => cb(s.exists() ? s.val() : null), e => onErr && onErr(e)); });
    return () => { dead = true; off && off(); };
  },
  async login(email, pw) { const f = await F(); await f.signInWithEmailAndPassword(f.auth, email, pw); },
  async logout() { const f = await F(); await f.signOut(f.auth); },
  onAuth(cb) { F().then(f => f.onAuthStateChanged(f.auth, u => cb(u, !!u && u.uid === ADMIN_UID))).catch(e => cb(null, false, e)); }
};

/* ---------------- DEMO (localStorage) ---------------- */
const KEY = 'ueb_demo_db';
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
const parts = p => (p || '').split('/').filter(Boolean);
function getAt(o, p) { for (const k of parts(p)) { if (o == null || typeof o !== 'object') return null; o = o[k]; } return o === undefined ? null : o; }
function setAt(root, p, v) {
  const ks = parts(p); if (!ks.length) return v == null ? {} : v;
  let o = root;
  for (let i = 0; i < ks.length - 1; i++) { if (typeof o[ks[i]] !== 'object' || o[ks[i]] == null) o[ks[i]] = {}; o = o[ks[i]]; }
  if (v == null) delete o[ks.at(-1)]; else o[ks.at(-1)] = JSON.parse(JSON.stringify(v));
  return root;
}
const subs = new Set();
function notify() { const d = load(); for (const s of subs) { const v = getAt(d, s.p); const j = JSON.stringify(v); if (j !== s.last) { s.last = j; s.cb(v == null ? null : JSON.parse(j)); } } }
window.addEventListener('storage', e => { if (e.key === KEY) notify(); });
const save = d => { localStorage.setItem(KEY, JSON.stringify(d)); setTimeout(notify, 0); };
const Demo = {
  async get(p) { const v = getAt(load(), p); return v == null ? null : JSON.parse(JSON.stringify(v)); },
  async set(p, v) { save(setAt(load(), p, v)); },
  async update(p, obj) { let d = load(); for (const [k, v] of Object.entries(obj)) d = setAt(d, (p ? p + '/' : '') + k, v); save(d); },
  async remove(p) { save(setAt(load(), p, null)); },
  listen(p, cb) { const s = { p, cb, last: undefined }; subs.add(s); setTimeout(notify, 0); return () => subs.delete(s); },
  async login() { sessionStorage.setItem('ueb_demo_admin', '1'); authCbs.forEach(cb => cb({ uid: 'demo' }, true)); },
  async logout() { sessionStorage.removeItem('ueb_demo_admin'); authCbs.forEach(cb => cb(null, false)); },
  onAuth(cb) { authCbs.push(cb); setTimeout(() => cb(sessionStorage.getItem('ueb_demo_admin') ? { uid: 'demo' } : null, !!sessionStorage.getItem('ueb_demo_admin')), 0); }
};
const authCbs = [];

export const db = DEMO ? Demo : Fire;

/* ---------------- Hilfen ---------------- */
export const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export const zufall = (n, cs = CHARS) => Array.from(crypto.getRandomValues(new Uint32Array(n)), x => cs[x % cs.length]).join('');
export const mitDemo = u => DEMO ? u + (u.includes('?') ? '&' : '?') + 'demo' : u;
export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
