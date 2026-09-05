// Optional app configuration. Everything here is safe to leave empty.
//
// Google Places API key. With a key set, the app fills in the Google rating and
// review count for every place, hike and campsite that has a `q` search term,
// and caches the numbers in IndexedDB so they survive offline and are only
// fetched once per install.
//
// Before pasting a key in:
//   * this file is public — anyone viewing the page source can read it, so
//     restrict the key in Google Cloud Console to HTTP referrers for
//     jetshekelstein.github.io and to the Places API only;
//   * it bills to your Google Cloud project. One lookup per place, cached after
//     that — a full refresh of both guidebooks is well under a cent at current
//     Text Search pricing, but the billing account has to exist.
//
// The same key also powers the "Mit ajánl a Google?" discovery in the Közelben
// panels (Places Nearby Search around the current GPS fix).
//
// Left empty, the app simply shows whatever ratings are written into the trip
// files, the discovery button stays hidden, and no network calls are made.
//
// What a key does NOT do for a European project: under the Google Maps Platform
// EEA terms in force since 2025-07-08, a project with an EEA billing address
// gets no Place Photos (and no review texts) back from the Places API — the
// response simply omits them, while ratings and review counts still arrive. So
// the app takes Google IMAGES from Street View instead, for places that have no
// other picture, once the Street View Static API is enabled on this key in Cloud
// Console (APIs & Services → Enable APIs → "Street View Static API"). Until then
// that source stays silent and costs nothing.
//
// The family's key was checked on 2026-09-05: Places API (New) answers, legacy
// Places is off, Street View Static is not yet enabled. It accepted a request
// that carried no Referer at all, i.e. it is NOT restricted yet — restrict it to
// https://jetshekelstein.github.io/* and to the two APIs above BEFORE pasting it
// here, because this file is public. Until it is here, the same key can be
// entered per device under Mentve → Alkalmazás → Google-kulcs.
window.GUIDE_PLACES_KEY = '';
