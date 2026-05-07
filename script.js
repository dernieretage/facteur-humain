/* facteur.humain — Studio site
   Independent rebuild based on the official PDF portfolio.
   Vimeo / YouTube / Instagram links are extracted directly from the PDF annotations. */

/* ============================================================
   1.  DATA  (artists, projects, captions, embedded URLs)
   ============================================================ */

const LOKMANE_PORTFOLIO = "https://www.lokmanearchive.com";

const ARTISTS = [
  {
    id: "jonathan-steuer",
    name: "Jonathan Steuer",
    role: "director — photographer",
    cover: "assets/covers/jsteuer.jpg",
    films: [
      { t: "Yamé — Solo",                      img: "assets/thumbnails/jsteuer_films_01.jpg", url: "https://vimeo.com/1095317939" },
      { t: "Freak — Yseult",                   img: "assets/thumbnails/jsteuer_films_02.jpg", url: "https://vimeo.com/1178116939" },
      { t: "Till the end",                     img: "assets/thumbnails/jsteuer_films_03.jpg", url: "https://vimeo.com/1019552186" },
      { t: "Eva — Fumée Blanche",              img: "assets/thumbnails/jsteuer_films_04.jpg", url: "https://vimeo.com/1082807807" },
      { t: "Ashley Graham — Vaillant studio",  img: "assets/thumbnails/jsteuer_films_05.jpg", url: "https://vimeo.com/1142377095" },
      { t: "Vaillant Studio — Défilé 2026",    img: "assets/thumbnails/jsteuer_films_06.jpg", url: "https://vimeo.com/1142374984" },
      { t: "Oasis — LALA &CE",                 img: "assets/thumbnails/jsteuer_films_07.jpg", url: "https://www.youtube.com/watch?v=9Vbvkgz1X3I" },
      { t: "Fucking Young — Venice Beach",     img: "assets/thumbnails/jsteuer_films_08.jpg", url: "https://vimeo.com/845017943" }
    ],
    photos: [
      "assets/photos/jsteuer_photos_01.jpg",
      "assets/photos/jsteuer_photos_02.jpg",
      "assets/photos/jsteuer_photos_03.jpg",
      "assets/photos/jsteuer_photos_04.jpg",
      "assets/photos/jsteuer_photos_05.jpg",
      "assets/photos/jsteuer_photos_06.jpg",
      "assets/photos/jsteuer_photos_07.jpg",
      "assets/photos/jsteuer_photos_08.jpg",
      "assets/photos/jsteuer_photos_09.jpg",
      "assets/photos/jsteuer_photos_10.jpg",
      "assets/photos/jsteuer_photos_11.jpg"
    ]
  },
  {
    id: "eva-wang",
    name: "Eva Wang",
    role: "director",
    cover: "assets/covers/evawang.jpg",
    films: [
      { t: "Spring Collection 2026",                 img: "assets/thumbnails/evawang_films_01.jpg", url: "https://www.instagram.com/p/DVGWoPSDB01/" },
      { t: "HolyBrune — Visions",                    img: "assets/thumbnails/evawang_films_02.jpg", url: "https://www.youtube.com/watch?v=sov6PgkW0Cg" },
      { t: "Wejdene — Invincible",                   img: "assets/thumbnails/evawang_films_03.jpg", url: "https://www.youtube.com/watch?v=cOYY_slJ6t0" },
      { t: "Julianne Moore for W Korea",             img: "assets/thumbnails/evawang_films_04.jpg", url: "https://www.instagram.com/p/C8UQurcNTw1/" },
      { t: "Solann — Le loup",                       img: "assets/thumbnails/evawang_films_05.jpg", url: "https://www.youtube.com/watch?v=nod0irefwpw" },
      { t: "HolyBrune — Do Me A Favor",              img: "assets/thumbnails/evawang_films_06.jpg", url: "https://www.youtube.com/watch?v=VwSqDWEJKlA" },
      { t: "Steve Ibrahim — Le Mur du Salon",        img: "assets/thumbnails/evawang_films_07.jpg", url: "https://www.youtube.com/watch?v=C7NHG-HQTkE" }
    ]
  },
  {
    id: "maru-kuleshova",
    name: "Maru Kuleshova",
    role: "director — photographer",
    cover: "assets/covers/maru.jpg",
    films: [
      { t: "Rememory",                                       img: "assets/thumbnails/maru_films_01.jpg", url: "https://vimeo.com/1141391879" },
      { t: "Saluki — Wild Ea$t",                             img: "assets/thumbnails/maru_films_02.jpg", url: "https://www.instagram.com/p/CrTXFnRoX5b/" },
      { t: "Where the space coincides with the silence",     img: "assets/thumbnails/maru_films_03.jpg", url: "https://www.instagram.com/p/CG2nBSep67m/" },
      { t: "The last touch",                                 img: "assets/thumbnails/maru_films_04.jpg", url: "https://www.instagram.com/p/Cw0WM8Fop-b/" }
    ],
    photos: [
      "assets/photos/maru_photos_01.jpg",
      "assets/photos/maru_photos_02.jpg",
      "assets/photos/maru_photos_03.jpg",
      "assets/photos/maru_photos_04.jpg",
      "assets/photos/maru_photos_05.jpg"
    ]
  },
  {
    id: "dafna-enbar",
    name: "Dafna Enbar",
    role: "director",
    cover: "assets/covers/dafna.jpg",
    films: [
      { t: "SZZZ",                              img: "assets/thumbnails/dafna_films_01.jpg", url: "https://www.instagram.com/p/CgmC1cDFQ7I/", ratio: "square" },
      { t: "Aviram Spies",                      img: "assets/thumbnails/dafna_films_02.jpg", url: "https://www.instagram.com/p/DRCZD_hgshR/", ratio: "square" },
      { t: "Shirej Duo",                        img: "assets/thumbnails/dafna_films_03.jpg", url: "https://www.instagram.com/p/C-TFM4aNvsP/", ratio: "square" },
      { t: "Firefly — Baba Ganesh",             img: "assets/thumbnails/dafna_films_04.jpg", ratio: "square" },
      { t: "It might be fishing season",        img: "assets/thumbnails/dafna_films_05.jpg", ratio: "square" },
      { t: "Au Lac — François Limousine",       img: "assets/thumbnails/dafna_films_06.jpg", ratio: "square" },
      { t: "The Forbidden Fruit",               img: "assets/thumbnails/dafna_films_07.jpg", url: "https://vimeo.com/1166423951", ratio: "square" },
      { t: "Untitled",                          img: "assets/thumbnails/dafna_films_08.jpg", ratio: "square" }
    ]
  },
  {
    id: "raphael-stora",
    name: "Raphael Stora",
    role: "director",
    cover: "assets/covers/raphael.jpg",
    films: [
      { t: "Grande Halle × Linda Hayford × Raphaël Stora",      img: "assets/thumbnails/raphael_films_01.jpg", url: "https://www.youtube.com/watch?v=D0JXniLcbq0" },
      { t: "Electric Bodies | ARTE.tv Culture",                 img: "assets/thumbnails/raphael_films_02.jpg", url: "https://www.youtube.com/watch?v=GcaqNLxH8jk" },
      { t: "Bonnie Banane — Cha-Cha-Cha",                       img: "assets/thumbnails/raphael_films_03.jpg", url: "https://www.youtube.com/watch?v=cvOzu9dgz1E" },
      { t: "Orée",                                              img: "assets/thumbnails/raphael_films_04.jpg", url: "https://www.youtube.com/watch?v=glBec-vARww" },
      { t: "Les promesses du sol — Itinéraire d'un danseur parisien | ARTE", img: "assets/thumbnails/raphael_films_05.jpg", url: "https://www.youtube.com/watch?v=0G1s8Khp8vQ" },
      { t: "Premiers bleus — Rolex — Léo Walk",                 img: "assets/thumbnails/raphael_films_06.jpg" }
    ]
  },
  {
    id: "omri-rosengart",
    name: "Omri E.A Rosengart",
    role: "photographer",
    cover: "assets/covers/omri.jpg",
    photos: [
      "assets/thumbnails/omri_photos_01.jpg",
      "assets/thumbnails/omri_photos_02.jpg",
      "assets/thumbnails/omri_photos_03.jpg",
      "assets/thumbnails/omri_photos_04.jpg",
      "assets/thumbnails/omri_photos_05.jpg",
      "assets/thumbnails/omri_photos_06.jpg",
      "assets/thumbnails/omri_photos_07.jpg",
      "assets/thumbnails/omri_photos_08.jpg"
    ],
    photoRatio: "square"
  },
  {
    id: "lokmane",
    name: "Lokmane",
    role: "director",
    cover: "assets/covers/lokmane.jpg",
    films: [
      { t: "Sam «EXT. NUIT»",                          img: "assets/thumbnails/lokmane_films_01.jpg", url: LOKMANE_PORTFOLIO, external: true },
      { t: "Sense «Les 10.000 Heures»",                img: "assets/thumbnails/lokmane_films_02.jpg", url: LOKMANE_PORTFOLIO, external: true },
      { t: "Vivienne Westwood by Andreas Kohler",      img: "assets/thumbnails/lokmane_films_03.jpg", url: LOKMANE_PORTFOLIO, external: true },
      { t: "Wesley Joseph «Pluto Baby»",               img: "assets/thumbnails/lokmane_films_04.jpg", url: LOKMANE_PORTFOLIO, external: true },
      { t: "Uzi «Retour Aux Pyramides»",               img: "assets/thumbnails/lokmane_films_05.jpg", url: LOKMANE_PORTFOLIO, external: true },
      { t: "Communs «La Confession de Lace»",          img: "assets/thumbnails/lokmane_films_06.jpg", url: LOKMANE_PORTFOLIO, external: true },
      { t: "Salim Azzam «Butterfly Language»",         img: "assets/thumbnails/lokmane_films_07.jpg", url: LOKMANE_PORTFOLIO, external: true },
      { t: "Sense «Le Laboratoire»",                   img: "assets/thumbnails/lokmane_films_08.jpg", url: LOKMANE_PORTFOLIO, external: true }
    ]
  },
  {
    id: "gosia-turczynska",
    name: "Gosia Turczynska",
    role: "director",
    cover: "assets/covers/gosia.jpg",
    films: [
      { t: "A brief record of sweet boredom — Vogue CS",                 img: "assets/thumbnails/gosia_films_01.jpg", url: "https://www.instagram.com/reel/DABemetoj4D/" },
      { t: "Sweet and slow, polish summer — Vogue Polska",               img: "assets/thumbnails/gosia_films_02.jpg", url: "https://www.instagram.com/reel/CwS4U6UIBeU/" },
      { t: "Fusset Official",                                            img: "assets/thumbnails/gosia_films_03.jpg", url: "https://www.instagram.com/reel/CtlsObVIWDk/" },
      { t: "«The Itch» — PUSS PUSS Magazine",                            img: "assets/thumbnails/gosia_films_04.jpg", url: "https://www.instagram.com/reel/DCCLHKIIdB4/" },
      { t: "Working 9 to 5 isn't exactly Celeste's dream — Lovewant",    img: "assets/thumbnails/gosia_films_05.jpg", url: "https://www.instagram.com/reel/DADt6GHuz6d/" },
      { t: "Vogue CS",                                                   img: "assets/thumbnails/gosia_films_06.jpg", url: "https://www.instagram.com/reel/C55nrhCojgA/" },
      { t: "Nicotine Magazine",                                          img: "assets/thumbnails/gosia_films_07.jpg", url: "https://www.instagram.com/reel/C4NwBIXI86d/" },
      { t: "Reset",                                                      img: "assets/thumbnails/gosia_films_08.jpg", url: "https://www.instagram.com/reel/DMNt0I-N9KV/" }
    ],
    photos: [
      "assets/thumbnails/gosia_photos_01.jpg",
      "assets/thumbnails/gosia_photos_02.jpg",
      "assets/thumbnails/gosia_photos_03.jpg",
      "assets/thumbnails/gosia_photos_04.jpg",
      "assets/thumbnails/gosia_photos_05.jpg",
      "assets/thumbnails/gosia_photos_06.jpg",
      "assets/thumbnails/gosia_photos_07.jpg",
      "assets/thumbnails/gosia_photos_08.jpg"
    ],
    photoRatio: "square"
  },
  {
    id: "jeremie-danon",
    name: "Jérémie Danon",
    role: "director — photographer",
    cover: "assets/covers/jeremie.jpg",
    films: [
      { t: "Plein Air",         img: "assets/thumbnails/jeremie_films_01.jpg", url: "https://www.instagram.com/p/CxVqM2II_NH/" },
      { t: "Nouveaux classiques", img: "assets/thumbnails/jeremie_films_02.jpg" },
      { t: "Naomi",             img: "assets/thumbnails/jeremie_films_03.jpg" },
      { t: "Utopie en cours",   img: "assets/thumbnails/jeremie_films_04.jpg" },
      { t: "Enthéorie",         img: "assets/thumbnails/jeremie_films_05.jpg", url: "https://www.instagram.com/p/DPJ7swmAYc-/" },
      { t: "Drift",             img: "assets/thumbnails/jeremie_films_06.jpg" }
    ]
  },
  {
    id: "mizhu",
    name: "Mizhu",
    role: "director",
    cover: "assets/covers/mizhu.jpg",
    films: [
      { t: "Life is Hard — Swag Planet", img: "assets/thumbnails/mizhu_films_01.jpg", url: "https://www.youtube.com/watch?v=R5sdJMSgfqE" },
      { t: "Renta 32",                   img: "assets/thumbnails/mizhu_films_02.jpg", url: "https://www.youtube.com/watch?v=nu4UcB8c2bs" },
      { t: "Website",                    img: "assets/thumbnails/mizhu_films_03.jpg", url: "https://www.instagram.com/p/DW8rTMoDMDp/" },
      { t: "Life is Hard — Swag Planet", img: "assets/thumbnails/mizhu_films_04.jpg", url: "https://www.youtube.com/watch?v=R5sdJMSgfqE" },
      { t: "Renta 32",                   img: "assets/thumbnails/mizhu_films_05.jpg", url: "https://www.youtube.com/watch?v=nu4UcB8c2bs" },
      { t: "Website",                    img: "assets/thumbnails/mizhu_films_06.jpg", url: "https://www.instagram.com/p/DW8rTMoDMDp/" }
    ]
  },
  {
    id: "renaud-labelle",
    name: "Renaud Labelle",
    role: "photographer",
    cover: "assets/covers/renaud.jpg",
    photos: [
      "assets/thumbnails/renaud_photos_01.jpg",
      "assets/thumbnails/renaud_photos_02.jpg",
      "assets/thumbnails/renaud_photos_03.jpg",
      "assets/thumbnails/renaud_photos_04.jpg",
      "assets/thumbnails/renaud_photos_05.jpg",
      "assets/thumbnails/renaud_photos_06.jpg",
      "assets/thumbnails/renaud_photos_07.jpg",
      "assets/thumbnails/renaud_photos_08.jpg"
    ],
    photoRatio: "tall"
  },
  {
    id: "julien-coustillac",
    name: "Julien Coustillac",
    role: "photographer",
    cover: "assets/covers/julien.jpg",
    photos: [
      "assets/thumbnails/julien_photos_01.jpg",
      "assets/thumbnails/julien_photos_02.jpg",
      "assets/thumbnails/julien_photos_03.jpg",
      "assets/thumbnails/julien_photos_04.jpg",
      "assets/thumbnails/julien_photos_05.jpg",
      "assets/thumbnails/julien_photos_06.jpg",
      "assets/thumbnails/julien_photos_07.jpg",
      "assets/thumbnails/julien_photos_08.jpg"
    ],
    photoRatio: "square"
  }
];

/* ============================================================
   2.  EMBED HELPERS  (Vimeo / YouTube / Instagram)
   ============================================================ */

const Embed = {
  parse(url) {
    if (!url) return null;
    const u = String(url);

    // Vimeo
    let m = u.match(/vimeo\.com\/(\d+)/);
    if (m) {
      return {
        type: "vimeo",
        id: m[1],
        embed: `https://player.vimeo.com/video/${m[1]}?autoplay=1&dnt=1&color=ffffff&title=0&byline=0&portrait=0`,
        external: u
      };
    }
    // YouTube
    m = u.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    if (m) {
      return {
        type: "youtube",
        id: m[1],
        embed: `https://www.youtube-nocookie.com/embed/${m[1]}?autoplay=1&modestbranding=1&rel=0&playsinline=1`,
        external: u
      };
    }
    // Instagram (post / reel)
    m = u.match(/instagram\.com\/(?:p|reel)\/([A-Za-z0-9_-]+)/);
    if (m) {
      return {
        type: "instagram",
        id: m[1],
        embed: `https://www.instagram.com/p/${m[1]}/embed/captioned/`,
        external: u
      };
    }
    return { type: "external", embed: null, external: u };
  }
};

/* ============================================================
   3.  TINY DOM HELPERS
   ============================================================ */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v;
    else if (k === "html") n.innerHTML = v;
    else if (k === "style") n.style.cssText = v;
    else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
    else if (v != null) n.setAttribute(k, v);
  }
  kids.flat().forEach(k => k != null && n.appendChild(typeof k === "string" ? document.createTextNode(k) : k));
  return n;
};
const svgIcon = (path, w = 12, h = 12) => {
  const ns = "http://www.w3.org/2000/svg";
  const s = document.createElementNS(ns, "svg");
  s.setAttribute("width", w); s.setAttribute("height", h);
  s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("aria-hidden", "true");
  s.innerHTML = path;
  return s;
};

function pickGridCols(count) {
  if (count <= 2) return 2;
  if (count <= 4) return 4;
  if (count === 6) return 3;
  return 4;
}

/* ============================================================
   4.  RENDER  (artists list, side index, artist pages)
   ============================================================ */

function renderArtistsList() {
  const list = $("#artistsList");
  ARTISTS.forEach((a, i) => {
    const li = el("li", {},
      el("a", { href: "#" + a.id, "data-cursor": "link" },
        el("span", { class: "a-name" }, a.name),
        el("span", { class: "a-role" }, a.role)
      )
    );
    li.style.transitionDelay = (i * 60) + "ms";
    list.appendChild(li);
  });
}

function renderSideIndex() {
  const list = $("#sideIndex");
  ARTISTS.forEach((a, i) => {
    list.appendChild(
      el("li", {},
        el("a", { href: "#" + a.id, "data-cursor": "link", "data-target": a.id },
          (i + 1).toString().padStart(2, "0") + " — " + a.name.split(" ").slice(-1)[0]
        )
      )
    );
  });
}

function makeTile(item, artistName, isPhoto = false, photoRatio = null) {
  const ratioClass = item.ratio || photoRatio || "";
  const playPath = '<path d="M8 5l11 7-11 7V5z" fill="currentColor"/>';
  const isVideo = !!item.url && !item.external;
  const showPlay = isVideo && !isPhoto;
  const e = item.url ? Embed.parse(item.url) : null;
  const platform = e ? e.type : "";

  const tile = el("a", {
    class: `tile ${ratioClass} ${isPhoto ? "no-play" : ""} ${!showPlay && !isPhoto ? "no-play" : ""}`.trim(),
    href: item.url || "#",
    "data-cursor": "link",
    "data-img": item.img,
    "data-cap": item.t || "",
    "data-artist": artistName,
    "data-url": item.url || "",
    "data-external": item.external ? "1" : "",
    "data-platform": platform,
    target: item.url ? (item.external ? "_blank" : "_self") : "_self",
    rel: item.external ? "noopener" : null
  },
    el("div", { class: "tile-frame" },
      el("img", { src: item.img, alt: item.t || "", loading: "lazy", decoding: "async", width: "1280", height: "720" }),
      showPlay ? el("div", { class: "tile-play" }, svgIcon(playPath, 18, 18)) : null,
      platform ? el("div", { class: `tile-badge platform-${platform}` }, platformLabel(platform)) : null
    ),
    item.t ? el("div", { class: "tile-cap" }, el("span", {}, item.t)) : null
  );
  return tile;
}

function platformLabel(p) {
  if (p === "vimeo") return "Vimeo";
  if (p === "youtube") return "YouTube";
  if (p === "instagram") return "Instagram";
  return "";
}

function renderArtistPage(a) {
  const cover = el("div", { class: "artist-cover", "data-reveal": "" },
    el("div", { class: "artist-cover-img", "data-bg": a.cover }),
    el("h2", { class: "visually-hidden" }, a.name),
    el("span", { class: "artist-discipline" }, a.role)
  );
  const blocks = [cover];

  if (a.films && a.films.length) {
    const cols = pickGridCols(a.films.length);
    const grid = el("div", { class: `grid cols-${cols}` });
    a.films.forEach((f, i) => {
      const tile = makeTile(f, a.name, false);
      tile.style.transitionDelay = (i * 70) + "ms";
      grid.appendChild(tile);
    });
    blocks.push(
      el("div", { class: "gallery" },
        el("h3", { class: "gallery-title" }, "Films"),
        grid,
        el("p", { class: "gallery-sign" }, a.name)
      )
    );
  }

  if (a.photos && a.photos.length) {
    const cols = pickGridCols(a.photos.length);
    const grid = el("div", { class: `grid cols-${cols}` });
    a.photos.forEach((src, i) => {
      const tile = makeTile({ img: src, t: "" }, a.name, true, a.photoRatio);
      tile.style.transitionDelay = (i * 60) + "ms";
      grid.appendChild(tile);
    });
    blocks.push(
      el("div", { class: "gallery" },
        el("h3", { class: "gallery-title" }, "Photography"),
        grid,
        el("p", { class: "gallery-sign" }, a.name)
      )
    );
  }

  // Next-artist arrow
  const idx = ARTISTS.findIndex(x => x.id === a.id);
  const isLast = idx === ARTISTS.length - 1;
  const nextArtist = ARTISTS[(idx + 1) % ARTISTS.length];
  const nextLabel = !isLast ? `Next — ${nextArtist.name}` : "Back to top";
  const nextHref = !isLast ? `#${nextArtist.id}` : "#hero";
  blocks.push(
    el("div", { class: "artist-end" },
      el("a", { href: nextHref, "data-cursor": "link" },
        nextLabel,
        svgIcon(
          isLast
            ? '<path d="M12 20V5m0 0l-6 6m6-6l6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
            : '<path d="M12 4v15m0 0l-6-6m6 6l6-6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
        )
      )
    )
  );

  return el("section", { class: "artist", id: a.id }, blocks);
}

function renderArtistPages() {
  const wrap = $("#artistPages");
  ARTISTS.forEach(a => wrap.appendChild(renderArtistPage(a)));
}

/* ============================================================
   5.  REVEAL ON SCROLL
   ============================================================ */

function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        if (!e.target.dataset.persist) io.unobserve(e.target);
      }
    });
  }, { threshold: 0.18 });

  $$(".tile, .artists-list li, .gallery-sign, .gallery-title, .artist-end").forEach(n => io.observe(n));
  $$("[data-reveal]").forEach(n => { n.dataset.persist = "1"; io.observe(n); });

  // Lazy-load cover background images when within 1.5 viewports
  const bgIO = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const url = e.target.dataset.bg;
        if (url) {
          // Preload then apply
          const img = new Image();
          img.onload = () => { e.target.style.backgroundImage = `url(${url})`; };
          img.src = url;
        }
        obs.unobserve(e.target);
      }
    });
  }, { rootMargin: "150% 0px" });
  $$(".artist-cover-img[data-bg]").forEach(n => bgIO.observe(n));
}

/* ============================================================
   6.  SIDE INDEX  +  PROGRESS BAR
   ============================================================ */

function setupSideIndex() {
  const links = $$("#sideIndex a");
  const aside = $(".side-index");
  const sections = ARTISTS.map(a => document.getElementById(a.id)).filter(Boolean);
  const hero = $("#hero");
  const artistsSec = $("#artists");
  const contact = $("#contact");
  if (!aside) return;

  let raf = null;
  const compute = () => {
    raf = null;
    const scrollY = window.scrollY;
    const y = scrollY + window.innerHeight * 0.4;
    let active = -1;
    sections.forEach((s, i) => { if (s.offsetTop <= y) active = i; });
    links.forEach((l, i) => l.classList.toggle("active", i === active));

    const inHero      = scrollY < hero.offsetHeight - 100;
    const inArtists   = artistsSec.offsetTop - 100 < scrollY && scrollY < (sections[0]?.offsetTop || Infinity) - 100;
    const inContact   = scrollY + window.innerHeight > contact.offsetTop + 100;
    aside.style.opacity = (inHero || inArtists || inContact) ? "0" : "1";
  };
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(compute); };

  document.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", compute);
  compute();
}

function setupProgress() {
  const bar = $("#progressBar");
  let raf = null;
  const update = () => {
    raf = null;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    bar.style.transform = `scaleX(${p})`;
  };
  document.addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
  update();
}

/* ============================================================
   7.  CUSTOM CURSOR
   ============================================================ */

function setupCursor() {
  if (window.matchMedia("(pointer:coarse)").matches) return;
  const c = $("#cursor");
  let x = -100, y = -100, tx = -100, ty = -100;

  document.addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    c.classList.add("show");
  });
  document.addEventListener("mouseleave", () => c.classList.remove("show"));

  const tick = () => {
    x += (tx - x) * 0.22;
    y += (ty - y) * 0.22;
    c.style.transform = `translate3d(${x}px,${y}px,0)`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  document.addEventListener("mouseover", (e) => {
    const t = e.target.closest("[data-cursor='link'], a, button, .tile");
    if (t) c.classList.add("hover");
  });
  document.addEventListener("mouseout", (e) => {
    const t = e.target.closest("[data-cursor='link'], a, button, .tile");
    if (t) c.classList.remove("hover");
  });
}

/* ============================================================
   8.  PLAYER MODAL  (Vimeo / YouTube / Instagram)
   ============================================================ */

const Player = (() => {
  const root  = $("#player");
  const stage = $("#playerStage");
  const cap   = $("#playerCap");
  const ext   = $("#playerExternal");
  const closeBtn = $("#playerClose");
  const prevBtn  = $("#playerPrev");
  const nextBtn  = $("#playerNext");

  let group = [];
  let i = 0;

  const buildEmbed = (item) => {
    stage.innerHTML = "";
    const e = Embed.parse(item.url);
    if (!e || !e.embed) {
      // fallback: full-image preview
      const img = el("img", { src: item.img, alt: item.cap || "", class: "player-fallback-img" });
      stage.appendChild(img);
      ext.href = item.url || "#";
      ext.style.visibility = item.url ? "visible" : "hidden";
      return;
    }
    // Loading state with poster image
    const wrap = el("div", { class: `player-iframe-wrap player-${e.type}` });
    const loader = el("div", { class: "player-loader" },
      el("div", { class: "player-loader-poster", style: `background-image:url(${item.img})` }),
      el("div", { class: "player-loader-spinner" })
    );
    wrap.appendChild(loader);

    const f = el("iframe", {
      src: e.embed,
      title: item.cap || "Video player",
      allow: "autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write",
      allowfullscreen: "true",
      frameborder: "0",
      loading: "eager"
    });
    f.addEventListener("load", () => {
      loader.classList.add("done");
    });
    wrap.appendChild(f);
    stage.appendChild(wrap);
    ext.href = e.external;
    ext.style.visibility = "visible";
  };

  const show = () => {
    const it = group[i];
    if (!it) return;
    cap.textContent = [it.artist, it.cap].filter(Boolean).join(" — ");
    buildEmbed(it);
  };

  const open = (items, startIdx) => {
    group = items.filter(x => x.url || x.img);
    if (!group.length) return;
    i = Math.max(0, Math.min(group.length - 1, startIdx));
    root.classList.add("open");
    root.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    show();
  };
  const close = () => {
    root.classList.remove("open");
    root.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    stage.innerHTML = "";       // stop playback
  };
  const next = () => { i = (i + 1) % group.length; show(); };
  const prev = () => { i = (i - 1 + group.length) % group.length; show(); };

  closeBtn.addEventListener("click", close);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  root.addEventListener("click", (e) => { if (e.target === root) close(); });
  document.addEventListener("keydown", (e) => {
    if (!root.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  // Touch swipe support
  let tx = 0, ty = 0, dx = 0;
  const stage_el = stage;
  stage_el.addEventListener("touchstart", (e) => {
    if (!e.touches[0]) return;
    tx = e.touches[0].clientX; ty = e.touches[0].clientY; dx = 0;
  }, { passive: true });
  stage_el.addEventListener("touchmove", (e) => {
    if (!e.touches[0]) return;
    dx = e.touches[0].clientX - tx;
  }, { passive: true });
  stage_el.addEventListener("touchend", () => {
    if (Math.abs(dx) > 60) (dx < 0 ? next : prev)();
    dx = 0;
  });

  return { open, close };
})();

function bindPlayerToTiles() {
  document.addEventListener("click", (e) => {
    const t = e.target.closest(".tile");
    if (!t) return;
    // External link tiles → let browser handle (e.g. lokmane portfolio)
    if (t.dataset.external === "1" && t.dataset.url) return;
    e.preventDefault();
    const gallery = t.closest(".gallery");
    const tiles = $$(".tile", gallery);
    const items = tiles.map(x => ({
      img: x.dataset.img,
      cap: x.dataset.cap || "",
      artist: x.dataset.artist || "",
      url: x.dataset.url || ""
    }));
    Player.open(items, tiles.indexOf(t));
  });
}

/* ============================================================
   9.  PARALLAX  (hero pointer + cover scroll)
   ============================================================ */

function setupHeroParallax() {
  const bg = $(".hero-bg");
  if (!bg) return;
  let raf = null;
  let tx = 0, ty = 0;
  document.addEventListener("mousemove", (e) => {
    tx = (e.clientX / window.innerWidth - 0.5) * 12;
    ty = (e.clientY / window.innerHeight - 0.5) * 12;
    if (!raf) raf = requestAnimationFrame(() => {
      bg.style.transform = `translate(${tx}px, ${ty}px)`;
      raf = null;
    });
  }, { passive: true });
}

function setupCoverParallax() {
  const covers = $$(".artist-cover-img");
  if (!covers.length) return;
  let raf = null;
  const update = () => {
    raf = null;
    const vh = window.innerHeight;
    const sy = window.scrollY;
    covers.forEach(c => {
      const parent = c.parentElement;
      const r = parent.getBoundingClientRect();
      // parallax depth based on cover position
      const center = r.top + r.height / 2 - vh / 2;
      const d = Math.max(-1, Math.min(1, center / vh));
      // Subtle vertical translate + scale
      c.style.setProperty("--py", `${d * -28}px`);
    });
  };
  document.addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ============================================================
  10.  SMOOTH ANCHOR  +  YEAR  +  LOADER  +  KICKOFF
   ============================================================ */

function setupAnchorClicks() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute("href");
    if (href.length <= 1) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  });
}

function setYear() { const n = $("#year"); if (n) n.textContent = new Date().getFullYear(); }

function ready() {
  const start = performance.now();
  const finish = () => {
    const elapsed = performance.now() - start;
    const min = 1100;
    setTimeout(() => document.body.classList.add("ready"), Math.max(0, min - elapsed));
  };
  if (document.readyState === "complete") finish();
  else window.addEventListener("load", finish, { once: true });
}

document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  renderArtistsList();
  renderSideIndex();
  renderArtistPages();
  setupReveal();
  setupSideIndex();
  setupProgress();
  setupCursor();
  setupHeroParallax();
  setupCoverParallax();
  bindPlayerToTiles();
  setupAnchorClicks();
  setYear();
  ready();

  // Register service worker (best-effort)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
});
