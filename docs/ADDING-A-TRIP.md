# Új út hozzáadása

Az app egy közös váz (`T2 Mobil Utikonyv.dc.html`), amibe több útikönyv is
betölthető. Az indítóképernyő az útválasztó: a **legutóbbi út áll az első
helyen**, és a legutóbb megnyitott út a következő indításnál magától nyílik,
pontosan ott, ahol elhagytad.

Egy új út = **egy fájl** a `trips/` mappában, plusz két sor a vázban.

## 1. A trip fájl

Másold le a legközelebbi meglévőt (`trips/gombaszog.js` vagy `trips/tatra.js`) és
írd át. A szerkezet:

```js
(function () {

const data = {
  modules: [ /* … */ ],   // A/B/C… modulok: pois[], sleep[], eat[]
  hikes: [],              // opcionális túralista
  plans: [],              // opcionális napi tervek / extra kártyák
  scenarios: [],          // nincs használva a felületen
  today: [],              // a „Mi legyen ma?" döntéstábla
  essentials: [],         // „Amit nem lehet megúszni"
  checklist: []           // csomag-ellenőrző
};

data.itineraries = [ /* napi bontású változatok */ ];

window.registerTrip({
  id: 'valami',              // stabil azonosító — ez a tárolási kulcs is!
  date: '2027-06-01',        // rendezési kulcs: a legfrissebb kerül előre
  name: 'Valami',            // fejléc az appban
  period: '2027. jún.',      // fejléc, halványan
  title: 'Valami és környéke',
  kicker: '5 nap · 4 modul',
  tagline: 'Egy-két mondat az útválasztó kártyára.',
  cover: 'photos/valami/cover.webp',
  verified: 'Adatok ellenőrizve …',
  origin: 'Eger',            // alapértelmezett kiindulópont az útvonal-linkekhez
  accentModules: ['A'],      // ezek a modulbetűk petrolkékek, a többi téglavörös
  extraGroup: null,          // hikes/plans gyűjtőcsoport a Felfedezés fülön
  mapIntro: '…',             // a Térkép fül bevezetője (üresen elhagyható)
  maps: [],                  // { f, t, link, tab } — vázlatos térképek, ha vannak
  photoDir: 'photos/valami/',
  photos: { poiId: 'fajl.webp' },  // vagy: ['id1','id2'] → id.webp
  wikiFiles: {},             // kézzel fixált Wikimedia fájlnevek
  data: data
});

})();
```

### Mezők, amiket érdemes tudni

| Mező | Mit csinál |
| --- | --- |
| `id` | Az IndexedDB kulcsa (`trip:<id>`). **Soha ne írd át** élesben — elveszik a mentett helyek és a csomaglista. |
| `date` | Csak rendezésre. Bármilyen ISO-szerű, összehasonlítható string. |
| `draft: true` | Az út látszik az útválasztón, de nem nyitható meg („Készül"). `draftNote` a magyarázat. |
| `photos` | Lehet tömb (`id` → `id.webp`) vagy `id → fájlnév` map. A map kulcsa lehet szintetikus id is: `CS-s0` a modul első alvóhelye, `CS-e1` a második kajáldája. |
| `wk` (POI-n) | `hu:Cikk_neve` vagy `sk:Clanok` — ha nincs helyi fotó, a Wikipédia vezető képét tölti le és cache-eli. |
| `accentModules` | Csak szín. Ide azok a modulbetűk kerülnek, amiket vizuálisan el akarsz választani. |
| `extraGroup` | Ha van `hikes`/`plans`, ezek ebbe a csoportba kerülnek a Felfedezés fülön (`{ letter, title, sub }`). `null` = ne jelenjen meg. |

A modulbetű 1–3 karakter lehet (`A`, `C+`, `FIX`) — a váz automatikusan kisebb
betűvel szedi a hosszabbat, hogy beférjen.

### POI mezők

```js
{ id:'x1', n:'Név', q:'Google Maps keresőszó', b:'fo'|'megeri'|'opc',
  age:'MINDEN KOR', meta:'műfaj · időtartam', d:'2–4 mondat leírás',
  w:'MIKOR, MENNYIÉRT — nyitvatartás, ár, taktika',
  mon:true,      // „Hétfőn zárva" figyelmeztető chip
  cash:true,     // „Csak készpénz" figyelmeztető chip
  wk:'hu:Cikk' } // fotó-fallback
```

### Napi terv (`itineraries[].days[]`)

```js
{ d:1, wd:'szerda', t:'A nap címe', mod:'CS',
  drive:'≈ 2 óra', from:'Kiindulópont',
  stops:['x1','x2'],      // a nap kötelező programja
  opts:['x3'],            // „Ha marad idő / helyette"
  sleep:'Kemping neve', sleepQ:'Google Maps keresőszó',
  tip:'Egy mondat, ami megmenti a napot' }
```

Az `stops`/`opts` a POI `id`-kra hivatkozik, akármelyik modulból. A „nap
útvonala a Mapsen" link ebből épül: `from` → `stops` waypointok → `sleepQ`.

Ne hagyd üresen a `stops`-ot: a kártya főblokkja akkor üres marad.

## 2. Beköttetés a vázba

Két helyre kell felvenni a fájlt:

1. `T2 Mobil Utikonyv.dc.html`, a `<helmet>` blokkban:
   ```html
   <script src="trips/valami.js"></script>
   ```
   A sorrend nem számít — a registry `date` szerint rendez.

2. `sw.js`, az `APP_SHELL` listában: a trip fájl és a fotói, hogy offline is
   meglegyenek. **És emeld a `VERSION`-t** (`v3` → `v4`), különben a régi cache
   marad érvényben.

3. `version.json`: emeld a `version` mezőt, és írd át a `notes`-t egy mondatra.
   Erről tudja az app, hogy van új kiadás — lásd lentebb.

## 3. Fotók

A vázban a legnagyobb megjelenítés egy 230 px magas, teljes szélességű hero, így
**800 px széles WebP bőven elég** (~100 kB/kép). Minden fotó bekerül az offline
cache-be, tehát a méret közvetlenül a telepítés méretét növeli.

Ebben a konténerben nincs `cwebp` és `PIL`, de a headless Chromium tud WebP-t
írni — a `photos/gombaszog/` készlete így készült (canvas → `toDataURL('image/webp', 0.68)`,
max 800 px szélesség).

## 4. Kiadás — hogy az app észrevegye

Minden deploynál **emeld a `version.json` `version` mezőjét**. Ez a kiadás
azonosítója; az app ezt hasonlítja össze, és ebből lesz a „Van új verzió"
értesítés. A `notes` szövege jelenik meg a felhasználónak, szóval írj bele
emberi nyelven egy mondatot arról, mi változott.

```json
{
  "version": "2026-08-20.1",
  "sw": "v3",
  "date": "2026-08-20",
  "notes": "Szádelő nyitvatartás javítva."
}
```

Hogyan működik a keresés (`Mentve` fül alján, `Alkalmazás` blokk):

| Jel | Mit néz |
| --- | --- |
| `version.json` | A service worker gyorsítótárában lévő példány a **futó** kiadást bélyegzi (telepítéskor került oda); a hálózatról lekért (`?live=`) példány azt, ami **most van kiadva**. Ha a kettő eltér, van frissítés. |
| `sw.js` | `registration.update()` — ha a `VERSION` változott, a böngésző magától újratelepíti a workert. |
| GitHub commit API | Csak információ: kiírja, mi változott utoljára és mikor. Publikus repó, token nem kell. Ha nem érhető el, a keresés ettől is működik. |

Ellenőriz: indítás után 4 másodperccel, valahányszor előhozod az appot
(félóránként legfeljebb egyszer), és amikor rákoppintasz.

A „Frissítés most" megkéri a service workert, hogy töltse le újra az
app-shellt a meglévő cache **fölé**, és csak utána tölt újra — a cache
törlése ugyanis hagyna egy pillanatot, amikor az újratöltés nem talál
semmit, és az app stílus nélkül jön fel.

Ha elfelejtetted emelni a `version.json`-t, a `Gyorsítótár törlése` link
ugyanezt kézzel elvégzi.

## Amit a váz automatikusan hoz

Nem kell trip-enként megírni: badge-ek és korjelzések, készpénz/hétfő
figyelmeztetések, keresés és kategóriaszűrő, mentett helyek, csomag-ellenőrző
számlálóval, világos/sötét mód, Google Maps útvonal- és értékelés-linkek, napi
útvonalak, offline cache, valamint a görgetéspozíció visszaállítása (fülönként és
helyszínenként) a vissza gombra.

Minden út **saját** mentett helyeket, csomaglistát és aktuális napot tárol
(`trip:<id>` kulcs alatt); a téma és a legutóbbi út közös (`app` kulcs).
