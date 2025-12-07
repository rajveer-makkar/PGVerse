class PgNavbar extends HTMLElement {
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

customElements.define("nav-bar", PgNavbar);

class PGCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

      <style>
          .card {
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 10px rgba(0,0,0,0.1);
              transition: 0.3s;
              cursor: pointer;
          }
          .card:hover {
              box-shadow: 0 6px 18px rgba(0,0,0,0.18);
          }
          .image-box {
              position: relative;
              height: 12rem;
              overflow: hidden;
          }
          .image-box img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: 0.5s;
          }
          .card:hover img {
              transform: scale(1.05);
          }
          .rating {
              position: absolute;
              top: 10px;
              right: 10px;
              background: white;
              padding: 4px 8px;
              border-radius: 6px;
              font-size: 12px;
              font-weight: bold;
              box-shadow: 0 2px 4px rgba(0,0,0,0.15);
          }
          .type {
              position: absolute;
              bottom: 10px;
              left: 10px;
              background: #007bff;
              color: white;
              padding: 4px 8px;
              border-radius: 6px;
              font-size: 12px;
              font-weight: bold;
              box-shadow: 0 2px 4px rgba(0,0,0,0.15);
          }
          .content {
              padding: 20px;
          }
          .title-price {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin-bottom: 8px;
          }
          .title {
              font-size: 18px;
              font-weight: bold;
          }
          .price {
              color: #007bff;
              font-weight: bold;
          }
          .location {
              color: #777;
              font-size: 14px;
              margin-bottom: 12px;
          }
          .features {
              display: flex;
              gap: 16px;
              font-size: 14px;
              color: #777;
              margin-bottom: 16px;
          }
          button {
              width: 100%;
              border: 2px solid #007bff;
              background: transparent;
              color: #007bff;
              padding: 10px;
              border-radius: 10px;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
              transition: 0.3s;
          }
          button:hover {
              background: #007bff;
              color: white;
          }
      </style>

      <div class="card">
          <div class="image-box">
              <img id="card-img">
              <div class="rating">
                  <i class="fa-solid fa-star" style="color:#facc15;"></i>
                  <span id="rating"></span>
              </div>
              <div class="type" id="type"></div>
          </div>

          <div class="content">
              <div class="title-price">
                  <h3 class="title" id="title"></h3>
                  <span class="price">₹<span id="price"></span><span style="color:#999; font-size:12px;">/mo</span></span>
              </div>

              <p class="location">
                  <i class="fa-solid fa-location-dot"></i>
                  <span id="location"></span>
              </p>

              <div class="features">
                  <span><i class="fa-solid fa-wifi"></i> WiFi</span>
                  <span><i class="fa-solid fa-snowflake"></i> AC</span>
                  <span><i class="fa-solid fa-utensils"></i> Food</span>
              </div>

              <button>View Details</button>
          </div>
      </div>
      `;
  }

  connectedCallback() {
    this.shadowRoot.getElementById("card-img").src = this.getAttribute("image");
    this.shadowRoot.getElementById("title").innerText =
      this.getAttribute("title");
    this.shadowRoot.getElementById("price").innerText =
      this.getAttribute("price");
    this.shadowRoot.getElementById("location").innerText =
      this.getAttribute("location");
    this.shadowRoot.getElementById("rating").innerText =
      this.getAttribute("rating");
    this.shadowRoot.getElementById("type").innerText =
      this.getAttribute("type");
  }
}

customElements.define("pg-card", PGCard);
