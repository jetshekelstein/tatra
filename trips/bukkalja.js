// Trip: Bükkalja — Noszvaj · Bogács · Cserépfalu · Bükkzsérc (a házi terep).
// Merged from the two "Bükkalja Kalauz" briefs (2026. 08. 28.) and re-verified
// against public sources on the same day; where the two briefs disagreed, the
// checked value won and the losing claim is called out in the text so nobody
// re-introduces it from the old brief. The notable corrections:
//
//   * Bogács belépők: BOTH briefs carried the 2026 eleji 4 600 Ft-os listát. A
//     fürdő azóta levitte az árakat (kültéri 3 500 Ft, hétköznap a fedett
//     élménymedencével együtt) — év végéig.
//   * Várkúti turistaház: az A brief nyitva lévő, foglalható házként írta le.
//     Nem az: nem foglalható, a telek eladó. A B brief állapotjelentése áll.
//   * "Millenniumi kilátó": KÉT külön kilátó van, egy Bogácson (Szomolyai u.)
//     és egy Cserépfaluban (Berezdalja, Csete György, 2000). Az A brief csak a
//     cserépfaluit, a B brief mindkettőt hozta, néven nem nevezve — itt külön
//     POI mindkettő.
//   * Nomád, Síkfőkút: a B brief szerint a kemping "megszűnt". Pontosabban:
//     hotel + glamping + kempingrész lett belőle, sátorhely van, de egyeztetni
//     kell. Az étterem neve ma Trakta.
//   * Névjavítások: Pató-sziklák → Patkó-sziklák · Odor-vár → Ódor-vár ·
//     "Remete étterem" → Hórvölgyi Remete Étterem · a Hór-völgyi
//     Látogatóközpont hivatalos neve Suba-lyuk Múzeum és Látogatóközpont.
//
// Ez nem többnapos vándorút: 20–30 percre lévő mikrokalandok 0–2 éjszakával.
// Eger szándékosan kimarad. A koordináták hozzávetőlegesek (±200–400 m), a
// Közelben-lista és a közeledés-jelzés számol belőlük.
(function () {

const data = {
modules: [

{id:'B', letter:'B', title:'Bogács', full:'Bogács — a fürdős bázistábor', kicker:'A bevált bázis · ✔ kipipálva', sub:'Kénes gyógyvíz, csúszdapark és egy kemping, ami a fürdő kerítésén belül van', transit:'Egerből ≈ 30 perc · Cserépfalu 8 perc · Bükkzsérc 12 perc · Noszvaj 15 perc · Szomolya 10 perc',
 pois:[
 {id:'b1', ll:[47.9048,20.5308], wk:'hu:Bogács', n:'Bogácsi Gyógy- és Strandfürdő ✔', q:'Bogácsi Gyógy- és Strandfürdő', b:'fo', age:'MINDEN KOR', meta:'egész évben · a bázis · 4 év alatt ingyen',
  d:'A bázis, amit nem kell újra felfedezni. Kénes gyógyvíz, csúszdapark, vízi játszótér, fedett élménymedence — a kettő- és a hároméves ingyen megy be, a hatévesnek a csúszdák a nap. Szombatonként éjszakai fürdőzés: az egyik szülő marad a sátorban, a másik megy, félidőben csere. ÁLLAPOT 2026 nyarán: az úszó- és a gyermekmedence rekonstrukció alatt (a Labdás gyerekmedence aug. 15-től újra megy), a SZAUNAVILÁG átmenetileg zárva, és új termálkutat fúrnak — időnként zaj. A csúszdapark és a vízi játszótér ettől függetlenül üzemel.',
  w:'Nyáron jellemzően 9–20; a medencéket zárás előtt fél órával el kell hagyni. ÁRAK: a fürdő nyáron levitte a listát — kültéri felnőtt 3 500 Ft, és hétköznap ebben BENNE VAN a fedett élménymedence is; a fedett résszel is érvényes jegy 4 100 Ft; ifjúsági/nyugdíjas 3 200 Ft-tól. Az év végéig ez él. 4 ÉV ALATT INGYEN. Kártya és SZÉP-kártya megy. Ha valahol még a 4 600 Ft-os listát látjátok, az a 2026 eleji ár.'},
 {id:'b2', ll:[47.9062,20.5401], n:'Cserépi úti pincesor', q:'Cserépi úti pincesor Bogács', b:'megeri', age:'kora este MINDEN KOR · kóstolóval SZÜLŐPROGRAM', meta:'5 perc a fürdőtől · séta ingyen', cash:true,
  d:'Évszázados, riolittufába vájt pincesor a Bükkaljai borvidék közepén, a fürdőtől öt percre. Sétának bármikor jó, a gyerekeknek a kőbe vájt ajtók maguktól elég izgalmasak. Bevált cím: Csáter Apó pincéje (Cserépi úti pincesor 56.) — hordóból mért Turán és Medina, pogácsa. A pincék többsége egyénileg, hétvégén és rendezvénykor nyit.',
  w:'Csáter Apó: naponta 9:30–18:30, +36 30 905 5234. Séta ingyen; kóstoló pincénként, KÉSZPÉNZ ajánlott. Kora este a legjobb — addigra a fürdő kiürül belőletek.'},
 {id:'b3', ll:[47.9075,20.5255], n:'Bogácsi Millenniumi-kilátó', q:'Bogácsi kilátó Szomolyai utca', b:'opc', age:'MINDEN KOR', meta:'2 perc a kocsitól · ingyen · egész évben',
  d:'Hatszögletű kilátó a falu fölötti dombtetőn, bogácsi kőből rakott mellvéddel: a magasságot nem a lépcső adja, hanem a domb. Északra a Dél-Bükk erdői, délre a Dél-Borsodi- és a Hevesi-síkság. Ez a „van fél óránk" program, ami fotón kirándulásnak néz ki. FIGYELEM: nem ez a Csete György tervezte Millenniumi-kilátó — az Cserépfaluban van (C modul), és a kettőt könnyű összekeverni.',
  w:'Szabadon látogatható, egész évben, ingyen. Parkoló a Szomolyai utcán, a kilátóhoz vezető lépcső mellett.'},
 {id:'b4', ll:[47.9031,20.5346], n:'Falusi levezetés: patakpart, játszótér, fagyi', q:'Bogács játszótér', b:'opc', age:'MINDEN KOR · babakocsival',
  meta:'fél óra–másfél óra · nulla forint',
  d:'A fürdő utáni levezetés: patakparti séta a falun át, játszótér, fagyi. Nem program, hanem az a fajta délután, ami után a gyerekek nyolckor alszanak.',
  w:'Bármikor, ingyen. Ha a fürdő zsúfolt, ezzel lehet elhalasztani a bemenetelt délutánra — a délutáni jegy olcsóbb is.'}],
 sleep:[
 {n:'Thermál Kemping, Bogács ✔ — a tesztelt bázis', ll:[47.9052,20.5300], q:'Thermál Kemping Bogács', tel:'+36 49 534 410',
  d:'A fürdő saját területén, az északi parkrészen: ~1,5 ha füves, fás terület, 200–250 sátor- és lakókocsihely. Áramvétel 20 méterenként, az ár tartalmazza — de HOSSZABBÍTÓT VINNI KELL. Felújított vizesblokk, konyha, mosókonyha, kijelölt sütögetőhelyek, kutya felárral. A lényeg: a kempingdíj tartalmazza a kültéri gyógyvizes medencék használatát 6:00–22:00-ig, a gyerek- és hidegvizes medencéket pedig a fürdő nyitvatartásában. 14 faház is van (11 db négyágyas: minikonyha, hűtő, WC — zuhany közös). Egész évben üzemel. Fürdő u. 4. · szallas@bogacsitermalfurdo.hu. Az árlista nem publikus frissen: telefonos megerősítés ajánlott.'},
 {n:'Öreg Malom Étterem és Kemping — a tartalék a faluban', ll:[47.9036,20.5322], q:'Öreg Malom Étterem Bogács',
  d:'Dózsa György út 12. — étterem, mellette kemping és kiadó apartman. Ha a Thermál telt (hosszú hétvégén simán megesik), ez a legrövidebb B-terv: ugyanaz a falu, öt perc a fürdőig.'}],
 eat:[
 {n:'Vadvirág Étterem — a családi biztos pont', q:'Vadvirág Étterem Bogács',
  d:'Táncsics utca 6. A környék gasztro-nehézsúlyúja: 2023-ban a Restaurant Guru 100 legjobb magyar étterme közt szerepelt, és közben tényleg gyerekre van kalibrálva — gyerekmenü, színezők, a nagyobbaknak QR-kódos ételképek az étlapon. Bőséges adagok, gyors kiszolgálás. Ha egy este rendes vacsorát akartok, ez az.'},
 {n:'Öreg Malom Étterem', q:'Öreg Malom Étterem Bogács',
  d:'Dózsa György út 12., a saját kempingje mellett. Magyaros, egyszerű, közel — a „nem akarunk dönteni" vacsora.'},
 {n:'Strandbüfék és a Lángos Büfé', q:'Bogácsi Gyógy- és Strandfürdő büfé',
  d:'A fürdő büfésora: a rántott hal jó hírű, a lángos pedig lángos. A Lángos Büfé a Fürdő u. 2/A alatt van, tehát a kempingből kilépve rögtön ott a vacsora, ha aznap már nem gyújtotok tüzet.'},
 {n:'Tele-tál ételbár — a gyors megoldás', q:'Tele-tál ételbár Bogács',
  d:'Dózsa György utca 16. Napi menü, elvitel. A „fél nyolc van, a gyerekek éhesek, a bogrács hideg" forgatókönyvre.'},
 {n:'Csáter Apó pincéje — a felnőttvacsora', q:'Csáter Apó pincéje Bogács',
  d:'Cserépi úti pincesor 56., naponta 9:30–18:30. Hordós bor és pogácsa a tufába vájva. Váltásban, készpénzzel.'}]},

{id:'N', letter:'N', title:'Noszvaj', full:'Noszvaj — kastély és kőbe vájt világ', kicker:'A falu-nap · eső ellen is jó', sub:'Barlanglakások, barokk kastély, Tündérösvény és a piac', transit:'Bogácsról 15 perc · Egerből 20 perc · Síkfőkút a falu fölött 5 perc',
 pois:[
 {id:'n1', ll:[47.9294,20.4631], wk:'hu:Noszvaj', n:'Noszvaji barlanglakások (Farkaskő / Pocem)', q:'Noszvaji barlanglakások', b:'fo', age:'MINDEN KOR · hordozós terep', meta:'1–1,5 óra · Honvéd utca · CSAK KÉSZPÉNZ', cash:true,
  d:'Riolittufába vájt egykori lakások a falu szélén, ma szobrász-alkotótelep: kőbe faragott szobák, udvarok, visszhangos hanggömb-szoba. Nem múzeum, hanem bejárható kőfalu — a gyerekek fejében ez a „hobbit-falu", és a hanggömb visszhangja az, amit este is emlegetni fognak. Csoportos helytörténeti vezetés kérhető: +36 31 781 2855.',
  w:'Minden nap: nyáron 10–18, télen 10–16. Felnőtt 1 000 Ft · gyerek (6–18) 500 Ft · 6 ÉV ALATT INGYEN. CSAK KÉSZPÉNZ, kártyát nem fogadnak el. Autóval nyáron a Deák Ferenc utcai temető felőli parkolóból, télen a Honvéd utca felől; gyalog a Honvéd utcai alsó bejárat egész évben él. Babakocsival nem járható — hordozó.'},
 {id:'n2', ll:[47.9330,20.4665], n:'De la Motte-kastély + Tündérösvény', q:'De la Motte kastély Noszvaj', b:'megeri', age:'park MINDEN KOR · belső 6+/SZÜLŐPROGRAM', meta:'1,5–2 óra · sze–vas · hétfő-kedd zárva', mon:true,
  d:'Az ország egyik legkisebb barokk (copf) kastélya, eredeti rokokó freskós termekkel és angolparkkal — Dobó István u. 10. A gyerekeknek viszont nem a freskó a szám, hanem a parkban kirakott Tündérösvény: mesés, feladatos játékút. A bevált osztás itt is működik: egyik felnőtt bent az audio guide-dal, a másik kint a Tündérösvényen, félidőben csere.',
  w:'Szerda–vasárnap 11–16, SZOMBATON 11–14; hétfő és kedd zárva. ⚠️ A napi nyitvatartás gyakran módosul (aug. végén volt zárva tartott és „egyeztetés alatt" nap is) — INDULÁS ELŐTT TELEFON vagy Facebook: +36 30 147 0492, supervisor@tunderkerthotel.hu. Jegy a szomszédos Tündérkert Hotel recepcióján: felnőtt 2 500 Ft (audio guide), kedvezményes 2 000 Ft, 6 év alatt ingyen; csak a parkba sétajegy 500 Ft. Hétvégén 11:30-kor zenés/kosztümös vezetés 3 500 / 3 000 Ft (30–35 perc). Jellemzően készpénz.'},
 {id:'n3', ll:[47.9494,20.4700], n:'Síkfőkút — a tó és a kapu az erdőhöz', q:'Síkfőkút Noszvaj', b:'megeri', age:'MINDEN KOR · babakocsival', meta:'ingyenes parkoló · innen indul a V modul',
  d:'Tóparti üdülőtelep a falu fölött, forrásokkal és ingyenes parkolóval a Hotel Síkfőkút mögött. Önmagában egy nyugodt fél délután — és egyben a Kövesdi-kilátó gyalogos kapuja: innen indul a Kánya-patak völgyén felfelé vezető út Várkútra (V modul). Ha csak egy dolgot jegyeztek meg Noszvajról: ez a parkoló.',
  w:'Ingyen, bármikor. PÉNTEKEN Patakparti Piac 7–18: lekvár, sajt, méz, termelői holmi — ez a hét legjobb reggele, és utána bármelyik fél napos program ráfűzhető.'},
 {id:'n4', ll:[47.9322,20.4690], n:'Szerelmes MeseÚt', q:'Szerelmes MeseÚt Noszvaj', b:'opc', age:'MINDEN KOR · babakocsival', meta:'mesetáblás séta a faluban · ingyen',
  d:'Mesetáblás sétaút a faluban: állomásról állomásra olvasható történet, pont akkora adagokban, amennyit egy hatéves elbír. Térkép: meseut.hu. Összefűzhető a kastéllyal és egy fagyival egyetlen délelőtté.',
  w:'Ingyen, bármikor. Esőben is megy, ha van esőkabát — a táblák kint vannak.'},
 {id:'n5', ll:[47.9337,20.4652], n:'Gazdaház és Magtár Értéktár', q:'Gazdaház Noszvaj', b:'opc', age:'6+ · SZÜLŐPROGRAM', meta:'20–30 perc · helytörténet',
  d:'Kis helytörténeti kiállítás a faluban, a Magtár Értéktárral együtt. Nem tart sokáig, és pont jó az esőnap végére, amikor a kastély már megvolt, de haza még nem akartok menni.',
  w:'Szezonális nyitvatartás — érkezés előtt kérdezzetek rá a faluban vagy a kastély pénztáránál.'},
 {id:'n6', ll:[47.9300,20.4702], n:'Thummerer Pincészet', q:'Thummerer Pincészet Noszvaj', b:'opc', age:'SZÜLŐPROGRAM · váltásban', meta:'kóstoló bejelentkezéssel',
  d:'A Bükkaljai borvidék legismertebb pincészete Noszvajon. Kóstoló előzetes bejelentkezéssel — ez az a program, amit váltásban, alvó kicsikkel vagy a másik szülő fürdős délutánja alatt lehet bevállalni.',
  w:'Csak előzetes egyeztetéssel. Ha spontán kóstolóra vágytok, a bogácsi Cserépi úti pincesor (B modul) egyszerűbb.'}],
 sleep:[
 {n:'Nomád Hotel & Glamping, Síkfőkút — a kényelmi opció', ll:[47.9470,20.4520], q:'Nomád Hotel & Glamping Noszvaj', tel:'+36 36 463 363',
  d:'Síkfőkút út 5–7. ⚠️ VÁLTOZÁS: a 26 éve indult klasszikus kemping nem tűnt el, hanem átalakult — ma hotel + glamping + kempingrész egyben. Patakparti glamping-sátrak, csillagnéző buborékok (inkább felnőttbarát), tóparti konténer-lakosztály, öt családi faház, Lépcső-házak; sátor- és lakóautóhely van, de foglalás előtt egyeztessetek. Étterem (Trakta), szezonális medence, ingyenes bringák, játszótér, SZÉP-kártya. Akkor ez: ha egyszer sátorcipelés nélkül akartok erdőt.'}],
 eat:[
 {n:'Trakta étterem by Nomád — Síkfőkút', q:'Trakta étterem Noszvaj',
  d:'A Nomád étterme a tónál, helyi alapanyagokból, gyerekbarát környezetben — és pont ott, ahol a Várkút-túra véget ér. A leereszkedés utáni ebéd hivatalos helyszíne. Régebbi listákon még „Nomád étterme" néven fut.'},
 {n:'Magtár Fogadó — a felnőttest', q:'Magtár Fogadó Noszvaj',
  d:'A kastély szomszédságában, egy 1780-as évekbeli magtár és présház háromszintes műemlék épületében. 24 fős étterem, regionális alapanyagokra épülő, degusztációs menüt kínáló modern konyha — CSAK ELŐZETES FOGLALÁSSAL, egész évben. 2026-ban havonta több borvacsora is van (Bucsek András és csapata). Ez nem gyerekhely: ez az az este, amikor a kicsik már alszanak, vagy nagyszülő van.'},
 {n:'De la Motte / Tündérkert Étterem', q:'De la Motte Étterem Noszvaj',
  d:'A kastély mellett, a hotelnél. Borsosabb, de a kastélylátogatás után nulla méter — és a jegy is itt van, a recepción.'},
 {n:'Síkfőkúti büfék', q:'Síkfőkút Noszvaj büfé',
  d:'A tónál, a parkoló körül. A túra előtti kávé és a túra utáni fagyi terepe; pénteken a Patakparti Piac ugyanitt reggeliztet.'}]},

{id:'V', letter:'V', title:'Várkút', full:'Várkút és a Kövesdi-kilátó — az erdei szív', kicker:'A tesztelt kedvenc · ✔ kipipálva', sub:'Sziklaterasz a gerincen, tisztás a nemzeti parkban, nulla étterem', transit:'Síkfőkútról gyalog 3,7 km / ~290 m · autóval a 25-ösről 2,5 km köves erdei út',
 pois:[
 {id:'v1', ll:[47.9483,20.4627], n:'Kövesdi-kilátó ✔', q:'Kövesdi-kilátó Noszvaj', b:'fo', age:'MINDEN KOR (hordozóval)', meta:'természetes sziklaterasz · ingyen · a Ti útvonalatok',
  d:'Nem torony: természetes sziklakilátó-pont a gerincen, paddal, asztallal és piknikre való kövekkel, a Köves-tető (625 m) közelében, közvetlenül a várkúti tisztás mellett. Kelet felé nyílik — Bükkalja, Noszvaj, Bükkzsérc, tiszta időben Mezőkövesdig. A Bükkaljai Kő út és a Bükk szirtjei jelvényszerző túrák igazolópontja is (kód a fán, illetve a sziklán) — a hatévesnek ez remek indok kódot keresni. A hivatalos név Kövesdi-kilátó(hely); térképen néha csak „kilátóhely".',
  w:'Ingyen, bármikor. ÚTVONALAK: 1) Síkfőkútról a Kánya-patak völgyén Várkútig, onnan pár perc — kb. 3,7 km, ~290 m szint, körben (Vasbánya-nyereg, Novaji-kunyhó) 7,3 km: ez a bevált családi út ✔. 2) Bükkzsércről 5,5 km / 361 m (6+). 3) Felsőtárkányból 3,8 km / 413 m (6+).'},
 {id:'v2', ll:[47.9494,20.4614], n:'A várkúti tisztás és a turistaház', q:'Várkúti Turistaház Noszvaj', b:'megeri', age:'MINDEN KOR', meta:'⚠️ állapotjelentés · alvás csak egyeztetéssel',
  d:'Erdei tisztás a Bükki Nemzeti Parkban, Eger és Noszvaj között: nagy tölgy, tűzrakóhelyek, karsztforrás a közelben, és a felújított, napelemes turistaház (egykori Isaák Gyula menedékház, később Kóborló Panzió) — 62 fő, 15 szoba + 5 fürdőszobás szoba. ⚠️ ÁLLAPOTJELENTÉS: a ház NEM foglalható. A foglalási portálokon nem elérhető, a telek eladó. Telefonálni lehet (a recepció nem üzemel): +36 20 410 1421, +36 70 410 8525 · koborlokft@gmail.com, varkutith@gmail.com. Ettől függetlenül a tisztás a környék legjobb esti helye.',
  w:'ALVÁSI OPCIÓK A TISZTÁSON: (1) Várkúti kulcsosház, Bükki Vörös Meteor SE — IV. 1.–X. 31., gondnok Lakatos László +36 30 955 5060, illetve +36 30 262 3931 (csonticsoki@gmail.com), természetjáró igazolvány kell. (2) Várkúti Erdei-Tanya — körbekerített udvar, sátorozási lehetőség, nyársaló és bográcsoló, varkut@tvn.hu; a telefonos egyeztetés KÖTELEZŐ, az elérhetőségek régiek. (3) Ahogy ti csináltátok: saját sátor/autó. Víz nincs garantálva (a házak forrásvízről mennek) — VIZET VINNI KELL, fejlámpa, és BNP-terület, tehát tűz csak tilalmon kívül, kijelölt helyen.'},
 {id:'v3', ll:[47.9530,20.4560], n:'Vár-hegy — őskori földvár a gerincen', q:'Vár-hegy Noszvaj', b:'megeri', age:'4+ · a kicsik hordozóban', meta:'sáncok, sziklaodú · kincskereső-sztori',
  d:'A környék legmagasabb gerince, a tetején kilátó helyett háromezer éves földvár sáncai és egy sziklaodú. Nincs kiépítve, nincs tábla, nincs pénztár — pont ezért működik: a hatévesnek ez egy igazi „keressük meg a várat" délelőtt. Útközben az Attila-forrás és az Attila-kút, valamint a felsőtárkányi kőfejtő.',
  w:'Ingyen, bármikor. A sáncok a fűben és a fák közt vannak — előre mondjátok el, mit kerestek, különben csak egy domb marad belőle.'},
 {id:'v4', ll:[47.9550,20.4700], n:'Novaji-kunyhó', q:'Novaji kunyhó Bükk', b:'opc', age:'MINDEN KOR', meta:'esőmenedék a jelzett úton',
  d:'Romos kis menedék a jelzett úton, a síkfőkúti kör visszafelé vezető ágán. Nem program — de jó tudni, hol van, amikor a nyári zivatar tíz perc alatt érkezik.',
  w:'Ingyen, bármikor. A Kövesdi-kilátó köre erre jön vissza a Vasbánya-nyergen át.'}],
 sleep:[
 {n:'Várkúti tisztás ✔ — a tesztelt erdei éjszaka', ll:[47.9494,20.4614], q:'Várkúti Turistaház Noszvaj',
  d:'A turistaház nem foglalható (lásd fent), de a tisztás áll: kulcsosház természetjáró igazolvánnyal (+36 30 955 5060, IV. 1.–X. 31.), Erdei-Tanya sátorral, telefonos egyeztetéssel — vagy saját sátor, ahogy ti csináltátok. Amit vinni kell: VÍZ (nincs garantálva), fejlámpa, meleg réteg (erdei tisztás, 500 m fölött hűvösebb az este), és a tűzgyújtási tilalom aznapi állása. Étterem nincs, bolt nincs, térerő gyenge — ez a lényeg.'},
 {n:'Megközelítés autóval — olvasd el indulás előtt', ll:[47.9450,20.4700], q:'Várkút bekötőút Noszvaj',
  d:'A 25-ös útról kitáblázva, 2,5 km köves-murvás erdei út — gödrös, vízmosásos. MAGASABB HASÚ AUTÓ kell hozzá; alacsony kocsival inkább hagyjátok lent és menjetek gyalog. A noszvaji oldalon a MÁSODIK lehajtónál kell fordulni (a fa esőbeállós buszmegállónál) — az első tábla csak előjelző, sokan ott térnek le fölöslegesen.'}],
 eat:[
 {n:'Semmi — és ez a lényeg', q:'Várkúti Turistaház Noszvaj',
  d:'Nincs büfé, nincs étterem, nincs bolt. Bogrács vagy gázfőző, és minden hozzávaló Bogácsról vagy Noszvajról. Ez az a nap, amikor a vacsora is program.'},
 {n:'Trakta étterem by Nomád — a leereszkedés után', q:'Trakta étterem Noszvaj',
  d:'Síkfőkúton, pont ott, ahol a túra véget ér. A meleg ebéd, ami után mindenki elalszik az autóban.'}]},

{id:'C', letter:'C', title:'Cserépfalu', full:'Cserépfalu és a Hór-völgy — ősember és patak', kicker:'A patakos nap · árnyékban', sub:'Neandervölgyi barlang, a Bükk leghosszabb völgye és egy kaptárkő-kilátó', transit:'Bogácsról 8 perc · Bükkzsérc 6 perc · a Hór-völgy bejárata a falu fölött',
 pois:[
 {id:'c1', ll:[47.9553,20.5307], wk:'hu:Cserépfalu', n:'Suba-lyuk Múzeum és Látogatóközpont', q:'Suba-lyuk Múzeum és Látogatóközpont Cserépfalu', b:'fo', age:'MINDEN KOR · babakocsival', meta:'a Bükk déli kapuja · BNPI pecsételőpont',
  d:'A Hór-völgy bejáratánál álló bázispont: parkoló, mosdó, játszótér, grillezők, ajándékbolt, kerékpárkölcsönzés és a Hórvölgyi Remete Étterem — plusz a kiállítás, benne a Suba-lyuk neandervölgyi leleteinek első számú másolataival. Az első terem a bükkaljai kőkultúra geológiája, a második a leleteké: ⚠️ a második teremben koponya is van, érzékeny gyereknek előre szóljatok. BNPI PECSÉTELŐPONT a Bükki Nemzeti Park 50. évfordulós, 2026 júliusában indult „7+1 pecsétes kaland" gyűjtőjátékához — hozzátok a pecsétfüzetet.',
  w:'A nyitvatartás forrásonként eltér: jellemzően H–Cs 10–16, P–V 9–17 (más listákon P–Szo 10–17, V 10–16) — INDULÁS ELŐTT egy hívás: +36 30 958 9970, vagy bnpi.hu. Múzeumjegy a helyszínen. A parkoló, a játszótér és a tanösvény ettől függetlenül szabadon használható.'},
 {id:'c2', ll:[47.9610,20.5315], wk:'hu:Suba-lyuk', n:'Suba-lyuk tanösvény és barlang', q:'Suba-lyuk barlang Cserépfalu', b:'fo', age:'MINDEN KOR / 4+ · a kicsik kézen', meta:'12 állomás · kék T · ingyen · 2024-ben megújult',
  d:'A könyv legjobb sztorija: 1932-ben itt találták meg egy neandervölgyi nő és egy KB. HÁROMÉVES GYEREK csontjait — plusz barlangi medve, oroszlán, hiéna. A hároméveseteknek ez pontosan a megfelelő méretű borzongás: „pont akkora volt, mint te." A látogatóközponttól tíz perc árnyas séta a völgyben, aztán a 2024-ben felújított, korlátos sziklalépcső a barlanghoz, félúton pihenő-kilátóval a Hór-völgyre. A bejárat 279 méteren, a völgy fölött vagy negyven méterrel.',
  w:'Ingyen, szabadon látogatható, bármikor. ⚠️ A lépcsősor felújítva, de meredek marad, és eső után csúszós — a 2–3 éves fogott kézzel vagy hordozóban. Zárt cipő mindenkinek.'},
 {id:'c3', ll:[47.9700,20.5250], n:'Hór-völgy — a patakos fél nap', q:'Hór-völgy Cserépfalu', b:'fo', age:'MINDEN KOR · alsó szakasz babakocsival', meta:'K+ jelzés · árnyas szekérút · ingyen',
  d:'A Bükk leghosszabb völgye, végig árnyas szekérúttal a patak mellett — ez a ti klasszikus „patak + pokróc" fél napotok, gátépítéssel, kaviccsal, pancsolással. Az alsó szakasz babakocsival és futóbiciklivel is járható; feljebb az Oszlai tájház/pihenő jó fordulópont. Kánikulában ez a könyv legjobb délelőttje.',
  w:'Ingyen, bármikor. Kullancs- és szúnyogriasztó kötelező, váltóruha a patakhoz. Zivatar után a patak látványosabb, de a szekérút sáros.'},
 {id:'c4', ll:[47.9650,20.5180], n:'Szoros–Kőporos szurdok', q:'Szoros-Kőporos Cserépfalu', b:'megeri', age:'MINDEN KOR', meta:'rövid kitérő a tanösvényről · ingyen',
  d:'Rövid kitérő a völgyből: olyan, mintha egy kiszáradt hegyi folyó medrében sétálnátok, két oldalt falakkal. Gyerekkedvenc, mert végig van mit mászni, és mégsem hosszú.',
  w:'Ingyen, bármikor. Zárt cipő — a meder köves.'},
 {id:'c5', ll:[47.9950,20.5200], n:'Oszlai tájház és a szürkemarhák', q:'Oszlai tájház Bükk', b:'opc', age:'MINDEN KOR', meta:'a völgy tisztásán · szezonális',
  d:'Erdészélet-kiállítás a Hór-völgy egyik tisztásán, tavasztól pedig szürkemarha-gulya a Hidegkút-laposán. Jó fordulópont, ha a patakos nap hosszabbra sikerül — vagy a bringás verzió célpontja a látogatóközpontból bérelt kerékpárokkal.',
  w:'Szezonális nyitvatartás — érkezés előtt bnpi.hu vagy a látogatóközpont telefonja.'},
 {id:'c6', ll:[47.9360,20.5400], n:'Cserépfalui Millenniumi-kilátó + Berezdaljai pincesor + Kisamerika', b:'megeri', age:'MINDEN KOR', meta:'autóból rövid sétával · egy csomagban', q:'Millenniumi kilátó Cserépfalu',
  d:'Csete György (Kossuth-díjas) 2000-ben épült kilátója a Berezdi sétány fölött: a formája kaptárkövet formáz, az ablakai a fülkéket. Zárt kőtorony, belső lépcsővel — a bejáratot a régi kerekes kútnál induló, borostyános kőlépcsőn találjátok meg. Alatta a háromsoros Berezdaljai pincesor és a Kisamerika barlanglakások: a nevet gúnyból kapta, mert amíg a tehetősebbek Amerikába mentek, a szegények a tufába vájták a házukat, és csak „Kisamerikáig" jutottak. Autóból rövid sétával az egész csomag bejárható. FIGYELEM: ez a Millenniumi-kilátó, nem a bogácsi (B modul).',
  w:'Ingyen, szabadon. A feljutás rövid, de meredek. Fél délutánra pont elég — és ez a legjobb „csak két óránk van" program a keleti oldalon.'},
 {id:'c7', ll:[47.9450,20.5450], wk:'hu:Kaptárkő', n:'Ördögtorony kaptárkő és tanösvény', q:'Ördögtorony kaptárkő Cserépfalu', b:'megeri', age:'4+', meta:'teljes kör 10 km · 20 állomás · 4,5 óra',
  d:'A Mész-tető oldalában álló, hat méternél magasabb kaptárkő három fülkével — ezt is Ördögtoronynak hívják, mint a cserépváraljai Nagykúpot. A róla elnevezett tanösvény Cserépfalu központjából indul és oda tér vissza: 10 km, 20 állomás, 4,5 óra, és összefűzi a Suba-lyukat, Kisamerikát, a Berezdaljai pincesort és a Millenniumi-kilátót. Gyerekekkel KÉT RÉSZLETBEN érdemes: a déli fele (pincesor–Kisamerika–kilátó–Ördögtorony) önmagában egy jó délután.',
  w:'Ingyen, bármikor. A teljes kör a ti 5 km-es keretetek duplája — ne a hatévesen próbáljátok ki egyben.'},
 {id:'c8', ll:[47.9480,20.5390], n:'Mész-tető és a Fűzér-kő', q:'Mész-tető Cserépfalu', b:'opc', age:'6+', meta:'őskori erődítés nyomai · sziklák a völgyben',
  d:'Őskori erődítés nyomai a Mész-tetőn, feljebb a völgyben a Fűzér-kő sziklái. Kiegészítő, ha az Ördögtorony-tanösvényt amúgy is járjátok — önmagáért nem érdemes odamenni.',
  w:'Ingyen, bármikor. Jelzett útról letérni a védett részeken tilos.'}],
 sleep:[
 {n:'Ezen az oldalon kemping nincs', ll:[47.9422,20.5344], q:'Cserépfalu',
  d:'Cserépfalu–Bükkzsérc vonalon nincs kemping. Ha itt akartok aludni: vendégházak (E-Bike Riders House Bükkzsércen, medencével; Fekete Kos Fogadó ugyanott) — vagy nyolc perc autóval a bogácsi Thermál Kemping, ami úgyis a bázis.'}],
 eat:[
 {n:'Hórvölgyi Remete Étterem — a látogatóközpontnál', q:'Hórvölgyi Remete Étterem Cserépfalu',
  d:'A Suba-lyuk Látogatóközpontnál, Cserépfalu és Bükkzsérc között, játszótérrel a szomszédban — tehát a gyerekek kint vannak, amíg megérkezik az étel. Családi vállalkozás, negyven év konyhai gyakorlattal vezetve: hagyományos magyar konyha, vadételekkel, tavasszal-ősszel teraszon. Hétköznap napi menü. Ez a modul alapértelmezett étterme. A teljes neve Hórvölgyi Remete — a táblákon néha csak „Remete étterem".'},
 {n:'Grillezők és a játszótér a látogatóközpontnál', q:'Suba-lyuk Múzeum és Látogatóközpont Cserépfalu',
  d:'Kijelölt grillezőhelyek a parkolónál — de csak tűzgyújtási tilalmon kívül. Ha tilalom van, marad a hideg piknik a pokrócon: a Hór-völgyben úgyis az a jobb.'},
 {n:'Fekete Kos Fogadó, Bükkzsérc — hat percre', q:'Fekete Kos Fogadó Bükkzsérc',
  d:'Vadételek és helyi fogások egy felújított fogadóban, Rákóczi út 135. Ha a Remete tele van vagy zárva, ez a legközelebbi rendes vacsora.'}]},

{id:'Z', letter:'Z', title:'Bükkzsérc', full:'Bükkzsérc — a csendes kapu', kicker:'A kevés emberes irány', sub:'Kőív a falu fölött, rablóvár a sziklán, tufapincék', transit:'Cserépfaluból 6 perc · Bogácsról 12 perc · gyalog Várkútig 5,5 km / 361 m',
 pois:[
 {id:'z1', ll:[47.9530,20.4920], wk:'hu:Bükkzsérc', n:'Patkó-sziklák és a Hódos-tető (530 m)', q:'Patkó-sziklák Bükkzsérc', b:'fo', age:'4+ · a kicsik hordozóban', meta:'falusi körtúra · ingyen · távcsővel',
  d:'Patkó alakú, mintegy száz méter átmérőjű természetes kőív a falu fölötti Hódos-tető déli oldalán — jura mészkőrétegek eróziója, a Bükkalja egyik legszebb panorámájával (tiszta időben Mezőkövesdig). A tetőn a Bükk egyik rejtélyes őskori földvára áll, ahol a friss kutatás kincsleletet is előhozott: ez a sztori a hatévesnek. Falusi körtúraként gyerekekkel is járható: Kis-Patkó (a régi kőfejtő) → Nagy-Patkó → vissza a falun át. Térképen és listákon néha „Pató-sziklák"-ként szerepel elgépelve — a helyes név Patkó.',
  w:'Ingyen, bármikor. Távcső ajánlott. A peremeknél kézfogás, a kicsik hordozóban; a kőív alatti kőfejtő laposabb, ott lehet leülni enni.'},
 {id:'z2', ll:[47.9720,20.5050], n:'Ódor-vár — a rablóvár a sziklán', q:'Ódorvár Bükkzsérc', b:'fo', age:'6+ · a kicsik hordozóban', meta:'Bükkzsércről ~5,5 km · ingyen',
  d:'Sziklagerincre épült középkori rablóvár romja, lakóbarlanggal és a Dél-Bükk egyik legszebb kilátásával a Hór-völgy fölé — a helyet úgy választották, hogy mindent lássanak, és senki ne érje el őket. A hatéves viszi, a kicsik hordozóban; fent szakadékos peremek, kézfogás kötelező. A vár alatti Hajnóczy-barlang fokozottan védett, csak engedéllyel látogatható — a könyvben NEM program, ne is keressétek.',
  w:'Ingyen, bármikor. ÚTVONALAK: Bükkzsérc központi parkolójából P4 jelzésen ~5,5 km — kb. 4 km után csatlakozik a piros rom jelzés, az visz az Ódor-hegy és az Ódorvár-hegy közti nyeregig, onnan tábla, 100 m a vár. Cserépfalu/Hór-völgy felől: K+ a patak mentén, majd kék rom jelzés ugyanahhoz a nyereghez. A csúcsjelig meredek.'},
 {id:'z3', ll:[47.9330,20.4990], n:'Pincesorok és a Pelyhe Pince-Múzeum', q:'Pelyhe Pince-Múzeum Bükkzsérc', b:'megeri', age:'MINDEN KOR · kóstolóval SZÜLŐPROGRAM', meta:'két tufapincesor · 1,5–2 km a falutól', cash:true,
  d:'Két tufába vájt pincesor a falutól másfél-két kilométerre (Felső pincesor, Baglyosi pincesor). A felső sor leghíresebb pincéje a Pelyhe: az 1865-ben épült présházban a család magánmúzeumot rendezett be — bor- és szőlőfeldolgozó eszközök, régi főzőedények egy háromfunkciós kemence körül, mögötte húszméteres faragott tufapince, az ország első zsűrizett tufapince-faragásaival. A gyerekeknek a kemence és a hideg pince a szám.',
  w:'Előzetes egyeztetéssel biztos, egyébként hétvégén és rendezvénykor nyitnak. KÉSZPÉNZ. Zseblámpa jól jön.'},
 {id:'z4', ll:[47.9370,20.4960], n:'E-Bike Riders House (E-Tekergők Háza)', q:'E-Tekergők Háza Bükkzsérc', b:'megeri', age:'6+ · SZÜLŐPROGRAM', meta:'e-bike bérlés + vezetett túrák · SZÉP-kártya',
  d:'E-bike bérlés és vezetett túrák a faluból (Rákóczi út 231.): a klasszikus az Ódorvár-kör, ~4 óra, 10:00-as indulással, bringa és sisak az árban — Hór-völgy, Suba-lyuk, Zsilibes-forrás, Ódor-vár egy menetben. Egyben családbarát vendégház is, fűtött medencével, jacuzzival, szaunával, 13 főig. Jó ötlet egy szülő-délelőttre, vagy a hatévessel közösen.',
  w:'+36 30 886 4565. Bérlés 1 500 Ft-tól, SZÉP-kártya elfogadva. Vezetett túrára előre jelentkezni kell.'},
 {id:'z5', ll:[47.9450,20.4800], n:'Összekötő túra: Bükkzsérc → Várkút → Síkfőkút', q:'Bükkzsérc Kövesdi-kilátó túra', b:'opc', age:'6+ · hordozós szülőnek is sportos', meta:'a V és Z modul egy napban',
  d:'A nagyobbaknak való nap: Bükkzsércből a Patkó-sziklák alatt fel a Török útra (tiszta időben a Bél-kő és az Őr-kő is látszik), onnan a Kövesdi-kilátó, Várkút, majd meredek leereszkedés Síkfőkútra. Két autó vagy egy sofőr kell hozzá — vagy egy visszaút ugyanazon a nyomon.',
  w:'Ingyen. Ez már a ti 5 km / 200 m-es keretetek fölött van: a hatévessel és egy hordozóval reális, hárommal nem. Víz mindenkinek, a gerincen nincs forrás.'}],
 sleep:[
 {n:'E-Bike Riders House — a medencés vendégház', ll:[47.9370,20.4960], q:'E-Tekergők Háza Bükkzsérc', tel:'+36 30 886 4565',
  d:'Rákóczi út 231. Családbarát vendégház 13 főig: nagy kert grillezővel, fűtött medence, jacuzzi, szauna, a szomszéd házban e-bike kölcsönző. Akkor ez: ha egy hétvégére nagyobb társaság jön, és a bringás nap is program.'},
 {n:'Fekete Kos Fogadó', ll:[47.9380,20.4950], q:'Fekete Kos Fogadó Bükkzsérc', tel:'+36 30 546 4460',
  d:'Rákóczi út 135. Felújított fogadó a hegyek alatt: régi szárny 4 db kétágyas szobával, új szárny 11 kétágyassal, korlátlan wellness (medence, jacuzzi, szauna). Étterem is — a szállás és a vacsora ugyanaz a cím.'}],
 eat:[
 {n:'Fekete Kos Fogadó', q:'Fekete Kos Fogadó Bükkzsérc',
  d:'Rákóczi út 135., +36 49 423 466 / +36 30 546 4460. Vadételek és helyi fogások — a falu rendes étterme, és a wellness is itt van, ha esik.'},
 {n:'Hórvölgyi Remete Étterem — hat percre', q:'Hórvölgyi Remete Étterem Cserépfalu',
  d:'Cserépfalu és Bükkzsérc között, a látogatóközpontnál. Játszótérrel — a túra utáni ebéd terepe.'},
 {n:'Pincesori kóstolók', q:'Pelyhe Pince-Múzeum Bükkzsérc',
  d:'Felső pincesor és Baglyosi pincesor: bor, pogácsa, hideg pince. Készpénz, egyeztetéssel.'}]},

{id:'K', letter:'K', title:'Kitérők', full:'Kitérők és esőnap — kővadászat és fedett víz', kicker:'Wildcard modul', sub:'Kaptárkövek totyogó-léptékben, óriáskúpok, és a B-terv, ha esik', transit:'Szomolya 10 perc Bogácsról · Cserépváralja 12 perc · Mezőkövesd/Zsóry 15 perc',
 pois:[
 {id:'k1', ll:[47.8923,20.4786], wk:'hu:Szomolya', n:'Szomolyai kaptárkövek tanösvény', q:'Szomolyai kaptárkövek', b:'fo', age:'MINDEN KOR · babakocsi nem, de totyogó igen', meta:'30–40 perces kör · ingyen · korlátos lépcsők',
  d:'Az ország leggazdagabb kaptárkő-csoportja a Vén-hegy oldalában, a Kaptár-völgyben: kúp alakú tufatornyok, beléjük faragott rejtélyes fülkékkel — a legszebb a Királyszéke, ami egy nagy boltozatos kemencére hasonlít, és önmagában 48 fülkét visel. Hogy mire szolgáltak, máig vitatott: sziklaméhészet, urnás temetkezés vagy kultikus szerep. 2019 óta acél járdákkal és korlátos lépcsőkkel kiépítve — ez pont bölcsis-ovis lábhossz, és a legjobb „mindenki fáradt" program a könyvben. Szomolya mellesleg a rövidszárú fekete cseresznye faluja: júniusban külön ok visszajönni.',
  w:'Ingyen, egész évben szabadon. A Rákóczi út végi murvás parkolóból ~150 m a tanösvény kezdete, a kör 30–40 perc kényelmesen. Esőben a parkoló sáros. A parkolónál kilátópont: Bükk, Mátra, Alföld.'},
 {id:'k2', ll:[47.9250,20.5787], wk:'hu:Cserépváralja', n:'Cserépváralja: Nagykúp, Kiskúp és Cserépvár', q:'Nagykúp Cserépváralja', b:'megeri', age:'4+', meta:'a Mangó-tetőn · fokozottan védett terület',
  d:'A Nagykúp hazánk legmonumentálisabb kaptárköve: tizenhat méter, huszonöt fülke — a helyiek ezt is Ördögtoronynak hívják (a cserépfalui után a második). Mellette a filigrán Kiskúp, a Mangó-tetőn; a Nagykúp tetejéről a Csordás-völgyre látni. Fölötte a középkori Cserépvár romjai. A faluból indul a Kő-völgy digitális tanösvény: offline GPS-es mobilapp és QR-kódok — rokonlélek ezzel a könyvvel.',
  w:'Ingyen. ⚠️ FOKOZOTTAN VÉDETT TERÜLET: a jelzett útról letérni tilos. Infopont szezonálisan az Alkotmány úton, a Cserépvár étteremnél.'},
 {id:'k3', ll:[47.8330,20.6060], wk:'hu:Mezőkövesd', n:'ESŐNAP — Zsóry Gyógy- és Strandfürdő', q:'Zsóry Gyógy- és Strandfürdő Mezőkövesd', b:'megeri', age:'MINDEN KOR', meta:'~15 perc Bogácstól · nagy fedett rész',
  d:'A nagy testvér: jóval nagyobb fürdő, komoly fedett résszel, negyed órára Bogácstól. Akkor jön elő, ha esik, vagy ha a bogácsi felújítások miatt kevés a medence — vagy ha egyszerűen egy egész napot akartok vízben tölteni.',
  w:'Aktuális árak és nyitvatartás: zsoryfurdo.hu. A fürdő melletti Zsóry Kemping a tartalék alvóhely, ha a bogácsi telt.'},
 {id:'k4', ll:[47.8130,20.5820], wk:'hu:Mezőkövesd', n:'Matyó örökség, Mezőkövesd', q:'Matyó Múzeum Mezőkövesd', b:'opc', age:'6+ · SZÜLŐPROGRAM', meta:'esőnap-kiegészítés · fél óra–egy óra',
  d:'Hímzés, viselet, matyó ház — rövid, fedett, és pont belefér a Zsóry-nap elé vagy után. A kicsiknek nem program, a hatévesnek fél óra erejéig érdekes.',
  w:'Nyitvatartás a helyszín honlapján. Csak esős napra tervezzétek.'}],
 sleep:[
 {n:'Zsóry Kemping, Mezőkövesd — a tartalék', ll:[47.8330,20.6060], q:'Zsóry Kemping Mezőkövesd',
  d:'A Zsóry fürdő mellett. Akkor jön szóba, ha a bogácsi Thermál telt, vagy ha eleve egy nagy fürdős napot terveztek. Adatok és árak: zsoryfurdo.hu.'}],
 eat:[
 {n:'Cserépvár Étterem, Cserépváralja', q:'Cserépvár étterem Cserépváralja', rating:4.3,
  d:'Alkotmány út 42. A falu egyetlen rendes étterme, és a kaptárkő-nap logikus ebédje: hagyományos magyar fogások, modern kitérőkkel. Mellette a szezonális turisztikai infopont.'},
 {n:'Grill Terasz Étterem — a Zsóry főbejáratánál', q:'Grill Terasz Étterem Mezőkövesd',
  d:'Ötven méterre a fürdő főbejáratától. Az esőnap ebédje, hogy ne kelljen kocsiba ülni.'},
 {n:'Boglárka Panzió Étterem, Zsóry', q:'Boglárka Panzió Mezőkövesd',
  d:'Háromszáz méterre a Zsóry fürdőtől: családi vezetés, házias ízek, bőséges adagok, egész évben. A csendesebb változat a Grill Terasz helyett.'},
 {n:'Kispipa és Rózsa Étterem, Mezőkövesd', q:'Rózsa Étterem Mezőkövesd',
  d:'Két megbízható városi cím, ha a fürdő után még bevásároltok is: a Kispipa házias és családias, a Rózsa a matyó hagyományt keveri modern konyhával.'},
 {n:'Szomolyai fagyi és a cseresznye', q:'Szomolya',
  d:'A kaptárkő-kör után a faluban. Júniusban a rövidszárú fekete cseresznye a fő attrakció — az árusok az út mellett állnak.'}]}],

// A túralista: ugyanazok a helyek, de a lábak nyelvén — idővel, távval,
// szinttel, hogy az 5 km / 200 m-es keret ellenőrizhető legyen indulás előtt.
hikes:[
{id:'t1', ll:[47.9483,20.4627], n:'1 · Kövesdi-kilátó Síkfőkútról ✔', go:'ingyenes parkoló a Hotel Síkfőkút mögött, a Kánya-patak völgyén felfelé', time:'2,5–3 óra · 3,7 km oda (kör: 7,3 km)', elev:'+290 m', diff:'konnyu', kid:'MINDEN KOR · a kicsi hordozóban', q:'Kövesdi-kilátó Noszvaj'},
{id:'t2', ll:[47.9610,20.5315], n:'2 · Suba-lyuk tanösvény', go:'a Suba-lyuk Látogatóközpont parkolójából, kék T jelzésen', time:'1–1,5 óra · 12 állomás', elev:'+50 m, de meredek lépcsősorral', diff:'konnyu', kid:'MINDEN KOR · a lépcsőn fogott kézzel', q:'Suba-lyuk barlang Cserépfalu'},
{id:'t3', ll:[47.9700,20.5250], n:'3 · Hór-völgyi szekérút a patak mentén', go:'a látogatóközponttól K+ jelzésen felfelé, ameddig jólesik', time:'fél nap, szabadon', elev:'alig érzékelhető', diff:'konnyu', kid:'MINDEN KOR · alsó szakasz babakocsival', q:'Hór-völgy Cserépfalu'},
{id:'t4', ll:[47.8923,20.4786], n:'4 · Szomolyai kaptárkő-kör', go:'Rákóczi út végi murvás parkoló, 150 m a tanösvény', time:'30–40 perc · kör', elev:'sík, korlátos lépcsőkkel', diff:'konnyu', kid:'MINDEN KOR · totyogóval is', q:'Szomolyai kaptárkövek'},
{id:'t5', ll:[47.9530,20.4920], n:'5 · Patkó-sziklák falusi köre', go:'Bükkzsérc központjából: Kis-Patkó → Nagy-Patkó → vissza a falun át', time:'2,5–3 óra · kör', elev:'+230 m (Hódos-tető 530 m)', diff:'konnyu', kid:'4+ · a kicsik hordozóban', q:'Patkó-sziklák Bükkzsérc'},
{id:'t6', ll:[47.9360,20.5400], n:'6 · Ördögtorony-tanösvény déli fele', go:'Cserépfalu központjából: pincesor → Kisamerika → Millenniumi-kilátó → Ördögtorony', time:'3 óra · a 10 km-es kör fele', elev:'+180 m', diff:'konnyu', kid:'4+', q:'Millenniumi kilátó Cserépfalu'},
{id:'t7', ll:[47.9720,20.5050], n:'7 · Ódor-vár Bükkzsércből', go:'a központi parkolóból P4, majd piros rom jelzés a nyeregig', time:'4–4,5 óra · 5,5 km oda', elev:'+361 m', diff:'kozepes', kid:'6+ · fent kézfogás, szakadékos perem', q:'Ódorvár Bükkzsérc'},
{id:'t8', ll:[47.9450,20.4800], n:'8 · Bükkzsérc → Kövesdi-kilátó → Várkút → Síkfőkút', go:'a Patkó-sziklák alatt fel a Török útra, végig a gerincen', time:'5–6 óra · egész nap', elev:'+400 m, a végén meredek le', diff:'kozepes', kid:'6+ · hordozós szülőnek is sportos', q:'Bükkzsérc Kövesdi-kilátó túra'}],

// A fél napok: amikor nincs kedv autóba ülni, vagy esik.
plans:[
{id:'p1', ll:[47.9052,20.5300], n:'Délután a Thermál Kempingben ✔', b:'fo', age:'MINDEN KOR', meta:'a fürdős bázis · nulla kilométer', q:'Thermál Kemping Bogács',
 steps:['gyógyvizes medencék 6:00–22:00 — a kempingdíjban benne','csúszdapark és vízi játszótér a fürdő nyitvatartásában','sütögetés a kijelölt helyen (csak tilalmon kívül!)','fagyi és patakparti séta a faluban','szombaton éjszakai fürdőzés, váltásban'],
 d:'A legkényelmesebb fél nap a könyvben: a sátortól a medencéig ötven méter, és a gyógyvizes medencék hattól huszonkettőig a kempingdíj részei. Reggel a gyerekek a csúszdaparkban, délben árnyék a fák alatt, este sütögetés — autó nem indul.',
 w:'Hosszabbító kell az áramhoz. Bevásárlás a faluban; a Vadvirág Étterem és az Öreg Malom öt percre. Tűzrakás előtt a tilalom aznapi állása: erdotuz.hu.'},
{id:'p2', ll:[47.9494,20.4614], n:'Este a várkúti tisztáson ✔', b:'fo', age:'MINDEN KOR', meta:'az erdei éjszaka · nulla szolgáltatás', q:'Várkúti Turistaház Noszvaj',
 steps:['felérkezés délután, amíg világos van (a bekötőút gödrös)','Kövesdi-kilátó napnyugtára — pár perc a tisztásról','vacsora bográcsból vagy gázfőzőn; víz hozott','sötétedés után csillagok, fejlámpa, semmi más','reggel Vár-hegy: az őskori sáncok megkeresése'],
 d:'A könyv másik bevált éjszakája, és a teljes ellentéte a fürdősnek: nincs büfé, nincs bolt, nincs térerő, a víz sincs garantálva. Pontosan ezért működik. A kilátó pár perc a tisztásról, a naplemente onnan a nap zárása.',
 w:'⚠️ A turistaház nem foglalható, a telek eladó — a tisztáson kulcsosház (+36 30 955 5060, IV. 1.–X. 31., természetjáró igazolvánnyal) vagy az Erdei-Tanya sátorral, mindkettő KÖTELEZŐ telefonos egyeztetéssel. Vizet vinni, fejlámpa, meleg réteg. Tűz csak tilalmon kívül, kijelölt helyen (BNP-terület). Magasabb hasú autó, a második lehajtónál kell fordulni.'},
{id:'p3', ll:[47.9330,20.4665], n:'Esőnap-terv — mi megy zárt ajtók mögött', b:'megeri', age:'MINDEN KOR', meta:'négy fedett program, sorrendben', q:'De la Motte kastély Noszvaj',
 steps:['Bogács: fedett élménymedence (hétköznap a kültéri jegyben benne van)','Noszvaj: De la Motte-kastély — sze–vas 11–16, szo 11–14, telefon előtte','Cserépfalu: Suba-lyuk kiállítás + Hórvölgyi Remete ebéd','Mezőkövesd: Zsóry fedett része, ha egész napos az eső','tartalék: Noszvaji barlanglakások — kőbe vájva, fedett-közeli'],
 d:'A Bükkalja szerencséje, hogy esőben sem üresedik ki. A négy fedett program egymástól legfeljebb húsz percre van, tehát menet közben is át lehet rendezni a napot — csak a kastély kötött, mert hétfőn és kedden zárva, és a napi nyitvatartása gyakran módosul.',
 w:'A kastély indulás előtt ellenőrzendő: +36 30 147 0492. A barlanglakásoknál CSAK KÉSZPÉNZ. Zsóry: zsoryfurdo.hu.'},
{id:'p4', ll:[47.9075,20.5255], n:'Csak két óránk van', b:'megeri', age:'MINDEN KOR', meta:'négy program, mind 2 óra alatt', q:'Bogácsi kilátó Szomolyai utca',
 steps:['Bogácsi Millenniumi-kilátó — 2 perc a kocsitól, ingyen','Szomolyai kaptárkövek — 150 m séta, 30–40 perces kör','Noszvaji barlanglakások — 1 óra, készpénz','Cserépfalui Millenniumi-kilátó + Kisamerika — autóból rövid sétával','Hór-völgy alsó szakasza — ameddig jólesik, aztán vissza'],
 d:'A könyv legfontosabb listája, mert a legtöbb szabad délután ilyen: van két óra, nincs energia tervezni. Mind az öt program két órán belül lezavarható, mind ingyenes vagy majdnem, és egyik sem igényel előzetes hívást — kivéve a barlanglakások készpénzét.',
 w:'Készpénz a barlanglakásokhoz. A többi ingyen. Ha esik, marad a fürdő fedett része.'}],

scenarios:[],

today:[
{id:'d1', ids:['c3','b1','c4','p1'], c:'Kánikula', icon:'ph-thermometer', r:'Délelőtt a Hór-völgy árnyas szekérútja és a patak, délután a bogácsi fürdő. A Szoros–Kőporos szurdok végig hűvös. Ha nincs kedv autózni: kempingnap a gyógyvizes medencékkel.'},
{id:'d2', ids:['p3','b1','n2','c1','k3','n1','k4'], c:'Esik', icon:'ph-cloud-rain', r:'Fedett élménymedence Bogácson (hétköznap a kültéri jegyben benne van) → De la Motte-kastély, sze–vas, telefon előtte → Suba-lyuk kiállítás + Remete ebéd → egész napos esőre a Zsóry. Tartalék: barlanglakások.'},
{id:'d3', ids:['v1','v2','p2'], c:'Erdőt akarunk, embert nem', icon:'ph-tent', r:'Várkút: felérkezés délután, Kövesdi-kilátó naplementére, bogrács, csillagok. A ház nem foglalható — kulcsosház vagy sátor, mindkettő telefonos egyeztetéssel. Vizet vinni.'},
{id:'d4', ids:['k1','b3','b4'], c:'Mindenki fáradt', icon:'ph-moon-stars', r:'Szomolyai kaptárkő-kör: 150 m a parkolótól, 30–40 perc korlátos lépcsőkkel, ingyen. Utána bogácsi kilátó két perc sétával és fagyi a faluban. Ez is egy nap — és általában ez marad meg.'},
{id:'d5', ids:['v1','z1','z2','z5'], c:'Hűvös, szép idő', icon:'ph-mountains', r:'A kilátós nap: Kövesdi-kilátó Síkfőkútról (3,7 km, +290 m) vagy a Patkó-sziklák köre Bükkzsércből. Ha a hatéves formában van és van egy egész napotok: Ódor-vár, 5,5 km, +361 m.'},
{id:'d6', ids:['n3','n1','n2','n5'], c:'Péntek', icon:'ph-basket', r:'Patakparti Piac Síkfőkúton 7–18: lekvár, sajt, méz. Utána a noszvaji falu-nap — barlanglakások, kastély, MeseÚt —, vagy fel a Kánya-patak völgyén a kilátóhoz.'},
{id:'d7', ids:['p4','c6','b3','k1','n1'], c:'Csak fél délután van', icon:'ph-clock', r:'Cserépfalui Millenniumi-kilátó + Kisamerika autóból, rövid sétával. Vagy a bogácsi kilátó, a szomolyai kaptárkő-kör, esetleg a barlanglakások — mind két óra alatt.'},
{id:'d8', ids:['z2','k2','v3'], c:'Rom és kincskeresés kell', icon:'ph-castle-turret', r:'A nagyobbnak Ódor-vár a sziklán. Rövidebbre Cserépvár és a Nagykúp a Mangó-tetőn. Nulla kilométerre a várkúti Vár-hegy őskori sáncai — ott tényleg keresni kell.'},
{id:'d9', ids:['b2','z3','n6'], c:'Bor kell, váltásban', icon:'ph-wine', r:'Bogácson a Cserépi úti pincesor, Csáter Apó hordós boraival, naponta 9:30–18:30. Bükkzsércen a Pelyhe Pince-Múzeum a húszméteres faragott tufapincével. Noszvajon Thummerer, de csak bejelentkezéssel. Mindhárom KÉSZPÉNZ.'},
{id:'d10', ids:['z4','c5','c7'], c:'Bringázni akarunk', icon:'ph-bicycle', r:'E-bike bérlés Bükkzsércen (+36 30 886 4565, 1 500 Ft-tól, SZÉP-kártya) vagy sima kerékpár a Suba-lyuk Látogatóközpontban. Az Ódorvár-kör ~4 óra, 10:00-kor indul; a rövidebb verzió a Hór-völgy sík szekérútja az Oszlai tájházig.'},
{id:'d11', ids:['b1','p1','b2'], c:'Ott is akartok aludni', icon:'ph-bathtub', r:'Thermál Kemping a fürdő kerítésén belül (a díjban a gyógyvizes medencék 6–22-ig) vagy a várkúti tisztás, ha erdő kell. A kettő között tizenöt perc van — helyben is eldönthető.'}],

essentials:[
{n:'Készpénz-boríték', d:'A noszvaji barlanglakások CSAK KÉSZPÉNZT fogadnak el, kártyát nem — és ugyanez igaz a pincesori kóstolókra (Csáter Apó Bogácson, Pelyhe Bükkzsércen), a piacra és a legtöbb büfére. A kastély is jellemzően készpénzes. A fürdőben és a kempingben viszont kártya és SZÉP-kártya is megy: ez a két világ egymástól tizenöt percre van, tehát a boríték mindig legyen a kesztyűtartóban.'},
{n:'Tűzgyújtási tilalom — minden bogrács előtt', d:'2026. június 25-től országos tűzgyújtási tilalom volt érvényben, és a NÉBIH naponta dönt a következő napról. Tilalom idején erdőben, erdő szélétől 200 méteren belül, valamint út- és vasútszéli növényzetben tilos tüzet gyújtani — a kijelölt tűzrakóhelyeken is. Ez érinti a várkúti tisztást (BNP-terület!), a Hór-völgyi grillezőket és a kempingek sütögetőit is. Ellenőrzés indulás reggelén: erdotuz.hu vagy katasztrofavedelem.hu.'},
{n:'Két hívás indulás előtt', d:'A De la Motte-kastély napi nyitvatartása gyakran módosul (alapból sze–vas 11–16, szombaton 11–14, hétfő-kedd zárva): +36 30 147 0492. A várkúti alvás pedig kizárólag telefonos egyeztetéssel megy — a turistaház nem foglalható, a kulcsosház gondnoka +36 30 955 5060, az Erdei-Tanya elérhetőségei régiek. Ez a két hívás menti meg a napot.'},
{n:'A várkúti bekötőút', d:'A 25-ös útról kitáblázva 2,5 km köves, vízmosásos erdei út vezet fel — magasabb hasú autó kell hozzá, alacsonnyal inkább hagyjátok lent a kocsit és menjetek gyalog. A noszvaji oldalon a MÁSODIK lehajtónál kell fordulni, a fa esőbeállós buszmegállónál; az első tábla csak előjelző. Sötétben ne először menjetek fel.'},
{n:'Víz Várkútra, fürdőcucc mindenhová', d:'A várkúti tisztáson a víz nincs garantálva (a házak forrásvízről mennek), tehát vizet vinni kell, mindenkinek. A másik irányban viszont a fürdőcucc és a patakos szandál álljon állandóan a csomagtartóban: Bogács és a Hór-patak bármelyik napba beleeshet, és általában bele is esik.'},
{n:'Hordozó és zárt cipő a kicsiknek is', d:'A Suba-lyuk sziklalépcsője felújítva is meredek és eső után csúszós; a barlanglakások terepe egyenetlen, babakocsival nem járható; a Patkó-sziklák és az Ódor-vár peremei szakadékosak. A kétévesnek háti hordozó, a hároméves kézen — és zárt cipő mindkettőn, papucsban egyik hely sem működik.'},
{n:'BNPI pecsétfüzet — a gyerek-motiváció', d:'A Bükki Nemzeti Park Igazgatóság 50 éves, és 2026 júliusától fut a „7+1 pecsétes kaland" gyűjtőjáték a bemutatóhelyein. A Suba-lyuk Múzeum és Látogatóközpont pecsételőpont — a hatévesnek ez tud egy egész hétvégét összefogni. A füzetet az első bemutatóhelyen kérjétek el.'},
{n:'Kullancs, szúnyog, hosszabbító', d:'A Hór-völgy patakparti szekérútja kullancsos és szúnyogos terep: riasztó és esti átvizsgálás. A Thermál Kempingben az áram az árban van, de HOSSZABBÍTÓT NEM ADNAK, és a vételezőhely húsz méterenként áll — enélkül nincs hűtő és nincs töltés.'},
{n:'A könyv egyetlen szabálya', d:'Ez a házi terep: nem kell teljesíteni, mert jövő héten is itt lesz. Egy program egy nap, a többi ráadás. Ha kétségetek van, menjetek a patakhoz vagy a fürdőbe — egy kilátó kimaradhat, egy vár kimaradhat, a fél nap a vízben nem. És Eger szándékosan nincs a könyvben: az egy másik nap.'}],

checklist:[
{id:'cl1', t:'Készpénz-boríték — barlanglakások, pincék, piac, büfék (kártyát nem fogadnak)'},
{id:'cl2', t:'Kártya + SZÉP-kártya — a fürdőhöz, a kempinghez és az éttermekhez'},
{id:'cl3', t:'Fürdőcucc és patakos szandál a csomagtartóban, állandóan'},
{id:'cl4', t:'Háti hordozó a kettőnek + zárt cipő mindkét kicsinek'},
{id:'cl5', t:'Víztartalék és fejlámpa — Várkútra, ahol nincs garantált víz'},
{id:'cl6', t:'Hosszabbító — a Thermál Kemping áramvételezőjéhez (nem adnak)'},
{id:'cl7', t:'Kullancs- és szúnyogriasztó — a Hór-völgyhöz'},
{id:'cl8', t:'Távcső — Patkó-sziklák, Kövesdi-kilátó, a két Millenniumi-kilátó'},
{id:'cl9', t:'Zseblámpa — pincék, esti kemping, várkúti tisztás'},
{id:'cl10', t:'Pokróc + két váltás pótruha — a patakos fél napokhoz'},
{id:'cl11', t:'BNPI pecsétfüzet — a 7+1 pecsétes kalandhoz (Suba-lyuk Látogatóközpont)'},
{id:'cl12', t:'Tűzgyújtási tilalom ellenőrizve ma reggel — erdotuz.hu'},
{id:'cl13', t:'Két hívás elintézve: kastély (+36 30 147 0492) és a várkúti alvás (+36 30 955 5060)'}]
};

// Kép-tartalék. Amelyik helyszínhez nincs saját fotó, az a településének
// Wikipédia-vezérképét kapja szürke ikon helyett — a vázban a sorrend: helyi
// fotó → rögzített Wikimedia-fájl → Wikipédia-kép → ikon. Az egyedi wk mindig
// erősebb, mint az itteni alapértelmezés (pl. c2 = Suba-lyuk).
const WK_DEFAULT = { B: 'hu:Bogács', N: 'hu:Noszvaj', V: 'hu:Noszvaj',
                     C: 'hu:Cserépfalu', Z: 'hu:Bükkzsérc', K: 'hu:Szomolya' };
// A K modul három falura terül szét, ezért az étkezőhelyei külön kapnak képet.
const WK_EAT = { K: ['hu:Cserépváralja', 'hu:Mezőkövesd', 'hu:Mezőkövesd', 'hu:Mezőkövesd', 'hu:Szomolya'] };
data.modules.forEach(m => {
  const def = WK_DEFAULT[m.id];
  if (!def) return;
  (m.pois || []).forEach(x => { if (!x.wk) x.wk = def; });
  (m.sleep || []).forEach(x => { if (!x.wk) x.wk = def; });
  (m.eat || []).forEach((x, i) => { if (!x.wk) x.wk = (WK_EAT[m.id] || [])[i] || def; });
});
data.hikes.forEach(h => { if (!h.wk) h.wk = 'hu:Bükk-vidék'; });

data.itineraries = [
{id:'egynap', name:'Egy szabad nap', tag:'0 éj · hazaalvás', note:'A leggyakoribb eset: van egy napotok, és estére otthon akartok lenni. Egy fő program, egy étterem, egy levezetés — semmi több.',
 days:[
 {d:1, wd:'bármelyik nap', t:'Hór-völgy és a fürdő', mod:'C', drive:'Egerből ≈ 35 perc · a két helyszín közt 8 perc', from:'Eger', stops:['c1','c2','c3','b1'], opts:['c4','b4','k1'], sleep:'otthon', sleepQ:'Eger', tip:'Reggel a Suba-lyuk, amíg hűvös és üres; ebéd a Hórvölgyi Remeténél a játszótér mellett; délután a patak vagy a fürdő — a délutáni jegy olcsóbb. Ha mindenki elfárad: Szomolya, 30 perc, hazafelé útba esik.'}]},

{id:'furdos', name:'Egy éjszaka a fürdőnél', tag:'1 éj · Thermál Kemping ✔', note:'A bevált verzió: a kemping a fürdő kerítésén belül van, tehát a program és az alvóhely ugyanaz a hely. Egy fél napos kitérő, semmi több.',
 days:[
 {d:1, wd:'szombat', t:'Beállás és fürdő', mod:'B', drive:'Egerből ≈ 30 perc', from:'Eger', stops:['b1','p1'], opts:['b2','b3','b4'], sleep:'Thermál Kemping, Bogács', sleepQ:'Thermál Kemping Bogács', tip:'Délelőtt beállás, délután fürdő — a gyógyvizes medencék hattól huszonkettőig a kempingdíjban vannak. Este sütögetés (ha nincs tilalom) vagy a Vadvirág. Szombaton éjszakai fürdőzés, váltásban.'},
 {d:2, wd:'vasárnap', t:'Kaptárkövek és haza', mod:'K', drive:'Bogács → Szomolya 10 perc → Eger 25 perc', from:'Thermál Kemping Bogács', stops:['k1','b3'], opts:['k2','b2'], sleep:'otthon', sleepQ:'Eger', tip:'Bontás után a szomolyai kaptárkő-kör: 150 m a parkolótól, 30–40 perc, ingyen — pont annyi, amennyit egy hazaút elbír. Fagyi a faluban, aztán haza.'}]},

{id:'erdei', name:'Erdei éjszaka Várkúton', tag:'1 éj · a tesztelt kedvenc ✔', note:'A könyv másik bevált éjszakája: nulla szolgáltatás, saját víz, saját vacsora. A ház nem foglalható — a tisztáson alszotok, egyeztetéssel.',
 days:[
 {d:1, wd:'péntek', t:'Piac, felmenetel, naplemente', mod:'V', drive:'Eger → Síkfőkút 25 perc · a bekötőút 2,5 km köves', from:'Eger', stops:['n3','v1','v2','p2'], opts:['v3','n1'], sleep:'Várkúti tisztás (kulcsosház vagy sátor)', sleepQ:'Várkúti Turistaház Noszvaj', tip:'Pénteken a Patakparti Piac 7–18 Síkfőkúton — onnan a vacsora. Felérkezés délután, amíg világos: a bekötőút gödrös, magasabb hasú autó kell, a MÁSODIK lehajtónál kell fordulni. Kilátó naplementére. Vizet vinni!'},
 {d:2, wd:'szombat', t:'Vár-hegy, leereszkedés, ebéd', mod:'V', drive:'gyalog le Síkfőkútra, onnan Eger 25 perc', from:'Várkúti Turistaház Noszvaj', stops:['v3','v1'], opts:['v4','n1','n2'], sleep:'otthon', sleepQ:'Eger', tip:'Reggel a Vár-hegy őskori sáncai — előre mondjátok el, mit kerestek. Lefelé a Vasbánya-nyergen és a Novaji-kunyhón át, ebéd a Traktában Síkfőkúton. Ha marad erő: barlanglakások, készpénzzel.'}]},

{id:'hetvege', name:'Hosszú hétvége', tag:'2 éj · fürdő + erdő', note:'Mindkét bázis, egy költözéssel: a fürdős éjszaka után az erdei. Három nap alatt a könyv gerince bejárható anélkül, hogy bárhol rohanni kellene.',
 days:[
 {d:1, wd:'péntek', t:'Piac, Noszvaj, beállás Bogácson', mod:'N', drive:'Eger → Síkfőkút 25 perc → Noszvaj 5 → Bogács 15', from:'Eger', stops:['n3','n1','n2'], opts:['n4','b2'], sleep:'Thermál Kemping, Bogács', sleepQ:'Thermál Kemping Bogács', tip:'Reggel a Patakparti Piac, délelőtt a barlanglakások (KÉSZPÉNZ), délután a kastély — de előtte telefon, mert a napi nyitvatartás módosul. Estére beállás Bogácson.'},
 {d:2, wd:'szombat', t:'Ősember, patak, fürdő', mod:'C', drive:'Bogács → Cserépfalu 8 perc, oda-vissza', from:'Thermál Kemping Bogács', stops:['c1','c2','c3'], opts:['c4','c6','b1'], sleep:'Thermál Kemping, Bogács', sleepQ:'Thermál Kemping Bogács', tip:'Reggel a Suba-lyuk, amíg hűvös; ebéd a Remeténél; délután a patak. Vissza a kempingbe négyre — a gyógyvizes medencék tízig mennek, és szombaton éjszakai fürdőzés is van.'},
 {d:3, wd:'vasárnap', t:'Fel Várkútra, vagy haza a kilátón át', mod:'V', drive:'Bogács → Síkfőkút 20 perc · a bekötőút 2,5 km köves', from:'Thermál Kemping Bogács', stops:['v1','v2'], opts:['v3','z1','k1'], sleep:'Várkúti tisztás vagy otthon', sleepQ:'Várkúti Turistaház Noszvaj', tip:'Ha van még egy éjszaka: fel a tisztásra, kilátó naplementére, vizet vinni. Ha nincs: Síkfőkútról a Kövesdi-kilátó oda-vissza, ebéd a Traktában, és hazafelé Szomolya vagy a Patkó-sziklák.'}]}
];

window.registerTrip({
  id: 'bukkalja',
  // Content version — bump on every content change; version.json mirrors it.
  version: '2026-08-29.1',
  date: '2026-08-28',
  name: 'Bükkalja',
  period: 'a házi terep',
  title: 'Bükkalja — a házi terep',
  kicker: 'Noszvaj · Bogács · Cserépfalu · Bükkzsérc · 6 modul',
  tagline: 'Nem útvonal, hanem vadászterület: 20–30 percre lévő mikrokalandok 0–2 éjszakával. Fürdős bázis Bogácson, erdei éjszaka Várkúton, ősember a Hór-völgyben, kaptárkövek mindenütt. Eger szándékosan kimarad.',
  cover: 'photos/bukkalja/cover.webp',
  verified: 'Adatok ellenőrizve 2026. augusztus 28-án · a fürdőárak, a kastély nyitvatartása és a tűzgyújtási tilalom a leggyorsabban változó adatok',
  origin: 'Eger',
  // A két kipipált modul kapja a petrolkék betűt: a fürdős bázis és az erdei éj.
  accentModules: ['B', 'V'],
  extraGroup: { letter: '★', title: 'Túrák és fél napok', sub: 'Az 5 km / 200 m-es keret — és mi van, ha nincs kedv autóba ülni' },
  mapIntro: 'Négy falu egy háromszögben, egymástól 5–15 percre: Noszvaj nyugaton a kastéllyal és a barlanglakásokkal, Bogács délen a fürdővel és a kempinggel, Cserépfalu keleten a Hór-völgy kapujával, Bükkzsérc középen a csendes irány. Fölöttük a Dél-Bükk: Várkút és a Kövesdi-kilátó Noszvaj fölött, Ódor-vár Cserépfalu és Bükkzsérc között. Kitérőnek Szomolya (kaptárkövek) és Cserépváralja (Nagykúp) délen, esőnapra Mezőkövesd és a Zsóry. Egerből minden 20–35 perc, és a modulok között sosem több 15-nél — ezért nem kell költözni ahhoz, hogy máshol legyetek.',
  maps: [],
  photoDir: 'photos/bukkalja/',
  // A borítókép a várkúti tisztásról készült — a V modul alvóhelyénél és a
  // turistaháznál is ez látszik. A többi helyszín a Wikipédia képére esik
  // vissza (wk mező), végül a „fotó hamarosan" placeholderre.
  photos: {
    v2: 'cover.webp',
    'V-s0': 'cover.webp',
    p2: 'cover.webp'
  },
  wikiFiles: {},
  data: data
});

})();
