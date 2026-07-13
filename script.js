/* ============================================================
   Reyhana Nuri Syahfa — Portfolio Interactions
   ============================================================ */

/* ---------- Data ---------- */
const SKILLS = [
  { icon: "🐍", name: "Python", cat: "Language" },
  { icon: "🗃️", name: "SQL", cat: "Language" },
  { icon: "📓", name: "Jupyter", cat: "Environment" },
  { icon: "🐼", name: "Pandas", cat: "Library" },
  { icon: "🤖", name: "Scikit-learn", cat: "ML" },
  { icon: "🌳", name: "XGBoost", cat: "ML" },
  { icon: "☁️", name: "BigQuery", cat: "Cloud" },
  { icon: "📊", name: "Looker Studio", cat: "Viz" },
];

const PROJECTS = [
  {
    name: "XGBoost Disease Forecast",
    desc: "Algoritma XGBoost untuk memprediksi 10 penyakit paling umum penyebab rawat inap.",
    tags: ["Python", "XGBoost", "Forecasting"],
    url: "https://github.com/reyyhanaa/xgboost-forecast-inpatients-disease",
  },
  {
    name: "Exploratory Data Analysis",
    desc: "Project EDA dari program Dibimbing: data cleaning, hapus duplikat, dan handling missing values.",
    tags: ["Python", "EDA", "Data Cleaning"],
    url: "https://github.com/reyyhanaa/exploratory-data-analysis",
  },
  {
    name: "Kimia Farma Big Data Analyst",
    desc: "Project-based internship (Rakamin): analisis data penjualan obat via Google BigQuery & Looker Studio.",
    tags: ["BigQuery", "Looker Studio", "Analytics"],
    url: "https://github.com/reyyhanaa/pbi-rakamin-kimiafarma-bigdataanalyst",
  },
  {
    name: "User Behavior Analysis",
    desc: "Analisis data transaksi kartu kredit untuk mengungkap perilaku user, pola belanja, & risiko finansial.",
    tags: ["SQL", "Analytics", "Finance"],
    url: "https://github.com/reyyhanaa/user-behavior-analysis",
  },
];

const TYPED_ROLES = [
  "Data Analyst",
  "Data Science Enthusiast",
  "Machine Learning Explorer",
  "Data Storyteller",
];

/* ---------- Render skills ---------- */
const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = SKILLS.map(
  (s) => `
  <div class="skill reveal">
    <span class="skill__icon">${s.icon}</span>
    <div class="skill__name">${s.name}</div>
    <div class="skill__cat">${s.cat}</div>
  </div>`
).join("");

/* ---------- Render projects ---------- */
const projectsGrid = document.getElementById("projectsGrid");
projectsGrid.innerHTML = PROJECTS.map(
  (p) => `
  <article class="project reveal">
    <div class="project__top">
      <span class="project__folder">📁</span>
      <a class="project__link" href="${p.url}" target="_blank" rel="noopener" aria-label="Buka ${p.name} di GitHub">↗</a>
    </div>
    <h3 class="project__name">${p.name}</h3>
    <p class="project__desc">${p.desc}</p>
    <div class="project__tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
  </article>`
).join("");

/* ---------- Typing effect ---------- */
(function typing() {
  const el = document.getElementById("typed");
  let roleIdx = 0, charIdx = 0, deleting = false;
  function tick() {
    const role = TYPED_ROLES[roleIdx];
    el.textContent = role.slice(0, charIdx);
    if (!deleting && charIdx < role.length) {
      charIdx++;
    } else if (deleting && charIdx > 0) {
      charIdx--;
    } else if (!deleting && charIdx === role.length) {
      deleting = true;
      setTimeout(tick, 1600);
      return;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % TYPED_ROLES.length;
    }
    setTimeout(tick, deleting ? 45 : 90);
  }
  tick();
})();

/* ---------- Navbar scroll state ---------- */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
});

/* ---------- Mobile menu ---------- */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    burger.classList.remove("open");
    navLinks.classList.remove("open");
  })
);

/* ---------- Theme toggle ---------- */
const themeToggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  themeToggle.textContent = "☀️";
}
themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".section__title, .section__tag, .section__lead, .about__text, .about__facts, .skill, .project, .contact__card").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});

/* ---------- Animated counters ---------- */
const counters = document.querySelectorAll(".stat__num");
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(timer); }
      el.textContent = cur + suffix;
    }, 30);
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach((c) => counterIO.observe(c));

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
