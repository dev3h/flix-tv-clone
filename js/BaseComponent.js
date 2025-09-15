/**
 * BaseComponent - Lớp cơ sở cho tất cả các Web Components
 * Cung cấp functionality chung như load template từ file HTML
 */
class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.templatePath = null;
    this.templateCache = new Map();
  }

  /**
   * Load template HTML từ file
   * @param {string} templatePath - Đường dẫn đến file template
   * @returns {Promise<string>} - Nội dung HTML của template
   */
  async loadTemplate(templatePath) {
    // Kiểm tra cache trước
    if (BaseComponent.templateCache && BaseComponent.templateCache.has(templatePath)) {
      return BaseComponent.templateCache.get(templatePath);
    }

    try {
      const response = await fetch(templatePath);
      if (!response.ok) {
        throw new Error(`Failed to load template: ${response.status} ${response.statusText}`);
      }
      
      const template = await response.text();
      
      // Cache template để tái sử dụng
      if (!BaseComponent.templateCache) {
        BaseComponent.templateCache = new Map();
      }
      BaseComponent.templateCache.set(templatePath, template);
      
      return template;
    } catch (error) {
      console.error(`Error loading template from ${templatePath}:`, error);
      return `<div class="error">Failed to load template: ${templatePath}</div>`;
    }
  }

  /**
   * Render template và thiết lập event listeners
   * Phương thức này sẽ được override trong các component con
   */
  async render() {
    if (this.templatePath) {
      const template = await this.loadTemplate(this.templatePath);
      this.innerHTML = template;
      this.setupEventListeners();
    }
  }

  /**
   * Thiết lập event listeners
   * Phương thức này sẽ được override trong các component con
   */
  setupEventListeners() {
    // Override trong component con
  }

  /**
   * Lifecycle method - được gọi khi component được add vào DOM
   */
  async connectedCallback() {
    await this.render();
  }

  /**
   * Utility method để tìm element trong component
   * @param {string} selector - CSS selector
   * @returns {Element|null}
   */
  $(selector) {
    return this.querySelector(selector);
  }

  /**
   * Utility method để tìm tất cả elements trong component
   * @param {string} selector - CSS selector
   * @returns {NodeList}
   */
  $$(selector) {
    return this.querySelectorAll(selector);
  }

  /**
   * Utility method để add event listener một cách an toàn
   * @param {string} selector - CSS selector
   * @param {string} event - Tên event
   * @param {Function} handler - Event handler
   */
  on(selector, event, handler) {
    const element = this.$(selector);
    if (element) {
      element.addEventListener(event, handler);
    } else {
      console.warn(`Element with selector "${selector}" not found in component`);
    }
  }
}

// Static cache cho templates
BaseComponent.templateCache = new Map();