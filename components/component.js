class PgverseNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
  
        <style>
          .navbar-container {
            background: white;
            border-bottom: 2px solid #f8f9fa;
          }
  
          .btn-contact {
            background-color: #0d1321;
            color: #fff !important;
            border-radius: 25px;
            padding: 0.75rem 1.5rem;
            transition: background-color 0.3s ease;
          }
          .btn-contact:hover {
            background-color: #006aff !important;
          }
        </style>
  
        <div
        class="navbar-container bg-white border-bottom border-2 border-light sticky-top"
        style="padding: 0px 50px"
      >
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">PGVerse</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="" id="navbarNav" style="padding-left: 30rem">
              <ul class="navbar-nav ms-auto d-flex align-items-center">
                <li class="nav-item ms-lg-4">
                  <a class="nav-link" href="#">Hostels</a>
                </li>
                <li class="nav-item ms-lg-4">
                  <a class="nav-link" href="#">PGs</a>
                </li>
                <li class="nav-item ms-lg-4">
                  <a class="nav-link" href="#">Flats</a>
                </li>
                <li class="nav-item ms-lg-4">
                  <a class="nav-link" href="#">Neighbourhood</a>
                </li>
                <li class="nav-item ms-lg-4">
                  <a class="btn btn-contact ms-lg-3" href="#">Contact an Agent</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      `;
  }

  connectedCallback() {
    const toggler = this.shadowRoot.querySelector(".navbar-toggler");
    const collapseElement = this.shadowRoot.querySelector("#pgverseNav");

    import(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.esm.min.js"
    ).then((module) => {
      const Collapse = module.Collapse;

      const collapse = new Collapse(collapseElement, {
        toggle: false,
      });

      toggler.addEventListener("click", () => {
        collapse.toggle();
      });
    });
  }
}

customElements.define("nav-bar", PgverseNavbar);

class PgverseCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />

      <style>
        .card {
          width: 18rem;
        }
      </style>

      <div class="card">
        <img src="${
          this.getAttribute("img") || ""
        }" class="card-img-top" alt="card-image">
        <div class="card-body">
          <h5 class="card-title">
            ${this.getAttribute("title") || "Card Title"}
          </h5>
          <p class="card-text">
            ${
              this.getAttribute("text") ||
              "Some example text for the card component."
            }
          </p>
          <a href="${this.getAttribute("link") || "#"}" class="btn btn-primary">
            ${this.getAttribute("button") || "Go somewhere"}
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("pgverse-card", PgverseCard);
