/* ============================================================
   RUBEN JAMES HILLIER — SITE CONTENT & ROUTING

   This is deliberately kept in ONE file so it is easy to edit.

   To add a new page:
   1. Copy one of the objects below.
   2. Give it a new ID.
   3. Add that ID to the relevant menu in index.html.
   4. Write your content inside the HTML template.
   ============================================================ */

const content = document.getElementById("content");

const pages = {

  /* ---------------- HOME ---------------- */

  home: `
    <section class="page">
      <img
        class="hero-image"
        src="assets/hero-placeholder.svg"
        alt="Placeholder hero image"
      >

      <div class="hero-caption">
        <h1>Ruben James Hillier — Product Design Engineering</h1>

        <p>
          I am a Product Design Engineering student interested in how
          materials, manufacturing, engineering and visual design come
          together to make useful and considered products.
        </p>

        <a class="read-more" href="#about" data-route="about">
          About me →
        </a>
      </div>
    </section>
  `,


  /* ---------------- PROJECTS ---------------- */

  "project-bike-rack": `
    <section class="page inner-page">
      <div class="meta">PROJECT / 01</div>
      <h1 class="page-title">Bike Rack</h1>

      <p class="lead">
        A placeholder project page for a product design project.
        Replace this text with your actual project story.
      </p>

      <img class="hero-image" src="assets/project-placeholder.svg"
           alt="Project placeholder">

      <div class="body-copy">
        <p>
          Start by explaining the problem. What were you designing,
          who was it for, and what made the problem interesting?
        </p>

        <p>
          Then document your process: research, sketches, CAD,
          prototyping, testing and the final design.
        </p>

        <p>
          Add photographs, renders and drawings here as the project
          develops.
        </p>
      </div>

      <a class="back-link" href="#home" data-route="home">← Home</a>
    </section>
  `,

  "project-product": `
    <section class="page inner-page">
      <div class="meta">PROJECT / 02</div>
      <h1 class="page-title">Product Design</h1>

      <p class="lead">
        A second placeholder project. This could become one of your
        main university projects.
      </p>

      <img class="hero-image" src="assets/project-placeholder.svg"
           alt="Project placeholder">

      <div class="body-copy">
        <p>
          Use this page to show the evolution of the design rather
          than only displaying the finished product.
        </p>

        <p>
          Good portfolio material could include sketches, CAD,
          engineering calculations, prototypes and final photography.
        </p>
      </div>
    </section>
  `,

  "project-university": `
    <section class="page inner-page">
      <div class="meta">PROJECT / 03</div>
      <h1 class="page-title">University Project</h1>

      <p class="lead">
        Placeholder page for a university design or engineering
        project.
      </p>

      <img class="hero-image" src="assets/project-placeholder.svg"
           alt="Project placeholder">

      <div class="body-copy">
        <p>
          Add your brief, constraints, design development and final
          outcome here.
        </p>
      </div>
    </section>
  `,


  /* ---------------- BLOG ---------------- */

  "blog-design-process": `
    <section class="page inner-page">
      <div class="meta">BLOG / 29 SEPTEMBER 2026</div>
      <h1 class="page-title">Design Process</h1>

      <p class="lead">
        A place to write about how you approach product design,
        engineering and problem solving.
      </p>

      <div class="body-copy">
        <p>
          This is a placeholder blog article. You can use these pages
          as a design journal throughout university.
        </p>

        <p>
          Add photographs and sketches between paragraphs by inserting
          normal HTML image elements.
        </p>
      </div>
    </section>
  `,

  "blog-making": `
    <section class="page inner-page">
      <div class="meta">BLOG / MAKING</div>
      <h1 class="page-title">Making & Materials</h1>

      <p class="lead">
        Experiments, materials, manufacturing processes and things
        you've made.
      </p>

      <div class="body-copy">
        <p>
          Use this as a running journal of interesting processes,
          workshop experiments and prototypes.
        </p>
      </div>
    </section>
  `,

  "blog-university": `
    <section class="page inner-page">
      <div class="meta">BLOG / UNIVERSITY</div>
      <h1 class="page-title">University Notes</h1>

      <p class="lead">
        A simple place for documenting what you're learning.
      </p>

      <div class="body-copy">
        <p>
          This could eventually become a useful archive of engineering
          methods, design principles and lessons learned from projects.
        </p>
      </div>
    </section>
  `,


  /* ---------------- CV ---------------- */

  cv: `
    <section class="page inner-page">
      <div class="meta">CURRICULUM VITAE</div>
      <h1 class="page-title">Ruben James Hillier</h1>

      <p class="lead">
        Product Design Engineering student interested in design,
        engineering, materials and making.
      </p>

      <div class="cv-section">
        <h2>Education</h2>
        <div class="cv-row">
          <strong>2024 — Present</strong>
          <span>Product Design Engineering — University</span>
        </div>
      </div>

      <div class="cv-section">
        <h2>Experience</h2>
        <div class="cv-row">
          <strong>2026</strong>
          <span>Placeholder role — add your experience here.</span>
        </div>
      </div>

      <div class="cv-section">
        <h2>Skills</h2>
        <div class="cv-row">
          <strong>Design</strong>
          <span>Sketching, CAD, prototyping, visual communication</span>
        </div>
        <div class="cv-row">
          <strong>Engineering</strong>
          <span>Product development, materials, manufacturing</span>
        </div>
        <div class="cv-row">
          <strong>Software</strong>
          <span>CAD / Adobe / Microsoft / add your software here</span>
        </div>
      </div>

      <a class="back-link" href="#home" data-route="home">← Home</a>
    </section>
  `,


  /* ---------------- ABOUT ---------------- */

  about: `
    <section class="page inner-page">
      <div class="meta">ABOUT</div>
      <h1 class="page-title">About Me</h1>

      <p class="lead">
        I'm Ruben, a Product Design Engineering student exploring
        the space between engineering and design.
      </p>

      <div class="body-copy">
        <p>
          Write a short introduction here. Keep it personal and
          specific: what interests you, what you like making, and
          what kind of problems you enjoy solving.
        </p>

        <p>
          This page can become your longer portfolio biography.
        </p>
      </div>
    </section>
  `,


  /* ---------------- CONTACT ---------------- */

  contact: `
    <section class="page inner-page">
      <div class="meta">CONTACT</div>
      <h1 class="page-title">Get in touch</h1>

      <p class="lead">
        For projects, collaborations, placements or just to say hello.
      </p>

      <div class="body-copy">
        <p>
          Email:
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>

        <p>
          LinkedIn:
          <a href="#" target="_blank" rel="noopener">Your LinkedIn</a>
        </p>

        <p>
          GitHub:
          <a href="#" target="_blank" rel="noopener">Your GitHub</a>
        </p>
      </div>
    </section>
  `
};


/* ============================================================
   ROUTING
   ============================================================ */

function showPage(route) {
  const page = pages[route] || pages.home;
  content.innerHTML = page;

  // Highlight the current navigation item.
  document.querySelectorAll("[data-route]").forEach(link => {
    link.classList.toggle("active", link.dataset.route === route);
  });

  window.scrollTo({ top: 0, behavior: "instant" });
}

function getRoute() {
  return window.location.hash.replace("#", "") || "home";
}

window.addEventListener("hashchange", () => {
  showPage(getRoute());
});


/* ============================================================
   DROPDOWN MENUS
   ============================================================ */

document.querySelectorAll("[data-toggle]").forEach(button => {
  button.addEventListener("click", () => {
    const menu = document.getElementById(button.dataset.toggle);
    const isOpen = menu.classList.toggle("open");

    button.classList.toggle("open", isOpen);
    button.classList.toggle("active", isOpen);
  });
});


/* Start on the current page. */
showPage(getRoute());
