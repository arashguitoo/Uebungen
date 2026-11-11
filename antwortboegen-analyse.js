// antwortboegen-analyse.js – nur für die Konsole: Kompetenzbereiche, Fehlertypen und Erklärungen der Ablenker.
// Für jede Aufgabe: b = Bereich, d = { falsche Option: [Fehlertyp, Erklärung] }.
export const FEHLERTYPEN = {
  L: { t: 'Lockwort', l: 'Gleiches Wort im Text, aber andere Aussage', tipp: 'Nicht nach gleichen Wörtern suchen, sondern prüfen: Sagt der Text genau das? Umschreibungen sind meistens die richtige Lösung.' },
  Z: { t: 'Wer macht was?', l: 'Person, Abteilung oder Zuständigkeit verwechselt', tipp: 'Bei jeder Aussage fragen: Wer handelt? Für wen gilt das? Namen und Abkürzungen im Text markieren.' },
  M: { t: 'Plan oder Tatsache?', l: 'Geplant / möglich / erst teilweise ↔ schon passiert', tipp: 'Auf Signalwörter achten: soll, geplant, voraussichtlich, erst, noch, bereits, falls, sollten …' },
  U: { t: 'Umschreibung', l: 'Gleiche Bedeutung mit anderen Wörtern nicht erkannt', tipp: 'Synonyme üben: insbesondere notwendig = muss; allein lebend = Single; eröffnen = begrüßen …' },
  D: { t: 'Detail überlesen', l: 'Information aus Kopfzeile, Liste oder Nebensatz übersehen', tipp: 'Auch Protokollkopf, Teilnehmerliste und Nebensätze lesen. Jede Option im Text belegen.' },
  X: { t: '„Passt nicht“ / x', l: 'Erkennt nicht, dass kein Text passt – oder wählt x, obwohl einer passt', tipp: 'Für jede Person prüfen: Beantwortet der Text genau ihre Frage? Ähnliches Thema reicht nicht.' },
  G: { t: 'Weltwissen statt Text', l: 'Antwort klingt logisch, steht aber nicht im Text', tipp: 'Nur das zählt, was im Text steht – nicht, was man selbst weiß oder vermutet.' },
  S: { t: 'Sonstiges', l: 'Andere falsche Wahl', tipp: 'Text und Aufgabe noch einmal gemeinsam lesen.' }
};
export const AB_META = {
  'ab-l16-lesen': {
    bereiche: {
      zuordnung: { t: 'Teil 1 · Thema erkennen und zuordnen', tipp: 'Schlüsselwörter der Person markieren und mit Überschrift + erstem Satz vergleichen. Drei Artikel passen zu niemandem.' },
      rf: { t: 'Teil 2 · Aussagen richtig/falsch prüfen', tipp: 'Die Aussage Wort für Wort mit der Textstelle vergleichen – wer, was, für wen?' },
      detail: { t: 'Teil 2 · Details verstehen (a/b/c)', tipp: 'Jede Option im Text belegen. Was nicht belegt ist, ist falsch.' },
      forum: { t: 'Teil 3 · Fragen und Tipps zuordnen', tipp: 'Was will die Person genau wissen? Ein Tipp zum gleichen Thema ist noch keine Antwort.' },
      x: { t: 'Teil 3 · Erkennen, dass nichts passt', tipp: 'Eine Frage hat keinen passenden Tipp. Prüfen, ob die Frage wirklich beantwortet wird.' },
      protokoll: { t: 'Teil 4 · Protokoll verstehen', tipp: 'Kopf und TOPs nutzen; Zuständigkeiten und Zeitangaben genau lesen.' }
    },
    items: {
      1: { b: 'zuordnung', d: { h: ['L', 'h: „Gebäudereinigung“ steht da – aber es geht um Firmengründung, nicht um Verdienst.'], a: ['G', 'a: Arbeit und Geld allgemein – keine Gebäudereinigung.'] } },
      2: { b: 'zuordnung', d: { b: ['L', 'b: „Bewerbung“ – aber es geht um das Anschreiben, nicht um das Gespräch.'] } },
      3: { b: 'zuordnung', d: {} },
      4: { b: 'zuordnung', d: {} },
      5: { b: 'zuordnung', d: { a: ['L', 'a: „Frauen und Männer“ – aber Thema ist Arbeitslosigkeit und Psyche, nicht Gleichberechtigung.'] } },
      6: { b: 'rf', d: { richtig: ['Z', '„richtig“: Die Firma hat eine interne Konfliktberatung – sie berät keine anderen Firmen.'] } },
      7: { b: 'detail', d: { b: ['Z', 'b: Der Betriebsrat hat die Einführung unterstützt – er löst die Konflikte nicht.'], c: ['G', 'c: Konflikte sind „völlig normal“ – sie sollen früh erkannt und gelöst, nicht verhindert werden.'] } },
      8: { b: 'rf', d: { falsch: ['U', '„falsch“: „insbesondere dann notwendig, wenn ein Arztbesuch erforderlich ist“ = muss gemeldet werden.'] } },
      9: { b: 'detail', d: { b: ['Z', 'b: Die Personalabteilung meldet der Versicherung – nicht man selbst.'], c: ['L', 'c: „Krankenhaus“ steht da – aber zuständig ist der Durchgangsarzt, nicht der Hausarzt.'] } },
      10: { b: 'forum', d: { d: ['L', 'd: „Brief“ – Sebastian spricht über eine angekündigte Krankheit, nicht über den richtigen Weg der Krankmeldung.'], f: ['G', 'f: Es geht um Krankheiten über drei Tage, nicht darum, wie man sich sofort krankmeldet.'], x: ['X', 'x: Tipp b passt (sofort per Telefon/E-Mail/SMS/Fax melden).'] } },
      11: { b: 'forum', d: { c: ['L', 'c: „Fahrradunfall“ – aber es geht um Kündigung, nicht um das Gehalt.'], f: ['G', 'f: Arztbescheinigung – nicht Gehalt.'], x: ['X', 'x: Tipp e passt (6 Wochen Lohnfortzahlung).'] } },
      12: { b: 'x', d: { f: ['X', 'f: Der Arbeitgeber sieht Daten und Dauer – ob man die Krankheit nennen muss, beantwortet kein Tipp.'], a: ['X', 'Kein Tipp beantwortet Nicos Frage → x.'], b: ['X', 'Kein Tipp beantwortet Nicos Frage → x.'], c: ['X', 'Kein Tipp beantwortet Nicos Frage → x.'], d: ['X', 'Kein Tipp beantwortet Nicos Frage → x.'], e: ['X', 'Kein Tipp beantwortet Nicos Frage → x.'] } },
      13: { b: 'forum', d: { x: ['X', 'x: Tipp a passt (Arbeitgeber darf keine Arbeit verlangen).'], c: ['L', 'c: „krank“ – aber es geht um Kündigung.'] } },
      14: { b: 'protokoll', d: { a: ['D', 'a: Maik Bunach (Betriebsrat) steht in der Anwesenheitsliste.'], b: ['Z', 'b: Protokollant ist Bilal Zengin, Leitung Finanzen – keine Assistentin.'] } },
      15: { b: 'protokoll', d: { a: ['D', 'a: Eine neue Produktionshalle wurde gebaut – nicht die alte.'], c: ['M', 'c: Lieferprobleme ja – aber mit mehr Monteuren wird der Zeitplan eingehalten.'] } },
      16: { b: 'protokoll', d: { b: ['M', 'b: Bisher nur in einer Bäckerei getestet – Tests in 10 Bäckereien sind erst geplant.'], c: ['Z', 'c: Frau Lindner hat sie zusammen mit den Bäckermeistern entwickelt.'] } },
      17: { b: 'protokoll', d: { a: ['M', 'a: Es gibt erst „erste Ideen“ – noch lange nicht fertig.'], c: ['Z', 'c: Eine Marketingagentur wurde beauftragt.'] } },
      18: { b: 'protokoll', d: { a: ['Z', 'a: Zum Empfang werden nur Geschäftskunden eingeladen.'], c: ['M', 'c: Überstunden fallen „sicherlich“ an – verpflichtend nur mit Zustimmung des Betriebsrats.'] } }
    }
  }
};
/** Analyse eines Durchgangs: v = Ergebnis (res), B = Bogen aus antwortboegen.js */
export function abAnalyse(v, B) {
  let x = {}; try { x = JSON.parse(v.x || '{}'); } catch (e) { }
  const M = AB_META[B.exId] || { bereiche: {}, items: {} };
  const ant = x.antworten || {}, wech = x.wechsel || {};
  const items = B.teile.flatMap(T => T.items.map(it => ({ ...it, teil: T.titel })));
  const out = { x, teile: {}, bereiche: {}, fehler: {}, falsch: [], leer: [], geaendert: 0, p: 0, n: items.length };
  for (const it of items) {
    const l = atob(it.l), a = ant[it.nr], ok = a === l, m = M.items[it.nr] || {}, b = m.b || 'sonst';
    const T = out.teile[it.teil] || (out.teile[it.teil] = { r: 0, n: 0 }); T.n++;
    const Bb = out.bereiche[b] || (out.bereiche[b] = { r: 0, n: 0 }); Bb.n++;
    if ((wech[it.nr] || 0) > 1) out.geaendert++;
    if (ok) { out.p++; T.r++; Bb.r++; continue; }
    if (a == null) { out.leer.push(it.nr); continue; }
    const [typ, txt] = (m.d || {})[a] || [l === 'x' ? 'X' : a === 'x' ? 'X' : 'S', ''];
    out.fehler[typ] = (out.fehler[typ] || 0) + 1;
    out.falsch.push({ nr: it.nr, teil: it.teil, a, l, typ, txt, b });
  }
  out.pct = Math.round(100 * out.p / out.n);
  for (const o of [...Object.values(out.teile), ...Object.values(out.bereiche)]) o.pct = Math.round(100 * o.r / o.n);
  return out;
}
