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
      <div class="navbar-container bg-white border-bottom border-2 border-light sticky-top" style="padding: 0px 50px">
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
                  <a class="nav-link" href="#" id="home-btn">Home</a>
                </li>
                <li class="nav-item ms-lg-4">
                 <a href="#" id="browse-btn" class="nav-link">Browse</a>
                </li>
                <li class="nav-item ms-lg-4">
                  <a class="nav-link" href="#" id="post-btn">Post Properties</a>
                </li>
                <li class="nav-item ms-lg-4">
                  <a class="btn btn-contact ms-lg-3" href="#" id="login-out-btn"></a>
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
    const collapseElement = this.shadowRoot.querySelector("#navbarNav");
    const loginOutBtn = this.shadowRoot.getElementById("login-out-btn");
    const browseBtn = this.shadowRoot.getElementById("browse-btn");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // Set login/logout button text
    loginOutBtn.innerHTML = isLoggedIn ? "Logout" : "Login";

    // Remove previous listeners if any
    loginOutBtn.replaceWith(loginOutBtn.cloneNode(true));
    browseBtn.replaceWith(browseBtn.cloneNode(true));
    // Re-query after replace
    const newLoginOutBtn = this.shadowRoot.getElementById("login-out-btn");
    const newBrowseBtn = this.shadowRoot.getElementById("browse-btn");
    const homeBtn = this.shadowRoot.getElementById("home-btn");

    // Login/Logout button logic
    newLoginOutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (isLoggedIn) {
        localStorage.setItem("isLoggedIn", "false");
        alert("Logged out successfully!");
        window.location.href = "../../src/login.html";
      } else {
        window.location.href = "../../src/login.html";
      }
    });

    // Browse button logic
    newBrowseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("Please login to browse properties.");
        window.location.href = "../../src/login.html";
      } else {
        window.location.href = "../../src/browse.html";
      }
    });
    homeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "../../src/home.html";
    });

    // Bootstrap collapse (if needed)
    import(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.esm.min.js"
    ).then((module) => {
      const Collapse = module.Collapse;
      const collapse = new Collapse(collapseElement, { toggle: false });
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

class PGFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
      <style>
        .footer-bg {
          background: #1a202c;
          color: #fff;
          padding: 3rem 0;
        }
        .footer-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }
        .footer-title {
          font-weight: bold;
          font-size: 1.125rem;
          margin-bottom: 1rem;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .footer-brand i {
          color: #4F46E5;
          font-size: 2rem;
          margin-right: 0.5rem;
        }
        .footer-brand span {
          font-weight: bold;
          font-size: 1.25rem;
          letter-spacing: -0.02em;
        }
        .footer-text {
          color: #a0aec0;
          font-size: 0.95rem;
          max-width: 20rem;
        }
        .footer-links,
        .footer-contact {
          list-style: none;
          padding: 0;
        }
        .footer-links li,
        .footer-contact li {
          margin-bottom: 0.5rem;
          color: #a0aec0;
          font-size: 0.95rem;
        }
        .footer-links a {
          color: #a0aec0;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover,
        .footer-contact a:hover {
          color: #fff;
        }
        .footer-contact i {
          margin-right: 0.5rem;
        }
        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .footer-social a {
          color: #a0aec0;
          transition: color 0.2s;
          font-size: 1.25rem;
        }
        .footer-social a:hover {
          color: #fff;
        }
        .footer-bottom {
          border-top: 1px solid #2d3748;
          margin-top: 3rem;
          padding-top: 2rem;
          text-align: center;
          color: #718096;
          font-size: 0.95rem;
        }
      </style>
      <footer class="footer-bg">
        <div class="footer-container">
          <div class="footer-grid">
            <div style="grid-column: span 2;">
              <div class="footer-brand">
                <i class="fa-solid fa-house-chimney"></i>
                <span>PGVerse</span>
              </div>
              <p class="footer-text">
                Making student housing simple, transparent, and hassle-free. Find your perfect PG today.
              </p>
            </div>
            <div>
              <div class="footer-title">Quick Links</div>
              <ul class="footer-links">
                <li><a href="#" onclick="showSection('home')">Home</a></li>
                <li><a href="#" onclick="showSection('browse')">Browse PGs</a></li>
                <li><a href="#" onclick="showSection('owner')">List Your PG</a></li>
                <li><a href="#" onclick="showSection('login')">Login</a></li>
              </ul>
            </div>
            <div>
              <div class="footer-title">Contact</div>
              <ul class="footer-contact">
                <li><i class="fa-solid fa-envelope"></i> support@pgverse.com</li>
                <li><i class="fa-solid fa-phone"></i> +91 98765 43210</li>
                <li>
                  <div class="footer-social">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            &copy; 2026 PGVerse. All rights reserved.
          </div>
        </div>
      </footer>
    `;
  }
  connectedCallback() {
    // Home button logic
    const homeBtn = this.shadowRoot.querySelector(
      '.footer-links a[href="#"]:not([onclick*="browse"])'
    );
    homeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "../../src/home.html";
    });
    const loginBtn = this.shadowRoot.querySelector(
      '.footer-links a[onclick*="login"]'
    );
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "../../src/login.html";
    });
    // Browse button logic
    const browseBtn = this.shadowRoot.querySelector(
      '.footer-links a[onclick*="browse"]'
    );
    browseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("Please login to browse properties.");
        window.location.href = "../../src/login.html";
      } else {
        window.location.href = "../../src/browse.html";
      }
    });
  }
}
customElements.define("pg-footer", PGFooter);
