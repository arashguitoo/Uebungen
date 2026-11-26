/* =========================================================
   LIVE-UNTERRICHT · Plan „Textwerkstatt: Arbeitsrecht verstehen“ (B2, ca. 65 Min.)
   1) Fachwortschatz vorentlasten  2) Textpuzzle: Fetzen korrigieren (Verbform, Kasus, Präposition …),
   in der Gruppe vorlesen, ordnen, Fragen  3) Nominalstil aus dem Text  4) Anwenden: Fälle besprechen, Quiz
   Lücken im Text: {richtig|falsch|falsch}
   ========================================================= */
(function(){
window.UNTERRICHT_PLAENE = window.UNTERRICHT_PLAENE || {};
const K = (titel, a, ah, b, bh) => ({ titel, a: { t: a, hilfe: ah }, b: { t: b, hilfe: bh } });
window.UNTERRICHT_PLAENE.text1 = {
  id: "text1", titel: "Textwerkstatt: Arbeitsrecht verstehen", minuten: 88,
  text: "Fachwortschatz · Textpuzzle mit Lücken · Expertenrunde · Fehlerdetektiv · Nominalstil · Schneeball-Zusammenfassung · Fälle aus dem Berufsalltag",
  bloecke: [
  /* ---------------------------------------------------------------- */
  { id: "wort", icon: "📚", titel: "Fachwortschatz vorbereiten", minuten: 18,
    tafel: [
      { titel: "Heute: Texte zum Arbeitsrecht", html: `<p>Wir lesen drei anspruchsvolle Texte – über <b>Krankheit im Job</b>, <b>Mitbestimmung</b> und <b>Arbeitszeit & Arbeitsschutz</b>.</p>
        <ol class="schritte"><li><b>Wortschatz</b>: Fachwörter verstehen und erklären</li><li><b>Textpuzzle</b>: Jede Person bekommt einen Teil des Textes – mit Fehlerstellen. Korrigieren, vorlesen, ordnen.</li><li><b>Nominalstil</b>: So klingen Texte im Beruf</li><li><b>Anwenden</b>: Was raten Sie in diesen Fällen?</li></ol>` },
      { titel: "Fachwörter (1): Krankheit und Lohn", html: `<table><tr><th>Fachwort</th><th>Bedeutung</th></tr>
        <tr><td><b>die Arbeitsunfähigkeit</b> (AU)</td><td>Man kann wegen Krankheit nicht arbeiten.</td></tr>
        <tr><td><b>die Arbeitsunfähigkeitsbescheinigung</b></td><td>Bestätigung vom Arzt („Krankschreibung“) – heute meist elektronisch (eAU)</td></tr>
        <tr><td><b>die Entgeltfortzahlung</b></td><td>Der Arbeitgeber zahlt den Lohn bei Krankheit weiter (Entgelt = Lohn/Gehalt).</td></tr>
        <tr><td><b>das Krankengeld</b></td><td>Geld von der Krankenkasse, wenn die Entgeltfortzahlung endet</td></tr>
        <tr><td><b>die Frist</b> · <b>nach Ablauf der Frist</b></td><td>festgelegte Zeit · wenn die Zeit vorbei ist</td></tr>
        <tr><td><b>unverzüglich</b></td><td>sofort, ohne Verzögerung</td></tr></table>` },
      { titel: "Fachwörter (2): Betrieb und Arbeitsschutz", html: `<table><tr><th>Fachwort</th><th>Bedeutung</th></tr>
        <tr><td><b>der Betriebsrat</b> · <b>die Belegschaft</b></td><td>gewählte Vertretung der Beschäftigten · alle Beschäftigten eines Betriebs</td></tr>
        <tr><td><b>die Mitbestimmung</b></td><td>Der Betriebsrat entscheidet mit.</td></tr>
        <tr><td><b>die Betriebsvereinbarung</b></td><td>Vertrag zwischen Arbeitgeber und Betriebsrat</td></tr>
        <tr><td><b>die Anhörung</b> · <b>unwirksam</b></td><td>Jemand darf vorher Stellung nehmen · rechtlich ungültig</td></tr>
        <tr><td><b>die Ruhezeit</b></td><td>freie Zeit zwischen zwei Arbeitstagen</td></tr>
        <tr><td><b>die Gefährdungsbeurteilung</b></td><td>Prüfung: Welche Gefahren gibt es am Arbeitsplatz?</td></tr>
        <tr><td><b>die Unterweisung</b></td><td>Schulung zu Regeln und Sicherheit</td></tr></table>` }
    ],
    aufgaben: [
      { id: "w1", typ: "wahl", titel: "Was bedeutet das Fachwort?", minuten: 5,
        anleitung: "Wähle die richtige Bedeutung.",
        items: [
          { f: "die Arbeitsunfähigkeit", o: ["Man kann wegen Krankheit nicht arbeiten.", "Man hat keine Arbeitsstelle.", "Man darf noch nicht arbeiten, weil man zu jung ist."] },
          { f: "die Entgeltfortzahlung", o: ["Der Lohn wird bei Krankheit weitergezahlt.", "Man bekommt Geld für Überstunden.", "Der Lohn wird später ausgezahlt."] },
          { f: "das Krankengeld", o: ["Geld von der Krankenkasse nach dem Ende der Lohnfortzahlung", "Geld für den Arztbesuch", "ein Bonus für wenige Krankheitstage"] },
          { f: "der Betriebsrat", o: ["die gewählte Vertretung der Beschäftigten", "der Leiter der Personalabteilung", "ein Arzt, der im Betrieb arbeitet"] },
          { f: "die Betriebsvereinbarung", o: ["ein Vertrag zwischen Arbeitgeber und Betriebsrat", "der Arbeitsvertrag einer Person", "ein Gesetz der Bundesregierung"] },
          { f: "die Anhörung", o: ["Jemand darf vorher seine Meinung sagen.", "ein Hörtest beim Arzt", "eine mündliche Prüfung"] },
          { f: "die Ruhezeit", o: ["die freie Zeit zwischen zwei Arbeitstagen", "die Mittagspause", "der Jahresurlaub"] },
          { f: "die Gefährdungsbeurteilung", o: ["die Prüfung der Gefahren am Arbeitsplatz", "die Bewertung der Arbeitsleistung", "ein Bericht über eine Krankheit"] },
          { f: "unverzüglich", o: ["sofort, ohne Verzögerung", "spätestens nach einer Woche", "freiwillig"] },
          { f: "unwirksam", o: ["rechtlich ungültig", "nicht wirtschaftlich", "nicht bekannt"] },
          { f: "die Belegschaft", o: ["alle Beschäftigten eines Betriebs", "die Unterlagen einer Bewerbung", "die Geschäftsführung"] },
          { f: "die Unterweisung", o: ["eine Schulung zu Regeln und Sicherheit", "eine Versetzung in eine andere Abteilung", "eine schriftliche Abmahnung"] }
        ] },
      { id: "w2", typ: "sortieren", titel: "Wer ist zuständig?", minuten: 5,
        anleitung: "Wer macht das? Arbeitgeber, Beschäftigte, Krankenkasse oder Betriebsrat?",
        hinweis: "Arbeitgeber: Lohn weiterzahlen, Arbeitsschutz. Beschäftigte: sich melden, Regeln einhalten. Krankenkasse: Krankengeld. Betriebsrat: mitbestimmen, angehört werden.",
        koerbe: [{ k: "ag", t: "Arbeitgeber" }, { k: "b", t: "Beschäftigte" }, { k: "kk", t: "Krankenkasse" }, { k: "br", t: "Betriebsrat" }],
        items: [
          { t: "zahlt in den ersten sechs Wochen den Lohn weiter", k: "ag" }, { t: "zahlt danach Krankengeld", k: "kk" },
          { t: "meldet sich am ersten Krankheitstag krank", k: "b" }, { t: "führt die Gefährdungsbeurteilung durch", k: "ag" },
          { t: "wird vor jeder Kündigung angehört", k: "br" }, { t: "hält die Schutzmaßnahmen ein", k: "b" },
          { t: "bestimmt bei Überstunden mit", k: "br" }, { t: "ruft die elektronische Krankschreibung ab", k: "ag" },
          { t: "bekommt die Krankschreibung direkt von der Arztpraxis", k: "kk" }, { t: "meldet Mängel sofort der Führungskraft", k: "b" }
        ] },
      { id: "w3", typ: "partner", titel: "Partner: Erklär mir das Fachwort!", minuten: 6,
        anleitung: "A erklärt drei Fachwörter – ohne das Wort zu sagen! Benutze Relativsätze (… ist etwas, das … / eine Person, die …). B rät. Nächste Karte → Rollen tauschen.",
        karten: [
          K("Krankheit und Lohn", "Erkläre: 1. das Krankengeld · 2. die Krankschreibung · 3. die Entgeltfortzahlung", ["Das ist Geld, das …", "Das ist ein Papier, mit dem …", "Das bedeutet, dass der Arbeitgeber …"],
            "Rate die Wörter.", ["Meinst du …?", "Ist das etwas, das …?", "Ich glaube, das Wort ist …"]),
          K("Im Betrieb", "Erkläre: 1. der Betriebsrat · 2. die Belegschaft · 3. die Betriebsvereinbarung", ["Das sind Personen, die …", "Das ist ein Vertrag, den …", "Damit meint man alle, die …"],
            "Rate die Wörter.", ["Ist das eine Gruppe, die …?", "Ich glaube, das ist …"]),
          K("Sicherheit und Zeit", "Erkläre: 1. die Ruhezeit · 2. die Unterweisung · 3. die Gefährdungsbeurteilung", ["Das ist die Zeit, in der …", "Das ist eine Schulung, bei der …", "Hier prüft man, ob …"],
            "Rate die Wörter.", ["Meinst du die Zeit, in der …?", "Ich glaube, das ist …"]),
          K("Freie Wahl", "Wähle drei Fachwörter von der Tafel und erkläre sie.", ["… ist etwas, das …", "… ist eine Person/Stelle, die …"],
            "Rate die Wörter.", ["Ist das …?", "Kannst du noch ein Beispiel geben?"])
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "puzzle", icon: "🧩", titel: "Textpuzzle + Expertenrunde", minuten: 32,
    tafel: [
      { titel: "🧩 So geht das Textpuzzle", html: `<ol class="schritte">
        <li><b>Korrigieren:</b> Du bekommst einen oder zwei <b>Fetzen</b> eines Textes. Darin sind Lücken. Tippe die richtige Form: Verb, Kasus, Präposition, Konnektor …</li>
        <li><b>Vorlesen:</b> Ist dein Fetzen fehlerfrei, liest du ihn deiner <b>Gruppe</b> vor (gleiches Symbol 🩺 🤝 ⏱️ – im Raum oder im Breakout-Raum). <b>Nicht zeigen – vorlesen!</b></li>
        <li><b>Ordnen:</b> Hört genau zu: Welcher Fetzen kommt zuerst? Gib am Handy die Nummer deines Fetzens an.</li>
        <li><b>Verstehen:</b> Beantwortet die Fragen zum ganzen Text <b>zusammen</b>.</li>
        <li><b>Vorstellen:</b> Eine Person aus jeder Gruppe erklärt den anderen Gruppen in 3 Sätzen, worum es geht.</li></ol>` },
      { titel: "🎓 Expertenrunde: neue Gruppen", html: `<p>Jetzt seid ihr <b>Expertinnen und Experten</b> für euren Text.</p>
        <ol class="schritte"><li>Neue Runden: In jeder Runde sitzt <b>eine Person pro Text</b> (🩺 🤝 ⏱️).</li><li>Jede Person erklärt <b>ihren Text in 3–4 Sätzen</b> – die anderen kennen ihn nicht!</li><li>Die anderen stellen <b>eine Frage</b>.</li></ol>
        <div class="bsp">In meinem Text geht es um … · Das Wichtigste ist: … · Zum Beispiel muss/darf … · Zuständig ist …</div>` },
      { titel: "Danach: Die Gruppe stellt vor", html: `<div class="bsp">In unserem Text geht es um … · Wichtig ist, dass … · Wenn …, dann … · Zuständig ist … · Uns hat überrascht, dass …</div>
        <p class="klein">Die anderen Gruppen stellen eine Frage: <i>Was passiert, wenn …? Wer muss …? Gilt das auch für …?</i></p>` }
    ],
    aufgaben: [
      { id: "tp", typ: "puzzle", titel: "Textpuzzle: Arbeitsrecht", minuten: 18,
        anleitung: "1. Lücken in deinem Fetzen korrigieren. 2. In der Gruppe vorlesen. 3. Die Nummer deines Fetzens finden. 4. Fragen zum ganzen Text zusammen beantworten.",
        geschichten: [
          { id: "krank", icon: "🩺", farbe: "#2F6FDB", titel: "Krank im Job – was gilt?",
            fetzen: [
              "Wer arbeitsunfähig {ist|hat|wäre}, muss {seinen|seinem|seiner} Arbeitgeber unverzüglich informieren. Die Krankmeldung erfolgt in der Regel am ersten Krankheitstag {vor|nach|seit} Arbeitsbeginn – telefonisch oder per E-Mail.",
              "Dauert die Arbeitsunfähigkeit länger als drei Kalendertage, {muss|darf|braucht} spätestens am darauffolgenden Arbeitstag eine ärztliche Bescheinigung vorliegen. Seit 2023 {wird|ist|hat} diese Bescheinigung meist elektronisch an die Krankenkasse übermittelt; der Arbeitgeber ruft sie dort ab. Die Diagnose erfährt er dabei {nicht|kein|nichts}.",
              "Während der ersten sechs Wochen hat der Arbeitnehmer Anspruch auf Entgeltfortzahlung in voller Höhe. Voraussetzung dafür ist, dass das Arbeitsverhältnis {seit|vor|bei} mindestens vier Wochen ununterbrochen {besteht|bestehe|bestanden}.",
              "Nach Ablauf {dieser|dieses|diesem} Frist zahlt die Krankenkasse Krankengeld. Es beträgt 70 Prozent des Bruttoentgelts, höchstens jedoch 90 Prozent des Nettoentgelts. Eine Kündigung allein {wegen|trotz|während} einer Krankheit ist nicht ohne Weiteres zulässig."
            ],
            items: [
              { f: "🩺 Wann muss die Krankmeldung beim Arbeitgeber sein?", o: ["am ersten Krankheitstag vor Arbeitsbeginn", "nach drei Kalendertagen", "erst mit der ärztlichen Bescheinigung"] },
              { f: "🩺 Was erfährt der Arbeitgeber aus der elektronischen Bescheinigung nicht?", o: ["die Diagnose", "den Beginn der Arbeitsunfähigkeit", "die voraussichtliche Dauer"] },
              { f: "🩺 Wer zahlt nach sechs Wochen Krankheit?", o: ["die Krankenkasse", "der Arbeitgeber", "der Betriebsrat"] },
              { f: "🩺 Was ist Voraussetzung für die Entgeltfortzahlung?", o: ["Das Arbeitsverhältnis besteht seit mindestens vier Wochen.", "Die Probezeit ist vorbei.", "Es gibt einen Tarifvertrag."] }
            ] },
          { id: "mitbest", icon: "🤝", farbe: "#14A37F", titel: "Mitbestimmung im Betrieb",
            fetzen: [
              "In Betrieben mit mindestens fünf ständigen wahlberechtigten Beschäftigten {kann|muss|soll} ein Betriebsrat gewählt werden. Die Wahl findet alle vier Jahre statt; die Rechte des Betriebsrats {sind|werden|haben} im Betriebsverfassungsgesetz geregelt.",
              "Der Betriebsrat vertritt die Interessen {der|die|den} Belegschaft gegenüber {dem|den|der} Arbeitgeber. Bei vielen Fragen hat er ein echtes Mitbestimmungsrecht, etwa bei {der|die|dem} Lage der Arbeitszeit, bei Überstunden oder bei den Grundsätzen der Urlaubsplanung.",
              "Einigen sich Arbeitgeber und Betriebsrat, {schließen|schließt|geschlossen} sie häufig eine Betriebsvereinbarung ab. Sie gilt unmittelbar für alle Beschäftigten des Betriebs. Kommt keine Einigung {zustande|statt|vor}, entscheidet eine Einigungsstelle.",
              "Auch vor jeder Kündigung {muss|kann|darf} der Betriebsrat angehört werden. Eine Kündigung, die ohne diese Anhörung ausgesprochen {wurde|worden|werden}, ist unwirksam. Die Mitglieder des Betriebsrats genießen selbst einen besonderen Kündigungsschutz."
            ],
            items: [
              { f: "🤝 Ab wie vielen Beschäftigten kann ein Betriebsrat gewählt werden?", o: ["ab fünf", "ab zwanzig", "ab fünfzig"] },
              { f: "🤝 Wobei hat der Betriebsrat ein Mitbestimmungsrecht?", o: ["bei Überstunden", "bei der Werbung für neue Produkte", "bei den Gehältern der Geschäftsführung"] },
              { f: "🤝 Was passiert, wenn der Betriebsrat vor einer Kündigung nicht angehört wurde?", o: ["Die Kündigung ist unwirksam.", "Der Betriebsrat muss eine Strafe zahlen.", "Nichts – die Anhörung ist freiwillig."] },
              { f: "🤝 Wer entscheidet, wenn sich beide Seiten nicht einigen?", o: ["eine Einigungsstelle", "die Agentur für Arbeit", "die Gewerkschaft"] }
            ] },
          { id: "zeit", icon: "⏱️", farbe: "#C2410C", titel: "Arbeitszeit und Arbeitsschutz",
            fetzen: [
              "Nach dem Arbeitszeitgesetz darf die werktägliche Arbeitszeit acht Stunden grundsätzlich nicht {überschreiten|überschritten|überschreitet}. Eine Verlängerung auf zehn Stunden ist nur möglich, {wenn|ob|damit} im Durchschnitt von sechs Monaten acht Stunden pro Werktag nicht überschritten werden.",
              "Wer mehr als sechs Stunden arbeitet, hat Anspruch auf eine Pause von mindestens 30 Minuten, bei mehr als neun Stunden {auf|für|von} 45 Minuten. Zwischen zwei Arbeitstagen muss eine ununterbrochene Ruhezeit von mindestens elf Stunden {liegen|legen|gelegt}.",
              "Der Arbeitgeber ist {für|zu|über} den Arbeitsschutz verantwortlich. Er muss eine Gefährdungsbeurteilung {durchführen|durchgeführt|durchzuführen}: Welche Gefahren bestehen an jedem Arbeitsplatz, und mit welchen Maßnahmen lassen sie sich {vermeiden|vermieden|vermeidet}?",
              "Die Beschäftigten werden regelmäßig {unterwiesen|unterweisen|unterwies}, meist einmal im Jahr. Sie sind ihrerseits verpflichtet, die Schutzmaßnahmen {einzuhalten|einhalten|eingehalten} und Mängel sofort {ihrer|ihre|ihren} Führungskraft zu melden."
            ],
            items: [
              { f: "⏱️ Wie lange darf man höchstens am Tag arbeiten?", o: ["zehn Stunden – wenn im Durchschnitt acht Stunden nicht überschritten werden", "immer nur acht Stunden", "zwölf Stunden, wenn der Chef es erlaubt"] },
              { f: "⏱️ Wie lange muss die Ruhezeit zwischen zwei Arbeitstagen mindestens sein?", o: ["elf Stunden", "acht Stunden", "sechs Stunden"] },
              { f: "⏱️ Was prüft eine Gefährdungsbeurteilung?", o: ["welche Gefahren es an den Arbeitsplätzen gibt", "wie gesund die Beschäftigten sind", "ob alle pünktlich kommen"] },
              { f: "⏱️ Was müssen die Beschäftigten tun?", o: ["Schutzmaßnahmen einhalten und Mängel melden", "die Gefährdungsbeurteilung schreiben", "jedes Jahr eine Prüfung ablegen"] }
            ] }
        ] },
      { id: "ex", typ: "experten", quelle: "tp", titel: "Expertenrunde: Erklär deinen Text!", minuten: 8,
        anleitung: "Neue Runden: eine Person pro Text. Jede Person erklärt ihren Text in 3–4 Sätzen, die anderen stellen eine Frage.",
        leit: {
          krank: ["Wann und wie muss man sich krankmelden?", "Wann braucht man eine Bescheinigung vom Arzt?", "Wer zahlt wie lange – Arbeitgeber oder Krankenkasse?"],
          mitbest: ["Wann kann es einen Betriebsrat geben?", "Wobei bestimmt der Betriebsrat mit?", "Was passiert bei einer Kündigung ohne Anhörung?"],
          zeit: ["Wie lange darf man pro Tag arbeiten?", "Welche Pausen und Ruhezeiten gibt es?", "Was muss der Arbeitgeber, was müssen die Beschäftigten tun?"]
        },
        redemittel: ["In meinem Text geht es um …", "Das Wichtigste ist, dass …", "Laut Gesetz muss / darf …", "Zuständig dafür ist …", "Habt ihr dazu eine Frage?", "Frage: Was passiert, wenn …?"] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "fehler", icon: "🔍", titel: "Fehlerdetektiv", minuten: 8,
    tafel: [
      { titel: "🔍 Fehlerdetektiv", html: `<p>Eine Kollegin hat eine <b>Zusammenfassung</b> der drei Texte geschrieben – mit <b>8 Fehlern</b>.</p>
        <ol class="schritte"><li>Lies den Text am Handy.</li><li><b>Tippe auf jedes falsche Wort.</b> Richtig gefunden → die Korrektur erscheint.</li><li>Achtung: Falsches Tippen wird gezählt!</li></ol>
        <div class="chips"><span>Kasus</span><span>Adjektivendung</span><span>Verbposition</span><span>Subjekt–Verb</span><span>Relativpronomen</span><span>Passiv</span><span>Vergleich</span><span>Nebensatz</span></div>` }
    ],
    aufgaben: [
      { id: "fd", typ: "fehler", titel: "Finde die 8 Fehler!", minuten: 6,
        anleitung: "Tippe auf jedes falsche Wort. Es gibt genau 8 Fehler. Falsche Klicks werden gezählt – erst lesen, dann tippen!",
        text: "Wenn eine Arbeitnehmerin krank wird, muss sie [ihrem>ihren] Arbeitgeber sofort informieren. Dauert die Krankheit länger [wie>als] drei Tage, braucht sie eine [ärztlichen>ärztliche] Bescheinigung. In den ersten sechs Wochen [zahlen>zahlt] der Arbeitgeber den Lohn weiter. Danach [sie bekommt>bekommt sie] Krankengeld von der Krankenkasse. In vielen Betrieben gibt es einen Betriebsrat, [das>der] die Interessen der Beschäftigten vertritt. Vor jeder Kündigung muss er [angehören>angehört] werden. Außerdem achtet er darauf, dass die Regeln zum Arbeitsschutz [werden eingehalten>eingehalten werden]. Zwischen zwei Arbeitstagen müssen mindestens elf Stunden Ruhezeit liegen.",
        hinweise: ["informieren + Akkusativ: ihren Arbeitgeber", "Komparativ + als: länger als", "eine + feminin Akkusativ: eine ärztliche Bescheinigung", "Subjekt „der Arbeitgeber“ ist Singular → zahlt", "Hauptsatz: Verb auf Position 2 → Danach bekommt sie", "der Betriebsrat (maskulin) → der", "Passiv: werden + Partizip II → angehört werden", "Nebensatz mit dass: Verb am Ende → eingehalten werden"] }
    ] },
  { id: "nominal", icon: "🏛️", titel: "Nominalstil aus dem Text", minuten: 12,
    tafel: [
      { titel: "Texte im Beruf: Nominalstil", html: `<table><tr><th>Verbalstil (gesprochen)</th><th>Nominalstil (Text)</th></tr>
        <tr><td><b>Nachdem</b> die Frist abgelaufen ist, …</td><td><b>Nach Ablauf</b> der Frist …</td></tr>
        <tr><td><b>Wenn</b> der Betriebsrat nicht angehört wurde, …</td><td><b>Ohne Anhörung</b> des Betriebsrats …</td></tr>
        <tr><td><b>Damit</b> Unfälle vermieden werden, …</td><td><b>Zur Vermeidung</b> von Unfällen …</td></tr>
        <tr><td><b>Weil</b> er krank ist, …</td><td><b>Wegen</b> seiner Krankheit …</td></tr>
        <tr><td><b>Indem</b> man die Arbeitszeit verlängert, …</td><td><b>Durch</b> eine Verlängerung der Arbeitszeit …</td></tr></table>
        <div class="hinweis">Verb → Nomen: verlängern → <b>die Verlängerung</b> · anhören → <b>die Anhörung</b> · ablaufen → <b>der Ablauf</b> · einigen → <b>die Einigung</b> · Objekt → Genitiv: die Frist läuft ab → der Ablauf <b>der Frist</b></div>` }
    ],
    aufgaben: [
      { id: "n1", typ: "wahl", titel: "Verbal → nominal", minuten: 5,
        anleitung: "Welcher Ausdruck hat dieselbe Bedeutung?",
        items: [
          { f: "Nachdem die Frist abgelaufen ist, …", o: ["Nach Ablauf der Frist …", "Vor Ablauf der Frist …", "Bei Ablauf von die Frist …"] },
          { f: "Wenn der Betriebsrat nicht angehört wurde, …", o: ["Ohne Anhörung des Betriebsrats …", "Mit Anhörung des Betriebsrats …", "Wegen der Anhörung des Betriebsrats …"] },
          { f: "Damit Unfälle vermieden werden, …", o: ["Zur Vermeidung von Unfällen …", "Trotz Vermeidung von Unfällen …", "Nach der Vermeidung der Unfälle …"] },
          { f: "Weil er lange krank war, …", o: ["Wegen seiner langen Krankheit …", "Trotz seiner langen Krankheit …", "Während seiner langen Krankheit war …"] },
          { f: "Indem man die Arbeitszeit verlängert, …", o: ["Durch eine Verlängerung der Arbeitszeit …", "Bei einer Verlängerung von der Arbeitszeit …", "Für eine Verlängerung die Arbeitszeit …"] },
          { f: "Wenn man mehr als sechs Stunden arbeitet, …", o: ["Bei einer Arbeitszeit von mehr als sechs Stunden …", "Nach mehr als sechs Stunden zu arbeiten …", "Wegen mehr als sechs Stunden Arbeit hat …"] },
          { f: "die Arbeitszeit verlängern → ___", o: ["die Verlängerung der Arbeitszeit", "die Verlängerung von die Arbeitszeit", "das Arbeitszeitverlängern der"] },
          { f: "Arbeitgeber und Betriebsrat einigen sich. → ___", o: ["die Einigung zwischen Arbeitgeber und Betriebsrat", "die Einigung von Arbeitgeber und Betriebsrat sich", "das Einigen zwischen den Arbeitgeber und Betriebsrat"] }
        ] },
      { id: "n2", typ: "bauen", titel: "Sätze im Nominalstil bauen", minuten: 5,
        anleitung: "Bau den Satz. Am Anfang steht der nominale Ausdruck – danach das Verb.",
        hinweis: "Nominaler Ausdruck auf Position 1, dann sofort das Verb, dann das Subjekt.",
        items: [
          { w: ["nach", "Ablauf", "der", "Frist", "zahlt", "die", "Krankenkasse", "Krankengeld"], a: ["nach ablauf der frist zahlt die krankenkasse krankengeld", "die krankenkasse zahlt nach ablauf der frist krankengeld"], p: "." },
          { w: ["ohne", "Anhörung", "des", "Betriebsrats", "ist", "die", "Kündigung", "unwirksam"], a: ["ohne anhörung des betriebsrats ist die kündigung unwirksam", "die kündigung ist ohne anhörung des betriebsrats unwirksam"], p: "." },
          { w: ["zur", "Vermeidung", "von", "Unfällen", "werden", "die", "Beschäftigten", "unterwiesen"], a: ["zur vermeidung von unfällen werden die beschäftigten unterwiesen", "die beschäftigten werden zur vermeidung von unfällen unterwiesen"], p: "." },
          { w: ["bei", "Krankheit", "muss", "man", "den", "Arbeitgeber", "sofort", "informieren"], a: ["bei krankheit muss man den arbeitgeber sofort informieren", "man muss bei krankheit den arbeitgeber sofort informieren", "man muss den arbeitgeber bei krankheit sofort informieren"], p: "." }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "schnee", icon: "❄️", titel: "Schneeball: Zusammenfassen", minuten: 8,
    tafel: [
      { titel: "❄️ Schneeball-Zusammenfassung", html: `<ol class="schritte"><li><b>Zu zweit</b> (Partner am Handy / Breakout-Raum): Sammelt die <b>5 wichtigsten Informationen</b> aus den Texten.</li>
        <li>Formuliert zusammen <b>3 Sätze</b> – mit mindestens einem <b>Nominalausdruck</b>.</li><li><b>Zwei Paare zusammen</b> (ich lege die Räume zusammen): Vergleicht und macht <b>eine</b> gemeinsame Version.</li><li>Eine Person liest die Version <b>allen vor</b>.</li></ol>
        <div class="bsp">Bei Krankheit muss man … · Nach Ablauf von sechs Wochen … · Ohne Anhörung des Betriebsrats … · Zur Vermeidung von Unfällen …</div>` }
    ],
    aufgaben: [
      { id: "sb", typ: "partner", titel: "Schneeball: In drei Sätzen", minuten: 8,
        anleitung: "Zu zweit: Karte für Karte. Danach legt die Lehrkraft zwei Paare zusammen.",
        karten: [
          K("1 · Sammeln", "Nenne die 2–3 wichtigsten Informationen aus deinem Text.", ["In meinem Text war wichtig, dass …", "Man muss / darf …", "Zuständig ist …"],
            "Hör zu, notiere Stichwörter und ergänze eine Information aus deinem Text.", ["Aus meinem Text kommt noch dazu: …", "Wichtig finde ich auch …"]),
          K("2 · Formulieren", "Sag einen Satz für die Zusammenfassung – mit einem Nominalausdruck.", ["Nach Ablauf der Frist …", "Ohne Anhörung des Betriebsrats …", "Bei Krankheit …"],
            "Korrigiere oder verbessere den Satz. Sag dann den zweiten Satz.", ["Besser wäre: …", "Mein Satz: …"]),
          K("3 · Prüfen", "Lies eure drei Sätze noch einmal laut vor.", ["Erstens …, zweitens …, drittens …"],
            "Prüfe: Verb auf Position 2? Richtiger Kasus? Fachwörter?", ["Hier fehlt …", "Das Verb muss …", "Passt!"])
        ] }
    ] },
  { id: "fall", icon: "💬", titel: "Anwenden: Was raten Sie?", minuten: 10,
    tafel: [
      { titel: "Fälle aus dem Berufsalltag", html: `<p>Ich ziehe einen Namen. Sie bekommen einen <b>Fall</b> und geben einen <b>Rat</b> – mit Begründung aus dem Text.</p>
        <div class="bsp">Ich würde ihr raten, … · Laut Gesetz muss/darf … · Zuständig ist … · Wichtig ist, dass … · Nach Ablauf von …</div>` },
      { titel: "🏠 Hausaufgabe: Schreibwerkstatt", html: `<p>Übungszentrale → <b>Schreiben</b> → <b>„Zusammenfassung: Texte zum Arbeitsrecht“</b> (80–110 Wörter).</p>
        <ul><li>Thema nennen</li><li>wichtigste Regeln mit Zahlen</li><li>wer ist wofür zuständig?</li><li>mindestens zwei Nominalausdrücke</li></ul><p class="klein">Abgeben – ich korrigiere und gebe die Korrektur frei.</p>` }
    ],
    aufgaben: [
      { id: "f1", typ: "sprechen", titel: "Blitzrunde: Was raten Sie?", minuten: 6,
        anleitung: "Lies den Fall. Gib einen Rat mit Begründung – zwei bis drei Sätze.",
        saetze: [
          "Ihre Kollegin ist seit vier Tagen krank, war aber noch nicht beim Arzt. Was raten Sie ihr?",
          "Ein Freund ist seit zwei Wochen in der neuen Firma und wird krank. Bekommt er seinen Lohn weiter?",
          "Ihr Chef möchte, dass alle jeden Tag zwölf Stunden arbeiten. Was sagen Sie?",
          "In Ihrer Firma arbeiten 30 Personen, aber es gibt keinen Betriebsrat. Was können die Beschäftigten tun?",
          "Ein Kollege wurde gekündigt – der Betriebsrat wusste nichts davon. Was bedeutet das?",
          "An Ihrem Arbeitsplatz ist ein Kabel kaputt. Was müssen Sie tun – und wer ist verantwortlich?",
          "Sie haben bis 23 Uhr gearbeitet. Ihr Chef möchte, dass Sie um 7 Uhr wieder da sind. Geht das?"
        ] },
      { id: "fq", typ: "quiz", titel: "Quiz: Arbeitsrecht und Sprache", minuten: 0,
        items: [
          { f: "Wie lange zahlt der Arbeitgeber den Lohn bei Krankheit weiter?", o: ["sechs Wochen", "zwei Wochen", "drei Monate", "ein Jahr"] },
          { f: "„unverzüglich“ bedeutet …", o: ["sofort", "freiwillig", "nach einer Woche", "schriftlich"] },
          { f: "Eine Kündigung ohne Anhörung des Betriebsrats ist …", o: ["unwirksam", "unverzüglich", "üblich", "unbefristet"] },
          { f: "Nachdem die Frist abgelaufen ist → ___ der Frist", o: ["Nach Ablauf", "Vor Ablauf", "Bei Ablauf", "Seit Ablauf"] },
          { f: "Der Betriebsrat vertritt die Interessen ___ Belegschaft.", o: ["der", "die", "den", "dem"] },
          { f: "Die Bescheinigung ___ elektronisch übermittelt.", o: ["wird", "ist", "hat", "würde"] },
          { f: "Ruhezeit zwischen zwei Arbeitstagen: mindestens …", o: ["elf Stunden", "acht Stunden", "sechs Stunden", "zwölf Stunden"] },
          { f: "Die Beschäftigten sind verpflichtet, die Regeln ___.", o: ["einzuhalten", "einhalten", "eingehalten", "zu einhalten"] }
        ] }
    ] }
  ]
};
})();
