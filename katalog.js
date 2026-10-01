// katalog.js – DIE zentrale Liste aller Übungen.
// Neue Übung = HTML-Datei in diesen Ordner legen + hier einen Eintrag ergänzen.
// id: eindeutig, nur Kleinbuchstaben, Ziffern und Bindestriche (wird in der Datenbank benutzt)
// offen: Standard, ob die Übung ohne Code spielbar ist (in der Konsole umschaltbar)

export const KATALOG = [
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
    offen: true
  }
];

export const exById = id => KATALOG.find(e => e.id === id);
