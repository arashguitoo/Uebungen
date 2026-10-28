// schreib-daten.js – Schreibwerkstatt: Schreibaufgaben zum Abgeben, Trainingsmodule und automatische Textanalyse.
// Aufgabe: id, titel, art (email-formell | email-halbformell | forum | notiz), niveau, worte [min, max], zeit (Min.),
//   situation (Text), material (optional: Text, den man lesen muss), punkte [{ t, kw: Regex-Quelle }]
// Ids nie ändern – abgegebene Texte verweisen darauf.

export const ARTEN = {
  'email-formell':     { t: 'E-Mail (formell)', ic: '✉️', register: 'formell' },
  'email-halbformell': { t: 'E-Mail (halbformell)', ic: '📨', register: 'halbformell' },
  'forum':             { t: 'Forumsbeitrag', ic: '💬', register: 'neutral' },
  'notiz':             { t: 'Notiz', ic: '📝', register: 'neutral' }
};

export const AUFGABEN = [
  {
    id: 'kunden-email-lieferung', titel: 'Kunden-E-Mail: unvollständige Lieferung', art: 'email-formell', niveau: 'B2', worte: [100, 150], zeit: 20,
    situation: 'Sie arbeiten im Kundenservice der Büroprofi GmbH. Ihre Teamleiterin, Frau Brandt, bittet Sie, die E-Mail des Kunden zu beantworten. Bearbeiten Sie alle Punkte aus ihrer Notiz.',
    material: 'E-Mail von Herrn Lorenz (Kunde):\n„Sehr geehrte Damen und Herren, wir haben bei Ihnen 20 Bürostühle bestellt. Geliefert wurden nur 15 – und drei davon sind beschädigt. Am Montag beginnen fünf neue Mitarbeitende bei uns, die Stühle brauchen wir also dringend. Wenn das Problem nicht schnell gelöst wird, stornieren wir unsere Bestellung. Mit freundlichen Grüßen, Thomas Lorenz“\n\nNotiz von Frau Brandt:\n„Bitte entschuldigen, Grund kurz erklären (Lieferengpass beim Hersteller), fehlende und beschädigte Stühle bis Freitag kostenlos per Express, 10 % Rabatt auf die nächste Bestellung anbieten.“',
    punkte: [
      { t: 'sich entschuldigen', kw: 'entschuldig|bedauer|tut (uns|mir) leid' },
      { t: 'den Grund erklären (Lieferengpass)', kw: 'hersteller|engpass|lieferschwierig|lieferproblem' },
      { t: 'Lieferung bis Freitag anbieten', kw: 'freitag|express' },
      { t: '10 % Rabatt anbieten', kw: 'rabatt|prozent|%|nachlass|gutschrift' }
    ]
  },
  {
    id: 'forum-homeoffice', titel: 'Forumsbeitrag: Homeoffice für alle?', art: 'forum', niveau: 'B2', worte: [130, 200], zeit: 25,
    situation: 'In einem Online-Forum für Berufstätige wird diskutiert: „Sollten alle Beschäftigten das Recht haben, im Homeoffice zu arbeiten?“ Schreiben Sie einen Beitrag. Nennen Sie Ihre Meinung, Vor- und Nachteile, ein Beispiel aus Ihrer Erfahrung und ein Fazit.',
    punkte: [
      { t: 'eigene Meinung', kw: 'meiner meinung|ich finde|ich bin der (ansicht|meinung)|ich denke|ich glaube|meines erachtens|aus meiner sicht' },
      { t: 'Vorteile', kw: 'vorteil|positiv|spart|flexib|dafür spricht' },
      { t: 'Nachteile', kw: 'nachteil|negativ|problem|dagegen spricht|allerdings|jedoch' },
      { t: 'Beispiel / eigene Erfahrung', kw: 'zum beispiel|z\\. ?b\\.|beispielsweise|erfahrung|bei uns|ich selbst|in meiner firma' },
      { t: 'Fazit', kw: 'fazit|zusammenfassend|insgesamt|alles in allem|abschließend|deshalb bin ich' }
    ]
  },
  {
    id: 'forum-deutschkurs', titel: 'Forumsbeitrag: Deutschkurs während der Arbeitszeit?', art: 'forum', niveau: 'B2', worte: [130, 200], zeit: 25,
    situation: 'Im Forum einer Zeitung wird gefragt: „Sollten Arbeitgeber Deutschkurse für ihre Beschäftigten bezahlen – und zwar während der Arbeitszeit?“ Schreiben Sie einen Beitrag mit Ihrer Meinung, Argumenten dafür und dagegen, einem Beispiel und einem Fazit.',
    punkte: [
      { t: 'eigene Meinung', kw: 'meiner meinung|ich finde|ich bin der (ansicht|meinung)|ich denke|ich glaube|meines erachtens|aus meiner sicht' },
      { t: 'Argumente dafür', kw: 'dafür spricht|vorteil|positiv|hilft|profitier' },
      { t: 'Argumente dagegen', kw: 'dagegen spricht|nachteil|kosten|allerdings|jedoch|andererseits' },
      { t: 'Beispiel / eigene Erfahrung', kw: 'zum beispiel|z\\. ?b\\.|beispielsweise|erfahrung|ich selbst|bei uns' },
      { t: 'Fazit', kw: 'fazit|zusammenfassend|insgesamt|alles in allem|abschließend' }
    ]
  },
  {
    id: 'forum-vier-tage', titel: 'Forumsbeitrag: Vier-Tage-Woche', art: 'forum', niveau: 'B2', worte: [130, 200], zeit: 25,
    situation: 'In einem Forum wird diskutiert: „Vier-Tage-Woche bei vollem Lohn – eine gute Idee für alle Branchen?“ Schreiben Sie einen Beitrag mit Ihrer Meinung, Vor- und Nachteilen, einem Beispiel und einem Fazit.',
    punkte: [
      { t: 'eigene Meinung', kw: 'meiner meinung|ich finde|ich bin der (ansicht|meinung)|ich denke|ich glaube|meines erachtens|aus meiner sicht' },
      { t: 'Vorteile', kw: 'vorteil|positiv|erhol|motiv|dafür spricht' },
      { t: 'Nachteile', kw: 'nachteil|negativ|problem|dagegen spricht|allerdings|jedoch' },
      { t: 'Beispiel / Branche', kw: 'zum beispiel|z\\. ?b\\.|beispielsweise|pflege|handwerk|gastronomie|logistik|erfahrung' },
      { t: 'Fazit', kw: 'fazit|zusammenfassend|insgesamt|alles in allem|abschließend' }
    ]
  },
  {
    id: 'beschwerde-waschmaschine', titel: 'Beschwerde: defekte Waschmaschine', art: 'email-formell', niveau: 'B1/B2', worte: [100, 150], zeit: 20,
    situation: 'Sie haben vor zwei Wochen bei der Firma Elektro Sommer eine Waschmaschine gekauft. Seit drei Tagen funktioniert sie nicht mehr. Ein Techniker sollte gestern kommen, ist aber nicht erschienen. Schreiben Sie eine Beschwerde.',
    punkte: [
      { t: 'Kauf beschreiben (wann, was)', kw: 'gekauft|kauf|bestellt|erworben' },
      { t: 'Problem beschreiben', kw: 'funktioniert nicht|kaputt|defekt|problem|geht nicht' },
      { t: 'verpassten Termin erwähnen', kw: 'termin|techniker|gewartet|nicht (gekommen|erschienen)' },
      { t: 'Forderung stellen', kw: 'erwarte|fordere|bitte sie|ersatz|neue maschine|geld zurück|erstatt|reparatur' }
    ]
  },
  {
    id: 'anfrage-weiterbildung', titel: 'Anfrage: Weiterbildung Lagerlogistik', art: 'email-formell', niveau: 'B1/B2', worte: [90, 140], zeit: 20,
    situation: 'Sie haben die Anzeige eines Bildungszentrums gelesen: „Weiterbildung zur Fachkraft für Lagerlogistik – berufsbegleitend“. Schreiben Sie eine E-Mail an das Bildungszentrum.',
    punkte: [
      { t: 'Grund für Ihr Interesse', kw: 'interess|arbeite|beruflich|weiterbild|qualifi' },
      { t: 'Kosten und Förderung', kw: 'kost|preis|gebühr|förder|bildungsgutschein' },
      { t: 'Kurszeiten (berufsbegleitend)', kw: 'zeit|abend|wochenende|samstag|berufsbegleitend|wann' },
      { t: 'Anmeldung / Unterlagen', kw: 'anmeld|unterlagen|voraussetzung|bewerb|dokument' }
    ]
  },
  {
    id: 'telefonnotiz', titel: 'Telefonnotiz für einen Kollegen', art: 'notiz', niveau: 'B1/B2', worte: [35, 80], zeit: 10,
    situation: 'Sie nehmen im Büro einen Anruf für Ihren Kollegen Herrn Becker entgegen. Lesen Sie, was die Anruferin sagt, und schreiben Sie eine Notiz für Herrn Becker.',
    material: 'Anruf:\n„Guten Tag, hier spricht Leyla Yilmaz von Kraft Logistik. Ich rufe wegen der Lieferung für Herrn Becker an. Die Ware kommt leider nicht am Dienstag, sondern erst am Donnerstag. Außerdem brauche ich von Herrn Becker noch die genaue Lieferadresse – das neue Lager oder das alte? Er soll mich bitte heute bis 14 Uhr zurückrufen, meine Nummer ist 0431 55 12 87. Vielen Dank!“',
    punkte: [
      { t: 'Wer hat angerufen? (Name, Firma)', kw: 'yilmaz|kraft' },
      { t: 'Lieferung erst am Donnerstag', kw: 'donnerstag' },
      { t: 'Frage nach der Lieferadresse', kw: 'adresse|lager' },
      { t: 'Rückruf bis 14 Uhr + Nummer', kw: '14|0431|55 ?12 ?87' }
    ]
  },
  {
    id: 'krankmeldung', titel: 'Krankmeldung an die Teamleitung', art: 'email-halbformell', niveau: 'B1', worte: [60, 110], zeit: 15,
    situation: 'Sie sind krank und können heute nicht zur Arbeit kommen. Schreiben Sie Ihrem Teamleiter, Herrn Schulz, eine E-Mail.',
    punkte: [
      { t: 'Bescheid geben, dass Sie krank sind', kw: 'krank|erkält|fieber|nicht kommen' },
      { t: 'wie lange Sie voraussichtlich fehlen', kw: 'tag|woche|bis|voraussichtlich|morgen' },
      { t: 'Krankmeldung (AU) wird nachgereicht', kw: 'krankmeldung|au\\b|arbeitsunfähig|attest|arzt|bescheinigung' },
      { t: 'wer die dringende Aufgabe übernimmt', kw: 'übernehm|kolleg|vertret|übergab|erledig' }
    ]
  },
  {
    id: 'termin-absagen', titel: 'Termin absagen und neu vorschlagen', art: 'email-formell', niveau: 'B1', worte: [60, 110], zeit: 15,
    situation: 'Sie haben morgen um 10 Uhr einen Termin bei Frau Kaya in der Agentur für Arbeit. Sie können nicht kommen. Schreiben Sie eine E-Mail.',
    punkte: [
      { t: 'Termin absagen', kw: 'absag|nicht kommen|nicht wahrnehmen|verschieb' },
      { t: 'Grund nennen', kw: 'weil|da |leider|krank|arbeit|kind|grund' },
      { t: 'neuen Termin vorschlagen', kw: 'vorschlag|vorschlagen|passt|möglich|montag|dienstag|mittwoch|donnerstag|freitag|neuen termin' },
      { t: 'um Bestätigung / Antwort bitten', kw: 'bestätig|antwort|rückmeld|bescheid' }
    ]
  },
  {
    id: 'bewerbung-kurz', titel: 'Kurzbewerbung: Fachkraft Lagerlogistik', art: 'email-formell', niveau: 'B2', worte: [140, 220], zeit: 30,
    situation: 'Die Spedition Nordlicht sucht eine „Fachkraft für Lagerlogistik (m/w/d) in Vollzeit, gern mit Staplerschein“. Schreiben Sie eine Bewerbungs-E-Mail an Frau Petersen aus der Personalabteilung.',
    punkte: [
      { t: 'Bezug auf die Stellenanzeige', kw: 'anzeige|stelle|ausschreibung|gelesen|gesehen' },
      { t: 'Qualifikation und Erfahrung', kw: 'erfahrung|ausbildung|gearbeitet|tätig|kenntnisse|staplerschein' },
      { t: 'Motivation: Warum diese Firma?', kw: 'motiv|interess|gern|freue|warum|weil' },
      { t: 'Verfügbarkeit / Bitte um Gespräch', kw: 'gespräch|vorstellungs|ab sofort|verfügbar|anfangen|beginnen|eintritt' }
    ]
  },
  {
    id: 'uebergabe-urlaub', titel: 'Übergabe vor dem Urlaub', art: 'email-halbformell', niveau: 'B1/B2', worte: [80, 140], zeit: 20,
    situation: 'Sie gehen morgen für zwei Wochen in den Urlaub. Ihre Kollegin, Frau Novak, vertritt Sie. Schreiben Sie ihr eine E-Mail mit den wichtigsten Informationen.',
    punkte: [
      { t: 'laufende Aufträge', kw: 'auftrag|aufträge|bestellung|projekt|laufend' },
      { t: 'wichtige Termine', kw: 'termin|uhr|montag|dienstag|mittwoch|donnerstag|freitag|frist' },
      { t: 'wo die Unterlagen sind', kw: 'unterlagen|ordner|datei|server|schreibtisch|liegen' },
      { t: 'Ansprechpartner bei Fragen', kw: 'ansprech|fragen|wenden|erreich|kontakt' }
    ]
  },
  {
    id: 'beschwerde-dienstplan', titel: 'E-Mail an die Personalabteilung: Dienstplan', art: 'email-formell', niveau: 'B2', worte: [110, 170], zeit: 25,
    situation: 'In den letzten Wochen haben Sie oft kurzfristig Überstunden machen müssen; der Dienstplan wird erst am Freitag für die nächste Woche veröffentlicht. Schreiben Sie an die Personalabteilung.',
    punkte: [
      { t: 'Situation beschreiben', kw: 'überstunden|dienstplan|kurzfristig|schicht' },
      { t: 'Folgen für Sie erklären', kw: 'familie|kinder|betreuung|müde|planen|privat|folge' },
      { t: 'Vorschlag machen', kw: 'vorschlag|schlage|wäre es möglich|könnte|früher|zwei wochen' },
      { t: 'um ein Gespräch bitten', kw: 'gespräch|termin|besprechen|treffen' }
    ]
  }
];

/* Redemittel-Hilfen je Textart (beim Schreiben ausklappbar) */
export const REDEMITTEL = {
  'email-formell': [
    ['Anrede', 'Sehr geehrte Damen und Herren, · Sehr geehrte Frau …, · Sehr geehrter Herr …,'],
    ['Einleitung', 'vielen Dank für Ihre E-Mail vom … · ich schreibe Ihnen, weil … · mit großem Interesse habe ich … gelesen.'],
    ['Bitte / Anfrage', 'Könnten Sie mir bitte mitteilen, … · Ich möchte mich erkundigen, ob … · Ich wäre Ihnen dankbar, wenn …'],
    ['Beschwerde', 'Leider muss ich mich über … beschweren. · Ich erwarte, dass … · Bitte teilen Sie mir bis … mit, …'],
    ['Entschuldigung', 'Bitte entschuldigen Sie … · Wir bedauern sehr, dass … · Als Entschuldigung bieten wir Ihnen … an.'],
    ['Schluss', 'Für Rückfragen stehe ich Ihnen gern zur Verfügung. · Ich freue mich auf Ihre Antwort.'],
    ['Gruß', 'Mit freundlichen Grüßen']
  ],
  'email-halbformell': [
    ['Anrede', 'Lieber Herr …, · Liebe Frau …, · Hallo Frau …, (wenn üblich)'],
    ['Einleitung', 'ich möchte Ihnen kurz Bescheid geben, dass … · wie besprochen …'],
    ['Informationen', 'Wichtig ist noch, dass … · Die Unterlagen liegen … · Bei Fragen wenden Sie sich bitte an …'],
    ['Schluss', 'Vielen Dank für Ihre Unterstützung! · Bis …'],
    ['Gruß', 'Viele Grüße · Beste Grüße']
  ],
  'forum': [
    ['Einstieg', 'Das Thema … wird zurzeit viel diskutiert. · Ich möchte gern etwas zu … sagen.'],
    ['Meinung', 'Meiner Meinung nach … · Ich bin der Ansicht, dass … · Aus meiner Sicht …'],
    ['Argumente', 'Dafür spricht, dass … · Ein wichtiger Vorteil ist … · Außerdem …'],
    ['Gegenargumente', 'Andererseits muss man bedenken, dass … · Ein Nachteil ist … · Allerdings …'],
    ['Beispiel', 'Zum Beispiel … · Ich habe selbst erlebt, dass … · In meiner Firma …'],
    ['Fazit', 'Alles in allem … · Zusammenfassend lässt sich sagen, dass … · Deshalb bin ich …']
  ],
  'notiz': [
    ['Aufbau', 'Für: … · Von: … · Datum / Uhrzeit · Anruf von …'],
    ['Inhalt', 'Frau … ruft wegen … an. · Bitte bis … zurückrufen: Tel. …'],
    ['Stil', 'Kurz und klar, Stichpunkte sind erlaubt – aber alle wichtigen Informationen!']
  ]
};

/* Trainingsmodule (Aufgabenformat wie aufgaben.js) */
export const TRAINING = [
  {
    id: 'anrede', titel: 'Anrede, Gruß & Register', ic: '🤝', info: 'Formell oder halbformell? Die richtige Anrede, der passende Gruß und der richtige Ton.',
    aufgaben: [
      { id: 'sw-a1', typ: 'mc', frage: 'Sie schreiben an eine Firma und kennen keinen Namen. Welche Anrede passt?', opts: ['Sehr geehrte Damen und Herren,', 'Liebe Damen und Herren,', 'Hallo zusammen,', 'Sehr geehrte Firma,'], l: 0, x: 'Ohne Namen: „Sehr geehrte Damen und Herren,“ – danach klein weiterschreiben.' },
      { id: 'sw-a2', typ: 'mc', frage: 'Sie schreiben an Ihre Kundin Frau Dr. Weber. Welche Anrede ist richtig?', opts: ['Sehr geehrte Frau Dr. Weber,', 'Sehr geehrter Frau Dr. Weber,', 'Sehr geehrte Dr. Frau Weber,', 'Liebe Frau Doktor,'], l: 0, x: '„Sehr geehrte“ für Frauen, „Sehr geehrter“ für Männer; der Titel steht vor dem Namen.' },
      { id: 'sw-a3', typ: 'mc', frage: 'Ihre Kollegin Sandra und Sie duzen sich. Welche Anrede passt NICHT?', opts: ['Sehr geehrte Sandra,', 'Hallo Sandra,', 'Liebe Sandra,', 'Hi Sandra,'], l: 0, x: '„Sehr geehrte“ steht nur mit Nachnamen – nie mit dem Vornamen.' },
      { id: 'sw-a4', typ: 'zu', frage: 'Welcher Gruß passt zu welcher Situation?', paare: [['Mit freundlichen Grüßen', 'formelle E-Mail an Kunden'], ['Viele Grüße', 'E-Mail an Kollegen (Sie)'], ['Liebe Grüße', 'Nachricht an eine Freundin'], ['Hochachtungsvoll', 'sehr formell, heute selten']] },
      { id: 'sw-a5', typ: 'mc', frage: 'Welcher Satz passt in eine E-Mail an Kunden?', opts: ['Könnten Sie uns bitte Ihre Kundennummer mitteilen?', 'Schick uns doch einfach mal deine Kundennummer.', 'Wir wollen Ihre Kundennummer jetzt sofort haben.', 'Hey, wie ist eigentlich Ihre Kundennummer?'], l: 0, x: 'Höflich und formell: Konjunktiv II („Könnten Sie …“) und „bitte“.' },
      { id: 'sw-a6', typ: 'mc', frage: '„Ich wollt mal fragen, ob …“ – Welche Formulierung ist für eine formelle E-Mail besser?', opts: ['Ich möchte mich erkundigen, ob …', 'Ich will jetzt mal wissen, ob …', 'Sag mir bitte schnell, ob …', 'Ich frag einfach mal nach, ob …'], l: 0 },
      { id: 'sw-a7', typ: 'mc', frage: 'Wie geht es nach „Sehr geehrte Frau Kaya,“ in der nächsten Zeile richtig weiter?', opts: ['vielen Dank für Ihre Nachricht.', 'Vielen Dank für Ihre Nachricht.', 'danke für deine Nachricht.'], l: 0, x: 'Nach dem Komma in der Anrede schreibt man klein weiter (außer bei Nomen und „Sie/Ihr“).' },
      { id: 'sw-a8', typ: 'luecke', frage: 'Ergänzen Sie die Anfrage.', text: 'Sehr geehrte Damen und Herren,\n{0} habe ich Ihre Anzeige gelesen. Ich {1} mich über eine schnelle Antwort freuen.\nMit {2} Grüßen', gaps: [{ opts: ['mit großem Interesse', 'mit großer Interesse', 'im großen Interesse'], l: 0 }, { opts: ['würde', 'hätte', 'wäre'], l: 0 }, { opts: ['freundlichen', 'freundliche', 'freundlicher'], l: 0 }] }
    ]
  },
  {
    id: 'aufbau', titel: 'Aufbau von E-Mail & Beitrag', ic: '🧱', info: 'Betreff, Einleitung, Hauptteil, Schluss: Wie ist ein guter Text aufgebaut?',
    aufgaben: [
      { id: 'sw-b1', typ: 'ordnen', frage: 'Bringen Sie die Teile der E-Mail in die richtige Reihenfolge.', zeilen: ['Betreff: Ihre Bestellung Nr. 4711', 'Sehr geehrter Herr Lorenz,', 'vielen Dank für Ihre E-Mail vom 3. Mai.', 'Leider ist bei der Lieferung ein Fehler passiert.', 'Wir senden Ihnen die fehlenden Stühle bis Freitag zu.', 'Für Rückfragen stehen wir Ihnen gern zur Verfügung.', 'Mit freundlichen Grüßen', 'Anna Petrova'] },
      { id: 'sw-b2', typ: 'ordnen', frage: 'Bringen Sie den Forumsbeitrag in eine logische Reihenfolge.', zeilen: ['Ich finde Homeoffice grundsätzlich sinnvoll.', 'Ein wichtiger Vorteil ist, dass man keine Zeit im Stau verliert.', 'Außerdem kann man sich zu Hause oft besser konzentrieren.', 'Allerdings fehlt im Homeoffice der direkte Kontakt zu den Kollegen.', 'Zum Beispiel klären wir im Büro viele Fragen kurz in der Kaffeepause.', 'Insgesamt bin ich deshalb für eine Mischung aus Büro und Homeoffice.'] },
      { id: 'sw-b3', typ: 'mc', frage: 'Sie beschweren sich über eine defekte Waschmaschine. Welcher Betreff ist am besten?', opts: ['Reklamation: Waschmaschine WM 300, Rechnung Nr. 2291', 'Hallo, ich habe da ein kleines Problem', 'Waschmaschine', 'Dringend!!! Bitte sofort lesen!!!'], l: 0, x: 'Ein guter Betreff ist kurz und konkret: Worum geht es, mit Nummer oder Datum.' },
      { id: 'sw-b4', typ: 'mc', frage: 'Welcher Satz ist ein guter Anfang für eine Anfrage nach der Anrede?', opts: ['mit großem Interesse habe ich Ihr Angebot gelesen.', 'ich bin Ahmed und wohne in Kiel und arbeite viel.', 'heute ist ein schöner Tag, deshalb schreibe ich.', 'ich habe eine Frage, antworten Sie bitte schnell.'], l: 0 },
      { id: 'sw-b5', typ: 'mc', frage: 'Welcher Satz passt als Schluss einer formellen E-Mail?', opts: ['Ich freue mich auf Ihre Antwort.', 'Tschüss und bis bald!', 'Das wär’s dann von meiner Seite.', 'Antworten Sie bitte ganz schnell!'], l: 0 },
      { id: 'sw-b6', typ: 'zu', frage: 'Was gehört in welchen Teil des Textes?', paare: [['Betreff', 'Worum geht es? (kurz)'], ['Einleitung', 'Bezug und Grund des Schreibens'], ['Hauptteil', 'alle Inhaltspunkte, je ein Absatz'], ['Schluss', 'Bitte um Antwort, Dank'], ['Grußformel', 'Mit freundlichen Grüßen']] }
    ]
  },
  {
    id: 'redemittel', titel: 'Redemittel für jeden Zweck', ic: '🗝️', info: 'Beschweren, bitten, anfragen, absagen, argumentieren – mit den passenden Wendungen.',
    aufgaben: [
      { id: 'sw-c1', typ: 'zu', frage: 'Welche Wendung passt zu welcher Absicht?', paare: [['Ich möchte mich über … beschweren.', 'Beschwerde'], ['Könnten Sie mir bitte … zusenden?', 'Bitte'], ['Ich möchte mich erkundigen, ob …', 'Anfrage'], ['Leider muss ich den Termin absagen.', 'Absage'], ['Bitte entschuldigen Sie die Verspätung.', 'Entschuldigung']] },
      { id: 'sw-c2', typ: 'zu', frage: 'Forumsbeitrag: Welche Wendung hat welche Funktion?', paare: [['Meiner Meinung nach …', 'Meinung'], ['Dafür spricht, dass …', 'Argument'], ['Andererseits muss man bedenken, …', 'Gegenargument'], ['Ich habe selbst erlebt, dass …', 'Beispiel'], ['Zusammenfassend lässt sich sagen, …', 'Fazit']] },
      { id: 'sw-c3', typ: 'mc', frage: 'Sie erwarten eine Lösung bis Freitag – höflich, aber bestimmt. Was schreiben Sie?', opts: ['Ich erwarte eine Lösung bis spätestens Freitag.', 'Vielleicht könnten Sie irgendwann etwas machen.', 'Machen Sie das bis Freitag, sonst gibt es Ärger.', 'Freitag wäre nett, aber egal, wie Sie wollen.'], l: 0 },
      { id: 'sw-c4', typ: 'mc', frage: 'Sie schlagen einen neuen Termin vor. Was passt?', opts: ['Würde Ihnen Donnerstag um 10 Uhr passen?', 'Donnerstag um 10 Uhr, okay, alles klar?', 'Sie kommen dann am Donnerstag um 10 Uhr.', 'Kann ich jetzt am Donnerstag oder nicht?'], l: 0 },
      { id: 'sw-c5', typ: 'mc', frage: 'Kundenservice: Wie entschuldigen Sie sich professionell?', opts: ['Wir bitten vielmals um Entschuldigung für die Unannehmlichkeiten.', 'Sorry, das war echt nicht so gut von uns gelaufen.', 'Das kann ja mal passieren, das ist nicht so schlimm.', 'Wir sind nicht schuld, der Hersteller war zu langsam.'], l: 0 },
      { id: 'sw-c6', typ: 'luecke', frage: 'Ergänzen Sie den Forumsbeitrag.', text: 'Dafür {0}, dass man Zeit spart. Andererseits darf man nicht {1}, dass der Kontakt zu den Kollegen fehlt. {2} lässt sich sagen, dass eine Mischung am besten ist.', gaps: [{ opts: ['spricht', 'sagt', 'zeigt'], l: 0 }, { opts: ['vergessen', 'vergisst', 'vergaß'], l: 0 }, { opts: ['Zusammenfassend', 'Zusammenfassung', 'Zusammen'], l: 0 }] }
    ]
  },
  {
    id: 'konnektoren', titel: 'Sätze verbinden', ic: '🔗', info: 'Mit Konnektoren wird ein Text flüssig und logisch – und die Bewertung „Kommunikative Gestaltung“ besser.',
    aufgaben: [
      { id: 'sw-d1', typ: 'luecke', frage: 'Welche Konnektoren passen?', text: 'Die Lieferung kam zu spät, {0} mussten wir den Kunden informieren. {1} wir schnell reagiert haben, war der Kunde verärgert. Wir bieten ihm einen Rabatt an, {2} er zufrieden ist.', gaps: [{ opts: ['deshalb', 'weil', 'obwohl'], l: 0 }, { opts: ['Obwohl', 'Weil', 'Deshalb'], l: 0 }, { opts: ['damit', 'um', 'denn'], l: 0 }] },
      { id: 'sw-d2', typ: 'mc', frage: 'Welcher Satz ist richtig?', opts: ['Außerdem möchte ich wissen, wann der Kurs beginnt.', 'Außerdem ich möchte wissen, wann der Kurs beginnt.', 'Außerdem möchte ich wissen, wann beginnt der Kurs.', 'Außerdem ich möchte wissen, wann beginnt der Kurs.'], l: 0, x: 'Nach „außerdem“ steht das Verb auf Position 2; im Nebensatz mit „wann“ steht es am Ende.' },
      { id: 'sw-d3', typ: 'mc', frage: 'Welcher Konnektor drückt einen Gegensatz aus?', opts: ['jedoch', 'außerdem', 'deshalb', 'zum Beispiel'], l: 0 },
      { id: 'sw-d4', typ: 'zu', frage: 'Welche Funktion hat der Konnektor?', paare: [['außerdem', 'Ergänzung'], ['deshalb', 'Folge'], ['trotzdem', 'Gegengrund'], ['zum Beispiel', 'Beispiel'], ['schließlich', 'Abschluss']] },
      { id: 'sw-d5', typ: 'mc', frage: 'Ich bin seit drei Jahren in Deutschland. ___ arbeite ich als Lagerist.', opts: ['Seitdem', 'Seit', 'Nachdem', 'Bevor'], l: 0 },
      { id: 'sw-d6', typ: 'bau', frage: 'Bauen Sie den Satz.', steine: ['Ich', 'schreibe', 'Ihnen,', 'weil', 'die Lieferung', 'unvollständig', 'war.'] }
    ]
  },
  {
    id: 'fehler', titel: 'Typische Fehler vermeiden', ic: '🔍', info: 'Welcher Satz ist korrekt? Präpositionen, Verbformen, Groß- und Kleinschreibung.',
    aufgaben: [
      { id: 'sw-e1', typ: 'mc', frage: 'Welcher Satz ist korrekt?', opts: ['Ich freue mich auf Ihre Antwort.', 'Ich freue mich auf Ihrer Antwort.', 'Ich freue mich für Ihre Antwort.', 'Ich freue mich an Ihre Antwort.'], l: 0 },
      { id: 'sw-e2', typ: 'mc', frage: 'Welcher Satz ist korrekt?', opts: ['Ich interessiere mich für die Stelle als Lagerist.', 'Ich interessiere mich an der Stelle als Lagerist.', 'Ich interessiere für die Stelle als Lagerist.', 'Ich bin interessiert für die Stelle als Lagerist.'], l: 0 },
      { id: 'sw-e3', typ: 'mc', frage: 'Welcher Satz ist korrekt?', opts: ['Seit drei Jahren arbeite ich in Kiel.', 'Seit drei Jahren ich arbeite in Kiel.', 'Seit drei Jahre arbeite ich in Kiel.', 'Seit drei Jahren arbeiten ich in Kiel.'], l: 0 },
      { id: 'sw-e4', typ: 'mc', frage: 'Welcher Satz ist korrekt?', opts: ['Bitte schicken Sie mir die Unterlagen.', 'Bitte schicken Sie mich die Unterlagen.', 'Bitte schickt Sie mir die Unterlagen.', 'Bitte Sie schicken mir die Unterlagen.'], l: 0 },
      { id: 'sw-e5', typ: 'mc', frage: 'Welcher Satz ist korrekt?', opts: ['Ich habe die Rechnung gestern bekommen.', 'Ich habe die Rechnung gestern bekommt.', 'Ich bin die Rechnung gestern bekommen.', 'Ich habe gestern bekommen die Rechnung.'], l: 0 },
      { id: 'sw-e6', typ: 'mc', frage: 'Welche Schreibung ist richtig?', opts: ['Vielen Dank für Ihre schnelle Antwort.', 'Vielen dank für ihre schnelle Antwort.', 'Vielen Dank für ihre Schnelle Antwort.', 'vielen Dank für Ihre schnelle antwort.'], l: 0 },
      { id: 'sw-e7', typ: 'mc', frage: 'Welcher Satz ist korrekt?', opts: ['Ich warte seit zwei Wochen auf die Lieferung.', 'Ich warte seit zwei Wochen für die Lieferung.', 'Ich warte seit zwei Wochen an die Lieferung.', 'Ich warte seit zwei Wochen auf der Lieferung.'], l: 0 },
      { id: 'sw-e8', typ: 'mc', frage: 'Welcher Satz ist korrekt?', opts: ['Könnten Sie mir bitte mitteilen, wann der Techniker kommt?', 'Könnten Sie mir bitte mitteilen, wann kommt der Techniker?', 'Könnten Sie mir bitte mitteilen, wenn der Techniker kommt?', 'Könnten Sie mir bitte mitteilen, wann der Techniker kommen?'], l: 0, x: 'Indirekte Frage: Fragewort „wann“ + Verb am Ende. „wenn“ ist eine Bedingung oder Zeit, keine Frage.' }
    ]
  },
  {
    id: 'forum', titel: 'Forumsbeitrag planen', ic: '💬', info: 'Meinung, Argumente, Beispiel, Fazit – so wird ein Forumsbeitrag überzeugend.',
    aufgaben: [
      { id: 'sw-f1', typ: 'mc', frage: 'Was gehört NICHT in einen Forumsbeitrag?', opts: ['„Sehr geehrte Damen und Herren“ als Anrede', 'die eigene Meinung mit Begründung', 'ein Beispiel aus der eigenen Erfahrung', 'ein kurzes Fazit am Ende'], l: 0, x: 'Ein Forumsbeitrag ist kein Brief – eine formelle Anrede passt nicht.' },
      { id: 'sw-f2', typ: 'matrix', frage: 'Richtig oder falsch?', wahl: ['richtig', 'falsch'], aussagen: [['Argumente sollte man mit Beispielen stützen.', true], ['Ein Fazit fasst die eigene Meinung kurz zusammen.', true], ['Man schreibt am besten nur kurze Hauptsätze.', false], ['Gegenargumente sollte man nie erwähnen.', false], ['Absätze machen den Text übersichtlicher.', true]] },
      { id: 'sw-f3', typ: 'mc', frage: 'Welcher Satz ist ein guter Einstieg?', opts: ['Das Thema Homeoffice wird zurzeit viel diskutiert.', 'Ich schreibe jetzt einen Text über das Thema.', 'Homeoffice. Ja. Das ist ein Thema für alle.', 'Hier kommt mein Beitrag, viel Spaß beim Lesen.'], l: 0 },
      { id: 'sw-f4', typ: 'ordnen', frage: 'Bringen Sie die Argumentation in eine logische Reihenfolge.', zeilen: ['Die Vier-Tage-Woche ist eine gute Idee.', 'Ausgeruhte Mitarbeitende machen weniger Fehler.', 'In einem Pilotprojekt sank zum Beispiel die Zahl der Krankmeldungen.', 'Für kleine Betriebe ist sie allerdings schwer zu organisieren.', 'Trotzdem sollte man sie zumindest ausprobieren.'] },
      { id: 'sw-f5', typ: 'mc', frage: 'Welcher Satz ist ein gutes Fazit?', opts: ['Alles in allem überwiegen für mich die Vorteile.', 'Und das war jetzt mein Text zum Thema.', 'Ich weiß nicht, was ich noch schreiben soll.', 'Fazit: Keine Ahnung, jeder soll machen, was er will.'], l: 0 }
    ]
  }
];

/* ---------------- Automatische Textanalyse ---------------- */
export const KONNEKTOREN = ['weil', 'da', 'denn', 'obwohl', 'trotzdem', 'deshalb', 'deswegen', 'daher', 'darum', 'außerdem', 'zudem', 'ferner', 'jedoch', 'allerdings', 'aber', 'sondern', 'dennoch', 'damit', 'sodass', 'so dass', 'wenn', 'falls', 'nachdem', 'bevor', 'während', 'seitdem', 'sobald', 'dass', 'ob', 'zum beispiel', 'beispielsweise', 'einerseits', 'andererseits', 'zwar', 'nicht nur', 'sowohl', 'weder', 'entweder', 'je', 'desto', 'umso', 'schließlich', 'zuerst', 'danach', 'anschließend', 'zum schluss', 'zusammenfassend', 'insgesamt', 'alles in allem'];
const NEBENSATZ = ['weil', 'da', 'obwohl', 'damit', 'sodass', 'wenn', 'falls', 'als', 'nachdem', 'bevor', 'während', 'seitdem', 'sobald', 'dass', 'ob', 'der', 'die', 'das', 'wo', 'wie', 'was', 'wann', 'warum'];

export const wortzahl = t => (String(t).match(/[A-Za-zÄÖÜäöüß0-9]+(?:[-'’][A-Za-zÄÖÜäöüß0-9]+)*/g) || []).length;

export function analysiere(text, auf) {
  const t = String(text || ''), klein = t.toLowerCase(), art = ARTEN[auf.art] || ARTEN.forum;
  const worte = wortzahl(t);
  const saetze = Math.max(1, (t.match(/[.!?](\s|$)/g) || []).length);
  const absaetze = t.split(/\n\s*\n/).filter(x => x.trim()).length;
  const zeilen = t.split('\n').map(z => z.trim()).filter(Boolean);
  const erste = (zeilen.find(z => !/^betreff/i.test(z)) || '');
  const anrede = /^(sehr geehrte|guten tag)/i.test(erste) ? 'formell' : /^(liebe|lieber|hallo|hi|servus|moin)\b/i.test(erste) ? 'informell' : null;
  const gruss = /mit freundlichen grüßen|freundliche grüße|hochachtungsvoll/i.test(t) ? 'formell' : /(viele|beste|herzliche|liebe|schöne) grüße|lg\b|bis bald/i.test(t) ? 'informell' : null;
  const du = (t.match(/\b(du|dich|dir|dein|deine|deinen|deinem|deiner|euch|euer|eure)\b/gi) || []).length;
  const kon = KONNEKTOREN.filter(k => new RegExp('(^|[^a-zäöüß])' + k.replace(/ /g, '\\s+') + '([^a-zäöüß]|$)', 'i').test(klein));
  const ns = (t.match(new RegExp(',\\s*(' + NEBENSATZ.join('|') + ')\\b', 'gi')) || []).length;
  const punkte = (auf.punkte || []).map(p => ({ t: p.t, ok: new RegExp(p.kw, 'i').test(t) }));
  const [min, max] = auf.worte || [0, 9999];
  const h = [];
  h.push({ ok: worte >= min && worte <= max * 1.15, t: `Wortzahl: ${worte} (Ziel ${min}–${max})` + (worte < min ? ' – zu kurz' : worte > max * 1.15 ? ' – deutlich zu lang' : '') });
  if (auf.art.startsWith('email')) {
    if (art.register === 'formell') {
      h.push({ ok: anrede === 'formell', t: anrede === 'formell' ? 'Anrede formell' : anrede ? 'Anrede zu informell für eine formelle E-Mail' : 'Keine Anrede erkannt' });
      h.push({ ok: gruss === 'formell', t: gruss === 'formell' ? 'Grußformel formell' : gruss ? 'Grußformel zu informell' : 'Keine Grußformel erkannt' });
      h.push({ ok: du === 0, t: du ? `„du/dein …“ ${du}× in einer formellen E-Mail` : 'Konsequent „Sie“' });
    } else {
      h.push({ ok: !!anrede, t: anrede ? 'Anrede vorhanden' : 'Keine Anrede erkannt' });
      h.push({ ok: !!gruss, t: gruss ? 'Grußformel vorhanden' : 'Keine Grußformel erkannt' });
    }
  }
  if (auf.art !== 'notiz') {
    h.push({ ok: kon.length >= (auf.niveau === 'B1' ? 3 : 5), t: `${kon.length} verschiedene Konnektoren${kon.length ? ': ' + kon.slice(0, 10).join(', ') : ''}` });
    h.push({ ok: absaetze >= 3 || worte < 80, t: `${absaetze} ${absaetze === 1 ? 'Absatz' : 'Absätze'}` });
    h.push({ ok: ns >= 2, t: `${ns} Nebensätze (nach Komma erkannt)` });
  }
  return { worte, saetze, wps: Math.round(worte / saetze * 10) / 10, absaetze, anrede, gruss, du, kon, ns, punkte, hinweise: h };
}

/* LanguageTool-Kategorien → eigene Fehlerkategorien */
export const KAT = {
  R: { t: 'Rechtschreibung', c: '#d9483b' }, G: { t: 'Grammatik', c: '#7a4fa3' }, Z: { t: 'Zeichensetzung', c: '#c77d10' },
  W: { t: 'Wortwahl', c: '#2f6fc4' }, S: { t: 'Stil / Register', c: '#2e8a6a' }, I: { t: 'Inhalt / Aufbau', c: '#6b6f76' }
};
export function ltKategorie(m) {
  const c = (m.rule && m.rule.category && m.rule.category.id) || '', typ = (m.rule && m.rule.issueType) || '';
  if (/TYPOS|CASING|COMPOUNDING|MISSPELLING/.test(c) || typ === 'misspelling') return 'R';
  if (/PUNCTUATION|TYPOGRAPHY/.test(c)) return 'Z';
  if (/GRAMMAR|CONFUSED_WORDS/.test(c) || typ === 'grammar') return 'G';
  if (/STYLE|REDUNDANCY|COLLOQUIALISMS|GENDER_NEUTRALITY|EMPFOHLENE_RECHTSCHREIBUNG/.test(c) || typ === 'style') return 'S';
  return 'W';
}

/* Bewertungsvorschlag nach den DTB-Kriterien (A–D) – nur ein Vorschlag für die Lehrkraft */
export const KRITERIEN = [['wa', 'Aufgabenerfüllung'], ['wk', 'Kommunikative Gestaltung'], ['wf', 'Formale Richtigkeit'], ['ws', 'Spektrum: Wortschatz & Strukturen']];
export function vorschlag(an, fehler, auf) {
  const anteil = an.punkte.length ? an.punkte.filter(p => p.ok).length / an.punkte.length : 1;
  const [min] = auf.worte || [0];
  const runter = s => ({ A: 'B', B: 'C', C: 'D', D: 'D' })[s];
  let wa = anteil === 1 ? 'B' : anteil >= .75 ? 'C' : anteil >= .5 ? 'C' : 'D';
  if (an.worte < min * 0.8) wa = runter(wa);
  const dichte = an.worte ? fehler / an.worte * 100 : 0;
  const wf = dichte <= 2 ? 'A' : dichte <= 5 ? 'B' : dichte <= 9 ? 'C' : 'D';
  const formOk = an.hinweise.filter(h => /Anrede|Gruß|Sie|Absatz|Absätze/.test(h.t)).every(h => h.ok);
  const wk = an.kon.length >= 6 && formOk ? 'A' : an.kon.length >= 4 && formOk ? 'B' : an.kon.length >= 2 ? 'C' : 'D';
  const ws = an.kon.length >= 6 && an.ns >= 4 && an.wps >= 12 ? 'A' : an.kon.length >= 4 && an.ns >= 2 ? 'B' : an.kon.length >= 2 ? 'C' : 'D';
  return { wa, wk, wf, ws, dichte: Math.round(dichte * 10) / 10 };
}
export const STUFE = { A: { t: 'A · B2 gut erreicht', c: '#cdeedb', f: '#14663a', v: 4 }, B: { t: 'B · B2 erreicht', c: '#e3f3d2', f: '#4a7a16', v: 3 }, C: { t: 'C · B1-Niveau', c: '#fdf0cf', f: '#8a6410', v: 2 }, D: { t: 'D · unter B1', c: '#fbe0db', f: '#b3402f', v: 1 } };
