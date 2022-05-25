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
        /* display: none; */
        width: 20rem;
        padding: 0 2rem;
        margin-top: 2.5rem;
        border-radius: 1.6rem;
        background: var(--bg-shape);
        transition: 0.3s ease-in-out;
      }
      .header-menu__item::before {
        content: "";
        position: absolute;
        top: 2rem;
        left: 0;
        z-index: 2;
        width: 20rem;
        height: 3.5rem;
      }
      .header-menu__item:hover .dropdown-menu {
        display: block;
      }
      .dropdown-menu li:nth-of-type(1) {
        padding-top: 2rem;
      }
      .dropdown-menu li {
        width: 100%;
        padding-bottom: 2rem;
      }
      .dropdown-menu .sub-dropdown-menu {
        position: absolute;
        top: 20%;
        right: -20.5rem;
        display: none;
        width: 20rem;
        padding: 0 2rem;
        border-radius: 1.6rem;
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
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .header__user span {
        color: var(--white-color);
        font-size: 1.4rem;
      }
      .header__user i {
        color: var(--pri-color);
        font-size: 2rem;
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
              <span class="circle"></span>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Home style 1</a>
                </li>
                <li>
                  <a href="#">Home style 2</a>
                </li>
                <li>
                  <a href="#">Home style 3</a>
                </li>
              </ul>
            </a>
          </li>
          <!-- Catalog -->
          <li class="header-menu__item">
            <a href="#">
              Catalog
              <span class="circle"></span>
              <ul class="dropdown-menu">
                <li><a href="#">Catalog</a></li>
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
                <li><a href="#">Details style 3</a></li>
                <li><a href="#">Details style 4</a></li>
                <li><a href="#">Details style 5</a></li>
              </ul>
            </a>
          </li>
          <!-- Pricing plans -->
          <li class="header-menu__item"><a href="#">Pricing plans</a></li>
          <!-- Live -->
          <li class="header-menu__item">
            <a href="#">
              LIVE
              <span class="circle circle--stream"></span>
            </a>
          </li>
          <!-- more -->
          <li class="header-menu__item">
            <a href="#" class="menu-link--more">
              <i class="fal fa-ellipsis-h"></i>
              <ul class="dropdown-menu">
                <li><a href="#">About us</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Interview</a></li>
                <li><a href="#">Admin pages</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Sign in</a></li>
                <li><a href="#">Sign up</a></li>
                <li><a href="#">Forgot password</a></li>
                <li><a href="#">404 Page</a></li>
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
          <a href="#" class="header__user">
            <span>Sign in</span>
            <i class="fad fa-sign-in"></i>
          </a>
        </div>
      </div>
    </div>
  </header>
      `;
  }
}
customElements.define("main-header", Header);
