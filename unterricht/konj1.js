/* =========================================================
   LIVE-UNTERRICHT · Plan „Man lernt nie aus · Konjunktiv I“ (60 Min.)
   Linie 1 Beruf, Lektion 14 – Texte zu Luka, Sachin, Nesrin, Alice wiederholen,
   Konjunktiv I erklären und üben, Gruppenpuzzle (Fetzen an anderen Tischen suchen),
   Kugellager „Was hat dein Partner gesagt?“, Quiz, Weiterbildung finanzieren.
   Aufgabentypen: wahl · sortieren · bauen · sprechen · puzzle · kugellager · haelften · quiz
   ========================================================= */
window.UNTERRICHT_PLAENE = window.UNTERRICHT_PLAENE || {};
window.UNTERRICHT_PLAENE.konj1 = {
  id: "konj1", titel: "Man lernt nie aus · Konjunktiv I", minuten: 60,
  text: "Texte wiederholen · Konjunktiv I: Bildung, Ersatzform, Vergangenheit, Fragen · Gruppenpuzzle · Kugellager · Quiz · Weiterbildung finanzieren",
  bloecke: [
  /* ---------------------------------------------------------------- */
  { id: "start", icon: "🚦", titel: "Einstieg", minuten: 4,
    tafel: [
      { titel: "Man lernt nie aus.", html: `<p>Heute:</p>
        <div class="chips"><span>📰 Die vier Texte wiederholen</span><span>🧩 Konjunktiv I verstehen</span><span>🚶 Gruppenpuzzle: Fetzen suchen</span><span>🔄 Kugellager: Was hat sie gesagt?</span><span>⚡ Quiz</span><span>💶 Weiterbildung finanzieren</span></div>
        <div class="bsp">Was haben <b>Sie</b> als Erwachsene / als Erwachsener neu gelernt?<br>Was <b>möchten</b> Sie noch lernen – und warum?</div>
        <p class="klein">Ich ziehe eine Person. Sie antwortet mit <b>zwei Sätzen</b>.</p>` }
    ],
    aufgaben: [
      { id: "e1", typ: "sprechen", titel: "Blitzrunde: Lernen im Leben", minuten: 3,
        anleitung: "Wer gezogen wird, antwortet mit zwei Sätzen. Alle anderen: gut zuhören – gleich berichten wir darüber!",
        saetze: ["Was haben Sie als Erwachsene/r neu gelernt?", "Welche Weiterbildung würde Ihnen im Beruf helfen?", "Lernt man im Alter langsamer? Was meinen Sie?", "Wer hat Ihnen beim Lernen am meisten geholfen?", "Was möchten Sie in fünf Jahren können?"] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "text", icon: "📰", titel: "Die vier Texte", minuten: 8,
    tafel: [
      { titel: "Vier Menschen – vier Wege", html: `<table><tr><th>Person</th><th>Stichpunkte</th></tr>
        <tr><td><b>Luka Horvat</b></td><td>Mechatroniker in einer Autowerkstatt · repariert in der Freizeit mit Kindern im Kinderheim Fahrräder · kennt Migration aus eigener Erfahrung · sucht eine Weiterbildung</td></tr>
        <tr><td><b>Sachin Prachad</b></td><td>ältester Student seiner Uni · bis 92 berufstätig · geistig fit · schreibt eine Doktorarbeit</td></tr>
        <tr><td><b>Nesrin Abay</b></td><td>aus Syrien geflohen · Ausbildung zur Industriemechanikerin · manche Kollegen trauen Frauen wenig zu · will Maschinenbau studieren</td></tr>
        <tr><td><b>Alice Kapp</b></td><td>Lehrerin · seit einem Unfall im Rollstuhl · liebt ihren Job · sucht Ausbildungsplätze für ihre Schüler</td></tr></table>
        <p class="klein">Buch: Linie 1 Beruf, Lektion 14, Aufgabe 2a</p>` },
      { titel: "Was fällt auf?", html: `<p>In den Zeitungsmeldungen stehen viele Sätze wie:</p>
        <div class="bsp">Er <b class="rot">wisse</b>, wie es <b class="rot">sei</b>, in einem fremden Land neu anzufangen, stellt Luka fest.</div>
        <p>Das ist <b>nicht</b> die Meinung der Zeitung. Die Zeitung gibt wieder, was <b>Luka gesagt hat</b>.</p>
        <div class="hinweis">👉 Diese Form heißt <b>Konjunktiv I</b> – die Form für die <b>indirekte Rede</b>.</div>` }
    ],
    aufgaben: [
      { id: "t1", typ: "wahl", titel: "Wer ist das?", minuten: 4,
        anleitung: "Tippe die richtige Person. Du darfst ins Buch schauen.",
        items: [
          { f: "Wer arbeitet in einer Autowerkstatt?", o: ["Luka Horvat", "Sachin Prachad", "Nesrin Abay", "Alice Kapp"], tipp: "Mechatroniker!" },
          { f: "Wer ist der älteste Student an seiner Universität?", o: ["Sachin Prachad", "Luka Horvat", "Nesrin Abay", "Alice Kapp"] },
          { f: "Wer macht eine Ausbildung zur Industriemechanikerin?", o: ["Nesrin Abay", "Alice Kapp", "Luka Horvat", "Sachin Prachad"] },
          { f: "Wer sitzt seit einem Unfall im Rollstuhl?", o: ["Alice Kapp", "Nesrin Abay", "Sachin Prachad", "Luka Horvat"] },
          { f: "Wer repariert in der Freizeit mit Kindern Fahrräder?", o: ["Luka Horvat", "Alice Kapp", "Sachin Prachad", "Nesrin Abay"] },
          { f: "Wer war bis zum 92. Geburtstag berufstätig?", o: ["Sachin Prachad", "Luka Horvat", "Alice Kapp", "Nesrin Abay"] },
          { f: "Wer möchte später Maschinenbau studieren?", o: ["Nesrin Abay", "Luka Horvat", "Sachin Prachad", "Alice Kapp"] },
          { f: "Wer sucht Ausbildungsplätze für die eigenen Schüler?", o: ["Alice Kapp", "Nesrin Abay", "Luka Horvat", "Sachin Prachad"] }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "regel", icon: "📐", titel: "Lehrtafel: Konjunktiv I", minuten: 10,
    tafel: [
      { titel: "1 · Wozu Konjunktiv I?", html: `<div class="zwei-sp"><div class="box-blau"><b>Direkte Rede</b><div class="bsp">Alice: „Ich <b>liebe</b> diesen Job.“</div></div>
        <div class="box-gruen"><b>Indirekte Rede</b><div class="bsp">Alice betont, sie <b class="rot">liebe</b> diesen Job.</div></div></div>
        <ul><li>Man <b>gibt wieder</b>, was eine andere Person gesagt hat.</li><li>Man bleibt <b>neutral</b>: „Das hat sie gesagt – nicht ich.“</li>
        <li>Typisch für <b>Zeitung, Nachrichten, Berichte, Protokolle</b>.</li><li>Im Gespräch sagt man oft einfach: <i>Sie sagt, dass sie den Job liebt.</i></li></ul>` },
      { titel: "2 · So bildet man Konjunktiv I", html: `<p><b>Infinitiv-Stamm + e</b> → er/sie/es <b>-e</b></p>
        <table><tr><th>Infinitiv</th><th>er / sie / es</th></tr>
        <tr><td>mach-en</td><td>er mach<b class="rot">e</b></td></tr><tr><td>hab-en</td><td>sie hab<b class="rot">e</b></td></tr>
        <tr><td>könn-en</td><td>er könn<b class="rot">e</b> (kein Umlaut weg!)</td></tr><tr><td>wiss-en</td><td>er wiss<b class="rot">e</b></td></tr>
        <tr><td>werd-en</td><td>sie werd<b class="rot">e</b></td></tr><tr><td><b>sein</b></td><td>er <b class="rot">sei</b> (ohne -e!)</td></tr></table>
        <div class="hinweis">Kein Vokalwechsel: er <b>spricht</b> → er <b>spreche</b> · sie <b>fährt</b> → sie <b>fahre</b></div>` },
      { titel: "3 · sein und haben", html: `<div class="zwei-sp"><div><table><tr><th colspan="2">sein</th></tr><tr><td>ich</td><td>sei</td></tr><tr><td>du</td><td>sei(e)st</td></tr><tr><td>er/sie/es</td><td><b class="rot">sei</b></td></tr><tr><td>wir</td><td>seien</td></tr><tr><td>ihr</td><td>seiet</td></tr><tr><td>sie/Sie</td><td><b class="rot">seien</b></td></tr></table></div>
        <div><table><tr><th colspan="2">haben</th></tr><tr><td>ich</td><td><s>habe</s> → hätte</td></tr><tr><td>du</td><td>habest</td></tr><tr><td>er/sie/es</td><td><b class="rot">habe</b></td></tr><tr><td>wir</td><td><s>haben</s> → hätten</td></tr><tr><td>ihr</td><td>habet</td></tr><tr><td>sie/Sie</td><td><s>haben</s> → <b class="rot">hätten</b></td></tr></table></div></div>
        <p class="klein">In der Praxis braucht man fast nur die <b>3. Person</b>: er/sie/es und sie (Plural).</p>` },
      { titel: "4 · Ersatzform: Konjunktiv II", html: `<p>Wenn Konjunktiv I <b>genauso aussieht wie der Indikativ</b>, nimmt man <b>Konjunktiv II</b>:</p>
        <div class="bsp">Die Kollegen sagen, sie <s>haben</s> → sie <b class="rot">hätten</b> keine Zeit.<br>Viele erzählen, sie <s>kommen</s> → sie <b class="rot">kämen</b> / <b class="rot">würden</b> gern <b>kommen</b>.<br>Die Schüler meinen, sie <s>brauchen</s> → sie <b class="rot">bräuchten</b> mehr Hilfe.</div>
        <div class="hinweis">Faustregel: <b>er/sie/es</b> → fast immer Konjunktiv I. <b>sie (Plural)</b> → oft Konjunktiv II (außer: <b>seien</b>).</div>` },
      { titel: "5 · Vergangenheit, Fragen, Bitten", html: `<table><tr><th>direkt</th><th>indirekt</th></tr>
        <tr><td>„Ich <b>bin</b> nach Kiel <b>gezogen</b>.“</td><td>Er sagt, er <b class="rot">sei</b> nach Kiel gezogen.</td></tr>
        <tr><td>„Ich <b>habe</b> den Preis <b>gewonnen</b>.“</td><td>Sie sagt, sie <b class="rot">habe</b> den Preis gewonnen.</td></tr>
        <tr><td>„Ich <b>werde</b> studieren.“</td><td>Sie sagt, sie <b class="rot">werde</b> studieren.</td></tr>
        <tr><td>„<b>Gibt</b> es eine Prüfung?“</td><td>Er fragt, <b>ob</b> es eine Prüfung <b class="rot">gebe</b>.</td></tr>
        <tr><td>„<b>Wann</b> beginnt der Kurs?“</td><td>Er fragt, <b>wann</b> der Kurs <b class="rot">beginne</b>.</td></tr>
        <tr><td>„<b>Rufen</b> Sie mich an!“</td><td>Sie bittet, er <b class="rot">solle</b> sie anrufen.</td></tr></table>
        <div class="hinweis">Vergangenheit: <b>immer</b> sei/habe + Partizip II – nie „er fuhr“ → „er führe“! · Pronomen anpassen: ich → er/sie, mein → sein/ihr.</div>` }
    ],
    aufgaben: [
      { id: "r1", typ: "sortieren", titel: "Konjunktiv I oder Ersatzform?", minuten: 3,
        anleitung: "Was steht in der indirekten Rede? Konjunktiv I – oder Konjunktiv II als Ersatz?",
        hinweis: "Sieht die Form genauso aus wie der Indikativ (sie haben, sie kommen)? Dann Konjunktiv II.",
        koerbe: [{ k: "k1", t: "Konjunktiv I" }, { k: "k2", t: "Ersatz: Konjunktiv II" }],
        items: [
          { t: "er (haben) → er habe", k: "k1" }, { t: "sie, Plural (haben) → sie hätten", k: "k2" },
          { t: "sie, Singular (können) → sie könne", k: "k1" }, { t: "sie, Plural (sein) → sie seien", k: "k1" },
          { t: "wir (müssen) → wir müssten", k: "k2" }, { t: "es (geben) → es gebe", k: "k1" },
          { t: "sie, Plural (brauchen) → sie bräuchten", k: "k2" }, { t: "er (wissen) → er wisse", k: "k1" }
        ] },
      { id: "r2", typ: "wahl", titel: "Die richtige Form", minuten: 4,
        anleitung: "Was steht in der Zeitung? Wähle die richtige Form.",
        items: [
          { f: "Sachin: „Ich bin geistig fit.“ → Sachin sagt, er ___ geistig fit.", o: ["sei", "ist", "wäre", "seie"], tipp: "sein → er sei (ohne -e)" },
          { f: "Alice: „Man braucht gute Nerven.“ → Alice meint, man ___ gute Nerven.", o: ["brauche", "braucht", "bräuchte", "brauchen"], tipp: "man = er/sie/es → Stamm + e" },
          { f: "Nesrin: „Ich will Maschinenbau studieren.“ → Sie sagt, sie ___ Maschinenbau studieren.", o: ["wolle", "will", "wollte", "wollen"], tipp: "woll-en → sie wolle" },
          { f: "Luka: „Ich suche eine Weiterbildung.“ → Luka sagt, er ___ eine Weiterbildung.", o: ["suche", "sucht", "suchte", "suchen"] },
          { f: "„Viele Kollegen trauen Frauen nichts zu.“ → Nesrin sagt, viele Kollegen ___ Frauen nichts zu.", o: ["trauten", "trauen", "traue", "trauet"], tipp: "sie trauen = Indikativ → Ersatzform Konjunktiv II: trauten (oder: würden … zutrauen)" },
          { f: "Luka: „Ich fuhr nach Kroatien.“ → Luka erzählt, er ___ nach Kroatien gefahren.", o: ["sei", "habe", "führe", "ist"], tipp: "Vergangenheit: sei/habe + Partizip II. fahren → sein" },
          { f: "Alice: „Ich habe den Preis gewonnen.“ → Sie sagt, sie ___ den Preis gewonnen.", o: ["habe", "sei", "hätte", "hat"] },
          { f: "„Gibt es eine Abschlussprüfung?“ → Luka fragt, ___ es eine Abschlussprüfung gebe.", o: ["ob", "dass", "wenn", "was"], tipp: "Ja/Nein-Frage → ob" }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "ueben", icon: "✍️", titel: "Üben: indirekte Rede", minuten: 9,
    tafel: [
      { titel: "In 3 Schritten zur indirekten Rede", html: `<ol class="schritte"><li><b>Einleitung:</b> Er sagt / Sie erzählt / Er betont / Sie fragt …</li>
        <li><b>Pronomen anpassen:</b> ich → er/sie · mein → sein/ihr · wir → sie</li>
        <li><b>Verb in den Konjunktiv I</b> (sonst Ersatzform)</li></ol>
        <div class="bsp">Nesrin: „<b>Mein</b> Chef <b>hat mir</b> geholfen.“<br>→ Nesrin erzählt, <b>ihr</b> Chef <b class="rot">habe</b> <b>ihr</b> geholfen.</div>
        <p class="klein">Redeeinleitungen: sagen · erzählen · berichten · betonen · meinen · feststellen · erklären · zugeben · fragen · bitten</p>` }
    ],
    aufgaben: [
      { id: "u1", typ: "bauen", titel: "Sätze bauen: So steht es in der Zeitung", minuten: 5,
        anleitung: "Bau die indirekte Rede. Das Verb steht ohne „dass“ auf Position 2.",
        hinweis: "Nach dem Komma: Subjekt – Verb im Konjunktiv I – Rest. Bei der Vergangenheit steht das Partizip am Ende.",
        items: [
          { w: ["Sachin", "sagt,", "er", "sei", "geistig", "fit"], a: ["sachin sagt er sei geistig fit"], p: "." },
          { w: ["Alice", "betont,", "sie", "liebe", "diesen", "Job"], a: ["alice betont sie liebe diesen job"], p: "." },
          { w: ["Nesrin", "erzählt,", "ihr", "Chef", "habe", "ihr", "geholfen"], a: ["nesrin erzählt ihr chef habe ihr geholfen"], p: "." },
          { w: ["Luka", "fragt,", "ob", "es", "eine", "Prüfung", "gebe"], a: ["luka fragt ob es eine prüfung gebe"], p: "." },
          { w: ["sie", "fragt,", "wann", "der", "Kurs", "beginne"], a: ["sie fragt wann der kurs beginne"], p: "." },
          { w: ["die", "Chefin", "sagt,", "er", "solle", "sich", "anmelden"], a: ["die chefin sagt er solle sich anmelden"], p: "." }
        ] },
      { id: "u2", typ: "wahl", titel: "Was hat die Person wirklich gesagt?", minuten: 3,
        anleitung: "Zurück zur direkten Rede: Welcher Satz war das Original?",
        items: [
          { f: "Er sagt, er habe keine Zeit.", o: ["„Ich habe keine Zeit.“", "„Er hat keine Zeit.“", "„Ich hatte keine Zeit.“"] },
          { f: "Sie erzählt, sie sei 2019 nach Deutschland gekommen.", o: ["„Ich bin 2019 nach Deutschland gekommen.“", "„Ich komme 2019 nach Deutschland.“", "„Sie ist 2019 gekommen.“"] },
          { f: "Er fragt, ob der Kurs online sei.", o: ["„Ist der Kurs online?“", "„Der Kurs ist online.“", "„War der Kurs online?“"] },
          { f: "Die Lehrerin bittet, wir sollten pünktlich sein.", o: ["„Seid bitte pünktlich!“", "„Ihr wart pünktlich.“", "„Wir sind pünktlich.“"] },
          { f: "Sie meint, ihre Kinder hätten viel gelernt.", o: ["„Meine Kinder haben viel gelernt.“", "„Ihre Kinder hatten viel gelernt.“", "„Meine Kinder lernen viel.“"] }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "puzzle", icon: "🧩", titel: "Steh auf! Gruppenpuzzle", minuten: 12, steh: true,
    tafel: [
      { titel: "🚶 Gruppenpuzzle: Wo ist der Rest der Geschichte?", html: `<ol class="schritte">
        <li>Auf deinem Handy steht <b>ein Fetzen</b> einer Zeitungsmeldung – mit einem <b>Symbol</b> (🌊 🌻 🔧 🎓).</li>
        <li><b>Steh auf!</b> Geh durch den Raum, zu anderen Tischen. Frag: <i>„Welches Symbol hast du?“</i></li>
        <li>Findet alle mit <b>demselben Symbol</b>. Ihr seid jetzt eine Redaktion.</li>
        <li><b>Nicht das Handy zeigen – vorlesen!</b> Bringt die Fetzen in die richtige Reihenfolge.</li>
        <li>Beantwortet <b>zusammen</b> die Fragen auf dem Handy. Jede/r braucht die anderen!</li></ol>
        <div class="hinweis">Achtet auf die Sätze im <b>Konjunktiv I</b>: Wer hat das gesagt?</div>` },
      { titel: "Danach: Berichtet!", html: `<p>Jede Gruppe stellt ihre Person vor – in <b>indirekter Rede</b>:</p>
        <div class="bsp">In unserer Meldung geht es um … Er/Sie erzählt, er/sie <b>sei</b> … / <b>habe</b> … Er/Sie sagt, man <b>könne</b> … Sein/Ihr Ziel: Er/Sie <b>wolle</b> …</div>` }
    ],
    aufgaben: [
      { id: "p1", typ: "puzzle", titel: "Gruppenpuzzle: Vier Zeitungsmeldungen", minuten: 9,
        anleitung: "Finde die Personen mit deinem Symbol. Lest eure Fetzen vor (nicht zeigen!). Welche Nummer hat dein Fetzen? Dann beantwortet ihr die Fragen zusammen.",
        geschichten: [
          { id: "bus", icon: "🌊", farbe: "#2F6FDB", titel: "Vom Busfahrer zum Programmierer",
            fetzen: [
              "Tomasz Wolski aus Kiel ist 48 Jahre alt. Fast zwanzig Jahre lang ist er Bus gefahren – jeden Tag dieselbe Strecke.",
              "Vor drei Jahren bekam er starke Rückenprobleme. Sein Arzt sagte ihm, er könne nicht mehr den ganzen Tag sitzen. Er brauche eine andere Arbeit.",
              "Wolski erzählt, er habe dann abends Online-Kurse in Programmierung gemacht. Am Anfang sei er oft verzweifelt gewesen, weil alles so neu war.",
              "Heute arbeitet er in einer Softwarefirma. Man sei nie zu alt für einen Neuanfang, sagt er. Wichtig sei nur, dass man nicht aufgebe."
            ],
            items: [
              { f: "🌊 Warum musste Tomasz Wolski den Beruf wechseln?", o: ["Er hatte Rückenprobleme.", "Seine Firma hat geschlossen.", "Er wollte mehr Geld verdienen."] },
              { f: "🌊 Wie hat er Programmieren gelernt?", o: ["abends in Online-Kursen", "in einer Ausbildung am Tag", "von seinem Sohn"] },
              { f: "🌊 „Am Anfang sei er oft verzweifelt gewesen.“ – Was hat Tomasz gesagt?", o: ["„Am Anfang war ich oft verzweifelt.“", "„Am Anfang bin ich oft verzweifelt.“", "„Am Anfang wäre ich verzweifelt.“"] }
            ] },
          { id: "oma", icon: "🌻", farbe: "#D69E00", titel: "Oma lernt Gebärdensprache",
            fetzen: [
              "Helga Brandt aus Lübeck ist 67 und seit zwei Jahren in Rente. Langweilig ist ihr trotzdem nie.",
              "Ihr Enkel Ben ist gehörlos. Frau Brandt sagt, sie habe sich mit ihm lange nur mit Bildern und Gesten verständigt. Das sei ihr zu wenig gewesen.",
              "Deshalb besucht sie seit einem Jahr zweimal pro Woche einen Kurs für Gebärdensprache an der Volkshochschule. Die Grammatik sei schwer, erzählt sie, aber die Lehrerin habe viel Geduld.",
              "Inzwischen kann sie mit Ben richtige Gespräche führen. Ihr Enkel meint, seine Oma sei die beste Schülerin im ganzen Kurs."
            ],
            items: [
              { f: "🌻 Warum lernt Frau Brandt Gebärdensprache?", o: ["Ihr Enkel kann nicht hören.", "Sie will Lehrerin werden.", "Sie braucht es für ihre Arbeit."] },
              { f: "🌻 Wo lernt sie?", o: ["an der Volkshochschule", "im Internet", "an der Universität"] },
              { f: "🌻 „Die Grammatik sei schwer.“ – Was hat Frau Brandt gesagt?", o: ["„Die Grammatik ist schwer.“", "„Die Grammatik war schwer.“", "„Die Grammatik wäre schwer.“"] }
            ] },
          { id: "elektro", icon: "🔧", farbe: "#14A37F", titel: "Vom Hilfsarbeiter zum Elektroniker",
            fetzen: [
              "Dawit Tesfaye kam vor sechs Jahren nach Hamburg. Zuerst arbeitete er als Hilfsarbeiter auf Baustellen.",
              "Sein Chef merkte schnell, wie geschickt Dawit ist. Er fragte ihn, ob er nicht eine Ausbildung zum Elektroniker machen wolle.",
              "Tesfaye berichtet, die Berufsschule sei am Anfang sehr schwer gewesen – vor allem die Fachsprache. Ein Kollege habe ihm jeden Abend geholfen.",
              "Im Sommer hat er die Prüfung bestanden. Und er plant schon den nächsten Schritt: Er wolle irgendwann den Meister machen, sagt er."
            ],
            items: [
              { f: "🔧 Wer hatte die Idee mit der Ausbildung?", o: ["sein Chef", "seine Frau", "das Jobcenter"] },
              { f: "🔧 Was war in der Berufsschule am schwierigsten?", o: ["die Fachsprache", "Mathematik", "der lange Weg"] },
              { f: "🔧 „Er fragte ihn, ob er eine Ausbildung machen wolle.“ – Was hat der Chef gefragt?", o: ["„Willst du eine Ausbildung machen?“", "„Du sollst eine Ausbildung machen.“", "„Ich will eine Ausbildung machen.“"] }
            ] },
          { id: "pflege", icon: "🎓", farbe: "#C2410C", titel: "Studium nach der Nachtschicht",
            fetzen: [
              "Marta Kowalczyk arbeitet seit 15 Jahren als Pflegefachkraft in einer Klinik in Rostock. Sie liebt ihren Beruf.",
              "Aber sie wollte mehr Verantwortung übernehmen. Ihre Chefin sagte, die Klinik brauche dringend gute Leitungen für die Stationen.",
              "Seitdem studiert sie neben der Arbeit Pflegemanagement. Die Klinik bezahle einen Teil der Kosten, erklärt sie, den Rest finanziere sie mit dem Aufstiegs-BAföG.",
              "Oft lernt sie nach der Nachtschicht. Das sei anstrengend, gibt sie zu. Aber sie habe ein Ziel: In zwei Jahren wolle sie eine Station leiten."
            ],
            items: [
              { f: "🎓 Warum studiert Marta Kowalczyk?", o: ["Sie will mehr Verantwortung übernehmen.", "Sie mag ihren Beruf nicht mehr.", "Sie will ins Ausland gehen."] },
              { f: "🎓 Wie finanziert sie das Studium?", o: ["Klinik + Aufstiegs-BAföG", "nur mit eigenem Geld", "mit einem Stipendium der Uni"] },
              { f: "🎓 „Die Klinik bezahle einen Teil der Kosten.“ – Warum steht hier Konjunktiv I?", o: ["Die Zeitung gibt wieder, was Marta gesagt hat.", "Es ist ein Wunsch.", "Es ist eine höfliche Bitte."] }
            ] }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "sprechen", icon: "🔄", titel: "Steh auf! Was hat sie gesagt?", minuten: 9, steh: true,
    tafel: [
      { titel: "🔄 Kugellager mit Bericht", html: `<ol class="schritte"><li>Zwei Kreise: <b>innen</b> und <b>außen</b>. Ihr steht euch gegenüber.</li>
        <li>Innen fragt, außen antwortet. Dann umgekehrt.</li>
        <li>⏰ Außen geht <b>einen Platz nach rechts</b>.</li>
        <li><b>Neu:</b> Erzähl der neuen Person zuerst, was die <b>letzte Person gesagt</b> hat – im Konjunktiv I!</li></ol>
        <div class="bsp">Amira hat gesagt, sie <b>lerne</b> gerade Excel. Sie <b>habe</b> letztes Jahr einen Erste-Hilfe-Kurs <b>gemacht</b>.</div>` }
    ],
    aufgaben: [
      { id: "k1", typ: "kugellager", titel: "Kugellager: Lernen im Beruf", minuten: 2,
        anleitung: "Fragen und antworten. Nach dem Wechsel: Zuerst berichten, was die letzte Person gesagt hat (Er/Sie sagt, er/sie habe/sei …).",
        runden: [
          { f: "Was lernst du gerade – außer Deutsch?", h: "Ich lerne gerade … · Bericht: Er/Sie sagt, er/sie lerne gerade …" },
          { f: "Welche Weiterbildung hast du schon einmal gemacht?", h: "Ich habe … gemacht. · Bericht: Er/Sie erzählt, er/sie habe … gemacht." },
          { f: "Was war beim Lernen für dich am schwersten?", h: "Am schwersten war … · Bericht: Er/Sie meint, … sei am schwersten gewesen." },
          { f: "Was möchtest du in fünf Jahren beruflich machen?", h: "Ich möchte … · Bericht: Er/Sie sagt, er/sie wolle / möchte …" },
          { f: "Wer sollte deine Weiterbildung bezahlen – du, die Firma oder der Staat?", h: "Ich finde, … sollte … · Bericht: Er/Sie findet, … solle …" }
        ] },
      { id: "h1", typ: "haelften", titel: "Satzhälften: direkt + indirekt", minuten: 3,
        anleitung: "Du hast eine Hälfte. Finde die Person mit der passenden anderen Hälfte! Lest den ganzen Satz zusammen laut.",
        paare: [
          ["Luka: „Ich suche eine Weiterbildung.“ →", "Luka sagt, er suche eine Weiterbildung."],
          ["Sachin: „Ich bin geistig fit.“ →", "Sachin sagt, er sei geistig fit."],
          ["Nesrin: „Mein Chef hat mir geholfen.“ →", "Nesrin erzählt, ihr Chef habe ihr geholfen."],
          ["Alice: „Ich liebe diesen Job.“ →", "Alice betont, sie liebe diesen Job."],
          ["Luka: „Wann beginnt der Kurs?“ →", "Luka fragt, wann der Kurs beginne."],
          ["Nesrin: „Ich will Maschinenbau studieren.“ →", "Nesrin sagt, sie wolle Maschinenbau studieren."],
          ["Alice: „Man braucht gute Nerven.“ →", "Alice meint, man brauche gute Nerven."],
          ["Die Chefin: „Melden Sie sich an!“ →", "Die Chefin sagt, er solle sich anmelden."]
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "quiz", icon: "⚡", titel: "Quiz: Konjunktiv I", minuten: 5,
    tafel: [ { titel: "⚡ Quiz", html: `<p>Alle antworten am Handy. Schnell und richtig!</p><div class="chips"><span>▲</span><span>●</span><span>■</span><span>◆</span></div>` } ],
    aufgaben: [
      { id: "q1", typ: "quiz", titel: "Quiz: Konjunktiv I", minuten: 0,
        items: [
          { f: "er (können) → Konjunktiv I", o: ["er könne", "er kann", "er könnte", "er konne"] },
          { f: "sie, Singular (sein) → Konjunktiv I", o: ["sie sei", "sie seie", "sie ist", "sie wäre"] },
          { f: "sie, Plural (haben) → indirekte Rede", o: ["sie hätten", "sie haben", "sie habe", "sie habet"] },
          { f: "„Ich habe den Preis gewonnen.“ → Sie sagt, sie ___ den Preis gewonnen.", o: ["habe", "sei", "hat", "hätte gewinnt"] },
          { f: "„Ich bin umgezogen.“ → Er sagt, er ___ umgezogen.", o: ["sei", "habe", "ist", "wäre gewesen"] },
          { f: "„Kommst du mit?“ → Sie fragt, ___ ich mitkomme.", o: ["ob", "dass", "wann", "wenn"] },
          { f: "„Ruf mich an!“ → Er sagt, ich ___ ihn anrufen.", o: ["solle", "werde", "könne", "habe"] },
          { f: "Wo liest man den Konjunktiv I besonders oft?", o: ["in Zeitungen und Nachrichten", "in Kochrezepten", "in SMS an Freunde", "in Einkaufslisten"] },
          { f: "„Ich fuhr nach Kroatien.“ → Er erzählt, …", o: ["er sei nach Kroatien gefahren.", "er führe nach Kroatien.", "er fuhr nach Kroatien.", "er habe nach Kroatien gefahren."] },
          { f: "„Mein Chef hat mir geholfen.“ → Sie erzählt, …", o: ["ihr Chef habe ihr geholfen.", "mein Chef habe mir geholfen.", "ihr Chef hat ihr geholfen.", "sein Chef habe ihm geholfen."] }
        ] }
    ] },
  /* ---------------------------------------------------------------- */
  { id: "ende", icon: "💶", titel: "Weiterbildung finanzieren & Abschluss", minuten: 3,
    tafel: [
      { titel: "Wer hilft bei der Weiterbildung?", html: `<table><tr><th>Hilfe</th><th>für wen?</th></tr>
        <tr><td><b>Bildungsgutschein</b> (Agentur für Arbeit / Jobcenter)</td><td>Arbeitsuchende, Beschäftigte mit Weiterbildungsbedarf</td></tr>
        <tr><td><b>Aufstiegs-BAföG</b></td><td>Meister, Techniker, Fachwirt …</td></tr>
        <tr><td><b>Anerkennungszuschuss</b></td><td>Kosten für die Anerkennung ausländischer Abschlüsse</td></tr>
        <tr><td><b>DAAD</b></td><td>Studium und Forschung (Stipendien)</td></tr>
        <tr><td><b>Berufsberatung</b> der Bundesagentur für Arbeit</td><td>alle: Beratung im Erwerbsleben</td></tr></table>
        <p class="klein">Aktuelle Programme ändern sich – vor dem Antrag bei der Beratung nachfragen. (Buch: Lektion 14, Aufgabe 3)</p>` },
      { titel: "🏁 Zum Mitnehmen", html: `<div class="box-gruen"><b>Merksatz</b><div class="bsp">Er sagt, er <b>sei</b> … / <b>habe</b> … / <b>könne</b> … / <b>wolle</b> … — sie (Plural) <b>hätten</b> … / <b>seien</b> …</div></div>
        <h3>Hausaufgabe – Schreibwerkstatt</h3><ul><li>✍️ <b>Kommentar:</b> „Man lernt nie aus.“ – Und Sie?</li><li>📧 <b>E-Mail an die Weiterbildungsakademie</b> (Situation 1–3)</li></ul>
        <p>Alles noch einmal allein üben: <b>Übungszentrale → Zusatzlektionen</b></p>` }
    ],
    aufgaben: [] }
  ]
};
