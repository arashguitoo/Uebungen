// spieler.js – Anbindung jeder Übung an die Zentrale:
// Sitzung (mit Code oder als Gast), Live-Beobachtung, Ergebnisse, Aufgabenanalyse, Zertifikat.
import { db, DEMO, zufall, esc } from './db.js?v=20261006b';
import { KATALOG, exById } from './katalog.js?v=20261006b';

const SKEY = 'ueb_sitzung', BKEY = 'ueb_best';
const jetzt = () => Date.now();

/* ---------------- Sitzung ---------------- */
export function sitzung() { try { return JSON.parse(localStorage.getItem(SKEY)); } catch (e) { return null; } }
export function abmelden() { localStorage.removeItem(SKEY); }
export function alsGast(name) {
  const s = { gast: true, name: (name || '').trim().slice(0, 40) || 'Gast' };
  localStorage.setItem(SKEY, JSON.stringify(s)); return s;
}
export async function anmelden(code) {
  code = (code || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (code.length < 4) throw new Error('Bitte gib deinen Code ein.');
  let c = null;
  try { c = await db.get('codes/' + code); } catch (e) { throw new Error('Keine Verbindung. Bitte später noch einmal versuchen.'); }
  if (!c) throw new Error('Diesen Code gibt es nicht. Bitte prüfe ihn.');
  const s = { code, name: c.name, kid: c.kid, pid: c.pid, kurs: c.kurs || '' };
  localStorage.setItem(SKEY, JSON.stringify(s)); return s;
}
const bkey = (s = sitzung()) => BKEY + '_' + (s && s.code ? s.code : 'gast');
export function besteLokal() { try { return JSON.parse(localStorage.getItem(bkey())) || {}; } catch (e) { return {}; } }

/* ---------------- Freigabe ---------------- */
export async function istFreigegeben(exId, s = sitzung(), meta = null) {
  const ex = exById(exId) || meta; if (!ex) return false;
  let offen = ex.offen !== false;
  try {
    const p = await db.get('pub/ex/' + exId);
    if (p && typeof p.offen === 'boolean') offen = p.offen;
    if (offen) return true;
    if (s && s.kid) return (await db.get('pub/kurse/' + s.kid + '/ex/' + exId)) === true;
  } catch (e) { return offen; }
  return false;
}

/* ---------------- Start einer Übung ---------------- */
export async function starte(exId, meta = null) {
  const ex = exById(exId) || meta || { id: exId, titel: exId };
  const urlCode = new URLSearchParams(location.search).get('code');
  if (urlCode) { try { await anmelden(urlCode); } catch (e) { } }
  let s = sitzung() || alsGast('Gast');
  kopf(ex, s);
  if (ex.farbe) document.documentElement.style.setProperty('--akzent', ex.farbe);
  const frei = await istFreigegeben(exId, s, meta || ex);
  return new Lauf(ex, s, frei);
}

class Lauf {
  constructor(ex, s, frei) {
    this.ex = ex; this.s = s; this.frei = frei;
    this.name = s.name; this.mitCode = !!s.code;
    this.sid = null; this.items = {}; this.t0 = 0; this.fertig = false; this._last = 0; this._pend = null; this.stand = {};
    addEventListener('pagehide', () => { if (this.sid && !this.fertig) this._live({ st: 'abgebrochen' }, true); });
    setInterval(() => { if (this.sid && !this.fertig && document.visibilityState === 'visible') this._live({}, true); }, 20000);
  }
  sperre(el) {
    el.innerHTML = `<div class="karte" style="text-align:center;margin-top:30px">
      <div style="font-size:2.4rem">🔒</div><h2>Diese Übung ist gerade nicht freigegeben</h2>
      <p class="leise">${this.mitCode ? 'Für deinen Kurs ist sie noch nicht freigeschaltet.' : 'Melde dich mit deinem Code an, wenn du einen hast.'}</p>
      <a class="btn" href="index.html">Zur Übungszentrale</a></div>`;
  }
  /** Beim Klick auf „Start“ aufrufen */
  beginne(n, pm, info = '') {
    this.sid = zufall(14, 'abcdefghijkmnopqrstuvwxyz23456789'); this.t0 = jetzt(); this.items = {}; this.fertig = false;
    this.stand = { i: 0, n, p: 0, pm, pa: 0, info };
    this._live({ st: 'spielt' }, true);
  }
  /** Laufenden Durchgang ohne Ergebnis beenden (Zurück-Taste) */
  abbrechen() {
    if (this.sid && !this.fertig) this._live({ st: 'abgebrochen' }, true);
    clearTimeout(this._pend); this._pend = null; this.sid = null;
  }
  /** Fortschritt melden: i = erledigte Aufgaben, p = Punkte */
  fortschritt(i, p, info, pa) {
    Object.assign(this.stand, { i, p }); if (info !== undefined) this.stand.info = info; if (pa !== undefined) this.stand.pa = pa;
    this._live({}, false);
  }
  /** Einzelantwort für die Aufgabenanalyse (nur der erste Versuch zählt) */
  antwort(itemId, richtig) { if (!(itemId in this.items)) this.items[itemId] = richtig ? 1 : 0; }
  /** Aufgabentexte einmalig in die Datenbank schreiben (für die Analyse in der Konsole) */
  async registriereItems(map) {
    try {
      const vorh = (await db.get('items/' + this.ex.id)) || {}, neu = {};
      for (const [k, v] of Object.entries(map)) if (!(k in vorh)) neu[k] = String(v).slice(0, 280);
      if (Object.keys(neu).length) await db.update('items/' + this.ex.id, neu);
    } catch (e) { }
  }
  async ende(p, pm, extra = {}) {
    if (!this.sid || this.fertig) return;
    this.fertig = true;
    const pct = pm ? Math.round(100 * p / pm) : 0, dur = Math.round((jetzt() - this.t0) / 1000);
    Object.assign(this.stand, { p, pm, i: this.stand.n });
    const s = this.s;
    const res = { kid: s.kid || '', pid: s.pid || '', name: s.name || 'Gast', kurs: s.kurs || '', p, pm, pct, dur, t: jetzt(), it: this.items };
    if (Object.keys(extra).length) res.x = JSON.stringify(extra).slice(0, 2000);
    const b = besteLokal(); if (!(this.ex.id in b) || pct > b[this.ex.id]) { b[this.ex.id] = pct; localStorage.setItem(bkey(this.s), JSON.stringify(b)); }
    try { await db.set('res/' + this.ex.id + '/' + this.sid, res); } catch (e) { console.warn('Ergebnis nicht gespeichert', e); }
    await this._live({ st: 'fertig' }, true);
    return pct;
  }
  async _live(extra, sofort) {
    if (!this.sid) return;
    const go = async () => {
      this._last = jetzt(); this._pend = null;
      const s = this.s, st = this.stand;
      const v = { ex: this.ex.id, name: s.name || 'Gast', kid: s.kid || '', pid: s.pid || '', kurs: s.kurs || '',
        i: st.i || 0, n: st.n || 0, p: st.p || 0, pm: st.pm || 0, pa: st.pa ?? st.i ?? 0, info: String(st.info || '').slice(0, 80),
        st: extra.st || (this.fertig ? 'fertig' : 'spielt'), t0: this.t0, t: jetzt() };
      try { await db.set('live/' + this.sid, v); } catch (e) { }
    };
    if (sofort || jetzt() - this._last > 1500) return go();
    if (!this._pend) this._pend = setTimeout(go, 1500);
  }
  /** Zertifikat als PNG herunterladen */
  zertifikat({ titel, zeile, punkte, farbe }) {
    const W = 1600, H = 1130, c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'), f = farbe || this.ex.farbe || '#1f6f78';
    g.fillStyle = '#fbf8f2'; g.fillRect(0, 0, W, H);
    g.strokeStyle = f; g.lineWidth = 18; g.strokeRect(40, 40, W - 80, H - 80);
    g.lineWidth = 3; g.strokeRect(78, 78, W - 156, H - 156);
    g.textAlign = 'center'; g.fillStyle = f;
    g.font = 'bold 40px Calibri, Carlito, sans-serif'; g.fillText('LERN DEUTSCH MIT ARASH', W / 2, 190);
    g.fillStyle = '#1f2328'; g.font = 'bold 96px Georgia, serif'; g.fillText('Zertifikat', W / 2, 330);
    g.font = '38px Calibri, Carlito, sans-serif'; g.fillStyle = '#555'; g.fillText('Hiermit wird bestätigt, dass', W / 2, 430);
    g.font = 'bold 76px Georgia, serif'; g.fillStyle = f; g.fillText(this.s.name || 'Gast', W / 2, 540);
    g.font = '38px Calibri, Carlito, sans-serif'; g.fillStyle = '#555'; g.fillText('die Übung erfolgreich abgeschlossen hat:', W / 2, 630);
    g.font = 'bold 56px Calibri, Carlito, sans-serif'; g.fillStyle = '#1f2328'; g.fillText(titel || this.ex.titel, W / 2, 720);
    if (zeile) { g.font = 'italic 36px Georgia, serif'; g.fillStyle = '#444'; g.fillText(zeile, W / 2, 790); }
    if (punkte) { g.font = 'bold 44px Calibri, Carlito, sans-serif'; g.fillStyle = f; g.fillText(punkte, W / 2, 880); }
    g.font = '30px Calibri, Carlito, sans-serif'; g.fillStyle = '#777';
    g.fillText(new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }) + (this.s.kurs ? ' · ' + this.s.kurs : ''), W / 2, 990);
    const a = document.createElement('a'); a.download = 'Zertifikat_' + this.ex.id + '_' + (this.s.name || 'Gast').replace(/\W+/g, '_') + '.png';
    a.href = c.toDataURL('image/png'); document.body.appendChild(a); a.click(); a.remove();
  }
}

/* ---------------- Zurück-Navigation ----------------
   Knopf „← …“ in der Übung + Zurück-Taste des Browsers / Wischgeste am Handy.
   modus: 'start' (Übersicht/Startbild) · 'lauf' (Aufgaben) · 'ende' (Ergebnis) */
export function navigation(L, { zurueck, fortschritt = () => false }) {
  const FRAGE = 'Diesen Durchgang abbrechen?\nDie bisherigen Antworten werden nicht gewertet.';
  let modus = 'start', bestaetigt = false;
  history.replaceState({ ueb: 'start' }, '');
  addEventListener('popstate', () => {
    const ov = document.querySelector('.spick');
    if (ov) { ov.remove(); return; }
    if (modus === 'lauf') {
      if (!bestaetigt && fortschritt() && !confirm(FRAGE)) { history.pushState({ ueb: 'lauf' }, ''); return; }
      L.abbrechen();
    }
    bestaetigt = false;
    if (modus !== 'start') { modus = 'start'; zurueck(); }
  });
  return {
    /** Beim Start eines Durchgangs */
    lauf() { history[modus === 'start' ? 'pushState' : 'replaceState']({ ueb: 'lauf' }, ''); modus = 'lauf'; },
    /** Wenn das Ergebnis angezeigt wird */
    ende() { modus = 'ende'; },
    /** Knopf „← Übersicht“ / „Zur Übersicht“ */
    zurStart() {
      if (modus === 'start') return;
      if (modus === 'lauf' && fortschritt() && !confirm(FRAGE)) return;
      bestaetigt = true; history.back();
    },
    /** Spickzettel/Kompakt-Fenster: schließt auch mit der Zurück-Taste */
    fenster(d) {
      history.pushState({ ueb: 'fenster' }, '');
      d.onclick = e => { if (e.target === d || e.target.id === 'zu') history.back(); };
    }
  };
}

/* ---------------- Kopfzeile ---------------- */
function kopf(ex, s) {
  const h = document.createElement('header'); h.className = 'kopf';
  h.innerHTML = (DEMO ? '<div class="demo-band">DEMO-MODUS – Daten bleiben nur in diesem Browser</div>' : '') +
    `<div class="wrap"><a href="index.html" title="Zur Übungszentrale">← Zentrale</a>
     <div class="titel">${esc(ex.titel)}</div>
     <div class="wer">${s.code ? '👤 ' + esc(s.name) : '👤 ' + esc(s.name) + ' · ohne Code'}</div></div>`;
  document.body.prepend(h);
}

export { KATALOG, esc };
