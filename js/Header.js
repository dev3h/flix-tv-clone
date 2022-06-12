class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        width: 100%;
        border-bottom: 1px solid transparent;
        background: var(--bg-color);
        transition: 0.3s ease-in-out;
      }
      .header-main {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 10rem;
        padding: 0 3rem;
      }
      .header-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50.3rem;
        height: 100%;
      }
      .header-menu__item {
        position: relative;
        line-height: 2;
      }
      .header-menu .header-menu__item a {
        display: flex;
        gap: 0.8rem;
        padding: 0.5rem;
        align-items: center;
        font-size: 1.4rem;
        cursor: pointer;
      }
      .header-menu .circle {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: #fff;
      }
      .header-menu .circle.circle--stream {
        background: #f00;
        outline: 1px solid rgba(255, 0, 0, 0.586);
        outline-offset: 0.1rem;
      }
      .menu-link--more i {
        display: inline-block;
        font-size: 2.4rem;
        cursor: pointer;
      }
      .dropdown-menu {
        display: none;
      }
      .header-menu .header-menu__item .dropdown-menu {
        position: absolute;
        z-index: 2;
        /* display: none; */
        width: 20rem;
        padding: 0 2rem;
        border: 1px solid var(--white-color);
        border-radius: 1rem;
        background: var(--bg-shape);
        transition: 0.3s ease-in-out;
      }
      .header-menu__item:hover .dropdown-menu {
        display: block;
      }
      .dropdown-menu li {
        width: 100%;
      }
      .dropdown-menu .sub-dropdown-menu {
        position: absolute;
        top: 38%;
        right: -20.5rem;
        display: none;
        width: 20rem;
        padding: 0 2rem;
        border: 1px solid var(--white-color);
        border-radius: 1rem;
        background: var(--bg-shape);
        transition: 0.3s ease-in-out;
      }
      .sub-dropdown-menu::before {
        content: "";
        position: absolute;
        top: 0;
        left: -6rem;
        height: 100%;
        width: 7rem;
      }
      .header-menu__item:nth-of-type(2)
        .dropdown-menu
        li:nth-of-type(2):hover
        .sub-dropdown-menu {
        display: block;
      }
      .header__action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 38.3rem;
        height: 100%;
      }
      #header__form {
        position: relative;
        width: 25rem;
        height: 100%;
        display: flex;
        align-items: center;
      }
      #header__form-input {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 4rem;
        padding: 0 6rem 0 2rem;
        border-radius: 1.6rem;
        background: var(--bg-shape);
        color: #fff;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }
      #header__form-input::placeholder {
        color: #ddd;
      }
      .header__search {
        position: absolute;
        right: 10%;
        color: var(--pri-color);
        cursor: pointer;
        transition: 0.5s ease-in-out;
      }
      .header__search:hover {
        color: #fff;
      }
      .header__user {
        position: relative;
      }
      .header__user img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        cursor: pointer;
      }
      .header__user .sub-dropdown {
        position: absolute;
        top: 5rem;
        right: 8%;
        padding: 0 1.6rem;
        display: none;
        width: 30rem;
        background: linear-gradient(var(--bg-color), var(--bg-shape));
        box-shadow: 0 0 0.5rem #333;
      }
      .sub-dropdown.show {
        display: block;
      }
      .sub-dropdown .sub-dropdown__item :is(button, a){
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 1.5rem;
        color: #fff;
      }
      .sub-dropdown .sub-dropdown__item :is(button, a) i{
        color: var(--pri-color);
        font-size: 1.8rem;
      }
      .sub-dropdown .sub-dropdown__item :is(button, a) span {
        display: inline-block;
        font-size: 1.6rem;
        text-transform: capitalize;
      }
    </style>
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
    let name = localStorage.getItem("name") ? localStorage.getItem("name") : "";
    if (name === "") {
      window.location.href = "/loginAndRegister.html";
    }
    logoutBtn.onclick = () => {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      window.location.href = "/loginAndRegister.html";
    };
  }
}
customElements.define("main-header", Header);
