/* Team-Spiel (allein spielen, Teamwertung live) – Set „B2 Alltag & Beruf“ für den Online-Kurs.
   q(runde, frage, richtig, falsch…, {tipp}) · S_(wörter, satzzeichen, …weitere richtige Lösungen) · C(runde, chat, frage, richtig, falsch…, {tipp})
   Im Chat: ["ich"|"Name", "Text"] – "___" markiert die Lücke, "…?" die gesuchte Antwort. */
(function(){
const q = (r, f, ...o) => { const x = typeof o[o.length - 1] === "object" ? o.pop() : {}; return { r, f, o, tipp: x.tipp || "" }; };
const S_ = (w, p, ...alt) => ({ w, p: p || ".", a: [w.join(" ").toLowerCase(), ...alt] });
const C = (r, chat, f, ...o) => { const x = typeof o[o.length - 1] === "object" && !Array.isArray(o[o.length - 1]) ? o.pop() : {}; return { r, chat, f, o, tipp: x.tipp || "" }; };
window.TEAMSPIEL_SETS = window.TEAMSPIEL_SETS || {};
window.TEAMSPIEL_SETS.b2 = {
  titel: "Team-Spiel B2: Alltag & Beruf",
  runden: { 1: "Behörden & Wohnung", 2: "Konnektoren & Nebensätze", 3: "Passiv", 4: "Höflich bitten (Konjunktiv II)", 5: "Genitiv & Nominalstil", 6: "Beruf, Arzt & E-Mails", 7: "Sätze bauen", 8: "Chat-Nachrichten" },
  items: [
    /* 1 · Behörden & Wohnung */
    q(1, "Wo meldet man in Deutschland einen neuen Wohnsitz an?", "beim Bürgeramt", "bei der Krankenkasse", "beim Jobcenter", "beim Vermieter"),
    q(1, "Was bekommt man nach dem Einzug vom Vermieter für die Anmeldung?", "eine Wohnungsgeberbestätigung", "eine Lohnsteuerkarte", "einen Mietspiegel", "eine Nebenkostenabrechnung"),
    q(1, "„Die Kaution“ ist …", "Geld als Sicherheit für den Vermieter", "die monatliche Miete", "eine Strafe für Lärm", "eine Versicherung für den Hausrat"),
    q(1, "Was steht in der Nebenkostenabrechnung?", "Kosten für Heizung, Wasser, Müll usw.", "die Höhe der Kaution", "die Kündigungsfrist", "die Zahl der Zimmer"),
    q(1, "Für einen Termin beim Bürgeramt muss man oft …", "online einen Termin buchen", "einen Antrag auf Wohngeld stellen", "eine Kaution bezahlen", "einen Mietvertrag kündigen"),
    q(1, "„Einen Antrag stellen“ bedeutet:", "offiziell etwas beantragen", "jemanden anzeigen", "eine Frage beantworten", "etwas reparieren lassen"),
    q(1, "Der Vermieter will die Miete erhöhen. Das nennt man …", "eine Mieterhöhung", "eine Mietminderung", "eine Untervermietung", "eine Abmahnung"),
    q(1, "„Fristgerecht“ heißt:", "innerhalb der vorgeschriebenen Zeit", "mit Strafe", "ohne Unterschrift", "persönlich"),
    q(1, "Welche Unterlagen braucht man fast immer bei einer Behörde?", "einen gültigen Ausweis oder Pass", "die Geburtsurkunde der Eltern", "die Zeugnisse der Schule", "den Führerschein"),
    /* 2 · Konnektoren & Nebensätze */
    q(2, "Ich bleibe heute zu Hause, ___ ich erkältet bin.", "weil", "deshalb", "trotzdem", "obwohl", { tipp: "Grund im Nebensatz → weil (Verb am Ende). deshalb/trotzdem stehen im Hauptsatz." }),
    q(2, "Er hat wenig Zeit, ___ hilft er uns beim Umzug.", "trotzdem", "obwohl", "weil", "damit", { tipp: "trotzdem = Gegengrund im Hauptsatz – danach kommt sofort das Verb." }),
    q(2, "___ ich die Wohnung besichtigt hatte, habe ich den Vertrag unterschrieben.", "Nachdem", "Bevor", "Während", "Seit", { tipp: "nachdem + Plusquamperfekt (hatte besichtigt): zuerst A, dann B." }),
    q(2, "Ich spreche langsam, ___ alle mich verstehen.", "damit", "um", "sodass", "weil", { tipp: "Ziel mit anderem Subjekt (ich – alle) → damit. Gleiches Subjekt → um … zu." }),
    q(2, "Der Bus kam zu spät, ___ ich meinen Termin verpasst habe.", "sodass", "damit", "obwohl", "denn", { tipp: "Folge → sodass (Verb am Ende)." }),
    q(2, "___ du Fragen hast, schreib mir einfach.", "Falls", "Ob", "Obwohl", "Damit", { tipp: "Bedingung → wenn / falls." }),
    q(2, "Ich weiß nicht, ___ das Bürgeramt samstags geöffnet hat.", "ob", "dass", "wenn", "falls", { tipp: "Ja/Nein-Frage im Nebensatz → ob." }),
    q(2, "Man lernt am besten, ___ man viel spricht.", "indem", "damit", "obwohl", "sodass", { tipp: "Wie? Auf welche Weise? → indem." }),
    q(2, "___ mehr ich übe, ___ sicherer werde ich.", "Je … desto", "Wenn … dann", "Sowohl … als auch", "Entweder … oder", { tipp: "Steigerung: je + Komparativ (Nebensatz), desto + Komparativ (Hauptsatz)." }),
    /* 3 · Passiv */
    q(3, "Der Antrag ___ morgen bearbeitet.", "wird", "ist", "hat", "wurde", { tipp: "Passiv Präsens: werden + Partizip II." }),
    q(3, "Die Wohnung ___ letztes Jahr renoviert.", "wurde", "wird", "ist", "hatte", { tipp: "Passiv Präteritum: wurde + Partizip II." }),
    q(3, "Der Vertrag ist schon unterschrieben ___.", "worden", "geworden", "werden", "wurde", { tipp: "Perfekt Passiv: ist … worden (nicht „geworden“)." }),
    q(3, "Die Unterlagen müssen bis Freitag abgegeben ___.", "werden", "worden", "wird", "sein", { tipp: "Passiv mit Modalverb: Modalverb + Partizip II + werden." }),
    q(3, "Das Büro ___ sonntags geschlossen. (Zustand)", "ist", "wird", "hat", "wurde", { tipp: "Zustand/Ergebnis → sein + Partizip II." }),
    q(3, "Die Rechnung wurde ___ der Buchhaltung geprüft.", "von", "durch", "mit", "bei", { tipp: "Person/Stelle, die handelt → von + Dativ." }),
    q(3, "„Das Formular ist bis Montag einzureichen.“ bedeutet:", "Es muss bis Montag eingereicht werden.", "Es kann bis Montag eingereicht werden.", "Es wurde am Montag eingereicht.", "Es darf nicht eingereicht werden.", { tipp: "sein + zu + Infinitiv = muss/soll … werden." }),
    q(3, "„Der Fehler lässt sich leicht beheben.“ bedeutet:", "Er kann leicht behoben werden.", "Er muss behoben werden.", "Er wurde schon behoben.", "Niemand will ihn beheben.", { tipp: "sich lassen + Infinitiv = kann … werden." }),
    q(3, "Hier ___ nicht geraucht!", "wird", "ist", "hat", "werden", { tipp: "Unpersönliches Passiv (ohne Subjekt) → 3. Person Singular: wird." }),
    /* 4 · Konjunktiv II – höflich */
    q(4, "___ Sie mir bitte helfen?", "Könnten", "Konnten", "Können würden", "Kannten", { tipp: "Höfliche Bitte: könnten / würden / hätten." }),
    q(4, "___ Sie kurz Zeit für mich?", "Hätten", "Hatten", "Würden", "Wären", { tipp: "haben → hätte(n)." }),
    q(4, "Ich ___ gern einen Termin vereinbaren.", "würde", "wurde", "werde", "wäre", { tipp: "würde + Infinitiv = höflicher Wunsch." }),
    q(4, "Es ___ schön, wenn Sie mir bis Freitag antworten könnten.", "wäre", "war", "würde", "hätte", { tipp: "sein → wäre." }),
    q(4, "An Ihrer Stelle ___ ich den Vertrag genau lesen.", "würde", "werde", "wurde", "hätte", { tipp: "Rat: An Ihrer Stelle würde ich …" }),
    q(4, "Sie ___ vorher anrufen sollen. (Kritik, Vergangenheit)", "hätten", "würden", "hatten", "wären", { tipp: "Vergangenheit mit Modalverb: hätte + Infinitiv + Modalverb im Infinitiv." }),
    q(4, "Wenn ich mehr Zeit ___, würde ich einen Kurs machen.", "hätte", "habe", "hatte", "würde", { tipp: "Irreale Bedingung: wenn + Konjunktiv II." }),
    q(4, "Welche Bitte ist am höflichsten?", "Würden Sie mir bitte das Formular schicken?", "Schicken Sie mir das Formular!", "Sie schicken mir das Formular.", "Das Formular, bitte schnell!"),
    q(4, "___ es möglich, den Termin zu verschieben?", "Wäre", "Würde", "Hätte", "War", { tipp: "Wäre es möglich, … zu …?" }),
    /* 5 · Genitiv & Nominalstil */
    q(5, "Trotz ___ Regens fand das Fest statt.", "des", "dem", "den", "der", { tipp: "trotz + Genitiv: der Regen → des Regens." }),
    q(5, "Während ___ Besprechung bleibt das Handy aus.", "der", "die", "dem", "des", { tipp: "während + Genitiv, feminin: die → der." }),
    q(5, "Wegen ___ Streiks fahren keine Busse.", "eines", "einem", "einen", "einer", { tipp: "wegen + Genitiv: ein Streik → eines Streiks." }),
    q(5, "Innerhalb ___ Woche müssen Sie antworten.", "einer", "eine", "einem", "eines", { tipp: "innerhalb + Genitiv, feminin: einer." }),
    q(5, "Aufgrund ___ hohen Nachfrage ist der Kurs voll.", "der", "die", "dem", "den", { tipp: "aufgrund + Genitiv, feminin: der hohen Nachfrage." }),
    q(5, "„Weil es stark regnete, …“ → nominal:", "Wegen des starken Regens …", "Trotz des starken Regens …", "Bei starkem Regen war …", "Nach dem starken Regen …", { tipp: "weil → wegen + Genitiv." }),
    q(5, "„Nachdem er angekommen war, …“ → nominal:", "Nach seiner Ankunft …", "Vor seiner Ankunft …", "Seit seiner Ankunft war …", "Bei seinem Ankommen ist …", { tipp: "nachdem → nach + Nomen (ankommen → die Ankunft)." }),
    q(5, "„Wenn man Fragen hat, …“ → nominal:", "Bei Fragen …", "Wegen Fragen …", "Trotz Fragen …", "Nach den Fragen …", { tipp: "wenn → bei + Nomen." }),
    q(5, "den Antrag prüfen → ___", "die Prüfung des Antrags", "die Prüfung von dem Antrag gemacht", "das Prüfen den Antrag", "die Antragsprüfen", { tipp: "Verb → Nomen; das Objekt wird zum Genitiv: des Antrags." }),
    /* 6 · Beruf, Arzt & E-Mails */
    q(6, "Formelle E-Mail an eine unbekannte Person – Anrede:", "Sehr geehrte Damen und Herren,", "Hallo zusammen,", "Liebe Leute,", "Hi,"),
    q(6, "Passender Gruß am Ende einer formellen E-Mail:", "Mit freundlichen Grüßen", "Bis bald!", "Liebe Grüße und Küsse", "Tschüss"),
    q(6, "Beim Arzt: „Ich hätte gern einen Termin, ___ möglich diese Woche.“", "wenn", "ob", "dass", "denn", { tipp: "wenn möglich = falls es möglich ist." }),
    q(6, "„Ich bin krankgeschrieben.“ bedeutet:", "Der Arzt hat mich für arbeitsunfähig erklärt.", "Ich habe einen Krankenschein verloren.", "Ich habe gekündigt.", "Ich muss eine Prüfung schreiben."),
    q(6, "Im Vorstellungsgespräch: „Was sind Ihre ___?“", "Stärken", "Stärke Sie", "Starken", "Stärkungen"),
    q(6, "„Ich beziehe mich auf Ihre Anzeige vom 3. Mai.“ steht meistens …", "am Anfang einer Bewerbung", "am Ende eines Arztbriefs", "in einer Kündigung", "in einer SMS an Freunde"),
    q(6, "„Bitte geben Sie mir bis Freitag Bescheid.“ bedeutet:", "Bitte informieren Sie mich bis Freitag.", "Bitte kommen Sie am Freitag.", "Bitte bezahlen Sie bis Freitag.", "Bitte rufen Sie nicht vor Freitag an."),
    q(6, "Eine Überweisung vom Hausarzt braucht man für …", "den Facharzt", "die Apotheke", "das Bürgeramt", "die Bank"),
    q(6, "„Leider muss ich den Termin absagen.“ – Was passt danach?", "Könnten wir einen neuen Termin vereinbaren?", "Ich freue mich auf den Termin.", "Ich komme gern pünktlich.", "Vielen Dank für die Einladung, ich komme."),
    /* 8 · Chat */
    C(8, [["Frau Weber (Chefin)", "Guten Morgen! Können Sie heute um 14 Uhr zur Besprechung kommen?"], ["ich", "…?"]],
      "Sie haben um 14 Uhr einen Arzttermin. Was antworten Sie?", "Guten Morgen, Frau Weber, leider habe ich um 14 Uhr einen Arzttermin. Wäre 15:30 Uhr auch möglich?", "Nein, keine Lust.", "Hi, ich kann nicht, sorry 😅", "Ich komme nicht. Tschüss.", { tipp: "Chefin = formell: Anrede, Grund nennen, Alternative vorschlagen (Konjunktiv II: Wäre … möglich?)." }),
    C(8, [["Lena", "Hey! Kommst du am Samstag zu meiner Party? 🎉"], ["ich", "…?"]],
      "Sie können nicht. Was schreiben Sie Ihrer Freundin?", "Oh schade, am Samstag bin ich schon bei meinen Eltern. Aber danke für die Einladung – viel Spaß!", "Sehr geehrte Lena, leider ist mir eine Teilnahme nicht möglich.", "Nein.", "Ich komme nicht, weil ich keine Lust habe.", { tipp: "Freundin = informell, aber freundlich: bedauern, Grund, danken." }),
    C(8, [["Hausverwaltung Nord", "Sehr geehrte Mieterinnen und Mieter, am Dienstag wird das Wasser von 8 bis 12 Uhr abgestellt."], ["ich", "Vielen Dank für die Information. ___ es möglich, dass die Arbeiten erst nach 10 Uhr beginnen?"]],
      "Welches Wort fehlt?", "Wäre", "Würde", "Hätte", "Ist", { tipp: "Höfliche Frage: Wäre es möglich, dass …?" }),
    C(8, [["ich", "Hallo Herr Krüger, ich habe die Lieferung erhalten, aber zwei Teile fehlen."], ["Herr Krüger (Firma)", "Das tut mir leid. Wir schicken Ihnen die Teile ___ einer Woche zu."]],
      "Welches Wort fehlt?", "innerhalb", "während", "trotz", "wegen", { tipp: "Zeitraum: innerhalb + Genitiv (innerhalb einer Woche)." }),
    C(8, [["Kollege Tim", "Kannst du morgen meine Schicht übernehmen? Mein Sohn ist krank 🤒"], ["ich", "…?"]],
      "Sie können morgen leider nicht. Was ist die beste Antwort?", "Oh, gute Besserung für deinen Sohn! Morgen kann ich leider nicht, aber frag doch mal Sara.", "Das ist dein Problem.", "Sehr geehrter Herr Tim, ich bedauere zutiefst …", "Nein, morgen nicht.", { tipp: "Unter Kollegen: freundlich, mitfühlend, Alternative anbieten." }),
    C(8, [["ich", "Guten Tag, ich möchte mich über die Heizung beschweren. Sie funktioniert seit einer Woche nicht."], ["Hausmeister", "Oh, davon wusste ich nichts. ___ Sie mir das früher gesagt, hätte ich sofort jemanden geschickt."]],
      "Welches Wort fehlt?", "Hätten", "Würden", "Haben", "Wären", { tipp: "Irreale Bedingung in der Vergangenheit ohne „wenn“: Hätten Sie …, hätte ich …" }),
    C(8, [["Praxis Dr. Aydin", "Ihr Termin am Donnerstag um 9 Uhr ist bestätigt. Bitte bringen Sie Ihre Versichertenkarte mit."], ["ich", "…?"]],
      "Was ist eine passende Antwort?", "Vielen Dank für die Bestätigung. Ich bringe die Karte mit.", "Ok cool 👍 bis dann!!", "Warum soll ich die Karte mitbringen?", "Ich habe keinen Termin.", { tipp: "Arztpraxis = formell, kurz und höflich." }),
    C(8, [["Nachbarin Frau Ali", "Hallo! Könnten Sie mein Paket annehmen? Ich bin bis 18 Uhr bei der Arbeit."], ["ich", "Ja, gern! Ich bin den ganzen Tag zu Hause. ___ Sie mir kurz, wann der Bote ungefähr kommt?"]],
      "Welches Wort fehlt?", "Schreiben", "Schreibst", "Geschrieben", "Schreibe", { tipp: "Höfliche Aufforderung mit Sie: Schreiben Sie mir …" }),
    C(8, [["ich", "Hallo Frau Schmidt, ich muss leider unseren Termin am Mittwoch absagen."], ["Frau Schmidt (Jobcenter)", "In Ordnung. Bitte schicken Sie uns ___ Grund schriftlich."]],
      "Welches Wort fehlt?", "den", "dem", "der", "des", { tipp: "schicken + Akkusativ: der Grund → den Grund." }),
    C(8, [["Freund Omid", "Wie war dein Vorstellungsgespräch? 😬"], ["ich", "…?"]],
      "Welche Antwort ist grammatisch richtig?", "Ganz gut! Sie haben mich gefragt, warum ich die Stelle wechseln möchte.", "Ganz gut! Sie haben mich gefragt, warum möchte ich die Stelle wechseln.", "Ganz gut! Sie haben mich gefragt, warum ich möchte die Stelle wechseln.", "Ganz gut! Sie haben mich gefragt, warum die Stelle ich wechseln möchte.", { tipp: "Indirekte Frage = Nebensatz → Verb am Ende." })
  ],
  saetze: [
    S_(["ich", "würde", "gern", "einen", "Termin", "vereinbaren"], ".", "gern würde ich einen termin vereinbaren"),
    S_(["könnten", "Sie", "mir", "bitte", "die", "Unterlagen", "schicken"], "?"),
    S_(["der", "Antrag", "muss", "bis", "Freitag", "eingereicht", "werden"], ".", "bis freitag muss der antrag eingereicht werden"),
    S_(["obwohl", "es", "regnete", "sind", "wir", "spazieren", "gegangen"], ".", "wir sind spazieren gegangen obwohl es regnete"),
    S_(["wegen", "des", "Streiks", "fahren", "heute", "keine", "Busse"], ".", "heute fahren wegen des streiks keine busse", "heute fahren keine busse wegen des streiks"),
    S_(["ich", "weiß", "nicht", "ob", "das", "Amt", "heute", "geöffnet", "hat"], ".", "ob das amt heute geöffnet hat weiß ich nicht"),
    S_(["nachdem", "ich", "den", "Vertrag", "gelesen", "hatte", "habe", "ich", "unterschrieben"], ".", "ich habe unterschrieben nachdem ich den vertrag gelesen hatte"),
    S_(["wären", "Sie", "so", "nett", "mir", "zu", "helfen"], "?")
  ]
};
})();
