class Loader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      .loader-container {
        position: fixed;
        top: 0;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background: #1a191d;
        transition: 1s ease-in-out;
      }
      .loader {
        position: relative;
        width: 150px;
        height: 150px;
      }
      .loader span {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .loader span:nth-child(1) {
        z-index: 2;
        background: rgba(255, 255, 255, 0.1);
        border-top: 0.25px solid rgba(255, 255, 255, 0.5);
        border-left: 0.25px solid rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
      }
      .loader span:nth-child(2) {
        background: #04fe4d;
        animation: animate 4s ease-in-out infinite;
      }
      .loader span:nth-child(3) {
        border-radius: 0;
        background: #fff;
        animation: animate 4s ease-in-out infinite;
        animation-delay: -2s;
      }
      .fade-out {
          opacity: 0;
          pointer-events: none;
      }
      @keyframes animate {
        0% {
          z-index: 1;
          transform: translate(-150px, 50px) scale(0.4) rotate(0deg);
        }
        50% {
          z-index: 1;
          transform: translate(150px, -50px) scale(0.4) rotate(180deg);
        }
        50.00001% {
          z-index: 3;
          transform: translate(150px, -50px) scale(0.4) rotate(180deg);
        }
        100% {
          z-index: 3;
          transform: translate(-150px, 50px) scale(0.4) rotate(360deg);
        }
      }      
      </style>
        <div class="loader-container">
            <div class="loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        `;
        window.addEventListener('load', () => {
            const loader = document.querySelector('.loader-container');
            setTimeout(() => {
            loader.classList.add('fade-out');
            }, 1500);
        }
        );
  }
}
customElements.define("main-loader", Loader);
