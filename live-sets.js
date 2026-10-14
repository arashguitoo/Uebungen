// live-sets.js – alle Fragensätze für die Live-Runden (Beamer: live-studio.html, Handys: live.html)
// Jede Frage: { q, opts, l?, e?, k? } – bei Umfragen ohne l (keine richtige Antwort).
import { FRAGEN as SMALLTALK, KATEGORIEN } from './smalltalk-daten.js?v=20261014a';
import { UMFRAGE, UMFRAGE_EXTRA, JE_DESTO, MEDIEN_QUIZ } from './live-medien.js?v=20261014a';

export const SETS = {
  'medien-umfrage': {
    titel: 'Umfrage: Wie nutzt ihr euer Handy?', icon: '📊', farbe: '#2f6fc4', umfrage: true, dauer: 25,
    kurz: 'Live-Umfrage zum Einstieg – am Ende entsteht eure eigene Grafik zum Vergleich mit der Umfrage aus dem Buch.',
    quelle: 'Linie 1 Beruf · Lektion 11', grafik: true,
    fragen: [...UMFRAGE, ...UMFRAGE_EXTRA]
  },
  'je-desto': {
    titel: 'Je schneller, desto besser!', icon: '⚡', farbe: '#d9483b', dauer: 20,
    kurz: 'Live-Quiz zu je … desto / umso: Satzbau, Komparativ, Bedeutung.',
    quelle: 'Linie 1 Beruf · Lektion 11', fragen: JE_DESTO
  },
  'medien-quiz': {
    titel: 'Grafik, Drucker & Co.', icon: '🖨️', farbe: '#2e9a57', dauer: 25,
    kurz: 'Live-Quiz: Grafiken beschreiben, Reklamation schreiben, Wortschatz.',
    quelle: 'Linie 1 Beruf · Lektion 11', fragen: MEDIEN_QUIZ
  },
  'smalltalk': {
    titel: 'Smalltalk-Profi', icon: '💬', farbe: '#b5562f', dauer: 20,
    kurz: 'Smalltalk bei der Arbeit: Themen, Begriffe, Reaktionen, Du oder Sie.',
    fragen: SMALLTALK, kategorien: KATEGORIEN
  }
};
