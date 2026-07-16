/* ============================================================
   Reyhana Nuri Syahfa — Portfolio Interactions
   ============================================================ */

/* ---------- Data ---------- */
const SKILLS = [
  { icon: "📗", name: "Microsoft Excel", cat: "Spreadsheet" },
  { icon: "📊", name: "Power BI", cat: "BI Tool" },
  { icon: "📈", name: "Looker Studio", cat: "BI / Viz" },
  { icon: "🗃️", name: "SQL", cat: "Query" },
  { icon: "🐍", name: "Python", cat: "Language" },
  { icon: "☁️", name: "BigQuery", cat: "Cloud" },
  { icon: "🐼", name: "Pandas", cat: "Library" },
  { icon: "🌳", name: "XGBoost", cat: "ML" },
];

const PROJECTS = [
  {
    name: "XGBoost Disease Forecast",
    desc: "Undergraduate thesis: forecasting the top 10 inpatient diseases at RS Pertamina Balikpapan from 150k+ records using XGBoost.",
    tags: ["Python", "XGBoost", "Forecasting"],
    url: "https://github.com/reyyhanaa/xgboost-forecast-inpatients-disease",
  },
  {
    name: "Exploratory Data Analysis",
    desc: "An EDA project from the Dibimbing program: data cleaning, removing duplicates, and handling missing values.",
    tags: ["Python", "EDA", "Data Cleaning"],
    url: "https://github.com/reyyhanaa/exploratory-data-analysis",
  },
  {
    name: "Kimia Farma Big Data Analyst",
    desc: "Rakamin internship: analyzed 500k+ rows in BigQuery (nett_sales, nett_profit, gross_laba) and built a Looker Studio dashboard.",
    tags: ["BigQuery", "Looker Studio", "Analytics"],
    url: "https://github.com/reyyhanaa/pbi-rakamin-kimiafarma-bigdataanalyst",
  },
  {
    name: "User Behavior Analysis",
    desc: "Analyzing credit card transaction data to uncover user behavior, spending patterns, and financial risk.",
    tags: ["SQL", "Analytics", "Finance"],
    url: "https://github.com/reyyhanaa/user-behavior-analysis",
  },
];

const TYPED_ROLES = [
  "Data Analyst",
  "Business Intelligence Enthusiast",
  "Information Systems Graduate",
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
      <a class="project__link" href="${p.url}" target="_blank" rel="noopener" aria-label="Open ${p.name} on GitHub">↗</a>
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
document.querySelectorAll(".section__title, .section__tag, .section__lead, .about__text, .about__facts, .skill, .project, .contact__card, .tl-item, .cert, .dash__card").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});

/* ---------- Animated counters (hero is near the top → animate on load) ---------- */
function animateCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = "1";
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || "";
  let cur = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  const timer = setInterval(() => {
    cur += step;
    if (cur >= target) { cur = target; clearInterval(timer); }
    el.textContent = cur + suffix;
  }, 30);
}
const counters = document.querySelectorAll(".stat__num");
// animate shortly after load
setTimeout(() => counters.forEach(animateCounter), 250);
// and also on scroll into view (in case load fires before layout)
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) animateCounter(e.target); });
}, { threshold: 0.3 });
counters.forEach((c) => counterIO.observe(c));

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
