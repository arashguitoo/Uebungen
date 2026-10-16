// feedback-kriterien.js – Checklisten und Kriterien für das Lehrer-Feedback (Konsole) und „Mein Lernstand“ (Teilnehmende)
// Grundlage: Aufbau und Bewertung des Deutsch-Tests für den Beruf (DTB) B2 – Abschlussprüfung der Berufssprachkurse (BSK).
// Listen und Punkte lassen sich hier jederzeit ergänzen; vorhandene ids nicht umbenennen (sonst gehen Einträge verloren).

export const SKALEN = {
  // Vorbereitungsstand
  stand: { name: 'Vorbereitungsstand', werte: [
    { v: 1, k: 'begonnen', l: 'begonnen', c: '#fbe0db', f: '#b3402f' },
    { v: 2, k: 'geübt', l: 'geübt', c: '#fdf0cf', f: '#8a6410' },
    { v: 3, k: 'sicher', l: 'prüfungsreif', c: '#d9f2e2', f: '#1d7a45' }] },
  // Bewertungsstufen wie in der DTB-Bewertung
  abcd: { name: 'Niveau (DTB-Stufen)', werte: [
    { v: 4, k: 'A', l: 'A · B2 gut erreicht', c: '#cdeedb', f: '#14663a' },
    { v: 3, k: 'B', l: 'B · B2 erreicht', c: '#e3f3d2', f: '#4a7a16' },
    { v: 2, k: 'C', l: 'C · B1-Niveau', c: '#fdf0cf', f: '#8a6410' },
    { v: 1, k: 'D', l: 'D · unter B1', c: '#fbe0db', f: '#b3402f' }] },
  // Lernverhalten im Kurs
  lern: { name: 'Einschätzung', werte: [
    { v: 4, k: '++', l: '++ sehr gut', c: '#cdeedb', f: '#14663a' },
    { v: 3, k: '+', l: '+ gut', c: '#e3f3d2', f: '#4a7a16' },
    { v: 2, k: 'o', l: 'o ausbaufähig', c: '#fdf0cf', f: '#8a6410' },
    { v: 1, k: '–', l: '– braucht Unterstützung', c: '#fbe0db', f: '#b3402f' }] }
};

/* Jede Liste: id, titel, skala, tn (für Teilnehmende sichtbar, wenn veröffentlicht), selbst (Selbsteinschätzung möglich) */
export const LISTEN = [
  {
    id: 't1a', titel: 'Sprechen Teil 1A – die 8 Themen', kurz: 'Teil 1A', skala: 'stand', tn: true, selbst: true,
    info: 'Ein Thema auswählen und ca. 2 Minuten frei darüber sprechen – ohne Vorbereitungszeit und ohne Notizen. In Teil 1B stellen Partner/in und Prüfende Rückfragen dazu.',
    items: [
      { id: 'arbeitgeber', t: 'Mein bisheriger Arbeitgeber', h: 'Branche und Größe · eigene Aufgaben · was gut / weniger gut war · warum gewechselt · Vergleich mit Deutschland' },
      { id: 'umfeld', t: 'Ein gutes Arbeitsumfeld', h: 'Teamklima und Kolleg/innen · Führungsstil · Arbeitsplatz und Ausstattung · Arbeitszeit und Work-Life-Balance · eigenes Beispiel' },
      { id: 'beruf', t: 'Mein Beruf / meine Berufsausbildung', h: 'Ausbildungsweg · typische Tätigkeiten · Anforderungen · Anerkennung in Deutschland · Pläne für die Zukunft' },
      { id: 'vorstellung', t: 'Ein Vorstellungsgespräch', h: 'eigene Erfahrung · Vorbereitung · typische Fragen · Fehler vermeiden · Unterschiede Heimatland / Deutschland' },
      { id: 'berufswahl', t: 'Meine Berufswahl', h: 'Wie habe ich mich entschieden? · Einflüsse (Familie, Interessen, Chancen) · Würde ich wieder so wählen? · Tipps für andere' },
      { id: 'wunschfirma', t: 'Ein Unternehmen, für das ich gern arbeiten würde', h: 'Welches Unternehmen und warum · Werte und Arbeitsbedingungen · meine Rolle dort · Wie würde ich mich bewerben?' },
      { id: 'erfahrungen', t: 'Meine bisherigen Berufserfahrungen', h: 'Stationen · wichtigste Erfahrung · ein Erfolg / eine Herausforderung · Was habe ich gelernt? · Nutzen für die Arbeit in Deutschland' },
      { id: 'selbststaendig', t: 'Sich selbstständig machen (Geschäftsidee)', h: 'Idee und Zielgruppe · Startkapital und Finanzierung · Risiken · Vor- und Nachteile der Selbstständigkeit' }
    ]
  },
  {
    id: 'muendlich', titel: 'Mündliche Prüfung – Prüfungsteile', kurz: 'Mündlich', skala: 'stand', tn: true,
    items: [
      { id: 'm1a', t: 'Teil 1A – frei sprechen (ca. 2 Min.)', h: 'klare Gliederung (Einstieg – Erfahrungen – Beispiel – Bewertung – Schluss), ohne Notizen' },
      { id: 'm1b', t: 'Teil 1B – auf Rückfragen reagieren', h: 'spontan antworten, nachfragen, Zeit gewinnen mit Redemitteln; selbst eine Frage an die Partnerin / den Partner stellen' },
      { id: 'm2', t: 'Teil 2 – über ein Thema diskutieren', h: 'Meinung äußern und begründen, Beispiele geben, auf Argumente eingehen, widersprechen, zustimmen' },
      { id: 'm3', t: 'Teil 3 – gemeinsam ein Problem lösen', h: 'Vorschläge machen, abwägen, Kompromisse finden, zu einer Lösung kommen', ex: 'problem-loesen' },
      { id: 'mst', t: 'Smalltalk und Gesprächsführung', h: 'Gespräch beginnen und beenden, Sie/du, Höflichkeitsformen', ex: 'smalltalk' }
    ]
  },
  {
    id: 'schriftlich', titel: 'Schriftliche Prüfung – Prüfungsteile', kurz: 'Schriftlich', skala: 'stand', tn: true,
    items: [
      { id: 'h1', t: 'Hören Teil 1', h: 'kurze Ansagen und Durchsagen am Arbeitsplatz' },
      { id: 'h2', t: 'Hören Teil 2', h: 'Gespräche im Berufsalltag' },
      { id: 'h3', t: 'Hören Teil 3', h: 'Telefonate und Besprechungen' },
      { id: 'h4', t: 'Hören Teil 4', h: 'längere Beiträge, Diskussion / Vortrag' },
      { id: 'hs', t: 'Hören und Schreiben – Telefonnotiz', h: 'Name, Kontakt, Anliegen und Aufgaben notieren (nur einmal hören)' },
      { id: 'l1', t: 'Lesen Teil 1', h: 'Überschriften / Texte zuordnen', ex: 'fokus-lesen' },
      { id: 'l2', t: 'Lesen Teil 2', h: 'Detailverstehen', ex: 'fokus-lesen' },
      { id: 'l3', t: 'Lesen Teil 3', h: 'Situationen und Anzeigen zuordnen', ex: 'fokus-lesen' },
      { id: 'l4', t: 'Lesen Teil 4', h: 'Regeln, Vorschriften, Aushänge', ex: 'fokus-lesen' },
      { id: 'ls', t: 'Lesen und Schreiben – Kunden-E-Mail', h: 'im Auftrag der Teamleitung antworten, alle Punkte bearbeiten, formeller Stil' },
      { id: 'sb', t: 'Sprachbausteine', h: 'Grammatik und Wortschatz im Kontext (u. a. Präpositionen, Konnektoren)', ex: 'verben-praep' },
      { id: 'sf', t: 'Schreiben – Forumsbeitrag', h: 'Meinung begründen, Beispiele, klare Struktur' }
    ]
  },
  {
    id: 'ksprechen', titel: 'Kriterien Sprechen', kurz: 'Krit. Sprechen', skala: 'abcd', tn: true,
    info: 'Orientiert an der Bewertung der mündlichen DTB-Prüfung (Stufen A–D).',
    items: [
      { id: 'ka', t: 'Aufgabenerfüllung', h: 'Inhalt passend und ausführlich genug, Aufgabe vollständig bearbeitet' },
      { id: 'kk', t: 'Kommunikative Gestaltung', h: 'Gesprächsführung, Interaktion, Strukturierung, auf andere eingehen' },
      { id: 'kf', t: 'Formale Richtigkeit', h: 'Grammatik und Satzbau' },
      { id: 'ks', t: 'Spektrum: Wortschatz und Strukturen', h: 'Bandbreite und Genauigkeit, Berufswortschatz, Redemittel' },
      { id: 'kp', t: 'Aussprache und Intonation', h: 'Laute, Wortakzent, Satzmelodie, Verständlichkeit' }
    ]
  },
  {
    id: 'kschreiben', titel: 'Kriterien Schreiben', kurz: 'Krit. Schreiben', skala: 'abcd', tn: true,
    info: 'Wie in der DTB-Bewertung: Aufgabenerfüllung je Text, die anderen Kriterien für alle Texte gemeinsam (Stufen A–D).',
    items: [
      { id: 'wa', t: 'Aufgabenerfüllung', h: 'alle Inhaltspunkte bearbeitet, passend zur Textsorte (E-Mail, Forumsbeitrag)' },
      { id: 'wk', t: 'Kommunikative Gestaltung', h: 'Aufbau, Absätze, Konnektoren, Register (Anrede, Gruß, formell / halbformell)' },
      { id: 'wf', t: 'Formale Richtigkeit', h: 'Grammatik, Satzbau, Rechtschreibung' },
      { id: 'ws', t: 'Spektrum: Wortschatz und Strukturen', h: 'Bandbreite, Nomen-Verb-Verbindungen, Nebensätze' }
    ]
  },
  {
    id: 'lernen', titel: 'Lernverhalten im Kurs', kurz: 'Lernen', skala: 'lern', tn: false,
    items: [
      { id: 'anw', t: 'Anwesenheit und Pünktlichkeit' },
      { id: 'mit', t: 'Mitarbeit und Beteiligung' },
      { id: 'ha', t: 'Hausaufgaben' },
      { id: 'selbst', t: 'Selbstständiges Üben (Übungszentrale)' },
      { id: 'wort', t: 'Wortschatzarbeit' },
      { id: 'strat', t: 'Prüfungsstrategien (Zeit, Antwortbogen)' },
      { id: 'mut', t: 'Mut zum Sprechen' }
    ]
  }
];

/* Schnell-Merkmale für Stärken / Schwächen (Klick: Stärke → Arbeitsfeld → aus) */
export const MERKMALE = [
  { g: 'Grammatik', l: [['satzbau', 'Satzbau / Verbposition'], ['nebens', 'Nebensätze und Konnektoren'], ['kasus', 'Kasus und Präpositionen'], ['adj', 'Adjektivendungen'], ['tempus', 'Verbformen und Tempus'], ['passiv', 'Passiv'], ['konj2', 'Konjunktiv II (Höflichkeit)']] },
  { g: 'Wortschatz', l: [['beruf', 'Berufswortschatz'], ['nvv', 'Nomen-Verb-Verbindungen'], ['rmMeinung', 'Redemittel Meinung / Argumente'], ['rmPlanen', 'Redemittel Vorschläge / Einigung'], ['register', 'Register (Sie / du, formell)']] },
  { g: 'Sprechen', l: [['fluss', 'Flüssigkeit'], ['laute', 'Aussprache (Laute)'], ['melodie', 'Betonung und Satzmelodie'], ['rueck', 'Auf Rückfragen reagieren'], ['struktur', 'Struktur / roter Faden'], ['interakt', 'Auf andere eingehen']] },
  { g: 'Schreiben', l: [['aufbau', 'Textaufbau und Absätze'], ['anrede', 'Anrede, Bezug, Gruß'], ['punkte', 'Alle Inhaltspunkte'], ['rechtschr', 'Rechtschreibung']] },
  { g: 'Hören / Lesen / Strategie', l: [['hdetail', 'Hören: Details'], ['lglobal', 'Lesen: global'], ['ldetail', 'Lesen: Details'], ['zeit', 'Zeitmanagement']] }
];
export const MERKMAL = Object.fromEntries(MERKMALE.flatMap(g => g.l));

export const skalaVon = liste => SKALEN[liste.skala];
export const wertInfo = (liste, v) => skalaVon(liste).werte.find(w => w.v === v) || null;
/** Fortschritt einer Liste in Prozent (0 = nichts eingetragen) */
export function prozent(liste, c = {}) {
  const max = Math.max(...skalaVon(liste).werte.map(w => w.v));
  const s = liste.items.reduce((a, it) => a + ((c[liste.id + '_' + it.id] || {}).s || 0), 0);
  return Math.round(100 * s / (max * liste.items.length));
}
