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
// Left empty, the app simply shows whatever ratings are written into the trip
// files and no network calls are made.
window.GUIDE_PLACES_KEY = '';
