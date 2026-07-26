// Zero-dependency static file server for local preview of the PWA.
// Needed (rather than just opening the .html file) because service workers
// and IndexedDB require the app to be served over http(s), not file://.
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const ROOT = __dirname;
const DEFAULT_DOC = "T2 Mobil Utikonyv.dc.html";
const PORT = process.env.PORT || 8080;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf"
};

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    res.writeHead(400).end("Bad request");
    return;
  }

  const rel = pathname === "/" ? DEFAULT_DOC : pathname.replace(/^\/+/, "");
  const filePath = path.normalize(path.join(ROOT, rel));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("404 Not Found: " + pathname);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const headers = { "Content-Type": MIME[ext] || "application/octet-stream" };
    // The service worker file itself must never be served from a stale HTTP
    // cache, or the browser won't notice updates to it.
    if (path.basename(filePath) === "sw.js") headers["Cache-Control"] = "no-cache";
    res.writeHead(200, headers).end(data);
  });
});

server.listen(PORT, () => {
  console.log(`T2 Mobil Útikönyv — dev server running:`);
  console.log(`  http://localhost:${PORT}/`);
  console.log(`(Ctrl+C to stop. Service workers require http(s), so open this URL — don't open the HTML file directly.)`);
});
