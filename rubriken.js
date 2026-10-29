// rubriken.js – Grundkategorien der Startseite. Die Lehrkraft kann sie in der Konsole umbenennen, ausblenden,
// neue anlegen (pub/rubriken) und jede Übung einer Rubrik zuordnen (pub/ex/{id}/rubrik).
// Ohne Zuordnung entscheidet die „reihe“ aus katalog.js.
export const STANDARD = [
  { k: 'meine', ic: '⭐', t: 'Meine Übungen', u: 'Von deiner Lehrkraft für dich freigeschaltet', f: '#b8841a', fest: true },
  { k: 'zusatz', ic: '📚', t: 'Zusatzlektionen', u: 'Grammatik gezielt wiederholen – mit Erklärung und vielen Übungen', f: '#5b4fa3', reihen: ['Zusatzlektionen'] },
  { k: 'muendlich', ic: '🗣️', t: 'Mündliche Prüfung', u: 'Problem lösen, Smalltalk, Sprechen üben', f: '#2f6b5e', reihen: ['Mündliche Prüfung'] },
  { k: 'hoeren', ic: '🎧', t: 'Hörübungen', u: 'Hören und Schreiben: Telefonnotiz & Co.', f: '#c0504d', reihen: ['Hören'] },
  { k: 'schreiben', ic: '✍️', t: 'Schreiben', u: 'Texte schreiben, abgeben, Korrektur bekommen', f: '#8a4f2f', reihen: ['Schreiben'] },
  { k: 'training', ic: '🎯', t: 'Prüfungstraining', u: 'Lesen, Hören, Schreiben und Wortschatz rund um den Beruf', f: '#2f6fc4', reihen: ['Prüfungstraining B1/B2'] },
  { k: 'grammatik', ic: '🧩', t: 'Grammatik & Wortschatz', u: 'Präpositionen, Wortverbindungen und Spiele', f: '#5b4fa3', reihen: ['Grammatik-Spiele', 'Spiele'] },
  { k: 'hilfsmittel', ic: '🧰', t: 'Hilfsmittel', u: 'Nachschlagen, Redemittel, Lernhilfen', f: '#2e8a6a', reihen: ['Hilfsmittel'] },
  { k: 'tests', ic: '🧪', t: 'Tests', u: 'Sprachstand prüfen', f: '#3f5f9a', reihen: ['Diagnose & Tests'] },
  { k: 'weitere', ic: '📦', t: 'Weitere Übungen', u: '', f: '#666', fest: true }
];
const FARBEN = ['#8a4f2f', '#2f6fc4', '#5b4fa3', '#2e8a6a', '#b5562f', '#3f5f9a', '#7a4fa3', '#1f6f78'];

/** Rubriken mit den Änderungen der Lehrkraft (pub/rubriken) zusammenführen, sortiert */
export function rubriken(over = {}) {
  const l = STANDARD.map((r, i) => ({ ...r, pos: i * 10, ...(over[r.k] || {}) }));
  Object.entries(over).forEach(([k, v], i) => { if (!STANDARD.some(r => r.k === k) && v && v.t) l.push({ k, ic: '📁', f: FARBEN[i % FARBEN.length], u: '', pos: 75, ...v, eigen: true }); });
  return l.sort((a, b) => (a.k === 'weitere') - (b.k === 'weitere') || (a.pos ?? 50) - (b.pos ?? 50));
}
/** Rubrik einer Übung: Zuordnung der Lehrkraft, sonst über die Reihe */
export function rubrikVon(ex, pubEx = {}, liste = rubriken()) {
  const z = pubEx[ex.id] && pubEx[ex.id].rubrik;
  if (z && liste.some(r => r.k === z && !r.aus && r.k !== 'meine')) return z;
  const r = liste.find(r => r.reihen && r.reihen.includes(ex.reihe) && !r.aus);
  return r ? r.k : 'weitere';
}
