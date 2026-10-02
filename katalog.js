// katalog.js – DIE zentrale Liste aller Übungen.
// Neue Übung = HTML-Datei in diesen Ordner legen + hier einen Eintrag ergänzen.
// id: eindeutig, nur Kleinbuchstaben, Ziffern und Bindestriche (wird in der Datenbank benutzt)
// offen: Standard, ob die Übung ohne Code spielbar ist (in der Konsole umschaltbar)

// Trainings (JSON-Pakete): datei 'training.html?set=<Dateiname ohne .json>', id = "id" in der JSON-Datei, teile = Anzahl Teile

export const KATALOG = [
  {
    id: 'neue-wege-im-beruf',
    titel: 'Neue Wege im Beruf',
    untertitel: 'Pendeln oder umziehen · Wortstellung · Agentur für Arbeit · Anerkennung · Anfragen schreiben',
    datei: 'training.html?set=neue-wege-im-beruf',
    typ: 'Training',
    niveau: 'B1/B2',
    themen: ['Prüfungsvorbereitung', 'Beruf'],
    farbe: '#0f6aa6',
    dauer: '6 Teile',
    teile: 6,
    reihe: 'Prüfungstraining B1/B2',
    offen: true
  },
  {
    id: 'der-weg-zum-job',
    titel: 'Der Weg zum Job',
    untertitel: 'Berufe · zweiteilige Konnektoren · Lebenslauf · Ausbildungswege · Bewerbung · Termine',
    datei: 'training.html?set=der-weg-zum-job',
    typ: 'Training',
    niveau: 'B1/B2',
    themen: ['Prüfungsvorbereitung', 'Beruf'],
    farbe: '#13836b',
    dauer: '7 Teile',
    teile: 7,
    reihe: 'Prüfungstraining B1/B2',
    offen: true
  },
  {
    id: 'ankommen-im-betrieb',
    titel: 'Ankommen im Betrieb',
    untertitel: 'Abteilungen · erster Arbeitstag · Vergleiche · Regeln · Small Talk · das Wort „es“ · Mails und Aufträge',
    datei: 'training.html?set=ankommen-im-betrieb',
    typ: 'Training',
    niveau: 'B1/B2',
    themen: ['Prüfungsvorbereitung', 'Beruf'],
    farbe: '#c2611f',
    dauer: '8 Teile',
    teile: 8,
    reihe: 'Prüfungstraining B1/B2',
    offen: true
  },
  {
    id: 'handel-kontor',
    titel: 'Das Handelskontor',
    untertitel: 'Wortschatz Handel · indem, damit, um … zu, ohne dass, statt dass',
    datei: 'handel-kontor.html',
    typ: 'Spiel',
    niveau: 'B2',
    themen: ['Handel', 'Konnektoren', 'Beruf'],
    farbe: '#1f6f78',
    dauer: '20 Min.',
    aufgaben: 36,
    reihe: 'Spiele',
    offen: true
  },
  {
    id: 'partizip-presse',
    titel: 'Die Satzpresse',
    untertitel: 'Partizip I und II als Adjektiv – statt Relativsatz',
    datei: 'partizip-presse.html',
    typ: 'Spiel',
    niveau: 'B2',
    themen: ['Grammatik', 'Partizipien', 'Relativsätze'],
    farbe: '#7a3b69',
    dauer: '20 Min.',
    aufgaben: 30,
    reihe: 'Spiele',
    offen: true
  }
];

export const exById = id => KATALOG.find(e => e.id === id);
