/* ==========================================================================
   Compatible Automotive — site scripts
   Shared header/footer, icons and interactive components.
   ========================================================================== */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  /* ---------- Icons (24px stroke icons) ---------- */
  const P = {
    car: '<path d="M5 17h14M3 13l2.2-5.5A2 2 0 0 1 7.1 6h9.8a2 2 0 0 1 1.9 1.5L21 13v4a1 1 0 0 1-1 1h-1M3 13v4a1 1 0 0 0 1 1h1M3 13h18"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2a5 5 0 0 1 5.5 5.8"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8a2.8 2.8 0 0 1-4-4l8-8-1.3-1.3a4 4 0 0 0-5-5l2.6 2.6-1.4 2.8-2.8 1.4L6.5 6.9"/>',
    cog: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-7"/><path d="M15 7h5v5"/>',
    megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h3l8 5V5L7 10H4a1 1 0 0 0-1 1z"/><path d="M19 8a5 5 0 0 1 0 8"/><path d="M7 14l1.5 6"/>',
    ai: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/><path d="M5 16l.6 1.4L7 18l-1.4.6L5 20l-.6-1.4L3 18l1.4-.6z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5L5 20"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    box: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.5" y="14" width="4" height="6" rx="1.5"/><rect x="17.5" y="14" width="4" height="6" rx="1.5"/><path d="M20 20a3 3 0 0 1-3 2h-3"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>',
    ticket: '<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M13 6v12" stroke-dasharray="2 2"/>',
    activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    grad: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    phone: '<path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
    pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chevron: '<path d="M9 6l6 6-6 6"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    data: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    message: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12z"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    flow: '<rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="15" y="15" width="6" height="6" rx="1.5"/><path d="M6 9v4a2 2 0 0 0 2 2h7"/><path d="M12 12l3 3-3 3"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.6 1-1.1a5.5 5.5 0 0 0 0-7.7z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5.5 3.5-5.5 3.5z"/>',
    factory: '<path d="M3 21V10l6 4V10l6 4V6h3l3 3v12z"/><path d="M7 17h2M13 17h2"/>'
  };
  const icon = (name) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    (P[name] || P.bolt) + "</svg>";

  function hydrateIcons(root) {
    (root || document).querySelectorAll("[data-icon]").forEach((el) => {
      if (!el.dataset.iconDone) {
        el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon));
        el.dataset.iconDone = "1";
      }
    });
  }

  /* ---------- Header & footer ---------- */
  const page = document.body.dataset.page || "";
  const active = (p) => (page === p ? " active" : "");
  const current = (p) => (page === p ? ' aria-current="page"' : "");

  const megaSolutions = [
    ["solutions.html#dealership", "cog", "Dealership Technology", "DMS, stock, parts, service, sales and reporting"],
    ["solutions.html#digital", "globe", "Digital", "Websites, marketing, SEO, social and advertising"],
    ["solutions.html#customer", "users", "Customer Experience", "CRM, lead management and communication"],
    ["solutions.html#innovation", "ai", "Innovation", "AI, image enhancement, automation and data"],
    ["solutions.html#roles", "target", "Solutions for your role", "Dealer principals, sales, marketing, aftersales, OEMs"],
    ["solutions.html#oem", "factory", "OEM integrations", "Connect your network with automotive technology"]
  ];
  const megaResources = [
    ["insights.html", "book", "Compatible Insights", "Articles, guides, videos and webinars"],
    ["insights.html#case-studies", "chart", "Case studies", "Real dealerships. Real results."],
    ["support.html", "headset", "Support centre", "Knowledge base, tickets and system status"],
    ["about.html#careers", "briefcase", "Careers", "Build the future of automotive with us"]
  ];
  const megaHTML = (items) =>
    '<div class="mega">' +
    items.map(([href, ic, t, d]) => `<a href="${href}"><span class="ico">${icon(ic)}</span><div><strong>${t}</strong><span>${d}</span></div></a>`).join("") +
    "</div>";

  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.outerHTML = `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" id="siteHeader">
  <div class="container">
    <a href="index.html" class="brand" aria-label="Compatible Automotive home">
      <img src="assets/logo-full.png" alt="Compatible Automotive" width="220" height="51">
    </a>
    <nav class="main-nav" aria-label="Main">
      <a href="index.html" class="${active("home").trim()}"${current("home")}>Home</a>
      <div class="nav-item${active("solutions")}"><button type="button" aria-expanded="false">Solutions</button>${megaHTML(megaSolutions)}</div>
      <a href="products.html" class="${active("products").trim()}"${current("products")}>Products</a>
      <a href="digital.html" class="${active("digital").trim()}"${current("digital")}>Digital</a>
      <a href="ai.html" class="${active("ai").trim()}"${current("ai")}>AI &amp; Innovation</a>
      <div class="nav-item${active("resources")}"><button type="button" aria-expanded="false">Resources</button>${megaHTML(megaResources)}</div>
      <a href="about.html" class="${active("about").trim()}"${current("about")}>About Us</a>
    </nav>
    <div class="header-actions">
      <a href="support.html#ticket" class="support-link${active("support")}"${current("support")}>Open a Ticket</a>
      <a href="contact.html" class="btn btn--primary btn--sm">Contact Us</a>
    </div>
    <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>
</header>`;
  }

  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.outerHTML = `
<div class="footer-stripe"></div>
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="index.html" class="brand"><img src="assets/logo-full-white.png" alt="Compatible Automotive" width="220" height="51"></a>
        <p>Building the digital infrastructure modern dealerships run on. Proudly headquartered in Johannesburg, supporting automotive businesses across 19 African markets since 1989.</p>
      </div>
      <div><h4>Solutions</h4><ul>
        <li><a href="solutions.html#dealership">Dealership Technology</a></li>
        <li><a href="solutions.html#digital">Digital</a></li>
        <li><a href="solutions.html#customer">Customer Experience</a></li>
        <li><a href="solutions.html#innovation">Innovation</a></li>
        <li><a href="solutions.html#roles">Solutions for…</a></li></ul></div>
      <div><h4>Products</h4><ul>
        <li><a href="products.html">Titan DMS</a></li>
        <li><a href="products.html#motordx">MotorDX</a></li>
        <li><a href="products.html#frontu">Frontu</a></li>
        <li><a href="products.html#easichat">EasiChat</a></li>
        <li><a href="products.html#phyron">Phyron</a></li></ul></div>
      <div><h4>Resources</h4><ul>
        <li><a href="insights.html">Insights</a></li>
        <li><a href="insights.html#case-studies">Case Studies</a></li>
        <li><a href="support.html">Support</a></li>
        <li><a href="support.html#status">System Status</a></li></ul></div>
      <div><h4>Company</h4><ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="about.html#people">Our People</a></li>
        <li><a href="about.html#careers">Careers</a></li>
        <li><a href="contact.html">Contact</a></li></ul></div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Compatible Automotive. All rights reserved.</span>
      <span>8 Saddle Dr, Woodmead, Sandton, 2191 · <a href="tel:+27115182000">011 518 2000</a> · <a href="mailto:info@compatible.co.za">info@compatible.co.za</a></span>
    </div>
  </div>
</footer>`;
  }
  hydrateIcons();

  /* ---------- Header behaviour ---------- */
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = header.querySelector(".nav-toggle");
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    header.querySelectorAll(".nav-item > button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const item = btn.parentElement;
        const wasOpen = item.classList.contains("open");
        header.querySelectorAll(".nav-item.open").forEach((i) => { i.classList.remove("open"); i.firstElementChild.setAttribute("aria-expanded", "false"); });
        if (!wasOpen) { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
      });
    });
    document.addEventListener("click", () => header.querySelectorAll(".nav-item.open").forEach((i) => i.classList.remove("open")));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        header.querySelectorAll(".nav-item.open").forEach((i) => i.classList.remove("open"));
        document.body.classList.remove("nav-open");
      }
    });
    header.querySelectorAll(".main-nav a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("nav-open")));
  }

  /* ---------- Reveal on scroll ---------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;
  document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const runCounter = (el) => {
    const target = +el.dataset.count, suffix = el.dataset.suffix || "", dur = 1600, t0 = performance.now();
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { runCounter(en.target); co.unobserve(en.target); }
    }), { threshold: 0.5 });
    counters.forEach((c) => co.observe(c));
  } else counters.forEach((c) => (c.textContent = c.dataset.count + (c.dataset.suffix || "")));

  /* ---------- Generic tabs ---------- */
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const tabs = group.querySelectorAll('[role="tab"]');
    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.classList.toggle("active", on);
      });
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", (e) => {
        const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (dir) { const n = tabs[(i + dir + tabs.length) % tabs.length]; n.focus(); select(n); }
      });
    });
  });

  /* ---------- Interactive dealership ---------- */
  const orbit = document.getElementById("orbit");
  if (orbit) {
    const nodes = [
      { key: "vehicles", icon: "car", label: "Vehicles", tag: "Stock management",
        title: "Every vehicle, in view.",
        text: "Track new and used stock from arrival to handover, with accurate vehicle information flowing straight to your website and listings.",
        points: ["Real-time stock visibility across branches", "Vehicle data that feeds your digital channels", "Stock ageing and turn insight"],
        href: "solutions.html#dealership" },
      { key: "customers", icon: "users", label: "Customers", tag: "CRM & leads",
        title: "Never lose a lead again.",
        text: "Capture enquiries from every channel, manage follow-ups and build lasting customer relationships.",
        points: ["Centralised lead capture from web and social", "Follow-up workflows for sales teams", "A single view of every customer"],
        href: "solutions.html#customer" },
      { key: "service", icon: "wrench", label: "Service", tag: "Workshop & parts",
        title: "Keep the workshop moving.",
        text: "Manage bookings, job cards and parts so your aftersales teams can deliver faster, better service.",
        points: ["Service bookings and job management", "Parts inventory and ordering", "Better customer communication"],
        href: "solutions.html#dealership" },
      { key: "operations", icon: "cog", label: "Operations", tag: "Dealer Management System",
        title: "One platform. Your entire dealership.",
        text: "Titan DMS is the cloud-based platform that connects sales, stock, parts, service and finance in one place.",
        points: ["Cloud-based, accessible anywhere", "Connects every department", "Distributed across South Africa and Sub-Saharan Africa"],
        href: "products.html" },
      { key: "performance", icon: "chart", label: "Performance", tag: "Reporting & data",
        title: "Decisions backed by data.",
        text: "Turn day-to-day dealership activity into clear reporting, so you can see what is working and act on it.",
        points: ["Dashboards for every department", "Visibility for dealer principals", "Reporting across digital and operations"],
        href: "solutions.html#innovation" },
      { key: "marketing", icon: "megaphone", label: "Marketing", tag: "Compatible Digital",
        title: "Be found. Be chosen.",
        text: "Automotive websites, SEO, social media and digital marketing that bring buyers to your showroom, online and in person.",
        points: ["Automotive websites and e-commerce", "SEO, social media and copywriting", "Digital marketing consulting and reporting"],
        href: "digital.html" },
      { key: "ai", icon: "ai", label: "AI", tag: "AI & innovation",
        title: "Work smarter. Sell faster.",
        text: "Artificial intelligence and automation that remove admin, improve vehicle presentation and surface the insights that matter.",
        points: ["AI vehicle image enhancement", "Automated marketing and workflows", "Lead intelligence and AI insights"],
        href: "ai.html" }
    ];

    const R = 40; // radius in % of the container
    let lines = "";
    let html = "";
    nodes.forEach((n, i) => {
      const a = (-90 + (360 / nodes.length) * i) * (Math.PI / 180);
      const x = 50 + R * Math.cos(a), y = 50 + R * Math.sin(a);
      lines += `<line x1="50" y1="50" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}" data-key="${n.key}" vector-effect="non-scaling-stroke"/>`;
      html += `<button class="node" type="button" data-key="${n.key}" style="left:${x}%;top:${y}%" aria-pressed="false">
        <span class="bubble">${icon(n.icon)}</span><span class="label">${n.label}</span></button>`;
    });
    orbit.innerHTML = `
      <svg class="links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <circle cx="50" cy="50" r="${R}" vector-effect="non-scaling-stroke"/>${lines}
      </svg>
      <div class="orbit-core"><div><img src="assets/logo-mark.png" alt=""><span>Your connected<br>dealership</span></div></div>
      ${html}`;

    const panel = document.getElementById("nodePanel");
    const show = (key) => {
      const n = nodes.find((x) => x.key === key);
      orbit.querySelectorAll(".node").forEach((b) => {
        const on = b.dataset.key === key;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", on);
      });
      orbit.querySelectorAll("line").forEach((l) => l.classList.toggle("on", l.dataset.key === key));
      panel.innerHTML = `<div class="fade">
        <span class="ico ico--lg">${icon(n.icon)}</span>
        <p class="tag" style="margin-top:20px">${n.tag}</p>
        <h3>${n.title}</h3>
        <p>${n.text}</p>
        <ul>${n.points.map((p) => `<li>${icon("check")}<span>${p}</span></li>`).join("")}</ul>
        <a class="btn btn--primary" href="${n.href}">Explore ${n.label.toLowerCase()} solutions ${icon("arrow")}</a>
      </div>`;
    };
    orbit.addEventListener("click", (e) => {
      const b = e.target.closest(".node");
      if (b) { show(b.dataset.key); stopAuto(); }
    });

    // Gently cycle through areas until the visitor interacts
    let idx = 3, timer = null;
    const stopAuto = () => { clearInterval(timer); timer = null; };
    show(nodes[idx].key);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setInterval(() => { idx = (idx + 1) % nodes.length; show(nodes[idx].key); }, 4500);
      orbit.addEventListener("mouseenter", stopAuto, { once: true });
      panel.addEventListener("mouseenter", stopAuto, { once: true });
      orbit.addEventListener("focusin", stopAuto, { once: true });
    }
  }

  /* ---------- Before / after slider ---------- */
  document.querySelectorAll(".ba").forEach((ba) => {
    const input = ba.querySelector("input");
    const set = () => ba.style.setProperty("--pos", input.value + "%");
    input.addEventListener("input", set);
    set();
  });

  /* ---------- Insights filter ---------- */
  const filterWrap = document.querySelector("[data-filter-group]");
  if (filterWrap) {
    const posts = document.querySelectorAll(".post[data-cat]");
    filterWrap.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      filterWrap.querySelectorAll(".chip").forEach((c) => { c.classList.toggle("on", c === chip); c.setAttribute("aria-pressed", c === chip); });
      const f = chip.dataset.filter;
      posts.forEach((p) => p.classList.toggle("hidden", f !== "all" && !p.dataset.cat.split(" ").includes(f) && p.dataset.type !== f));
    });
  }

  /* ---------- Contact form routing ---------- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    // Team routing. Replace these with real team inboxes, or configure
    // matching Netlify form notifications on the "team" field.
    const teams = {
      "Dealer Management": "DMS Sales team",
      "Digital Marketing": "Compatible Digital team",
      "Website": "Compatible Digital team",
      "CRM": "Customer Experience team",
      "Parts & Service": "Aftersales Solutions team",
      "AI & Innovation": "Innovation team",
      "General Enquiry": "General enquiries"
    };
    const teamInput = contactForm.querySelector('input[name="team"]');
    const note = document.getElementById("routeNote");
    const update = () => {
      const sel = contactForm.querySelector('input[name="topic"]:checked');
      if (!sel) return;
      teamInput.value = teams[sel.value] || "General enquiries";
      note.innerHTML = `Your enquiry will go straight to our <b>${teamInput.value}</b>.`;
    };
    contactForm.addEventListener("change", update);
    const qs = new URLSearchParams(location.search).get("topic");
    if (qs) {
      const match = [...contactForm.querySelectorAll('input[name="topic"]')].find((r) => r.value.toLowerCase() === qs.toLowerCase());
      if (match) match.checked = true;
    }
    update();
  }

  /* ---------- Knowledge base search (demo) ---------- */
  const kb = document.getElementById("kbSearch");
  if (kb) kb.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = kb.querySelector("input").value.trim();
    const out = document.getElementById("kbResult");
    out.textContent = q ? `Searching the knowledge base for "${q}"… (connect to your help centre to enable live results)` : "";
  });
})();
