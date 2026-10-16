// wortverbindungen.js – gemeinsame Datenbank + Aufgabengenerator + Wiederholungssystem (Begegnung & Wiederholung)
import { VERBEN } from './verben-praep.js?v=20261016a';
import { VERBEN_PLUS, NOMEN, ADJEKTIVE, NVV, FAMILIEN } from './wv-daten.js?v=20261016a';

export const THEMEN = {
  V: { name: 'Verben + Präposition', kurz: 'Verben', icon: '🔗' },
  N: { name: 'Nomen + Präposition', kurz: 'Nomen', icon: '📦' },
  A: { name: 'Adjektive + Präposition', kurz: 'Adjektive', icon: '🎨' },
  NVV: { name: 'Nomen-Verb-Verbindungen', kurz: 'Nomen-Verb', icon: '🧩' }
};
export const KASUS = { A: 'Akk.', D: 'Dat.', N: 'Nom.' };
const slug = s => s.toLowerCase().replace(/[^a-z0-9äöüß]+/g, '_').replace(/^_+|_+$/g, '');
const r = n => Math.floor(Math.random() * n);
export const mische = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = r(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ---------------- Datenbank aufbauen ---------------- */
const ITEMS = [], seen = new Set();
const add = o => { let id = o.id, n = 2; while (seen.has(id)) id = o.id + '_' + n++; o.id = id; seen.add(id); ITEMS.push(o); };
for (const e of VERBEN) add({ id: 'V_' + slug(e.v + ' ' + e.p), t: 'V', w: e.v, p: e.p, k: e.k, s: e.s, h: e.h, x: e.x || '' });
for (const [w, p, k, s, h, x] of VERBEN_PLUS) add({ id: 'V_' + slug(w + ' ' + p), t: 'V', w, p, k, s, h, x: x || '' });
for (const [w, p, k, s, h, x] of NOMEN) add({ id: 'N_' + slug(w + ' ' + p), t: 'N', w, p, k, s, h, x: x || '' });
for (const [w, p, k, s, h, x] of ADJEKTIVE) add({ id: 'A_' + slug(w + ' ' + p), t: 'A', w, p, k, s, h, x: x || '' });
for (const [w, bed, s, h, erg, alt] of NVV) {
  const verb = s.match(/\{([^}]+)\}/)[1], ptok = (s.match(/\(([^)]+)\)/) || [])[1] || '';
  const teile = w.split(' '), nomen = teile.slice(0, -1).join(' ');
  add({ id: 'NVV_' + slug(w), t: 'NVV', w, bed, s, h, erg: erg || '', alt: new Set(alt || []), verb, ptok, nomen });
}
// Weitere Verben, die mit demselben Nomen auch richtig wären – nie als „falsch“ anbieten
const AUCH = { 'in Gang setzen': ['kommen'], 'in Ordnung bringen': ['halten'], 'in Betrieb nehmen': ['setzen'], 'zu Ende bringen': ['führen'], 'zum Abschluss bringen': ['führen'],
  'in Kontakt treten': ['kommen'], 'in Gefahr sein': ['kommen', 'geraten'], 'Abstand halten': ['nehmen'], 'Kontakt halten': ['haben'], 'Erfahrung sammeln': ['machen', 'haben'], 'Hilfe leisten': ['geben'],
  'ein Gespräch führen': ['haben'], 'eine Diskussion führen': ['haben'], 'Urlaub nehmen': ['haben'], 'Feierabend machen': ['haben'], 'eine Prüfung ablegen': ['haben'], 'Vorbereitungen treffen': ['machen'],
  'sich Mühe geben': ['machen'], 'im Mittelpunkt stehen': ['sein'], 'im Vordergrund stehen': ['sein'], 'zu Besuch sein': ['kommen'], 'in Schwierigkeiten geraten': ['kommen'], 'in Streik treten': ['gehen'],
  'einen Überblick bekommen': ['haben'], 'einen Termin vereinbaren': ['haben'], 'einen Grund angeben': ['haben'], 'Einfluss nehmen': ['haben'], 'Kontakt aufnehmen': ['haben'], 'einen Vertrag abschließen': ['machen'],
  'ein Versprechen halten': ['geben'], 'die Verantwortung tragen': ['haben'] };
for (const e of ITEMS) if (e.t === 'NVV' && AUCH[e.w]) AUCH[e.w].forEach(v => e.alt.add(v));
export { ITEMS };
export const nachId = Object.fromEntries(ITEMS.map(e => [e.id, e]));
export const anzeige = e => e.t === 'NVV' ? `${e.w}${e.erg ? ' (' + e.erg + ')' : ''} = ${e.bed}` : `${e.w} ${e.p} + ${KASUS[e.k]}`;

/* ---------------- Hilfen Präpositionen ---------------- */
const VERSCHMOLZEN = { am: ['an', 'dem'], beim: ['bei', 'dem'], im: ['in', 'dem'], vom: ['von', 'dem'], zum: ['zu', 'dem'], zur: ['zu', 'der'], ans: ['an', 'das'], aufs: ['auf', 'das'], ins: ['in', 'das'], ums: ['um', 'das'], fürs: ['für', 'das'] };
const KURZ = {}; for (const [k, [p, a]] of Object.entries(VERSCHMOLZEN)) KURZ[p + ' ' + a] = k;
const form = (p, art) => art ? (KURZ[p + ' ' + art] || p + ' ' + art) : p;
const gross = (w, wie) => wie && /^[A-ZÄÖÜ]/.test(wie) ? w[0].toUpperCase() + w.slice(1) : w;
const zerlege = tok => VERSCHMOLZEN[tok.toLowerCase()] || [tok.toLowerCase(), null];
const schluessel = e => e.t + ':' + e.w.replace(/^(sich |es |etwas |Geld )+/, '').replace(/^sich etwas /, '');
const PRAEP_VON = {};
for (const e of ITEMS) if (e.t !== 'NVV') {
  const m = (PRAEP_VON[schluessel(e)] ||= new Set()); m.add(e.p);
  for (const [, p] of (e.x || '').matchAll(/([a-zäöüß]+) \+/g)) m.add(p);
}
const HAEUFIG = ['auf', 'über', 'mit', 'für', 'an', 'von', 'zu', 'um', 'nach', 'bei', 'vor', 'in'];
function falschePraep(e, n = 3, erlaubtExtra = []) {
  const erlaubt = new Set([...(PRAEP_VON[schluessel(e)] || [e.p]), e.p, ...erlaubtExtra]);
  return mische(HAEUFIG.filter(p => !erlaubt.has(p))).slice(0, n);
}
export const satzVoll = e => e.t === 'NVV' ? e.s.replace(/\{([^}]+)\}/, '**$1**').replace(/\(([^)]+)\)/, '**$1**') : e.s.replace(/\{([^}]+)\}/, '**$1**').replace(/\[([^\]]+)\]/, '$1');
const tokVon = s => (s.match(/\{([^}]+)\}/) || [])[1] || '';

const D_ART = ['der', 'die', 'das', 'den', 'dem'];
const D_ZWILLING = { den: 'dem', dem: 'den', die: 'der', der: 'die', das: 'dem' };
const STAEMME = ['kein', 'mein', 'dein', 'sein', 'ihr', 'Ihr', 'unser', 'ein', 'dies', 'jed'];
const END_ZWILLING = { en: 'em', em: 'en', e: 'er', er: 'e', '': 'em', es: 'em' };
function artikelFormen(w) {
  if (D_ART.includes(w)) return { zw: D_ZWILLING[w], alle: D_ART.filter(x => x !== w) };
  for (const st of STAEMME) if (w.startsWith(st)) {
    const end = w.slice(st.length); if (!(end in END_ZWILLING)) continue;
    const ends = (st === 'dies' || st === 'jed') ? ['e', 'en', 'em', 'er', 'es'] : ['', 'e', 'en', 'em', 'er'];
    return { zw: st + END_ZWILLING[end], alle: ends.map(x => st + x).filter(x => x !== w) };
  }
  return null;
}
const ERKL = e => e.t === 'NVV'
  ? `**${e.w}**${e.erg ? ` (${e.erg})` : ''} = ${e.bed} – ${satzVoll(e)}`
  : `**${e.w} ${e.p}** + ${KASUS[e.k]}${e.x ? ` (${e.x})` : ''} – ${satzVoll(e)}`;

/* ---------------- Nomen-Verb-Verbindungen: Hilfen ---------------- */
const NV = ITEMS.filter(e => e.t === 'NVV');
const woerter = t => new Set(t.toLowerCase().replace(/\(.*?\)/g, '').split(/[^a-zäöüß]+/).filter(w => w.length > 4 && !['einen', 'einer', 'eines', 'etwas'].includes(w)));
const ueberschneidung = (a, b) => { const x = woerter(a.bed + ' ' + a.w), y = woerter(b.bed + ' ' + b.w); for (const w of x) if (y.has(w)) return true; return false; };
const VERBE_GLEICHES_NOMEN = {}; for (const e of NV) (VERBE_GLEICHES_NOMEN[e.nomen.toLowerCase()] ||= new Set()).add(e.verb);
const PRAEP_GLEICHES_NOMEN = {}; for (const e of NV) if (e.ptok) { const n = e.nomen.split(' ').slice(1).join(' ').toLowerCase(); (PRAEP_GLEICHES_NOMEN[n] ||= new Set()).add(zerlege(e.ptok)[0]); }
const NV_VERBEN = ['machen', 'nehmen', 'geben', 'stellen', 'bringen', 'kommen', 'treffen', 'finden', 'haben', 'führen', 'halten', 'setzen', 'ziehen', 'stehen', 'legen', 'leisten', 'tragen', 'lassen', 'gehen', 'sein'];
const NV_PRAEP = ['in', 'zu', 'unter', 'auf', 'außer', 'an', 'vor', 'aus'];
function falscheVerben(e, n = 3) {
  const verboten = new Set([e.verb, ...e.alt, ...(VERBE_GLEICHES_NOMEN[e.nomen.toLowerCase()] || [])]);
  return mische(NV_VERBEN.filter(v => !verboten.has(v))).slice(0, n);
}
const lueckeNVV = (s, was) => was === 'verb' ? s.replace(/\{[^}]+\}/, '___').replace(/\(([^)]+)\)/, '$1') : s.replace(/\(([^)]+)\)/, '___').replace(/\{([^}]+)\}/, '$1');

/* ---------------- Aufgabentypen für EIN Element ---------------- */
const MC = (e, kontext, frage, richtig, falsch, extra = {}) => ({ typ: 'mc', kontext, frage, opts: [richtig, ...falsch], l: 0, x: ERKL(e), items: [e.id], ...extra });
export const EINZEL = {
  // Verb/Nomen/Adjektiv + Präposition
  praep(e) {
    if (e.t === 'NVV') return null;
    const hin = e.x && !/^auch/.test(e.x) ? (e.x.includes('+') ? ` – außerdem: ${e.x}` : ` (${e.x})`) : '';
    return MC(e, 'Welche Präposition?', `**${e.w}** ___ + ${KASUS[e.k]}${hin}`, e.p, falschePraep(e));
  },
  kasus(e) {
    if (e.t === 'NVV' || e.k === 'N') return null;
    return MC(e, 'Akkusativ oder Dativ?', `**${e.w} ${e.p}** + ___`, e.k === 'A' ? 'Akkusativ' : 'Dativ', [e.k === 'A' ? 'Dativ' : 'Akkusativ']);
  },
  satzP(e) {
    if (e.t === 'NVV') return null;
    const tok = tokVon(e.s); if (!tok) return null;
    const [, art] = zerlege(tok);
    return MC(e, 'Was passt in die Lücke?', `${e.s.replace(/\{[^}]+\}/, '___').replace(/\[([^\]]+)\]/, '$1')} (${e.w})`, tok, falschePraep(e).map(p => gross(form(p, art), tok)));
  },
  satzA(e) {
    if (e.t === 'NVV' || e.k === 'N') return null;
    const m = e.s.match(/\[([^\]]+)\]/); if (!m) return null;
    const f = artikelFormen(m[1]); if (!f) return null;
    return MC(e, `Welche Form? (${e.p} + ${KASUS[e.k]})`, e.s.replace(/\{([^}]+)\}/, '**$1**').replace(/\[[^\]]+\]/, '___'), m[1], [f.zw, ...mische(f.alle.filter(x => x !== f.zw)).slice(0, 2)]);
  },
  wo(e) {
    if (e.t === 'NVV' || e.p === 'als') return null;
    const vok = p => /^[aeiouäöü]/.test(p), wo = p => (vok(p) ? 'Wor' : 'Wo') + p, da = p => (vok(p) ? 'dar' : 'da') + p, fr = falschePraep(e);
    if (Math.random() < .5) return MC(e, 'Fragewort (Sache)', `**${e.w} ${e.p}** etwas → ___ …?`, wo(e.p), fr.map(wo), { x: `Nach Sachen fragt man mit wo(r) + Präposition, nach Personen mit ${e.p} + ${e.k === 'A' ? 'wen' : 'wem'}. ` + ERKL(e) });
    return MC(e, 'da(r) + Präposition', `**${e.w} ${e.p}** + Sache → Statt „${e.p} + das“ sagt man: ___`, da(e.p), fr.map(da), { x: `z. B. vor einem dass-Satz: … ${da(e.p)}, dass … – ` + ERKL(e) });
  },
  familie(e) {
    if (e.t === 'NVV') return null;
    const fam = FAMILIEN.find(f => f.some(([w, p]) => w === e.w && p === e.p)); if (!fam || fam.length < 2) return null;
    const andere = mische(fam.filter(([w]) => w !== e.w))[0];
    const zeile = ([w, p, k]) => `${w} ${p} + ${KASUS[k]}`;
    const anders = andere[1] !== e.p;
    return MC(e, 'Wortfamilie', `${zeile(andere)} → **${e.w}** ___ + ${KASUS[e.k]}`, e.p, falschePraep(e, 3, [andere[1]].filter(p => p === e.p)),
      { x: `${fam.map(zeile).join(' · ')}${anders ? ' – Achtung: hier ändert sich die Präposition!' : ''}` });
  },
  // Nomen-Verb-Verbindungen
  nvVerb(e) {
    if (e.t !== 'NVV') return null;
    return MC(e, 'Welches Verb passt?', `**${e.nomen}** ___ (= ${e.bed})`, e.verb, falscheVerben(e));
  },
  nvSatz(e) {
    if (e.t !== 'NVV') return null;
    return MC(e, 'Welches Verb fehlt?', lueckeNVV(e.s, 'verb'), e.verb, falscheVerben(e));
  },
  nvPraep(e) {
    if (e.t !== 'NVV' || !e.ptok) return null;
    const [p0, art] = zerlege(e.ptok), n = e.nomen.split(' ').slice(1).join(' ').toLowerCase();
    const verboten = new Set([p0, ...(PRAEP_GLEICHES_NOMEN[n] || [])]);
    const falsch = mische(NV_PRAEP.filter(p => !verboten.has(p) && !(art && (p === 'außer' || (p === 'zu' && art === 'das'))))).slice(0, 3).map(p => gross(form(p, art), e.ptok));
    return MC(e, 'Welche Präposition?', lueckeNVV(e.s, 'praep'), e.ptok, falsch);
  },
  nvBedeutung(e) {
    if (e.t !== 'NVV') return null;
    const andere = [...new Set(mische(NV.filter(x => x.bed !== e.bed && !ueberschneidung(x, e))).map(x => x.bed))].slice(0, 3);
    return MC(e, 'Was bedeutet das?', `**${e.w}**`, e.bed, andere);
  },
  nvRueck(e) {
    if (e.t !== 'NVV') return null;
    const andere = mische(NV.filter(x => x.bed !== e.bed && x.w !== e.w && !ueberschneidung(x, e))).slice(0, 3).map(x => x.w);
    return MC(e, 'Welche Verbindung passt?', `Ein anderes Wort für **${e.bed}**:`, e.w, andere);
  },
  nvErg(e) {
    if (e.t !== 'NVV' || !e.erg) return null;
    const [p, , k] = e.erg.split(' ');
    const falsch = mische(HAEUFIG.filter(x => x !== p)).slice(0, 3);
    return MC(e, 'Welche Präposition?', `**${e.w}** ___ + ${k}`, p, falsch);
  }
};
const TYPEN_FUER = { V: ['praep', 'praep', 'satzP', 'satzP', 'kasus', 'satzA', 'wo', 'familie'], N: ['praep', 'praep', 'satzP', 'satzP', 'kasus', 'satzA', 'wo', 'familie'], A: ['praep', 'praep', 'satzP', 'satzP', 'kasus', 'satzA', 'familie'], NVV: ['nvVerb', 'nvSatz', 'nvSatz', 'nvPraep', 'nvPraep', 'nvBedeutung', 'nvRueck', 'nvErg'] };
const SCHNELL = new Set(['praep', 'kasus', 'satzP', 'wo', 'nvVerb', 'nvSatz', 'nvPraep', 'nvErg', 'familie']);

/** Aufgabe zu einem bestimmten Element (für das Wiederholungssystem) */
export function aufgabeFuer(e, { schnell = false } = {}) {
  const typen = mische(TYPEN_FUER[e.t].filter(t => !schnell || SCHNELL.has(t)));
  for (const t of typen) { const a = EINZEL[t](e); if (a) { a.id = 'wv-' + t; a.art = t; return a; } }
  return null;
}

/* ---------------- Aufgaben mit mehreren Elementen ---------------- */
export const MEHR = {
  fehler(es) {
    const zeilen = es.map(e => {
      const tok = tokVon(e.s);
      if (Math.random() < .5 || !tok) return [satzVoll(e), 0];
      const [, art] = zerlege(tok);
      return [e.s.replace(/\{[^}]+\}/, '**' + gross(form(falschePraep(e, 1)[0], art), tok) + '**').replace(/\[([^\]]+)\]/, '$1'), 1];
    });
    return { typ: 'matrix', kontext: 'Fehler finden', frage: 'Ist die Präposition richtig?', wahl: ['richtig', 'falsch'], aussagen: zeilen, items: es.map(e => e.id), x: es.map(ERKL).join(' · ') };
  },
  zuordnen(es) { return { typ: 'zu', kontext: 'Zuordnen', frage: 'Was gehört zusammen?', paare: es.map(e => [e.w, `${e.p} + ${KASUS[e.k]}`]), items: es.map(e => e.id), x: '' }; },
  sortieren(es) { return { typ: 'matrix', kontext: 'Akkusativ oder Dativ?', frage: 'Mit welchem Kasus steht die Präposition hier?', wahl: ['+ Akk.', '+ Dat.'], aussagen: es.map(e => [`${e.w} **${e.p}**`, e.k === 'A' ? 0 : 1]), items: es.map(e => e.id), x: '' }; },
  nvZuordnen(es) { return { typ: 'zu', kontext: 'Bedeutung zuordnen', frage: 'Welche Bedeutung passt?', paare: es.map(e => [e.w, e.bed]), items: es.map(e => e.id), x: '' }; },
  nvFehler(es) {
    const zeilen = es.map(e => {
      if (Math.random() < .5) return [satzVoll(e), 0];
      return [e.s.replace(/\{[^}]+\}/, '**' + falscheVerben(e, 1)[0] + '**').replace(/\(([^)]+)\)/, '$1'), 1];
    });
    return { typ: 'matrix', kontext: 'Fehler finden', frage: 'Ist das Verb richtig?', wahl: ['richtig', 'falsch'], aussagen: zeilen, items: es.map(e => e.id), x: es.map(ERKL).join(' · ') };
  }
};

/* ---------------- Wiederholungssystem (Leitner) ----------------
   Stufe 0 = neu, 1–5 = gelernt; richtig → eine Stufe höher, falsch → zurück auf 1.
   Abstände bis zur nächsten Wiederholung (Tage): */
const TAG = 864e5, ABSTAND = [0, 1, 2, 5, 12, 30];
const SK = 'ueb_wv_srs';
let SRS = (() => { try { return JSON.parse(localStorage.getItem(SK)) || {}; } catch (e) { return {}; } })();
const speichern = () => { try { localStorage.setItem(SK, JSON.stringify(SRS)); } catch (e) { } };
export const stufe = id => SRS[id] ? SRS[id].b : 0;
export const faellig = (id, jetzt = Date.now()) => !!SRS[id] && SRS[id].d <= jetzt;
export function bewerte(id, ok) {
  const s = SRS[id], jetzt = Date.now();
  if (!ok) SRS[id] = { b: 1, d: jetzt, f: ((s && s.f) || 0) + 1 };
  else if (!s) SRS[id] = { b: 1, d: jetzt + ABSTAND[1] * TAG, f: 0 };
  else if (s.d <= jetzt || s.b <= 1) { const b = Math.min(5, s.b + 1); SRS[id] = { b, d: jetzt + ABSTAND[b] * TAG, f: s.f || 0 }; }
  speichern();
}
export function statistik(pool) {
  const st = { neu: 0, lernen: 0, fest: 0, sicher: 0, faellig: 0 }, jetzt = Date.now();
  for (const e of pool) { const b = stufe(e.id); if (!b) st.neu++; else if (b <= 2) st.lernen++; else if (b <= 4) st.fest++; else st.sicher++; if (faellig(e.id, jetzt)) st.faellig++; }
  return st;
}
export const fehlerListe = pool => pool.filter(e => SRS[e.id] && SRS[e.id].b === 1 && SRS[e.id].f).sort((a, b) => SRS[b.id].f - SRS[a.id].f);

/* ---------------- Zufallsauswahl ---------------- */
const GEWICHT = { 1: 6, 2: 3, 3: 1 };
const gewicht = e => GEWICHT[e.h] * (stufe(e.id) === 1 ? 3 : stufe(e.id) >= 4 ? .5 : 1);
export function ziehe(pool, n, ausser = new Set(), bedingung = () => true) {
  const kand = pool.filter(e => !ausser.has(e.id) && bedingung(e)).map(e => ({ e, w: gewicht(e) })), out = [];
  while (out.length < n && kand.length) {
    let x = Math.random() * kand.reduce((a, b) => a + b.w, 0), k = 0;
    while ((x -= kand[k].w) > 0 && k < kand.length - 1) k++;
    out.push(kand[k].e); kand.splice(k, 1);
  }
  return out;
}
function verschieden(pool, n, ausser, schl) {
  const out = [], s1 = new Set(), s2 = new Set();
  for (const e of ziehe(pool, pool.length, ausser)) { const [a, b] = schl(e); if (s1.has(a) || s2.has(b)) continue; s1.add(a); s2.add(b); out.push(e); if (out.length === n) break; }
  return out;
}

/** Zufällige Aufgabe aus dem Pool (gemischte Typen, auch Mehrfach-Aufgaben) */
export function zufallsAufgabe(pool, { ausser = new Set(), schnell = false, mehrErlaubt = true } = {}) {
  const praep = pool.filter(e => e.t !== 'NVV'), nvv = pool.filter(e => e.t === 'NVV');
  for (let v = 0; v < 30; v++) {
    if (mehrErlaubt && !schnell && Math.random() < .2) {
      const art = mische([...(praep.length >= 8 ? ['fehler', 'zuordnen', 'sortieren'] : []), ...(nvv.length >= 8 ? ['nvZuordnen', 'nvFehler'] : [])])[0];
      let es = null;
      if (art === 'fehler') es = ziehe(praep, 4, ausser, e => !!tokVon(e.s));
      if (art === 'sortieren') es = ziehe(praep, 6, ausser, e => e.k !== 'N');
      if (art === 'zuordnen') es = verschieden(praep, 5, ausser, e => [e.p + e.k, schluessel(e)]);
      if (art === 'nvZuordnen') { es = []; for (const e of ziehe(nvv, nvv.length, ausser)) { if (es.some(x => x.bed === e.bed || ueberschneidung(x, e))) continue; es.push(e); if (es.length === 5) break; } }
      if (art === 'nvFehler') es = ziehe(nvv, 4, ausser);
      if (art && es && es.length >= 4) { const a = MEHR[art](es); a.id = 'wv-' + art; a.art = art; return a; }
    }
    const [e] = ziehe(pool, 1, ausser); if (!e) return null;
    const a = aufgabeFuer(e, { schnell }); if (a) return a;
  }
  return null;
}

/** Lernrunde nach dem Prinzip Begegnung & Wiederholung */
export function lernplan(pool, { n = 20, neuMax = 8 } = {}) {
  const jetzt = Date.now();
  const wdh = pool.filter(e => faellig(e.id, jetzt)).sort((a, b) => SRS[a.id].d - SRS[b.id].d).slice(0, n);
  const neu = ziehe(pool.filter(e => !SRS[e.id]), Math.max(0, Math.min(neuMax, n - wdh.length)));
  const auff = n - wdh.length - neu.length > 0 ? ziehe(pool.filter(e => SRS[e.id] && !faellig(e.id, jetzt)), Math.min(4, n - wdh.length - neu.length)) : [];
  return { wdh, neu, auff };
}

/** Fragen für die Live-Runde (q, opts, l, e, k) */
export function liveFragen(themen, n = 40) {
  const pool = ITEMS.filter(e => themen.includes(e.t)), out = [], benutzt = new Set();
  const ohne = s => String(s).replace(/\*\*/g, '');
  while (out.length < n) {
    const [e] = ziehe(pool, 1, benutzt); if (!e) break; benutzt.add(e.id);
    const a = aufgabeFuer(e, { schnell: true }); if (!a) continue;
    out.push({ q: ohne(a.frage), opts: a.opts, l: a.l, e: ohne(a.x), k: a.kontext });
  }
  return out;
}
