// live-medien.js – Live-Aktivitäten „Arbeit und neue Medien“
// Umfrage: Antworten werden nicht bewertet; v = Vergleichswert aus der Bitkom-Umfrage 2017 (Prozent)
export const UMFRAGE = [
  { q: 'Wie oft nutzt du dein Smartphone zum Telefonieren?', funktion: 'Telefonieren', v: 100 },
  { q: 'Wie oft machst du mit dem Handy Fotos oder Videos?', funktion: 'Foto-/Videokamera', v: 90 },
  { q: 'Wie oft suchst du mit dem Handy im Internet (z. B. Google)?', funktion: 'Suchmaschine', v: 79 },
  { q: 'Wie oft hörst du Musik mit dem Handy?', funktion: 'Musik hören', v: 69 },
  { q: 'Wie oft liest du Nachrichten (News) auf dem Handy?', funktion: 'Nachrichten', v: 69 },
  { q: 'Wie oft nutzt du soziale Netzwerke (Instagram, TikTok, Facebook …)?', funktion: 'Soziale Netzwerke', v: 68 },
  { q: 'Wie oft nutzt du das Handy als Navi (Google Maps …)?', funktion: 'Navigation', v: 64 },
  { q: 'Wie oft machst du Online-Banking mit dem Handy?', funktion: 'Online-Banking', v: 46 },
  { q: 'Wie oft kaufst du mit dem Handy online ein?', funktion: 'Online-Shopping', v: 43 }
].map(f => ({ ...f, opts: ['fast jeden Tag', 'manchmal', 'nie'] }));
export const UMFRAGE_EXTRA = [
  { q: 'Könntest du einen Monat ohne Handy leben?', opts: ['Ja, kein Problem!', 'Vielleicht – das wäre schwer.', 'Auf keinen Fall!'] },
  { q: 'Wofür brauchst du das Handy im Beruf am meisten?', opts: ['Telefonieren und Nachrichten', 'E-Mails und Termine', 'Infos suchen, Navi', 'Ich brauche es im Beruf kaum.'] }
];

// Quiz: je … desto/umso (l = richtige Antwort, e = Erklärung)
export const JE_DESTO = [
  { k: 'Satzbau', q: 'Je öfter ich das Handy ausschalte, …', opts: ['desto entspannter lebe ich.', 'desto ich lebe entspannter.', 'desto entspannter ich lebe.', 'desto lebe ich entspannter.'], l: 0, e: 'Nach desto/umso kommt zuerst der Komparativ, dann sofort das Verb: desto entspannter lebe ich.' },
  { k: 'Satzbau', q: 'Je mehr Nachrichten ich bekomme, …', opts: ['umso besser fühle ich mich.', 'umso fühle ich mich besser.', 'umso besser ich fühle mich.', 'umso ich mich besser fühle.'], l: 0, e: 'umso + Komparativ + Verb + Subjekt.' },
  { k: 'Satzbau', q: 'Welcher Nebensatz ist richtig?', opts: ['Je länger ich im Internet surfe, …', 'Je länger surfe ich im Internet, …', 'Je ich länger im Internet surfe, …', 'Je länger ich surfe im Internet, …'], l: 0, e: 'Der je-Satz ist ein Nebensatz: Komparativ direkt nach je, das Verb steht am Ende.' },
  { k: 'Komparativ', q: 'Je ___ ich arbeite, desto müder bin ich.', opts: ['mehr', 'viel', 'meisten', 'mehrere'], l: 0, e: 'viel → mehr → am meisten. Nach je steht immer der Komparativ.' },
  { k: 'Komparativ', q: 'Je ___ ich Deutsch verstehe, umso leichter finde ich Arbeit.', opts: ['besser', 'gut', 'guter', 'am besten'], l: 0, e: 'gut → besser → am besten (unregelmäßig).' },
  { k: 'Komparativ', q: 'Je ___ ich hier lebe, desto mehr Freunde habe ich.', opts: ['länger', 'lang', 'langer', 'am längsten'], l: 0, e: 'lang → länger: Viele kurze Adjektive bekommen im Komparativ einen Umlaut (alt → älter, jung → jünger).' },
  { k: 'Bedeutung', q: 'Je mehr Apps ich verwende, …', opts: ['desto weniger Speicher habe ich.', 'desto mehr Speicher habe ich.', 'desto weniger Apps brauche ich.', 'desto billiger ist mein Handy.'], l: 0, e: 'Zwei Dinge verändern sich zusammen: mehr Apps → weniger freier Speicher.' },
  { k: 'Bedeutung', q: 'Was passt logisch? „Je häufiger ich auf das Internet verzichte, …“', opts: ['umso mehr Zeit habe ich für andere Sachen.', 'umso mehr Zeit verbringe ich online.', 'umso öfter checke ich meine Mails.', 'umso weniger Zeit habe ich für Hobbys.'], l: 0, e: 'Weniger Internet → mehr freie Zeit.' },
  { k: 'Satzbau', q: 'Welcher Satz ist richtig?', opts: ['Je früher wir anfangen, desto schneller sind wir fertig.', 'Je früher anfangen wir, desto schneller sind wir fertig.', 'Je früher wir anfangen, desto schneller wir sind fertig.', 'Je wir früher anfangen, desto wir schneller fertig sind.'], l: 0, e: 'je + Komparativ … Verb am Ende, desto + Komparativ + Verb + Subjekt.' },
  { k: 'Wortstellung', q: 'Man kann den Hauptsatz auch zuerst sagen. Was ist richtig?', opts: ['Ich lebe umso entspannter, je öfter ich das Handy ausschalte.', 'Umso ich lebe entspannter, je öfter ich das Handy ausschalte.', 'Ich lebe entspannter umso, je ich öfter das Handy ausschalte.', 'Je öfter ich das Handy ausschalte, ich lebe umso entspannter.'], l: 0, e: 'Steht der Hauptsatz vorne, bleibt er normal: Subjekt + Verb + umso + Komparativ.' },
  { k: 'Komparativ', q: 'Je ___ ein Handy ist, desto mehr kann es.', opts: ['teurer', 'teuer', 'teuerer', 'am teuersten'], l: 0, e: 'teuer → teurer (das e fällt weg), genauso: dunkel → dunkler.' },
  { k: 'Bedeutung', q: '„desto“ und „umso“ …', opts: ['bedeuten hier dasselbe.', 'stehen immer im Nebensatz.', 'brauchen kein Komparativ.', 'stehen nur am Satzende.'], l: 0, e: 'desto und umso kann man austauschen.' }
];

// Quiz: Grafiken, Reklamation, Wortschatz
export const MEDIEN_QUIZ = [
  { k: 'Grafik', q: 'In der Grafik steht: 64 % nutzen das Handy als Navi. Das sind …', opts: ['ungefähr zwei Drittel.', 'ungefähr ein Viertel.', 'fast die Hälfte.', 'mehr als drei Viertel.'], l: 0, e: '2/3 ≈ 66 %, 1/2 = 50 %, 1/4 = 25 %, 3/4 = 75 %.' },
  { k: 'Grafik', q: '43 % kaufen mit dem Handy online ein. Welche Aussage stimmt?', opts: ['Weniger als die Hälfte kauft online ein.', 'Mehr als die Hälfte kauft online ein.', 'Die meisten kaufen online ein.', 'Fast alle kaufen online ein.'], l: 0, e: '43 % ist weniger als die Hälfte (50 %).' },
  { k: 'Grafik', q: 'Mit welchem Satz beginnt man eine Grafikbeschreibung?', opts: ['Die Grafik zeigt, wofür die Leute ihr Smartphone nutzen.', 'An letzter Stelle steht mit 43 Prozent das Einkaufen.', 'Ich finde diese Grafik wirklich sehr interessant.', 'Die meisten Befragten nutzen das Handy als Kamera.'], l: 0, e: 'Zuerst das Thema nennen, dann Quelle und Befragte, dann die Zahlen.' },
  { k: 'Grafik', q: '„Für die Untersuchung wurden 757 Smartphone-Nutzer ___.“', opts: ['befragt', 'gefragt', 'beantwortet', 'gezeigt'], l: 0, e: 'Bei Umfragen: Personen werden befragt – die Befragten.' },
  { k: 'Grafik', q: 'Welches Wort beschreibt den kleinsten Wert?', opts: ['An letzter Stelle steht …', 'Die am meisten genutzte Funktion ist …', 'Die Mehrheit …', 'An erster Stelle steht …'], l: 0, e: 'An erster Stelle = am meisten, an letzter Stelle = am wenigsten.' },
  { k: 'Reklamation', q: 'Was gehört NICHT in eine schriftliche Reklamation?', opts: ['die Größe des Druckers', 'die Typenbezeichnung', 'die Fehlerbeschreibung', 'Ort und Datum des Kaufs'], l: 0, e: 'Wichtig sind: Betreff, Kaufdatum und -ort, Kaufpreis, Produkt- und Typenbezeichnung, Fehlerbeschreibung.' },
  { k: 'Reklamation', q: '„Ich nehme Bezug auf ___ Telefongespräch vom Montag.“', opts: ['unser', 'unseren', 'unserem', 'unsere'], l: 0, e: 'Bezug nehmen auf + Akkusativ: das Telefongespräch → unser Telefongespräch.' },
  { k: 'Reklamation', q: '„… möchte hiermit unseren Firmendrucker ___ Typ YZ 870 reklamieren.“', opts: ['vom', 'zum', 'beim', 'mit dem'], l: 0, e: 'ein Drucker vom Typ … – feste Wendung.' },
  { k: 'Reklamation', q: '„___ dabei Kosten entstehen sollten, bitte ich Sie, sich vorher mit mir in Verbindung zu setzen.“', opts: ['Falls', 'Ob', 'Wie', 'Damit'], l: 0, e: 'falls = wenn (eine Bedingung, die vielleicht eintritt).' },
  { k: 'Reklamation', q: '„Natürlich käme auch der Austausch des Geräts ___ ein anderes in Betracht.“', opts: ['gegen', 'für', 'mit', 'zu'], l: 0, e: 'etwas gegen etwas anderes austauschen.' },
  { k: 'Reklamation', q: '„… und bitte Sie, mir den Eingang meiner Reklamation schriftlich ___ bestätigen.“', opts: ['zu', 'um', 'für', 'damit'], l: 0, e: 'bitten, etwas zu tun – Infinitiv mit zu.' },
  { k: 'Wortschatz', q: 'Das Gerät ist kaputt, weil der Kunde es falsch benutzt hat. Das ist ein …', opts: ['Bedienfehler.', 'Gerätefehler.', 'Lieferfehler.', 'Druckfehler.'], l: 0, e: 'Bedienfehler: der Benutzer hat etwas falsch gemacht. Gerätefehler: das Gerät selbst ist defekt.' },
  { k: 'Wortschatz', q: 'Was ist bei einem Gerätefehler in der Garantiezeit normalerweise?', opts: ['Die Reparatur ist kostenlos.', 'Der Kunde zahlt alles.', 'Man bekommt kein Geld zurück.', 'Man muss ein neues Gerät kaufen.'], l: 0, e: 'In der Garantiezeit trägt der Hersteller die Kosten für Gerätefehler.' },
  { k: 'Nomen-Verb', q: '„Wir möchten Ihren Reparaturservice in Anspruch ___.“', opts: ['nehmen', 'bringen', 'setzen', 'stellen'], l: 0, e: 'etwas in Anspruch nehmen = etwas nutzen.' },
  { k: 'Nomen-Verb', q: '„… wie ich im Internet in Erfahrung ___ habe.“', opts: ['gebracht', 'genommen', 'gesetzt', 'gekommen'], l: 0, e: 'etwas in Erfahrung bringen = etwas herausfinden.' }
];
