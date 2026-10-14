// verben-praep.js – Datenbank „Verben mit Präpositionen“ + Aufgabengenerator
// Eintrag: [Verb, Präposition, Kasus (A/D/N), Beispielsatz, Häufigkeit 1–3, Zusatz]
// Im Satz: {…} = Präposition (auch verschmolzen: am, im, vom, zum, zur, beim, ans, aufs, ins, ums, fürs), […] = Begleiter (Artikel usw.)
// Häufigkeit: 1 = sehr häufig (Grundwortschatz), 2 = häufig, 3 = seltener
export const VERBEN = [
  ['abhängen', 'von', 'D', 'Der Preis hängt {von} [der] Liefermenge ab.', 1],
  ['etwas absprechen', 'mit', 'D', 'Bitte sprich den Termin {mit} [deiner] Kollegin ab.', 2],
  ['etwas abstimmen', 'mit', 'D', 'Ich muss meinen Urlaub {mit} [dem] Team abstimmen.', 2],
  ['achten', 'auf', 'A', 'Achten Sie bitte {auf} [die] Sicherheitsregeln!', 1],
  ['anfangen', 'mit', 'D', 'Wir fangen pünktlich {mit} [der] Besprechung an.', 1],
  ['ankommen', 'auf', 'A', 'Es kommt {auf} [die] Qualität an, nicht auf die Menge.', 2],
  ['sich anmelden', 'für', 'A', 'Ich melde mich {für} [den] Deutschkurs an.', 1],
  ['sich anpassen', 'an', 'A', 'Wir müssen uns {an} [die] neuen Regeln anpassen.', 2],
  ['antworten', 'auf', 'A', 'Hast du schon {auf} [die] E-Mail vom Kunden geantwortet?', 1],
  ['arbeiten', 'an', 'D', 'Das Team arbeitet gerade {an} [einem] neuen Konzept.', 1],
  ['sich ärgern', 'über', 'A', 'Der Kunde ärgert sich {über} [die] lange Wartezeit.', 1],
  ['auffordern', 'zu', 'D', 'Die Chefin fordert alle {zur} Pünktlichkeit auf.', 3],
  ['aufhören', 'mit', 'D', 'Um 17 Uhr hören wir {mit} [der] Arbeit auf.', 1],
  ['aufklären', 'über', 'A', 'Die Ärztin klärt den Patienten {über} [die] Risiken auf.', 3],
  ['aufpassen', 'auf', 'A', 'Kannst du kurz {auf} [meine] Tasche aufpassen?', 1],
  ['sich aufregen', 'über', 'A', 'Viele regen sich {über} [den] neuen Schichtplan auf.', 2],
  ['Geld ausgeben', 'für', 'A', 'Die Firma gibt viel Geld {für} [die] Werbung aus.', 2],
  ['sich bedanken', 'für', 'A', 'Ich bedanke mich {für} [Ihre] schnelle Antwort.', 1, 'bei + Dat.'],
  ['sich bedanken', 'bei', 'D', 'Ich möchte mich {bei} [der] Chefin bedanken.', 2, 'für + Akk.'],
  ['sich befinden', 'in', 'D', 'Das Lager befindet sich {im} Keller.', 2],
  ['beginnen', 'mit', 'D', 'Wir beginnen {mit} [dem] ersten Punkt der Tagesordnung.', 1],
  ['sich bemühen', 'um', 'A', 'Sie bemüht sich {um} [eine] neue Stelle.', 2],
  ['sich beraten', 'mit', 'D', 'Ich berate mich kurz {mit} [meinem] Team.', 3],
  ['berichten', 'über', 'A', 'Die Zeitung berichtet {über} [den] Streik.', 1],
  ['sich beschäftigen', 'mit', 'D', 'Ich beschäftige mich gerade {mit} [der] neuen Software.', 1],
  ['sich beschweren', 'über', 'A', 'Der Gast beschwert sich {über} [das] kalte Essen.', 1, 'bei + Dat.'],
  ['sich beschweren', 'bei', 'D', 'Er beschwert sich {beim} Hotelmanager.', 2, 'über + Akk.'],
  ['bestehen', 'aus', 'D', 'Unser Team besteht {aus} zehn Personen.', 2],
  ['sich beteiligen', 'an', 'D', 'Alle beteiligen sich {am} Geschenk für die Kollegin.', 3],
  ['sich bewerben', 'um', 'A', 'Ich bewerbe mich {um} [die] Stelle als Lagerist.', 1, 'bei + Dat.'],
  ['sich bewerben', 'bei', 'D', 'Sie hat sich {bei} [einer] großen Spedition beworben.', 1, 'um + Akk.'],
  ['sich beziehen', 'auf', 'A', 'Ich beziehe mich {auf} [Ihr] Schreiben vom 3. Mai.', 2],
  ['bitten', 'um', 'A', 'Darf ich Sie {um} [einen] Gefallen bitten?', 1],
  ['danken', 'für', 'A', 'Ich danke dir {für} [deine] Hilfe.', 1],
  ['denken', 'an', 'A', 'Denk bitte {an} [den] Termin morgen!', 1],
  ['deuten', 'auf', 'A', 'Der Techniker deutet {auf} [den] Knopf links unten.', 3],
  ['diskutieren', 'über', 'A', 'Wir diskutieren {über} [die] neuen Arbeitszeiten.', 1, 'mit + Dat.'],
  ['diskutieren', 'mit', 'D', 'Ich diskutiere oft {mit} [der] Abteilungsleiterin.', 2, 'über + Akk.'],
  ['sich drehen', 'um', 'A', 'Hier dreht sich alles {um} [den] Preis.', 2],
  ['sich eignen', 'für', 'A', 'Dieser Kurs eignet sich {für} Anfänger.', 3],
  ['sich einigen', 'auf', 'A', 'Wir haben uns {auf} [einen] neuen Termin geeinigt.', 2],
  ['einladen', 'zu', 'D', 'Die Firma lädt alle {zur} Weihnachtsfeier ein.', 1],
  ['sich einsetzen', 'für', 'A', 'Der Betriebsrat setzt sich {für} [die] Beschäftigten ein.', 2],
  ['einspringen', 'für', 'A', 'Kannst du morgen {für} mich einspringen?', 2],
  ['sich entscheiden', 'für', 'A', 'Ich habe mich {für} [das] günstigere Angebot entschieden.', 1, 'gegen + Akk.'],
  ['entscheiden', 'über', 'A', 'Die Chefin entscheidet {über} [den] Urlaubsantrag.', 2],
  ['sich entschuldigen', 'für', 'A', 'Ich entschuldige mich {für} [die] Verspätung.', 1, 'bei + Dat.'],
  ['sich entschuldigen', 'bei', 'D', 'Du solltest dich {bei} [der] Kundin entschuldigen.', 2, 'für + Akk.'],
  ['erfahren', 'von', 'D', 'Ich habe {von} [der] Kündigung erst gestern erfahren.', 2],
  ['sich erholen', 'von', 'D', 'Hast du dich {vom} Stress erholt?', 2],
  ['sich erinnern', 'an', 'A', 'Erinnerst du dich {an} [unser] erstes Projekt?', 1],
  ['erkennen', 'an', 'D', 'Gute Qualität erkennt man {am} Material.', 3],
  ['sich erkundigen', 'nach', 'D', 'Ich möchte mich {nach} [dem] Stand der Bestellung erkundigen.', 2, 'bei + Dat.'],
  ['erschrecken', 'über', 'A', 'Ich bin {über} [die] hohe Rechnung erschrocken.', 3],
  ['erwischen', 'bei', 'D', 'Man hat ihn {beim} Rauchen auf der Toilette erwischt.', 3],
  ['erzählen', 'von', 'D', 'Sie erzählt gern {von} [ihrer] Reise.', 1, 'auch: über + Akk.'],
  ['fehlen', 'an', 'D', 'Es fehlt {an} qualifiziertem Personal.', 3],
  ['fragen', 'nach', 'D', 'Ein Kunde hat {nach} Ihnen gefragt.', 1],
  ['sich freuen', 'auf', 'A', 'Ich freue mich {auf} [das] Wochenende.', 1, 'etwas kommt noch'],
  ['sich freuen', 'über', 'A', 'Der Chef freut sich {über} [den] großen Auftrag.', 1, 'etwas ist schon passiert'],
  ['führen', 'zu', 'D', 'Die Diskussion hat {zu} [einem] guten Ergebnis geführt.', 2],
  ['sich fürchten', 'vor', 'D', 'Viele fürchten sich {vor} [einer] Kündigung.', 3],
  ['es geht', 'um', 'A', 'In der Besprechung geht es {um} [das] neue Projekt.', 1],
  ['gehören', 'zu', 'D', 'Das Aufräumen gehört {zu} [deinen] Aufgaben.', 1],
  ['gelten', 'als', 'N', 'Er gilt {als} [ein] guter Chef.', 3],
  ['sich gewöhnen', 'an', 'A', 'Ich muss mich erst {an} [die] neue Software gewöhnen.', 1],
  ['glauben', 'an', 'A', 'Sie glaubt {an} [den] Erfolg des Projekts.', 2],
  ['gratulieren', 'zu', 'D', 'Wir gratulieren dir {zum} Geburtstag!', 1],
  ['halten', 'für', 'A', 'Ich halte das {für} [eine] gute Idee.', 2, '= meinen, dass …'],
  ['halten', 'von', 'D', 'Was hältst du {vom} neuen Vorschlag?', 1, '= Meinung'],
  ['sich halten', 'an', 'A', 'Alle müssen sich {an} [die] Regeln halten.', 2],
  ['es handelt sich', 'um', 'A', 'Es handelt sich {um} [einen] Fehler in der Rechnung.', 2],
  ['handeln', 'von', 'D', 'Der Artikel handelt {von} [der] Digitalisierung.', 2],
  ['helfen', 'bei', 'D', 'Kann ich dir {bei} [der] Arbeit helfen?', 1],
  ['hervorgehen', 'aus', 'D', '{Aus} [dem] Lieferschein geht hervor, dass alles geliefert wurde.', 3],
  ['hindern', 'an', 'D', 'Niemand kann dich {an} [deinem] Plan hindern.', 3],
  ['hinweisen', 'auf', 'A', 'Ich möchte Sie {auf} [das] Rauchverbot hinweisen.', 2],
  ['hoffen', 'auf', 'A', 'Wir hoffen {auf} [ein] gutes Angebot.', 1],
  ['hören', 'von', 'D', 'Sie hören bald {von} uns.', 2],
  ['sich informieren', 'über', 'A', 'Ich informiere mich {über} [die] freie Stelle.', 1, 'bei + Dat.'],
  ['sich informieren', 'bei', 'D', 'Informieren Sie sich {bei} [der] Agentur für Arbeit.', 3, 'über + Akk.'],
  ['sich interessieren', 'für', 'A', 'Er interessiert sich {für} [die] neue Technik.', 1],
  ['kämpfen', 'für', 'A', 'Die Gewerkschaft kämpft {für} [einen] höheren Lohn.', 2],
  ['kämpfen', 'gegen', 'A', 'Die Bürger kämpfen {gegen} [den] Bau der Straße.', 3],
  ['kandidieren', 'für', 'A', 'Sie kandidiert {für} [den] Betriebsrat.', 3],
  ['klagen', 'über', 'A', 'Der Patient klagt {über} starke Schmerzen.', 2],
  ['etwas klären', 'mit', 'D', 'Das kläre ich {mit} [dem] Chef.', 2],
  ['kommen', 'auf', 'A', 'Wie bist du {auf} [diese] Idee gekommen?', 3],
  ['kommen', 'zu', 'D', 'Kommen wir {zum} nächsten Punkt.', 2],
  ['sich konzentrieren', 'auf', 'A', 'Ich muss mich {auf} [die] Prüfung konzentrieren.', 1],
  ['sich kümmern', 'um', 'A', 'Wer kümmert sich {um} [die] neuen Kollegen?', 1],
  ['lachen', 'über', 'A', 'Alle lachen {über} [den] Witz.', 2],
  ['leiden', 'an', 'D', 'Er leidet {an} [einer] Allergie.', 3, '= Krankheit'],
  ['leiden', 'unter', 'D', 'Viele leiden {unter} [dem] Stress.', 2, '= Belastung'],
  ['liegen', 'an', 'D', 'Das Problem liegt {am} Drucker, nicht am Computer.', 2],
  ['sich melden', 'bei', 'D', 'Bitte melden Sie sich {bei} [der] Rezeption.', 1],
  ['mitmachen', 'bei', 'D', 'Machst du {beim} Betriebsausflug mit?', 2],
  ['nachdenken', 'über', 'A', 'Ich denke {über} [Ihr] Angebot nach.', 1],
  ['nachfragen', 'bei', 'D', 'Ich frage {bei} [der] Personalabteilung nach.', 2],
  ['sich orientieren', 'an', 'D', 'Wir orientieren uns {am} Bedarf der Kunden.', 3],
  ['protestieren', 'gegen', 'A', 'Die Beschäftigten protestieren {gegen} [die] Schließung.', 2],
  ['reagieren', 'auf', 'A', 'Wie hat der Kunde {auf} [das] Angebot reagiert?', 1],
  ['rechnen', 'mit', 'D', 'Wir rechnen {mit} [einer] Verspätung.', 1],
  ['reden', 'über', 'A', 'Lass uns morgen {über} [das] Problem reden.', 1, 'auch: von + Dat.'],
  ['riechen', 'nach', 'D', 'Hier riecht es {nach} frischem Kaffee.', 3],
  ['etwas richten', 'an', 'A', 'Bitte richten Sie Ihre Bewerbung {an} [die] Personalabteilung.', 3],
  ['schicken', 'an', 'A', 'Schicken Sie die Rechnung bitte {an} [diese] Adresse.', 2],
  ['schimpfen', 'über', 'A', 'Alle schimpfen {über} [das] schlechte Wetter.', 3, 'auch: auf + Akk.'],
  ['schmecken', 'nach', 'D', 'Die Suppe schmeckt {nach} Knoblauch.', 3],
  ['schreiben', 'an', 'A', 'Ich schreibe eine E-Mail {an} [die] Kundin.', 2],
  ['schützen', 'vor', 'D', 'Die Brille schützt {vor} [der] Sonne.', 2, 'auch: gegen + Akk.'],
  ['sehen', 'nach', 'D', 'Ich sehe später {nach} [den] Kindern.', 3],
  ['sein', 'für', 'A', 'Ich bin {für} [den] Vorschlag.', 2],
  ['sein', 'gegen', 'A', 'Die Finanzabteilung ist {gegen} [den] Plan.', 2],
  ['sich sorgen', 'um', 'A', 'Sie sorgt sich {um} [ihre] Gesundheit.', 2],
  ['sorgen', 'für', 'A', 'Die Chefin sorgt {für} [ein] gutes Betriebsklima.', 1],
  ['sich spezialisieren', 'auf', 'A', 'Die Firma hat sich {auf} Elektroautos spezialisiert.', 3],
  ['sprechen', 'über', 'A', 'Wir müssen {über} [den] Plan sprechen.', 1, 'mit + Dat.'],
  ['sprechen', 'mit', 'D', 'Hast du schon {mit} [der] Chefin gesprochen?', 1, 'über + Akk.'],
  ['stehen', 'zu', 'D', 'Wie stehen Sie {zu} [diesem] Thema?', 3],
  ['sterben', 'an', 'D', 'Er ist {an} [einer] schweren Krankheit gestorben.', 3],
  ['stimmen', 'für', 'A', 'Alle stimmen {für} [den] Antrag.', 2, 'auch: gegen + Akk.'],
  ['streiten', 'über', 'A', 'Sie streiten oft {über} [die] Arbeitszeiten.', 2, 'mit + Dat.'],
  ['streiten', 'mit', 'D', 'Er streitet oft {mit} [seiner] Schwester.', 3, 'über + Akk.'],
  ['teilnehmen', 'an', 'D', 'Ich nehme {am} Erste-Hilfe-Kurs teil.', 1],
  ['telefonieren', 'mit', 'D', 'Sie telefoniert gerade {mit} [einer] Kundin.', 1],
  ['träumen', 'von', 'D', 'Ich träume {von} [einer] eigenen Firma.', 2],
  ['sich treffen', 'mit', 'D', 'Ich treffe mich heute {mit} [meiner] Kollegin.', 1],
  ['sich trennen', 'von', 'D', 'Die Firma trennt sich {von} [einem] Lieferanten.', 3],
  ['überreden', 'zu', 'D', 'Kann ich dich {zu} [einem] Kaffee überreden?', 3],
  ['überzeugen', 'von', 'D', 'Ich bin {vom} neuen Produkt überzeugt.', 2],
  ['umgehen', 'mit', 'D', 'Er kann gut {mit} schwierigen Kunden umgehen.', 2],
  ['sich unterhalten', 'über', 'A', 'Wir unterhalten uns {über} [den] neuen Kollegen.', 1, 'mit + Dat.'],
  ['sich unterhalten', 'mit', 'D', 'Ich unterhalte mich gern {mit} [meiner] Nachbarin.', 2, 'über + Akk.'],
  ['sich unterscheiden', 'von', 'D', 'Das neue Modell unterscheidet sich kaum {vom} alten.', 2],
  ['sich verabreden', 'mit', 'D', 'Ich habe mich {mit} [einer] Freundin verabredet.', 2],
  ['sich verabschieden', 'von', 'D', 'Ich verabschiede mich {von} [der] Gruppe.', 2],
  ['verbinden', 'mit', 'D', 'Ich verbinde Sie {mit} [der] Buchhaltung.', 2],
  ['vergleichen', 'mit', 'D', 'Vergleichen Sie das Angebot {mit} [dem] alten Preis.', 2],
  ['verhandeln', 'über', 'A', 'Wir verhandeln {über} [den] Preis.', 2, 'mit + Dat.'],
  ['verhandeln', 'mit', 'D', 'Sie verhandelt {mit} [der] Firma.', 3, 'über + Akk.'],
  ['sich verlassen', 'auf', 'A', 'Du kannst dich {auf} mich verlassen.', 1],
  ['sich verlieben', 'in', 'A', 'Sie hat sich {in} [einen] Kollegen verliebt.', 3],
  ['verschieben', 'auf', 'A', 'Wir verschieben das Meeting {auf} [den] nächsten Montag.', 2],
  ['sich etwas versprechen', 'von', 'D', 'Er verspricht sich viel {von} [der] Fortbildung.', 3],
  ['sich verstehen', 'mit', 'D', 'Ich verstehe mich gut {mit} [meinem] Team.', 1],
  ['etwas verstehen', 'von', 'D', 'Ich verstehe leider nichts {von} Technik.', 3],
  ['verzichten', 'auf', 'A', 'Ich verzichte heute {auf} [den] Nachtisch.', 2],
  ['sich vorbereiten', 'auf', 'A', 'Ich bereite mich {auf} [das] Vorstellungsgespräch vor.', 1],
  ['sich vorstellen', 'bei', 'D', 'Morgen stelle ich mich {bei} [einer] Spedition vor.', 1],
  ['warnen', 'vor', 'D', 'Ich warne dich {vor} [dem] glatten Boden!', 2],
  ['warten', 'auf', 'A', 'Wir warten {auf} [den] Bus.', 1],
  ['sich wenden', 'an', 'A', 'Bei Fragen wenden Sie sich bitte {an} [die] Rezeption.', 1],
  ['werden', 'zu', 'D', 'Er ist {zu} [einem] echten Experten geworden.', 3],
  ['wissen', 'von', 'D', 'Ich weiß nichts {von} [diesem] Brief.', 2],
  ['sich wundern', 'über', 'A', 'Ich wundere mich {über} [die] hohen Kosten.', 2],
  ['zugehen', 'auf', 'A', 'Geh doch einfach {auf} [die] neuen Kollegen zu!', 3],
  ['zugreifen', 'auf', 'A', 'Wir können nicht {auf} [den] Server zugreifen.', 3],
  ['zurechtkommen', 'mit', 'D', 'Kommst du {mit} [dem] neuen Programm zurecht?', 2],
  ['zurückführen', 'auf', 'A', 'Die Fehler sind {auf} [die] alten Maschinen zurückzuführen.', 3],
  ['zusammenarbeiten', 'mit', 'D', 'Wir arbeiten eng {mit} [der] Marketingabteilung zusammen.', 1],
  ['zuschauen', 'bei', 'D', 'Darf ich dir {bei} [der] Arbeit zuschauen?', 3],
  ['zweifeln', 'an', 'D', 'Ich zweifle nicht {an} [deinen] Worten.', 3],
  ['zwingen', 'zu', 'D', 'Die Krise zwang ihn {zu} [einer] beruflichen Neuorientierung.', 3]
].map(([v, p, k, s, h, x], i) => ({ i, v, p, k, s, h, x: x || '' }));

/* ---------------- Hilfen ---------------- */
export const KASUS = { A: 'Akk.', D: 'Dat.', N: 'Nom.' };
const PRAEP = ['an', 'auf', 'aus', 'bei', 'für', 'gegen', 'in', 'mit', 'nach', 'über', 'um', 'unter', 'von', 'vor', 'zu'];
const VERSCHMOLZEN = { am: ['an', 'dem'], beim: ['bei', 'dem'], im: ['in', 'dem'], vom: ['von', 'dem'], zum: ['zu', 'dem'], zur: ['zu', 'der'], ans: ['an', 'das'], aufs: ['auf', 'das'], ins: ['in', 'das'], ums: ['um', 'das'], fürs: ['für', 'das'] };
const KURZ = {}; for (const [k, [p, a]] of Object.entries(VERSCHMOLZEN)) KURZ[p + ' ' + a] = k;
const form = (p, art) => art ? (KURZ[p + ' ' + art] || p + ' ' + art) : p;
const gross = (w, wie) => wie && /^[A-ZÄÖÜ]/.test(wie) ? w[0].toUpperCase() + w.slice(1) : w;
const r = n => Math.floor(Math.random() * n);
export const mische = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = r(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const schluessel = v => v.replace(/^(sich |es |etwas |Geld )+/, '').replace(/^sich etwas /, '').replace(/^(handelt sich|geht)$/, 'es-$1');
const PRAEP_VON = {}; for (const e of VERBEN) { const m = (PRAEP_VON[schluessel(e.v)] ||= new Set()); m.add(e.p); if (/auch|gegen/.test(e.x)) for (const [, p] of e.x.matchAll(/([a-zäöüß]+) \+/g)) m.add(p); }
export const anzeige = e => `${e.v} ${e.p} + ${KASUS[e.k]}`;
const verbFett = e => `**${e.v} ${e.p}**`;
const teile = s => { const m = s.match(/\{([^}]+)\}/); return m ? m[1] : ''; };
const zerlege = tok => VERSCHMOLZEN[tok.toLowerCase()] || [tok.toLowerCase(), null];
export const satzVoll = (s, fett = true) => s.replace(/\{([^}]+)\}/, fett ? '**$1**' : '$1').replace(/\[([^\]]+)\]/, '$1');
const satzLueckeP = s => s.replace(/\{[^}]+\}/, '___').replace(/\[([^\]]+)\]/, '$1');
const satzLueckeA = s => s.replace(/\{([^}]+)\}/, '**$1**').replace(/\[[^\]]+\]/, '___');

/* Falsche Präpositionen: nicht die richtige und keine, die bei demselben Verb auch möglich ist */
function falschePraep(e, n = 3) {
  const erlaubt = PRAEP_VON[schluessel(e.v)] || new Set([e.p]);
  const haeufig = ['auf', 'über', 'mit', 'für', 'an', 'von', 'zu', 'um', 'nach', 'bei', 'vor', 'in'];
  const pool = mische(haeufig.filter(p => !erlaubt.has(p)));
  return pool.slice(0, n);
}

/* Begleiter in andere Kasusformen bringen (für die Artikel-Lücke) */
const D_ART = ['der', 'die', 'das', 'den', 'dem', 'des'];
const D_ZWILLING = { den: 'dem', dem: 'den', die: 'der', der: 'die', das: 'dem' };
const STAEMME = ['kein', 'mein', 'dein', 'sein', 'ihr', 'Ihr', 'unser', 'ein', 'dies', 'jed'];
const END_ZWILLING = { en: 'em', em: 'en', e: 'er', er: 'e', '': 'em', es: 'em' };
function artikelFormen(w) {
  if (D_ART.includes(w)) return { zw: D_ZWILLING[w] || 'dem', alle: D_ART.filter(x => x !== w && x !== 'des') };
  for (const st of STAEMME) if (w.startsWith(st)) {
    const end = w.slice(st.length); if (!(end in END_ZWILLING)) continue;
    const ends = (st === 'dies' || st === 'jed') ? ['e', 'en', 'em', 'er', 'es'] : ['', 'e', 'en', 'em', 'er'];
    return { zw: st + END_ZWILLING[end], alle: ends.map(x => st + x).filter(x => x !== w) };
  }
  return null;
}

/* ---------------- Aufgabentypen ----------------
   Jede Funktion liefert { typ, frage, opts, l, x, kontext, verben:[i…] } oder null.
   Für Zuordnen und Tabellen: aufgaben.js-Format (zu / matrix). */
const ERKL = e => `${verbFett(e)} + ${KASUS[e.k]}${e.x ? ` (${e.x})` : ''} – ${satzVoll(e.s)}`;

export const TYPEN = {
  praep(e) {
    const hin = e.x && !/^auch/.test(e.x) ? (e.x.includes('+') ? ` – außerdem: ${e.x}` : ` (${e.x})`) : '';
    return { typ: 'mc', kontext: 'Welche Präposition?', frage: `**${e.v}** ___ + ${KASUS[e.k]}${hin}`,
      opts: [e.p, ...falschePraep(e)], l: 0, x: ERKL(e), verben: [e.i] };
  },
  kasus(e) {
    if (e.k === 'N') return null;
    return { typ: 'mc', kontext: 'Akkusativ oder Dativ?', frage: `**${e.v} ${e.p}** + ___`, opts: [e.k === 'A' ? 'Akkusativ' : 'Dativ', e.k === 'A' ? 'Dativ' : 'Akkusativ'], l: 0, mischen: false, x: ERKL(e), verben: [e.i] };
  },
  satzP(e) {
    const tok = teile(e.s); if (!tok) return null;
    const [p0, art] = zerlege(tok);
    const falsch = falschePraep(e).map(p => gross(form(p, art), tok));
    return { typ: 'mc', kontext: 'Was passt in die Lücke?', frage: `${satzLueckeP(e.s)} (${e.v})`, opts: [tok, ...falsch], l: 0, x: ERKL(e), verben: [e.i] };
  },
  satzA(e) {
    const m = e.s.match(/\[([^\]]+)\]/); if (!m || e.k === 'N') return null;
    const f = artikelFormen(m[1]); if (!f) return null;
    const rest = mische(f.alle.filter(x => x !== f.zw)).slice(0, 2);
    return { typ: 'mc', kontext: `Welche Form? (${e.p} + ${KASUS[e.k]})`, frage: satzLueckeA(e.s), opts: [m[1], f.zw, ...rest], l: 0, x: ERKL(e), verben: [e.i] };
  },
  wo(e) {
    if (['als'].includes(e.p)) return null;
    const wo = p => (/^[aeiouäöü]/.test(p) ? 'wor' : 'wo') + p, da = p => (/^[aeiouäöü]/.test(p) ? 'dar' : 'da') + p;
    const fr = falschePraep(e);
    if (Math.random() < .5) return { typ: 'mc', kontext: 'Fragewort (Sache)', frage: `**${e.v} ${e.p}** etwas → ___ …?`, opts: [wo(e.p), ...fr.map(wo)].map(w => w[0].toUpperCase() + w.slice(1)), l: 0,
      x: `Fragen nach Sachen: wo(r) + Präposition. Nach Personen: ${e.p} + wen/wem (z. B. ${e.p} ${e.k === 'A' ? 'wen' : 'wem'}?).`, verben: [e.i] };
    return { typ: 'mc', kontext: 'da(r) + Präposition', frage: `**${e.v} ${e.p}** + Sache → Statt „${e.p} + das“ sagt man: ___`, opts: [da(e.p), ...fr.map(da)], l: 0,
      x: `Statt „${e.p} + Sache“ sagt man oft **${da(e.p)}** – z. B. vor einem dass-Satz oder Infinitiv mit zu.`, verben: [e.i] };
  },
  fehler(es) {
    const zeilen = es.map(e => {
      const tok = teile(e.s); const richtig = Math.random() < .5 || !tok;
      if (richtig) return [satzVoll(e.s), 0, e];
      const [, art] = zerlege(tok); const p = falschePraep(e, 1)[0];
      return [e.s.replace(/\{[^}]+\}/, '**' + gross(form(p, art), tok) + '**').replace(/\[([^\]]+)\]/, '$1'), 1, e];
    });
    return { typ: 'matrix', kontext: 'Fehler finden', frage: 'Ist die Präposition richtig?', wahl: ['richtig', 'falsch'], aussagen: zeilen.map(z => [z[0], z[1]]), verben: es.map(e => e.i),
      x: es.map(e => ERKL(e)).join(' · ') };
  },
  zuordnen(es) {
    return { typ: 'zu', kontext: 'Zuordnen', frage: 'Welche Präposition und welcher Kasus gehören zum Verb?', paare: es.map(e => [e.v, `${e.p} + ${KASUS[e.k]}`]), verben: es.map(e => e.i), x: '' };
  },
  sortieren(es) {
    return { typ: 'matrix', kontext: 'Akkusativ oder Dativ?', frage: 'Mit welchem Kasus steht die Präposition hier?', wahl: ['+ Akk.', '+ Dat.'], aussagen: es.map(e => [`${e.v} **${e.p}**`, e.k === 'A' ? 0 : 1]), verben: es.map(e => e.i), x: '' };
  }
};

/* ---------------- Zufallsauswahl nach Häufigkeit ---------------- */
const GEWICHT = { 1: 6, 2: 3, 3: 1 };
export function ziehe(pool, n, fehler = {}, ausser = new Set(), bedingung = () => true) {
  const kand = pool.filter(e => !ausser.has(e.i) && bedingung(e)).map(e => ({ e, w: GEWICHT[e.h] * (1 + 2 * Math.min(3, fehler[e.i] || 0)) }));
  const out = [];
  while (out.length < n && kand.length) {
    let s = kand.reduce((a, b) => a + b.w, 0), x = Math.random() * s, k = 0;
    while ((x -= kand[k].w) > 0) k++;
    out.push(kand[k].e); kand.splice(k, 1);
  }
  return out;
}
// Für Zuordnen: verschiedene Verben und verschiedene Präposition+Kasus-Paare
function zieheVerschieden(pool, n, fehler, ausser) {
  const out = [], sp = new Set(), sv = new Set();
  for (const e of ziehe(pool, pool.length, fehler, ausser)) {
    const a = e.p + e.k, b = schluessel(e.v);
    if (sp.has(a) || sv.has(b)) continue; sp.add(a); sv.add(b); out.push(e); if (out.length === n) break;
  }
  return out;
}

/** Eine zufällige Aufgabe erzeugen. typen = erlaubte Typen */
export const MISCHUNG = ['praep', 'praep', 'praep', 'satzP', 'satzP', 'satzP', 'kasus', 'kasus', 'satzA', 'satzA', 'wo', 'wo', 'fehler', 'zuordnen', 'sortieren'];
export function neueAufgabe(pool, { fehler = {}, ausser = new Set(), typen = MISCHUNG } = {}) {
  for (let v = 0; v < 30; v++) {
    const t = typen[r(typen.length)];
    let a = null;
    if (t === 'fehler') { const es = ziehe(pool, 4, fehler, ausser, e => e.s.includes('{')); if (es.length === 4) a = TYPEN.fehler(es); }
    else if (t === 'zuordnen') { const es = zieheVerschieden(pool, 5, fehler, ausser); if (es.length === 5) a = TYPEN.zuordnen(es); }
    else if (t === 'sortieren') { const es = ziehe(pool, 6, fehler, ausser, e => e.k !== 'N'); if (es.length >= 4) a = TYPEN.sortieren(es); }
    else { const [e] = ziehe(pool, 1, fehler, ausser); if (e) a = TYPEN[t](e); }
    if (a) { a.id = 'vp-' + t; a.art = t; return a; }
  }
  return null;
}

/** Fragen für die Live-Runde (Format: q, opts, l, e, k) */
export function liveFragen(n = 40) {
  const out = [], benutzt = new Set();
  const typen = ['praep', 'praep', 'satzP', 'satzP', 'kasus', 'satzA', 'wo'];
  while (out.length < n) {
    const a = neueAufgabe(VERBEN, { ausser: benutzt, typen }); if (!a) break;
    a.verben.forEach(i => benutzt.add(i));
    const ohne = s => String(s).replace(/\*\*/g, '');
    out.push({ q: ohne(a.frage).replace(/\s+/g, ' '), opts: a.opts, l: a.l, e: ohne(a.x).replace(/<[^>]+>/g, ''), k: a.kontext });
  }
  return out;
}
