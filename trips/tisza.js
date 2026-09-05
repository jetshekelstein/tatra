// Trip: Tisza-part — Tiszalök · Tiszadada · Tiszadob (+ Tokaj, Sóstó, hazaút).
// Az utolsó strandhétvége: egy nyugodt holtági strand, egy Loire-kastély és egy
// ökokemping a Tisza-parton, Egerből 1¾ órára. Adatok ellenőrizve 2026. 09. 05.
//
// Amit érdemes tudni a forrásokról:
//   * Feketeszakáll strand: a listaár a park honlapjáról (2026. 06.), az „ezen a
//     hétvégén 1 600 Ft" a Facebook-oldalukról — akciós, nem listaár. A szezon
//     vége nincs kiírva; a szezonbérlet 09. 15-ig érvényes, ebből következtetünk.
//   * Öko Kemping: a 2026/27-es utószezoni árlista (szept. 1–30.) a saját
//     honlapról. Egy szállásközvetítő „nem értékesítjük" feliratot mutat — az a
//     közvetítő, nem a kemping: a kemping nyitva szept. 30-ig, saját foglalás.
//   * Andrássy-kastély: a 4 400 / 2 200 / 1 200 Ft-os lista a legfrissebb
//     (régebbi oldalak 4 000-et írnak). A „két gyereket kísérő szülő" kedvezmény
//     a NÖF általános szabálya — nektek mindkettőtöknek jár.
//   * Nyíregyházi Állatpark: a régi 3 000 Ft-os felnőttjegy még sok oldalon
//     kering; a 2026-os hivatalos ár 8 000 Ft. Ezért drága a modul.
//   * Kompok: a díjak 2017-esek, azóta drágultak — „pár száz forint, készpénz".
//
// Sík vidék: a könyvben nincs szint, a korjelzések a víz miatt vannak. Két
// különböző víz van: a holtág (nincs sodrás) és az élő Tisza (van). A
// koordináták hozzávetőlegesek (±200 m), a Közelben-lista számol belőlük.
(function () {

const data = {
modules: [

{id:'D', letter:'D', title:'Tiszadada', full:'Tiszadada — a Tisza-parti bázis', kicker:'Öko-kemping 70 méterre a folyótól · ✔ az alvóhely', sub:'Ökotó, stég, homokos szabadstrand és egy csárda a parton', transit:'Egerből ≈ 1¾ óra (M3 → Polgár → Tiszadob) · Tiszalök 10 perc · Tiszadob-kastély 12 perc · Tokaj 35 perc · Nyíregyháza-Sóstó 45 perc',
 pois:[
 {id:'da1', ll:[48.0237,21.2280], n:'Kempingnap: ökotó, stég, tűzrakóhely', q:'Öko Kemping & Glamping Tiszadada', b:'fo', age:'MINDEN KOR', meta:'nulla kilométer · a kempingdíjban benne', rating:4.8, reviews:279,
  d:'A bázis maga a program: natúr úszótó a sátrak között, stég és természetes kikötő a Tiszán 70 méterre, játszótér, kerti grill, kijelölt tűzrakóhely tűzifával, fedett nyári konyha, szauna. A recepción bringa (1 500 Ft/óra), kenu és motorcsónak (10 000 Ft/óra) bérelhető. Nulla energiamérlegű hely: napelem és esővíz — a meleg víz korlátos, felhős napon spórolós zuhany, a WC-ben mozgásérzékelős lámpa. Este minimális fény, ezért látszanak a csillagok.',
  w:'Nyitva szept. 30-ig. Recepció 8–12 és 15–19, +36 20 364 2101. UTÓSZEZONI ÁR (szept.): lakóautó/kombi-hely a sátormezőn 1 500 Ft vagy Economy parcella 8A árammal 2 000 Ft + felnőtt 2 800 + gyerek (2–12 év) 2 100 Ft/éj + 4% IFA. Nektek egy éj ≈ 14–15 000 Ft. Érkezés 22:00 előtt; 23–7 között csend, autóval nem mozogsz. Kártya és SZÉP megy. Tűz csak tilalmon kívül: erdotuz.hu.'},
 {id:'da2', ll:[48.0294,21.2302], n:'Tiszadadai szabadstrand és kikötő', q:'Tiszadadai strand Tiszadada', b:'megeri', age:'MINDEN KOR · a kicsik csak kézen fogva', meta:'15 perc séta a kempingtől · ingyen · ÉLŐ TISZA', rating:4.8, reviews:32,
  d:'Az élő Tisza egyik legszerethetőbb homokos partja: széles homok, öreg fák, a bejáratnál a csárda terasza és egy kis játszótér. Szeptemberben már csendes, a víz 18–20 fok körül. FIGYELEM: ez folyó, nem holtág — sodrás van, a part hirtelen mélyülhet, vízimentő nincs. A két- és hároméves térdig, kézen fogva; a hatéves karúszóval, szülővel a vízben. A homokozás, gátépítés és kavicsdobálás viszont korlátlan — és ez a program, nem az úszás.',
  w:'Bármikor, ingyen. Zuhany, mosdó a strandon. Kocsival: Halász út vége, a csárdánál parkoló. Gyalog a gáton a kempingből 15 perc, babakocsival is. Fürdésre a tiszalöki holtág (L modul) a biztos — ez a „sétáljunk le a folyóhoz" hely.'},
 {id:'da3', ll:[48.0220,21.2200], n:'A gáton: séta vagy bringa a Tisza-töltésen', q:'EuroVelo 11 Tiszadada', b:'opc', age:'sétára MINDEN KOR · bringával 6+, a kicsik gyerekülésben', meta:'EuroVelo 11 a kemping kerítése mellett · ingyen',
  d:'A nemzetközi EuroVelo 11 közvetlenül a kemping mellett fut a töltésen: aszfalt, sík, autó nélkül, folyó az egyik oldalon, ártéri erdő a másikon. Sétának a strandig (15 perc), bringával a tiszadobi kastély 30 perc egy irányba — ez felnőtt-tempó. A hatéves saját bringával 9 km-t sík terepen elmegy, de visszafelé már nem biztos. A tuti: fél óra tekerés a gáton bármelyik irányba, aztán vissza a tóhoz.',
  w:'Bringa a recepción 1 500 Ft/óra; gyerekülést kérdezz. A gát nyílt, szeles — szeptemberben szemüveg és egy réteg pluszban. Nulla forint.'}],
 sleep:[
 {n:'Öko Kemping & Glamping Tiszadada — a bázis', ll:[48.0237,21.2280], q:'Öko Kemping & Glamping Tiszadada', tel:'+36 20 364 2101', rating:4.8, reviews:279,
  d:'Sirály u. 2. — 70 m a Tiszától, saját természetes kikötő, ökotó, szauna, játszótér, nyári konyha (23-ig), tűzrakóhely + tűzifa, kutyabarát. Sátormező és 8A/10A-es parcellák (Economy 45–60 m², Normál 50–70 m², XL 75–100 m² vízzel), 3 kétágyas + 1 háromágyas jurta (FŰTÉS NÉLKÜL — meleg hálózsák), lombház, faház (min. 2 éj). UTÓSZEZON szept. 1–30.: hely 1 500 (lakóautó) / parcella 2 000–6 000 + felnőtt 2 800 + gyerek 2–12 év 2 100 Ft/éj + 4% IFA. Recepció 8–12, 15–19. Meleg víz napelemről, korlátos. Foglalás: tiszadadakemping.hu vagy telefon — a közvetítő oldalakon drágább vagy nincs. Google 4,8★ (279).'},
 {n:'B-terv: Feketeszakáll bungalók, Tiszalök', ll:[48.0231,21.3473], q:'Feketeszakáll Élménypark és Strand Tiszalök', tel:'+36 70 679 3490',
  d:'Ha a kemping telt: bungaló az élményparkban, 12 000 Ft/felnőtt, 9 000 Ft/gyerek (12 alatt) éjszakánként + IFA, klíma 3 500 Ft — a napi strandbelépő benne van. Sátorozás csak csoportoknak, tűz és áram nincs. Foglalás: info@feketeszakallelmenypark.hu (a telefont szezonban a strandon veszik fel).'}],
 eat:[
 {n:'Tiszai Öreghalász Csárda — a parti vacsora', q:'Tiszai Öreghalász Csárda Tiszadada', rating:4.4, reviews:1754,
  d:'Halász út 26., a strand bejáratánál. Terasz a folyóra, árnyék, kis játszótér a terasz mellett — a gyerekek homokoznak, ti a halászlevet kanalazzátok. Bőséges adagok, van vega, angol/német étlap. Szerda–vasárnap 11–21, HÉTFŐ-KEDD ZÁRVA.'},
 {n:'Kempingkonyha és bogrács', q:'Öko Kemping & Glamping Tiszadada',
  d:'Fedett nyári konyha főzőlappal, hűtővel (23-ig), kerti grill, kijelölt tűzrakóhely tűzifával. Bevásárlás: kisbolt Tiszadadán, nagyobb bolt Tiszalökön (10 perc). Tűz előtt a tilalom aznapi állása: erdotuz.hu.'},
 {n:'Horgonyzó Kisvendéglő, Tiszalök', q:'Horgonyzó Kisvendéglő Tiszalök', rating:4.6, reviews:1000,
  d:'Tiszavirág u. 13., a vízerőmű felőli városrészben, 10 perc. Tiszai halászlé, harcsapaprikás, bárány, a gyerekeknek pizza; télen kályha, nyáron terasz. Szombat estére FOGLALNI: +36 30 297 9187. Naponta 12–21 (cs–szo 11:30-tól, 22-ig).'}]},

{id:'L', letter:'L', title:'Tiszalök', full:'Tiszalök — strand a holtágon, vízlépcső, arborétum', kicker:'A strandnap · ✔ Feketeszakáll', sub:'Fehér homok sodrás nélkül, egy erőmű, ami nézni jó, és egy komp a Tiszán', transit:'Tiszadadáról 10 perc · a strand a Tiszadob felőli várostáblánál · Tokaj 25 perc · Nyíregyháza 40 perc · Egerből ≈ 1¾ óra',
 pois:[
 {id:'l1', ll:[48.0231,21.3473], n:'Feketeszakáll Élménypark és Strand ✔', q:'Feketeszakáll Élménypark és Strand Tiszalök', b:'fo', age:'MINDEN KOR · 3 év alatt ingyen', meta:'8–20 · homokos holtág, nincs sodrás · a hétvégi napijegy 1 600 Ft', rating:4.3, reviews:537,
  d:'A Tisza egy mesterséges öblözetében kialakított 2,5 hektáros strand, 100 méter fehér homokkal: nincs sodrás, nincs örvény, lassan mélyül — ez a hely, ahol a kétéves is bemehet. Napernyők, nyugágyak, családi öltöző pelenkázóval és gyerek-WC-vel, elsősegély. A parton fagyizó, Ételbár (lángos, gyros, sült hal) és a Grill Terasz Angus-burgerrel. Külön pénzért: 20 elemes vízi kalandpálya a vízen (6 000 Ft/90 perc, felügyelettel — a hatévesnek helyben kérdezd), 200 méteres szárazföldi extrém pálya (2 800 Ft/45 perc, a nagyoknak), lézerharc 6 évestől, vízibicikli (3 000 Ft/óra), kenu, bringóhintó. Strandfoci- és röplabdapálya ingyen.',
  w:'Naponta 8–20; a szezon szeptember közepéig (a bérletek 09.15-ig érvényesek — utána a Facebook-oldal mondja meg). LISTAÁR: felnőtt 2 400, diák 2 200, családi 2+2 7 600 / 2+3 9 200 Ft, 3 ÉV ALATT INGYEN, úszójegy 17 óra után 1 600. EZEN A HÉTVÉGÉN a Facebook szerint 1 600 Ft a napijegy. Kártya megy. Tiszalököt elhagyva a Tiszadob felé vezető úton, a várostábla után 100 m jobbra. +36 70 679 3490. A héten tartottak egy „legénységi pihenőnapot" — a hétvégi nyitást megerősítették, de indulás előtt egy pillantás az oldalukra nem árt.'},
 {id:'l2', ll:[48.0253,21.3077], n:'Tiszalöki vízlépcső, vízerőmű és arborétum', q:'Tiszalöki vízerőmű', b:'megeri', age:'MINDEN KOR · babakocsival', meta:'1–1,5 óra · ingyen · bármikor', rating:4.5, reviews:66,
  d:'Az ország második legnagyobb vízerőműve (1954–59): duzzasztómű, három Kaplan-turbina és egy 85 méteres hajózsilip, amin 1 200 tonnás uszályok kelnek át. Belülre csak szervezett csoport jut, de kívülről is látványos — a zúgó víz és a zsilipelés a gyerekeknek fizikaóra kréta nélkül. Mellette a 31 hektáros Arborétum: ingyenes parkerdő padokkal, több száz fafajjal, szomorúfüzes tóparttal — az árnyékos „kifutatós" fél óra a strand előtt vagy után. Itt áll a Tisza-szabályozás emlékműve is.',
  w:'Az arborétum és a gát környéke szabadon, ingyen, egész évben. A bejáratot keresni kell (a Horgonyzó vendéglő felől, Tiszavirág utca); parkolás egyszerű. A Keleti-főcsatorna torkolatához vezető földutat újabban kapuval lezárták — ne tervezz vele. Vízerőmű-látogatás csak csoportnak, előre egyeztetve.'},
 {id:'l3', ll:[48.0245,21.3817], n:'Kis-Tisza Ökocentrum és tanösvény', q:'Kis-Tisza Ökocentrum Tiszalök', b:'opc', age:'MINDEN KOR · zárt cipő, kézen fogva a hídon', meta:'30–60 perc · ingyen · Kenyérgyári-holtág', rating:4.5, reviews:141,
  d:'Fahíd és pallóút a Kenyérgyári-holtág fölött, hattyúkkal, kócsaggal, szárcsákkal, horgászokkal. Őszintén: a „2,2 km tanösvény" nagy része földút, a táblák hiányosak, a bejárati WC gyakran zárt, a fahíd helyenként billeg — 300 méter szép pallóút, aztán vissza. Ennyi bőven elég a gyerekeknek a vízimadarakhoz. Bónusz: a Gyurgyalag étterem ugyanitt, a parkolónál.',
  w:'Bármikor, ingyen; a kiállítótér és a vezetett túra csak bejelentkezett csoportnak. A tiszatardosi komphoz vezető úton (Töltés u. 2.), ingyen parkoló. A navigáció egy halboltnál tesz le — onnan a betonúton tovább.'},
 {id:'l4', ll:[48.0340,21.3840], n:'Tiszalök–Tiszatardos komp', q:'Tiszalök Tiszatardos komp', b:'opc', age:'MINDEN KOR', meta:'5 perc a vízen · pár száz forint · 6-tól sötétedésig',
  d:'Igazi kötélkomp a Tiszán, ami a gyerekeknek önmagában program: az autó a kompra gurul, a folyó alattatok, a kompos kurblizik. Túloldalon Tiszatardos és Csobaj, onnan Tokaj 20 perc — így a tokaji fél nap kompos kalandnak indul, és Rakamazon át jöttök vissza. Készpénz; a kompos mondja meg, mennyi.',
  w:'Kb. 6:00-tól sötétedésig, igény szerint; vízállás, jég vagy műszaki ok miatt szünetelhet — a „Tiszalök-Tiszatardos komp" Facebook-oldal frissül. Tudakozó: Tiszatardos önkormányzat +36 47 386 035. Utoljára ismert díjak: személy 100, autó 500 Ft — azóta biztosan drágult.'}],
 sleep:[
 {n:'Feketeszakáll bungalók — a strandon alszol', ll:[48.0231,21.3473], q:'Feketeszakáll Élménypark és Strand Tiszalök', tel:'+36 70 679 3490',
  d:'12 000 Ft/felnőtt, 9 000 Ft/gyerek éjszakánként + IFA, klíma 3 500; a napi strandbelépő az árban. Sátor csak csoportnak, tűz és áram nincs. Ha a tiszadadai kemping telt, ez a legrövidebb B-terv: nulla kilométer a strandig.'}],
 eat:[
 {n:'Horgonyzó Kisvendéglő — a tiszalöki biztos pont', q:'Horgonyzó Kisvendéglő Tiszalök', rating:4.6, reviews:1000,
  d:'Tiszavirág u. 13., az arborétum és a vízerőmű mellett. Tiszai halászlé, harcsapaprikás, steak, a gyerekeknek pizza. Hétvégén foglalni: +36 30 297 9187. Naponta 12–21, cs–szo 11:30–22.'},
 {n:'Gyurgyalag — az ökocentrum étterme', q:'Gyurgyalag étterem Tiszalök', rating:4.7, reviews:85,
  d:'Töltés u. 2., a Kis-Tisza Ökocentrum parkolójában. Burger, pizza, babgulyás, néhány kísérletező fogás, kedves gazdák. Szerda–szombat 11–20, vasárnap 11–17, HÉTFŐ-KEDD ZÁRVA.'},
 {n:'Feketeszakáll Grill Terasz és Ételbár', q:'Feketeszakáll Élménypark és Strand Tiszalök',
  d:'A strandon, kijönni sem kell: Ételbárban lángos, gyros, sült hal; a Grill Teraszon Hortobágy Angus-burger, grillsajt, olasz kávé; kézműves fagyizó a parton. A konyha minősége a kritikák szerint ingadozik — a burger a biztos.'},
 {n:'Tisza Étterem — a napi menü', q:'Tisza Étterem Tiszalök', rating:4.1, reviews:105,
  d:'Kossuth u. 81., a városközpontban a postával szemben. Szabolcsi házias, napi menü, olcsó. K–Szo 11–20 (szo 21:30-ig), hétfőn csak 16-ig, VASÁRNAP ZÁRVA.'}]},

{id:'K', letter:'K', title:'Tiszadob', full:'Tiszadob — a Loire-kastély a Tisza-parton', kicker:'A kastélynap · HÉTFŐN ZÁRVA', sub:'365 ablak, bejárható bukszuslabirintus, három emlékmű a gáton és egy pontonhíd', transit:'Tiszadadáról 12 perc · Egerből ≈ 1½ óra (M3, Polgár) · a kastély a falu déli szélén, Bocskai u. 59.',
 pois:[
 {id:'k1', ll:[48.0172,21.1742], n:'Andrássy-kastély ✔', q:'Andrássy-kastély Tiszadob', b:'fo', age:'park MINDEN KOR · kastélybelső SZÜLŐPROGRAM / 6+', meta:'2–3 óra · K–V 10–18 · pénztár 17-ig', mon:true, rating:4.7, reviews:3897,
  d:'Loire menti lovagvár a Tisza-holtág partján, 1880–85, Meinig Artúr terve: 4 bejárat (évszak), 12 torony (hónap), 52 szoba (hét), 365 ablak (nap) — a gyerekek végigszámolják. Bent Róth Miksa üvegablakai és az eredeti faburkolatú ebédlő; a földszint berendezett, az emeleten a család története. A gyerekeknek a park a lényeg: a franciakert liliom alakú bukszuslabirintusa (BEJÁRHATÓ), rózsalugas, az angolpark ősfái, mögötte 500 hektár ártéri erdő. T2-trükk: egyik felnőtt bent 40 percet, a másik a labirintusban a hármassal, félidőben csere. A kastélyban étterem és kávézó.',
  w:'Ápr. 1–okt. 31.: kedd–vasárnap 10–18, a pénztár 17-kor zár. HÉTFŐN ZÁRVA. Kombinált (kastély + park) 4 400 Ft; kedvezményes 2 200 Ft — jár a 6–26 éveseknek ÉS a „legalább két 18 alatti gyereket kísérő szülőnek", tehát nektek mindkettőtöknek; 6 év alatt ingyen. Csak park: 1 200 Ft/fő. Nektek bent: 2 × 2 200 + a hatéves 2 200 = 6 600 Ft. A parkoló kicsi (kb. 20 hely) — hétvégén tízre. +36 30 592 5579, online jegy: jegymester.hu.'},
 {id:'k2', ll:[47.9909,21.1405], n:'A Tisza-szabályozás három emlékműve — Urkom', q:'Andrássy emlékmű Tiszadob', b:'opc', age:'MINDEN KOR · hordozóval vagy bringával', meta:'30 perc · ingyen · 3 km a kastélytól a gáton', rating:4.6, reviews:13,
  d:'Itt kezdődött 1846. augusztus 27-én a Tisza szabályozása: az első kapavágás helyén három monumentális emlékmű áll a gáton — Széchenyi, Vásárhelyi Pál és Andrássy Gyula —, körülöttük a nagy folyó és a semmi. Nehéz megtalálni, kicsit elhanyagolt, és pont ezért jó: a gyerekek szabadon rohangálnak a töltésen, ti egy percet állhattok a helyen, ahol a mai Alföld elkezdődött.',
  w:'Bármikor, ingyen. A kastélytól délre a gáton bringával a legjobb (EuroVelo 11), autóval a rév felé menő útról földúton, majd gyalog. Eső után sáros.'},
 {id:'k3', ll:[48.0087,21.1414], n:'Tiszadobi rév és pontonhíd → Kesznyéten', q:'Tiszadobi rév', b:'opc', age:'MINDEN KOR', meta:'átkelés a Tiszán · készpénz · napkeltétől napnyugtáig', rating:4.6, reviews:17,
  d:'A falu alatt pontonhíd köti össze a két partot, mellette komp, ha a hidat szétszedték (magas víz, tél). Innen 15 perc a kesznyéteni Szamárháti-tanya (H modul) állatsimogatóval, és 25 perc Tiszaújváros fürdője — a hazaút rövidebb változata. A gyerekeknek: „átmegyünk a folyón egy hídon, ami úszik".',
  w:'Kb. napkeltétől napnyugtáig, a komp óránként; készpénz, pár száz forint. Vízállás vagy műszaki hiba esetén nincs átkelés — akkor Polgár–Tiszaújváros a kerülő (+20 perc).'}],
 sleep:[
 {n:'Ide nem költözünk — Tiszadada 12 perc', ll:[48.0237,21.2280], q:'Öko Kemping & Glamping Tiszadada', tel:'+36 20 364 2101',
  d:'Tiszadobon nincs kemping; a kastély a tiszadadai bázisról negyedóra, bringával a gáton fél óra. Aludjatok a kempingben, a kastélyt reggel tízre vegyétek.'}],
 eat:[
 {n:'Andrássy Restaurant és kávézó — a kastélyban', q:'Andrássy-kastély Tiszadob étterem',
  d:'A kastély főúri ebédlőjében étterem, a parkban kávézó üdítővel, kávéval, süteménnyel — a kastély nyitvatartásában. Nem olcsó, de a helyszín az ár része; ebédre asztalt kérj a belépésnél.'},
 {n:'Anikó kifőzdéje — a falusi napi menü', q:'Anikó kifőzdéje Tiszadob', rating:4.3, reviews:106, cash:true,
  d:'Alkotmány u. 1., a faluközpontban. Nagy adag, friss rántott hús kovászos uborkával, gyros, napi menü — ami 13:30-ra elfogy, telefonon előre kérhető (+36 20 325 6149). CSAK KÉSZPÉNZ. H–Szo 10–20, VASÁRNAP ZÁRVA.'}]},

{id:'T', letter:'T', title:'Tokaj', full:'Tokaj — hajó a Bodrogon, játszótér a parton', kicker:'A kirándulós fél nap · 25 perc', sub:'Sétahajó, sétány, múzeum esőre, pince váltásban — és szept. 11–13-án utcazene', transit:'Tiszalökről 25 perc (Rakamazon át, a hídon) · a tiszatardosi komppal 30 perc kalandosabban · Tiszadadáról 35 perc',
 pois:[
 {id:'t1', ll:[48.1203,21.4133], n:'Tokaji sétahajó a Bodrogon és a Tiszán', q:'Tokaji Sétahajózás Hajókirándulás Tokaj', b:'megeri', age:'MINDEN KOR', meta:'50 perc · online foglalással · a híd alatti nagy parkolóból', rating:4.4, reviews:441,
  d:'Vízibusz: fel a Bodrogon a város mellett, vissza, aztán a Tiszán a strandig és újra a kikötőbe. Nincs narráció, nincs nagy látvány — de három kisgyereknek egy óra hajón önmagában ünnep, és a Kopasz-hegy a vízről szép. Aki csúcsélményt vár, csalódik (a kritikák ezt mondják); aki gyerekprogramot, az nem.',
  w:'Felnőtt 2 400 Ft (online) / 2 490 helyben, 18 alatt 1 900 / 1 990, családi jegy 5 900 / 5 990 Ft. Szeptemberben már nem minden nap és nem minden órában indul: a hajokirandulas.hu online naptára az egyetlen biztos forrás — ami ott foglalható, az megy. +36 47 552 187. SZÉP csak helyben. Beszállás a közúti híd alatti nagy parkolónál.'},
 {id:'t2', ll:[48.1252,21.4119], n:'Bodrog-parti sétány és játszótér', q:'Bodrog parti sétány és játszótér Tokaj', b:'megeri', age:'MINDEN KOR', meta:'1 óra · ingyen · Füzes lakópark', rating:4.7, reviews:85,
  d:'Felújított partszakasz pihenőkkel, filagóriákkal és a város egyetlen rendes játszóterével — a Bodrog vize karnyújtásra, a Kopasz-hegy szemben. A hajó előtt vagy után a levezetés. A legkisebbeknek kevés a játék (nincs babahinta, nincs homokozó), a hatéves elvan.',
  w:'Bármikor, ingyen. A hajókikötőtől 5 perc séta a parton, a főtértől 5 perc lefelé.'},
 {id:'t3', ll:[48.1266,21.4082], n:'Tokaji Múzeum', q:'Tokaji Múzeum', b:'opc', age:'SZÜLŐPROGRAM · esőnap', meta:'1 óra · K–V 9–17 · hétfőn zárva', mon:true, rating:4.6, reviews:668,
  d:'Görög kereskedőház a főtér mellett, három szinten: a borvidék története, freskós emeleti szobák, a padláson néprajzi gyűjtemény szerszámokkal és bútorokkal — a gyerekeknek ez a padlás az érdekes. Alatta borospince. Kis múzeum, egy óra, esőben pont jó.',
  w:'Kedd–vasárnap 9–17, HÉTFŐN ZÁRVA. Bethlen Gábor út 7., +36 47 352 636. Belépő a pénztárnál, 6 alatt jellemzően ingyen. Kevés az angol felirat — nektek nem gond.'},
 {id:'t4', ll:[48.1254,21.4081], n:'Rákóczi Pince — a felnőtt fél óra', q:'Rákóczi Pince Tokaj', b:'opc', age:'SZÜLŐPROGRAM · váltásban', meta:'Kossuth tér 15. · kb. 11–17, p–szo 20-ig', rating:4.6, reviews:473,
  d:'A főtér alatti óriás pince: folyosók, hordók, egy hatalmas lovagterem — a legenda szerint 1526-ban itt választották királlyá Szapolyai Jánost. Kóstoló lent a pincében, bolt fent akár egy pohárra vagy egy üvegre. Amíg egyik szülő lent kóstol, a másik a téren fagyizik a hármassal; aztán csere, vagy nem.',
  w:'Kb. 11–17, pénteken és szombaton 20-ig; kedden és szerdán gyakorlatilag zárva. +36 30 436 5767. A pincetúra kóstolóval fizetős, pár ezer forint fejenként. A bolt kártyát fogad.'},
 {id:'t5', ll:[48.1256,21.4082], n:'Kossuth tér — a főtér és az esti fényfestés', q:'Kossuth tér Tokaj', b:'opc', age:'MINDEN KOR · a fényfestés 21-kor', meta:'fagyi, szökőkút, fényfestés 21:00 · ingyen',
  d:'A kis főtér a templommal, fagyizókkal, a Rákóczi Pince bejáratával. Nyár óta esténként 21:00-kor „Amikor Tokaj fénnyel mesél": fényfestés a téren, és a város szerint szeptemberben is folytatják. Szeptember 11–13.: IX. Tokaji Utcazene Fesztivál — 99 zenekar az utcákon és teraszokon, ingyen, péntek-szombat este fényfestéssel, vasárnap 18:30 eredményhirdetés. Október 2–4.: Tokaj-hegyaljai Szüreti Napok.',
  w:'A tér bármikor. A fényfestés 21:00 — gyerekekkel ez már kései program, egy hosszú délutáni alvás utáni estére. A fesztiválhétvégén a parkolás rémálom; a híd alatti nagy parkoló a tuti, onnan 5 perc séta.'}],
 sleep:[
 {n:'✕ Tutajos Beach kemping, Tokaj — nem kisgyerekkel', ll:[48.1149,21.4192], q:'Tutajos Beach Tokaj', rating:3.9, reviews:391,
  d:'Tisza-parti kemping-strand a vasút és egy diszkó mellett; a víz gyorsan mélyül, a vizesblokk öreg, a büfé gyenge. Sátrazni megjárja, de Tiszadadáról 35 perc — maradjatok ott.'}],
 eat:[
 {n:'Halra Bor Étterem — a hídfőnél', q:'Halra Bor Étterem Tokaj', rating:4.2, reviews:1429,
  d:'Az Erzsébet hídnál, a hajókikötőtől pár perc. Nagy adag paprikás csirke, grillezett hal, magyaros; a minőség ingadozik a kritikák szerint, a gyerekekkel viszont egyszerű. Naponta 12–20, p–szo 21-ig.'},
 {n:'A főtéri fagyizók és a Rákóczi Pince étterme', q:'Kossuth tér Tokaj fagyizó',
  d:'Fagyi a Kossuth téren a hajó után; ha felnőtt vacsora kell egy este: a Rákóczi Pince étterme a tér alatt a kritikák szerint a város legjobbja.'}]},

{id:'NY', letter:'NY', title:'Sóstó', full:'Nyíregyháza-Sóstó — az állatkert napja', kicker:'Az egész napos program · drága, de a legjobb', sub:'Az ország legjobb vidéki állatparkja, mellette skanzen, élményfürdő és kalandpark', transit:'Tiszalökről 40 perc (36-os út, Tiszavasvárin át) · Tiszadadáról 45 perc · Egerből ≈ 1¾ óra M3 · parkoló hétvégén kilencre',
 pois:[
 {id:'n1', ll:[48.0018,21.7238], n:'Nyíregyházi Állatpark — Sóstó Zoo', q:'Nyíregyházi Állatpark', b:'fo', age:'MINDEN KOR · babakocsi kötelező', meta:'egész nap · 9–18, pénztár 17-ig · 35 hektár', rating:4.8, reviews:41403,
  d:'Ötszáz faj a sóstói tölgyerdőben, földrészenként: Ócenárium üvegalagúttal és cápákkal, Zöld Piramis esőerdő, Maki-erdő (a gyűrűsfarkúak a látogatók között sétálnak, 9:30–17:30), fókashow, tevegelés 5 évestől és 120 cm-től, kisbusz a parkban a megfáradtaknak. Európa legjobb állatkertje volt a kategóriájában. Számolj 5–6 órával — a hatéves végigmenne, a kicsiknek a babakocsi nem opció, hanem kötelező.',
  w:'Szept–okt.: 9–18, pénztár 17-ig. ÁR 2026: felnőtt 8 000, gyerek (3–14) 5 600, 3 alatt 600 Ft; családi 2+2 24 100, 2+3 28 900 Ft — nektek a 2+2 + a kétéves 600 = 24 700 Ft. Igen, ennyi. Online jegy (ticketbase) sorbanállás nélkül, egy évig érvényes; kártya és SZÉP helyben. A parkoló hétvégén 9 után reménytelen — korán. Fókashow szeptembertől csak hétvégén, cápaetetés hétfőn és pénteken 9:30.'},
 {id:'n2', ll:[48.0075,21.7209], n:'Sóstói Múzeumfalu', q:'Sóstói Múzeumfalu Nyíregyháza', b:'megeri', age:'MINDEN KOR', meta:'1,5–2 óra · K–V 10–18 · hétfőn zárva', mon:true, rating:4.6, reviews:2582,
  d:'Az ország legnagyobb regionális skanzenje az állatpark mellett: falu templommal, iskolával, szatócsbolttal, kocsmával, kézműves műhelyekkel, kecskékkel. A gyerekek bemehetnek a házakba, a kemencében sül a kalács, hétvégén foglalkozások. Nyugodt levezetés az állatkert után — vagy helyette, ha az állatparki ár fáj: itt az egész család 7 000 Ft.',
  w:'Kedd–vasárnap 10–18 (pénztár 17:30), HÉTFŐN ZÁRVA. Felnőtt 2 800, családi 2+2 7 000 Ft, 6 ÉV ALATT INGYEN. Szept. 30.: a Magyar Népmese Napja. Skanzen u. 8., ingyen parkoló.'},
 {id:'n3', ll:[48.0063,21.7263], n:'Aquarius Élményfürdő', q:'Aquarius Élményfürdő Nyíregyháza', b:'opc', age:'MINDEN KOR · esőnap', meta:'9–20 · fedett + kültéri · csúszdák', rating:4.5, reviews:4469,
  d:'A sóstói fedett élményfürdő: termálmedencék több hőfokon, hullámmedence, gyerekcsúszdák, szauna. Ha az egész napot elmossa az eső, ez a menekülő — de nem olcsó (egy vendég 2+1-re 15 000 Ft-ot fizetett), és néhány része felújításra vár.',
  w:'Naponta 9–20. Aktuális ár a fürdő oldalán vagy a pénztárnál; kártya megy. Az állatpark szomszédja — a parkoló közös gond.'},
 {id:'n4', ll:[48.0059,21.7228], n:'Nyíregyházi Kalandpark', q:'Nyíregyházi Kalandpark Sóstó', b:'opc', age:'6+ · OSZTOTT PROGRAM', meta:'100+ állomásos kötélpálya · Tölgyes u. 3.', rating:4.4, reviews:110,
  d:'Több mint 100 állomásos drótköteles kalandpálya a Sóstói-erdő fái között, gyerekpályával. A hatévesnek egy szülővel; a másik szülő a kicsikkel a skanzenben — a két bejárat száz méterre van.',
  w:'Nyitvatartás és ár helyben vagy telefonon: +36 70 329 7600 — szeptemberben már nem biztos, hogy minden nap nyit, egy kritika szerint karbantartás miatt jelzés nélkül zárt.'}],
 sleep:[
 {n:'Ide sem költözünk — hazaalvás vagy Tiszadada', ll:[48.0237,21.2280], q:'Öko Kemping & Glamping Tiszadada',
  d:'Sóstó Egerből 1¾ óra, Tiszadadáról 45 perc: az állatkert egynapos program, este vissza a kempingbe vagy egyenesen haza az M3-on.'}],
 eat:[
 {n:'Az állatpark büféi és a Sóstó tópart', q:'Nyíregyházi Állatpark büfé',
  d:'Bent több büfé, automaták, pelenkázó és gyerekülőkés WC-k; kint a Sóstó-tó körül cukrászdák és éttermek, csónakázás a tavon. Szendvics a hátizsákban: a bent töltött 5–6 órához kevés a két büfésor.'}]},

{id:'H', letter:'H', title:'Hazaút', full:'Hazaút — Kesznyéten és Tiszaújváros', kicker:'A hazaút két megállója · az M3 felé', sub:'Állatsimogató és kilátótorony az ártéren, aztán meleg víz Tiszaújvárosban', transit:'Tiszadob → Tiszaújváros 25 perc (Polgáron át) vagy a pontonhídon 20 perc · Tiszaújváros → Eger ≈ 1¼ óra M3',
 pois:[
 {id:'h1', ll:[47.9872,21.0604], n:'Szamárháti-tanya — tanösvény, állatsimogató, kilátótorony', q:'Szamárháti Látogatóközpont Kesznyéten', b:'megeri', age:'MINDEN KOR · zárt cipő · a toronyba 6+ szülővel', meta:'1–1,5 óra · Kesznyéteni Tájvédelmi Körzet · ingyen', rating:5.0, reviews:9,
  d:'A Tiszatáj Közalapítvány tanyája a Kesznyéteni Tájvédelmi Körzet közepén: szürkemarha, racka, bivaly, mangalica a karámokban (az első állomás állatsimogató), aztán hat állomás: 100 méteres cölöpökön álló pallósor a mocsár fölött és egy 12 méteres megfigyelőtorony a Taktaköz fölé — kócsag, gém, ha szerencsétek van, réti sas. Kevesen ismerik, ezért üres, és ezért nem is jelzi ki minden térkép.',
  w:'A tanösvény szabadon, ingyen; a látogatóközpont és a vezetett túra bejelentkezéssel (Tiszatáj Közalapítvány / Bükki NP). Kesznyétenről táblázva, az utolsó szakasz földút — eső után sáros, a T2-nek lassan. Vizet vinni, itt nincs bolt.'},
 {id:'h2', ll:[47.9306,21.0485], n:'Tiszaújvárosi Gyógy- és Strandfürdő', q:'Tiszaújvárosi Gyógy- és Strandfürdő', b:'megeri', age:'MINDEN KOR · 4 év alatt ingyen', meta:'9:30–20 · fedett + kültéri · csúszda 110 cm-től', rating:4.5, reviews:5573,
  d:'Négycsillagos fürdő fedett és kültéri termálmedencékkel (a hidegvíz is 24 fokos), csúszdákkal, gyerekmedencével, ugrálóvárral — hazafelé az M3 mellett, 25 percre Tiszadobtól. Ha a hétvége hűvösre fordul, ez a strandnap fedett változata; ha meleg, a kültéri medencék még mennek szeptember 20-ig.',
  w:'Utószezon (aug. 31.–szept. 20.): naponta 9:30–20:00, utána a fedett rész megy tovább. 4 ÉV ALATT INGYEN, csúszda 110 cm felett. Egy vendég szerint a szekrénykulcs-kaució KÉSZPÉNZ — legyen nálad. Szederkényi út 12., +36 49 540 460, termal.tujvaros.hu. A parkoló ingyenes, esőben sáros.'}],
 sleep:[],
 eat:[
 {n:'A fürdő étterme és a polgári M3-pihenő', q:'Tiszaújvárosi Gyógy- és Strandfürdő étterem',
  d:'A fürdőben rendes magyaros étterem és büfé; ha már úton vagytok, Polgárnál az M3 pihenő a gyors megoldás hazafelé.'}]}
],

// Séták: itt nincs szint — sík gát, palló, park. A víz a kérdés, nem a lejtő.
hikes:[
{id:'w1', ll:[48.0245,21.3817], n:'1 · Kis-Tisza pallóút a Kenyérgyári-holtágon', go:'az Ökocentrum parkolójából (Töltés u. 2.), a fahídon át', time:'30–60 perc · 300 m palló + földút, ameddig jólesik', elev:'sík', diff:'konnyu', kid:'MINDEN KOR · kézen fogva a hídon', q:'Kis-Tisza Ökocentrum Tiszalök'},
{id:'w2', ll:[48.0245,21.3045], n:'2 · Arborétum és a vízlépcső körbejárása', go:'Tiszavirág utca, a Horgonyzó felől; a gáton a zsiliphez', time:'1–1,5 óra', elev:'sík', diff:'konnyu', kid:'MINDEN KOR · babakocsival', q:'Tiszalöki Arborétum'},
{id:'w3', ll:[48.0265,21.2290], n:'3 · Kemping → szabadstrand a töltésen', go:'a kemping kapujától az EuroVelo 11-en északra', time:'15 perc oda', elev:'sík', diff:'konnyu', kid:'MINDEN KOR · babakocsival', q:'Tiszadadai strand Tiszadada'},
{id:'w4', ll:[48.0172,21.1742], n:'4 · Kastélypark: labirintus, angolpark, Holt-Tisza part', go:'a kastély parkolójából, a franciakerttől az angolpark felé', time:'1 óra · a parkjegyen belül', elev:'sík', diff:'konnyu', kid:'MINDEN KOR', q:'Andrássy-kastély Tiszadob'},
{id:'w5', ll:[47.9872,21.0604], n:'5 · Szamárháti tanösvény: pallósor és torony', go:'a Szamárháti-tanyától, 6 állomás, vissza ugyanoda', time:'1–1,5 óra · kör', elev:'sík + 12 m torony', diff:'konnyu', kid:'MINDEN KOR · a toronyba 6+ szülővel', q:'Szamárháti Látogatóközpont Kesznyéten'},
{id:'w6', ll:[48.0000,21.1550], n:'6 · Bringával a gáton: kastély → Urkom emlékművek', go:'a kastélytól délre az EuroVelo 11-en', time:'40 perc oda-vissza · 6 km', elev:'sík', diff:'konnyu', kid:'6+ saját bringával · a kicsik gyerekülésben', q:'Andrássy emlékmű Tiszadob'}],

// A fél napok: amikor nincs kedv autóba ülni, vagy esik.
plans:[
{id:'p1', ll:[48.0237,21.2280], n:'Kempingnap Tiszadadán ✔', b:'fo', age:'MINDEN KOR', meta:'a bázis · nulla kilométer', q:'Öko Kemping & Glamping Tiszadada',
 steps:['reggel az ökotó, amíg üres','stég a Tiszán: kavics, horgászok, uszályok','15 perc séta a gáton a szabadstrandra — homokozás, térdig víz','délután bringa a töltésen vagy szauna','este bogrács a tűzrakóhelynél (ha nincs tilalom), csillagok'],
 d:'A legkényelmesebb nap a könyvben: a sátortól a tóig ötven méter, a folyóig hetven, a strandig tizenöt perc gyalog. Autó nem indul, pénz nem fogy. A gyerekek délre olyan fáradtak, hogy a délutáni alvás magától jön.',
 w:'Hosszabbító az áramhoz (8A). Bevásárlás Tiszalökön. Tűz előtt: erdotuz.hu. A nyári konyha 23-kor zár.'},
{id:'p2', ll:[48.0172,21.1742], n:'Esőnap-terv — mi megy zárt ajtók mögött', b:'megeri', age:'MINDEN KOR', meta:'négy fedett program, sorrendben', q:'Andrássy-kastély Tiszadob',
 steps:['Tiszadob: kastélybelső — K–V 10–18, váltásban a labirintus helyett a kávézó','Tokaj: Tokaji Múzeum — K–V 9–17, 3 szint, 1 óra','Tiszaújváros: fedett termál, csúszda, ugrálóvár (9:30–20)','Sóstó: Aquarius, ha egész napos az eső és kedvetek van 45 percet autózni','tartalék: a Horgonyzó kályhája mellett hosszú ebéd'],
 d:'A Tisza-parton az eső a homokot mossa el, nem a napot: a kastély és a két múzeum 30 percen belül van, a fürdők 25–45 percre. Csak a hétfőre figyelj — a kastély, a Tokaji Múzeum és a Múzeumfalu hétfőn zárva, akkor a fürdő marad.',
 w:'A kastélyt telefonon ellenőrizd esős hétvégén (+36 30 592 5579). Tiszaújváros: készpénz a szekrénykaucióhoz.'},
{id:'p3', ll:[48.0231,21.3473], n:'Csak fél napunk van', b:'megeri', age:'MINDEN KOR', meta:'négy program, mind 2 óra alatt', q:'Feketeszakáll Élménypark és Strand Tiszalök',
 steps:['Feketeszakáll strand délelőtt, amíg üres — 8-kor nyit','arborétum + vízlépcső séta, 45 perc, ingyen','egy komp oda-vissza Tiszatardosra — 10 perc, pár száz forint','kastélypark csak parkjeggyel (1 200 Ft), labirintus, aztán haza'],
 d:'A könyv legfontosabb listája: mind a négy két órán belül, mind sík, mind babakocsival. Hazafelé az arborétum és a kastély is útba esik Polgár irányába.',
 w:'A strandjegy egész napra szól — ha délelőtt megveszitek, délután visszamehettek. Hétfőn a kastélypark is zárva.'},
{id:'p4', ll:[48.0231,21.3473], n:'Az utolsó strandnap — hogy férjen bele minden', b:'fo', age:'MINDEN KOR', meta:'egy egész nap a homokon · 1 600 Ft/fő', q:'Feketeszakáll Élménypark és Strand Tiszalök',
 steps:['8:00 nyitás — az első két órában tiétek a homok','a kicsik a lassan mélyülő vízben, a hatéves vízibiciklin egy szülővel (3 000 Ft/óra)','ebéd bent: Ételbár vagy Grill Terasz','délutáni alvás a napernyő alatt, a nagy a strandfocipályán','16 után hűl a víz — fagyi, strandröplabda, 18-ra kifelé'],
 d:'Szeptember közepén zár a szezon, és ez a hétvége a hétvége: vasárnapra napos, 25 fokos időt mondanak. A holtág vize nyáron 28 fokos volt, most úgy 21–22 — a kicsiknek délután, amikor a levegő is meleg.',
 w:'A napijegy a Facebook szerint 1 600 Ft ezen a hétvégén, 3 alatt ingyen. Pokróc, két váltás pótruha, meleg pulcsi estére — 10 fok lesz éjjel.'}],

scenarios:[],

today:[
{id:'td1', ids:['l1','p4','da2'], c:'Napos, meleg', icon:'ph-sun', r:'A strandnap: Feketeszakáll 8-tól, homok, holtág sodrás nélkül, 1 600 Ft-os napijegy. Késő délután a tiszadadai szabadstrand a homokozásra és a naplementére — de ott a Tisza folyik, a kicsik kézen fogva.'},
{id:'td2', ids:['k1','t3','h2','n3','p2'], c:'Esik', icon:'ph-cloud-rain', r:'Kastélybelső Tiszadobon (K–V 10–18), Tokaji Múzeum (K–V 9–17), aztán fedett termál Tiszaújvárosban vagy az Aquarius Sóstón. Hétfőn csak a fürdők maradnak.'},
{id:'td3', ids:['n1','n2','k1','h1'], c:'Felhős, hűvös', icon:'ph-cloud-sun', r:'Az állatkert napja Sóstón — 5–6 óra séta, babakocsi, 24 700 Ft a családnak, online jeggyel. Vagy olcsóbban: kastélypark és labirintus Tiszadobon, délután a kesznyéteni állatsimogató és torony.'},
{id:'td4', ids:['p1','l2','da3'], c:'Mindenki fáradt', icon:'ph-moon-stars', r:'Kempingnap: ökotó, stég, gát. Ha mégis autó: az arborétum és a vízlépcső fél óra padokkal és zúgó vízzel, ingyen. Este bogrács.'},
{id:'td5', ids:['l1','l2','h2','h1'], c:'Hétfő', icon:'ph-calendar-x', r:'Hétfőn ZÁRVA: kastély, Tokaji Múzeum, Múzeumfalu, Öreghalász Csárda, Gyurgyalag. NYITVA: a strand, az arborétum, a fürdők, a tanösvények. Hétfőre a strand és a hazaúti megállók valók.'},
{id:'td6', ids:['t1','l4','k3','da1'], c:'Vizet akarunk, de nem strandot', icon:'ph-boat', r:'Sétahajó Tokajban (50 perc, családi 5 900, online foglalással), komp Tiszatardosra, pontonhíd Tiszadobnál, vagy kenu a kempingből a Tiszára — egyik szülő, a hatéves, mentőmellény.'},
{id:'td7', ids:['t4','t5','t2'], c:'Bor kell, váltásban', icon:'ph-wine', r:'Rákóczi Pince a tokaji főtér alatt: egyik szülő lent a lovagteremben kóstol, a másik a téren fagyizik, aztán a Bodrog-parti játszótér. Este 21-kor fényfestés a téren, ha bírják.'},
{id:'td8', ids:['p3','l1','l2','k1'], c:'Csak fél napunk van', icon:'ph-clock', r:'Strand délelőtt, arborétum a kocsiig, kastélypark csak parkjeggyel hazafelé — mind két óra alatt, mind Polgár irányában. Hétfőn a kastélypark kimarad.'},
{id:'td9', ids:['k1','k2','w6'], c:'Kastélyt és kincskeresést', icon:'ph-castle-turret', r:'Andrássy-kastély: 365 ablakot számolni, labirintusban eltévedni. Utána bringával vagy hordozóval a gáton az Urkom három emlékművéhez — ott kezdődött a Tisza szabályozása, és senki nincs ott.'},
{id:'td10', ids:['h1','h2','k3'], c:'Hazafelé egy megálló', icon:'ph-paw-print', r:'A pontonhídon át Kesznyétenre: szürkemarha, bivaly, pallósor, 12 méteres torony, ingyen. Ha van még idő, Tiszaújváros fürdője az M3 mellett — szept. 20-ig a kültéri medencék is mennek.'}],

essentials:[
{n:'Két víz, két szabály', d:'A Feketeszakáll strand HOLTÁG: nincs sodrás, nincs örvény, lassan mélyül — ide a kétéves is bemehet. A tiszadadai szabadstrand ÉLŐ TISZA: sodrás, hirtelen mélyülő part, szeptemberben vízimentő nélkül — ott a kicsik térdig, kézen fogva, a hatéves karúszóval és szülővel. A kemping stégjéről és a kenuból mentőmellény nélkül senki. A folyó szép, de nem játszótér.'},
{n:'Ez az utolsó hétvége — dátumok', d:'Feketeszakáll: a szezonbérletek 09.15-ig érvényesek, a szezon vége nincs kiírva — a Facebook-oldal a forrás, ott jelent meg az 1 600 Ft-os hétvégi napijegy is. Öko Kemping: szept. 30-ig. Tiszaújváros kültéri medencéi: szept. 20-ig. Tokaji sétahajó: szeptemberben ritkított, csak az online naptár számít. Az időjárás: szombaton felhős, esőesély, 23 fok; VASÁRNAP napos, 25 fok — a strand a vasárnap. Éjjel 9–10 fok.'},
{n:'Hétfő', d:'Hétfőn ZÁRVA: Andrássy-kastély (park is), Tokaji Múzeum, Sóstói Múzeumfalu, Tiszai Öreghalász Csárda (kedden is), Gyurgyalag (kedden is). Vasárnap zárva: Tisza Étterem, Anikó kifőzdéje. Ha hétfőn is maradtok, az a strand, az arborétum, a tanösvények és a fürdők napja.'},
{n:'Készpénz-boríték', d:'Anikó kifőzdéje Tiszadobon CSAK KÉSZPÉNZ. A két komp és a pontonhíd készpénzes, pár száz forint. A tiszaújvárosi fürdőben a szekrénykulcs kauciója egy vendég szerint készpénz. A kemping, a strand, a kastély, az állatpark és az éttermek kártyát (a kemping és az állatpark SZÉP-et is) fogadnak — a boríték a kesztyűtartóban legyen, nem a bankban.'},
{n:'Hideg éjszaka, spórolós zuhany', d:'Hajnalban 9–10 fok: meleg hálózsák, sapka a kicsiknek, egy réteg pluszban a busz tetőágyába is. A kemping napelemről melegíti a vizet — felhős nap után kevés van, a zuhany nyomógombos időzítővel megy: zuhanyozzatok elosztva, ne mind az öten este hétkor. A jurtákban nincs fűtés.'},
{n:'A kemping rendje', d:'Érkezés 22:00 előtt. 23 és 7 között csend, autóval nem mozogsz a területen, a nyári konyha és a tó fénye 23-kor lemegy. Áram a parcellán 8A — hosszabbító kell. Tűz csak a kijelölt helyen és csak tilalmon kívül (erdotuz.hu reggel). Kutya pórázon, a tóba és a játszótérre nem.'},
{n:'A kastély kedvezménye', d:'A NÖF szabálya: a „legalább két 18 alatti gyereket kísérő szülő" kedvezményes jegyet kap — ez ti vagytok, mindketten. Bent: 2 × 2 200 + a hatéves 2 200 = 6 600 Ft az egész családnak (6 alatt ingyen), csak park 1 200 Ft/fő. A parkoló 20 autós — hétvégén tízre ott lenni, vagy a faluban parkolni és 10 percet sétálni.'},
{n:'Az állatpark ára', d:'2026-ban felnőtt 8 000, gyerek 5 600 Ft — a régi 3 000-es ár, amit a régi oldalak írnak, nem él. Nektek 2+2 családi (24 100) + a kétéves (600) = 24 700 Ft. Online jegy sorbanállás nélkül, egy évig érvényes — ha nem biztos a nap, otthon még ne vegyétek. A skanzen mellette 7 000 Ft az egész családnak: ha az állatpark ára fáj, ez a B.'},
{n:'Szúnyog, kullancs, zárt cipő', d:'Tisza-part szeptemberben: még szúnyog, az ártéri füvön kullancs — riasztó és esti átvizsgálás. A pallóutakra (Kis-Tisza, Szamárhát) és a gátra zárt cipő, papucsban nem működik. A holtág partján a fehér homok lehűl estére — pokróc.'},
{n:'A könyv egyetlen szabálya', d:'Ez nem túraút, ez az utolsó strandhétvége. Egy program egy nap, a többi ráadás; ha kétségetek van, menjetek a homokra. A kastély kimaradhat, Tokaj kimaradhat, az állatkert biztosan kimaradhat — a nap a vízben nem. Sóstó és Tokaj ide bármikor visszahozható, a strand csak jövő júniustól.'}],

checklist:[
{id:'cl1', t:'Fürdőcucc ötre + két váltás pótruha a kicsiknek'},
{id:'cl2', t:'Karúszó / mentőmellény a hármasnak — az élő Tiszához és a kenuhoz'},
{id:'cl3', t:'Meleg hálózsák, sapka, pulcsi — 9–10 fok hajnalban'},
{id:'cl4', t:'Hosszabbító a 8A-es parcellához'},
{id:'cl5', t:'Készpénz-boríték — kifőzde, kompok, fürdő-kaució'},
{id:'cl6', t:'Kártya + SZÉP-kártya — kemping, strand, kastély, állatpark'},
{id:'cl7', t:'Szúnyog- és kullancsriasztó, esti átvizsgálás'},
{id:'cl8', t:'Zárt cipő mindenkinek — pallóút, gát, tanösvény'},
{id:'cl9', t:'Pokróc, napernyő, naptej — még szeptemberben is'},
{id:'cl10', t:'Babakocsi — arborétum, állatpark, gát; hordozó a tanösvényre'},
{id:'cl11', t:'Bogrács + gyújtós — a kemping tűzrakóhelye ad fát; erdotuz.hu reggel'},
{id:'cl12', t:'Feketeszakáll Facebook megnézve: nyitva? a 1 600 Ft-os napijegy él?'},
{id:'cl13', t:'Kemping foglalás megerősítve: +36 20 364 2101 (recepció 8–12, 15–19)'},
{id:'cl14', t:'Szombat este asztal a Horgonyzóban (+36 30 297 9187) vagy a csárdában'},
{id:'cl15', t:'Távcső — vízimadarak a holtágon, a szamárháti toronyból'}]
};

// Kép-tartalék. A vázban a sorrend: helyi fotó → rögzített Wikimedia-fájl →
// Wikipédia-vezérkép (wk) → Commons geokeresés a koordináta körül → ikon.
// Csak konkrét szócikkek, település-szintű tartalék NINCS (lásd bukkalja.js).
// A Bodrog cikke a hajónak: folyófotó, nem városkép. A többi helyszín a
// koordináta körüli geokódolt Commons-fotóra esik vissza.
const WK = {
  k1: 'hu:Andrássy-kastély_(Tiszadob)',
  w4: 'hu:Andrássy-kastély_(Tiszadob)',
  l2: 'hu:Tiszalöki_vízerőmű',
  w2: 'hu:Tiszalöki_vízerőmű',
  t1: 'hu:Bodrog',
  t3: 'hu:Tokaji_Múzeum',
  n1: 'hu:Nyíregyházi_Állatpark',
  n2: 'hu:Sóstói_Múzeumfalu',
  h1: 'hu:Kesznyéteni_Tájvédelmi_Körzet',
  w5: 'hu:Kesznyéteni_Tájvédelmi_Körzet'
};
data.modules.forEach(m => {
  (m.pois || []).forEach(x => { x.wk = WK[x.id] || undefined; });
  (m.sleep || []).forEach(x => { delete x.wk; });
  (m.eat || []).forEach(x => { delete x.wk; });   // kajálda sosem kap falufotót
});
data.hikes.forEach(h => { h.wk = WK[h.id] || undefined; });

data.itineraries = [
{id:'strand', name:'Az utolsó strandhétvége', tag:'1 éj · Tiszadada ✔ · szo–va', note:'A hétvége, amire a könyv készült: szombaton felhős, esőesélyes — a kastély napja; vasárnap napos, 25 fok — a strand napja. Egy éjszaka a Tisza-parton a kettő között.',
 days:[
 {d:1, wd:'szombat', t:'Kastély, beállás, csárda a parton', mod:'K', drive:'Egerből ≈ 1½ óra a kastélyig (M3, Polgár) · Tiszadada +12 perc', from:'Eger', stops:['k1','da1'], opts:['k2','da2','da3'], sleep:'Öko Kemping & Glamping, Tiszadada', sleepQ:'Öko Kemping & Glamping Tiszadada', tip:'Tízre a kastélynál (kis parkoló!), váltásban bent és a labirintusban, ebéd a kastélyban vagy Anikónál (készpénz). Délután beállás, ökotó, séta a gáton a szabadstrandra. Vacsora az Öreghalász Csárda teraszán (sze–va) vagy bogrács. 22 előtt a kempingben, hálózsák: 10 fok lesz.'},
 {d:2, wd:'vasárnap', t:'Strandnap, aztán haza', mod:'L', drive:'Tiszadada → strand 10 perc · haza Polgáron át ≈ 1¾ óra', from:'Öko Kemping & Glamping Tiszadada', stops:['l1','p4'], opts:['l2','l4'], sleep:'otthon', sleepQ:'Eger', tip:'Bontás, 8-ra a strandon: holtág, fehér homok, 1 600 Ft-os napijegy, 3 alatt ingyen. Ebéd bent. Hazafelé az arborétum és a vízlépcső fél óra Tiszalök nyugati szélén, útba esik — vagy egy komp Tiszatardosra, csak a kaland kedvéért.'}]},

{id:'hosszu', name:'Hosszú hétvége', tag:'2 éj · strand + kastély + Tokaj', note:'Két éjszaka, három nap: pénteken érkezés és strand, szombaton kastély és Tokaj, vasárnap strand és a kesznyéteni hazaút. Költözni nem kell — minden 45 percen belül.',
 days:[
 {d:1, wd:'péntek', t:'Érkezés és strand délután', mod:'L', drive:'Egerből ≈ 1¾ óra Tiszalökig', from:'Eger', stops:['l1','da1'], opts:['l2'], sleep:'Öko Kemping & Glamping, Tiszadada', sleepQ:'Öko Kemping & Glamping Tiszadada', tip:'Egyenesen a strandra (Tiszalök, Tiszadob felőli várostábla), a kempingbe csak 17 után. Recepció 15–19! Vacsora a csárdában a parton.'},
 {d:2, wd:'szombat', t:'Kastély reggel, Tokaj délután', mod:'T', drive:'Tiszadada → kastély 12 perc → Tokaj 40 perc (Tiszalök, komp vagy Rakamaz) → vissza 35 perc', from:'Öko Kemping & Glamping Tiszadada', stops:['k1','t1','t2'], opts:['t4','t5','l4'], sleep:'Öko Kemping & Glamping, Tiszadada', sleepQ:'Öko Kemping & Glamping Tiszadada', tip:'Kastély tízre, labirintus, ebéd. Délután a tiszatardosi komppal át a Tiszán, Tokajban a foglalt sétahajó, játszótér a Bodrog-parton, fagyi a téren, egy pohár a Rákóczi Pincében váltásban. Ha bírják: 21-kor fényfestés — de inkább vissza a kempingbe vacsorára.'},
 {d:3, wd:'vasárnap', t:'Strand, majd haza Kesznyétenen át', mod:'H', drive:'strand 10 perc → Tiszadob pontonhíd → Kesznyéten 20 perc → Tiszaújváros 15 perc → Eger 1¼ óra', from:'Öko Kemping & Glamping Tiszadada', stops:['l1','h1'], opts:['h2','k3'], sleep:'otthon', sleepQ:'Eger', tip:'Bontás, strand délelőtt. Délután a pontonhídon át a Szamárháti-tanyára (állatsimogató, torony, ingyen), aztán ha marad erő, Tiszaújváros fürdője hazafelé — vagy egyenesen az M3.'}]},

{id:'sosto', name:'Az állatkertes változat', tag:'1 éj · Sóstó + strand', note:'Ha az állatkert a fő program: szombaton egész nap Sóstón, alvás Tiszadadán, vasárnap strand és a kastély hazafelé. Drága nap, de a hatéves évekig emlegeti.',
 days:[
 {d:1, wd:'szombat', t:'Sóstó: állatpark egész nap', mod:'NY', drive:'Egerből ≈ 1¾ óra M3 · Sóstó → Tiszadada 45 perc', from:'Eger', stops:['n1'], opts:['n2','n4'], sleep:'Öko Kemping & Glamping, Tiszadada', sleepQ:'Öko Kemping & Glamping Tiszadada', tip:'Online jegy otthonról, 9-re a parkolónál. 5–6 óra bent, babakocsi, szendvics a táskában. Négykor kifelé, 45 perc a kempingig — recepció 19-ig! Vacsora a csárdában vagy bogrács.'},
 {d:2, wd:'vasárnap', t:'Strand, kastélypark hazafelé', mod:'L', drive:'strand 10 perc · kastély 20 perc · Eger 1½ óra', from:'Öko Kemping & Glamping Tiszadada', stops:['l1','k1'], opts:['l2','k2'], sleep:'otthon', sleepQ:'Eger', tip:'Strand délelőtt-délben, aztán hazafelé a kastélypark parkjeggyel (1 200 Ft/fő, 6 alatt ingyen): labirintus és rózsalugas, bent már nem kell. Polgárnál fel az M3-ra.'}]},

{id:'egynap', name:'Egy nap, hazaalvás', tag:'0 éj · strand + vízlépcső', note:'A leggyakoribb eset: van egy napotok, estére otthon. Strand, egy séta az arborétumban, a kastélypark hazafelé — semmi több.',
 days:[
 {d:1, wd:'bármelyik nap', t:'Strand és a vízlépcső', mod:'L', drive:'Egerből ≈ 1¾ óra · a két helyszín közt 8 perc · haza 1¾ óra', from:'Eger', stops:['l1','l2'], opts:['k1','da2','l4'], sleep:'otthon', sleepQ:'Eger', tip:'Nyitásra a strandon, amíg üres és hűvös a homok; ebéd bent. Délután az arborétum árnyékában levezetés a zúgó gátnál. Hazafelé a kastélypark parkjeggyel, ha nem hétfő — és ha még bírja valaki.'}]}
];

window.registerTrip({
  id: 'tisza',
  // Content version — bump on every content change; version.json mirrors it.
  version: '2026-09-05.1',
  date: '2026-09-05',
  name: 'Tisza-part',
  period: '2026. szept.',
  title: 'Tisza-part — az utolsó strandhétvége',
  kicker: 'Tiszalök · Tiszadada · Tiszadob · +Tokaj, Sóstó · 6 modul',
  tagline: 'Fehér homok egy holtágon sodrás nélkül, egy Loire-kastély 365 ablakkal, és egy ökokemping 70 méterre a Tiszától. Egerből 1¾ óra, minden 45 percen belül, költözni nem kell. Vasárnap napos.',
  cover: 'photos/tisza/cover.webp',
  verified: 'Adatok ellenőrizve 2026. szeptember 5-én · a strand hétvégi ára a Facebook-oldalról, a szezonzárás dátuma bizonytalan — indulás előtt egy pillantás',
  origin: 'Eger',
  // Petrolkék: a bázis és a hazaút — a többi téglavörös.
  accentModules: ['D', 'H'],
  extraGroup: { letter: '★', title: 'Séták és fél napok', sub: 'Itt nincs szint — sík gát, palló, park. És mi van, ha esik.' },
  mapIntro: 'Három falu egy tízperces sávban a Tisza bal partján: Tiszadob a kastéllyal nyugaton, Tiszadada a kempinggel középen, Tiszalök a stranddal és a vízlépcsővel keleten — Egerből az M3-on Polgárig, onnan húsz perc. A folyón túl Kesznyéten tanyája és Tiszaújváros fürdője (pontonhíd Tiszadobnál, vagy Polgáron át), északkeletre Tokaj 25 percre (komp Tiszatardosra, vagy a rakamazi híd), keletre Nyíregyháza-Sóstó negyven. Minden a bázistól 45 percen belül van, és a modulok között sosem több húsz percnél.',
  maps: [],
  photoDir: 'photos/tisza/',
  // A borító saját rajz (Tisza-kanyar, kastélysziluett, a busz) — cseréld le a
  // strandon készült fotóra, ha lesz: ugyanez a fájlnév, 800 px széles WebP.
  photos: {},
  wikiFiles: {},
  data: data
});

})();
