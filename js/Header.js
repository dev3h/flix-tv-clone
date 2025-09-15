/**
 * Header Component - Quản lý header của website
 * Extends BaseComponent để tái sử dụng functionality chung
 */
class Header extends BaseComponent {
  constructor() {
    super();
    this.templatePath = './templates/header.html';
  }

  /**
   * Thiết lập tất cả event listeners cho header
   */
  setupEventListeners() {
    this.setupUserDropdown();
    this.setupScrollEffect();
    this.setupLogout();
    this.setupSearch();
    this.setupMobileMenu();
  }

  /**
   * Thiết lập dropdown cho user menu
   */
  setupUserDropdown() {
    const headerUser = this.$(".header__user");
    const headerUserDropDown = this.$(".header__user .sub-dropdown");
    
    if (headerUser && headerUserDropDown) {
      headerUser.onclick = () => {
        headerUserDropDown.classList.toggle("show");
      };

      // Đóng dropdown khi click bên ngoài
      document.addEventListener('click', (e) => {
        if (!headerUser.contains(e.target)) {
          headerUserDropDown.classList.remove("show");
        }
      });
    }
  }

  /**
   * Thiết lập hiệu ứng shadow khi scroll
   */
  setupScrollEffect() {
    const header = this.$(".header");
    
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
          header.style.boxShadow = "0 0 0.5rem #151f30, 0 0.5rem 1rem #151f30";
        } else {
          header.style.boxShadow = "unset";
        }
      });
    }
  }

  /**
   * Thiết lập chức năng logout
   */
  setupLogout() {
    this.on(".logout", "click", () => {
      if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        window.location.href = "./index.html";
      }
    });
  }

  /**
   * Thiết lập chức năng search (có thể mở rộng sau)
   */
  setupSearch() {
    const searchForm = this.$("#header__form");
    const searchInput = this.$("#header__form-input");
    
    if (searchForm && searchInput) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
          // TODO: Implement search functionality
          console.log('Searching for:', searchTerm);
          // Có thể redirect đến trang search với query parameter
          // window.location.href = `./catalog.html?search=${encodeURIComponent(searchTerm)}`;
        }
      });
    }
  }

  /**
   * Thiết lập mobile hamburger menu
   */
  setupMobileMenu() {
    const hamburger = this.$(".header__hamburger");
    const menu = this.$(".header-menu");
    
    console.log('Setting up mobile menu:', { hamburger, menu }); // Debug log
    
    if (hamburger && menu) {
      hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Hamburger clicked'); // Debug log
        
        hamburger.classList.toggle('active');
        menu.classList.toggle('mobile-menu');
        menu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (menu.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });

      // Close menu when clicking on menu items
      const menuItems = this.$$(".header-menu .header-menu__item a");
      menuItems.forEach(item => {
        item.addEventListener('click', () => {
          hamburger.classList.remove('active');
          menu.classList.remove('mobile-menu', 'active');
          document.body.style.overflow = '';
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
          hamburger.classList.remove('active');
          menu.classList.remove('mobile-menu', 'active');
          document.body.style.overflow = '';
        }
      });

      // Handle window resize
      window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
          hamburger.classList.remove('active');
          menu.classList.remove('mobile-menu', 'active');
          document.body.style.overflow = '';
        }
      });
    } else {
      console.error('Hamburger or menu not found:', { hamburger, menu }); // Debug log
    }
  }

  /**
   * Cập nhật active menu item dựa trên trang hiện tại
   */
  updateActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = this.$$(".header-menu a[href]");
    
    menuLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes(currentPage)) {
        link.parentElement.classList.add('active');
      }
    });
  }

  /**
   * Override connectedCallback để thêm logic riêng
   */
  async connectedCallback() {
    await super.connectedCallback();
    this.updateActiveMenu();
  }
}
customElements.define("main-header", Header);
