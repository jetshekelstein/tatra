// Trip: Aggteleki-karszt — Aggtelek · Jósvafő · Szögliget, útközben a Bükkön át.
//
// Forrás az "Aggteleki-karszt … moduláris családi kalauz" brief (adatok
// ellenőrizve 2026. 09. 03.). A tényadatok — indulási idők, árak, nyitvatartás,
// figyelmeztetések — kötöttek; a szöveg a kötetek hangnemére van írva.
//
// EZ A KÖTET EGY KONKRÉT HÉTVÉGÉRE KÉSZÜLT (2026. szept. 4–6.), és két olyan
// dolgot tartalmaz, ami csak most igaz. Jövő évi újrahasználat előtt ezt a
// kettőt kell először átírni:
//   * szept. 1-től TÉLI MENETREND — a barlangpénztárak 8:00–16:00;
//   * szept. 5-én BARLANGI FUTÓVERSENY — a jósvafői rövidtúra nem indul, a
//     Vörös-tói középtúra kivételesen 12:00 és 14:00 (az aggteleki rövidtúrát
//     nem érinti), és a 15:00-s aggteleki túrán kórusműsor van a
//     Hangversenyteremben.
//
// A G modul (Galyaság: Trizs, Kelemér, Szuhafő) nem a briefből jött, hanem
// külön kérésre került bele, és 2026. 09. 05-én ellenőrzött nyilvános forrásokra
// épül. Ahol nem találtunk hivatalos nyitvatartást vagy árat, ott ez ki is van
// írva — nem tippelünk helyette.
//
// A koordináták hozzávetőlegesek (±200–400 m): a Közelben-lista és a
// közeledés-jelzés számol belőlük, navigálni a Maps-linkekkel kell.
(function () {

const data = {
modules: [

{id:'P', letter:'P', title:'Péntek és a bázis', full:'Péntek este — érkezés, alvás-döntés, és ahol enni lehet', kicker:'Tiszta menetnap · érkezés ~19:00', sub:'Ostorosról munka után, a Bükkön át, program nélkül — a nap egyetlen feladata, hogy világosban álljon a tábor', transit:'Ostoros → Szilvásvárad → Nagyvisnyó → Dédestapolcsány → Putnok → Aggtelek ≈ 1 óra 45 perc tiszta menetidő',
 pois:[
 {id:'p1', ll:[48.4700,20.5000], n:'Az odaút a Bükkön át', q:'Aggtelek', noRating:true, b:'fo', age:'MINDEN KOR', meta:'≈ 1 óra 45 perc · megállók nélkül',
  d:'Ostorosról munka után indulunk, és pénteken ez a nap egyetlen programja: Szilvásvárad – Nagyvisnyó – Dédestapolcsány – Putnok – Aggtelek, kb. 1 óra 45 perc tiszta menetidő. Szilvásvárad szándékosan kimarad — azt kívülről fújjuk, és most nem éri meg egy órát adni érte a sötétedésből. A Bükk-oldali megállók (Lázbérc, Bélapátfalva) átkerülnek a vasárnapi hazaútra: ott van rájuk idő, itt nincs.',
  w:'Érkezés ~19:00-ra. Napnyugta szeptember elején ~19:10 — vagyis szürkületben landolunk, és ezért nincs megálló: minden félóra, amit útközben elvesztünk, a tábor felverésének idejéből megy el. Tankolás és bevásárlás még Egerben vagy Putnokon; Aggteleken este már nincs bolt.'},
 {id:'p2', ll:[48.4680,20.5080], n:'NOMÁD Baradla Kemping — 30 lépés a pénztártól', q:'Baradla Kemping Aggtelek', b:'fo', age:'MINDEN KOR', meta:'Baradla oldal 1. · sátor / faház / rönkház',
  d:'Az A-terv, és nem véletlenül: a kemping közvetlenül a barlangbejáratnál van, tehát szombat reggel harminc lépésre vagyunk a pénztártól — ez a hétvége legjobb logisztikai húzása. Sátorhely, egyszerű faházak és fűtött, padlófűtéses rönkházak saját fürdővel; a területen játszótér és nagy füves rész, az épületben a Baradla Étterem.',
  w:'KÉSŐI ÉRKEZÉST ELŐRE TELEFONON JELEZNI — a recepció este nem biztos, hogy él. Péntek estére ne az étterem nyitvatartására építsetek, hanem saját hideg vacsorára. ⚠️ Vasárnap hajnalra ~9 °C várható: sátorhoz téli hálózsák a kicsiknek, különben a rönkház a B-terv. Friss árlista: szallas-aggtelek.hu/arlista — a nyilvános lista nem teljes, telefonos megerősítés ajánlott.'},
 {id:'p3', ll:[48.4720,20.5050], n:'Baradla-tető — naplemente Aggtelek fölött', q:'Baradla-tető Aggtelek', b:'opc', age:'MINDEN KOR · hordozóval', meta:'rövid felsétálás · ingyen',
  d:'Rövid felsétálás a falu fölé. A park időnként vezetett naplemente-túrát is hirdet, de magunkban is szép zárás — és a barlang után ez az a fél óra, ami a napot lezárja, mielőtt mindenki elalszik.',
  w:'Ingyen, bármikor. Fejlámpa lefelé. Szeptember elején a nap ~19:05–19:10 körül megy le: a 15:00-s aggteleki túra után pont belefér.'}],
 sleep:[
 {n:'★ NOMÁD Baradla Kemping és Turistaszálló, Aggtelek', ll:[48.4680,20.5080], q:'Baradla Kemping Aggtelek', tel:'+36 48 503 005',
  d:'Baradla oldal 1., közvetlenül a barlangbejárat mellett. Sátorhelyek, egyszerű faházak, 6–7 fős téliesített, padlófűtéses rönkházak saját fürdővel és konyhával; a turistaszállóban 2–4 ágyas szobák, közös konyha. Játszótér és nagy füves tér a területen, a Baradla Étterem az épületben. Vasárnap hajnalra 9 °C — ezen a hétvégén a rönkház vagy a faház a családi jolly joker, nem a sátor. Friss árlista: szallas-aggtelek.hu/arlista (a nyilvános lista nem teljes — telefonos megerősítés ajánlott), és a késői érkezést előre jelezni kell.'}],
 eat:[
 {n:'Baradla Étterem — a bejáratnál', ll:[48.4682,20.5078], q:'Baradla Étterem Aggtelek',
  d:'A turistaszálló épületében, a barlangbejáratnál: túra után kézenfekvő, mert nulla méter. Péntek estére viszont NE erre építsetek — késői érkezésnél nem garantált, hogy nyitva van; akkor a hideg vacsora a terv.'},
 {n:'Fehér Ház Büfé, Aggtelek', ll:[48.4700,20.5010], q:'Fehér Ház Büfé Aggtelek',
  d:'Gyors, gyerekálló, a faluban. A „nem akarunk leülni egy órára" megoldás a barlang és a következő program közé. Készpénz legyen.'},
 {n:'Gyroskert Falatozó, Aggtelek', ll:[48.4695,20.5020], q:'Gyroskert Aggtelek',
  d:'A másik gyors megoldás Aggteleken. Ugyanaz a szerep: enni kell, de nem most akarunk vacsorázni. Készpénz legyen.'}]},

{id:'A', letter:'A', title:'Baradla', full:'Baradla-barlang — a hétvége gerince', kicker:'A tesztelt mag · ✔ kipipálva', sub:'A világ leghosszabb kiépített barlangi túraútvonala, három bejárattal és három hosszúsággal', transit:'Aggtelek ↔ Vörös-tó 4 km · Aggtelek ↔ Jósvafő 7 km gyalog a tanösvényen vagy 10 perc autóval',
 pois:[
 {id:'a1', ll:[48.4780,20.5320], wk:'hu:Baradla-barlang', n:'Vörös-tói középtúra ✔', q:'Vörös-tói barlangbejárat Aggtelek', b:'fo', age:'MINDEN KOR · tavaly ment a gyerekekkel', meta:'2,3 km · ~100 perc · 598 lépcső',
  d:'A világ leghosszabb kiépített, villanyvilágításos barlangi túraútvonala: 2,3 km a Styx-patak medre mentén, útközben a 19 méteres Csillagvizsgálóval és az Óriások termével. A Vörös-tói bejáratnál indul (Aggtelektől 4 km), és Jósvafőn jön ki — a park autója ingyen visszavisz a Vörös-tói parkolóhoz, ez benne van a jegyárban. TESZTELT: tavaly a gyerekekkel végigmentünk rajta, tehát most is menni fog; az 598 lépcső inkább a hordozós szülőnek meló, mint a gyereknek.',
  w:'MIKOR: téli menetrendben 11:00 és 14:00, 1 főtől is indul — DE SZEPT. 5-ÉN, SZOMBATON a barlangi futóverseny miatt kivételesen 12:00 és 14:00. Pénztár a Vörös-tónál 8:00–16:00, (36) 48 350 048. MENNYIÉRT: felnőtt 4 700 Ft · kedvezményes (diák/nyugdíjas) 3 800 Ft · óvodás (3–6 év) és kísérő 1 500 Ft · 3 ÉV ALATT INGYEN. Elővétel és online jegy nincs, csak helyszíni. Bent +10 °C: pulóver vagy kabát mindenkire, zárt cipő.'},
 {id:'a2', ll:[48.4680,20.5070], wk:'hu:Baradla-barlang', n:'Aggteleki rövidtúra', q:'Baradla-barlang Aggtelek', b:'megeri', age:'MINDEN KOR · a 2 évesnek is bevállalható', meta:'1 km · 60 perc · 166 lépcső',
  d:'Egy kilométer, hatvan perc, könnyű terep: az ikonikus 50 méteres sziklafal alatti bejárattól indul, és a Hangversenyteremben ér véget. Ez az a szakasz, amit a kétévesnek is be lehet vállalni, és amit eső esetén bármikor elő lehet venni — a kempingből kilépve ott van.',
  w:'MIKOR: téli menetrendben 10:00, 13:00 és 15:00, 1 főtől is indul. Pénztár Aggteleken 8:00–16:00, (36) 48 503 003. ⭐ SZEPT. 5-ÉN A 15:00-S TÚRÁN 20–25 perces KÓRUSMŰSOR van a Hangversenyteremben (Jász-Nagykun-Szolnok Vármegyei Karnagyok Kamarakórusa és az Ádám Jenő Zeneiskola) — a jegy ára a sima túrajegy, a gyerekeknek viszont valószínűleg ez lesz a hétvége emléke. MENNYIÉRT: felnőtt 4 200 Ft · kedvezményes 3 400 Ft · óvodás/kísérő 1 500 Ft · 3 év alatt ingyen. ⚠️ Az aggteleki pénztárban CSAK a rövidtúrára kapni jegyet — a Vörös-tóira a Vörös-tónál kell venni.'},
 {id:'a5', ll:[48.4750,20.5200], wk:'hu:Aggteleki_Nemzeti_Park', n:'Baradla tanösvény: Aggtelek → Jósvafő ✔', q:'Baradla tanösvény Aggtelek', b:'fo', age:'MINDEN KOR · tavaly megcsináltuk', meta:'~7 km · sárga jelzés · vissza busszal',
  d:'Az ANP legrégebbi (1983) és legszebb tanösvénye: sárga jelzésen kb. 7 km a két barlangbejárat között, víznyelők mentén, a fedett és a nyílt karszt határán, végig gyerekbarát terepen. TESZTELT: tavaly végigmentünk rajta a gyerekekkel, és busszal jöttünk vissza. Ez a kötet másik biztos pontja a barlang mellett.',
  w:'TAKTIKA: reggel indulás Aggtelekről, piknik útközben (útközben nincs bolt), Jósvafőn fagyi, aztán busz vissza. VISSZAÚT: a jósvafői buszmegálló a barlangkijárat közelében van, a Budapest felé induló busz kb. 14:48-kor visz vissza Aggtelekre — a park is ezt ajánlja. ⚠️ A menetrendet indulás előtt ellenőrizni kell a menetrendek.hu-n, és a képernyőképe legyen meg offline is.'},
 {id:'a3', ll:[48.4890,20.5540], wk:'hu:Baradla-barlang', n:'Jósvafői rövidtúra', q:'Baradla-barlang jósvafői bejárat', b:'opc', age:'3+ · a kicsiknek hordozó', meta:'1,4 km oda-vissza · 60 perc · közepesen meredek',
  d:'A barlang sziklás, cseppkőszegényebb, de gyűrődésekben gazdag arca — a geológus-fél. Rövid, de közepesen meredek, tehát a kicsiknél ez inkább hordozós szakasz, mint sétálós.',
  w:'⚠️ SZEPT. 5-ÉN NEM INDUL — a barlangi futóverseny miatt. Aktuális árak és időpontok a jósvafői pénztárban.'},
 {id:'a6', ll:[48.4780,20.5330], n:'Vörös-tó és a Medve-sziklák', q:'Vörös-tó Aggtelek', b:'megeri', age:'MINDEN KOR · babakocsival', meta:'rövid karsztos séta · ingyen',
  d:'A Vörös-tói látogatóközpont körüli rövid séta: tavacska, sziklák, karszt kicsiben. Pont jó levezetés a középtúra előtt vagy után — és ha korábban érkeztek a 12:00-s indulásra, ez tölti ki a várakozást úgy, hogy közben nem az autóban ülünk.',
  w:'Ingyen, bármikor. A parkoló ugyanaz, mint a középtúráé.'},
 {id:'a7', ll:[48.4680,20.5090], n:'Kincskereső játékösvény, Aggtelek', q:'Kincskereső játékösvény Aggtelek', b:'megeri', age:'MINDEN KOR · babakocsival', meta:'1 km · a Baradla fogadóterében',
  d:'Egy kilométer a Baradla fogadóterében: 2016-ban az ország legjobb ökoturisztikai tanösvénye lett, és kincskereső felszerelés is vásárolható a helyszínen. A kempingből kilépve ott van — ez a „még húsz perc, mielőtt beülünk a kocsiba" program.',
  w:'Szezonális nyitvatartás — a pénztárban rákérdezni. A felszerelést a helyszínen lehet megvenni.'},
 {id:'a4', ll:[48.4680,20.5060], n:'Overállos kalandtúrák — jövőre, ha a nagyok nőnek', q:'Baradla-barlang Aggtelek', b:'opc', age:'Hosszútúra 10+ · Retek-ág 14+', meta:'6,7 km főág · 4–5 óra · bejelentkezés',
  d:'A Hosszútúra a főágon megy végig Aggtelektől Jósvafőig: 6,7 km, 4–5 óra, 10 éves kortól, előzetes bejelentkezéssel. A Retek-ági túra 14 évtől. Most egyik sem játszik — de érdemes tudni, hova nő ki ez a család, mert három-négy év múlva ez lesz a fő program.',
  w:'Előzetes bejelentkezés kötelező, online jegy az anp.hu-n. +1 barlang kedvezmény: a hosszútúra-jegy mellé 50% egy másik ANP-barlangra.'}],
 sleep:[],
 eat:[]},

{id:'J', letter:'J', title:'Jósvafő', full:'Jósvafő — lovak, tó, tanösvények', kicker:'Fél nap · a gyerekmotiváció beépítve', sub:'Kétszáz hucul ló a legelőn, smaragd tavacska a barlangkijáratnál, két óvodásra tervezett tanösvény', transit:'Aggtelekről 10 perc autóval · a Baradla tanösvényen 7 km gyalog · vissza a kb. 14:48-as busszal',
 pois:[
 {id:'j1', ll:[48.4940,20.5580], wk:'hu:Hucul', n:'Hucul ménes és a Kúria Lovasbázis', q:'Hucul ménes Jósvafő', b:'fo', age:'MINDEN KOR · a faluban babakocsival', meta:'~200 lovas rideg ménes · lovagoltatás, fogatozás',
  d:'Hazánk egyetlen állami hucul ménese, nagyjából kétszáz lóval; a rideg ménes a Gergés-lápai legelőn, Jósvafőtől ~1,5 km-re, egész évben megnézhető. A Kúria Lovasbázison (Táncsics M. u. 1.) helyszíni bejelentkezéssel megy a gyermeklovagoltatás vezetékszáron, a jósvafői sétakocsikázás (~30 perc) és a terepkocsikázás; a „Fogattal a ménHez" program előzetes bejelentkezéssel megy — ott a ménes garantáltan látszik, nem csak reménykedünk benne.',
  w:'MENNYIÉRT: fogatozás kb. 3 000 Ft/fő, gyerekkedvezmény 3–14 év (2026-os csoportár alapján). ⚠️ A HÉTVÉGI ELÉRHETŐSÉGRE ELŐRE RÁ KELL TELEFONÁLNI az ANP turisztikára: +36 48 503 001 — az iroda hétköznap él, tehát ezt még pénteken, indulás előtt kell elintézni. A ménesnél kutya csak pórázon, távolról.'},
 {id:'j2', ll:[48.4900,20.5530], wk:'hu:Jósvafő', n:'Tengerszem-tó és a Jósva-forrás', q:'Tengerszem-tó Jósvafő', b:'megeri', age:'MINDEN KOR · babakocsival', meta:'körséta · ingyen · a barlangkijáratnál',
  d:'1942-ben duzzasztott, smaragdzöld tavacska közvetlenül a Baradla jósvafői kijárata mellett, körsétával és a Jósva-forrással. Ez a barlang utáni levezetés: a Fürkész-ösvénnyel és egy fagyival együtt kiad egy egész fél délutánt, és nem kerül semmibe.',
  w:'Ingyen, mindig nyitva. A középtúra itt jön ki: amíg a park autója indul vissza a Vörös-tóhoz, pont körbe lehet járni.'},
 {id:'j3', ll:[48.4890,20.5510], n:'Fürkész-ösvény', q:'Fürkész-ösvény Jósvafő', b:'megeri', age:'MINDEN KOR · óvodásra tervezve', meta:'2–3 km · 1,5–2 óra · ingyen',
  d:'A Baradla jósvafői kijáratától indul, és minden állomásán a fürkészdarázs-figura ad játékos, a természetben talált dolgokhoz kötött feladatot — kifejezetten óvodás és kisiskolás célcsoportra tervezve. Ez az a tanösvény, ahol nem nekünk kell kitalálni, mivel motiváljuk a hatévest: meg van írva a táblán.',
  w:'Ingyenes, bármikor, kényelmes tempóban 1,5–2 óra. Az útvonal a Tengerszem Szálló alatti parkolóból indul, és a szálló fölötti hegytetőn ér véget. (Hossz: az ANP 2 km-t ír, a helyi táblák 3-at — a lábaknak a másfél-két óra a mérvadó.)'},
 {id:'j4', ll:[48.4890,20.5490], n:'Tohonya–Kuriszlán tanösvény, I. útvonal', q:'Tohonya-Kuriszlán tanösvény Jósvafő', b:'megeri', age:'MINDEN KOR · a keret felső határa', meta:'4,5 km · 12 állomás · sárga jelzés',
  d:'4,5 km, 12 állomás, sárga jelzés a Kúria Oktatóközponttól: Tohonya-szurdok, mésztufagát, lovászösvény — és útba ejti a hucul ménes legelőjét, tehát a gyerekmotiváció bele van építve az útvonalba. A teljes II. kör 9 km, 250 m szint, ~6 óra: az most sok.',
  w:'Ingyen, bármikor. Az I. útvonal pont a keret felső határa (4,5 km) — piknikkel és a lovakkal együtt kiad egy fél napot.'},
 {id:'j5', ll:[48.4880,20.5480], n:'Kessler Hubert Emlékház', q:'Kessler Hubert Emlékház Jósvafő', b:'opc', age:'6+ · SZÜLŐPROGRAM', meta:'kis kiállítás · esőnapra',
  d:'A Baradla-kutatás hőskora egy kis kiállításban. Nem egész napos program, de esőben pont jó — és a hatévesnek, aki a barlangban azt kérdezi, hogy „ezt ki találta meg", ez a válasz.',
  w:'Szezonális nyitvatartás — a jósvafői pénztárnál vagy az ANP-nél rákérdezni.'}],
 sleep:[
 {n:'Tengerszem Hotel és Étterem, Jósvafő', ll:[48.4900,20.5525], q:'Tengerszem Hotel Jósvafő',
  d:'A barlang jósvafői kijáratánál, közvetlenül a tó mellett. Ha „hotelesebb" hétvégét akartok — falak, fűtés, reggeli, és nulla méter a Fürkész-ösvényig —, ez az. tengerszemhotel.com. Egyben ez a B-terv, ha a vasárnap hajnali 9 fok a kempingben nem jött be.'}],
 eat:[
 {n:'Tengerszem Hotel étterme, Jósvafő', ll:[48.4900,20.5525], q:'Tengerszem Hotel Jósvafő',
  d:'A tanösvény és a lovak után a legkézenfekvőbb meleg ebéd — ugyanott, ahol a barlang kijön és a Fürkész-ösvény indul.'},
 {n:'Fagyi és büfé a Tengerszemnél', ll:[48.4900,20.5530], q:'Tengerszem-tó Jósvafő',
  d:'A gyaloglás hivatalos jutalma. A tesztelt forgatókönyv vége: Aggtelekről gyalog ide, fagyi, aztán a 14:48-as busz.'}]},

{id:'SZ', letter:'SZ', title:'Szögliget', full:'Szögliget és a Bódva-völgy — a vasárnapi irány', kicker:'Vasárnap · hazaútba is jól esik', sub:'Az ország egyik legnagyobb várromja, a világ legnagyobb könyve és egy papírmalom', transit:'Aggtelek → Szinpetri ≈ 10 perc → Szögliget további ≈ 15 perc · Bódvarákó további 20 perc',
 pois:[
 {id:'s1', ll:[48.5390,20.6540], wk:'hu:Szádvár', n:'Szádvár és a Szádvár tanösvény', q:'Szádvár Szögliget', b:'fo', age:'6+ · a kicsiknek hordozó', meta:'4,5 km kör · ~250 m szint · ~3 óra',
  d:'4,5 km-es kör a Szalamandra-háztól, 12 állomással: a tetőn Magyarország egyik legnagyobb várának romja, a híres „csigás" felvonóhellyel és nagy karszti panorámával. Határeset a keretben — a hatévesnek oké, a kicsiknek hordozó —, és a 250 méter szint a hordozós szülőnek is sportos.',
  w:'Ingyenes, szabadon látogatható, mindig nyitva. Napos időre való: a rom fedetlen, tehát sapka és víz mindenkinek. A kör kb. 3 óra; ha fogy az erő, a tanösvény alsó állomásai önmagukban is egy séta, és vissza lehet fordulni.'},
 {id:'s2', ll:[48.4930,20.5980], wk:'hu:Örökségünk_–_a_Gömör–Tornai-karszt_természeti_és_kultúrtörténeti_értékei', n:'Szinpetri — a világ legnagyobb könyve és a papírmalom', q:'Világ legnagyobb könyve Szinpetri', b:'megeri', age:'MINDEN KOR', meta:'CSAK VEZETÉSSEL · 10/12/14/16 · hétfő zárva', mon:true, cash:true,
  d:'Guinness-rekorder könyv — 4,18 × 3,77 m, 1 420 kg — a rekonstruált vízimalomban, mellette Gutenberg-korabeli nyomdagépek és merített papír készítése, amit a gyerekek maguk csinálhatnak. Aggtelek és Szögliget között félúton: tökéletes köztes megálló, akár a Szádvár előtt, akár utána.',
  w:'MIKOR: ápr. 1.–szept. 30. között kedd–vasárnap 10:00–17:00, HÉTFŐ ZÁRVA; KIZÁRÓLAG VEZETÉSSEL, indulás 10:00 / 12:00 / 14:00 / 16:00 — vagyis a napot kell az időponthoz igazítani, nem fordítva. MENNYIÉRT: belépődíjas, CSAK KÉSZPÉNZ; 3 év alatt ingyen.'},
 {id:'s3', ll:[48.5370,20.7520], wk:'hu:Rákóczi_1._sz._barlang', n:'Rákóczi-barlang, Esztramos (Bódvarákó)', q:'Rákóczi-barlang Bódvarákó', b:'opc', age:'6+ · meredekebb terep', meta:'előzetes bejelentkezés · online jegy',
  d:'A karszt „ékszerdoboza": kiépített barlang földalatti tavakkal, az Esztramos-hegy gyomrában. Meredekebb, mint a Baradla-szakaszok, és előzetes bejelentkezés kell hozzá — ezért inkább a következő alkalomra való, mint egy amúgy is sűrű vasárnapra.',
  w:'Előzetes bejelentkezés, online jegy az anp.hu-n. +1 barlang kedvezmény: hosszútúra-jegy mellé 50%. Bent hideg van, mint mindenhol a karszt alatt — pulóver.'}],
 sleep:[
 {n:'Szalamandra-ház, Szögliget', ll:[48.5260,20.6670], q:'Szalamandra-ház Szögliget',
  d:'Az ANP erdei iskolája és turistaszállása, pontosan ott, ahol a Szádvár tanösvény indul. Csoportos jellegű hely, előzetes egyeztetés az ANP-vel — nem az a szállás, amit péntek este 7-kor hív fel az ember. Viszont ha jövőre két éjszakát a Szádvár alatt akartok tölteni, ez a cím.'}],
 eat:[
 {n:'Piknik — mert útközben nincs bolt', q:'Szögliget', noRating:true,
  d:'Szögligeten és a tanösvényen ne számítsatok büfére. A vasárnapi ebédet Aggteleken vagy Jósvafőn kell megvenni indulás előtt — Szinpetri viszont útba esik, és ott készpénz kell mindenre.'}]},

{id:'G', letter:'G', title:'Galyaság', full:'Galyaság — Trizs, Kelemér, Szuhafő: a mesés irány', kicker:'A csendes oldal · pénzbe alig kerül', sub:'Meseerdő lombházzal és mezítlábas ösvénnyel, lápi tavak, két fatorony a semmi közepén', transit:'Aggtelek → Trizs ≈ 15 perc · onnan Ragály, Zádorfalva, Szuhafő 10–20 perc · Kelemér ≈ 35 perc Aggtelektől',
 pois:[
 {id:'g1', ll:[48.4360,20.5080], n:'Trizsi Meseerdő', q:'Trizs Meseerdő', b:'fo', age:'MINDEN KOR · a kicsiknek is', meta:'legalább fél nap · erdei játszóhely · ingyenes',
  d:'Ez az a hely, ami pont erre a korosztályra van kitalálva: a falu önkormányzati tulajdonú erdejében függőágyak, lombház, gombamászóka és kis faházak bújnak meg a fák között, végig pedig egy MEZÍTLÁBAS ÖSVÉNY fut — kavics, fa, toboz, homok, mindegyik más a talpnak. Nem tanösvény tíz tábláról, hanem játszóerdő: a hatéves saját maga találja ki a történetet, a kettő- és a hároméves pedig a talpával fedezi fel. A forrásaink „legalább fél napos programként" írják le, és ez nem túlzás.',
  w:'INGYENES, szabadon látogatható, bármikor. A falu központjából, a Hagyományok Házától indul a kb. 3 km-es út az erdőig — vagyis a Meseerdő NEM közvetlenül a főutcán van; érdemes a háznál kezdeni és onnan tájékozódni. ⚠️ Hivatalos nyitvatartást és belépőt egyik nyilvános forrás sem közöl (a fejlesztés ~40 millió forintból, uniós támogatásból készült, az önkormányzat üzemelteti) — ha a Hagyományok Házába is be akartok menni, előtte hívjátok fel a trizsi önkormányzatot. Váltás zokni és törölköző a mezítlábas ösvényhez.'},
 {id:'g2', ll:[48.4362,20.5085], n:'Hagyományok Háza, Trizs — az interaktív tájház', q:'Hagyományok Háza Trizs', b:'megeri', age:'MINDEN KOR · esőnapra is', meta:'a falu legrégebbi épülete · kézműves programok',
  d:'A falu legrégebbi épületében interaktív tájház és közösségi tér: felajánlásokból összeállt régi bútorok és használati tárgyak, működő tűzhely gasztronómiai bemutatókhoz, az udvari csűrben pedig helyi termékek — lekvár, szörp — kóstolóval. Kézműves programok is futnak: szövés, fonás, fafaragás, kosárfonás, hímzés, mézeskalács. Ez a Meseerdő párja: a gyerekek a fák közt, a felnőttek a csűrben.',
  w:'⚠️ Nyitvatartás és ár nyilvánosan nem hozzáférhető, a programok jellemzően előre egyeztetve mennek — az önkormányzattal kell egyeztetni. Ha spontán mentek, a Meseerdő akkor is szabadon látogatható; a ház a bónusz.'},
 {id:'g3', ll:[48.3670,20.4340], wk:'hu:Keleméri_Mohos-tavak_Természetvédelmi_Terület', n:'Keleméri Mohos-tavak és a Mohos-ház', q:'Keleméri Mohos-tavak', b:'megeri', age:'6+ · vezetéssel', meta:'jégkorszaki lápok · CSAK VEZETETT TÚRÁVAL',
  d:'Két jégkorszaki maradványláp — Kis-Mohos és Nagy-Mohos — egy dombhát tetején, tőzegmohával, hűvös mikroklímával, ami több ezer éve őrzi a virágporszemeket. Mellette a Mohosvár földvárának sáncai és a Kisasszony-fa, a falu öreg tölgye; a faluban pedig a Mohos-ház, az ANP felújított parasztháza a lápokról szóló kiállítással. Ez a hely a hatévesnek szól: itt tényleg mesés a helyszín, csak nem lehet rálépni.',
  w:'⚠️ A tavak FOKOZOTTAN VÉDETTEK: belépni tilos, kizárólag szervezett, VEZETETT TÚRÁVAL látogatható, előzetes bejelentkezéssel — a túrán a Mohos-földvár és a református templom népi faragásai is belefér. Bejelentkezés az ANP-nél. A környéken a Magas-bérc tanösvény szabadon járható, és a távot magatokhoz igazíthatjátok.'},
 {id:'g4', ll:[48.4050,20.4440], n:'Szuhafő két kilátója — Centu-tető és Újhegy', q:'Centu-tetői kilátó Szuhafő', b:'megeri', age:'MINDEN KOR · a torony 6+', meta:'18 m fatorony · 360° · ingyen',
  d:'Egy zsákfalu két kilátótoronnyal: a Centu-tetői és az Újhegyi kilátó ikerpár, 2015-ben épültek, 18 méter magas faszerkezetek két panorámaszinttel. Körben a Szuha völgye, a falu tarka házai, távolabb a Bükk vonulata — tiszta időben állítólag a Magas-Tátra sziklás csúcsai is kivehetők. Ez az a program, ami fotón nagy túrának néz ki, közben pedig a kocsitól nincs messze.',
  w:'Ingyen, bármikor. Szuhafő zsákfalu: csak Zádorfalva felől van bejárat, Aggtelektől ≈ 30 perc. A toronyban lépcső van korláttal — a kétévest inkább hordozóban vigyétek fel, vagy maradjatok lent.'}],
 sleep:[],
 eat:[]},

{id:'H', letter:'↩', title:'Hazaút', full:'Hazaút a Bükkön át — amit odafelé kihagytunk', kicker:'Vasárnap · lábnyújtóztatók', sub:'Lázbérc, Dédesi vár, Bélapátfalva — a péntek esti sietség jóvátétele', transit:'Aggtelek → Putnok → Dédestapolcsány ≈ 1 óra · onnan Ostoros ≈ 45 perc',
 pois:[
 {id:'h1', ll:[48.2210,20.4690], wk:'hu:Lázbérci-víztározó', n:'Lázbérci-víztározó', q:'Lázbérci víztározó Dédestapolcsány', b:'megeri', age:'MINDEN KOR · babakocsival', meta:'850 m sík séta a tóig · ingyen · egész évben',
  d:'A Bán-völgy Y alakú, sziklák közé zárt ivóvíztava az Upponyi-hegység lábánál, pontosan útba esik hazafelé. Dédestapolcsányból a Tó utcáról a kék jelzésen 850 méter sík séta a tóig — tökéletes hazaúti lábnyújtóztató, nulla forintért, olyankor, amikor már mindenki elege van az autóból.',
  w:'Ingyen, egész évben. ⚠️ A tó IVÓVÍZBÁZIS és fokozottan védett: fürdeni TILOS, az ösvényről letérni TILOS. A gáttól indul a Szalamandra tanösvény (sárga-fekete jelzés) az Upponyi-szoros pereme felé, ha marad energia.'},
 {id:'h2', ll:[48.2160,20.4600], wk:'hu:Dédesi_vár', n:'Dédesi vár', q:'Dédesi vár Dédestapolcsány', b:'opc', age:'6+ · rövid mászás', meta:'13. századi rom · ingyen',
  d:'A 13. századi vár romja Dédestapolcsány fölött: rövid, de valódi mászás a nagyobbaknak, és a tóparti séta után ez a „még egy kis kaland" opció. Ha a Lázbérc után is van erő, ez a hétvége utolsó felvonása.',
  w:'Ingyen, bármikor. A kicsikkel a tóparti séta bőven elég — ez a hatévesé, és neki pont jó.'},
 {id:'h3', ll:[47.9970,20.3790], wk:'hu:Bélapátfalvai_ciszterci_kolostor', n:'Bélapátfalva — apátsági templom és a Bél-kő', q:'Bélapátfalvi apátsági templom', b:'opc', age:'templom MINDEN KOR · Bél-kő 6+', meta:'a Bükk nyugati kapuja · útba esik',
  d:'Az 1232-ben elkezdett ciszterci apátsági templom az ország egyetlen épen maradt román kori cisztercita temploma, a falu fölött pedig a Bél-kő gerince — az utóbbi határeset a keretben: a hatévesnek oké, a kicsiknek hordozó. Odafelé pénteken kihagytuk, hazafelé viszont pont belefér, ha a Lázbérc már megvolt vagy kimaradt.',
  w:'A templom nyitvatartása szezonális — érkezés előtt ellenőrizni. A Bél-kőre a faluból indul a jelzés; sapka és víz, mert a gerinc fedetlen. Innen Ostoros már csak fél óra.'}],
 sleep:[],
 eat:[]}],

// A túralista: ugyanazok a helyek, de a lábak nyelvén — távval, idővel,
// szinttel, hogy az 5 km / 200 m-es keret indulás előtt ellenőrizhető legyen.
hikes:[
{id:'t1', ll:[48.4750,20.5200], n:'1 · Baradla tanösvény: Aggtelek → Jósvafő ✔', go:'az aggteleki barlangbejárattól sárga jelzésen, a víznyelők mentén', time:'2,5–3,5 óra · ~7 km, egy irányba', elev:'alig érzékelhető, végig gyerekbarát', diff:'konnyu', kid:'MINDEN KOR · tavaly ment a gyerekekkel', q:'Baradla tanösvény Aggtelek'},
{id:'t2', ll:[48.4780,20.5320], n:'2 · Vörös-tói középtúra ✔ (a föld alatt)', go:'a Vörös-tói bejárattól, kijárat Jósvafőn — a park autója visszavisz', time:'~100 perc · 2,3 km', elev:'598 lépcső, lefelé és felfelé is', diff:'konnyu', kid:'MINDEN KOR · tavaly ment', q:'Vörös-tói barlangbejárat Aggtelek'},
{id:'t3', ll:[48.5390,20.6540], n:'3 · Szádvár tanösvény, Szögliget', go:'a Szalamandra-háztól, 12 állomásos kör a várromhoz', time:'~3 óra · 4,5 km kör', elev:'+250 m', diff:'kozepes', kid:'6+ · a kicsiknek hordozó', q:'Szádvár Szögliget'},
{id:'t4', ll:[48.4890,20.5490], n:'4 · Tohonya–Kuriszlán I. útvonal', go:'a Kúria Oktatóközponttól sárga jelzésen, a hucul legelő mellett', time:'fél nap · 4,5 km', elev:'mérsékelt, szurdokkal', diff:'konnyu', kid:'MINDEN KOR · a keret felső határa', q:'Tohonya-Kuriszlán tanösvény Jósvafő'},
{id:'t5', ll:[48.4890,20.5510], n:'5 · Fürkész-ösvény, Jósvafő', go:'a Tengerszem Szálló alatti parkolóból, feladatos állomásokkal', time:'1,5–2 óra · 2–3 km', elev:'a szálló fölötti hegytetőig', diff:'konnyu', kid:'MINDEN KOR · óvodásra tervezve', q:'Fürkész-ösvény Jósvafő'},
{id:'t6', ll:[48.4360,20.5080], n:'6 · Trizsi Meseerdő és a mezítlábas ösvény', go:'a trizsi Hagyományok Házától az önkormányzati erdőbe, ~3 km', time:'fél nap, szabadon', elev:'dombos, de rövid szakaszokban', diff:'konnyu', kid:'MINDEN KOR · a mezítlábas rész a kicsiké', q:'Trizs Meseerdő'},
{id:'t7', ll:[48.4680,20.5090], n:'7 · Kincskereső játékösvény, Aggtelek', go:'a Baradla fogadóterében, a kempingből kilépve', time:'45–60 perc · 1 km', elev:'sík', diff:'konnyu', kid:'MINDEN KOR · babakocsival', q:'Kincskereső játékösvény Aggtelek'},
{id:'t8', ll:[48.4780,20.5330], n:'8 · Vörös-tó és a Medve-sziklák', go:'a Vörös-tói parkolóból, a látogatóközpont körül', time:'30–45 perc', elev:'sík', diff:'konnyu', kid:'MINDEN KOR · babakocsival', q:'Vörös-tó Aggtelek'},
{id:'t9', ll:[48.4050,20.4440], n:'9 · Szuhafő: Centu-tető és Újhegy', go:'a faluból a két 18 méteres fatoronyhoz, Zádorfalva felől érkezve', time:'1–2 óra, ahogy kombináljátok', elev:'dombtetők, rövid emelkedők', diff:'konnyu', kid:'MINDEN KOR · a toronyban kézfogás', q:'Centu-tetői kilátó Szuhafő'},
{id:'t10', ll:[48.2210,20.4690], n:'10 · Lázbérci-tó — a hazaúti 850 méter', go:'Dédestapolcsány, Tó utca, kék jelzés a tóig', time:'30–40 perc oda-vissza', elev:'sík', diff:'konnyu', kid:'MINDEN KOR · babakocsival', q:'Lázbérci víztározó Dédestapolcsány'},
{id:'t11', ll:[47.9990,20.3620], n:'11 · Bél-kő, Bélapátfalva', go:'a faluból jelzésen fel a gerincre', time:'3–4 óra oda-vissza', elev:'+300 m fölött, fedetlen gerinc', diff:'kozepes', kid:'6+ · a kicsiknek hordozó, és sok víz', q:'Bél-kő Bélapátfalva'}],

// A fél napok és a döntések, amik nem egy helyszínhez tartoznak.
plans:[
{id:'pl1', ll:[48.4680,20.5080], n:'Vadkemping? — az őszinte válasz', b:'fo', age:'FELNŐTT DÖNTÉS', meta:'a park4night-pontokról, kertelés nélkül', q:'Baradla Kemping Aggtelek',
 steps:['A nemzeti park területén SÁTOROZNI TILOS — az ANP feketén-fehéren kiírja','Fokozottan védett részen még a jelzett útról letérni sem szabad','Autóban vagy lakóautóban alvás falusi parkolóban, útpadkán, NP-határon kívül (Aggtelek, Jósvafő, Trizs, Szögliget belterülete): jogilag más kategória, és általában tolerált — de nem „nature", hanem falu széle, mosdó nélkül','NP-n kívüli magánterület (kaszáló, gyümölcsös a Galyaságban) csak a tulajdonos engedélyével — este 7 után, spontán, aligha intézhető','A kompromisszum, ami tényleg működik: sátor a Baradla kemping füves részén — csillagos ég, erdőszél-hangulat, mégis legális, van mosdó, és reggel ott a barlang'],
 d:'A park4night „surrounded by nature" pontjainak jó része Aggtelek–Jósvafő–Szögliget körül épp nemzetiparki területre vagy annak peremére esik. Bírság plusz éjszakai természetőr-ébresztő három alvó gyerekkel — nem ez a kaland, amit keresünk. A „vad" élményt tegyük át tavaszra, egy célzott, előre kinézett, NP-határon kívüli helyre.',
 w:'⚠️ Vasárnap hajnalra ~9 °C: sátorhoz téli hálózsák a kicsiknek, vagy legyen a rönkház a B-terv. A kempingben van mosdó, és reggel harminc lépés a pénztár — ez a különbség, amiért megéri.'},
{id:'pl2', ll:[48.4780,20.5320], n:'A tesztelt mag — amit tavaly már megcsináltunk', b:'fo', age:'MINDEN KOR', meta:'ismételhető · nem kell újra kitalálni', q:'Vörös-tói barlangbejárat Aggtelek',
 steps:['Vörös-tói középtúra a gyerekekkel — ment, ismételhető','Aggtelek → Jósvafő gyalog a Baradla tanösvényen','Vissza Jósvafőről busszal (kb. 14:48)','Erre épül rá idén az új: Jósvafő lovai, Szögliget és a Szádvár, Szinpetri','Plusz a Galyaság, ha a barlang után is marad nap','És az odaúti Bükk-megállók, most hazafelé'],
 d:'Ez a kötet nem nulláról indul. Tavaly a Vörös-tói középtúrát megcsináltuk a gyerekekkel, és végiggyalogoltuk az Aggtelek–Jósvafő tanösvényt, busszal vissza. Mindkettő működik, tehát mindkettő beírható a naptárba anélkül, hogy kockáztatnánk — az idei hétvége erre a két biztos pontra pakolja rá az újat.',
 w:'A buszmenetrendet indulás előtt ellenőrizni kell (menetrendek.hu), és a képernyőkép legyen meg offline is. Piknik kell a tanösvényre: útközben nincs bolt.'},
{id:'pl3', ll:[48.4680,20.5070], n:'Szombat, ha esik', b:'megeri', age:'MINDEN KOR', meta:'négy program, mind fedett vagy föld alatti', q:'Baradla-barlang Aggtelek',
 steps:['10:00 vagy 13:00 aggteleki rövidtúra — bent +10 °C, de száraz','Még inkább a 15:00-s: azon KÓRUSMŰSOR van a Hangversenyteremben','Szinpetri vezetés 12:00 vagy 14:00 — merített papír, a gyerekek csinálhatják (készpénz!)','Kessler Hubert Emlékház Jósvafőn, ha még marad idő','Tartalék: Trizs, Hagyományok Háza — de arra előre telefonálni kell'],
 d:'A Baradla szerencséje, hogy eső esetén nem kell átszervezni a hétvégét, csak lefelé kell menni. A négy program egymástól legfeljebb húsz percre van, és a szinpetri vezetés fix időpontjai (10/12/14/16) adják a nap gerincét, amihez a barlangi indulásokat lehet igazítani.',
 w:'Esőkabát mindenkinek — szombatra 25% esély. A barlangban a +10 °C esőtől függetlenül igaz. Szinpetri CSAK KÉSZPÉNZ, és hétfőn zárva (most nem gond).'},
{id:'pl4', ll:[48.2210,20.4690], n:'Hazaút a Bükkön át', b:'megeri', age:'MINDEN KOR', meta:'amit pénteken kihagytunk · 2 megálló', q:'Lázbérci víztározó Dédestapolcsány',
 steps:['Aggtelek → Putnok → Dédestapolcsány ≈ 1 óra','Lázbérci-tó: 850 m sík séta a Tó utcáról, kék jelzésen (fürdeni tilos!)','Ha van erő: Dédesi vár, rövid mászás a nagyobbaknak','Szilvásváradot most is kihagyjuk — azt kívülről fújjuk','Bélapátfalva: apátsági templom, ha még bírják','Dédestapolcsánytól Ostoros ≈ 45 perc'],
 d:'Pénteken azért nem álltunk meg sehol, hogy világosban álljon a tábor. Vasárnap ez a nap adja vissza: ugyanaz az útvonal, csak fordítva és két lábnyújtóztatóval. A Lázbérc az a megálló, ami után a gyerekek elalszanak a hátsó ülésen — és pont ez a cél.',
 w:'A tó ivóvízbázis: fürdeni tilos, az ösvényről letérni tilos. A Dédesi vár és a Bél-kő is a hatévesé; a kicsiknek a tópart és a templom a program.'}],

scenarios:[],

today:[
{id:'d1', ids:['p1','p2','pl1'], c:'Péntek', icon:'ph-car-profile', r:'Tiszta menet Ostorosról, érkezés ~19:00 → beköltözés még szürkületben, hideg vacsora, korai fekvés. Megálló nincs: a Bükk-oldal a vasárnapi hazaúté. Holnap 12:00-kor barlang.'},
{id:'d2', ids:['a1','a6','j1','j2'], c:'Szombat, jó idő', icon:'ph-sun', r:'DE: Vörös-tói középtúra 12:00 — a szept. 5-i rend szerint, nem 11:00! Előtte Vörös-tó és a Medve-sziklák séta. DU: Jósvafő, lovak és Tengerszem. VAGY a tesztelt Aggtelek→Jósvafő gyaloglás a 14:48-as busszal, és a barlang vasárnap.'},
{id:'d3', ids:['a2','s2','j5','pl3'], c:'Szombat, esős', icon:'ph-cloud-rain', r:'Aggteleki rövidtúra 10:00 vagy 13:00 — vagy még inkább a 15:00-s, mert azon kórusműsor van a Hangversenyteremben. Közte Szinpetri vezetés 12:00 vagy 14:00 (készpénz!), utána Kessler-ház.'},
{id:'d4', ids:['s1','s2','h1'], c:'Vasárnap, van erő', icon:'ph-mountains', r:'Szögliget: Szádvár-kör 4,5 km / 250 m → Szinpetri hazaútban, vezetéssel és készpénzzel → haza, Lázbérc-megállóval, ha bírják.'},
{id:'d5', ids:['j3','j2','h1'], c:'Vasárnap, fáradtak', icon:'ph-baby', r:'Fürkész-ösvény + Tengerszem + fagyi Jósvafőn → hazaút a Lázbérci-tó 850 méteres lábnyújtójával, vagy anélkül. Ez is egy nap, és általában ez marad meg.'},
{id:'d6', ids:['g1','g2','g4'], c:'Mese kell, nem barlang', icon:'ph-tree', r:'Trizsi Meseerdő: lombház, függőágyak, gombamászóka és mezítlábas ösvény az önkormányzati erdőben, ingyen, legalább fél nap. A Hagyományok Házához előre telefonálni kell; a Meseerdő szabadon látogatható. Utána Szuhafő két fatornya, ha marad idő.'},
{id:'d7', ids:['j1','j4'], c:'Lovakat akarunk', icon:'ph-horse', r:'Hucul ménes a Gergés-lápai legelőn, Kúria Lovasbázis helyszíni bejelentkezéssel — de a hétvégi elérhetőséget még PÉNTEKEN kérdezzétek meg: +36 48 503 001. Gyalog a Tohonya–Kuriszlán I. útba ejti a legelőt.'},
{id:'d8', ids:['a7','a6','j2','p3'], c:'Csak két óránk van', icon:'ph-clock', r:'Kincskereső játékösvény a fogadótérben, Vörös-tó és a Medve-sziklák, Tengerszem-körséta, vagy naplemente a Baradla-tetőn. Mind két óra alatt, mind ingyen, egyikhez sem kell telefonálni.'},
{id:'d9', ids:['p2','pl1'], c:'Hajnalban fáztak', icon:'ph-thermometer-cold', r:'~9 °C-os hajnal volt — ma este rönkház vagy faház a sátor helyett, és a hálózsákok bepakolva. A recepción helyben is át lehet ülni, ha van szabad ház; ha nincs, a jósvafői Tengerszem Hotel a B-terv.'},
{id:'d10', ids:['a2','a1','pl3'], c:'Melyik barlangtúra?', icon:'ph-ticket', r:'A kettőt KÉT KÜLÖN PÉNZTÁRBAN árulják. Aggteleken csak a rövidtúrára kapni jegyet (1 km, 60 perc, a 2 évesnek is), a Vörös-tóira a Vörös-tónál (2,3 km, 100 perc, 598 lépcső, tavaly ment). A jósvafői rövidtúra szept. 5-én nem indul.'}],

essentials:[
{n:'Ez a hétvége speciális — két dolog, amit nem lehet megúszni', d:'Egy: szeptember 1-től TÉLI MENETREND, a barlangpénztárak 8:00–16:00 tartanak, és az indulási idők is mások, mint nyáron. Kettő: szeptember 5-én, szombaton BARLANGI FUTÓVERSENY van — a jósvafői rövidtúra NEM INDUL, a Vörös-tói középtúra pedig kivételesen 12:00-kor és 14:00-kor megy, nem 11:00-kor. Az aggteleki rövidtúrát (10:00, 13:00, 15:00) ez nem érinti. Ha csak egy dolgot jegyeztek meg a kötetből, ez legyen az: szombaton 12:00, nem 11:00.'},
{n:'A bónusz, amiért érdemes 15:00-ra időzíteni', d:'Szeptember 5-én a 15:00-s aggteleki rövidtúrán 20–25 perces kórusműsor szól a Hangversenyteremben — a Jász-Nagykun-Szolnok Vármegyei Karnagyok Kamarakórusa és az Ádám Jenő Zeneiskola. A jegy ára a sima túrajegy, tehát ez ingyen ráadás. Egy hatévesnek egy barlangi terem, amiben kórus énekel, több marad meg, mint tíz cseppkő neve.'},
{n:'Két pénztár, két jegy', d:'Az aggteleki pénztárban CSAK az aggteleki rövidtúrára lehet jegyet venni. A Vörös-tói középtúrára a Vörös-tónál kell, a helyszínen — elővétel és online jegy nincs egyikre sem. Aggtelek: (36) 48 503 003. Vörös-tó: (36) 48 350 048. Mindkettő 8:00–16:00. Aki a kempingből indul és a középtúrára megy, annak négy kilométert kell autóznia a jegyért is.'},
{n:'Bent +10 °C — a barlangi öltözék nem opcionális', d:'A Baradlában egész évben tíz fok van, akkor is, ha kint huszonhat. Pulóver vagy kabát MINDENKINEK, és zárt, tapadós cipő: a barlangi lépcsők nedvesek, a középtúrán 598 van belőlük. Papucsban és pólóban ez a program nem élmény, hanem büntetés — és a kicsiket nem lehet közben kivinni.'},
{n:'Sátorozni a nemzeti park területén tilos', d:'Ezt az ANP feketén-fehéren kiírja, a fokozottan védett részeken pedig a jelzett útról letérni sem szabad. A park4night „surrounded by nature" pontjainak jó része Aggtelek–Jósvafő–Szögliget körül épp NP-területre vagy annak peremére esik. Autóban aludni falusi parkolóban, NP-határon kívül, jogilag más kategória és általában tolerált — de az nem „nature", hanem falu széle, mosdó nélkül. A működő kompromisszum: sátor a Baradla kemping füves részén.'},
{n:'Készpénz-boríték', d:'Szinpetriben CSAK KÉSZPÉNZZEL lehet fizetni, és a kisebb büfék is gyakran így működnek; a fogatozásra is vigyetek. A kemping és a barlangpénztár kártyát is elfogad, de a boríték maradjon a kesztyűtartóban — a hétvége felét készpénzes helyeken töltjük.'},
{n:'A 14:48-as busz, és a képernyőkép róla', d:'A tesztelt gyalogos nap (Aggtelek → Jósvafő, 7 km) azon áll vagy bukik, hogy a visszaút megvan. A jósvafői megálló a barlangkijárat közelében van, a Budapest felé induló busz kb. 14:48-kor visz vissza Aggtelekre — ezt a park is ajánlja, de a menetrend változhat. Indulás előtt ellenőrizni a menetrendek.hu-n, és a képernyőkép legyen meg offline is, mert a völgyben nincs mindig térerő.'},
{n:'Vasárnap hajnal ~9 °C', d:'Péntek ~26 °C napos, szombat ~23 °C 25% esővel, vasárnap ~23 °C napos — DE vasárnap hajnalban 9 fok körül. Ez sátorban három kisgyerekkel nem apróság: meleg hálózsák, pizsama, sapka, vagy inkább a fűtött rönkház. Az esőkabátok szombatra kellenek.'},
{n:'Egy hívás pénteken: a lovak', d:'A jósvafői Kúria Lovasbázis hétvégi elérhetőségét az ANP turisztikai irodájánál lehet megtudni: +36 48 503 001 — az iroda viszont HÉTKÖZNAP él. Ez azt jelenti, hogy a hívást pénteken, indulás előtt kell elintézni, különben szombaton csak reménykedni lehet. A ménes a legelőn amúgy is megnézhető, de a lovagoltatás és a fogatozás nem magától megy.'},
{n:'Piknik, mert útközben nincs bolt', d:'A Baradla tanösvényen, a Szádvár tanösvényen és a Galyaságban nincs büfé és nincs bolt. Aggteleken este már nem lehet bevásárolni; a nagybevásárlás még Egerben vagy Putnokon esik útba. Piknik, víz mindenkinek, és egy tartalék adag valami édes arra, amikor a hatéves bejelenti, hogy nem bírja tovább.'},
{n:'A Trizs-szabály: ingyenes, de nem szervezett', d:'A Trizsi Meseerdő szabadon látogatható és nem kerül semmibe, viszont hivatalos nyitvatartást és belépőt sehol nem közölnek, a Hagyományok Háza programjai pedig előre egyeztetve mennek. Vagyis: a Meseerdőre bármikor mehettek, a házra nem. Ha a ház is kell, előtte telefon az önkormányzatnak. És a Meseerdő nem a főutcán van: a háztól kb. 3 km vezet az önkormányzati erdőig.'}],

checklist:[
{id:'cl1', t:'Pulóver/kabát MINDENKINEK a barlangba — +10 °C, a nyári melegben is'},
{id:'cl2', t:'Zárt, tapadós cipő — a barlangi lépcsők nedvesek (598 a középtúrán)'},
{id:'cl3', t:'Készpénz-boríték — Szinpetri, büfék, fogatozás'},
{id:'cl4', t:'Meleg hálófelszerelés — vasárnap hajnal ~9 °C (vagy rönkház a sátor helyett)'},
{id:'cl5', t:'Háti hordozó a legkisebbnek'},
{id:'cl6', t:'Buszmenetrend-képernyőkép a Jósvafő→Aggtelek járatról (kb. 14:48)'},
{id:'cl7', t:'Esőkabátok szombatra — 25% eső'},
{id:'cl8', t:'Piknik és víz a tanösvényre — útközben nincs bolt'},
{id:'cl9', t:'Fejlámpa — Baradla-tető naplemente után, esti kemping'},
{id:'cl10', t:'Váltás zokni és törölköző — a trizsi mezítlábas ösvényhez'},
{id:'cl11', t:'Telefon a kempingnek a késői érkezésről (még indulás előtt)'},
{id:'cl12', t:'Telefon az ANP turisztikára a lovak miatt: +36 48 503 001 (PÉNTEKEN, mert hétvégén nem veszik fel)'},
{id:'cl13', t:'Nagybevásárlás Egerben vagy Putnokon — Aggteleken este már nincs bolt'}]
};

// Kép-tartalék. A vázban a sorrend: helyi fotó → rögzített Wikimedia-fájl →
// Wikipédia-vezérkép (wk) → Commons-geokeresés a koordináta körül 700 m-en →
// kategória-ikon.
//
// Településszintű tartalék NINCS, és ez szándékos: a bükkaljai kötetnél már
// egyszer megtanultuk, hogy ugyanaz a falukép tizenhét helyszínen rosszabb,
// mint a tiszta ikon. Ezért a wk csak ott van kitöltve, ahol a szócikk MAGÁT a
// helyszínt írja le (a szócikkcímek 2026. 09. 05-én ellenőrizve), a többi
// helyszín a koordinátája körüli geokódolt Commons-fotóra, végül az ikonra
// esik vissza. A szálláshelyek és a kajáldák elvből nem kapnak wk-t.
const HIKE_WK = {
  t2: 'hu:Baradla-barlang',
  t3: 'hu:Szádvár',
  t10: 'hu:Lázbérci-víztározó',
  t11: 'hu:Bél-kő'
};
data.hikes.forEach(h => { h.wk = HIKE_WK[h.id] || undefined; });
data.modules.forEach(m => {
  (m.sleep || []).forEach(x => { delete x.wk; });
  (m.eat || []).forEach(x => { delete x.wk; });
});

data.itineraries = [
{id:'hetvege', name:'A hétvége, ahogy tervezzük', tag:'2 éj · barlang szombaton', note:'Az alapváltozat: péntek tiszta menet, szombat a Baradla és Jósvafő, vasárnap a Szádvár és a hazaút. Egy fő program naponta, a többi ráadás.',
 days:[
 {d:1, wd:'péntek', t:'Menet Ostorosról, tábor szürkületben', mod:'P', drive:'≈ 1 óra 45 perc tiszta menetidő', from:'Ostoros', stops:['p1','p2'], opts:['pl1'], sleep:'NOMÁD Baradla Kemping, Aggtelek', sleepQ:'Baradla Kemping Aggtelek', tip:'Megálló nincs — napnyugta ~19:10, és a tábornak világosban kell állnia. Hideg vacsora, mert az étterem nyitvatartására nem építünk. A késői érkezést még indulás előtt jelezzétek telefonon, és ugyanazzal a lendülettel hívjátok fel az ANP turisztikát a lovak miatt (+36 48 503 001) — hétvégén már nem veszik fel.'},
 {d:2, wd:'szombat', t:'Vörös-tói középtúra, aztán Jósvafő', mod:'A', drive:'kemping → Vörös-tó 4 km · Vörös-tó → Jósvafő 6 km', from:'Baradla Kemping Aggtelek', stops:['a6','a1','j2','j1'], opts:['a2','j3','p3'], sleep:'NOMÁD Baradla Kemping, Aggtelek', sleepQ:'Baradla Kemping Aggtelek', tip:'⚠️ A középtúra ma 12:00 és 14:00 — a futóverseny miatt, nem 11:00. Jegy CSAK a Vörös-tói pénztárban. Előtte a Medve-sziklák sétája tölti ki a várakozást, utána a park autója visszahoz a parkolóhoz. Délután Jósvafő: Tengerszem és a lovak. Este, ha marad erő, naplemente a Baradla-tetőn; ha esik, a 15:00-s aggteleki rövidtúra a kórusműsorral.'},
 {d:3, wd:'vasárnap', t:'Szinpetri, Szádvár, és haza a Bükkön át', mod:'SZ', drive:'Aggtelek → Szinpetri 10 perc → Szögliget 15 perc · haza ≈ 2 óra', from:'Baradla Kemping Aggtelek', stops:['s2','s1'], opts:['h1','h2'], sleep:'otthon', sleepQ:'Ostoros', tip:'Bontás után Szinpetri a 10:00-s vagy 12:00-s vezetésre (CSAK KÉSZPÉNZ), onnan Szögliget és a Szádvár-kör: 4,5 km, 250 m, kb. 3 óra, fedetlen rom — sapka és víz. Hazafelé a Lázbérci-tó 850 méteres lábnyújtója, ha bírják; ha nem, egyenesen Ostoros.'}]},

{id:'gyalogos', name:'A tesztelt változat — gyalog Jósvafőre', tag:'2 éj · a tavalyi forgatókönyv ✔', note:'Ha a gyaloglás fontosabb, mint a barlang időpontja: szombaton végigmegyünk a Baradla tanösvényen, és a barlang átkerül vasárnapra, amikor már a normál téli rend él.',
 days:[
 {d:1, wd:'péntek', t:'Menet Ostorosról, tábor szürkületben', mod:'P', drive:'≈ 1 óra 45 perc tiszta menetidő', from:'Ostoros', stops:['p1','p2'], opts:['pl1'], sleep:'NOMÁD Baradla Kemping, Aggtelek', sleepQ:'Baradla Kemping Aggtelek', tip:'Ugyanaz, mint az alapváltozatban: megálló nincs, hideg vacsora, korai fekvés. Holnap reggel viszont korábban kelünk, mert gyalog megyünk.'},
 {d:2, wd:'szombat', t:'Aggtelek → Jósvafő gyalog, vissza busszal', mod:'A', drive:'0 km autóval · 7 km gyalog · vissza busszal', from:'Baradla Kemping Aggtelek', stops:['a5','j2','j3'], opts:['j1','a7'], sleep:'NOMÁD Baradla Kemping, Aggtelek', sleepQ:'Baradla Kemping Aggtelek', tip:'Reggel indulás a sárga jelzésen, piknik útközben (nincs bolt!), Jósvafőn Tengerszem és fagyi. A visszaút a kb. 14:48-as buszra van kitalálva — a menetrendet indulás előtt ellenőrizzétek, és a képernyőkép legyen meg offline. Ha marad idő a busz előtt: Fürkész-ösvény vagy a lovak.'},
 {d:3, wd:'vasárnap', t:'Barlang normál menetrenddel, aztán haza', mod:'A', drive:'kemping → Vörös-tó 4 km · haza ≈ 2 óra', from:'Baradla Kemping Aggtelek', stops:['a1','a6'], opts:['s2','h1'], sleep:'otthon', sleepQ:'Ostoros', tip:'Vasárnap már nincs futóverseny: a középtúra a téli rend szerint 11:00 és 14:00. A 11:00-s után marad idő Szinpetrire (12:00 vagy 14:00 vezetés, készpénz) vagy a Lázbérci-tóra hazafelé. Bontás még indulás előtt, hogy a barlang után egyenesen hazainduljatok.'}]},

{id:'esos', name:'Ha szombaton esik', tag:'2 éj · fedett B-terv', note:'25% esély van rá. A Baradla ettől függetlenül megy, csak a felszíni programok cserélődnek fedettre — és a szombat a 15:00-s kórusműsor köré rendeződik.',
 days:[
 {d:1, wd:'péntek', t:'Menet Ostorosról, tábor szürkületben', mod:'P', drive:'≈ 1 óra 45 perc tiszta menetidő', from:'Ostoros', stops:['p1','p2'], opts:['pl1'], sleep:'NOMÁD Baradla Kemping, Aggtelek', sleepQ:'Baradla Kemping Aggtelek', tip:'Ha esőt jósolnak szombatra, itt dőljön el a rönkház kérdése: nedves sátorbontás vasárnap reggel, kilenc fokban, három gyerekkel — ezt nem kell bevállalni.'},
 {d:2, wd:'szombat', t:'Papírmalom, barlang, kórus', mod:'A', drive:'Aggtelek → Szinpetri 10 perc, oda-vissza', from:'Baradla Kemping Aggtelek', stops:['s2','a2','j5'], opts:['g2','a7','pl3'], sleep:'NOMÁD Baradla Kemping, Aggtelek', sleepQ:'Baradla Kemping Aggtelek', tip:'Szinpetri 12:00-s vezetés — merített papír, amit a gyerekek maguk csinálnak, CSAK KÉSZPÉNZ. Vissza Aggtelekre a 15:00-s rövidtúrára: azon szól a kórus a Hangversenyteremben. Aki még bírja, a Kessler-házzal zárja. Esőkabát mindenkinek.'},
 {d:3, wd:'vasárnap', t:'Kisüt: Szádvár, vagy meseerdő', mod:'SZ', drive:'Szögliget 25 perc · VAGY Trizs 15 perc · haza ≈ 2 óra', from:'Baradla Kemping Aggtelek', stops:['s1'], opts:['g1','h1','h2'], sleep:'otthon', sleepQ:'Ostoros', tip:'Vasárnapra napos időt jósolnak: a Szádvár-kör ilyenkor a legjobb, mert a rom fedetlen és a panoráma a lényeg. Ha a tegnapi eső után sáros a terep vagy fáradtak a lábak, helyette Trizs: a Meseerdő erdőben van, ingyenes, és nem baj, ha csöpög.'}]},

{id:'meses', name:'A meséskönyv-változat', tag:'2 éj · barlang + Galyaság', note:'Ha a hatévesnek nem a lépcső és a cseppkő a nyerő, hanem a lombház és a mezítlábas ösvény: szombaton egy barlangtúra, vasárnap a Galyaság apró zsákfalvai.',
 days:[
 {d:1, wd:'péntek', t:'Menet Ostorosról, tábor szürkületben', mod:'P', drive:'≈ 1 óra 45 perc tiszta menetidő', from:'Ostoros', stops:['p1','p2'], opts:['pl1'], sleep:'NOMÁD Baradla Kemping, Aggtelek', sleepQ:'Baradla Kemping Aggtelek', tip:'Ha a vasárnap Trizsé, akkor pénteken elég egyetlen hívás a kempingnek — a Meseerdőhöz nem kell foglalni semmit. A Hagyományok Házához viszont igen, ha be is akartok menni.'},
 {d:2, wd:'szombat', t:'Egy barlangtúra, és marad a nap', mod:'A', drive:'kemping → Vörös-tó 4 km, oda-vissza', from:'Baradla Kemping Aggtelek', stops:['a1','a6','a7'], opts:['j2','p3'], sleep:'NOMÁD Baradla Kemping, Aggtelek', sleepQ:'Baradla Kemping Aggtelek', tip:'Középtúra 12:00-kor (a szept. 5-i rend), utána Medve-sziklák és a Kincskereső játékösvény a fogadótérben — az a kemping mellett van, tehát a délutánhoz nem kell autó. Naplemente a Baradla-tetőn.'},
 {d:3, wd:'vasárnap', t:'Trizs, Szuhafő, és haza', mod:'G', drive:'Aggtelek → Trizs 15 perc → Szuhafő 25 perc · haza ≈ 2 óra', from:'Baradla Kemping Aggtelek', stops:['g1','g4'], opts:['g2','g3','h1'], sleep:'otthon', sleepQ:'Ostoros', tip:'Trizs: a Hagyományok Házától indul a kb. 3 km-es út az önkormányzati erdőig, ott a lombház, a függőágyak, a gombamászóka és a mezítlábas ösvény — váltás zokni és törölköző kell hozzá. Ingyenes, és legalább fél nap. Ha marad idő, Szuhafő két fatornya Zádorfalva felől, aztán hazafelé Putnokon és Dédestapolcsányon át.'}]}
];

window.registerTrip({
  id: 'aggtelek',
  // Content version — bump on every content change; version.json mirrors it.
  version: '2026-09-05.3',
  date: '2026-09-04',
  name: 'Aggteleki-karszt',
  period: '2026. szept.',
  title: 'Aggteleki-karszt — Aggtelek · Jósvafő · Szögliget',
  kicker: 'Ostoros → Aggtelek · 2 éj · 6 modul',
  tagline: 'Két bevált program, amit tavaly már megcsináltunk a gyerekekkel — a Vörös-tói középtúra és az Aggtelek→Jósvafő gyaloglás —, és köré egy hétvégényi új: Jósvafő hucul lovai, a Szádvár, Szinpetri papírmalma és a Galyaság meseerdeje. Péntek tiszta menetnap: program csak szombat–vasárnap.',
  cover: 'photos/aggtelek/cover.webp',
  verified: 'Adatok ellenőrizve 2026. szeptember 3-án, a Galyaság-modul szeptember 5-én · szept. 1-től téli menetrend, szept. 5-én a futóverseny miatt módosult barlangi indulások',
  origin: 'Ostoros',
  // Petrolkék betűt a két tesztelt irány kap: a péntek esti bázis és a Baradla.
  accentModules: ['P', 'A'],
  extraGroup: { letter: '★', title: 'Túrák és fél napok', sub: 'Az 5 km / 200 m-es keret — és a döntések, amik nem egy helyszínhez tartoznak' },
  mapIntro: 'Aggtelek a bázis: a Baradla főbejárata, a pénztár és a kemping egy helyen, a falu szélén. Innen keletre négy kilométerre a Vörös-tó — onnan indul a középtúra —, további hat kilométerre Jósvafő, ahol a barlang kijön; a kettő között, a felszínen fut a Baradla tanösvény. Jósvafőn van a Tengerszem, a Fürkész-ösvény és a hucul ménes legelője. Kelet felé, a Bódva irányába esik Szinpetri a világ legnagyobb könyvével (félúton) és Szögliget a Szádvárral, még tovább Bódvarákó és az Esztramos. Délnyugatra viszont egy egészen másik táj kezdődik: a Galyaság apró zsákfalvai — Trizs a Meseerdővel tizenöt percre, mögötte Ragály, Zádorfalva, Szuhafő a két fatoronnyal, és Kelemér a jégkorszaki lápokkal. Haza a Bükkön át megyünk: Putnok, Dédestapolcsány (Lázbérc, Dédesi vár), Nagyvisnyó, Szilvásvárad, Bélapátfalva, Eger, Ostoros.',
  maps: [],
  photoDir: 'photos/aggtelek/',
  // Saját fotó csak oda, ahol tényleg AZ a helyszín látszik rajta. A többi
  // helyszín a wk-szócikk vezérképére, majd a koordinátája körüli geokódolt
  // Commons-fotóra, végül a kategória-ikonra esik vissza. A napi tervek (plans)
  // NEM kapnak Wikipédia-képet a váztól, ezért azoknak külön helyi fotó jut.
  photos: {
    a1: 'barlang.webp', t2: 'barlang.webp', pl2: 'barlang.webp',
    a3: 'josvafo-bejarat.webp', pl3: 'josvafo-bejarat.webp',
    p2: 'kemping.webp', 'P-s0': 'kemping.webp', pl1: 'kemping.webp',
    s1: 'szadvar.webp', t3: 'szadvar.webp'
  },
  wikiFiles: {},
  data: data
});

})();
