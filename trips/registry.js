// Multi-trip registry for the Mobil Útikönyv shell.
//
// Every trip lives in its own trips/<id>.js and calls registerTrip() exactly
// once. The shell renders whatever is in window.GUIDE_TRIPS, so adding a trip
// is a matter of dropping in one file (plus two <script> tags — see
// docs/ADDING-A-TRIP.md). Nothing in the app is hard-coded per trip.
window.GUIDE_TRIPS = window.GUIDE_TRIPS || [];

window.registerTrip = function (trip) {
  if (!trip || !trip.id || !trip.data) {
    console.error('[trips] registerTrip needs { id, data }:', trip);
    return;
  }
  // Trips may list local photos either as an array of ids (id → id.webp) or as
  // an explicit id → filename map. Normalise to a map so the shell has one
  // lookup, and so ids like 'CS-s0' (a module's first sleep entry) can point at
  // an arbitrary file name.
  trip.photoFiles = Array.isArray(trip.photos)
    ? trip.photos.reduce((m, id) => { m[id] = id + '.webp'; return m; }, {})
    : (trip.photos || {});

  const list = window.GUIDE_TRIPS;
  const i = list.findIndex(t => t.id === trip.id);
  if (i >= 0) list[i] = trip; else list.push(trip);
  // Newest trip first in the picker. `date` is a sortable ISO-ish string, so a
  // plain reverse string compare is enough; `order` breaks ties explicitly.
  list.sort((a, b) =>
    String(b.date || '').localeCompare(String(a.date || '')) ||
    (a.order || 0) - (b.order || 0) ||
    String(a.title || '').localeCompare(String(b.title || ''), 'hu'));
};
