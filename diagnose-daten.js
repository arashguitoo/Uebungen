// diagnose-daten.js – Sprachstandsdiagnose B1/B2 (90 Minuten): Lesen, Grammatik, Sprachwissen, Wortschatz
// Jede Aufgabe: id, q (Frage), o (Optionen – die RICHTIGE steht immer an erster Stelle, angezeigt wird gemischt),
// b (Kompetenzbereich), n (Niveau B1/B2). Zuordnungsaufgaben: Block mit „optionen“, Aufgabe mit l = Buchstabe.
// Ids nie ändern – sonst passen alte Ergebnisse nicht mehr zur Auswertung.

export const TEST = {
  id: 'diagnose-b2', titel: 'Sprachstandsdiagnose B1/B2', dauer: 90,
  teile: [
    {
      id: 'lesen', titel: 'Lesen', icon: '📖', zeit: 35,
      info: 'Vier Aufgaben zum Leseverstehen: Überschriften zuordnen, einen Artikel genau lesen, Anzeigen zuordnen und Sätze in einen Text einsetzen.',
      bloecke: [
        {
          id: 'L1', titel: 'Aufgabe 1 · Überschriften zuordnen', typ: 'zuordnen',
          anweisung: 'Lesen Sie die fünf Kurztexte aus einer Mitarbeiterzeitung. Welche Überschrift (a–h) passt zu welchem Text? Drei Überschriften passen nicht.',
          optionen: [
            ['a', 'Mehr Auswahl beim Mittagessen'], ['b', 'Betriebsrat lehnt Homeoffice ab'], ['c', 'Ersthelfer werden – während der Arbeitszeit'],
            ['d', 'Neue Laptops für alle Auszubildenden'], ['e', 'Neue Regeln für das mobile Arbeiten'], ['f', 'Kantine bleibt wegen Umbau geschlossen'],
            ['g', 'Junge Ideen für weniger Abfall'], ['h', 'Kandidatinnen und Kandidaten gesucht']],
          aufgaben: [
            { id: 'L1-1', q: 'Ab dem 1. März können alle Beschäftigten zwei Tage pro Woche von zu Hause aus arbeiten, sofern ihre Tätigkeit es zulässt. Voraussetzung ist eine schriftliche Vereinbarung mit der Teamleitung. Die IT-Abteilung stellt die nötigen Geräte bereit; private Laptops dürfen aus Datenschutzgründen nicht verwendet werden. Wer zu Hause arbeitet, muss zwischen 9 und 15 Uhr telefonisch erreichbar sein.', l: 'e', b: 'l-global', n: 'B2' },
            { id: 'L1-2', q: 'Seit Montag bietet unsere Kantine täglich zusätzlich zum bisherigen Menü ein vegetarisches und ein veganes Gericht an. Die Zutaten stammen überwiegend von Höfen aus der Region, die Preise bleiben gleich. Ihre Meinung ist uns wichtig: Neben der Kasse steht eine Box für Rückmeldungen.', l: 'a', b: 'l-global', n: 'B1' },
            { id: 'L1-3', q: 'Im Mai wird ein neuer Betriebsrat gewählt. Wer sich für die Interessen der Belegschaft einsetzen möchte, kann sich zur Wahl stellen. Dafür sind bis zum 15. April die Unterschriften von mindestens fünf Kolleginnen oder Kollegen beim Wahlvorstand einzureichen. Eine Briefwahl ist möglich.', l: 'h', b: 'l-global', n: 'B2' },
            { id: 'L1-4', q: 'In jeder Abteilung muss es laut Gesetz ausgebildete Ersthelferinnen und Ersthelfer geben. Im Juni bietet das Rote Kreuz bei uns im Haus einen zweitägigen Kurs an. Die Teilnahme ist kostenlos und gilt als Arbeitszeit. Es sind noch Plätze frei – melden Sie sich in der Personalabteilung an.', l: 'c', b: 'l-global', n: 'B1' },
            { id: 'L1-5', q: 'Drei Auszubildende aus der Logistik haben untersucht, wie viel Verpackungsmaterial in unserem Lager täglich im Müll landet. Ihr Konzept soll die Menge um ein Drittel verringern. Die Geschäftsführung war so überzeugt, dass die Vorschläge ab Herbst umgesetzt werden. Außerdem gewann das Team einen regionalen Nachhaltigkeitspreis.', l: 'g', b: 'l-global', n: 'B2' }
          ]
        },
        {
          id: 'L2', titel: 'Aufgabe 2 · Einen Artikel genau lesen', typ: 'text',
          anweisung: 'Lesen Sie den Artikel aus einem Wirtschaftsmagazin und lösen Sie die Aufgaben. Wählen Sie jeweils die richtige Antwort.',
          text: [
            '**Ankommen heißt mehr als einen Arbeitsvertrag unterschreiben**',
            '(1) Viele Betriebe in Deutschland suchen händeringend Personal. Besonders in der Pflege, im Handwerk und in der Logistik bleiben Stellen monatelang unbesetzt. Immer mehr Unternehmen werben deshalb gezielt Fachkräfte aus dem Ausland an. Doch eine Untersuchung des Instituts für Arbeitsmarktforschung zeigt: Fast ein Viertel der neu eingestellten Fachkräfte verlässt den Betrieb innerhalb der ersten zwei Jahre wieder.',
            '(2) Die Gründe dafür liegen selten im Fachlichen. „Die meisten bringen eine sehr gute Ausbildung mit“, sagt die Personalberaterin Miriam Okafor. „Schwierig wird es eher im Alltag: bei der Wohnungssuche, bei Behördengängen oder wenn die Familie nachkommen soll.“ Wer sich nach Feierabend allein um alles kümmern müsse, sei schnell erschöpft – und suche sich irgendwann eine Stelle in einer Stadt, in der Freunde oder Verwandte leben.',
            '(3) Einige Unternehmen haben daraus gelernt. Ein mittelständischer Maschinenbauer aus Schwaben stellt neuen Kolleginnen und Kollegen zum Beispiel für das erste Jahr eine Patin oder einen Paten zur Seite. Diese Person hilft nicht nur bei Fragen zur Arbeit, sondern begleitet auch zur Bank oder zum Bürgeramt. Zusätzlich finanziert der Betrieb Deutschkurse, die teilweise während der Arbeitszeit stattfinden. Seitdem ist die Zahl der Kündigungen deutlich gesunken.',
            '(4) Kritikerinnen und Kritiker weisen allerdings darauf hin, dass solche Angebote vor allem für größere Firmen bezahlbar seien. Kleine Handwerksbetriebe hätten weder das Geld noch das Personal dafür. Sie fordern deshalb, dass Kommunen und Kammern stärker unterstützen, etwa durch zentrale Beratungsstellen, die mehreren Betrieben gleichzeitig zur Verfügung stehen.',
            '(5) Okafor hält beides für notwendig. Entscheidend sei aber vor allem die Haltung im Team: „Wenn neue Kolleginnen und Kollegen merken, dass ihre Erfahrung geschätzt wird und man ihnen Fehler in der Sprache nicht übelnimmt, bleiben sie auch dann, wenn anderswo etwas mehr gezahlt wird.“'
          ],
          aufgaben: [
            { id: 'L2-1', q: 'Laut der Untersuchung …', o: ['verlässt fast jede vierte neue Fachkraft den Betrieb in den ersten zwei Jahren wieder.', 'findet ein Viertel der Betriebe keine passenden Fachkräfte mehr.', 'bleiben ausländische Fachkräfte meist nur zwei Jahre im Land.'], b: 'l-detail', n: 'B1' },
            { id: 'L2-2', q: 'Warum verlassen viele Fachkräfte ihren Betrieb?', o: ['Die Aufgaben außerhalb der Arbeit überfordern sie.', 'Ihre Ausbildung passt nicht zu den Anforderungen.', 'In anderen Städten verdienen sie deutlich mehr Geld.'], b: 'l-detail', n: 'B2' },
            { id: 'L2-3', q: 'Die Patinnen und Paten im Maschinenbaubetrieb …', o: ['helfen auch bei privaten Erledigungen.', 'geben den neuen Kollegen Deutschunterricht.', 'arbeiten ein Jahr lang im selben Team.'], b: 'l-detail', n: 'B1' },
            { id: 'L2-4', q: 'Worauf weisen Kritikerinnen und Kritiker hin?', o: ['Kleine Betriebe können sich solche Angebote kaum leisten.', 'Die Kommunen geben zu viel Geld für Beratungsstellen aus.', 'Große Firmen werben kleinen Betrieben die Fachkräfte ab.'], b: 'l-inferenz', n: 'B2' },
            { id: 'L2-5', q: 'Worauf bezieht sich „beides“ in Absatz 5?', o: ['auf Angebote der Betriebe und Unterstützung durch Kommunen und Kammern', 'auf eine gute Ausbildung und gute Deutschkenntnisse', 'auf höhere Löhne und günstige Wohnungen in der Stadt'], b: 'l-kohaerenz', n: 'B2' },
            { id: 'L2-6', q: '„händeringend“ (Absatz 1) bedeutet hier:', o: ['dringend und mit großer Mühe', 'mit freundlichen Gesten', 'nur für eine kurze Zeit'], b: 'l-inferenz', n: 'B2' },
            { id: 'L2-7', q: 'Was ist nach Meinung von Frau Okafor am wichtigsten?', o: ['Wertschätzung und Geduld im Team', 'ein höheres Gehalt als anderswo', 'fehlerfreies Deutsch von Anfang an'], b: 'l-inferenz', n: 'B2' }
          ]
        },
        {
          id: 'L3', titel: 'Aufgabe 3 · Anzeigen zuordnen', typ: 'zuordnen',
          anweisung: 'Lesen Sie die Situationen 1–6 und die Anzeigen a–g. Welche Anzeige passt zu welcher Situation? Jede Anzeige passt höchstens einmal. Für eine Situation gibt es keine passende Anzeige – wählen Sie dann x.',
          optionen: [
            ['a', 'Weiterbildung „Fachkraft für Lagerlogistik“ – berufsbegleitend abends und samstags, 18 Monate, Förderung mit Bildungsgutschein möglich.'],
            ['b', 'Sprachcafé im Stadtteilzentrum: jeden Donnerstag 18–20 Uhr Deutsch sprechen in entspannter Atmosphäre. Kostenlos, ohne Anmeldung.'],
            ['c', 'Anerkennungsberatung: Sie haben einen Berufsabschluss aus dem Ausland? Wir klären mit Ihnen, welche Schritte nötig sind. Termine nach Vereinbarung, auch online.'],
            ['d', 'Familienservice: Wenn die Kita kurzfristig schließt, vermitteln wir Ihnen schnell eine Betreuung für Ihr Kind. Hotline rund um die Uhr.'],
            ['e', 'Bewerbungscheck: Wir lesen Lebenslauf und Anschreiben und geben Ihnen Tipps. Jeden ersten Montag im Monat im Jobcenter.'],
            ['f', 'Staplerschein in drei Tagen: Intensivkurs Montag bis Mittwoch, ganztags, inklusive Prüfung.'],
            ['g', 'Wohnen auf Zeit: Möblierte Apartments für Berufseinsteiger und neue Mitarbeitende, ab drei Monaten, ab sofort frei.'],
            ['x', 'keine passende Anzeige']],
          aufgaben: [
            { id: 'L3-1', q: 'Herr Demir arbeitet tagsüber im Lager und möchte sich langfristig beruflich weiterqualifizieren.', l: 'a', b: 'l-selektiv', n: 'B2' },
            { id: 'L3-2', q: 'Frau Ruiz ist Krankenpflegerin aus Kolumbien und weiß nicht, ob ihr Diplom in Deutschland gilt.', l: 'c', b: 'l-selektiv', n: 'B1' },
            { id: 'L3-3', q: 'Frau Novak möchte mehr Deutsch sprechen, hat aber kein Geld für einen Kurs und will sich nicht fest anmelden.', l: 'b', b: 'l-selektiv', n: 'B1' },
            { id: 'L3-4', q: 'Herr Haddad braucht für seine neue Stelle schon nächste Woche einen Nachweis, dass er Gabelstapler fahren darf.', l: 'f', b: 'l-selektiv', n: 'B1' },
            { id: 'L3-5', q: 'Frau Lindqvist beginnt nächsten Monat bei einer Firma in einer anderen Stadt und hat dort noch keine Unterkunft.', l: 'g', b: 'l-selektiv', n: 'B1' },
            { id: 'L3-6', q: 'Herr Tran möchte für seine Steuererklärung wissen, welche Fahrtkosten er absetzen kann.', l: 'x', b: 'l-selektiv', n: 'B2' }
          ]
        },
        {
          id: 'L4', titel: 'Aufgabe 4 · Sätze einsetzen', typ: 'zuordnen',
          anweisung: 'Lesen Sie die E-Mail. Welcher Satz (a–f) passt in welche Lücke? Zwei Sätze passen nicht.',
          text: [
            'Liebe Kolleginnen und Kollegen,',
            'ab dem 1. Juni stellen wir die Schichtplanung auf ein neues Online-System um. **(1) …** Sie können Ihre Schichten dann jederzeit auf dem Smartphone oder am PC einsehen. Auch Tauschwünsche lassen sich direkt im System eintragen. **(2) …** Bitte beachten Sie, dass ein Tausch erst gültig ist, wenn die Schichtleitung ihn bestätigt hat.',
            'Für die Anmeldung benötigen Sie Ihre Personalnummer. **(3) …** Falls Sie Ihre Nummer trotzdem nicht finden, wenden Sie sich bitte an das Personalbüro.',
            'Damit alle gut zurechtkommen, bieten wir im Mai kurze Schulungen an. **(4) …** Die Termine finden Sie am Schwarzen Brett.',
            'Viele Grüße\nSandra Kühn, Personalabteilung'
          ],
          optionen: [
            ['a', 'Die ausgedruckten Pläne am Schwarzen Brett gibt es dann nicht mehr.'],
            ['b', 'Wer mit Ihnen tauschen soll, wird automatisch benachrichtigt.'],
            ['c', 'Diese steht auf Ihrer Gehaltsabrechnung oben rechts.'],
            ['d', 'Sie dauern etwa 30 Minuten und finden während der Arbeitszeit statt.'],
            ['e', 'Leider können Schichten künftig nicht mehr getauscht werden.'],
            ['f', 'Ein Zugang über das Smartphone ist dabei leider nicht möglich.']],
          aufgaben: [
            { id: 'L4-1', q: 'Lücke (1)', l: 'a', b: 'l-kohaerenz', n: 'B2' },
            { id: 'L4-2', q: 'Lücke (2)', l: 'b', b: 'l-kohaerenz', n: 'B2' },
            { id: 'L4-3', q: 'Lücke (3)', l: 'c', b: 'l-kohaerenz', n: 'B1' },
            { id: 'L4-4', q: 'Lücke (4)', l: 'd', b: 'l-kohaerenz', n: 'B1' }
          ]
        }
      ]
    },
    {
      id: 'grammatik', titel: 'Grammatik', icon: '🧱', zeit: 25,
      info: 'Wählen Sie jeweils die Lösung, die grammatisch richtig ist.',
      bloecke: [
        {
          id: 'G', titel: 'Grammatik', typ: 'mc', anweisung: 'Wählen Sie die richtige Lösung.',
          aufgaben: [
            { id: 'G01', q: 'Welcher Satz ist richtig?', o: ['Morgen habe ich einen Termin beim Jobcenter.', 'Morgen ich habe einen Termin beim Jobcenter.', 'Morgen habe einen Termin ich beim Jobcenter.'], b: 'g-satzbau', n: 'B1' },
            { id: 'G02', q: 'Ich weiß nicht, ob ___.', o: ['der Zug heute pünktlich kommt', 'kommt der Zug heute pünktlich', 'der Zug kommt heute pünktlich'], b: 'g-satzbau', n: 'B1' },
            { id: 'G03', q: 'Welcher Satz ist richtig?', o: ['Weil die Lieferung zu spät ist, müssen wir den Kunden informieren.', 'Weil die Lieferung zu spät ist, wir müssen den Kunden informieren.', 'Weil ist die Lieferung zu spät, müssen wir den Kunden informieren.'], b: 'g-satzbau', n: 'B1' },
            { id: 'G04', q: 'Ich gehe heute früher nach Hause, ___ mein Sohn krank ist.', o: ['weil', 'deshalb', 'trotzdem', 'sondern'], b: 'g-konnektoren', n: 'B1' },
            { id: 'G05', q: '___ er schon seit zehn Jahren hier lebt, spricht er kaum Deutsch.', o: ['Obwohl', 'Weil', 'Trotzdem', 'Damit'], b: 'g-konnektoren', n: 'B2' },
            { id: 'G06', q: 'Der Auftrag war sehr dringend. ___ haben wir am Wochenende gearbeitet.', o: ['Deshalb', 'Weil', 'Obwohl', 'Damit'], b: 'g-konnektoren', n: 'B1' },
            { id: 'G07', q: '___ du mit dem Bericht fertig bist, schick ihn bitte an Frau Weber.', o: ['Sobald', 'Seitdem', 'Bevor', 'Solange'], b: 'g-konnektoren', n: 'B2' },
            { id: 'G08', q: 'Die neue Kollegin spricht ___ Englisch ___ Französisch fließend.', o: ['sowohl … als auch', 'weder … oder', 'entweder … noch', 'je … desto'], b: 'g-konnektoren', n: 'B2' },
            { id: 'G09', q: 'Kannst du ___ neuen Kollegin bitte die Datei schicken?', o: ['der', 'die', 'den', 'dem'], b: 'g-kasus', n: 'B1' },
            { id: 'G10', q: 'Ich brauche noch ___ Stift. Hast du einen für mich?', o: ['einen', 'ein', 'einem', 'einer'], b: 'g-kasus', n: 'B1' },
            { id: 'G11', q: 'Trotz ___ schlechten Wetters fand das Firmenfest im Garten statt.', o: ['des', 'dem', 'das', 'der'], b: 'g-kasus', n: 'B2' },
            { id: 'G12', q: 'Das Meeting findet ___ Konferenzraum im zweiten Stock statt.', o: ['im', 'in den', 'am', 'zum'], b: 'g-praep', n: 'B1' },
            { id: 'G13', q: 'Leg die Unterlagen bitte ___ Schreibtisch.', o: ['auf den', 'auf dem', 'an dem', 'im'], b: 'g-praep', n: 'B1' },
            { id: 'G14', q: '___ der Verspätung des Zuges kam ich zu spät zur Besprechung.', o: ['Wegen', 'Seit', 'Aus', 'Mit'], b: 'g-praep', n: 'B2' },
            { id: 'G15', q: 'Wir suchen einen ___ Mitarbeiter für unser Lager.', o: ['zuverlässigen', 'zuverlässiger', 'zuverlässige', 'zuverlässiges'], b: 'g-adj', n: 'B1' },
            { id: 'G16', q: 'Mit ___ Kollegen arbeite ich besonders gern zusammen.', o: ['freundlichen', 'freundliche', 'freundlicher', 'freundliches'], b: 'g-adj', n: 'B2' },
            { id: 'G17', q: 'Das ist der Vorschlag der ___ Abteilungsleiterin.', o: ['neuen', 'neue', 'neuer', 'neues'], b: 'g-adj', n: 'B2' },
            { id: 'G18', q: 'Ich warte schon seit einer Stunde ___ den Techniker.', o: ['auf', 'für', 'an', 'nach'], b: 'g-vpraep', n: 'B1' },
            { id: 'G19', q: 'Der Verkäufer hat sich bei uns ___ den Fehler entschuldigt.', o: ['für', 'über', 'von', 'an'], b: 'g-vpraep', n: 'B2' },
            { id: 'G20', q: '___ interessierst du dich? – Für Fotografie.', o: ['Wofür', 'Woran', 'Worüber', 'Wovon'], b: 'g-vpraep', n: 'B2' },
            { id: 'G21', q: 'Gestern ___ ich bis 18 Uhr im Büro geblieben.', o: ['bin', 'habe', 'hatte', 'wurde'], b: 'g-tempus', n: 'B1' },
            { id: 'G22', q: 'Als ich nach Deutschland kam, ___ ich noch kein Wort Deutsch.', o: ['konnte', 'kann', 'könnte', 'gekonnt'], b: 'g-tempus', n: 'B1' },
            { id: 'G23', q: 'Nachdem wir den Vertrag ___, begann die Lieferung.', o: ['unterschrieben hatten', 'unterschrieben haben', 'unterschreiben', 'unterschrieben werden'], b: 'g-tempus', n: 'B2' },
            { id: 'G24', q: 'Die Pakete ___ jeden Morgen um 7 Uhr vom Fahrer abgeholt.', o: ['werden', 'sind', 'haben', 'wird'], b: 'g-passiv', n: 'B1' },
            { id: 'G25', q: 'Der Fehler ist gestern vom Techniker behoben ___.', o: ['worden', 'geworden', 'werden', 'wurde'], b: 'g-passiv', n: 'B2' },
            { id: 'G26', q: 'Die Rechnung muss bis Freitag ___.', o: ['bezahlt werden', 'bezahlen werden', 'bezahlt worden', 'bezahlt wird'], b: 'g-passiv', n: 'B2' },
            { id: 'G27', q: 'Wenn ich mehr Zeit ___, würde ich eine Fortbildung machen.', o: ['hätte', 'habe', 'hatte', 'gehabt'], b: 'g-konj2', n: 'B1' },
            { id: 'G28', q: 'An deiner Stelle ___ ich den Chef direkt fragen.', o: ['würde', 'werde', 'wurde', 'wäre'], b: 'g-konj2', n: 'B2' },
            { id: 'G29', q: 'Wenn der Bus pünktlich gekommen ___, hätte ich den Termin nicht verpasst.', o: ['wäre', 'hätte', 'würde', 'war'], b: 'g-konj2', n: 'B2' },
            { id: 'G30', q: 'Das ist die Kollegin, ___ mir am ersten Tag geholfen hat.', o: ['die', 'der', 'den', 'deren'], b: 'g-relativ', n: 'B1' },
            { id: 'G31', q: 'Der Kunde, ___ ich gestern geschrieben habe, hat noch nicht geantwortet.', o: ['dem', 'den', 'der', 'dessen'], b: 'g-relativ', n: 'B2' },
            { id: 'G32', q: 'Die Firma, ___ Chef ich gestern kennengelernt habe, sucht Lagerarbeiter.', o: ['deren', 'dessen', 'die', 'der'], b: 'g-relativ', n: 'B2' },
            { id: 'G33', q: 'Ich habe leider vergessen, die Tür ___.', o: ['abzuschließen', 'zu abschließen', 'abschließen', 'abgeschlossen'], b: 'g-infinitiv', n: 'B1' },
            { id: 'G34', q: 'Er macht einen Sprachkurs, ___ bessere Chancen auf dem Arbeitsmarkt zu haben.', o: ['um', 'damit', 'weil', 'dass'], b: 'g-infinitiv', n: 'B2' },
            { id: 'G35', q: 'In der Lagerhalle ___ man nicht rauchen. Das ist verboten.', o: ['darf', 'muss', 'möchte', 'braucht'], b: 'g-modal', n: 'B1' },
            { id: 'G36', q: 'Mein Auto ist kaputt. Ich ___ es morgen in der Werkstatt reparieren.', o: ['lasse', 'lässt', 'mache', 'gehe'], b: 'g-modal', n: 'B2' },
            { id: 'G37', q: 'Nach ___ des Vertrags beginnt die Probezeit.', o: ['der Unterzeichnung', 'die Unterzeichnung', 'dem Unterzeichnung', 'unterzeichnen'], b: 'g-nominal', n: 'B2' },
            { id: 'G38', q: '„Weil die Preise gestiegen sind, …“ – Welche Nominalform ist richtig?', o: ['Wegen des Anstiegs der Preise …', 'Wegen der Anstieg der Preise …', 'Wegen den Anstieg der Preise …', 'Weil des Anstiegs der Preise …'], b: 'g-nominal', n: 'B2' }
          ]
        }
      ]
    },
    {
      id: 'wissen', titel: 'Sprachwissen', icon: '🔍', zeit: 10,
      info: 'Hier geht es um Wissen über die Sprache: Wortarten, Satzglieder, Kasus, Satzbau, Register und Wortbildung.',
      bloecke: [
        {
          id: 'S', titel: 'Sprachwissen', typ: 'mc', anweisung: 'Wählen Sie die richtige Antwort.',
          aufgaben: [
            { id: 'S01', q: 'Welche Wortart ist „obwohl“?', o: ['Konjunktion (leitet einen Nebensatz ein)', 'Präposition (steht vor einem Nomen)', 'Adverb (steht allein im Satz)', 'Pronomen (ersetzt ein Nomen)'], b: 's-wortart', n: 'B2' },
            { id: 'S02', q: 'In welchem Satz ist „essen“ ein Nomen?', o: ['Das Essen in der Kantine ist gut.', 'Wir gehen um zwölf Uhr essen.', 'Sie hat heute noch nichts gegessen.'], b: 's-wortart', n: 'B1' },
            { id: 'S03', q: '„Den Bericht schreibt morgen meine Kollegin.“ – Was ist das Subjekt?', o: ['meine Kollegin', 'den Bericht', 'morgen', 'schreibt'], b: 's-satzglied', n: 'B1' },
            { id: 'S04', q: '„Der Chef hat dem neuen Mitarbeiter den Schlüssel gegeben.“ – Was ist das Dativobjekt?', o: ['dem neuen Mitarbeiter', 'den Schlüssel', 'der Chef', 'hat gegeben'], b: 's-satzglied', n: 'B2' },
            { id: 'S05', q: '„Am Ende des Monats bekommen wir das Gehalt.“ – In welchem Kasus steht „des Monats“?', o: ['Genitiv', 'Dativ', 'Akkusativ', 'Nominativ'], b: 's-kasus', n: 'B2' },
            { id: 'S06', q: '„Ich helfe meinem Nachbarn.“ – Warum steht hier der Dativ?', o: ['Das Verb „helfen“ verlangt den Dativ.', 'Nach „ich“ steht immer der Dativ.', '„Nachbar“ ist ein Nomen, das nur im Dativ steht.'], b: 's-kasus', n: 'B1' },
            { id: 'S07', q: 'Welcher Satzteil ist ein Nebensatz?', o: ['dass die Besprechung ausfällt', 'die Besprechung fällt aus', 'fällt die Besprechung aus'], b: 's-satz', n: 'B1' },
            { id: 'S08', q: 'Woran erkennt man einen Nebensatz mit „weil“?', o: ['Das konjugierte Verb steht am Ende.', 'Das konjugierte Verb steht am Anfang.', 'Das Subjekt steht am Ende des Satzes.'], b: 's-satz', n: 'B2' },
            { id: 'S09', q: 'Welche Formulierung passt in eine formelle E-Mail an einen Kunden?', o: ['Wir bitten Sie, uns die Unterlagen bis Freitag zu senden.', 'Schick uns die ganzen Unterlagen doch einfach bis Freitag.', 'Hey, wir brauchen die Unterlagen echt dringend bis Freitag.'], b: 's-register', n: 'B1' },
            { id: 'S10', q: 'Welcher Gruß passt am Ende eines formellen Briefes?', o: ['Mit freundlichen Grüßen', 'Liebe Grüße und bis bald', 'Tschüss und schönes Wochenende'], b: 's-register', n: 'B1' },
            { id: 'S11', q: 'Mit welcher Endung wird aus dem Verb „bestellen“ ein Nomen?', o: ['-ung (die Bestellung)', '-bar (bestellbar)', '-lich (bestellich)'], b: 's-wortbildung', n: 'B1' },
            { id: 'S12', q: '„unzuverlässig“ – Was macht die Vorsilbe „un-“?', o: ['Sie verneint das Wort: nicht zuverlässig.', 'Sie verstärkt das Wort: sehr zuverlässig.', 'Sie macht aus dem Adjektiv ein Verb.'], b: 's-wortbildung', n: 'B2' },
            { id: 'S13', q: '„Es regnete. Trotzdem fuhr sie mit dem Fahrrad.“ – Was drückt „trotzdem“ aus?', o: ['einen Gegengrund (konzessiv)', 'einen Grund (kausal)', 'eine Folge (konsekutiv)', 'einen Gegensatz (adversativ)'], b: 's-konnektor', n: 'B2' },
            { id: 'S14', q: 'Welcher Konnektor drückt ein Ziel oder eine Absicht aus?', o: ['damit', 'weil', 'obwohl', 'nachdem'], b: 's-konnektor', n: 'B2' },
            { id: 'S15', q: '„Wir hatten schon gegessen.“ – In welcher Zeitform steht der Satz?', o: ['Plusquamperfekt', 'Perfekt', 'Präteritum', 'Futur I'], b: 's-verb', n: 'B1' },
            { id: 'S16', q: 'Welcher Satz steht im Passiv?', o: ['Das Paket wird morgen geliefert.', 'Das Paket kommt morgen an.', 'Der Bote bringt morgen das Paket.'], b: 's-verb', n: 'B2' }
          ]
        }
      ]
    },
    {
      id: 'wortschatz', titel: 'Wortschatz', icon: '🗂️', zeit: 20,
      info: 'Berufswortschatz, feste Verbindungen, Bedeutungen, Wortbildung, Redemittel und Redewendungen.',
      bloecke: [
        {
          id: 'W', titel: 'Wortschatz', typ: 'mc', anweisung: 'Wählen Sie die passende Lösung.',
          aufgaben: [
            { id: 'W01', q: 'Wie heißt eine Person, die in einem Betrieb einen Beruf lernt?', o: ['Auszubildende', 'Vorgesetzte', 'Selbstständige', 'Aushilfe'], b: 'v-beruf', n: 'B1' },
            { id: 'W02', q: 'Das Geld, das man nach Abzug von Steuern und Versicherungen bekommt, heißt …', o: ['Nettolohn', 'Bruttolohn', 'Trinkgeld', 'Zuschlag'], b: 'v-beruf', n: 'B1' },
            { id: 'W03', q: 'Die ersten Monate im neuen Job, in denen beide Seiten leichter kündigen können, heißen …', o: ['Probezeit', 'Kündigungsfrist', 'Elternzeit', 'Gleitzeit'], b: 'v-beruf', n: 'B2' },
            { id: 'W04', q: 'Wer länger als drei Tage krank ist, braucht meistens eine …', o: ['Arbeitsunfähigkeitsbescheinigung', 'Unbedenklichkeitsbescheinigung', 'Gehaltsabrechnung', 'Arbeitserlaubnis'], b: 'v-beruf', n: 'B2' },
            { id: 'W05', q: 'eine Entscheidung ___', o: ['treffen', 'machen', 'stellen', 'geben'], b: 'v-verbindung', n: 'B1' },
            { id: 'W06', q: 'einen Antrag ___', o: ['stellen', 'führen', 'treffen', 'nehmen'], b: 'v-verbindung', n: 'B2' },
            { id: 'W07', q: 'Rücksicht auf andere ___', o: ['nehmen', 'geben', 'machen', 'halten'], b: 'v-verbindung', n: 'B2' },
            { id: 'W08', q: 'Er hat die Ergebnisse der Studie in Frage ___.', o: ['gestellt', 'gesetzt', 'gelegt', 'gebracht'], b: 'v-verbindung', n: 'B2' },
            { id: 'W09', q: '„Der Termin wurde verschoben.“ Das heißt: Der Termin …', o: ['findet später statt.', 'fällt ganz aus.', 'beginnt früher.', 'ist schon vorbei.'], b: 'v-bedeutung', n: 'B1' },
            { id: 'W10', q: '„Die Firma hat die Preise erheblich erhöht.“ – „erheblich“ bedeutet:', o: ['deutlich', 'leicht', 'heimlich', 'plötzlich'], b: 'v-bedeutung', n: 'B2' },
            { id: 'W11', q: '„Bitte erledigen Sie das umgehend.“ – „umgehend“ bedeutet:', o: ['sofort', 'später', 'gründlich', 'gemeinsam'], b: 'v-bedeutung', n: 'B2' },
            { id: 'W12', q: '„Ich bin mit dem Vorschlag einverstanden.“ bedeutet:', o: ['Ich stimme zu.', 'Ich lehne ab.', 'Ich bin unsicher.', 'Ich habe Fragen.'], b: 'v-bedeutung', n: 'B1' },
            { id: 'W13', q: 'Ich bin gerade in einer Besprechung. Ich rufe Sie in einer Stunde ___.', o: ['zurück', 'ab', 'aus', 'vor'], b: 'v-verben', n: 'B1' },
            { id: 'W14', q: 'Die Firma hat im letzten Jahr 20 neue Leute ___.', o: ['eingestellt', 'ausgestellt', 'dargestellt', 'abgestellt'], b: 'v-verben', n: 'B2' },
            { id: 'W15', q: 'Es fehlt noch Ihre Unterschrift. Bitte ___ Sie das Formular.', o: ['unterschreiben', 'überschreiben', 'beschreiben', 'verschreiben'], b: 'v-verben', n: 'B1' },
            { id: 'W16', q: 'Leider müssen wir den Termin ___. Der Raum ist nicht frei.', o: ['absagen', 'aussagen', 'ansagen', 'zusagen'], b: 'v-verben', n: 'B2' },
            { id: 'W17', q: 'sich bewerben → die ___', o: ['Bewerbung', 'Bewerbheit', 'Bewerbschaft', 'Bewerbnis'], b: 'v-wortbildung', n: 'B1' },
            { id: 'W18', q: 'zuverlässig → die ___', o: ['Zuverlässigkeit', 'Zuverlässung', 'Zuverlässheit', 'Zuverlässnis'], b: 'v-wortbildung', n: 'B2' },
            { id: 'W19', q: 'Welches Wort gehört NICHT zur Wortfamilie „arbeiten“?', o: ['Abteilung', 'Arbeitsplatz', 'bearbeiten', 'Arbeitgeber'], b: 'v-wortbildung', n: 'B1' },
            { id: 'W20', q: 'Das Gegenteil von „ein befristeter Vertrag“ ist „ein ___ Vertrag“.', o: ['unbefristeter', 'fristloser', 'verfristeter', 'befreiter'], b: 'v-wortbildung', n: 'B2' },
            { id: 'W21', q: 'Sie verstehen Ihren Kollegen am Telefon nicht. Was sagen Sie?', o: ['Entschuldigung, könnten Sie das bitte wiederholen?', 'Entschuldigung, könnten Sie bitte etwas leiser sein?', 'Entschuldigung, darf ich Ihnen kurz etwas zeigen?'], b: 'v-redemittel', n: 'B1' },
            { id: 'W22', q: 'Sie möchten in einer Diskussion widersprechen. Was passt?', o: ['Da bin ich anderer Meinung.', 'Da haben Sie völlig recht.', 'Das sehe ich ganz genauso.'], b: 'v-redemittel', n: 'B1' },
            { id: 'W23', q: 'Sie möchten in einer Besprechung einen Vorschlag machen. Was passt?', o: ['Wie wäre es, wenn wir …', 'Ich bin dagegen, dass wir …', 'Ich verstehe nicht, warum wir …', 'Leider können wir nicht …'], b: 'v-redemittel', n: 'B2' },
            { id: 'W24', q: 'Sie schreiben eine Beschwerde. Welcher Satz passt?', o: ['Ich möchte mich über die verspätete Lieferung beschweren.', 'Ich möchte mich herzlich für die pünktliche Lieferung bedanken.', 'Ich möchte gern noch eine weitere Lieferung bestellen.'], b: 'v-redemittel', n: 'B2' },
            { id: 'W25', q: 'Die Kantine ist heute ___, weil die Köchin krank ist. Es gibt nur Brötchen am Kiosk.', o: ['geschlossen', 'eröffnet', 'bestellt', 'beendet'], b: 'v-kontext', n: 'B1' },
            { id: 'W26', q: 'Die Stelle ist seit gestern ___. Sie können sich bis zum 30. Juni bewerben.', o: ['ausgeschrieben', 'abgeschrieben', 'beschrieben', 'vorgeschrieben'], b: 'v-kontext', n: 'B2' },
            { id: 'W27', q: 'Wegen der hohen Nachfrage gibt es bei der Lieferung leider ___.', o: ['Engpässe', 'Rabatte', 'Vorteile', 'Überschüsse'], b: 'v-kontext', n: 'B2' },
            { id: 'W28', q: 'Herr Kaya ist für die Ausbildung der Lehrlinge ___.', o: ['zuständig', 'selbstständig', 'vollständig', 'anständig'], b: 'v-kontext', n: 'B2' },
            { id: 'W29', q: '„Das ist nicht mein Bier.“ bedeutet:', o: ['Das ist nicht meine Sache.', 'Ich trinke keinen Alkohol.', 'Das schmeckt mir nicht.'], b: 'v-wendungen', n: 'B2' },
            { id: 'W30', q: '„Wir sitzen alle in einem Boot.“ bedeutet:', o: ['Wir haben alle dasselbe Problem.', 'Wir machen zusammen Urlaub.', 'Wir arbeiten alle im Hafen.'], b: 'v-wendungen', n: 'B2' },
            { id: 'W31', q: '„jemandem unter die Arme greifen“ bedeutet:', o: ['jemandem helfen', 'jemanden festhalten', 'jemanden kritisieren'], b: 'v-wendungen', n: 'B2' },
            { id: 'W32', q: '„Ich drücke dir die Daumen!“ sagt man, wenn man …', o: ['jemandem Glück wünscht.', 'etwas nicht gut findet.', 'jemandem den Weg zeigt.'], b: 'v-wendungen', n: 'B1' }
          ]
        }
      ]
    }
  ]
};

/* Kompetenzbereiche: Name, Teil, passendes Merkmal im Feedback (mk), Übungen in der Zentrale (ex), Förderhinweis */
export const BEREICHE = {
  'l-global':      { t: 'Globalverstehen', teil: 'lesen', mk: 'lglobal', ex: ['fokus-lesen'], tipp: 'Texte überfliegen: Worum geht es? Überschrift, erster und letzter Satz, Schlüsselwörter markieren.' },
  'l-detail':      { t: 'Detailverstehen', teil: 'lesen', mk: 'ldetail', ex: ['fokus-lesen'], tipp: 'Frage zuerst lesen, dann die Textstelle suchen und Wort für Wort vergleichen (Zahlen, Verneinungen, Einschränkungen).' },
  'l-selektiv':    { t: 'Gezielt Informationen finden', teil: 'lesen', mk: 'ldetail', ex: ['fokus-lesen'], tipp: 'Situation genau lesen: Was braucht die Person wirklich (Zeit, Kosten, Ort)? Bedingungen in den Anzeigen abhaken.' },
  'l-inferenz':    { t: 'Schlussfolgern & Bedeutung erschließen', teil: 'lesen', mk: 'ldetail', ex: ['fokus-lesen'], tipp: 'Meinungen und indirekte Aussagen erkennen; unbekannte Wörter aus dem Kontext erschließen.' },
  'l-kohaerenz':   { t: 'Textzusammenhang', teil: 'lesen', mk: 'lglobal', ex: ['fokus-lesen'], tipp: 'Auf Verweiswörter achten (dies, diese, deshalb, dann): Worauf beziehen sie sich?' },
  'g-satzbau':     { t: 'Satzbau / Verbposition', teil: 'grammatik', mk: 'satzbau', ex: [], tipp: 'Verb an Position 2 im Hauptsatz, am Ende im Nebensatz; Satzklammer üben.' },
  'g-konnektoren': { t: 'Konnektoren & Nebensätze', teil: 'grammatik', mk: 'nebens', ex: [], tipp: 'weil/obwohl/damit (Verb am Ende) vs. deshalb/trotzdem (Verb auf Position 2); zweiteilige Konnektoren.' },
  'g-kasus':       { t: 'Artikel & Kasus', teil: 'grammatik', mk: 'kasus', ex: [], tipp: 'Artikeltabelle Nominativ–Genitiv wiederholen; Verben mit Dativ.' },
  'g-praep':       { t: 'Präpositionen', teil: 'grammatik', mk: 'kasus', ex: ['verben-praep'], tipp: 'Wechselpräpositionen (Wo? → Dativ, Wohin? → Akkusativ), Präpositionen mit Genitiv.' },
  'g-adj':         { t: 'Adjektivendungen', teil: 'grammatik', mk: 'adj', ex: [], tipp: 'Endungen nach bestimmtem / unbestimmtem / ohne Artikel systematisch üben.' },
  'g-vpraep':      { t: 'Verben mit Präpositionen', teil: 'grammatik', mk: 'kasus', ex: ['verben-praep'], tipp: 'Verben immer mit Präposition und Kasus lernen; wo(r)- und da(r)-Wörter.' },
  'g-tempus':      { t: 'Zeitformen', teil: 'grammatik', mk: 'tempus', ex: [], tipp: 'Perfekt mit sein/haben, Präteritum der Modalverben, Plusquamperfekt mit „nachdem“.' },
  'g-passiv':      { t: 'Passiv', teil: 'grammatik', mk: 'passiv', ex: [], tipp: 'Passiv Präsens/Präteritum/Perfekt und mit Modalverb („muss bezahlt werden“).' },
  'g-konj2':       { t: 'Konjunktiv II', teil: 'grammatik', mk: 'konj2', ex: [], tipp: 'Höfliche Bitten, Ratschläge, irreale Bedingungen (Gegenwart und Vergangenheit).' },
  'g-relativ':     { t: 'Relativsätze', teil: 'grammatik', mk: 'nebens', ex: [], tipp: 'Relativpronomen: Genus vom Bezugswort, Kasus aus dem Relativsatz; dessen/deren.' },
  'g-infinitiv':   { t: 'Infinitiv mit zu / um … zu', teil: 'grammatik', mk: 'satzbau', ex: [], tipp: 'zu bei trennbaren Verben (abzuschließen); um … zu vs. damit.' },
  'g-modal':       { t: 'Modalverben & lassen', teil: 'grammatik', mk: 'tempus', ex: [], tipp: 'Bedeutungen der Modalverben (dürfen/müssen/sollen) und „etwas machen lassen“.' },
  'g-nominal':     { t: 'Nominalstil', teil: 'grammatik', mk: 'nvv', ex: ['verben-praep'], tipp: 'Verbal ↔ nominal umformen (weil → wegen + Genitiv, nachdem → nach + Dativ).' },
  's-wortart':     { t: 'Wortarten', teil: 'wissen', mk: null, ex: [], tipp: 'Wortarten im Text bestimmen: Nomen, Verb, Adjektiv, Konjunktion, Präposition.' },
  's-satzglied':   { t: 'Satzglieder', teil: 'wissen', mk: 'kasus', ex: [], tipp: 'Fragen: Wer/Was? Wen/Was? Wem? – Subjekt und Objekte bestimmen.' },
  's-kasus':       { t: 'Kasus erkennen und begründen', teil: 'wissen', mk: 'kasus', ex: [], tipp: 'Woher kommt der Kasus: Verb, Präposition oder Funktion im Satz?' },
  's-satz':        { t: 'Haupt- und Nebensatz', teil: 'wissen', mk: 'satzbau', ex: [], tipp: 'Verbposition als Erkennungsmerkmal von Haupt- und Nebensatz.' },
  's-register':    { t: 'Register (formell / informell)', teil: 'wissen', mk: 'register', ex: ['smalltalk'], tipp: 'Formelle Wendungen für E-Mails und Gespräche mit Kunden und Vorgesetzten.' },
  's-wortbildung': { t: 'Wortbildung erkennen', teil: 'wissen', mk: null, ex: [], tipp: 'Typische Endungen (-ung, -keit, -bar, -lich) und Vorsilben (un-, ver-, be-).' },
  's-konnektor':   { t: 'Bedeutung von Konnektoren', teil: 'wissen', mk: 'nebens', ex: [], tipp: 'Konnektoren nach Funktion ordnen: kausal, konzessiv, final, konsekutiv, temporal.' },
  's-verb':        { t: 'Zeitform & Aktiv/Passiv bestimmen', teil: 'wissen', mk: 'tempus', ex: [], tipp: 'Verbformen im Text bestimmen und begründen.' },
  'v-beruf':       { t: 'Berufswortschatz', teil: 'wortschatz', mk: 'beruf', ex: [], tipp: 'Wortfelder Arbeitsvertrag, Lohn, Krankmeldung, Ausbildung mit Beispielsätzen.' },
  'v-verbindung':  { t: 'Nomen-Verb-Verbindungen', teil: 'wortschatz', mk: 'nvv', ex: ['verben-praep'], tipp: 'Feste Verbindungen als Einheit lernen (eine Entscheidung treffen, einen Antrag stellen).' },
  'v-bedeutung':   { t: 'Bedeutungen & Synonyme', teil: 'wortschatz', mk: 'beruf', ex: [], tipp: 'Synonyme und Gegenteile im Kontext lernen, Wortkarten mit Beispielsatz.' },
  'v-verben':      { t: 'Verben mit Vorsilben', teil: 'wortschatz', mk: null, ex: [], tipp: 'Präfixverben in Gruppen lernen (ab-/an-/zu-/aus-sagen; ein-/vor-/dar-stellen).' },
  'v-wortbildung': { t: 'Wortfamilien & Wortbildung', teil: 'wortschatz', mk: null, ex: ['verben-praep'], tipp: 'Wortfamilien anlegen: Verb → Nomen → Adjektiv.' },
  'v-redemittel':  { t: 'Redemittel', teil: 'wortschatz', mk: 'rmMeinung', ex: ['problem-loesen', 'smalltalk'], tipp: 'Redemittel für Meinung, Widerspruch, Vorschläge und Beschwerden üben.' },
  'v-kontext':     { t: 'Wörter im Kontext', teil: 'wortschatz', mk: 'beruf', ex: [], tipp: 'Lückentexte zu Berufssituationen; auf Kollokationen achten.' },
  'v-wendungen':   { t: 'Redewendungen', teil: 'wortschatz', mk: null, ex: ['smalltalk'], tipp: 'Häufige Redewendungen aus dem Arbeitsalltag mit Situation lernen.' }
};

/** alle Aufgaben flach: {id, teil, block, b, n, ...} */
export const AUFGABEN = TEST.teile.flatMap(T => T.bloecke.flatMap(B => B.aufgaben.map(a => ({ ...a, teil: T.id, block: B.id, typ: B.optionen ? 'zuordnen' : 'mc' }))));
export const ANZAHL = AUFGABEN.length;

/** richtig? – gewählte Antwort: bei mc der Text der Option, bei Zuordnung der Buchstabe */
export const istRichtig = (a, wahl) => wahl != null && (a.o ? wahl === a.o[0] : wahl === a.l);

/** Einstufung aus dem Anteil richtiger B1- und B2-Aufgaben */
export function niveau(b1, b2) {
  if (b2 >= 70 && b1 >= 70) return { k: 'B2', t: 'B2 sicher erreicht', f: '#14663a', c: '#cdeedb' };
  if (b2 >= 50 && b1 >= 60) return { k: 'B2-', t: 'auf dem Weg zu B2', f: '#4a7a16', c: '#e3f3d2' };
  if (b1 >= 70) return { k: 'B1', t: 'B1 sicher, B2 noch lückenhaft', f: '#8a6410', c: '#fdf0cf' };
  if (b1 >= 50) return { k: 'B1-', t: 'B1 teilweise erreicht', f: '#a5520f', c: '#fde4cc' };
  return { k: 'A2', t: 'unter B1 – Grundlagen festigen', f: '#b3402f', c: '#fbe0db' };
}

/** Auswertung eines Ergebnisses (res.it = {aufgabenId: 0|1}) */
export function analyse(it = {}, x = {}) {
  const leer = new Set(x.leer || []);
  const z = () => ({ p: 0, pm: 0, b1: 0, b1m: 0, b2: 0, b2m: 0, leer: 0 });
  const teile = {}, bereiche = {}, ges = z();
  for (const a of AUFGABEN) {
    const r = it[a.id] ? 1 : 0;
    for (const o of [ges, teile[a.teil] || (teile[a.teil] = z()), bereiche[a.b] || (bereiche[a.b] = z())]) {
      o.p += r; o.pm++; if (a.n === 'B1') { o.b1 += r; o.b1m++; } else { o.b2 += r; o.b2m++; } if (leer.has(a.id)) o.leer++;
    }
  }
  const pc = (p, m) => m ? Math.round(100 * p / m) : 0;
  for (const o of [ges, ...Object.values(teile), ...Object.values(bereiche)]) { o.pct = pc(o.p, o.pm); o.b1p = pc(o.b1, o.b1m); o.b2p = pc(o.b2, o.b2m); }
  for (const o of [ges, ...Object.values(teile), ...Object.values(bereiche)]) o.offen = o.pm > 0 && o.leer === o.pm;
  for (const o of [ges, ...Object.values(teile)]) o.niveau = o.offen ? { k: '–', t: 'nicht bearbeitet', f: '#666', c: '#eee' } : niveau(o.b1p, o.b2p);
  const sortiert = Object.entries(bereiche).filter(([, o]) => !o.offen).sort((a, b) => a[1].pct - b[1].pct);
  return {
    ges, teile, bereiche,
    staerken: sortiert.filter(([, o]) => o.pct >= 80).reverse().map(([k]) => k),
    foerder: sortiert.filter(([, o]) => o.pct < 60).map(([k]) => k),
    offen: Object.keys(bereiche).filter(k => bereiche[k].offen),
    mittel: sortiert.filter(([, o]) => o.pct >= 60 && o.pct < 80).map(([k]) => k)
  };
}
