class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
    .footer {
        position: relative;
        padding: 4rem 0;
        background: var(--bg-color);
        width: 100%;
        height: auto;
      }
      .footer .container {
        z-index: 10;
        position: relative;
        height: 100%;
      }
      .footer::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(21, 31, 48, 0.35) 0%,
          var(--bg-color) 100%
        );
      }
      .footer-main {
        z-index: 2;
      }
      /* top-footer */
      .top-footer {
        display: flex;
        align-items: center;
        gap: 5rem;
        width: 100%;
      }
      /* footer-left */
      .footer-left {
        flex: 25%;
        margin-top: 4rem;
        padding: 0 1.5rem;
        height: 100%;
      }
      .footer__tagline {
        margin-top: 2rem;
        color: var(--white-color);
        font-size: 1.3rem;
      }
      .footer__social {
        display: flex;
        align-items: flex-end;
        gap: 2rem;
        width: 23rem;
        height: 5rem;
      }
      .footer__social a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        color: var(--white-color);
      }
      .footer__social a:nth-child(1) {
        background: #3b5998;
      }
      .footer__social a:nth-child(2) {
        background: #1da1f2;
      }
      .footer__social a:nth-child(3) {
        background: #c32aa3;
      }
      .footer__social a:nth-child(4) {
        background: #ff0000;
      }
      .footer__social a:nth-child(5) {
        background: #010101;
      }
      /* footer-right */
      .footer-right {
        flex: 75%;
      }
      .footer-right {
        display: flex;
        margin-left: 11.2rem;
        margin-top: 4rem;
        height: 100%;
      }
      .footer-col {
        padding: 0 1.5rem;
        width: 22.2rem;
        height: 100%;
      }
      .footer-col:nth-child(2) {
        width: 38.4rem;
      }
      .footer__title {
        margin-bottom: 1.5rem;
        color: #fff;
        font-size: 1.5rem;
        font-family: var(--second-font);
      }
      .footer__nav {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem 3rem;
        width: 19.2rem;
      }
      .footer__nav a {
        font-size: 1.4rem;
      }
      .footer__group {
        display: flex;
        width: 100%;
        gap: 2rem;
      }
      /* bottom-footer */
      .bottom-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(47, 128, 237, 0.1);
        margin-top: 7rem;
        padding: 4rem 1.5rem 0;
        color: var(--white-color);
      }
      .footer__copyright {
        font-size: 1.3rem;
      }
      .footer__links {
        display: flex;
        align-items: center;
        gap: 3rem;
        font-size: 1.4rem;
      }
    </style>
      <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <div class="top-footer">
            <div class="footer-left">
              <div class="footer__flixtv">
                <img src="./assets/images/logo.svg" alt="logo" />
              </div>
              <p class="footer__tagline">
                Movies & TV Show, Online cinema, <br />
                Movie database HTML template
              </p>
              <div class="footer__social">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-tiktok"></i></a>
              </div>
            </div>
            <div class="footer-right">
              <div class="footer-col">
                <h6 class="footer__title">FlixTV</h6>
                <div class="footer__nav">
                  <a href="#">About us</a>
                  <a href="#">My profile</a>
                  <a href="#">Pricing plans</a>
                  <a href="#">Contact</a>
                </div>
              </div>
              <div class="footer-col">
                <h6 class="footer__title">Browse</h6>
                <div class="footer__group">
                  <div class="footer__nav">
                    <a href="#">Live TV</a>
                    <a href="#">Live news</a>
                    <a href="#">Live Sports</a>
                    <a href="#">Streaming Library</a>
                  </div>
                  <div class="footer__nav">
                    <a href="#">TV Show</a>
                    <a href="#">Movies</a>
                    <a href="#">Kids</a>
                    <a href="#">Collections</a>
                  </div>
                </div>
              </div>
              <div class="footer-col">
                <h6 class="footer__title">Help</h6>
                <div class="footer__nav">
                  <a href="#">Account & Billing</a>
                  <a href="#">Plans & Pricing</a>
                  <a href="#">Supported devices</a>
                  <a href="#">Accessibility</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-footer">
            <small class="footer__copyright">
              © FlixTVClone.template, 2022. Created by
              <a href="#">Nam, Long, Binh</a>
            </small>
            <div class="footer__links">
              <a href="#">Privacy policy</a>
              <a href="#">Terms and conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
        `;
  }
}
customElements.define("main-footer", Footer);
