class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="header">
    <div class="container">
      <div class="header-main">
        <!-- logo -->
        <a href="./index.html" class="logo">
          <img src="./assets/images/logo.svg" alt="logo" />
        </a>
        <!-- menu -->
        <ul class="header-menu">
          <!-- Home -->
          <li class="header-menu__item">
            <a href="./index.html">
              Home
            </a>
          </li>
          <!-- Catalog -->
          <li class="header-menu__item">
            <a href="#">
              Catalog
              <span class="circle"></span>
              <ul class="dropdown-menu">
                <li><a href="../catalog.html">Catalog</a></li>
                <li>
                  <a href="#">
                    Catalog dropdown
                    <span
                      class="circle"
                      style="background: var(--pri-color)"
                    ></span>
                    <ul class="sub-dropdown-menu">
                      <li><a href="#">Actions</a></li>
                      <li><a href="#">Biography</a></li>
                      <li><a href="#">Documentary</a></li>
                      <li><a href="#">Horror</a></li>
                    </ul>
                  </a>
                </li>
                <li><a href="#">Category style 1</a></li>
                <li><a href="#">Category style 2</a></li>
              </ul>
            </a>
          </li>
          <!-- Pricing plans -->
          <li class="header-menu__item"><a href="../pricingPlan.html">Pricing plans</a></li>
          <!-- Live -->
          <li class="header-menu__item">
            <a href="../Live.html">
              LIVE
              <span class="circle circle--stream"></span>
            </a>
          </li>
          <!-- more -->
          <li class="header-menu__item">
            <a href="#" class="menu-link--more">
              <i class="fal fa-ellipsis-h"></i>
              <ul class="dropdown-menu">
                <li><a href="../aboutUs.html">About us</a></li>
                <li><a href="../contact.html">Contact</a></li>
                <li><a href="../landingPage.html">Landing page</a></li>
              </ul>
            </a>
          </li>
        </ul>
        <!-- header action -->
        <div class="header__action">
          <form id="header__form">
            <input
              type="text"
              id="header__form-input"
              placeholder="I'm looking for..."
            />
            <label for="header__form-input" class="header__search">
              <i class="fal fa-search"></i>
            </label>
          </form>
          <div class="header__user">
            <img src="../assets/images/profile/user.jpg" alt="user" />
            <ul class="sub-dropdown">
              <li class="sub-dropdown__item">
                <a href="../profile.html">
                  <i class="far fa-file-user"></i>
                  <span>manage profile</span>
                </a>
              </li>
              <li class="sub-dropdown__item">
                <a href="../settingProfile.html">
                  <i class="fal fa-cog"></i>
                  <span>settings</span>
                </a>
              </li>
              <li class="sub-dropdown__item">
                <a href="../pricingPlan.html">
                  <i class="fal fa-cog"></i>
                  <span>pricing plan</span>
                </a>
              </li>
              <li class="sub-dropdown__item">
                <button class="logout">
                  <i class="fal fa-sign-out-alt"></i>
                  <span>logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
      `;
    const header = document.querySelector(".header");
    const headerUser = document.querySelector(".header__user");
    const headerUserDropDown = document.querySelector(
      ".header__user .sub-dropdown"
    );
    headerUser.onclick = () => {
      headerUserDropDown.classList.toggle("show");
    };
    window.onscroll = () => {
      if (window.scrollY >= 100) {
        header.style.boxShadow = "0 0 0.5rem #151f30, 0 0.5rem 1rem #151f30";
      } else {
        header.style.boxShadow = "unset";
      }
    };
    const logoutBtn = document.querySelector(".logout");
    logoutBtn.onclick = () => {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      window.location.href = "/index.html";
    };
  }
}
customElements.define("main-header", Header);
