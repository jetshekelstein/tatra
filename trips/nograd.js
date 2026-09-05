// Trip: Karancs–Medves — Kazár, Salgó, Somoskő és a kitérők (Nógrád).
//
// Forrás a "nograd_karancs_medves" brief (2026. szeptember). A brief maga jelölte
// meg `check: true`-val, amit nem tudott friss forrásból megerősíteni; ezeket
// 2026. 09. 05-én nyilvános forrásokból ellenőriztük, és ahol a brief tévedett
// vagy homályos volt, itt az ellenőrzött adat áll:
//
//   * Somoskő vára: hétköznap 9–16, hétvégén 9–18 (a brief "kb. 9–17"-et írt);
//     a belépő forintban is fizethető, a 2023-as ár 800/400 Ft volt — az euró-
//     becslés (~2 €) nagyságrendileg stimmel, de forinttal is mehettek.
//   * Bányamúzeum (Dornyay Béla Múzeum Bányászati Kiállítóhelye): kedd–vasárnap
//     8–16, az utolsó csoport 15:00-kor indul; felnőtt 3 500 Ft, kedvezményes
//     2 250 Ft — és a kedvezmény jár annak a szülőnek, aki legalább két 18 év
//     alatti gyereket kísér. Hétfőn tényleg zárva.
//   * Ipolytarnóc: márc.–nov. kedd–vasárnap (és ünnepi hétfőkön) 9–16; a
//     szeptember–októberi vezetések 9:30-tól 15:30-ig minden óra harminckor.
//   * Hollókői vár: márc. 29-től 10:00–17:30; felnőtt 3 000, diák/nyugdíjas
//     2 000, családi (2+2) 9 500 Ft, 6 év alatt ingyen. Külön falusétajegy is van.
//   * Kazár: a tájház a Hunyadi út 5., a múzeumok elérhetősége a Damjanich út 3.;
//     a tufa-taxi 2 000 Ft/fő, legalább 3 fő (kisebb csapat a hiányt kifizeti).
//   * Tó-Strand Kemping, Salgótarján: ÚJ, 2026. május 1-jén nyílt (Camping út
//     9/B, a Beszterce-lakótelep mellett, a város északi szélén) — nem "a régi
//     városi kemping", ahogy a brief sugallta.
//   * Ipolytarnóci kemping: a bemutatóhely szállás-oldala a BNPI más kempingjeit
//     is listázza; hogy pont a lábnyomoknál lehet-e sátrat verni, telefonon kell
//     megkérdezni. Így is írjuk.
//
// Hétvégére optimalizálva: az alap útiterv a szombat–vasárnap, a három napos és
// az esős változat opció marad. Nincs saját fotó erről a tájról a tárban, ezért a
// képek a wk-szócikkek vezérképéből, a koordináták körüli Commons-fotókból és —
// ha a kulcson be lesz kapcsolva — a Street View-ból jönnek; a borító rajz.
//
// A koordináták hozzávetőlegesek (±200–400 m): a Közelben-lista és a
// közeledés-jelzés számol belőlük, navigálni a Maps-linkekkel kell.
(function () {

const data = {
modules: [

{id:'A', letter:'A', title:'Kazár', full:'Kazár — palóc falu és a magyar Kappadókia', kicker:'A kényelmes nap · sík mellékutak', sub:'Riolittufa, tájházak, tufa-taxi · Eger → Kazár ≈ 1 óra 15', transit:'Eger → Pétervására → 23-as út → Kisterenye → Kazár ≈ 1 óra 15 · parkoló a Béla út végi kis körforgalomnál, onnan minden gyalog',
 pois:[
 {id:'k1', ll:[47.9860,19.9010], n:'Kazári riolittufa — a „magyar Kappadókia"', q:'Kazári riolittufa', b:'fo', age:'4+ · a kicsi hordozóban', meta:'geotúra · 4,2 km oda-vissza · 1,5–2 óra',
  d:'Egy hektár fehér, növényzet nélküli, mélyen barázdált tufafelszín — tornyok, indiánsátor-kúpok, függőleges falú árkok. Húszmillió éves hasadékvulkáni kitörések anyagát a víz faragta ki, és Európában csak Kappadókiában van hozzá hasonló. A piros kereszt jelzés a falu keleti végéről indul, táblák és térkép vezetnek. Fokozottan védett és csúszós: a jelzett ösvényről nézitek, nem mászkáltok rajta — a gyerekeknek ezt előre mondjátok el, mert a kúpok nagyon hívogatók.',
  w:'Ingyenes, bármikor. Parkoló a Béla út végén (táblázva, Rákóczibánya felől jobbra). Aki nem akar gyalogolni: a falu kérésre TUFA-TAXIT indít, 2 000 Ft/fő, legalább 3 fővel (kisebb csapat a hiányzó helyet kifizeti) — a Polgármesteri Hivatalban kérdezzetek rá. Eső után az agyagos földút sáros, a tufa síkos: napos napra való.'},
 {id:'k2', ll:[47.9840,19.8850], n:'Kazár tájházai és gyűjteményei', q:'Kazári Tájház Hunyadi út', b:'megeri', age:'MINDEN KOR · viselet: SZÜLŐPROGRAM', meta:'múzeumudvar · 1 óra · hétfőn zárva · készpénz', mon:true, cash:true,
  d:'Palóc múzeumudvar, Kézművesház, Tájház (Hunyadi út 5.), bányászati kiállítás, Palóc Galéria — plusz a furcsaságok, amiket a gyerekek imádnak: gyufacímke-gyűjtemény, vasalómúzeum, babagyűjtemény. A palóc viselet a felnőtteknek szól, a Kézművesház foglalkozásai (ha épp van) a kicsiknek. A Hagyományok Portáján a falu ételeit mutatják be.',
  w:'Több ház kérésre nyit — ELŐZŐ NAP telefon a Polgármesteri Hivatalba vagy a kapun lévő számra (a múzeumok elérhetősége: Damjanich út 3.). Hétfőn zárva. Belépő jelképes, KÉSZPÉNZ. Esős napra ez a modul mentőöve.'},
 {id:'k3', ll:[47.9900,19.9050], n:'Eróziós löszfelszín — a rejtett második badland', q:'Kazár löszfelszín', b:'opc', age:'6+', meta:'körtúra-hosszabbítás · +1,5 óra · csak szárazon',
  d:'A riolittufa körtúrájának második fele: a gerinc túloldalán egy sokkal kevésbé ismert, löszbe vágódott árokrendszer. Ha a tufa után még van láb, ez a „miénk volt, senki más nem látta" rész.',
  w:'Ingyenes. A termeszetjaro.hu „A magyar Kappadókia felfedezése" túrája vezet végig, GPX letölthető. Csak száraz időben — a lösz esőben sár.'},
 {id:'k4', ll:[47.9975,19.8290], n:'Gyürky–Solymossy-kastély, Kisterenye', q:'Gyürky-Solymossy kastély Kisterenye', b:'opc', age:'MINDEN KOR · belső: SZÜLŐPROGRAM', meta:'kastély + park · 45 perc · útba esik',
  d:'Barokk kastély ősparkkal Bátonyterenye kisterenyei részén, közvetlenül Kazár előtt az úton. A gyerekeknek a park és a futkosás, nektek egy kávé és a homlokzat. Odaúton bemelegítő megálló, nem cél.',
  w:'A park szabadon sétálható; a belső kiállítás nyitvatartását indulás előtt nézzétek meg — a brief sem tudta friss forrásból megerősíteni.'}],
 sleep:[
 {n:'Kazár — falusi vendégházak', ll:[47.9840,19.8840], q:'vendégház Kazár', noRating:true,
  d:'Ha az első estét a palóc oldalon akarjátok: a falu vendégházai kicsik és családiak, udvari beállót a T2-nek többnyire adnak — foglaláskor kérdezzetek rá. Boltos bevásárlás Bátonyterenyén. Hétvégére foglalni kell, a falu kicsi.'}],
 eat:[
 {n:'Kazár / Bátonyterenye — falusi konyhák', ll:[47.9870,19.8380], q:'étterem Bátonyterenye', noRating:true,
  d:'Palóc leves és sztrapacska, ha nyitva — a falusi konyhák korán zárnak, ezért ELŐZŐ NAP Google Maps, vagy piknik a buszban a tufa után. Bátonyterenyén több a választék.'}]},

{id:'B', letter:'B', title:'Salgó és a Medves', full:'Salgó és a Medves — két vár, egy határ', kicker:'A bázis · naplemente a várfalon', sub:'Bazaltkúpok, bazaltorgonák, kőtenger · Kazár → Salgóbánya ≈ 35 perc', transit:'Salgóbánya–Eresztvény a bázis: Salgó vára 20 perc gyalog, Somoskő 10 perc autó · az egyetlen igazi kapaszkodó a Salgóbányára vezető út — alacsony fokozat, nem hosszú',
 pois:[
 {id:'s1', ll:[48.1403,19.8508], wk:'hu:Salgó_vára', n:'Salgó vára', q:'Salgó vára', b:'fo', age:'4+ · a kicsi hordozóban', meta:'várrom · 625 m · a parkolótól 15–25 perc · naplementére',
  d:'Tizenharmadik századi rom egy bazaltkúp tetején — az ország egyik legfotogénebb várhelye. Helyreállított falak, kilátóterasz, 360 fok: Medves-fennsík, Karancs, Somoskő, tiszta időben a Tátra. Petőfi 1845-ben járt itt és verset írt róla — ezt fent meséljétek, a falon ülve. Naplemente a várfalról: ez lesz, amiről hazafelé beszélnek.',
  w:'Ingyenes, mindig nyitva. Parkoló Salgóbánya felső végén (a Medves Hotel fölött), jelzett ösvény föl. Meredek szakaszok, de négyéves már megy. Teljesen fedetlen: szél, nap, zivatarban kihagyni. Legjobb kora reggel vagy az utolsó egy óra fény — szeptember elején a nap ~19:10-kor megy le, fejlámpa lefelé.'},
 {id:'s2', ll:[48.1445,19.8590], n:'Boszorkány-kő és Eresztvény', q:'Boszorkány-kő Salgótarján', b:'megeri', age:'MINDEN KOR', meta:'bazaltszikla + játszótér · 1 óra · ingyen',
  d:'Magányos bazaltszirt az erdőben (a Kis-Salgó), mászásra pont jó méretű, körülötte a geológiai tanösvény táblái. Eresztvény: tó, padok, játszótér — a várnap előtti vagy utáni levezetés, a busztól gyalog. A hatéves itt vezényli a mászást, a kicsik a játszótéren.',
  w:'Ingyenes, bármikor. A várral együtt egy laza délután; ha a várról későn jöttök le, ez marad reggelre.'},
 {id:'s3', ll:[48.1730,19.8535], wk:'hu:Somoskői_vár', n:'Somoskő vára és a bazaltorgonák (SK)', q:'Somoskői vár Šiatorská Bukovinka', b:'fo', age:'4+', meta:'vár + geológia · 1,5–2 óra · határon át · CSAK KÉSZPÉNZ', cash:true,
  d:'A vár, amelyik pár méterre Szlovákiába került, a falu pedig itthon maradt — az egyetlen Magyarország javára szóló határkorrekció (1924) története. Fedett torony, pallók, hűs belső termek, kilátás Salgóra és a Karancsra. A hegyoldalban 8–9 méteres, hajlott bazaltoszlopok („bazaltvízesés") és kőtenger — európai ritkaság. A vár alatt Petőfi-emlékkunyhó.',
  w:'Ingyenes parkoló a magyar oldalon, Somoskőn; 10–15 perc séta a szlovák bejáratig. NYITVA: hétköznap 9–16, SZOMBAT–VASÁRNAP 9–18 (télen 1–2 órával korábban zár). Belépő euróban VAGY forintban, CSAK KÉSZPÉNZ — a 2023-as ár 800 Ft felnőtt / 400 Ft gyerek volt, az idei néhány százassal több lehet. Volt már felújítás miatti zárás: indulás előtt a Salgótarján-turizmus oldal. Személyi mindenkinél.'},
 {id:'s4', ll:[48.1620,19.8720], wk:'hu:Medves', n:'Medves-fennsík és a bányakilátó', q:'Medves-fennsík kilátó', b:'megeri', age:'MINDEN KOR', meta:'fennsíki séta · 1–2 óra · szeles',
  d:'Közép-Európa legnagyobb bazaltfennsíkja: füves, szeles, tágas — a gyerekek szaladhatnak, és nincs szakadék. A régi bányában tanösvény és kilátótorony, ahonnan Salgó és Somoskő egy képen van. Az Országos Kéktúra itt fut, jó jelzésekkel.',
  w:'Ingyenes, bármikor. Napos és szeles: sapka, víz, szélálló réteg a kicsikre. Somoskő után a délutáni program.'},
 {id:'s5', ll:[48.1010,19.7980], n:'Bányamúzeum, Salgótarján', q:'Bányászati Kiállítóhely Salgótarján Zemlinszky', b:'megeri', age:'4+', meta:'föld alatti tárló · 1–1,5 óra · kedd–vasárnap 8–16', mon:true,
  d:'Bejárható eredeti bányavágat a város alatt — Európa második, hazánk első természetes föld alatti szénbányászati múzeuma: csillék, gépek, sisakos hangulat. A gyerekek imádják a sötétet és a zajokat, és a hatéves innentől bányász akar lenni. Mellette a város bányász-története. Ez a B modul esőnapja.',
  w:'Dornyay Béla Múzeum Bányászati Kiállítóhelye, Zemlinszky Rezső u. 1. KEDD–VASÁRNAP 8–16, HÉTFŐN ZÁRVA; az utolsó csoport 15:00-kor indul le. Felnőtt 3 500 Ft, kedvezményes 2 250 Ft — és a kedvezmény jár a szülőnek, aki legalább két 18 év alatti gyereket kísér, tehát nektek. Bent hűvös: pulóver.'},
 {id:'s6', ll:[48.1580,19.7710], wk:'hu:Karancs_(hegycsúcs)', n:'Karancs-kilátó (727 m)', q:'Karancs kilátó', b:'opc', age:'8+ · most nem', meta:'hegytúra · 2–3 óra · +400 m',
  d:'A vidék legmagasabb pontja, kilátótoronnyal mélyen Szlovákiába. Igazi túra, nem séta — az edzett lábú csapatnak, vagy ha a várak már elfogytak. Erdős, árnyas, zivatarban nem. A kétévessel és a hároméves lábával ez most nem fér a keretbe; a könyvben azért van, mert két év múlva fér.',
  w:'Ingyenes. Indulás Karancslapujtő vagy Somoskőújfalu felől, jelzett úton. Reggel induljatok — délután itt is fordul az idő.'}],
 sleep:[
 {n:'★ Salgóbánya / Eresztvény — a bázis', ll:[48.1470,19.8480], q:'szállás Salgóbánya', noRating:true,
  d:'A horgony: innen Salgó vára gyalog, Somoskő 10 perc, a Medves fölöttetek. Panziók és turistaszállók a vár alatt; beállót a T2-nek a panziók udvarán szoktak adni — foglaláskor kérdezzetek rá, kempinghely külön egyeztetés. Eresztvényben tó, játszótér, erdő: a gyerekek estig kint. Vad opció: az erdei parkolók csendesek, de ez a Karancs–Medves Tájvédelmi Körzet — a vadkempingezés tilos, inkább a hivatalos hely.'},
 {n:'Tó-Strand Kemping, Salgótarján — az új városi kemping', ll:[48.1240,19.8170], q:'Tó-Strand Kemping Salgótarján',
  d:'2026. május 1-jén nyílt — vagyis vadonatúj, és a hegyről lejövet a praktikus B-terv, ha a panzióknál nincs beálló. Camping út 9/B, a város északi szélén, a Beszterce-lakótelep mellett, turistautak mentén; a Tóstrand mellette, bolt és étterem közel, a Bányamúzeum 10 perc autóval. A gyerekeknek a strand a vacsora előtti program. tostrandkemping.hu — árak és a szezon vége ott.'}],
 eat:[
 {n:'Medves Hotel étterme, Salgóbánya', ll:[48.1455,19.8470], q:'Medves Hotel Salgóbánya',
  d:'A vár alatti biztos vacsora: magyar klasszikusok, gyerekadag, terasz — és a parkoló, ahonnan a várhoz indultok, a hotel fölött van. Naplemente után ez a legrövidebb út a meleg ételhez.'},
 {n:'Büfé a somoskői várparkolónál', ll:[48.1700,19.8500], q:'Somoskő büfé várparkoló', noRating:true,
  d:'Lángos, fagyi, kávé a vár után — készpénz. A kőtenger utáni jutalom, mielőtt felmennétek a fennsíkra.'},
 {n:'Salgótarján belváros', ll:[48.0990,19.8030], q:'étterem Salgótarján belváros', noRating:true,
  d:'Pizza, burger, cukrászda a Fő téren — a „ma nem bírunk népi konyhát" este. A Bányamúzeum után tíz perc.'}]},

{id:'C', letter:'C', title:'Kitérők', full:'Kitérők — ősláb-nyomok, kegyhely, Hollókő', kicker:'A harmadik nap · válassz egyet', sub:'Mind 30–45 perc a bázistól, mind a hazaúton vagy egy kitérővel', transit:'Salgóbánya → Ipolytarnóc ≈ 45 perc (Eger onnan ≈ 2 óra) · Salgóbánya → Hollókő ≈ 45 perc (Eger onnan ≈ 1 óra 30) · Szentkút Kazártól 20 perc',
 pois:[
 {id:'c1', ll:[48.2380,19.6360], wk:'hu:Ipolytarnóci_Ősmaradványok_Természetvédelmi_Terület', n:'Ipolytarnóci Ősmaradványok', q:'Ipolytarnóci Ősmaradványok látogatóközpont', b:'fo', age:'MINDEN KOR', meta:'őslénytani bemutatóhely · 2–3 óra · kedd–vasárnap 9–16',
  d:'„Ősi Pompeji": tizenhétmillió éves orrszarvú-, madár- és ragadozólábnyomok egy vulkáni hamuval betemetett tengerparton, megkövesedett óriásfenyő, cápafogak — fedett csarnokban, tanösvényen, 4D mozival. A gyerekeknek dínó-szintű élmény, csak igaz. Ez a C modul gyerekprogramja, és ha csak egy kitérő fér bele, ez az.',
  w:'BNPI-bemutatóhely, belépős. MÁRC.–NOV.: KEDD–VASÁRNAP és ünnepi hétfőkön 9–16. A geológiai tanösvény CSAK VEZETÉSSEL járható: szeptember–októberben 9:30-tól 15:30-ig minden óra harminckor indul túra (kb. 1 óra). Kártyát elfogadnak. Árak: osmaradvanyok.hu. Szept. 19–20-án Kulturális Örökség Napjai — külön programok.'},
 {id:'c2', ll:[47.9680,19.7620], wk:'hu:Mátraverebély-Szentkút_Nemzeti_Kegyhely', n:'Mátraverebély-Szentkút Nemzeti Kegyhely', q:'Mátraverebély-Szentkút Nemzeti Kegyhely', b:'megeri', age:'MINDEN KOR · babakocsival', meta:'kegyhely + forrás + remetebarlangok · 1–1,5 óra · ingyen',
  d:'Az ország nemzeti kegyhelye, szépen újjáépített zarándokközponttal, forrással és a hegyoldalba vágott remetebarlangokkal — ez utóbbi a gyerekeknek a program: kőbe vájt szobák, amikben laktak. Csendes, árnyas, babakocsival is bejárható. Kazártól húsz perc, tehát az A modul mellé is odafér.',
  w:'Ingyenes, naponta. Búcsúnapokon (Mária-ünnepek, szeptember közepén Mária neve) tömeg és parkolási káosz — akkor kerüljétek, más napon ez a csendes megálló. Kávézó és mosdó a helyszínen.'},
 {id:'c3', ll:[47.9950,19.5920], wk:'hu:Hollókő', n:'Hollókő — ófalu és vár (UNESCO)', q:'Hollókő ófalu', b:'megeri', age:'ófalu MINDEN KOR · vár 4+', meta:'világörökségi falu + várrom · 3 óra · a vár 10:00–17:30',
  d:'A palóc képeslap: egyutcás ófalu, fatornácos házak, kis múzeumok, és fölötte a vár, ahol a gyerekek bejárhatják a tornyot. Hétvégén turistás; hétköznap délelőtt a tiétek — a busz-turisták tizenegy körül érnek oda.',
  w:'Ófalu ingyen (külön falusétajegy is van a BNPI-nél, a kis múzeumokhoz). VÁR: márc. 29-től naponta 10:00–17:30; felnőtt 3 000 Ft, diák/nyugdíjas 2 000 Ft, CSALÁDI (2 felnőtt + 2 gyerek) 9 500 Ft, további gyerek 1 500 Ft, 6 ÉV ALATT INGYEN — nektek a családi jegy éri meg. A kis múzeumok hétfőn zárva lehetnek. Fizetős parkoló az ófalu előtt, a T2-nek is van hely.'},
 {id:'c4', ll:[47.9195,19.6985], wk:'hu:Ciszterci_kolostor_(Pásztó)', n:'Pásztó — ciszterci romok, Oskolamester-ház', q:'Pásztó ciszterci kolostor Oskolamester ház', b:'opc', age:'SZÜLŐPROGRAM', meta:'műemlék-megálló · 45 perc · hétfőn zárva', mon:true,
  d:'Kolostorrom (III. Béla 1191-ben telepítette ide a cisztercieket), középkori iskolaház, üveghuta-emlékek — nektek szóló megálló Hollókő felé vagy a hazaúton. A gyerekeknek: fagyi a főtéren, aztán tovább.',
  w:'Romterület szabadon; a kiállítások hétfőn zárva. Hollókőről hazafelé pont útba esik a 21-esen.'}],
 sleep:[
 {n:'Ipolytarnóc — szállás a bemutatóhelynél', ll:[48.2380,19.6360], q:'Ipolytarnóc szállás Ősmaradványok', noRating:true,
  d:'Csak akkor, ha Ipolytarnóc a fő program és nem akartok hazáig gurulni: panzió és vendégházak a faluban, reggel elsőnek a lábnyomoknál. ⚠️ A bemutatóhely szállás-oldala a BNPI kempingjeit listázza, de hogy pont itt lehet-e sátrat verni vagy beállni a busszal, azt telefonon kell megkérdezni — a brief sem tudta megerősíteni.'}],
 eat:[
 {n:'Szentkút — a zarándokközpont kávézója', ll:[47.9680,19.7620], q:'Mátraverebély-Szentkút kávézó',
  d:'Kávé, sütemény, mosdó — a csendes megálló része. Búcsúnapon sor áll.'},
 {n:'Hollókő — ófalusi vendéglők', ll:[47.9950,19.5925], q:'vendéglő Hollókő ófalu', noRating:true,
  d:'Palóc ételek a képeslap-utcán. Hétvégén foglaljatok, vagy egyetek tizenkettő előtt — utána a busz-turisták ülnek mindenhol.'}]}],

// A túralista: ugyanazok a helyek, de a lábak nyelvén — az 5 km / 200 m-es keret
// ellenőrizhető indulás előtt. A Karancs szándékosan lóg ki belőle.
hikes:[
{id:'t1', ll:[47.9860,19.9010], n:'1 · Kazári riolittufa geotúra', go:'a Béla út végi parkolóból piros kereszt jelzésen, táblákkal', time:'1,5–2 óra · 4,2 km oda-vissza', elev:'enyhe, agyagos földúton', diff:'konnyu', kid:'4+ · a kicsi hordozóban · a tufán nem mászkálunk', q:'Kazári riolittufa'},
{id:'t2', ll:[48.1403,19.8508], n:'2 · Salgó vára a parkolótól', go:'Salgóbánya felső vége, a Medves Hotel fölötti parkolóból jelzett ösvényen', time:'15–25 perc fel · fent ameddig jó', elev:'meredek szakaszok, ~100 m', diff:'konnyu', kid:'4+ · fent kézfogás, fedetlen', q:'Salgó vára'},
{id:'t3', ll:[48.1730,19.8535], n:'3 · Somoskő: vár, bazaltorgonák, kőtenger', go:'a somoskői parkolóból át a határon, 10–15 perc a bejáratig', time:'1,5–2 óra', elev:'mérsékelt, a várban lépcsők és pallók', diff:'konnyu', kid:'4+ · személyi és készpénz kell', q:'Somoskői vár'},
{id:'t4', ll:[48.1620,19.8720], n:'4 · Medves-fennsík és a bányakilátó', go:'Somoskő fölött, a Kéktúra jelzésein a régi bányáig', time:'1–2 óra, szabadon', elev:'sík fennsík', diff:'konnyu', kid:'MINDEN KOR · szeles', q:'Medves-fennsík kilátó'},
{id:'t5', ll:[48.1445,19.8590], n:'5 · Boszorkány-kő és Eresztvény köre', go:'Eresztvényből a geológiai tanösvény tábláin a sziklához és vissza a tóhoz', time:'1 óra', elev:'enyhe', diff:'konnyu', kid:'MINDEN KOR · mászható szikla', q:'Boszorkány-kő Salgótarján'},
{id:'t6', ll:[47.9680,19.7620], n:'6 · Szentkút: forrás és remetebarlangok', go:'a zarándokközpont parkolójából a hegyoldalba', time:'1–1,5 óra', elev:'rövid emelkedő a barlangokhoz', diff:'konnyu', kid:'MINDEN KOR · babakocsival a központ', q:'Mátraverebély-Szentkút Nemzeti Kegyhely'},
{id:'t7', ll:[47.9985,19.5895], n:'7 · Hollókő: ófalu és vár', go:'a fizetős parkolóból végig az ófalun, fel a várhoz', time:'3 óra a múzeumokkal', elev:'a várhoz rövid, meredek', diff:'konnyu', kid:'ófalu MINDEN KOR · vár 4+', q:'Hollókői vár'},
{id:'t8', ll:[47.9900,19.9050], n:'8 · Löszfelszín-hosszabbítás Kazáron', go:'a tufa körtúrájának második fele a gerinc túloldalán (termeszetjaro.hu GPX)', time:'+1,5 óra', elev:'árkok, csak szárazon', diff:'kozepes', kid:'6+', q:'Kazár löszfelszín'},
{id:'t9', ll:[48.1580,19.7710], n:'9 · Karancs-kilátó — a kereten túl', go:'Karancslapujtő vagy Somoskőújfalu felől jelzett úton', time:'2–3 óra', elev:'+400 m', diff:'nehez', kid:'8+ · nem ennek a csapatnak, még', q:'Karancs kilátó'}],

// A fél napok és a döntések, amik nem egy helyszínhez tartoznak.
plans:[
{id:'pl1', ll:[48.1403,19.8508], n:'Naplemente Salgó várán', b:'fo', age:'4+', meta:'a hétvége képe · 19:10 körül', q:'Salgó vára',
 steps:['16:30-ra Salgóbányán lenni, beköltözés, vacsora előtt fel','a Medves Hotel fölötti parkolóból 15–25 perc a várig','fent a falon Petőfi (1845) — a hatévesnek ez a sztori','napnyugta szeptember elején ~19:10; szél ellen pulóver mindenkinek','lefelé FEJLÁMPA — a második fele már sötétben'],
 d:'Ez a hétvége egyetlen fix pontja, és minden más ehhez igazodik: szombaton Kazár délelőtt, hogy fél ötre a bázison legyetek, és a vár az utolsó egy óra fényben. Ha szombaton felhős, vasárnap reggel a másik lehetőség — kora reggel ugyanolyan üres, mint naplementekor.',
 w:'Ingyen, mindig nyitva. Zivatarban kihagyni: a rom teljesen fedetlen, és a bazaltkúp a környék legmagasabb pontja.'},
{id:'pl2', ll:[48.1010,19.7980], n:'Esőnap — négy fedett program', b:'megeri', age:'MINDEN KOR', meta:'mind 45 percen belül a bázistól', q:'Bányászati Kiállítóhely Salgótarján Zemlinszky',
 steps:['Bányamúzeum, Salgótarján — kedd–vasárnap 8–16, utolsó csoport 15:00, pulóver','Kazár tájházai — előző napi telefonnal, hétfőn zárva, készpénz','Ipolytarnóc fedett csarnoka és 4D mozija — kedd–vasárnap 9–16, vezetés minden óra harminckor','Szentkút — árnyas, babakocsis, kávézóval','Tartalék: Salgótarján belváros, cukrászda'],
 d:'Két várrom, egy fennsík és a tufa mind száraz, napos időt kér — de a vidék esőben sem üresedik ki. A négy fedett program egymástól legfeljebb háromnegyed órára van, tehát menet közben is át lehet rendezni a napot. Egyetlen csapda: a hétfő, amikor a múzeumok zárnak.',
 w:'Bányamúzeum: felnőtt 3 500 Ft, kedvezményes 2 250 Ft (két gyerekkel a szülőnek is). A tájházakhoz készpénz. Ipolytarnóc kártyát elfogad.'},
{id:'pl3', ll:[48.1730,19.8535], n:'Határátlépés Somoskőn — a lista', b:'megeri', age:'MINDEN KOR', meta:'öt dolog, amitől sima', q:'Somoskői vár Šiatorská Bukovinka',
 steps:['Személyi igazolvány mindenkinek — a vár Szlovákia, ha csak pár méterre is','Készpénz: euró VAGY forint, kártya nincs (2023: 800/400 Ft)','Nyitva: hétköznap 9–16, hétvégén 9–18 — vasárnap nyitásra érdemes','Parkoló a magyar oldalon ingyen, 10–15 perc séta a bejáratig','E-matrica nem kell — gyorsforgalmit nem érintetek'],
 d:'Schengen: átsétáltok, senki nem állít meg. Mégis ez az a program, ami egy hiányzó személyi vagy egy üres pénztárca miatt tud elmaradni. A lista ezért van; a gyerekeknek pedig a sztori, hogy a vár átment a határon, a falu itt maradt.',
 w:'Volt már felújítás miatti zárás — indulás előtt a Salgótarján-turizmus oldal. A bazaltorgonák és a kőtenger a vár alatti hegyoldalban vannak, azok a jegy nélkül is megvannak.'}],

scenarios:[],

today:[
{id:'d1', ids:['s1','s3','s4','k1','c3'], c:'Tűző nap', icon:'ph-sun', r:'A fedetlen programok napja: Salgó vára reggel vagy naplementére, Somoskő és a kőtenger, a Medves-fennsík szélben, a kazári tufa délelőtt (síkos, ha nedves — ma nem az). Sapka, víz, naptej.'},
{id:'d2', ids:['s5','k2','c1','c2','pl2'], c:'Szürke, szitál', icon:'ph-cloud-rain', r:'Bányamúzeum (kedd–vasárnap 8–16, utolsó csoport 15:00) → Kazár tájházai előző napi telefonnal → Ipolytarnóc fedett csarnoka → Szentkút. Mind 45 percen belül.'},
{id:'d3', ids:['s1','s3','s4','k1','c2','s2','s6'], c:'Hétfő van', icon:'ph-calendar-x', r:'Bányamúzeum, tájházak, Pásztó kiállításai zárva. Megy minden nap: a két vár, a tufa, a fennsík, Szentkút, a Boszorkány-kő, Ipolytarnóc tanösvénye viszont NEM (kedd–vasárnap).'},
{id:'d4', ids:['s2','c2','s4'], c:'Mindenki fáradt', icon:'ph-moon-stars', r:'Boszorkány-kő és az eresztvényi játszótér a busztól gyalog, Szentkút árnyas sétája babakocsival, vagy a fennsík, ahol csak szaladni kell. Egyik sem kér lépcsőt.'},
{id:'d5', ids:['s1','pl1'], c:'Naplemente', icon:'ph-sun-horizon', r:'Salgó vára, az utolsó egy óra fény: 16:30-ra a bázison, fel a parkolóból, ~19:10 napnyugta, fejlámpa lefelé. Ez a hétvége képe.'},
{id:'d6', ids:['c1','c3','c2'], c:'Harmadik nap — melyik kitérő?', icon:'ph-signpost', r:'Ipolytarnóc, ha a gyerekek döntenek (lábnyomok, 4D mozi, vezetés minden óra harminckor, hazaút onnan 2 óra). Hollókő, ha a képeslap kell (délelőtt, a busz-turisták előtt, családi jegy 9 500 Ft). Szentkút, ha csak egy csendes óra fér bele.'},
{id:'d7', ids:['s3','pl3'], c:'Átmegyünk a határon', icon:'ph-passport', r:'Somoskő: személyi, készpénz (euró vagy forint), hétvégén 9–18. Parkoló a magyar oldalon, séta a szlovák bejáratig — a gyerekeknek a sztori, hogy a vár átment, a falu itt maradt.'},
{id:'d8', ids:['s1','s2','s3'], c:'Csak egy napunk van', icon:'ph-clock', r:'Egerből egyenesen Salgóbányára (1 óra 45): Salgó vára délelőtt, Boszorkány-kő és Eresztvény ebéd után, Somoskő délután (hétköznap 16-ig!), haza. Kazár és a kitérők legközelebbre.'}],

essentials:[
{n:'Határ és pénz', d:'Somoskő vára Szlovákia: schengeni, átsétáltok, de személyi legyen mindenkinél. Belépő euróban vagy forintban, CSAK KÉSZPÉNZ — legyen egy kis boríték. E-matrica nem kell, gyorsforgalmit nem érintetek. A kazári tájházak és a somoskői büfé is készpénzes; a Bányamúzeum, Ipolytarnóc és a hollókői vár kártyát is elfogad.'},
{n:'A T2', d:'Kíméletes útvonal: az egyetlen igazi kapaszkodó Salgóbányára visz, és rövid. Alacsony fokozat, szem az olajnyomáson. Somoskőre és a Medvesre sima mellékút. Kazár után a Rákóczibánya felőli út keskeny, de lakóbusszal gond nélkül megy. Beállót a T2-nek a salgóbányai panziók udvarán szoktak adni — foglaláskor kérdezzétek meg; a vadonatúj Tó-Strand Kemping a városi B-terv.'},
{n:'Védett terület', d:'A kazári riolittufa fokozottan védett ÉS csúszós: a jelzett ösvényről nézitek, a kúpokra nem másztok — ezt a gyerekeknek előre, mert hívogatók. A Karancs–Medves Tájvédelmi Körzetben vadkempingezés tilos: a beálló a szállásoknál, nem az erdei parkolókban.'},
{n:'Időjárás-ökölszabály', d:'Két várrom, fennsík, tufa: napos, száraz idő — a tufa és a lösz esőben sár és síkos. Bányamúzeum, tájházak, Ipolytarnóc fedett csarnoka, Szentkút: esős napra. Szeptemberben tiszta reggelek és hosszú kilátás: a várakat reggel vagy naplementekor. Zivatarban egyik várra sem — mindkettő a környék legmagasabb pontja, fedetlenül.'},
{n:'Hétfő, és a kedd–vasárnap', d:'Bányamúzeum, tájházak, Pásztó kiállításai hétfőn zárva. Ipolytarnóc bemutatóhelye is: kedd–vasárnap 9–16 (ünnepi hétfőn nyit). Megy minden nap: a két vár, a tufa, a fennsík, Szentkút, a Boszorkány-kő. Somoskő hétköznap csak 16-ig — hétvégén 18-ig, ezért jó oda a vasárnap.'},
{n:'Két hívás előző nap', d:'A kazári tájházak jó része kérésre nyit — előző nap telefon a Polgármesteri Hivatalba (a múzeumok elérhetősége: Damjanich út 3.), és ugyanott a tufa-taxi (2 000 Ft/fő, legalább 3 fő). A másik hívás Somoskő: nyitva-e — volt már felújítás miatti zárás. Öt perc, és nem áll meg a nap egy zárt kapunál.'},
{n:'Amit a brief nem tudott, és mi sem biztosan', d:'A Gyürky–Solymossy-kastély belső nyitvatartása, a hollókői kis múzeumok hétfői rendje, és hogy Ipolytarnócon pont a bemutatóhelynél lehet-e kempingezni — ezeket indulás előtt kell megnézni. A somoskői belépő 2023-as ár (800/400 Ft): az idei néhány százassal több lehet. Minden más adat 2026. szeptember 5-én ellenőrzött.'}],

checklist:[
{id:'cl1', t:'Készpénz-boríték — euró VAGY forint Somoskőre, forint a büfékre és a tájházakra'},
{id:'cl2', t:'Személyi igazolvány mindenkinek — a vár Szlovákia'},
{id:'cl3', t:'Bakancs vagy jó túracipő — bazalt és agyagos tufa-ösvény'},
{id:'cl4', t:'Sapka, víz, naptej — Salgó, Somoskő, Medves teljesen fedetlen'},
{id:'cl5', t:'Pulóver — a Bányamúzeumhoz és a reggeli/esti várfalra'},
{id:'cl6', t:'Fejlámpa — a naplemente után sötétben jöttök le Salgóról'},
{id:'cl7', t:'Háti hordozó a legkisebbnek — tufa, várak, Hollókő vára'},
{id:'cl8', t:'Természetjáró app offline térképpel — piros kereszt Kazáron, Kéktúra a Medvesen'},
{id:'cl9', t:'Előző napi két hívás: kazári tájházak + tufa-taxi, és Somoskő nyitva-e'},
{id:'cl10', t:'Szállásfoglalás Salgóbányára, beállóval a T2-nek (vagy Tó-Strand Kemping)'},
{id:'cl11', t:'Kártya — Bányamúzeum, Ipolytarnóc, hollókői vár (családi jegy 9 500 Ft)'}]
};

// Kép-tartalék. Sorrend a vázban: helyi fotó → rögzített Wikimedia-fájl →
// Wikipédia-vezérkép (wk) → Commons-geokeresés a koordináta körül → Google
// (helyfotó, ha a projekt kap; különben Street View, ha engedélyezett) → ikon.
// Erről a tájról nincs saját fotó a tárban, tehát a wk-k viszik a főszerepet; a
// címek 2026. 09. 05-én ellenőrzöttek, és csak oda kerültek, ahol a szócikk
// MAGÁT a helyszínt írja le. Településszintű tartalék nincs; szálláshely és
// kajálda elvből nem kap wk-t.
const HIKE_WK = {
  t2: 'hu:Salgó_vára',
  t3: 'hu:Somoskői_vár',
  t4: 'hu:Medves',
  t7: 'hu:Hollókői_vár',
  t9: 'hu:Karancs_(hegycsúcs)'
};
data.hikes.forEach(h => { h.wk = HIKE_WK[h.id] || undefined; });
data.modules.forEach(m => {
  (m.sleep || []).forEach(x => { delete x.wk; });
  (m.eat || []).forEach(x => { delete x.wk; });
});

data.itineraries = [
{id:'hetvege', name:'A hétvége — Kazár és a két vár', tag:'1 éj · szombat–vasárnap', note:'Az alapváltozat, hétvégére hangolva: Somoskő hétvégén 18-ig nyit, a tájházakat szombatra kérd, és a szombat esti naplemente Salgó várán a hétvége képe.',
 days:[
 {d:1, wd:'szombat', t:'Palócföld, aztán fel a Medvesre', mod:'A', drive:'Eger → Kazár 1 óra 15 · Kazár → Salgóbánya 35 perc', from:'Eger', stops:['k2','k1','s1','pl1'], opts:['k4','c2','s2'], sleep:'Salgóbánya / Eresztvény (panzió, beállóval)', sleepQ:'szállás Salgóbánya', tip:'Indulás 8:30-kor. Kazáron először a tájházak (előző napi telefonnal, készpénz), aztán a tufa délelőtt, amíg száraz és nem tűz. Ebéd Kazáron vagy a buszban. 16:30-ra Salgóbánya, beköltözés, és fel a várra: napnyugta ~19:10, fejlámpa lefelé. Vacsora a Medves Hotelben.'},
 {d:2, wd:'vasárnap', t:'Somoskő, Medves, haza', mod:'B', drive:'Salgóbánya → Somoskő 10 perc · Salgótarján → Eger 1 óra 30', from:'szállás Salgóbánya', stops:['s3','s4','s2'], opts:['s5','c2'], sleep:'otthon', sleepQ:'Eger', tip:'Nyitásra Somoskőnél (9:00): vár, bazaltorgonák, kőtenger — személyi és készpénz. Lángos a parkolónál, aztán fel a fennsíkra szaladni. Ha marad erő és nem hétfő: a Bányamúzeum hazafelé (utolsó csoport 15:00); ha nem, a hazaút Szentkúton át is szép.'}]},

{id:'harom', name:'Három nap — plusz ősláb-nyomok vagy Hollókő', tag:'2 éj · péntek–vasárnap', note:'Ugyanez egy nappal többel: a második nap a nagy várnap, a harmadikon választasz — Ipolytarnóc (gyerekfavorit) vagy Hollókő (képeslap). Hétfőre ne ess a múzeumokkal.',
 days:[
 {d:1, wd:'péntek', t:'Palócföld, aztán Salgó naplementére', mod:'A', drive:'Eger → Kazár 1 óra 15 · → Salgóbánya 35 perc', from:'Eger', stops:['k2','k1','s1'], opts:['k4','k3'], sleep:'Salgóbánya / Eresztvény', sleepQ:'szállás Salgóbánya', tip:'Ugyanaz, mint a hétvégi terv első napja — pénteken a tájházakhoz még inkább kell az előző napi telefon. Ha marad láb a tufa után, a löszfelszín-hosszabbítás, csak szárazon.'},
 {d:2, wd:'szombat', t:'Somoskő és a Medves — a nagy várnap', mod:'B', drive:'≤ 15 perc gurulás egész nap', from:'szállás Salgóbánya', stops:['s3','s4','s2'], opts:['s6','s5'], sleep:'Salgóbánya / Eresztvény (2. éj)', sleepQ:'szállás Salgóbánya', tip:'Nyitásra Somoskőnél, délután fennsík vagy Boszorkány-kő és az eresztvényi játszótér. Ha esik: Bányamúzeum (szombaton 8–16). Este a második naplemente a váron, ha az első felhős volt.'},
 {d:3, wd:'vasárnap', t:'Ipolytarnóc VAGY Hollókő, aztán haza', mod:'C', drive:'A) → Ipolytarnóc 45 perc → Eger 2 óra · B) → Hollókő 45 perc → Eger 1 óra 30', from:'szállás Salgóbánya', stops:['c1','c3'], opts:['c2','c4'], sleep:'otthon', sleepQ:'Eger', tip:'EGYET válasszatok. Ipolytarnóc: nyitásra (9:00), az első vezetett túra 9:30-kor, hazafelé hosszabb. Hollókő: délelőtt, mielőtt a busz-turisták jönnek; a vár 10-től, családi jegy 9 500 Ft; hazafelé Szentkút vagy Pásztó.'}]},

{id:'esos', name:'Ha esik a hétvégén', tag:'1 éj · fedett B-terv', note:'A várak és a tufa száraz időt kérnek. Esőben a hétvége befelé fordul: bánya, tájházak, ősláb-nyomok — és a vár akkor is megvan, ha csak egy száraz óra jut rá.',
 days:[
 {d:1, wd:'szombat', t:'Tájházak, bánya, egy száraz óra a váron', mod:'B', drive:'Eger → Kazár 1 óra 15 · → Salgótarján 30 perc · → Salgóbánya 15 perc', from:'Eger', stops:['k2','s5','s1'], opts:['k4','pl2'], sleep:'Salgóbánya / Eresztvény', sleepQ:'szállás Salgóbánya', tip:'Kazáron a tájházak (telefon előző nap, készpénz), aztán a Bányamúzeum Salgótarjánban (utolsó csoport 15:00, pulóver). Ha estére kitisztul, a vár akkor is 20 perc a parkolótól — az eső utáni levegőben a legmesszebb látni.'},
 {d:2, wd:'vasárnap', t:'Ipolytarnóc fedett csarnoka, haza', mod:'C', drive:'Salgóbánya → Ipolytarnóc 45 perc → Eger 2 óra', from:'szállás Salgóbánya', stops:['c1'], opts:['s3','c2'], sleep:'otthon', sleepQ:'Eger', tip:'Ipolytarnóc esőben is működik: fedett csarnok, 4D mozi, a vezetett túra a tanösvényen fedett folyosón. Vezetés minden óra harminckor 9:30-tól. Ha reggel száraz, előtte Somoskő nyitásra — a torony fedett, a kőtenger nem.'}]}
];

window.registerTrip({
  id: 'nograd',
  // Content version — bump on every content change; version.json mirrors it.
  version: '2026-09-05.2',
  // Az aggteleki kötet (2026-09-04) alatt, a bükkaljai fölött.
  date: '2026-09-03',
  name: 'Karancs–Medves',
  period: '2026. ősz',
  title: 'Vulkánok, palócok, két vár egy határon',
  kicker: 'Eger → Karancs–Medves · 1–2 éj · 3 modul',
  tagline: 'Salgó, Somoskő, Kazár és a Medves — egy hétvége, kb. egy órára Egertől. Három modul, egymásba fűzhetők: palóc falu és tufa-badland, két bazaltvár egy határon, és kitérőnek ősláb-nyomok, kegyhely vagy Hollókő.',
  cover: 'photos/nograd/cover.webp',
  verified: 'Adatok ellenőrizve 2026. szeptember 5-én · a somoskői belépő 2023-as ár, a kastély és a hollókői múzeumok rendje indulás előtt nézendő',
  origin: 'Eger',
  // A bázis-modul kapja a petrolkék betűt.
  accentModules: ['B'],
  extraGroup: { letter: '★', title: 'Túrák és fél napok', sub: 'Az 5 km / 200 m-es keret — és a döntések, amik nem egy helyszínhez tartoznak' },
  mapIntro: 'Egerből minden nyugat felé fut: Pétervásárán át a 23-as útra, Kisterenyénél Kazár (A), onnan Salgótarján fölé a Medvesre (B) — Salgóbánya a bázis, tőle Salgó vára gyalog, Somoskő tíz perc autó, a fennsík fölötte. A kitérők (C) délre és északra lógnak le: Szentkút és Hollókő a 21-es mentén, Pásztóval a hazaúton; Ipolytarnóc északon, az Ipoly-völgyben, onnan Eger két óra. Somoskő vára pár méterre Szlovákiában áll — schengen, átsétáltok.',
  maps: [],
  photoDir: 'photos/nograd/',
  // Nincs saját fotó erről a tájról: a borító rajz, a helyszínek a wk-szócikkek
  // vezérképére, a Commons-geokeresésre és a Google-forrásokra esnek vissza.
  photos: {},
  wikiFiles: {},
  data: data
});

})();
