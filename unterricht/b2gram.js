/* =========================================================
   LIVE-UNTERRICHT · Plan „Grammatik B2 – große Wiederholung“ (online, 5 Sitzungen à 60 Min.)
   Prinzip wie im Liga-Live-Unterricht: kurze Lehrtafel → Aufgabe freigeben → Auswertung.
   Online-tauglich: keine Ketten- oder Laufspiele. Sprechen = Blitzrunde (Mikro an),
   Partner-Karten in Breakout-Räumen, Duell 1 gegen 1 (alle raten mit).
   Mehrere Sitzungen: In der Lobby „📌 Als Kurs speichern“ → feste PIN, Ergebnisse bleiben.
   Wiederholen: Aufgaben/Blöcke mit ↺ zurücksetzen.
   ========================================================= */
(function(){
window.UNTERRICHT_PLAENE = window.UNTERRICHT_PLAENE || {};
const K = (titel, a, ah, b, bh) => ({ titel, a: { t: a, hilfe: ah }, b: { t: b, hilfe: bh } });

const PLAN = {
  id: "b2gram", titel: "Grammatik B2 – große Wiederholung", minuten: 300, online: true, sitzungen: 5,
  sitzTitel: ["Satzbau & Konnektoren", "Zeiten, Passiv, Modalverben", "Konjunktiv & Infinitiv", "Relativsätze, Kasus, Adjektive", "Präpositionen & Nominalstil"],
  text: "5 Sitzungen online: Satzbau · Konnektoren · Nebensätze · Zeiten · Passiv · Modalverben · Konjunktiv II · Konjunktiv I · Infinitiv · Relativsätze · Kasus & Präpositionen · Adjektive & Partizipien · Verben mit Präpositionen · Nominalstil · Abschlussquiz",
  bloecke: [
  /* =================== SITZUNG 1 · Satzbau & Konnektoren =================== */
  { id: "satzbau", sitzung: 1, icon: "📏", titel: "Satzbau: Wo steht das Verb?", minuten: 20,
    tafel: [
      { titel: "Willkommen zur großen Wiederholung", html: `<p>In <b>5 Sitzungen</b> wiederholen wir die wichtigste Grammatik für B2.</p>
        <div class="chips"><span>📏 Satzbau</span><span>🔗 Konnektoren</span><span>⏱️ Nebensätze</span><span>🕰️ Zeiten</span><span>⚙️ Passiv</span><span>🔍 Modalverben</span><span>💭 Konjunktiv II</span><span>📰 Konjunktiv I</span><span>➡️ Infinitiv</span><span>🔗 Relativsätze</span><span>🎯 Kasus & Präpositionen</span><span>🎨 Adjektive & Partizipien</span><span>🧲 Verben mit Präpositionen</span><span>🏛️ Nominalstil</span></div>
        <ol class="schritte"><li>Ich erkläre kurz an der <b>Tafel</b> (die Tafel seht ihr auch auf eurem Gerät).</li><li>Ich gebe eine <b>Aufgabe frei</b> – ihr arbeitet am Handy oder Laptop.</li><li>Zwischendurch: <b>Sprechen</b> – mit Mikro oder im <b>Breakout-Raum</b>.</li></ol>
        <p class="klein">Bitte immer mit demselben Code / Namen anmelden – dann bleiben eure Ergebnisse für alle Sitzungen gespeichert.</p>` },
      { titel: "Die drei Satzmuster", html: `<table><tr><th>Satzart</th><th>Position des Verbs</th><th>Beispiel</th></tr>
        <tr><td><b>Hauptsatz</b></td><td>Verb auf <b>Position 2</b></td><td>Morgen <b class="rot">fahre</b> ich nach Kiel.</td></tr>
        <tr><td><b>W-Frage</b></td><td>Verb auf Position 2</td><td>Wann <b class="rot">fährst</b> du?</td></tr>
        <tr><td><b>Ja/Nein-Frage, Imperativ</b></td><td>Verb auf <b>Position 1</b></td><td><b class="rot">Fährst</b> du morgen? · <b class="rot">Fahr</b> vorsichtig!</td></tr>
        <tr><td><b>Nebensatz</b></td><td>Verb <b>am Ende</b></td><td>…, weil ich morgen nach Kiel <b class="rot">fahre</b>.</td></tr></table>
        <div class="hinweis"><b>Satzklammer:</b> Ich <b>habe</b> gestern lange <b>gearbeitet</b>. · Ich <b>muss</b> heute früh <b>aufstehen</b>. · Der Kurs <b>fängt</b> um 9 Uhr <b>an</b>.</div>
        <div class="bsp">Nebensatz zuerst → dann kommt sofort das Verb: <i>Weil ich krank war, <b class="rot">bin</b> ich zu Hause geblieben.</i></div>` },
      { titel: "Konnektoren: Position 0, Position 1 oder Ende?", html: `<div class="zwei-sp"><div class="box-blau"><b>Position 0</b> (Verb bleibt auf Pos. 2)<div class="bsp">und · aber · oder · denn · sondern · doch</div><p class="klein">Ich bleibe zu Hause, <b>denn</b> ich <b class="rot">bin</b> krank.</p></div>
        <div class="box-gruen"><b>Position 1</b> (Verb direkt danach)<div class="bsp">deshalb · deswegen · trotzdem · dann · danach · außerdem · sonst · also · daher</div><p class="klein">Ich bin krank, <b>deshalb</b> <b class="rot">bleibe</b> ich zu Hause.</p></div></div>
        <div class="box-blau" style="margin-top:10px;background:#FFF7E0"><b>Nebensatz</b> (Verb am Ende): weil · da · obwohl · dass · ob · wenn · als · nachdem · bevor · während · damit · sodass · falls · indem …<p class="klein">Ich bleibe zu Hause, <b>weil</b> ich krank <b class="rot">bin</b>.</p></div>` },
      { titel: "Das Mittelfeld: Was kommt zuerst?", html: `<ol class="schritte"><li><b>Pronomen</b> vor Nomen: Ich gebe <b>es</b> meinem Kollegen.</li>
        <li>Zwei Nomen: <b>Dativ vor Akkusativ</b>: Ich gebe <b>dem Kollegen</b> <b>den Bericht</b>.</li>
        <li>Zwei Pronomen: <b>Akkusativ vor Dativ</b>: Ich gebe <b>ihn ihm</b>.</li>
        <li>Angaben: <b>Te – Ka – Mo – Lo</b> (temporal – kausal – modal – lokal): Ich fahre <b>morgen</b> <b>wegen des Termins</b> <b>mit dem Zug</b> <b>nach Hamburg</b>.</li>
        <li><b>nicht</b> steht vor dem Teil, den es verneint – oder am Ende: Ich komme <b>nicht</b> mit. · Ich komme <b>nicht heute</b>, sondern morgen.</li></ol>` }
    ],
    aufgaben: [
      { id: "sb1", typ: "sortieren", titel: "Welcher Konnektor – welche Position?", minuten: 4,
        anleitung: "Wohin gehört der Konnektor? Position 0 (Verb bleibt auf 2), Position 1 (Verb direkt danach) oder Nebensatz (Verb am Ende)?",
        hinweis: "Position 0: und, aber, oder, denn, sondern. Position 1: deshalb, trotzdem, dann, außerdem, sonst … Nebensatz: weil, obwohl, dass, wenn …",
        koerbe: [{ k: "p0", t: "Position 0" }, { k: "p1", t: "Position 1" }, { k: "ns", t: "Nebensatz: Verb am Ende" }],
        items: [
          { t: "denn", k: "p0" }, { t: "deshalb", k: "p1" }, { t: "obwohl", k: "ns" }, { t: "sondern", k: "p0" },
          { t: "trotzdem", k: "p1" }, { t: "da", k: "ns" }, { t: "außerdem", k: "p1" }, { t: "aber", k: "p0" },
          { t: "sodass", k: "ns" }, { t: "sonst", k: "p1" }, { t: "falls", k: "ns" }, { t: "oder", k: "p0" }
        ] },
      { id: "sb2", typ: "bauen", titel: "Sätze bauen", minuten: 6,
        anleitung: "Tippe die Wörter in der richtigen Reihenfolge.",
        hinweis: "Hauptsatz: Verb auf Position 2. Nebensatz: Verb am Ende. Nach dem Nebensatz kommt sofort das Verb.",
        items: [
          { w: ["ich", "bin", "müde,", "deshalb", "gehe", "ich", "früh", "ins", "Bett"], a: ["ich bin müde deshalb gehe ich früh ins bett"], p: "." },
          { w: ["weil", "der", "Zug", "Verspätung", "hatte,", "kam", "ich", "zu", "spät"], a: ["weil der zug verspätung hatte kam ich zu spät", "ich kam zu spät weil der zug verspätung hatte"], p: "." },
          { w: ["sie", "hat", "gestern", "ihrem", "Chef", "den", "Bericht", "geschickt"], a: ["sie hat gestern ihrem chef den bericht geschickt", "sie hat ihrem chef gestern den bericht geschickt", "gestern hat sie ihrem chef den bericht geschickt", "ihrem chef hat sie gestern den bericht geschickt", "den bericht hat sie gestern ihrem chef geschickt"], p: "." },
          { w: ["ich", "weiß", "nicht,", "ob", "er", "morgen", "kommen", "kann"], a: ["ich weiß nicht ob er morgen kommen kann", "ob er morgen kommen kann weiß ich nicht"], p: "." },
          { w: ["obwohl", "es", "regnet,", "gehen", "wir", "spazieren"], a: ["obwohl es regnet gehen wir spazieren", "wir gehen spazieren obwohl es regnet"], p: "." },
          { w: ["ich", "gebe", "ihn", "ihm", "morgen"], a: ["ich gebe ihn ihm morgen", "morgen gebe ich ihn ihm"], p: "." },
          { w: ["kannst", "du", "mir", "sagen,", "wann", "der", "Kurs", "anfängt"], a: ["kannst du mir sagen wann der kurs anfängt"], p: "?" }
        ] },
      { id: "sb3", typ: "wahl", titel: "Welcher Satz ist richtig?", minuten: 4,
        anleitung: "Wähle den grammatisch richtigen Satz.",
        items: [
          { f: "Welcher Satz ist richtig? (trotzdem)", o: ["Ich bin krank, trotzdem gehe ich zur Arbeit.", "Ich bin krank, trotzdem ich gehe zur Arbeit.", "Ich bin krank, trotzdem zur Arbeit ich gehe."], tipp: "trotzdem = Position 1 → Verb direkt danach." },
          { f: "Welcher Satz ist richtig? (denn)", o: ["Er kommt nicht, denn er hat keine Zeit.", "Er kommt nicht, denn hat er keine Zeit.", "Er kommt nicht, denn er keine Zeit hat."], tipp: "denn = Position 0 → Subjekt, dann Verb." },
          { f: "Welcher Satz ist richtig? (Als …)", o: ["Als ich nach Deutschland kam, konnte ich kein Deutsch.", "Als ich nach Deutschland kam, ich konnte kein Deutsch.", "Als ich kam nach Deutschland, konnte ich kein Deutsch."] },
          { f: "Welcher Satz ist richtig? (Pronomen)", o: ["Ich habe es meiner Kollegin gestern erklärt.", "Ich habe meiner Kollegin es gestern erklärt.", "Ich habe gestern erklärt es meiner Kollegin."], tipp: "Pronomen (es) vor Nomen." },
          { f: "Welcher Satz ist richtig? (Te-Ka-Mo-Lo)", o: ["Ich fahre morgen mit dem Bus zur Arbeit.", "Ich fahre zur Arbeit mit dem Bus morgen.", "Ich fahre mit dem Bus morgen zur Arbeit."], tipp: "Te – Ka – Mo – Lo: wann – warum – wie – wo/wohin." },
          { f: "Welcher Satz ist richtig? (dass + trennbares Verb)", o: ["Ich glaube, dass er heute nicht mehr anruft.", "Ich glaube, dass er ruft heute nicht mehr an.", "Ich glaube, dass er heute nicht mehr an ruft."], tipp: "Im Nebensatz steht das trennbare Verb zusammen am Ende: anruft." },
          { f: "Welcher Satz ist richtig? (Modalverb)", o: ["Wir müssen den Termin leider verschieben.", "Wir müssen leider verschieben den Termin.", "Wir leider müssen den Termin verschieben."] }
        ] },
      { id: "sb4", typ: "sprechen", titel: "Blitzrunde: Ihr Weg zum Deutschkurs", minuten: 4,
        anleitung: "Ich ziehe einen Namen. Antworten Sie mit zwei Sätzen und benutzen Sie einen Konnektor (deshalb, trotzdem, weil, obwohl …).",
        saetze: ["Warum lernen Sie Deutsch? (weil … / deshalb …)", "Was ist für Sie am Deutschlernen schwer – und was machen Sie trotzdem?", "Was machen Sie, bevor der Kurs anfängt?", "Was würden Sie gern besser können, und warum?", "Wie lernen Sie neue Wörter – und warum so?", "Was haben Sie heute gemacht, bevor Sie online gekommen sind?"] }
    ] },
  { id: "konnektoren", sitzung: 1, icon: "🔗", titel: "Zweiteilige Konnektoren & Gegensätze", minuten: 18,
    tafel: [
      { titel: "Zweiteilige Konnektoren", html: `<table><tr><th>Konnektor</th><th>Bedeutung</th><th>Beispiel</th></tr>
        <tr><td><b>sowohl … als auch</b></td><td>beides (+)</td><td>Sie spricht sowohl Arabisch als auch Französisch.</td></tr>
        <tr><td><b>nicht nur … sondern auch</b></td><td>beides, betont</td><td>Er ist nicht nur Koch, sondern auch Fahrer.</td></tr>
        <tr><td><b>weder … noch</b></td><td>beides nicht (−)</td><td>Ich habe weder Zeit noch Geld.</td></tr>
        <tr><td><b>entweder … oder</b></td><td>nur eins</td><td>Entweder nehme ich den Bus oder ich fahre Rad.</td></tr>
        <tr><td><b>zwar … aber</b></td><td>Einschränkung</td><td>Die Arbeit ist zwar anstrengend, aber sie macht Spaß.</td></tr>
        <tr><td><b>einerseits … andererseits</b></td><td>zwei Seiten</td><td>Einerseits ist Homeoffice bequem, andererseits fehlen die Kollegen.</td></tr>
        <tr><td><b>je … desto / umso</b></td><td>Steigerung</td><td>Je mehr ich übe, desto sicherer werde ich.</td></tr></table>` },
      { titel: "Achtung: Wortstellung bei je … desto", html: `<div class="bsp"><b>Je</b> länger ich in Deutschland <b class="rot">lebe</b>, <b>desto</b> besser <b class="rot">verstehe</b> ich die Leute.</div>
        <ul><li><b>je</b> + Komparativ → <b>Nebensatz</b> (Verb am Ende)</li><li><b>desto</b> + Komparativ → <b>Hauptsatz</b> (Verb direkt danach)</li></ul>
        <h3>Gegensätze ausdrücken</h3><div class="bsp">Mein Bruder arbeitet viel, <b>während</b> ich mehr Freizeit habe. (Nebensatz)<br>Ich trinke Tee, mein Mann <b>dagegen</b> trinkt Kaffee. (Hauptsatz)<br>Er hat nicht angerufen, <b>sondern</b> eine E-Mail geschrieben. (nach Verneinung)</div>` }
    ],
    aufgaben: [
      { id: "kn1", typ: "wahl", titel: "Der passende Konnektor", minuten: 5,
        anleitung: "Wähle den passenden Konnektor.",
        items: [
          { f: "Ich habe ___ Zeit noch Lust, heute auszugehen.", o: ["weder", "entweder", "sowohl", "zwar"] },
          { f: "Sie spricht ___ Englisch als auch Spanisch.", o: ["sowohl", "weder", "nicht nur", "je"] },
          { f: "___ mehr ich lese, desto besser wird mein Wortschatz.", o: ["Je", "Desto", "Wenn", "Als"] },
          { f: "Die Wohnung ist ___ klein, aber sehr gemütlich.", o: ["zwar", "sowohl", "weder", "entweder"] },
          { f: "Er ist nicht nur pünktlich, ___ auch sehr zuverlässig.", o: ["sondern", "aber", "oder", "noch"] },
          { f: "___ du rufst sofort an, oder wir fahren ohne dich.", o: ["Entweder", "Weder", "Zwar", "Sowohl"] },
          { f: "Einerseits verdiene ich gut, ___ habe ich kaum Freizeit.", o: ["andererseits", "dagegen", "desto", "sondern"] },
          { f: "Ich arbeite gern im Team, mein Kollege ___ arbeitet lieber allein.", o: ["dagegen", "während", "sondern", "trotz"], tipp: "dagegen steht im Hauptsatz – hier nach dem Subjekt." },
          { f: "Wir haben nicht telefoniert, ___ uns E-Mails geschrieben.", o: ["sondern", "aber", "dagegen", "trotzdem"] },
          { f: "Je früher du anfängst, ___ entspannter bist du vor der Prüfung.", o: ["desto", "je", "als", "so"] }
        ] },
      { id: "kn2", typ: "partner", titel: "Breakout: Vor- und Nachteile", minuten: 8,
        anleitung: "Ihr seid zu zweit im Breakout-Raum. A fragt, B antwortet mit zweiteiligen Konnektoren. Nächste Karte → Rollen tauschen.",
        karten: [
          K("Homeoffice", "Frag: Was hältst du von Homeoffice?", ["Was hältst du von Homeoffice?", "Und was ist der größte Nachteil?"],
            "Antworte mit zwei Seiten.", ["Einerseits …, andererseits …", "Homeoffice ist zwar …, aber …", "Es hat sowohl Vorteile als auch Nachteile."]),
          K("Leben in der Großstadt", "Frag: Möchtest du lieber in der Stadt oder auf dem Land leben?", ["Wo möchtest du lieber leben?", "Warum?"],
            "Antworte und vergleiche.", ["Je größer die Stadt, desto …", "Auf dem Land gibt es weder … noch …", "In der Stadt gibt es nicht nur …, sondern auch …"]),
          K("Deutsch lernen", "Frag: Wie lernt man am besten Deutsch?", ["Wie lernst du am liebsten?", "Was hilft dir am meisten?"],
            "Antworte mit mindestens zwei Konnektoren.", ["Je mehr man spricht, desto …", "Man sollte entweder … oder …", "Grammatik ist zwar wichtig, aber …"]),
          K("Auto oder Bahn?", "Frag: Fährst du lieber mit dem Auto oder mit der Bahn?", ["Wie fährst du zur Arbeit?", "Was ist besser – und warum?"],
            "Antworte und nenne Vor- und Nachteile.", ["Die Bahn ist zwar …, aber …", "Mit dem Auto bin ich sowohl … als auch …", "Weder … noch …"])
        ] }
    ] },
  { id: "nebensaetze", sitzung: 1, icon: "⏱️", titel: "Nebensätze: Zeit, Grund, Gegengrund, Ziel", minuten: 22,
    tafel: [
      { titel: "Temporale Nebensätze", html: `<table><tr><th>Konnektor</th><th>Bedeutung</th><th>Beispiel</th></tr>
        <tr><td><b>als</b></td><td>einmal in der Vergangenheit</td><td>Als ich 18 war, habe ich Abitur gemacht.</td></tr>
        <tr><td><b>wenn</b></td><td>immer wieder / Zukunft</td><td>Wenn ich Zeit habe, lese ich.</td></tr>
        <tr><td><b>während</b></td><td>gleichzeitig</td><td>Während ich koche, höre ich Radio.</td></tr>
        <tr><td><b>nachdem</b></td><td>zuerst A, dann B</td><td>Nachdem ich gegessen <b class="rot">hatte</b>, ging ich los.</td></tr>
        <tr><td><b>bevor</b></td><td>vorher</td><td>Bevor ich unterschreibe, lese ich den Vertrag.</td></tr>
        <tr><td><b>seit(dem)</b></td><td>Beginn in der Vergangenheit bis jetzt</td><td>Seitdem ich hier wohne, fahre ich Rad.</td></tr>
        <tr><td><b>bis</b></td><td>Endpunkt</td><td>Warte, bis ich zurückkomme.</td></tr>
        <tr><td><b>sobald / solange</b></td><td>sofort danach / so lange wie</td><td>Sobald ich Bescheid weiß, rufe ich an.</td></tr></table>
        <div class="hinweis"><b>nachdem</b>: Zeitenwechsel! Nebensatz Plusquamperfekt → Hauptsatz Präteritum/Perfekt. Nebensatz Perfekt → Hauptsatz Präsens.</div>` },
      { titel: "Grund, Gegengrund, Ziel, Folge, Bedingung, Art und Weise", html: `<table><tr><th></th><th>Nebensatz</th><th>Beispiel</th></tr>
        <tr><td>Grund</td><td><b>weil, da</b></td><td>Da es regnete, blieben wir zu Hause.</td></tr>
        <tr><td>Gegengrund</td><td><b>obwohl</b></td><td>Obwohl er müde war, arbeitete er weiter.</td></tr>
        <tr><td>Ziel</td><td><b>damit</b> / um … zu</td><td>Ich spare, damit meine Kinder studieren können.</td></tr>
        <tr><td>Folge</td><td><b>sodass</b> / so …, dass</td><td>Er war so müde, dass er sofort einschlief.</td></tr>
        <tr><td>Bedingung</td><td><b>wenn, falls</b></td><td>Falls du Fragen hast, schreib mir.</td></tr>
        <tr><td>Art und Weise</td><td><b>indem</b> / dadurch, dass</td><td>Man lernt Wörter, indem man sie oft benutzt.</td></tr>
        <tr><td>ohne Folge</td><td><b>ohne dass</b> / ohne … zu</td><td>Er ging, ohne dass jemand es merkte.</td></tr></table>` }
    ],
    aufgaben: [
      { id: "ns1", typ: "wahl", titel: "als, wenn, nachdem, seit …", minuten: 5,
        anleitung: "Welcher Konnektor passt?",
        items: [
          { f: "___ ich ein Kind war, wohnten wir in Teheran.", o: ["Als", "Wenn", "Wann", "Nachdem"], tipp: "Einmal in der Vergangenheit → als." },
          { f: "Immer ___ ich nach Hause komme, ist der Kühlschrank leer.", o: ["wenn", "als", "wann", "bis"], tipp: "Immer wieder → wenn." },
          { f: "___ ich die Prüfung bestanden hatte, feierten wir.", o: ["Nachdem", "Bevor", "Während", "Seitdem"], tipp: "Plusquamperfekt → nachdem." },
          { f: "___ ich in Kiel wohne, gehe ich oft ans Meer.", o: ["Seitdem", "Als", "Bis", "Nachdem"] },
          { f: "Wir warten, ___ der Bus kommt.", o: ["bis", "seit", "als", "während"] },
          { f: "___ du kochst, decke ich den Tisch.", o: ["Während", "Nachdem", "Als", "Bis"] },
          { f: "___ ich die Ergebnisse habe, melde ich mich bei Ihnen.", o: ["Sobald", "Als", "Seit", "Während"] },
          { f: "Lies die Aufgabe genau, ___ du anfängst!", o: ["bevor", "nachdem", "seitdem", "als"] }
        ] },
      { id: "ns2", typ: "wahl", titel: "Grund, Gegengrund, Ziel, Folge", minuten: 5,
        anleitung: "Welcher Konnektor passt in die Lücke?",
        items: [
          { f: "___ er sehr krank war, ging er zur Arbeit.", o: ["Obwohl", "Weil", "Damit", "Sodass"] },
          { f: "Ich lerne jeden Tag, ___ ich die Prüfung bestehe.", o: ["damit", "obwohl", "sodass", "indem"], tipp: "Ziel mit anderem Subjekt oder mit „ich“ möglich → damit (oder: um … zu)." },
          { f: "Es hat stark geschneit, ___ die Züge ausgefallen sind.", o: ["sodass", "damit", "obwohl", "weil"] },
          { f: "Man kann Energie sparen, ___ man das Licht ausmacht.", o: ["indem", "damit", "sodass", "obwohl"] },
          { f: "___ Sie Fragen haben, rufen Sie mich bitte an.", o: ["Falls", "Obwohl", "Damit", "Indem"] },
          { f: "Sie verließ den Raum, ___ sich jemand verabschiedete.", o: ["ohne dass", "damit", "sodass", "indem"] },
          { f: "___ der Chef im Urlaub ist, entscheidet seine Stellvertreterin.", o: ["Da", "Obwohl", "Damit", "Sodass"] },
          { f: "Er sprach so leise, ___ niemand ihn verstand.", o: ["dass", "damit", "ob", "weil"] }
        ] },
      { id: "ns3", typ: "sprechen", titel: "Blitzrunde: Ergänzen Sie den Satz", minuten: 4,
        anleitung: "Ich ziehe einen Namen. Ergänzen Sie den Satz frei – mit Mikro.",
        saetze: ["Als ich zum ersten Mal in Deutschland war, …", "Obwohl Deutsch schwer ist, …", "Nachdem ich meine Ausbildung / mein Studium beendet hatte, …", "Ich lerne Deutsch, damit …", "Seitdem ich in Deutschland lebe, …", "Falls ich die Prüfung nicht bestehe, …", "Man findet schneller eine Arbeit, indem …"] },
      { id: "q_s1", typ: "quiz", titel: "Quiz Sitzung 1: Satzbau & Konnektoren", minuten: 0,
        items: [
          { f: "Ich bin müde, ___ trinke ich einen Kaffee.", o: ["deshalb", "weil", "denn", "obwohl"] },
          { f: "Welcher Satz ist richtig?", o: ["Weil ich keine Zeit hatte, rief ich nicht an.", "Weil ich keine Zeit hatte, ich rief nicht an.", "Weil hatte ich keine Zeit, rief ich nicht an."] },
          { f: "Ich habe ___ Hunger noch Durst.", o: ["weder", "entweder", "sowohl", "nicht"] },
          { f: "___ ich 2015 nach Deutschland kam, sprach ich kein Wort Deutsch.", o: ["Als", "Wenn", "Wann", "Ob"] },
          { f: "Je öfter ich spreche, ___ sicherer werde ich.", o: ["desto", "je", "so", "als"] },
          { f: "Nachdem er die E-Mail ___, rief er den Kunden an.", o: ["geschrieben hatte", "schreibt", "geschrieben hat", "schreiben wird"] },
          { f: "Ich gebe ___ morgen. (das Buch → dir)", o: ["es dir", "dir es", "dir das es", "es zu dir"] },
          { f: "Er arbeitet weiter, ___ er krank ist.", o: ["obwohl", "trotzdem", "weil", "damit"] }
        ] }
    ] },
  /* =================== SITZUNG 2 · Zeiten, Passiv, Modalverben =================== */
  { id: "zeiten", sitzung: 2, icon: "🕰️", titel: "Zeitformen sicher benutzen", minuten: 15,
    tafel: [
      { titel: "Sechs Zeitformen", html: `<table><tr><th>Zeit</th><th>Bildung</th><th>Beispiel</th><th>wann?</th></tr>
        <tr><td>Präsens</td><td>Verb</td><td>Ich arbeite.</td><td>jetzt, Zukunft mit Zeitangabe</td></tr>
        <tr><td>Präteritum</td><td>-te / starke Form</td><td>Ich arbeitete. Sie ging.</td><td>schriftlich erzählen; <b>war, hatte, konnte</b> auch mündlich</td></tr>
        <tr><td>Perfekt</td><td>haben/sein + Partizip II</td><td>Ich habe gearbeitet. Sie ist gegangen.</td><td>mündlich erzählen</td></tr>
        <tr><td>Plusquamperfekt</td><td>hatte/war + Partizip II</td><td>Ich hatte gearbeitet.</td><td>vor einer Vergangenheit</td></tr>
        <tr><td>Futur I</td><td>werden + Infinitiv</td><td>Ich werde arbeiten.</td><td>Plan, Versprechen, Vermutung (jetzt)</td></tr>
        <tr><td>Futur II</td><td>werden + Partizip II + haben/sein</td><td>Er wird es vergessen haben.</td><td>Vermutung über Vergangenes</td></tr></table>
        <div class="hinweis"><b>sein</b> im Perfekt: Bewegung von A nach B (fahren, gehen, kommen), Veränderung (werden, einschlafen, sterben) + sein, bleiben, passieren.</div>` }
    ],
    aufgaben: [
      { id: "ze1", typ: "wahl", titel: "Die richtige Zeitform", minuten: 6,
        anleitung: "Wähle die richtige Form.",
        items: [
          { f: "Gestern ___ ich lange im Büro geblieben.", o: ["bin", "habe", "war", "hatte"] },
          { f: "Als wir am Bahnhof ankamen, ___ der Zug schon ___.", o: ["war … abgefahren", "ist … abgefahren", "hat … abgefahren", "hatte … abgefahren"], tipp: "Vor einer Vergangenheit → Plusquamperfekt. abfahren → sein." },
          { f: "Der Chef ist noch nicht da. Er ___ wohl im Stau stehen.", o: ["wird", "würde", "wurde", "ist"], tipp: "Vermutung über jetzt → Futur I." },
          { f: "Sie hat nicht angerufen. Sie ___ es wohl vergessen ___.", o: ["wird … haben", "wird … sein", "hat … werden", "würde … haben"], tipp: "Vermutung über Vergangenes → Futur II." },
          { f: "Früher ___ ich keinen Führerschein.", o: ["hatte", "habe gehabt", "hätte", "hatten"] },
          { f: "Was ___ denn hier ___?", o: ["ist … passiert", "hat … passiert", "ist … gepassiert", "hat … gepassiert"] },
          { f: "Im Jahr 2018 ___ meine Familie nach Kiel.", o: ["zog", "zieht", "zog um", "ist gezogen worden"] },
          { f: "Ich ___ dir morgen helfen, versprochen!", o: ["werde", "würde", "wurde", "bin"] }
        ] },
      { id: "ze2", typ: "duell", titel: "Duell: Zeitformen", minuten: 8, fragen: 3,
        anleitung: "Zwei Namen werden gezogen (Mikro an!). 3 Fragen – alle anderen raten mit. Nach dem Auflösen lesen die beiden den Satz laut vor.",
        pool: [
          { f: "Letzte Woche ___ ich meinen Pass verloren.", o: ["habe", "bin", "hatte", "werde"] },
          { f: "Nachdem sie gegessen ___, ging sie spazieren.", o: ["hatte", "hat", "war", "ist"] },
          { f: "Bis Freitag ___ ich den Bericht fertig geschrieben haben.", o: ["werde", "würde", "wurde", "bin"] },
          { f: "Der Bus ___ pünktlich gekommen.", o: ["ist", "hat", "wird", "war gewesen"] },
          { f: "Als Kind ___ ich jeden Tag Fußball.", o: ["spielte", "spiele", "habe spielt", "gespielt"] },
          { f: "Er ___ gestern sehr spät eingeschlafen.", o: ["ist", "hat", "wurde", "wird"] },
          { f: "Wir ___ uns schon seit Jahren.", o: ["kennen", "kannten gehabt", "haben gekennt", "sind gekannt"], tipp: "seit + bis heute → Präsens." },
          { f: "Ich ___ den Film schon zweimal gesehen.", o: ["habe", "bin", "werde", "wurde"] },
          { f: "Das Paket ___ wohl morgen ankommen.", o: ["wird", "würde", "ist", "hat"] }
        ] }
    ] },
  { id: "passiv", sitzung: 2, icon: "⚙️", titel: "Passiv und Passiv-Ersatz", minuten: 25,
    tafel: [
      { titel: "Vorgangspassiv: werden + Partizip II", html: `<p>Wichtig ist die <b>Handlung</b>, nicht die Person.</p>
        <table><tr><th>Zeit</th><th>Beispiel</th></tr>
        <tr><td>Präsens</td><td>Der Antrag <b class="rot">wird</b> geprüft.</td></tr>
        <tr><td>Präteritum</td><td>Der Antrag <b class="rot">wurde</b> geprüft.</td></tr>
        <tr><td>Perfekt</td><td>Der Antrag <b class="rot">ist</b> geprüft <b class="rot">worden</b>. (nicht: geworden!)</td></tr>
        <tr><td>Plusquamperfekt</td><td>Der Antrag <b class="rot">war</b> geprüft <b class="rot">worden</b>.</td></tr>
        <tr><td>mit Modalverb</td><td>Der Antrag <b class="rot">muss</b> geprüft <b class="rot">werden</b>.</td></tr>
        <tr><td>Konjunktiv II</td><td>Der Antrag <b class="rot">müsste</b> geprüft <b class="rot">werden</b>.</td></tr></table>
        <div class="hinweis">Wer handelt? <b>von</b> + Dativ (Person): von der Sachbearbeiterin · <b>durch</b> + Akkusativ (Mittel/Ursache): durch einen Sturm</div>` },
      { titel: "Zustandspassiv und Passiv-Ersatz", html: `<div class="zwei-sp"><div class="box-blau"><b>Vorgang</b> (werden)<div class="bsp">Das Büro <b>wird</b> um 8 Uhr geöffnet.</div></div><div class="box-gruen"><b>Ergebnis/Zustand</b> (sein)<div class="bsp">Das Büro <b>ist</b> bis 16 Uhr geöffnet.</div></div></div>
        <h3>Passiv-Ersatz (B2!)</h3><table>
        <tr><td><b>man</b></td><td>Man prüft den Antrag.</td></tr>
        <tr><td><b>sich lassen</b> + Infinitiv</td><td>Das Problem <b>lässt sich</b> leicht <b>lösen</b>. (= kann gelöst werden)</td></tr>
        <tr><td><b>sein + zu</b> + Infinitiv</td><td>Das Formular <b>ist</b> bis Freitag ab<b>zu</b>geben. (= muss abgegeben werden)</td></tr>
        <tr><td>Adjektiv auf <b>-bar / -lich</b></td><td>Der Fehler ist <b>vermeidbar</b>. (= kann vermieden werden)</td></tr></table>` }
    ],
    aufgaben: [
      { id: "pa1", typ: "wahl", titel: "Passiv in allen Zeiten", minuten: 6,
        anleitung: "Wähle die richtige Passivform.",
        items: [
          { f: "Die Rechnung ___ morgen bezahlt.", o: ["wird", "ist", "wurde", "hat"] },
          { f: "Das Haus ___ 1905 gebaut.", o: ["wurde", "wird", "ist", "hat"] },
          { f: "Der Vertrag ist gestern unterschrieben ___.", o: ["worden", "geworden", "werden", "wurde"], tipp: "Perfekt Passiv: ist … worden." },
          { f: "Die Fenster müssen dringend geputzt ___.", o: ["werden", "worden", "wurden", "sein"] },
          { f: "Die Brücke wurde ___ einen Sturm zerstört.", o: ["durch", "von", "mit", "bei"], tipp: "Ursache/Mittel → durch." },
          { f: "Die Bewerbung wurde ___ der Personalchefin gelesen.", o: ["von", "durch", "mit", "bei"] },
          { f: "Bevor die Gäste kamen, ___ alles vorbereitet worden.", o: ["war", "ist", "wurde", "wird"] },
          { f: "Das Problem ___ schneller gelöst werden.", o: ["könnte", "würde", "hätte", "wäre"] },
          { f: "Hier ___ nicht geraucht!", o: ["wird", "ist", "hat", "wurde gewesen"], tipp: "Unpersönliches Passiv als Verbot: Hier wird nicht geraucht!" }
        ] },
      { id: "pa2", typ: "sortieren", titel: "Vorgang oder Zustand?", minuten: 4,
        anleitung: "Beschreibt der Satz eine Handlung (werden) oder ein Ergebnis (sein)?",
        hinweis: "werden + Partizip = Vorgang (es passiert gerade). sein + Partizip = Zustand (das Ergebnis ist da).",
        koerbe: [{ k: "v", t: "Vorgang (werden)" }, { k: "z", t: "Zustand (sein)" }],
        items: [
          { t: "Die Tür wird gerade repariert.", k: "v" }, { t: "Die Tür ist repariert – sie schließt wieder.", k: "z" },
          { t: "Das Geschäft ist sonntags geschlossen.", k: "z" }, { t: "Das Geschäft wird um 20 Uhr geschlossen.", k: "v" },
          { t: "Der Tisch ist schon gedeckt.", k: "z" }, { t: "Die Briefe werden jeden Morgen verteilt.", k: "v" },
          { t: "Die Stelle ist leider schon besetzt.", k: "z" }, { t: "Der Patient wird gerade operiert.", k: "v" }
        ] },
      { id: "pa3", typ: "wahl", titel: "Passiv-Ersatz: Was bedeutet das?", minuten: 4,
        anleitung: "Welcher Satz hat dieselbe Bedeutung?",
        items: [
          { f: "Das Formular ist bis Montag abzugeben.", o: ["Das Formular muss bis Montag abgegeben werden.", "Das Formular kann bis Montag abgegeben werden.", "Das Formular wurde bis Montag abgegeben."] },
          { f: "Das Fenster lässt sich nicht öffnen.", o: ["Das Fenster kann nicht geöffnet werden.", "Das Fenster darf nicht geöffnet werden.", "Man lässt das Fenster offen."] },
          { f: "Die Schrift ist kaum lesbar.", o: ["Die Schrift kann kaum gelesen werden.", "Die Schrift muss gelesen werden.", "Niemand will die Schrift lesen."] },
          { f: "Diese Aufgabe ist leicht zu lösen.", o: ["Diese Aufgabe kann leicht gelöst werden.", "Diese Aufgabe muss gelöst werden.", "Diese Aufgabe wurde leicht gelöst."], tipp: "sein + zu + leicht/schwer/nicht … → können." },
          { f: "Man hat die Straße gesperrt.", o: ["Die Straße ist gesperrt worden.", "Die Straße wird gesperrt.", "Die Straße hat sich gesperrt."] },
          { f: "Der Schaden ist nicht reparierbar.", o: ["Der Schaden kann nicht repariert werden.", "Der Schaden darf nicht repariert werden.", "Der Schaden wurde nicht repariert."] }
        ] },
      { id: "pa4", typ: "partner", titel: "Breakout: Wie funktioniert das?", minuten: 8,
        anleitung: "A erklärt einen Ablauf im Passiv (zuerst wird …, dann wird …). B fragt nach. Nächste Karte → Rollen tauschen.",
        karten: [
          K("Bewerbung", "Erkläre: Was passiert mit einer Bewerbung in einer Firma?", ["Zuerst wird die Bewerbung gelesen.", "Dann werden die besten Kandidaten eingeladen.", "Danach wird entschieden, wer …"],
            "Hör zu und frag nach.", ["Und wer liest die Bewerbung?", "Wie lange dauert das?", "Was passiert, wenn …?"]),
          K("Ein Paket", "Erkläre: Wie kommt ein Paket zu mir nach Hause?", ["Das Paket wird zuerst verpackt.", "Es wird zur Post gebracht und sortiert.", "Am Ende wird es zugestellt."],
            "Hör zu und frag nach.", ["Wo wird es sortiert?", "Was passiert, wenn niemand zu Hause ist?"]),
          K("Ein Gericht aus meinem Land", "Erkläre ein Rezept im Passiv.", ["Zuerst werden die Zwiebeln geschnitten.", "Dann wird alles in einem Topf gekocht.", "Zum Schluss wird … serviert."],
            "Hör zu und frag nach.", ["Wie lange wird es gekocht?", "Was wird dazu gegessen?"]),
          K("Bei der Arbeit", "Erkläre einen Ablauf aus deinem Beruf (oder: Wie wird ein Auto repariert?).", ["Zuerst wird … geprüft.", "Dann muss … bestellt werden.", "Am Ende wird …"],
            "Hör zu und frag nach.", ["Von wem wird das gemacht?", "Was ist am schwierigsten?"])
        ] }
    ] },
  { id: "modal", sitzung: 2, icon: "🔍", titel: "Modalverben: Pflicht, Erlaubnis und Vermutung", minuten: 20,
    tafel: [
      { titel: "Modalverben – zwei Bedeutungen", html: `<div class="zwei-sp"><div class="box-blau"><b>Objektiv</b> (Pflicht, Erlaubnis, Wunsch)<div class="bsp">Ich <b>muss</b> heute arbeiten.<br>Hier <b>darf</b> man parken.<br>Du <b>sollst</b> den Chef anrufen. (Auftrag)</div></div>
        <div class="box-gruen"><b>Subjektiv</b> (Vermutung des Sprechers)<div class="bsp">Er <b>muss</b> krank sein. → ich bin fast sicher (90 %)<br>Er <b>dürfte</b> krank sein. → wahrscheinlich (75 %)<br>Er <b>kann/könnte</b> krank sein. → vielleicht (50 %)<br>Er <b>kann nicht</b> krank sein. → unmöglich</div></div></div>
        <div class="hinweis"><b>sollen</b> = man sagt / ich habe gehört: <i>Der Film soll sehr gut sein.</i> · <b>wollen</b> = er behauptet: <i>Er will nichts gewusst haben.</i></div>` },
      { titel: "Modalverben in Perfekt und Nebensatz", html: `<table><tr><th></th><th>Beispiel</th></tr>
        <tr><td>Perfekt (Ersatzinfinitiv)</td><td>Ich <b>habe</b> gestern lange arbeiten <b class="rot">müssen</b>. (nicht: gemusst)</td></tr>
        <tr><td>Nebensatz Perfekt</td><td>…, weil ich gestern lange <b class="rot">habe</b> arbeiten müssen.</td></tr>
        <tr><td>Vermutung Vergangenheit</td><td>Er <b>muss</b> den Termin <b>vergessen haben</b>.</td></tr>
        <tr><td>nicht müssen = nicht brauchen zu</td><td>Du <b>brauchst</b> heute <b>nicht zu</b> kommen.</td></tr></table>` }
    ],
    aufgaben: [
      { id: "mo1", typ: "wahl", titel: "Wie sicher ist der Sprecher?", minuten: 5,
        anleitung: "Wähle das passende Modalverb.",
        items: [
          { f: "Das Licht ist an. Sie ___ zu Hause sein. (Ich bin fast sicher.)", o: ["muss", "kann nicht", "soll", "darf"] },
          { f: "Er hat gestern noch gearbeitet. Er ___ nicht im Urlaub sein. (unmöglich)", o: ["kann", "muss", "soll", "will"] },
          { f: "Das neue Restaurant ___ sehr gut sein. (Das habe ich gehört.)", o: ["soll", "muss", "will", "darf"] },
          { f: "Er ___ den Brief nie bekommen haben. (Das behauptet er.)", o: ["will", "soll", "muss", "darf"] },
          { f: "Es ist schon 18 Uhr – sie ___ bald kommen. (wahrscheinlich)", o: ["dürfte", "darf", "müsste nicht", "will"] },
          { f: "Du ___ heute nicht zu kommen. Der Kurs fällt aus.", o: ["brauchst", "musst", "darfst", "sollst"] },
          { f: "Gestern habe ich bis 22 Uhr arbeiten ___.", o: ["müssen", "gemusst", "muss", "musste"] },
          { f: "Ich war nicht da, weil ich zum Arzt ___ gehen müssen.", o: ["habe", "hatte gemusst", "bin", "musste"] }
        ] },
      { id: "mo2", typ: "partner", titel: "Breakout: Was ist hier los?", minuten: 8,
        anleitung: "A beschreibt eine Situation. B macht Vermutungen mit muss / dürfte / könnte / kann nicht. Nächste Karte → Rollen tauschen.",
        karten: [
          K("Der leere Schreibtisch", "Beschreibe: Dein Kollege ist heute nicht da. Er hat sich nicht gemeldet.", ["Mein Kollege ist heute nicht gekommen.", "Er hat sich nicht gemeldet.", "Was meinst du?"],
            "Mach drei Vermutungen.", ["Er muss krank sein.", "Er dürfte den Wecker nicht gehört haben.", "Er könnte im Stau stehen."]),
          K("Licht um Mitternacht", "Beschreibe: Im Büro brennt um Mitternacht noch Licht.", ["Im Büro brennt noch Licht.", "Es ist schon Mitternacht.", "Wer ist da wohl?"],
            "Mach drei Vermutungen.", ["Jemand muss noch arbeiten.", "Die Putzfrau dürfte da sein.", "Jemand könnte das Licht vergessen haben."]),
          K("Das Paket", "Beschreibe: Ein großes Paket steht vor deiner Tür. Du hast nichts bestellt.", ["Vor meiner Tür steht ein Paket.", "Ich habe nichts bestellt.", "Von wem ist es?"],
            "Mach drei Vermutungen.", ["Es muss für den Nachbarn sein.", "Jemand könnte dir ein Geschenk geschickt haben.", "Es kann nicht von … sein, weil …"]),
          K("Gerüchte im Büro", "Erzähle zwei Gerüchte mit „soll“.", ["Die Chefin soll bald in Rente gehen.", "Unsere Firma soll eine neue Filiale eröffnen."],
            "Reagiere: Glaubst du das? Warum (nicht)?", ["Das kann nicht stimmen, weil …", "Das dürfte stimmen, denn …", "Wer hat das gesagt?"])
        ] },
      { id: "q_s2", typ: "quiz", titel: "Quiz Sitzung 2: Zeiten, Passiv, Modalverben", minuten: 0,
        items: [
          { f: "Der Brief ist gestern geschickt ___.", o: ["worden", "geworden", "werden", "gewesen"] },
          { f: "Nachdem er ___ hatte, ging er schlafen.", o: ["gegessen", "gegesst", "essen", "aß"] },
          { f: "Die Wohnung ___ renoviert werden.", o: ["muss", "ist", "wird", "hat"] },
          { f: "Er ist nicht gekommen. Er ___ krank sein. (fast sicher)", o: ["muss", "soll", "will", "kann nicht"] },
          { f: "„Das Problem lässt sich lösen.“ bedeutet:", o: ["Das Problem kann gelöst werden.", "Das Problem muss gelöst werden.", "Jemand lässt das Problem.", "Das Problem ist gelöst."] },
          { f: "Ich habe gestern nicht kommen ___.", o: ["können", "gekonnt", "kann", "konnte"] },
          { f: "Das Museum ___ montags geschlossen.", o: ["ist", "wird", "hat", "wurde gewesen"] },
          { f: "Sie wird den Zug verpasst ___.", o: ["haben", "sein", "werden", "hatte"] }
        ] }
    ] },
  /* =================== SITZUNG 3 · Konjunktiv & Infinitiv =================== */
  { id: "konj2", sitzung: 3, icon: "💭", titel: "Konjunktiv II: Wünsche, Irreales, Höflichkeit", minuten: 22,
    tafel: [
      { titel: "Konjunktiv II bilden", html: `<div class="zwei-sp"><div><table><tr><th colspan="2">eigene Formen (wichtig!)</th></tr>
        <tr><td>sein</td><td>ich <b>wäre</b></td></tr><tr><td>haben</td><td>ich <b>hätte</b></td></tr><tr><td>werden</td><td>ich <b>würde</b></td></tr>
        <tr><td>können / müssen / dürfen</td><td><b>könnte / müsste / dürfte</b></td></tr><tr><td>sollen / wollen</td><td><b>sollte / wollte</b></td></tr>
        <tr><td>kommen, gehen, wissen, geben</td><td><b>käme, ginge, wüsste, gäbe</b></td></tr></table></div>
        <div><p><b>Alle anderen Verben:</b> würde + Infinitiv</p><div class="bsp">Ich <b>würde</b> gern mehr <b>reisen</b>.</div>
        <p><b>Vergangenheit:</b> hätte/wäre + Partizip II</p><div class="bsp">Ich <b>hätte</b> dich <b>angerufen</b>.<br>Wir <b>wären</b> früher <b>gekommen</b>.</div>
        <p><b>mit Modalverb:</b></p><div class="bsp">Du <b>hättest</b> früher <b>kommen sollen</b>.</div></div></div>` },
      { titel: "Wofür brauchen wir den Konjunktiv II?", html: `<table><tr><th>Funktion</th><th>Beispiel</th></tr>
        <tr><td>irreale Bedingung</td><td>Wenn ich Zeit <b>hätte</b>, <b>würde</b> ich mehr Sport <b>machen</b>.</td></tr>
        <tr><td>irreal, Vergangenheit</td><td>Wenn ich das <b>gewusst hätte</b>, <b>wäre</b> ich <b>gekommen</b>.</td></tr>
        <tr><td>Wunsch</td><td>Wenn ich doch mehr Zeit <b>hätte</b>! · Ich <b>wünschte</b>, ich <b>könnte</b> …</td></tr>
        <tr><td>Rat</td><td>An deiner Stelle <b>würde</b> ich … · Du <b>solltest</b> …</td></tr>
        <tr><td>höfliche Bitte</td><td><b>Könnten</b> Sie mir bitte helfen? · <b>Hätten</b> Sie kurz Zeit?</td></tr>
        <tr><td>Vergleich</td><td>Er tut so, <b>als ob</b> er alles <b>wüsste</b>. / <b>als wüsste</b> er alles.</td></tr></table>
        <div class="hinweis">Ohne „wenn“: <b>Hätte</b> ich Zeit, <b>würde</b> ich kommen. (Verb auf Position 1)</div>` }
    ],
    aufgaben: [
      { id: "k2a", typ: "wahl", titel: "Konjunktiv II – die richtige Form", minuten: 6,
        anleitung: "Wähle die richtige Form.",
        items: [
          { f: "Wenn ich mehr Geld ___, würde ich ein Haus kaufen.", o: ["hätte", "habe", "hatte", "würde haben"] },
          { f: "Wenn ich das gewusst hätte, ___ ich früher gekommen.", o: ["wäre", "hätte", "würde", "war"] },
          { f: "___ Sie mir bitte das Salz geben?", o: ["Könnten", "Konnten", "Können würden", "Kannten"] },
          { f: "Du ___ mehr schlafen. Du siehst müde aus.", o: ["solltest", "sollst", "solltet", "würdest sollen"] },
          { f: "Er tut so, als ob er der Chef ___.", o: ["wäre", "ist", "war", "sei gewesen"] },
          { f: "Ich ___, ich könnte besser kochen.", o: ["wünschte", "wünsche", "würde wünschen", "wunsch"] },
          { f: "___ ich früher losgefahren, hätte ich den Zug bekommen.", o: ["Wäre", "Hätte", "Würde", "War"], tipp: "ohne wenn: Verb auf Position 1; losfahren → sein." },
          { f: "Du hättest mich anrufen ___!", o: ["sollen", "gesollt", "sollst", "solltest"] },
          { f: "Wenn er nicht krank ___ wäre, hätte er mitgespielt.", o: ["gewesen", "geworden", "sein", "worden"] }
        ] },
      { id: "k2b", typ: "sprechen", titel: "Blitzrunde: Was wäre, wenn …?", minuten: 6,
        anleitung: "Ich ziehe einen Namen. Antworten Sie mit Konjunktiv II – mindestens zwei Sätze, Mikro an!",
        saetze: ["Was würden Sie machen, wenn Sie im Lotto gewinnen würden?", "Wenn Sie einen Tag Bundeskanzler/in wären – was würden Sie ändern?", "Welchen Beruf hätten Sie gern, wenn Sie noch einmal wählen könnten?", "Was hätten Sie anders gemacht, wenn Sie schon früher Deutsch gelernt hätten?", "Ein Freund will kündigen. Was würden Sie ihm raten?", "Wo würden Sie gern leben, wenn Sie frei wählen könnten?", "Was wäre anders, wenn es keine Handys gäbe?"] },
      { id: "k2c", typ: "bauen", titel: "Höflich bitten und raten", minuten: 4,
        anleitung: "Bau den Satz.",
        hinweis: "Fragen ohne Fragewort: Verb auf Position 1. Konjunktiv-Form auf Position 1 oder 2.",
        items: [
          { w: ["könnten", "Sie", "mir", "bitte", "die", "Unterlagen", "schicken"], a: ["könnten sie mir bitte die unterlagen schicken"], p: "?" },
          { w: ["an", "deiner", "Stelle", "würde", "ich", "den", "Job", "annehmen"], a: ["an deiner stelle würde ich den job annehmen", "ich würde an deiner stelle den job annehmen", "den job würde ich an deiner stelle annehmen"], p: "." },
          { w: ["hätten", "Sie", "morgen", "kurz", "Zeit", "für", "mich"], a: ["hätten sie morgen kurz zeit für mich", "hätten sie morgen für mich kurz zeit"], p: "?" },
          { w: ["wenn", "ich", "Zeit", "hätte,", "würde", "ich", "dir", "helfen"], a: ["wenn ich zeit hätte würde ich dir helfen", "ich würde dir helfen wenn ich zeit hätte"], p: "." }
        ] }
    ] },
  { id: "konj1", sitzung: 3, icon: "📰", titel: "Konjunktiv I: Indirekte Rede", minuten: 15,
    tafel: [
      { titel: "Indirekte Rede", html: `<div class="zwei-sp"><div class="box-blau"><b>direkt</b><div class="bsp">Der Minister: „Ich <b>habe</b> keine Zeit.“</div></div><div class="box-gruen"><b>indirekt</b><div class="bsp">Der Minister sagt, er <b class="rot">habe</b> keine Zeit.</div></div></div>
        <table><tr><th>Infinitiv</th><th>er/sie/es</th><th>sie (Plural) → Ersatz</th></tr>
        <tr><td>sein</td><td><b>sei</b></td><td><b>seien</b></td></tr><tr><td>haben</td><td><b>habe</b></td><td><s>haben</s> → <b>hätten</b></td></tr>
        <tr><td>können</td><td><b>könne</b></td><td><s>können</s> → <b>könnten</b></td></tr><tr><td>kommen</td><td><b>komme</b></td><td><s>kommen</s> → <b>kämen / würden kommen</b></td></tr></table>
        <div class="hinweis">Vergangenheit: er <b>sei</b> gekommen / er <b>habe</b> gearbeitet · Frage: er fragt, <b>ob</b> … / <b>wann</b> … · Bitte: sie sagt, er <b>solle</b> … · Pronomen anpassen!</div>` }
    ],
    aufgaben: [
      { id: "k1a", typ: "wahl", titel: "So steht es in der Zeitung", minuten: 5,
        anleitung: "Wähle die richtige Form der indirekten Rede.",
        items: [
          { f: "„Ich bin sehr zufrieden.“ → Die Trainerin sagt, sie ___ sehr zufrieden.", o: ["sei", "ist", "wäre gewesen", "seie"] },
          { f: "„Wir haben keine Pläne.“ → Die Politiker sagen, sie ___ keine Pläne.", o: ["hätten", "haben", "habe", "hatten"], tipp: "sie haben = Indikativ → Ersatzform hätten." },
          { f: "„Ich habe den Fehler gefunden.“ → Er sagt, er ___ den Fehler gefunden.", o: ["habe", "hat", "sei", "hätte gehabt"] },
          { f: "„Kommen Sie morgen?“ → Sie fragt, ___ ich morgen komme.", o: ["ob", "dass", "wann", "wenn"] },
          { f: "„Rufen Sie mich zurück!“ → Er bittet, ich ___ ihn zurückrufen.", o: ["solle", "werde", "sei", "habe"] },
          { f: "„Ich bin nach Berlin gefahren.“ → Sie erzählt, sie ___ nach Berlin gefahren.", o: ["sei", "habe", "ist", "wäre geworden"] },
          { f: "„Meine Firma braucht Fachkräfte.“ → Der Chef sagt, ___ Firma brauche Fachkräfte.", o: ["seine", "meine", "ihre", "deine"] }
        ] },
      { id: "k1b", typ: "partner", titel: "Breakout: Die Reporter", minuten: 8,
        anleitung: "A liest das Zitat vor. B gibt es in indirekter Rede wieder (Er/Sie sagt, …). Nächste Karte → Rollen tauschen.",
        karten: [
          K("Die Bürgermeisterin", "Lies vor: Die Bürgermeisterin sagt: „Wir bauen nächstes Jahr eine neue Schule. Das Geld ist schon da.“", ["Lies langsam und deutlich.", "Kontrolliere: sei / werde / baue?"],
            "Gib wieder: Die Bürgermeisterin sagt, …", ["…, man baue / sie bauten nächstes Jahr eine neue Schule.", "…, das Geld sei schon da."]),
          K("Der Fußballtrainer", "Lies vor: Der Trainer sagt: „Ich bin stolz auf meine Mannschaft. Wir haben hart gearbeitet.“", ["Kontrolliere: sei / hätten?"],
            "Gib wieder: Der Trainer sagt, …", ["…, er sei stolz auf seine Mannschaft.", "…, sie hätten hart gearbeitet."]),
          K("Die Ärztin", "Lies vor: Die Ärztin sagt: „Trinken Sie viel Wasser! Die Grippe dauert eine Woche.“", ["Kontrolliere: solle / dauere?"],
            "Gib wieder: Die Ärztin sagt, …", ["…, man solle viel Wasser trinken.", "…, die Grippe dauere eine Woche."]),
          K("Dein Partner", "Erzähle 2 Sätze über dein Wochenende.", ["Am Samstag habe ich …", "Am Sonntag bin ich …"],
            "Berichte, was A gesagt hat.", ["Du hast gesagt, du habest / hättest am Samstag …", "…, du seist am Sonntag …"])
        ] }
    ] },
  { id: "infinitiv", sitzung: 3, icon: "➡️", titel: "Infinitiv mit zu, um … zu, ohne … zu", minuten: 23,
    tafel: [
      { titel: "Infinitiv mit zu", html: `<table><tr><th>Wann?</th><th>Beispiel</th></tr>
        <tr><td>nach vielen Verben</td><td>Ich versuche, pünktlich <b>zu</b> sein. (vergessen, anfangen, aufhören, planen, beschließen, hoffen …)</td></tr>
        <tr><td>nach Nomen + haben</td><td>Ich habe keine Lust / keine Zeit, heute <b>zu</b> kochen.</td></tr>
        <tr><td>nach es ist + Adjektiv</td><td>Es ist wichtig, Pausen <b>zu</b> machen.</td></tr>
        <tr><td>trennbare Verben</td><td>Vergiss nicht, das Licht aus<b>zu</b>machen.</td></tr>
        <tr><td>Vergangenheit</td><td>Ich bin froh, die Prüfung bestanden <b>zu haben</b>.</td></tr></table>
        <div class="hinweis"><b>ohne zu:</b> Modalverben, werden, lassen, sehen, hören, gehen, bleiben, lernen (+ Infinitiv): Ich <b>lasse</b> das Auto <b>reparieren</b>. · Wir <b>gehen</b> heute <b>essen</b>.</div>` },
      { titel: "um … zu, ohne … zu, (an)statt … zu", html: `<table><tr><th></th><th>gleiches Subjekt</th><th>anderes Subjekt</th></tr>
        <tr><td>Ziel</td><td>Ich lerne, <b>um</b> die Prüfung <b>zu</b> bestehen.</td><td>Ich erkläre es, <b>damit</b> du es verstehst.</td></tr>
        <tr><td>fehlt etwas</td><td>Er ging, <b>ohne</b> sich <b>zu</b> verabschieden.</td><td>Er ging, <b>ohne dass</b> wir es merkten.</td></tr>
        <tr><td>Alternative</td><td><b>Statt</b> zu lernen, sieht er fern.</td><td><b>Statt dass</b> er hilft, schaut er zu.</td></tr></table>` }
    ],
    aufgaben: [
      { id: "in1", typ: "wahl", titel: "zu oder nicht zu?", minuten: 6,
        anleitung: "Wähle die richtige Form.",
        items: [
          { f: "Ich habe vergessen, dich ___.", o: ["anzurufen", "zu anrufen", "anrufen", "anzuzurufen"] },
          { f: "Wir müssen morgen früh ___.", o: ["aufstehen", "aufzustehen", "zu aufstehen", "aufgestanden"] },
          { f: "Es ist nicht leicht, eine Wohnung ___.", o: ["zu finden", "finden", "gefunden", "zufinden zu"] },
          { f: "Ich lasse meine Haare ___.", o: ["schneiden", "zu schneiden", "geschnitten", "schneidet"] },
          { f: "Sie freut sich, die Stelle ___.", o: ["bekommen zu haben", "zu bekommen haben", "bekommt zu haben", "bekommen haben zu"] },
          { f: "Er hat keine Zeit, ___.", o: ["einzukaufen", "einkaufen", "zu einkaufen", "eingekauft"] },
          { f: "Wir gehen heute Abend ___.", o: ["tanzen", "zu tanzen", "getanzt", "tanzen zu"] },
          { f: "Hör bitte auf, so laut ___!", o: ["zu sprechen", "sprechen", "gesprochen", "spricht"] }
        ] },
      { id: "in2", typ: "wahl", titel: "um … zu oder damit? ohne … zu oder ohne dass?", minuten: 5,
        anleitung: "Gleiches Subjekt → um … zu / ohne … zu. Anderes Subjekt → damit / ohne dass.",
        items: [
          { f: "Ich spare Geld, ___ ein Auto zu kaufen.", o: ["um", "damit", "ohne", "statt"] },
          { f: "Ich gebe dir meine Nummer, ___ du mich anrufen kannst.", o: ["damit", "um", "dass", "sodass"] },
          { f: "Er hat das Büro verlassen, ___ das Licht auszumachen.", o: ["ohne", "um", "statt", "damit"] },
          { f: "Sie hat gekündigt, ___ ihr Chef davon wusste.", o: ["ohne dass", "ohne", "um", "statt zu"] },
          { f: "___ zu lernen, hat er die ganze Nacht gespielt.", o: ["Statt", "Um", "Ohne dass", "Damit"] },
          { f: "Wir sprechen langsam, ___ alle uns verstehen.", o: ["damit", "um", "ohne", "statt"] }
        ] },
      { id: "in3", typ: "bauen", titel: "Sätze bauen mit Infinitiv", minuten: 4,
        anleitung: "Bau den Satz. Achtung: zu steht direkt vor dem Infinitiv – bei trennbaren Verben in der Mitte.",
        hinweis: "Der Infinitiv mit zu steht am Ende. Bei trennbaren Verben: an-zu-rufen.",
        items: [
          { w: ["ich", "habe", "keine", "Lust,", "heute", "zu", "kochen"], a: ["ich habe keine lust heute zu kochen", "heute habe ich keine lust zu kochen"], p: "." },
          { w: ["er", "lernt", "Deutsch,", "um", "in", "Deutschland", "zu", "studieren"], a: ["er lernt deutsch um in deutschland zu studieren", "um in deutschland zu studieren lernt er deutsch"], p: "." },
          { w: ["vergiss", "nicht,", "die", "Tür", "abzuschließen"], a: ["vergiss nicht die tür abzuschließen"], p: "!" },
          { w: ["sie", "ging", "nach", "Hause,", "ohne", "etwas", "zu", "sagen"], a: ["sie ging nach hause ohne etwas zu sagen", "ohne etwas zu sagen ging sie nach hause"], p: "." }
        ] },
      { id: "q_s3", typ: "quiz", titel: "Quiz Sitzung 3: Konjunktiv & Infinitiv", minuten: 0,
        items: [
          { f: "Wenn ich Zeit ___, würde ich kommen.", o: ["hätte", "habe", "hatte", "würde"] },
          { f: "Wenn ich das gewusst hätte, ___ ich dir geholfen.", o: ["hätte", "wäre", "würde", "habe"] },
          { f: "„Ich bin müde.“ → Er sagt, er ___ müde.", o: ["sei", "ist", "wäre gewesen", "seie"] },
          { f: "___ Sie mir bitte helfen?", o: ["Könnten", "Konnten", "Kann", "Gekonnt"] },
          { f: "Ich versuche, jeden Tag Deutsch ___.", o: ["zu sprechen", "sprechen", "gesprochen", "zu gesprochen"] },
          { f: "Ich arbeite, ___ meine Familie zu unterstützen.", o: ["um", "damit", "dass", "ohne"] },
          { f: "Du ___ früher anfangen sollen.", o: ["hättest", "hast", "würdest", "solltest"] },
          { f: "Er fragt, ___ der Kurs online ist.", o: ["ob", "dass", "wenn", "als"] }
        ] }
    ] },
  /* =================== SITZUNG 4 · Relativsätze, Kasus, Adjektive =================== */
  { id: "relativ", sitzung: 4, icon: "🔗", titel: "Relativsätze in allen Fällen", minuten: 22,
    tafel: [
      { titel: "Relativpronomen", html: `<table><tr><th></th><th>maskulin</th><th>neutral</th><th>feminin</th><th>Plural</th></tr>
        <tr><td>Nom.</td><td>der</td><td>das</td><td>die</td><td>die</td></tr>
        <tr><td>Akk.</td><td><b class="rot">den</b></td><td>das</td><td>die</td><td>die</td></tr>
        <tr><td>Dat.</td><td>dem</td><td>dem</td><td>der</td><td><b class="rot">denen</b></td></tr>
        <tr><td>Gen.</td><td><b class="rot">dessen</b></td><td><b class="rot">dessen</b></td><td><b class="rot">deren</b></td><td><b class="rot">deren</b></td></tr></table>
        <div class="hinweis"><b>Genus und Zahl</b> kommen vom Nomen davor. Den <b>Kasus</b> bestimmt die Rolle im <b>Relativsatz</b>!</div>
        <div class="bsp">Der Kollege, <b>dem</b> ich geholfen habe, … (helfen + Dativ)<br>Die Frau, <b>deren</b> Sohn bei uns arbeitet, … (ihr Sohn)<br>Die Kollegen, mit <b>denen</b> ich arbeite, … (arbeiten mit + Dativ)</div>` },
      { titel: "wo, was, wer und Präpositionen", html: `<table><tr><th></th><th>Beispiel</th></tr>
        <tr><td>Präposition + Relativpronomen</td><td>Das ist das Projekt, <b>an dem</b> ich arbeite.</td></tr>
        <tr><td><b>wo / wohin / woher</b> (Orte)</td><td>Kiel ist die Stadt, <b>wo</b> (= in der) ich wohne.</td></tr>
        <tr><td><b>was</b> nach alles, etwas, nichts, vieles, das + Superlativ, ganzem Satz</td><td>Das ist alles, <b>was</b> ich weiß. · Er hat bestanden, <b>was</b> mich freut.</td></tr>
        <tr><td><b>wo(r)</b> + Präposition (nach was-Bezug)</td><td>Es gibt vieles, <b>worüber</b> ich mich freue.</td></tr>
        <tr><td><b>wer …, (der)</b> = jede Person, die</td><td><b>Wer</b> Fragen hat, (<b>der</b>) kann sich melden.</td></tr></table>` }
    ],
    aufgaben: [
      { id: "re1", typ: "wahl", titel: "Das richtige Relativpronomen", minuten: 6,
        anleitung: "Wähle das richtige Relativpronomen. Frage: Welche Rolle hat das Wort im Relativsatz?",
        items: [
          { f: "Der Mann, ___ ich gestern getroffen habe, ist mein Nachbar.", o: ["den", "der", "dem", "dessen"], tipp: "Ich habe den Mann getroffen → Akkusativ." },
          { f: "Die Kollegin, ___ ich oft helfe, kommt aus Polen.", o: ["der", "die", "denen", "deren"], tipp: "helfen + Dativ, feminin → der." },
          { f: "Die Kinder, mit ___ ich spiele, sind sehr nett.", o: ["denen", "den", "die", "deren"] },
          { f: "Das ist die Firma, ___ Chef ich kenne.", o: ["deren", "dessen", "der", "die"], tipp: "die Firma → ihr Chef → deren." },
          { f: "Der Student, ___ Laptop kaputt ist, schreibt mit der Hand.", o: ["dessen", "deren", "dem", "der"] },
          { f: "Das ist alles, ___ ich weiß.", o: ["was", "das", "die", "wo"] },
          { f: "Die Stadt, ___ ich geboren bin, liegt am Meer.", o: ["in der", "wo der", "in die", "die"] },
          { f: "Das ist das Thema, ___ wir gestern gesprochen haben.", o: ["über das", "worüber das", "über dem", "das"] },
          { f: "___ zu spät kommt, muss draußen warten.", o: ["Wer", "Der", "Was", "Wen"] },
          { f: "Er hat die Prüfung bestanden, ___ alle überrascht hat.", o: ["was", "das", "der", "die"] }
        ] },
      { id: "re2", typ: "partner", titel: "Breakout: Erklär mir das Wort!", minuten: 9,
        anleitung: "A sieht drei Wörter und erklärt sie NUR mit Relativsätzen – ohne das Wort zu sagen. B rät. Nächste Karte → Rollen tauschen.",
        karten: [
          K("Wörter rund ums Büro", "Erkläre (nicht vorlesen!): 1. der Drucker · 2. die Chefin · 3. der Feierabend", ["Das ist ein Gerät, mit dem man …", "Das ist eine Person, die …", "Das ist die Zeit, in der …"],
            "Rate die Wörter. Frag nach.", ["Ist das etwas, das man …?", "Meinst du eine Person, der …?", "Ich glaube, das ist …"]),
          K("Wörter rund um die Wohnung", "Erkläre: 1. der Vermieter · 2. der Schlüssel · 3. die Nebenkosten", ["Das ist ein Mann, dem …", "Das ist etwas, ohne das …", "Das ist Geld, das …"],
            "Rate die Wörter.", ["Ist das jemand, dem die Wohnung gehört?", "Ich glaube, das ist …"]),
          K("Wörter rund um die Gesundheit", "Erkläre: 1. das Rezept · 2. die Krankenkasse · 3. der Notdienst", ["Das ist ein Papier, das …", "Das ist eine Firma, bei der …", "Das ist ein Service, den …"],
            "Rate die Wörter.", ["Meinst du etwas, das der Arzt …?", "Ich glaube, das ist …"]),
          K("Freie Wahl", "Denk dir drei Wörter aus und erkläre sie mit Relativsätzen.", ["… , der / die / das …", "… , mit dem / in der …", "… , dessen / deren …"],
            "Rate die Wörter.", ["Ist das ein Ding, das …?", "Ist das eine Person, deren …?"])
        ] }
    ] },
  { id: "kasus", sitzung: 4, icon: "🎯", titel: "Kasus, Präpositionen & n-Deklination", minuten: 18,
    tafel: [
      { titel: "Präpositionen und ihr Kasus", html: `<table><tr><th>Kasus</th><th>Präpositionen</th></tr>
        <tr><td><b>Akkusativ</b></td><td>durch · für · gegen · ohne · um · bis · entlang (nachgestellt)</td></tr>
        <tr><td><b>Dativ</b></td><td>aus · bei · mit · nach · seit · von · zu · gegenüber · außer · ab</td></tr>
        <tr><td><b>Wechsel</b> (Wo? Dat. / Wohin? Akk.)</td><td>an · auf · hinter · in · neben · über · unter · vor · zwischen</td></tr>
        <tr><td><b>Genitiv</b> (B2!)</td><td>wegen · trotz · während · statt · innerhalb · außerhalb · aufgrund · anhand · mithilfe · bezüglich · infolge · laut</td></tr></table>
        <div class="bsp"><b>Trotz des</b> Regens … · <b>Während der</b> Arbeit … · <b>Innerhalb einer</b> Woche … · <b>Aufgrund der</b> hohen Kosten …</div>` },
      { titel: "n-Deklination", html: `<p>Einige <b>maskuline</b> Nomen bekommen in Akkusativ, Dativ und Genitiv ein <b>-(e)n</b>:</p>
        <div class="bsp">der Kollege → den Kolleg<b class="rot">en</b>, dem Kolleg<b class="rot">en</b>, des Kolleg<b class="rot">en</b></div>
        <ul><li>auf <b>-e</b> (Personen/Tiere): der Kunde, der Junge, der Kollege, der Löwe</li><li>auf <b>-ent, -ant, -ist, -at, -oge</b>: der Student, der Praktikant, der Polizist, der Soldat, der Psychologe</li><li>einige andere: der Mensch, der Herr (Herr<b>n</b>), der Nachbar, der Bauer</li><li>Sonderfall: der Name → des Name<b>ns</b> (auch: der Gedanke, der Buchstabe)</li></ul>` }
    ],
    aufgaben: [
      { id: "ka1", typ: "wahl", titel: "Präpositionen mit Genitiv, Dativ, Akkusativ", minuten: 6,
        anleitung: "Wähle die richtige Form.",
        items: [
          { f: "Trotz ___ Regens sind wir spazieren gegangen.", o: ["des", "dem", "den", "der"] },
          { f: "Während ___ Besprechung war das Handy aus.", o: ["der", "die", "dem", "des"] },
          { f: "Wir müssen innerhalb ___ Woche antworten.", o: ["einer", "eine", "einem", "eines"] },
          { f: "Aufgrund ___ hohen Kosten wurde das Projekt gestoppt.", o: ["der", "den", "die", "des"] },
          { f: "Ich fahre seit ___ Jahr mit dem Rad.", o: ["einem", "ein", "einen", "eines"] },
          { f: "Das Geschenk ist für ___ Chef.", o: ["den", "dem", "der", "des"] },
          { f: "Ich hänge das Bild an ___ Wand.", o: ["die", "der", "dem", "den"], tipp: "Wohin? → Akkusativ." },
          { f: "Das Bild hängt an ___ Wand.", o: ["der", "die", "dem", "den"], tipp: "Wo? → Dativ." },
          { f: "Statt ___ Autos nehme ich das Fahrrad.", o: ["des", "dem", "das", "den"] }
        ] },
      { id: "ka2", typ: "wahl", titel: "n-Deklination", minuten: 4,
        anleitung: "Mit -(e)n oder ohne?",
        items: [
          { f: "Ich habe gestern mit dem ___ gesprochen.", o: ["Kunden", "Kunde", "Kundes", "Kunds"] },
          { f: "Kennst du den neuen ___?", o: ["Kollegen", "Kollege", "Kolleges", "Kollegin"] },
          { f: "Sehr geehrter ___ Müller, …", o: ["Herr", "Herrn", "Herren", "Herrs"], tipp: "Nominativ in der Anrede → Herr. Aber: an Herrn Müller." },
          { f: "Ich schreibe eine E-Mail an ___ Müller.", o: ["Herrn", "Herr", "Herren", "Herrs"] },
          { f: "Die Polizei hat dem ___ geholfen.", o: ["Studenten", "Student", "Studente", "Students"] },
          { f: "Wie ist die Schreibweise des ___?", o: ["Namens", "Namen", "Name", "Names"] },
          { f: "Das Auto des ___ steht vor der Tür.", o: ["Nachbarn", "Nachbars", "Nachbar", "Nachbares"] }
        ] },
      { id: "ka3", typ: "sprechen", titel: "Blitzrunde: Trotz, wegen, während …", minuten: 4,
        anleitung: "Ich ziehe einen Namen. Antworten Sie mit einer Genitiv-Präposition (wegen, trotz, während, innerhalb …).",
        saetze: ["Warum kommen manche Leute zu spät zur Arbeit? (wegen …)", "Was machen Sie trotz des schlechten Wetters gern?", "Was darf man während des Unterrichts nicht machen?", "Was muss man innerhalb einer Woche nach dem Umzug erledigen?", "Was ist aufgrund der hohen Preise schwierig geworden?"] }
    ] },
  { id: "adjektiv", sitzung: 4, icon: "🎨", titel: "Adjektive und Partizipien als Adjektiv", minuten: 20,
    tafel: [
      { titel: "Adjektivendungen – die Kurzregel", html: `<table><tr><th>Artikel</th><th>Endung</th><th>Beispiele</th></tr>
        <tr><td><b>der/die/das</b> (bestimmt)</td><td><b>-e</b> (Nom. Sg., Akk. f/n) sonst <b>-en</b></td><td>der neu<b>e</b> Kollege · mit dem neu<b>en</b> Kollegen</td></tr>
        <tr><td><b>ein/kein/mein</b></td><td>wie der-Artikel, aber: ein neu<b>er</b> Kollege, ein neu<b>es</b> Auto</td><td>mit meinem neu<b>en</b> Auto</td></tr>
        <tr><td><b>ohne Artikel</b></td><td>Endung zeigt den Kasus (wie der Artikel)</td><td>mit gut<b>em</b> Wetter · bei schlecht<b>er</b> Laune · heiß<b>er</b> Kaffee</td></tr></table>
        <div class="hinweis">Plural mit Artikel: immer <b>-en</b> (die neu<b>en</b> Kollegen). Genitiv ohne Artikel maskulin/neutral: trotz schlecht<b>en</b> Wetters.</div>` },
      { titel: "Partizipien als Adjektiv", html: `<div class="zwei-sp"><div class="box-blau"><b>Partizip I</b> = Infinitiv + d → aktiv, gleichzeitig<div class="bsp">das <b>weinende</b> Kind (= das Kind, das weint)<br>die <b>steigenden</b> Preise</div></div>
        <div class="box-gruen"><b>Partizip II</b> → passiv oder abgeschlossen<div class="bsp">die <b>reparierte</b> Heizung (= die repariert wurde)<br>der <b>angekommene</b> Zug (= der angekommen ist)</div></div></div>
        <h3>Erweitertes Partizipialattribut (typisch für Texte!)</h3>
        <div class="bsp">die <b>gestern im Büro abgegebene</b> Bewerbung<br>= die Bewerbung, <b>die gestern im Büro abgegeben wurde</b></div>` }
    ],
    aufgaben: [
      { id: "ad1", typ: "wahl", titel: "Die richtige Endung", minuten: 5,
        anleitung: "Wähle die richtige Adjektivendung.",
        items: [
          { f: "Ich habe einen neu___ Job.", o: ["en", "e", "er", "es"] },
          { f: "Das ist ein interessant___ Buch.", o: ["es", "e", "en", "er"] },
          { f: "Wir wohnen in einer klein___ Wohnung.", o: ["en", "e", "er", "em"] },
          { f: "Bei schlecht___ Wetter bleiben wir zu Hause.", o: ["em", "en", "er", "es"] },
          { f: "Die neu___ Kollegen sind sehr nett.", o: ["en", "e", "er", "es"] },
          { f: "Er trinkt gern heiß___ Tee.", o: ["en", "er", "es", "e"], tipp: "ohne Artikel, Akkusativ maskulin → -en (wie den)." },
          { f: "Das Auto meines alt___ Freundes ist kaputt.", o: ["en", "es", "e", "er"] },
          { f: "Ein freundlich___ Mitarbeiter hat mir geholfen.", o: ["er", "e", "en", "es"] }
        ] },
      { id: "ad2", typ: "sortieren", titel: "Partizip I oder Partizip II?", minuten: 4,
        anleitung: "Welche Form passt? Aktiv und gleichzeitig → Partizip I. Passiv oder abgeschlossen → Partizip II.",
        hinweis: "Partizip I: das Kind, das (gerade) schläft → das schlafende Kind. Partizip II: das Auto, das repariert wurde → das reparierte Auto.",
        koerbe: [{ k: "p1", t: "Partizip I (-end)" }, { k: "p2", t: "Partizip II (ge-…-t/-en)" }],
        items: [
          { t: "der Hund, der bellt → der ___ Hund", k: "p1" }, { t: "der Brief, der geschrieben wurde → der ___ Brief", k: "p2" },
          { t: "die Preise, die steigen → die ___ Preise", k: "p1" }, { t: "die Wohnung, die renoviert wurde → die ___ Wohnung", k: "p2" },
          { t: "der Gast, der angekommen ist → der ___ Gast", k: "p2" }, { t: "die Kinder, die spielen → die ___ Kinder", k: "p1" },
          { t: "das Formular, das ausgefüllt wurde → das ___ Formular", k: "p2" }, { t: "ein Problem, das wächst → ein ___ Problem", k: "p1" }
        ] },
      { id: "ad3", typ: "wahl", titel: "Partizipialattribute verstehen", minuten: 4,
        anleitung: "Welcher Relativsatz hat dieselbe Bedeutung?",
        items: [
          { f: "die gestern verschickte E-Mail", o: ["die E-Mail, die gestern verschickt wurde", "die E-Mail, die gestern verschickt", "die E-Mail, die gestern jemanden verschickt hat"] },
          { f: "der seit Jahren in Kiel lebende Künstler", o: ["der Künstler, der seit Jahren in Kiel lebt", "der Künstler, der in Kiel gelebt wurde", "der Künstler, der seit Jahren in Kiel gelebt hatte"] },
          { f: "die von der Stadt geplante Brücke", o: ["die Brücke, die von der Stadt geplant wird / wurde", "die Brücke, die die Stadt plant und baut", "die Brücke, die die Stadt geplant hat zu bauen"] },
          { f: "das schnell wachsende Unternehmen", o: ["das Unternehmen, das schnell wächst", "das Unternehmen, das schnell gewachsen wurde", "das Unternehmen, das schnell gewachsen ist und jetzt klein ist"] },
          { f: "die in der Prüfung gemachten Fehler", o: ["die Fehler, die in der Prüfung gemacht wurden", "die Fehler, die die Prüfung macht", "die Fehler, die in der Prüfung machen"] }
        ] },
      { id: "q_s4", typ: "quiz", titel: "Quiz Sitzung 4: Relativsätze, Kasus, Adjektive", minuten: 0,
        items: [
          { f: "Die Frau, ___ ich das Buch gegeben habe, ist Lehrerin.", o: ["der", "die", "den", "deren"] },
          { f: "Der Kollege, ___ Auto kaputt ist, kommt mit dem Bus.", o: ["dessen", "deren", "dem", "der"] },
          { f: "Das ist das Beste, ___ ich je gegessen habe.", o: ["was", "das", "dem", "wo"] },
          { f: "Wegen ___ Streiks fahren keine Züge.", o: ["des", "dem", "den", "der"] },
          { f: "Ich habe mit dem ___ telefoniert.", o: ["Kunden", "Kunde", "Kundes", "Kunds"] },
          { f: "Wir suchen einen erfahren___ Mitarbeiter.", o: ["en", "er", "e", "es"] },
          { f: "die ___ Preise (Preise, die steigen)", o: ["steigenden", "gestiegenen", "steigende", "gestiegen"] },
          { f: "das ___ Formular (das ausgefüllt wurde)", o: ["ausgefüllte", "ausfüllende", "ausgefüllt", "auszufüllend"] }
        ] }
    ] },
  /* =================== SITZUNG 5 · Präpositionen & Nominalstil =================== */
  { id: "verbpraep", sitzung: 5, icon: "🧲", titel: "Verben mit Präpositionen", minuten: 20,
    tafel: [
      { titel: "Verben, Adjektive und Nomen mit festen Präpositionen", html: `<div class="zwei-sp"><div><b>+ Akkusativ</b><ul class="hilfe"><li>warten <b>auf</b></li><li>sich freuen <b>auf</b> (Zukunft) / <b>über</b> (jetzt/Vergangenheit)</li><li>sich ärgern <b>über</b></li><li>sich kümmern <b>um</b></li><li>sich bewerben <b>um</b> / <b>bei</b> + D</li><li>denken <b>an</b></li><li>sich gewöhnen <b>an</b></li><li>sich interessieren <b>für</b></li><li>sich verlassen <b>auf</b></li></ul></div>
        <div><b>+ Dativ</b><ul class="hilfe"><li>teilnehmen <b>an</b></li><li>sich beschweren <b>bei</b> (Person) / über + A</li><li>träumen <b>von</b></li><li>abhängen <b>von</b></li><li>sich verabschieden <b>von</b></li><li>gehören <b>zu</b></li><li>Angst haben <b>vor</b></li><li>zufrieden sein <b>mit</b></li><li>einverstanden sein <b>mit</b></li></ul></div></div>` },
      { titel: "Fragen und Verweisen: wo(r)- und da(r)-", html: `<table><tr><th></th><th>Sache</th><th>Person</th></tr>
        <tr><td>Frage</td><td><b>Worauf</b> wartest du? <b>Wofür</b> interessierst du dich?</td><td><b>Auf wen</b> wartest du?</td></tr>
        <tr><td>Antwort</td><td>Ich warte <b>darauf</b>.</td><td>Ich warte <b>auf ihn</b>.</td></tr></table>
        <div class="hinweis">r bei Vokal: wo<b>r</b>auf, da<b>r</b>über, da<b>r</b>an – aber: wofür, damit, davon</div>
        <div class="bsp">Ich freue mich <b>darauf, dass</b> du kommst. · Ich freue mich <b>darauf</b>, dich <b>zu</b> sehen.</div>` }
    ],
    aufgaben: [
      { id: "vp1", typ: "wahl", titel: "Welche Präposition?", minuten: 6,
        anleitung: "Wähle die richtige Präposition bzw. Form.",
        items: [
          { f: "Ich warte schon seit einer Stunde ___ den Bus.", o: ["auf", "für", "an", "nach"] },
          { f: "Sie interessiert sich sehr ___ Politik.", o: ["für", "an", "über", "um"] },
          { f: "Ich habe mich ___ die laute Musik geärgert.", o: ["über", "auf", "an", "von"] },
          { f: "Wir nehmen ___ einem Deutschkurs teil.", o: ["an", "bei", "in", "zu"] },
          { f: "Kannst du dich ___ die Kinder kümmern?", o: ["um", "für", "auf", "an"] },
          { f: "Es hängt ___ Wetter ab, ob wir grillen.", o: ["vom", "am", "zum", "beim"] },
          { f: "Ich freue mich schon ___ den Urlaub nächsten Monat.", o: ["auf", "über", "an", "für"], tipp: "Zukunft → sich freuen auf." },
          { f: "Hast du dich schon ___ die neue Wohnung gewöhnt?", o: ["an", "auf", "mit", "zu"] },
          { f: "Ich bin mit deinem Vorschlag ___.", o: ["einverstanden", "zufrieden über", "einig an", "gewöhnt"] }
        ] },
      { id: "vp2", typ: "wahl", titel: "wo(r)-, da(r)- oder Präposition + Person?", minuten: 5,
        anleitung: "Wähle die richtige Form.",
        items: [
          { f: "___ denkst du gerade? – An meinen Urlaub.", o: ["Woran", "An was", "Worauf", "Daran"] },
          { f: "___ wartest du? – Auf meine Schwester.", o: ["Auf wen", "Worauf", "Wofür", "Darauf"], tipp: "Person → Präposition + wen/wem." },
          { f: "Interessierst du dich für Fußball? – Ja, ich interessiere mich sehr ___.", o: ["dafür", "für ihn", "dazu", "wofür"] },
          { f: "Ich freue mich ___, dass du kommst.", o: ["darauf", "worauf", "auf", "dafür"] },
          { f: "Erinnerst du dich an deinen ersten Lehrer? – Ja, ich erinnere mich gut ___.", o: ["an ihn", "daran", "woran", "an es"] },
          { f: "___ hast du dich beschwert? – Über den Lärm.", o: ["Worüber", "Über was", "Darüber", "Wovon"] }
        ] },
      { id: "vp3", typ: "sprechen", titel: "Blitzrunde: Worauf? Worüber? Wofür?", minuten: 5,
        anleitung: "Ich ziehe einen Namen. Antworten Sie mit ganzem Satz und richtiger Präposition.",
        saetze: ["Worauf freuen Sie sich in diesem Jahr?", "Worüber haben Sie sich zuletzt geärgert?", "Wofür interessieren Sie sich besonders?", "Woran müssen Sie sich in Deutschland immer noch gewöhnen?", "Wovon träumen Sie beruflich?", "Wovor haben Sie bei Prüfungen Angst?", "Womit sind Sie in Ihrem Alltag zufrieden?"] }
    ] },
  { id: "nominal", sitzung: 5, icon: "🏛️", titel: "Nominalstil – Verbalstil", minuten: 22,
    tafel: [
      { titel: "Vom Nebensatz zur Präposition", html: `<p>In Texten, Briefen und der Prüfung (B2!) wird oft <b>nominal</b> formuliert.</p>
        <table><tr><th>Verbalstil (Nebensatz)</th><th>Nominalstil (Präposition)</th></tr>
        <tr><td><b>weil</b> es stark regnete</td><td><b>wegen</b> des starken Regens</td></tr>
        <tr><td><b>obwohl</b> er krank war</td><td><b>trotz</b> seiner Krankheit</td></tr>
        <tr><td><b>wenn</b> man Fragen hat</td><td><b>bei</b> Fragen</td></tr>
        <tr><td><b>bevor</b> die Prüfung beginnt</td><td><b>vor</b> Beginn der Prüfung</td></tr>
        <tr><td><b>nachdem</b> er angekommen war</td><td><b>nach</b> seiner Ankunft</td></tr>
        <tr><td><b>während</b> wir arbeiten</td><td><b>während</b> der Arbeit</td></tr>
        <tr><td><b>um</b> Geld <b>zu</b> sparen / <b>damit</b> …</td><td><b>zum</b> Sparen von Geld</td></tr>
        <tr><td><b>indem</b> man regelmäßig übt</td><td><b>durch</b> regelmäßiges Üben</td></tr></table>` },
      { titel: "Nominalisierung: aus Verben werden Nomen", html: `<table><tr><th>Verb</th><th>Nomen</th></tr>
        <tr><td>beantragen, entscheiden, prüfen</td><td>die Beantrag<b>ung</b>, die Entscheid<b>ung</b>, die Prüf<b>ung</b></td></tr>
        <tr><td>ankommen, abfahren, beginnen</td><td>die Ankunft, die Abfahrt, der Beginn</td></tr>
        <tr><td>lesen, lernen (Infinitiv)</td><td><b>das</b> Lesen, <b>das</b> Lernen</td></tr></table>
        <div class="bsp">Subjekt → Genitiv: <i>Der Zug kommt an.</i> → <b>die Ankunft des Zuges</b><br>Akkusativ-Objekt → Genitiv: <i>den Antrag prüfen</i> → <b>die Prüfung des Antrags</b><br>Pronomen → Possessivartikel: <i>Er kommt an.</i> → <b>seine Ankunft</b></div>` }
    ],
    aufgaben: [
      { id: "no1", typ: "wahl", titel: "Nominal formulieren", minuten: 7,
        anleitung: "Welche nominale Form hat dieselbe Bedeutung?",
        items: [
          { f: "Weil der Zug Verspätung hatte, … → ___ des Zuges …", o: ["Wegen der Verspätung", "Trotz der Verspätung", "Bei der Verspätung", "Nach der Verspätung"] },
          { f: "Obwohl das Wetter schlecht war, … → ___", o: ["Trotz des schlechten Wetters", "Wegen des schlechten Wetters", "Bei schlechtem Wetter", "Während schlechtes Wetter"] },
          { f: "Nachdem sie angekommen war, … → ___", o: ["Nach ihrer Ankunft", "Vor ihrer Ankunft", "Bei ihrem Ankommen", "Seit ihrer Ankunft war"] },
          { f: "Wenn es brennt, … → ___", o: ["Bei Feuer", "Wegen Feuer", "Nach dem Feuer", "Trotz des Feuers"] },
          { f: "Bevor die Sitzung beginnt, … → ___", o: ["Vor Beginn der Sitzung", "Nach Beginn der Sitzung", "Bei der Sitzung beginnt", "Während Beginn"] },
          { f: "Man lernt eine Sprache, indem man viel spricht. → ___", o: ["durch viel Sprechen", "beim viel Sprechen", "zum Sprechen", "trotz des Sprechens"] },
          { f: "die Entscheidung ___ (Der Chef entscheidet.)", o: ["des Chefs", "vom Chef", "dem Chef", "der Chef"] },
          { f: "Ich brauche Ihre Unterschrift, ___ des Vertrags. (damit der Vertrag abgeschlossen werden kann)", o: ["zum Abschluss", "zur Abschluss", "beim Abschluss", "nach Abschluss"] }
        ] },
      { id: "no2", typ: "sortieren", titel: "Welches Nomen gehört zum Verb?", minuten: 4,
        anleitung: "Wie wird das Verb nominalisiert?",
        hinweis: "Viele Verben → -ung (die). Viele Verben ohne Endung → der/die (Beginn, Ankunft). Infinitiv als Nomen → das.",
        koerbe: [{ k: "ung", t: "die …ung" }, { k: "das", t: "das + Infinitiv" }, { k: "and", t: "andere Form" }],
        items: [
          { t: "entscheiden", k: "ung" }, { t: "ankommen", k: "and" }, { t: "lesen", k: "das" },
          { t: "bewerben (sich)", k: "ung" }, { t: "beginnen", k: "and" }, { t: "schwimmen", k: "das" },
          { t: "verbessern", k: "ung" }, { t: "abfahren", k: "and" }, { t: "einkaufen", k: "das" }
        ] },
      { id: "no3", typ: "duell", titel: "Duell: Grammatik-Mix", minuten: 9, fragen: 3,
        anleitung: "Zwei Namen werden gezogen – Mikro an! 3 Fragen, alle raten mit. Nach dem Auflösen lesen die beiden den Satz laut vor.",
        pool: [
          { f: "___ des schlechten Wetters fand das Fest statt.", o: ["Trotz", "Wegen", "Bei", "Während"] },
          { f: "Der Bericht muss bis Freitag geschrieben ___.", o: ["werden", "worden", "wurde", "sein"] },
          { f: "Wenn ich du ___, würde ich das nicht machen.", o: ["wäre", "bin", "war", "würde"] },
          { f: "Das ist der Kollege, ___ ich vertraue.", o: ["dem", "den", "der", "dessen"] },
          { f: "Ich freue mich ___, dass du gekommen bist.", o: ["darüber", "worüber", "über", "davon"] },
          { f: "___ ihrer Ankunft hat sie sofort angerufen.", o: ["Nach", "Vor", "Seit", "Bei"] },
          { f: "Er sagt, er ___ keine Zeit.", o: ["habe", "hat", "hätte gehabt", "habt"] },
          { f: "Ich habe vergessen, das Fenster ___.", o: ["zuzumachen", "zu zumachen", "zumachen", "zugemacht"] },
          { f: "Die Firma, ___ Produkte ich kaufe, ist aus Kiel.", o: ["deren", "dessen", "der", "die"] },
          { f: "Er kam, ___ er krank war.", o: ["obwohl", "trotz", "trotzdem", "weil"] },
          { f: "Das Problem lässt sich leicht ___.", o: ["lösen", "zu lösen", "gelöst", "löst"] },
          { f: "Bei schön___ Wetter gehen wir an den Strand.", o: ["em", "en", "er", "es"] }
        ] }
    ] },
  { id: "abschluss", sitzung: 5, icon: "🏁", titel: "Abschluss: Großes B2-Quiz", minuten: 18,
    tafel: [
      { titel: "Was haben wir wiederholt?", html: `<div class="chips"><span>📏 Satzbau</span><span>🔗 Konnektoren</span><span>⏱️ Nebensätze</span><span>🕰️ Zeiten</span><span>⚙️ Passiv</span><span>🔍 Modalverben</span><span>💭 Konjunktiv II</span><span>📰 Konjunktiv I</span><span>➡️ Infinitiv</span><span>🔗 Relativsätze</span><span>🎯 Kasus</span><span>🎨 Adjektive</span><span>🧲 Präpositionen</span><span>🏛️ Nominalstil</span></div>
        <p>Jetzt: das große Quiz – und danach eine kurze Runde: <b>Was ist für Sie noch schwer?</b></p>
        <p class="klein">Alles allein wiederholen: <b>Übungszentrale → Zusatzlektionen → Grammatik B2</b></p>` }
    ],
    aufgaben: [
      { id: "q_end", typ: "quiz", titel: "Großes B2-Quiz", minuten: 0,
        items: [
          { f: "Ich bin krank, ___ bleibe ich zu Hause.", o: ["deshalb", "weil", "obwohl", "denn"] },
          { f: "___ ich jung war, wollte ich Pilot werden.", o: ["Als", "Wenn", "Wann", "Ob"] },
          { f: "Je mehr du übst, ___ besser wirst du.", o: ["desto", "je", "als", "so"] },
          { f: "Das Paket ist gestern abgeholt ___.", o: ["worden", "geworden", "werden", "wurde"] },
          { f: "Er ist nicht da. Er ___ noch im Meeting sein. (wahrscheinlich)", o: ["dürfte", "darf", "will", "soll"] },
          { f: "Wenn ich das gewusst ___, wäre ich gekommen.", o: ["hätte", "wäre", "würde", "habe"] },
          { f: "„Ich habe keine Zeit.“ → Sie sagt, sie ___ keine Zeit.", o: ["habe", "hat", "hätte gehabt", "haben"] },
          { f: "Ich spare, ___ ein Auto zu kaufen.", o: ["um", "damit", "für", "dass"] },
          { f: "Die Kollegen, mit ___ ich arbeite, sind toll.", o: ["denen", "den", "die", "deren"] },
          { f: "Während ___ Pause trinke ich Kaffee.", o: ["der", "die", "dem", "den"] },
          { f: "Ich habe mit Herrn Schmidt und seinem ___ gesprochen.", o: ["Kollegen", "Kollege", "Kolleges", "Kolleg"] },
          { f: "die ___ Rechnung (Rechnung, die bezahlt wurde)", o: ["bezahlte", "bezahlende", "bezahlt", "zu bezahlte"] },
          { f: "___ interessierst du dich? – Für Musik.", o: ["Wofür", "Für was ist", "Dafür", "Worauf"] },
          { f: "Weil es regnete, … → ___ des Regens …", o: ["Wegen", "Trotz", "Bei", "Nach"] },
          { f: "Das Formular ist bis Montag ___. (muss abgegeben werden)", o: ["abzugeben", "abgeben", "abgegeben", "zu abgeben"] }
        ] },
      { id: "ab2", typ: "sprechen", titel: "Blitzrunde: Mein Grammatik-Fazit", minuten: 5,
        anleitung: "Ich ziehe einen Namen. Antworten Sie ehrlich – zwei Sätze.",
        saetze: ["Welches Grammatik-Thema ist für Sie jetzt klarer als vorher?", "Was ist für Sie immer noch schwer – und wie wollen Sie es üben?", "Welche Regel merken Sie sich auf jeden Fall?", "Wenn Sie ein Thema noch einmal wiederholen könnten, welches wäre das?"] }
    ] }
  ]
};
window.UNTERRICHT_PLAENE.b2gram = PLAN;
})();
