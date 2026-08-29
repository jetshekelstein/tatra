// Trip: Gombaszög és környéke (2026. augusztus) — content from the printed
// "Gombaszög Kalauz" (Barlangok, patakok és egy kastélypark).
// Registered into the shared shell via registerTrip(); see docs/ADDING-A-TRIP.md.
//
// The print book's sketch maps are hand-drawn HTML/SVG and explicitly "nem
// navigációhoz", so this trip ships no map images — the Térkép tab falls back to
// the paragraph overview plus the Google Maps day-route deep links.
(function () {

const data = {
modules: [

{id:'CS', letter:'CS', title:'Gombaszög', full:'Gombaszög — barlang a kerítésen kívül', kicker:'Csütörtök · a bázisnap', sub:'Nagy füves rét a Szlovák-karszt kapujában, patakkal · 1–2+ éj', transit:'Eger → Bátor → Gombaszög ≈ 2 óra · érkezés szerda este · innen minden 20–45 percen belül',
 pois:[
 {id:'cs1', ll:[48.566,20.467], n:'Gombasecká-barlang', q:'Gombasecká jaskyňa', b:'fo', age:'MINDEN KOR', meta:'kvapľová jaskyňa · 530 m · 30 perc', mon:true, cash:true,
  d:'A karszt leghíresebb szalmacseppkövei: 2–3 mm vékony, három méter hosszú „bŕka" függők, amilyet máshol nem láttok. Sík, rövid túra — hordozóban a kétéves is végigviszi, a hatéves pedig végigkérdezi. UNESCO-lista, ingyen parkoló, magyar és szlovák vezetés, más nyelvre kézikészülék. A kempingtől gyalog 3 perc.',
  w:'Kedd–vasárnap, belépés egész órakor (főszezonban ~9/10:00–16/17:00, minimum 4 fő). HÉTFŐN ZÁRVA. CSAK KÉSZPÉNZ. Foglalás nincs — ünnepnapon és hétvégén az első turnusra érkezzetek.'},
 {id:'cs3', ll:[48.568,20.466], n:'Kempingnap: patak, függőhíd, lovak', q:'Gombaszög kemping Slavec', b:'fo', age:'MINDEN KOR', meta:'fél nap · nulla kilométer · nulla forint',
  d:'Gátépítés a patakban, ingázás a függőhídon (műkrokodilokkal), a 9 °C-os barlangvizű természetes medence, lovak és függőágyak. A „fél nap a pataknál" alapkövetelmény már a bázison teljesül — ezt a napot ne töltsétek fel programmal.',
  w:'Bármikor, ingyen. A zipline fejlesztés miatt zárva; a patak, a függőhíd és a medence megy. A gát minden délután újraépül.'},
 {id:'cs2', ll:[48.552,20.503], n:'Silická ľadnica — a jégbarlang torka', q:'Silická ľadnica', b:'megeri', age:'MINDEN KOR · hordozós terep', meta:'15 perc erdei séta · babakocsi nem',
  d:'Európai ritkaság ezen a szélességen: jeges torkú zsomboly, aminek a szája elé oda lehet sétálni — augusztusban is hideget lehel. Bemenni nem lehet, és nem is kell: a hidegfújás maga a mutatvány, a gyerekek arca pedig a jutalom.',
  w:'Mindig nyitva, ingyen. Kánikulai délutánra időzítsétek — ez a család klímaberendezése.'}],
 sleep:[
 {n:'Gombaszögi kemping — a horgony', ll:[48.568,20.466], q:'Gombaszög kemping Slavec', tel:'+421 917 057 077', rating:4.7,
  d:'Nagy füves rét a Szlovák-karszt kapujában: patak függőhíddal és műkrokodilokkal, 9 °C-os barlangvizű természetes medence, lovak, függőágyak. A Gombasecká-barlang kétszáz méter. A zipline fejlesztés miatt jelenleg zárva. 4,7★ · kemping@gombaszog.sk · Bookingon is foglalható. Akkor ez: ha a barlangot gyalog akarjátok elérni, és a gyerekek fél napot a patakban töltenének.'},
 {n:'✕ Dedinky · Hotel Priehrada kemping — túl messze', ll:[48.865,20.374], q:'Hotel Priehrada Dedinky', rating:3.3,
  d:'Gyönyörű tófekvés 800 méteren — de gyenge vizesblokk, hétvégi zaj, és jóval messzebb, mint amit ez a hétvége elbír. 3,3★. Ezen az úton nem ajánlott; a Szlovák Paradicsom-modullal párosítva legközelebb — az egy másik nyaralás, saját szurdokokkal.'}],
 eat:[
 {n:'Koliba-büfék a Gombasecká parkolójánál', q:'Gombasecká jaskyňa', d:'Grill és leves a barlang előtt vagy után — a legrövidebb séta a kempingből.'},
 {n:'Kempingkonyha a réten', q:'Gombaszög kemping Slavec', d:'A nagybevásárlás Rozsnyón esik útba (15 perc), onnantól a rét a konyha.'},
 {n:'Rozsnyói főtéri cukrászdák', q:'Rožňava Námestie baníkov', d:'A fagyi mint napzáró intézmény. Plešiveci bolt és bankomat 7 km — csak ha muszáj.'}]},

{id:'FIX', letter:'FIX', title:'Gömör-délelőtt', full:'Kastélypark, márvány és egy torony', kicker:'Fix nap · amit érdemes előre lefixálni', sub:'Betlér, mauzóleum, Rozsnyó · az egyetlen nap, ami esőben is működik', transit:'Gombaszög → Betlér ≈ 25 perc · Rozsnyón át · 14:00-ra vissza a bázisra',
 pois:[
 {id:'fx1', ll:[48.708,20.512], n:'Betléri Andrássy-kastély', q:'Kaštieľ Betliar', b:'fo', age:'park: MINDEN KOR · kastély: SZÜLŐPROGRAM', meta:'2–3 óra · naponta 9:30–17:30', mon:true,
  d:'A kastély, ami sosem égett le és sosem ürült ki: eredeti bútorok, trófeafalak, könyvtár — és egy múmia a pincében. A gyerekeknek viszont a hatalmas angolpark a lényeg: vízesés, műromok, ösvények, mintha egyenesen futkosásra tervezték volna. A bevált trükk: egyik felnőtt bent a házban, a másik a parkban, félidőben csere.',
  w:'A jelenlegi listák szerint naponta 9:30–17:30; belépő ~€12 felnőtt, vezetéssel. Hétfőn zárva. A park a háztól függetlenül is megér egy délutánt. Eső esetén ez a hét mentőöve.'},
 {id:'fx2', ll:[48.646,20.598], n:'Andrássy-mauzóleum, Krasznahorkaváralja', q:'Mauzóleum Andrássy Krásnohorské Podhradie', b:'megeri', age:'SZÜLŐPROGRAM · váltásban', meta:'20–30 perc · sze–vas 8:30–16:00', mon:true,
  d:'Kívülről szerény kis épület, belülről szecessziós márványcsoda — Andrássy Dénes gróf és Franciska „szlovák Tádzs Mahalja". Húsz perc, felváltva: az egyik szülő bemegy, a másik a domboldalon várakozik a kicsikkel. A pénztár az út túloldalán van — ezen sokan elcsúsznak.',
  w:'Szerda–vasárnap 8:30–16:00; hétfő és KEDD is zárva. A vár sziluettjéért amúgy is megéri megállni ezen a ponton.'},
 {id:'fx4', ll:[48.66,20.533], n:'Rozsnyó — Rákóczi-őrtorony és a főtér', q:'Rožňava Námestie baníkov', b:'opc', age:'6+ · SZÜLŐPROGRAM', meta:'144 lépcső · fél–1 óra',
  d:'Bányászváros-főtér toronnyal a közepén: 144 lépcső, kilátás a Gömör-medencére, aztán fagyi odalent. Ez egyben a bevásárló- és esőnap-megálló is — tizenöt perc a bázistól, és itt van az utolsó rendes bolt a rét előtt.',
  w:'Torony: h–p 8–18, szo 9–15, vas 13–17; a jegyet a főtéri Tourinformban veszitek meg. A kicsikkel a főtér és a fagyizó bőven elég — a torony a nagyé.'},
 {id:'fx3', ll:[48.658,20.601], wk:'hu:Krasznahorka_vára', n:'Krásna Hôrka — Krasznahorka vára', q:'Hrad Krásna Hôrka', b:'opc', age:'FOTÓMEGÁLLÓ', meta:'2 perc · belülre nem lehet bemenni',
  d:'A vár a 2012-es tűz óta zárva; az alsó és középső részt 2026 végére célozzák újranyitni. Belülre most nem jutsz be, a domb viszont körüljárható, és a sziluett a mauzóleum mellől amúgy is a nap legjobb fotója. Két perc, ennyi.',
  w:'Indulás előtt nézz rá, hátha nyit. A mauzóleummal egy megálló.'}],
 sleep:[],
 eat:[
 {n:'Koliba-büfék a Gombasecká parkolójánál', q:'Gombasecká jaskyňa', d:'Indulás előtti reggeli vagy hazatérés utáni leves.'},
 {n:'Rozsnyó, főtéri cukrászdák', q:'Rožňava Námestie baníkov', d:'A torony után kötelező — és itt esik útba a nagybevásárlás.'}]},

{id:'B', letter:'B', title:'Szádelő és kelet', full:'Szádelő és a kelet: nulla erőfeszítés, maximum látvány', kicker:'Elágazás B · a szurdok iránya', sub:'Sík murvás út 300 méteres falak között · kemping saját patakkal és pisztrángtóval', transit:'Gombaszög → Szádelő ≈ 35 perc · → Hammer Lake Camp ≈ +20 perc · útközben Hrhov',
 pois:[
 {id:'b1', ll:[48.616,20.828], n:'Szádelői-völgy · Zádielska tiesňava', q:'Zádielska tiesňava', b:'fo', age:'MINDEN KOR · babakocsi OK', meta:'sík murvás út · oda annyit, amennyit akartok',
  d:'Háromszáz méteres mészkőfalak, a Cukorsüveg-torony, és végig csobogó patak az út mellett. Az ország egyik legszebb „nulla erőfeszítés, maximum látvány" völgye: babakocsival is bevállalható, és bárhol vissza lehet fordulni. A teljes kör kilenc kilométer gerinccel — azt hagyjátok.',
  w:'Ingyen, mindig nyitva; ingyen parkoló a falunál, büfé a völgy elején. Kánikulában is hűvös, zivatar után a patak látványosabb. A Cukorsüveg-toronyig bőven elég — onnan vissza: az út vége felé fogy a látvány, nő a nyafogás.'},
 {id:'b2', ll:[48.605,20.858], n:'Háj-vízesések', q:'Hájske vodopády', b:'megeri', age:'3+', meta:'4 vízesés · rövid erdei séták · grillhelyek',
  d:'Travertínó-kaszkádok sorban, pihenő- és tűzrakóhelyekkel a fák alatt, öt percre Szádelőtől. Ez a szurdoknap természetes második fele: rövid szakaszok, sok víz, sehol egy lépcső.',
  w:'VÍZÁLLÁSFÜGGŐ: száraz hét után csordogál. Friss fotókat nézzetek indulás előtt — ez az egyetlen program a könyvben, ami tud csalódás lenni.'},
 {id:'b3', ll:[48.608,20.872], n:'Tornai vár · Turniansky hrad', q:'Turniansky hrad', b:'megeri', age:'3+', meta:'1,4 km · 20–30 perc fel · ingyen',
  d:'Könnyű romtúra hatalmas panorámával a völgy szája fölött — a ti gyerekeiteknek sima menet, és a fent töltött fél óra a nap fotója. Murvás út vezet fel; fent nyitott peremek, kicsiknél kézfogás kötelező.',
  w:'Ingyen, mindig nyitva. Késő délutánra a legjobb, a fényért. Tartalék, ha fogy az erő a Szádvárhoz.'},
 {id:'b0', ll:[48.578,20.752], wk:'sk:Hrhov', n:'Hrhovi vízesés — útközbeni megálló', q:'Vodopád Hrhov', b:'megeri', age:'MINDEN KOR', meta:'5 perc séta a kocsitól · ingyen',
  d:'Tizennégy méteres travertínó-vízesés a falu közepén, egy lakóház tövében — a Szlovák-karszt legmagasabbja. Lábnyújtóztató, ami fotón túrának néz ki.',
  w:'Bármikor, ingyen. Ha B-ből jöttök, hazafelé is elhaladtok mellette.'},
 {id:'b4', ll:[48.686,20.874], wk:'sk:Medzev', n:'Šugov-völgy, Medzev', q:'Šugovská dolina Medzev', b:'opc', age:'MINDEN KOR', meta:'10 perc a Hammer Lake Camptől',
  d:'Árnyas patakvölgy kis vízeséssel és grillkunyhókkal, közvetlenül a kemping mellett. Ha a Háj kiszáradt, ez a pótlék — és ha nem, akkor is jó a hatodik napra.',
  w:'Ingyen, bármikor. Sík erdei út, 3 km — a tartalék pataknap.'},
 {id:'b5', ll:[48.684,20.972], wk:'sk:Jasovská_jaskyňa', n:'Jászói barlang · Jasovská jaskyňa', q:'Jasovská jaskyňa', b:'opc', age:'3+', meta:'1 óra · a premontrei kolostor szomszédja', mon:true, cash:true,
  d:'Klasszikus cseppkőbarlang, kényelmes tempóban. A kicsikkel figyeljetek: a túra közepén van egy „teljes sötétség" pillanat — előre beszéljétek meg, és akkor élmény lesz, nem ijedtség.',
  w:'Kedd–vasárnap 9–16, HÉTFŐN ZÁRVA, CSAK KÉSZPÉNZ. Bent 9–10 °C: pulóver.'}],
 sleep:[
 {n:'Hammer Lake Camp, Nižný Medzev — a horgony', ll:[48.694,20.874], q:'Hammer Lake Camp Nižný Medzev', tel:'+421 902 202 030', rating:4.9,
  d:'Kis családi kemping saját patakkal gátépítéshez és pisztrángtóval: fogd ki és grillezd meg — gyerek-főnyeremény. Játszótér, konyha, angolul beszélő, segítőkész tulaj, sétatávra nyitott medence. Csendes, kevés emberrel: a ti „fél nap a pataknál" filozófiátok testet öltve. 4,9★ · egész évben · hammerlakecamp.sk. Akkor ez: ha a hosszú hétvégén tömeg helyett saját patakot akartok.'}],
 eat:[
 {n:'Pisztráng a saját tóból, a grillen', q:'Hammer Lake Camp Nižný Medzev', d:'A kempingből ki sem kell mozdulni. Reggel szóljatok a tulajnak, hogy estére grilleznétek — így a fogás is a program része lesz.'},
 {n:'Medzev pizzériái és kocsmái', q:'Medzev', d:'A „ma nem főzünk" terv, öt perc autóval.'},
 {n:'Büfé a szádelői völgybejáratnál', q:'Zádielska tiesňava', d:'A szurdok előtt vagy után.'}]},

{id:'A', letter:'A', title:'Aggtelek — Jósvafő', full:'Aggtelek — Jósvafő: a Baradla és egy tavacska', kicker:'Elágazás A · a magyar oldal', sub:'Forint-zóna, SZÉP-kártya, magyar vezetés · ismerős terep', transit:'Gombaszög → Aggtelek ≈ 20 perc · határ: schengen, átgurulsz · 14:00-ra vissza a bázisra',
 pois:[
 {id:'a1', ll:[48.489,20.554], n:'Baradla — jósvafői rövidtúra', q:'Baradla-barlang jósvafői bejárat', b:'fo', age:'MINDEN KOR', meta:'1 óra · nyáron 11:00 és 15:00',
  d:'Az Óriások terme — a rendszer leglátványosabb csarnoka egyetlen könnyű órában, pont gyerekléptékben adagolva. Kevesebben vannak, mint az aggteleki bejáratnál, és kint rögtön ott a mesebeli tavacska a levezetéshez.',
  w:'Nyári indulások augusztus 31-ig: 11:00 és 15:00. Bent 10 °C — pulóver. Családi kombinált kedvezmény jár, ha két napon belül két szakaszt is megnéztek.'},
 {id:'a2', ll:[48.468,20.507], n:'Baradla — aggteleki rövidtúra', q:'Baradla-barlang Aggtelek', b:'fo', age:'MINDEN KOR', meta:'~1 óra · nyáron 10:00-tól több indulás',
  d:'A klasszikus főbejárat a sziklafal alatt, benne a Hangversenyteremmel. Ha a Baradla kempingben alszotok, ez a program a sátor előtt kezdődik. Alternatív fő program a jósvafői rövidtúra helyett.',
  w:'Nyáron 10:00, 11:30, 13:00… Ünnepnapon és hétvégén ez a legzsúfoltabb pont a környéken — az első turnusra menjetek, vagy tegyétek át a jósvafőire.'},
 {id:'a4', ll:[48.49,20.553], wk:'hu:Jósvafő', n:'Tengerszem-tó és játszótér, Jósvafő', q:'Tengerszem-tó Jósvafő', b:'megeri', age:'MINDEN KOR · babakocsival', meta:'ingyen · fél délután',
  d:'Barlangvíz táplálta, mesebeli kis tó közvetlenül a jósvafői bejáratnál: játszótér, tűzrakóhelyek, pancsolás. Ez a barlang utáni levezetés — a nap, amelyik a gyerekek fejében meg fog maradni.',
  w:'Ingyen, mindig nyitva, a jósvafői barlangbejáratnál. Tűző napra a legjobb.'},
 {id:'a5', ll:[48.494,20.558], wk:'hu:Hucul', n:'Hucul ménes tanösvény, Jósvafő', q:'Hucul ménes Jósvafő', b:'megeri', age:'MINDEN KOR · a kicsinek hordozó', meta:'4,5 km-es kör · gyalog az igazi',
  d:'Szabadon legelő hucul lovak közt vezet a kör — nem lovarda, nem simogató, hanem lovak a saját legelőjükön, néhány méterre. A ti gyerekeitek ezt a távot legyalogolják; a kétévesnek hordozó.',
  w:'Autóval behajtani csak engedéllyel. Ingyen, bármikor — a kör 4,5 km, sík erdei-mezei út.'},
 {id:'a3', ll:[48.478,20.532], wk:'hu:Baradla-barlang', n:'Vörös-tói középtúra', q:'Vörös-tói barlangbejárat Aggtelek', b:'opc', age:'3+ · nálunk már bevált', meta:'2,3 km · 100 perc · ~600 lépcső',
  d:'A leghosszabb kivilágított szakasz: Csillagvizsgáló, 19 méteres állócseppkő. A hármas tavaly végigment rajta, tehát most is menni fog — a hatszáz lépcső inkább a hordozós szülőnek meló, mint a gyereknek.',
  w:'Nyáron 10, 12, 14, 16. A kétévesnek hordozó, és bőven elég egy pulóver. Bent 10 °C.'},
 {id:'a6', ll:[48.478,20.465], wk:'sk:Domica', n:'Domica-barlang, szlovák oldal', q:'Jaskyňa Domica', b:'opc', age:'MINDEN KOR', meta:'a Baradla szlovák fele', mon:true, cash:true,
  d:'FIGYELEM: az alacsony vízállás miatt a híres csónakos túra 2026. február 1. óta nem üzemel — csak a gyalogos kör megy. Így másodhegedűs a Baradla mögött; akkor éri meg, ha amúgy is a szlovák oldalon maradnátok.',
  w:'Kedd–vasárnap 9–16, HÉTFŐN ZÁRVA, CSAK KÉSZPÉNZ.'}],
 sleep:[
 {n:'Baradla Kemping és Turistaszálló — a horgony', ll:[48.468,20.508], q:'Baradla Kemping Aggtelek', tel:'+36 48 503 005', rating:4.3,
  d:'Közvetlenül az aggteleki barlangbejáratnál: csendes, tiszta — ha kicsit régies — vizesblokk, konyha, étterem a szomszédban. Egész évben nyitva, kártya és SZÉP-kártya is megy. 4,3★ · Aggtelek, Baradla oldal 3 · +36 30 861 9427 · ~€20/éj lakóautó + 2 fő nagyságrend. Akkor ez: ha a Baradla első turnusára akartok érni. Patak nincs — ez a gyengéje.'}],
 eat:[
 {n:'Baradla Étterem a bejáratnál', q:'Baradla Étterem Aggtelek', d:'Gulyás, palacsinta, reggeli is.'},
 {n:'Jósvafői büfék', q:'Jósvafő', d:'A Tengerszem mellett, fagyival.'},
 {n:'Kempingkonyha', q:'Baradla Kemping Aggtelek', d:'A bevásárlás Aggteleken vagy még Rozsnyón. Itt kártya és SZÉP is megy — az euró-borítékra a szlovák oldalon lesz szükség.'}]},

{id:'C', letter:'C', title:'Romok és kaland', full:'Romok és kaland — félúton A és B között', kicker:'Elágazás C · a plusz nap', sub:'Nem költözöl: kirándulás bármelyik bázisról', transit:'Szögliget mindkét bázistól ≈ 25–40 perc · délutánra vissza',
 pois:[
 {id:'c1', ll:[48.539,20.654], n:'Szádvár', q:'Szádvár Szögliget', b:'fo', age:'3+ · a kicsinek háti hordozó', meta:'~30 perc meredek fel · tanösvény · ingyen',
  d:'Az egyik legnagyobb és legkevésbé taposott magyar várrom, 360 fokos körpanorámával — mesekönyv-táj, tömeg nélkül. A ti 5 km / 200 m-es csapatotoknak pont jó kis csúcstúra: vörös romjelzésű kör vezet fel a Szalamandra-háztól, tanösvény-táblákkal. A hordozó ezen a napon a szülőnek is sportos.',
  w:'Ingyen, mindig nyitva. Napos időre való — a lényeg a kilátás. Sapka és víz mindenkinek: a rom teljesen fedetlen. Részletek és térkép: szadvar.hu'},
 {id:'c2', ll:[48.561,20.676], wk:'hu:Derenk', n:'Derenk — a szellemfalu', q:'Derenk', b:'megeri', age:'MINDEN KOR · babakocsival döcöghető', meta:'~3 km sík erdei földút · ingyen',
  d:'Elhagyott lengyel–magyar falu az erdő közepén: házhelyek, templomrom, emlékhely. Hátborzongatóan békés, és pont az a fajta hely, ahol a hatéves elkezd kérdezni. Sík út — ez a Szádvár utáni pihenőnap, vagy a Szádvár helyett a fáradt nap.',
  w:'Ingyen, bármikor. Nulla szintemelkedés.'},
 {id:'c5', ll:[48.632,20.611], n:'Buzgó-forrás tanösvény — a párhuzamos program', q:'Buzgó Krásnohorská Dlhá Lúka', b:'megeri', age:'MINDEN KOR', meta:'rövid tanösvény · ingyen',
  d:'Amíg a nagy a föld alatt van, a kicsik ugyanennek a barlangrendszernek a felszíni végét járják be: a Buzgó karsztforrás időszakosan tör fel, körülötte árnyas ösvény. Két-három óra kényelmesen kitölthető innen a faluig és vissza, fagyival a végén.',
  w:'Ingyen, bármikor. A kalandbarlang idejére van kitalálva, Krásnohorská Dlhá Lúkán.'},
 {id:'c3', ll:[48.633,20.61], n:'Krásnohorská kalandbarlang', q:'Krásnohorská jaskyňa', b:'opc', age:'OSZTOTT PROGRAM · 6+', meta:'2,5–3 óra · csak foglalással', cash:true,
  d:'Igazi barlangásztúra: overál, sisak, fejlámpa, létrák, lanos traverzek két földalatti tó fölött, a végén a 33 méteres Rozsnyói barlangászok cseppköve — UNESCO-világrekorder. Hat és tizenöt év között csak szülővel, nyolc év alatt csak kivételesen. A kétéves nem mehet → egyik szülő és a hatéves bent, életre szóló élménnyel; a másik szülő a kicsikkel a Buzgó-forrás tanösvényén.',
  w:'Szezonban napi két indulás, maximum 20, minimum 4 fő. TELEFONOS FOGLALÁS: +421 905 412 048 — találkozó a Penzión Jozefínánál, Krásnohorská Dlhá Lúkán. €12 felnőtt / €10 gyerek, CSAK KÉSZPÉNZ. Bent 9 °C: hosszúnadrág, meleg kabát, bakancs (csizma bérelhető). Indulás előtt mindenképp hívjátok — időszakos zárvatartás előfordul.'},
 {id:'c4', ll:[48.664,20.31], n:'Ochtinai aragonitbarlang', q:'Ochtinská aragonitová jaskyňa', b:'opc', age:'3+', meta:'45 perc · 104 lépcső', mon:true, cash:true,
  d:'A világ három látogatható aragonitbarlangjának egyike: tűkristály-„virágok" cseppkő helyett, olyan, mintha zúzmara nőtt volna a kőbe. Harmincöt perc Betlértől nyugatra, tehát a fix Gömör-naphoz is hozzáfűzhető.',
  w:'Óránkénti belépés kedd–vasárnap 9–16, HÉTFŐN ZÁRVA. €5 parkoló, CSAK KÉSZPÉNZ. Bent nagyon hideg — sál is jöhet.'}],
 sleep:[
 {n:'Nem költöztök — ez kirándulás A-ból vagy B-ből', q:'Szalamandra-ház Szögliget',
  d:'Szögligeten a Szalamandra-háztól indul minden, de az nem szálláshely. Ha a Krásnohorská bejön, akkor Gombaszög vagy a Hammer Lake a logikus alvóhely, mert a találkozó Krásnohorská Dlhá Lúkán van.'}],
 eat:[]},

{id:'H', letter:'↩', title:'Hazaút', full:'Hazafelé: egy utolsó megálló', kicker:'Hazaút-modul', sub:'Rudabánya és az utolsó rövid kitérők', transit:'A-ból: Aggtelek → Eger ≈ 2 óra · B-ből: +45 perc · kitérő: Rudabánya',
 pois:[
 {id:'h1', ll:[48.383,20.629], n:'Rudapithecus Látogatóközpont és bányató', q:'Rudapithecus Látogatóközpont Rudabánya', b:'opc', age:'MINDEN KOR', meta:'kedd–szombat 8–16 · Rudabánya', mon:true,
  d:'„Rudi", a tízmillió éves ősmajom: kis kiállítás, udvari ásatós-játszó, mászható ős-szobrok, és mellette a türkiz bányató. Pont akkora program, amennyit egy hazaút elbír.',
  w:'Kedd–szombat 8–16, VASÁRNAP ÉS HÉTFŐN ZÁRVA · +36 30 942 7303. Csak akkor fér be, ha pénteken vagy szombaton értek haza — vasárnapi hazaútba nem megy.'}],
 sleep:[],
 eat:[]}],

// Nincs külön túralista ebben a könyvben — a szurdok és a romtúrák a
// modulokban vannak, mert mindegyik egy naphoz tartozik.
hikes:[],

// A „Délután a bázison" oldal: mi van a kerítésen belül, és milyen messze.
plans:[
{id:'d1', ll:[48.568,20.466], n:'Délután a Gombaszögi kempingben', b:'megeri', age:'MINDEN KOR', meta:'a bázis · patakos', q:'Gombaszög kemping Slavec',
 steps:['patak, gát, műkrokodilok — a sátortól 50 m','barlangvizes medence, 2 perc, 9 °C','lovak a réten, 5 perc séta','Gombasecká-barlang, 3 perc gyalog','esti kör a rét körül, 1,2 km sík, babakocsis'],
 d:'A programok délután kettőig tartanak — utána a kemping a program. Patak és gátépítés a sátortól ötven méterre, kilencfokos barlangvizű medence két percre, lovak a réten, függőágyak és focipálya. Négy után nincs autó: séta, vacsora, tűz, a kulcs marad a táskában.',
 w:'Plešivec (bolt, bankomat) 7 km — csak ha muszáj. Kánikulában a barlangvizes medence a megoldás; ha esik, kártya a sátorban és a Rozsnyó-nap előrehozása.'},
{id:'d2', ll:[48.694,20.874], n:'Délután a Hammer Lake Campben', b:'megeri', age:'MINDEN KOR', meta:'a csendes · vizes', q:'Hammer Lake Camp Nižný Medzev',
 steps:['saját patak, gátépítés a sátor mellett','pisztrángtó — fogd ki, süsd meg (a nap fénypontja)','játszótér és közös konyha a helyszínen','nyitott medence a faluban, 8 perc séta','esti kör a Bódva mentén, 1,5 km sík'],
 d:'A legvizesebb bázis: saját patak gátépítéshez a sátor mellett, pisztrángtó, ahol a fogás is a program része. Játszótér, konyha, sétatávra falusi medence. A Šugov-völgy tíz perc autóval, ha a Háj kiszáradt.',
 w:'Reggel szóljatok a tulajnak az esti grillről. Medzev (pizzéria, bolt) 5 perc autóval.'},
{id:'d3', ll:[48.468,20.508], n:'Délután a Baradla kempingben', b:'opc', age:'MINDEN KOR', meta:'a barlangkapu · szárazabb', q:'Baradla Kemping Aggtelek',
 steps:['barlangbejárat és látogatóközpont, 2 perc gyalog','tanösvény a kemping mögött, 1,5 km könnyű kör','Aggteleki-tó és a falu, 10 perc séta','Baradla Étterem a szomszédban','esti kör a falu körül, 2 km'],
 d:'A barlangkapu-bázis: a főbejárat két perc gyalog, tanösvény a kemping mögött, játszótér a faluban. A gyengéje, hogy patak nincs — a Jósva tizenöt perc autóval, a Tengerszem ugyanott.',
 w:'Kánikulában itt a barlang a hűtő: délben menjetek be. Kártya és SZÉP-kártya is megy.'}],

scenarios:[],

today:[
{id:'t1', ids:['b1','b2','cs3','cs2','a4'], c:'Tűző nap', icon:'ph-sun', r:'Szádelői-völgy reggel, utána Háj-vízesések · vagy patakos kempingnap gátépítéssel · Silická ľadnica a legmelegebb délutánra · a Tengerszem pancsolásra'},
{id:'t2', ids:['cs1','fx1','a1','b5','c4','fx4'], c:'Szürke, szitál', icon:'ph-cloud-rain', r:'Barlangnap: Gombasecká, Baradla, Jasovská vagy Ochtinská — hétfőn egyik sem · Betléri kastély belül · Rozsnyói torony és cukrászda'},
{id:'t3', ids:['cs1','a2','b1','cs2'], c:'Ünnepnap / hétvége', icon:'ph-calendar-star', r:'Aug. 20–23: a szlovák oldali barlangok a magyar helyett — ott nem ünnep. Ha mégis Baradla: az első turnus, korán kelve. A Szádelői-völgy hosszú, elnyeli a tömeget'},
{id:'t4', ids:['cs3','b0','fx4','d1'], c:'Mindenki fáradt', icon:'ph-moon-stars', r:'Kempingpatak és pisztránggrill · Hrhov öt percre · fagyi Rozsnyón. Ez is egy nap, és általában ez marad meg a legjobban'},
{id:'t5', ids:['c3','c5'], c:'A nagy kalandnapja', icon:'ph-flashlight', r:'Krásnohorská kalandbarlang — foglalással, +421 905 412 048 — a hatévessel és egy szülővel; a kicsik a másik szülővel a Buzgó-forrás tanösvényén'},
{id:'t6', ids:['c1','c2','b3'], c:'Romhangulat', icon:'ph-castle-turret', r:'Szádvár és Derenk, napos időben · tartalék, ha fogy az erő: Tornai vár — húsz perc fel, ugyanaz a panoráma'}],

essentials:[
{n:'Euró-boríték készpénzzel', d:'A szlovák állami barlangok — Gombasecká, Domica, Jasovská, Ochtinská — csak készpénzt fogadnak, kártya nincs. A legközelebbi bankomat Plešivecen van, 7 km-re. Előfoglalás nincs, a turnusok létszáma kötött: érkezzetek a belépési idő elé. Jó hír: 2026. január 1-jétől a fotózás ingyenes a normál túrákon.'},
{n:'Augusztus 20. csütörtök — ünnepnap', d:'Aggtelek és a Baradla a hosszú hétvégével együtt csúcsra jár. A barlangnapot csütörtökön tegyétek a szlovák oldalra — ott nem ünnep —, a Baradlát pedig péntekre vagy szombatra, a legkorábbi turnussal.'},
{n:'Hétfő: zárva', d:'A szlovák állami barlangok hétfőn zárva tartanak, ahogy a betléri kastély is; a mauzóleum kedden is. A ti szerda–vasárnap ablakotokba ez nem lóg bele — de ha egy nappal csúsztok, számoljatok vele. Várak, romok, völgyek és vízesések minden nap mennek.'},
{n:'Forint és euró — kettős pénztárca', d:'A határ schengeni, átgurultok — de a pénz nem. Euró a szlovák oldalon (és készpénz a barlangokhoz), forint a magyaron. A Baradla kempingben SZÉP-kártyával is lehet fizetni.'},
{n:'Meleg réteg mindenkinek — kánikulában is', d:'A barlangokban 9–10 °C van, a Krásnohorskában 9 °C plusz sár. Pulóver, hosszúnadrág és zárt cipő minden gyerekre — ez az a felszerelés, amit augusztusban a legkönnyebb otthon hagyni.'},
{n:'Két telefonhívás indulás előtt', d:'A Krásnohorská kalandbarlang csak telefonos foglalással megy: +421 905 412 048. A Háj-vízesések pedig vízállásfüggők — friss fotókat nézzetek, mielőtt odaterveztek egy délelőttöt. És telefonáljatok be mindhárom kempingbe: egyik sem akkora, hogy elbírjon egy váratlan lakóautót.'},
{n:'Ami idén máshogy van', d:'Domica: 2026. február 1. óta alacsony vízállás miatt nincs csónak, csak a gyalogos kör. Krásna Hôrka: a 2012-es tűz óta zárva, az alsó és középső részt 2026 végére célozzák. Gombaszög: a zipline fejlesztés miatt áll — a patak, a függőhíd és a medence megy.'},
{n:'A könyv egyetlen szabálya', d:'Ha kétségetek van, menjetek a patakhoz. Egy barlang kimaradhat, egy vár kimaradhat — a fél nap a vízben nem, azért jöttetek. Egy program egy nap: reggel el, kettőre vissza. Egy nyaralás alatt legfeljebb kétszer költözzetek; a sátorbontás a gyerekeknek nem program.'}],

checklist:[
{id:'g1', t:'Euró-boríték készpénzzel — az állami barlangok és a Krásnohorská sehol nem fogad kártyát'},
{id:'g2', t:'Forint és SZÉP-kártya — a magyar oldalra és a Baradla kempingbe'},
{id:'g3', t:'Meleg réteg mindenkinek — a barlangokban 9–10 °C, kánikulában is'},
{id:'g4', t:'Bakancs és hosszúnadrág — a kalandbarlanghoz (csizma bérelhető)'},
{id:'g5', t:'Fürdő- és gátépítő-felszerelés elérhetően — nem a csomag aljára pakolva'},
{id:'g6', t:'Háti hordozó a kétévesnek — Szádvár, hucul kör, Vörös-tó, Silická'},
{id:'g7', t:'Sapka és víz — a Szádvár és a Tornai vár teljesen fedetlen'},
{id:'g8', t:'Friss fotó-ellenőrzés — a Háj-vízesésekhez, indulás reggelén'},
{id:'g9', t:'Délutáni doboz a csomagtartóban — vödör-lapát, gumipapucs, két váltás pótruha, háló, kártyapakli, pumpás lámpa'},
{id:'g10', t:'Telefonos foglalás — Krásnohorská (+421 905 412 048) és mindhárom kemping'}]
};

// Kép-tartalék: NINCS település-szintű alapértelmezés. Aminek nincs saját
// szócikke — jellemzően a kajáldák —, az a semleges kategória-ikont kapja, nem a
// falu fényképét. (Egy korábbi próbálkozás falufotót tett minden helyszínre; a
// bükkaljai kötetben ez tizenhét helyszínen ugyanazt a képet jelentette.) Az
// egyedi, helyszínhez kötött wk-k a POI-kon maradnak, ott ahol tényleg vannak.
data.modules.forEach(m => {
  (m.eat || []).forEach(x => { delete x.wk; });
  (m.sleep || []).forEach(x => { delete x.wk; });
});

data.itineraries = [
{id:'bazis', name:'Marad a bázis', tag:'3 éj · Gombaszög', note:'Nem költözöl: minden nap a Gombaszögi kempingből indul és oda tér vissza. A programok kettőig tartanak, utána a patak a program.',
 days:[
 {d:1, wd:'szerda', t:'Eger → Bátor → Gombaszög', mod:'CS', drive:'≈ 2 óra · esti érkezés', from:'Eger', stops:['cs3'], opts:[], sleep:'Gombaszögi kemping', sleepQ:'Gombaszög kemping Slavec', tip:'Bátorban felvesszük az utolsó utast. Bánrévétől euró; Plešivecen (7 km) az utolsó bankomat és bolt — a barlangok csak készpénzt fogadnak. Este már csak a patak van.'},
 {d:2, wd:'csütörtök · ünnepnap', t:'Bázisnap — barlang és patak', mod:'CS', drive:'nulla kilométer', from:'Gombaszög kemping Slavec', stops:['cs1','cs3'], opts:['cs2','d1'], sleep:'Gombaszögi kemping', sleepQ:'Gombaszög kemping Slavec', tip:'Aug. 20-án a magyar oldal csúcsra jár — ma a szlovák barlang megy, az első turnussal. A Silická ľadnica a legmelegebb délutánra.'},
 {d:3, wd:'péntek', t:'Gömör-délelőtt', mod:'FIX', drive:'Gombaszög → Betlér ≈ 25 perc', from:'Gombaszög kemping Slavec', stops:['fx1','fx2'], opts:['fx3','fx4','c4'], sleep:'Gombaszögi kemping', sleepQ:'Gombaszög kemping Slavec', tip:'14:00-ra vissza a bázisra — a délután a patakhoz tartozik. Rozsnyón esik útba a nagybevásárlás.'},
 {d:4, wd:'szombat', t:'Szádelő egynapos kirándulásként', mod:'B', drive:'Gombaszög → Szádelő ≈ 35 perc', from:'Gombaszög kemping Slavec', stops:['b1','b2'], opts:['b0','b3'], sleep:'Gombaszögi kemping', sleepQ:'Gombaszög kemping Slavec', tip:'Szádelő reggel, amíg hűvös és üres; Háj ebéd után; Tornai vár késő délután, a fényért.'},
 {d:5, wd:'vasárnap', t:'Haza', mod:'H', drive:'Gombaszög → Eger ≈ 2 óra', from:'Gombaszög kemping Slavec', stops:['cs2'], opts:['b0','fx4'], sleep:'otthon, Eger', sleepQ:'Eger', tip:'A Rudapithecus vasárnap zárva — a kimaradt-kosárból válasszatok: Hrhov, Silická ľadnica vagy a rozsnyói torony.'}]},

{id:'koltozes', name:'Egy költözés', tag:'4 éj · Gombaszög + Hammer Lake', note:'Két éj a bázison, aztán át keletre a Hammer Lake Campre. Hazafelé Szádvár — a plusz nap a hazaútba fűzve.',
 days:[
 {d:1, wd:'szerda', t:'Eger → Bátor → Gombaszög', mod:'CS', drive:'≈ 2 óra · esti érkezés', from:'Eger', stops:['cs3'], opts:[], sleep:'Gombaszögi kemping', sleepQ:'Gombaszög kemping Slavec', tip:'Bátorban felvesszük az utolsó utast. Bánrévétől euró; Plešivecen az utolsó bankomat. Este már csak a patak van.'},
 {d:2, wd:'csütörtök · ünnepnap', t:'Bázisnap — barlang és patak', mod:'CS', drive:'nulla kilométer', from:'Gombaszög kemping Slavec', stops:['cs1','cs3'], opts:['cs2','d1'], sleep:'Gombaszögi kemping', sleepQ:'Gombaszög kemping Slavec', tip:'Ünnepnap: a szlovák barlang megy, első turnussal.'},
 {d:3, wd:'péntek', t:'Gömör-délelőtt', mod:'FIX', drive:'≈ 25 perc oda-vissza', from:'Gombaszög kemping Slavec', stops:['fx1','fx2'], opts:['fx3','fx4'], sleep:'Gombaszögi kemping', sleepQ:'Gombaszög kemping Slavec', tip:'Ez az egyetlen nap, ami esőben is működik — ha szitál, ide csúsztassátok.'},
 {d:4, wd:'szombat', t:'Át Hammer Lake-re — Szádelő', mod:'B', drive:'Gombaszög → Szádelő ≈ 35 perc · → Medzev +20', from:'Gombaszög kemping Slavec', stops:['b1','b2'], opts:['b0','b3','d2'], sleep:'Hammer Lake Camp, Nižný Medzev', sleepQ:'Hammer Lake Camp Nižný Medzev', tip:'Útközben Hrhov (5 perc). Reggel szóljatok a tulajnak, hogy estére pisztrángot grilleznétek.'},
 {d:5, wd:'vasárnap', t:'Haza Szádváron át', mod:'C', drive:'Medzev → Szögliget ≈ 40 perc · → Eger ≈ 2 óra', from:'Hammer Lake Camp Nižný Medzev', stops:['c1'], opts:['c2','b3'], sleep:'otthon, Eger', sleepQ:'Eger', tip:'Szádvár csak napos időben — a lényeg a kilátás. Ha esik: Derenk sík erdei útja, vagy egyenesen haza.'}]},

{id:'mind', name:'Mind a három', tag:'5 éj · Gombaszög + Hammer Lake + Baradla', note:'A teljes program: két éj a bázison, kettő keleten, egy Aggteleken. A plusz nap a köztes napra esik, a hazaút Rudabányán át.',
 days:[
 {d:1, wd:'szerda', t:'Eger → Bátor → Gombaszög', mod:'CS', drive:'≈ 2 óra · esti érkezés', from:'Eger', stops:['cs3'], opts:[], sleep:'Gombaszögi kemping', sleepQ:'Gombaszög kemping Slavec', tip:'Bátorban felvesszük az utolsó utast. Bánrévétől euró; Plešivecen az utolsó bankomat és bolt. Este már csak a patak van.'},
 {d:2, wd:'csütörtök · ünnepnap', t:'Bázisnap — barlang és patak', mod:'CS', drive:'nulla kilométer', from:'Gombaszög kemping Slavec', stops:['cs1','cs3'], opts:['cs2','d1'], sleep:'Gombaszögi kemping', sleepQ:'Gombaszög kemping Slavec', tip:'Ünnepnap: szlovák oldal, első turnus. Délután Silická ľadnica.'},
 {d:3, wd:'péntek', t:'Gömör-délelőtt, aztán át keletre', mod:'FIX', drive:'Betlér ≈ 25 perc · Medzev ≈ 55 perc', from:'Gombaszög kemping Slavec', stops:['fx1','fx2'], opts:['fx3','fx4','c4'], sleep:'Hammer Lake Camp, Nižný Medzev', sleepQ:'Hammer Lake Camp Nižný Medzev', tip:'Délelőtt Betlér, ebéd Rozsnyón (nagybevásárlás), délután beállás a Hammer Lake-re.'},
 {d:4, wd:'szombat', t:'Szurdoknap — Szádelő és Háj', mod:'B', drive:'Medzev → Szádelő ≈ 20 perc', from:'Hammer Lake Camp Nižný Medzev', stops:['b1','b2'], opts:['b3','b4','d2'], sleep:'Hammer Lake Camp', sleepQ:'Hammer Lake Camp Nižný Medzev', tip:'Szádelő reggel, Háj ebéd után, Tornai vár a fényért. Este pisztráng a saját tóból.'},
 {d:5, wd:'vasárnap', t:'Romok és kaland, majd át Aggtelekre', mod:'C', drive:'Medzev → Szögliget ≈ 40 perc · → Aggtelek ≈ 25 perc', from:'Hammer Lake Camp Nižný Medzev', stops:['c1','c2'], opts:['c3','c5'], sleep:'Baradla Kemping, Aggtelek', sleepQ:'Baradla Kemping Aggtelek', tip:'Ha a kalandbarlangot foglaltátok: 8:30 közös indulás, 12:00 találkozó, délután Szádvár vagy patak — attól függ, mi maradt a lábakban.'},
 {d:6, wd:'hétfő', t:'Baradla, aztán haza', mod:'A', drive:'Aggtelek → Eger ≈ 2 óra', from:'Baradla Kemping Aggtelek', stops:['a2','a4'], opts:['a1','a5','d3'], sleep:'otthon, Eger', sleepQ:'Eger', tip:'Hétfő: a szlovák barlangok zárva, a Baradla nyitva — ezért esik ide a magyar oldal. A Rudapithecus hétfőn zárva, úgyhogy az kimarad.'}]}
];

window.registerTrip({
  id: 'gombaszog',
  // Sort key for the picker — newest trip first.
  // Content version — bump on every content change; version.json mirrors it.
  version: '2026-08-29.2',
  date: '2026-08-19',
  name: 'Gombaszög',
  period: '2026. aug.',
  title: 'Gombaszög és környéke',
  kicker: 'Eger → Gombaszög · 3–5 nap · 6 modul',
  tagline: 'Barlangok, patakok és egy kastélypark. Bázis a Gombaszögi kempingben, onnan Szádelő, Aggtelek, Betlér és Szádvár — mindegyik nap megáll a maga lábán, alvóhellyel és patakkal.',
  cover: 'photos/gombaszog/cover.webp',
  verified: 'Adatok ellenőrizve 2026. augusztus 19-én · az árak és a nyitvatartás változik',
  origin: 'Eger',
  // Modules drawn with the teal initial: a magyar oldal és a hazaút.
  accentModules: ['A', 'H'],
  extraGroup: { letter: '★', title: 'Délután a bázison', sub: 'A programok kettőig tartanak — utána a kemping a program' },
  mapIntro: 'Egerből indulunk, Bátorban felvesszük az utolsó utast, onnan a 25-ös úton át ≈ 2 óra a Gombaszögi kemping — ide érkezünk szerda este, és ez a bázis. Onnan minden 20–45 percen belül van: keletre a Szádelői-völgy és a Hammer Lake Camp (B), nyugatra Aggtelek–Jósvafő (A), a kettő között félúton Szögliget romjai (C), északra pedig Betlér és Rozsnyó, a fix Gömör-délelőtt. A és B ugyanazon az úton fekszik (Hrhov mellett halad el), mégis két külön bázis — helyben döntitek el, melyik irányba költöztök tovább.',
  maps: [],
  // id → fájlnév a photoDir alatt; a többi helyszín a Wikipédia képére esik
  // vissza (wk mező), végül a „fotó hamarosan" placeholderre.
  photoDir: 'photos/gombaszog/',
  photos: {
    cs1: 'straw.webp', cs2: 'silica.webp', cs3: 'potok.webp',
    'CS-s0': 'karszt.webp', 'CS-s1': 'dedinky.webp', 'CS-e0': 'gombasecka.webp',
    fx1: 'betliar-a.webp', fx2: 'mauzoleum.webp', fx4: 'roznava.webp',
    b1: 'zadiel-b.webp', b2: 'haj.webp', b3: 'torna.webp', 'B-s0': 'medzev.webp',
    a1: 'baradla-c.webp', a2: 'baradla-a.webp', a4: 'aggtelek.webp', 'A-s0': 'aggtelek.webp',
    c1: 'szadvar-b.webp', c2: 'derenk-a.webp', c3: 'krasnohorska.webp', c4: 'ochtina.webp',
    h1: 'rudabanya.webp',
    d1: 'potok.webp', d2: 'medzev.webp', d3: 'aggtelek.webp'
  },
  wikiFiles: {},
  data: data
});

})();
