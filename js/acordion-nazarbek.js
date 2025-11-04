class Accordion {
  constructor(buttonSelector, panelSelector) {
    this.buttons = document.querySelectorAll(buttonSelector);
    this.panels = document.querySelectorAll(panelSelector);

    this.buttons.forEach((button, index) => {
      button.addEventListener('click', () => this.toggle(index));
    });
  }

  toggle(index) {
    this.buttons.forEach((btn, i) => {
      const panel = this.panels[i];
      if (i === index) {
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.style.padding = "15px 20px";
        } else {
          panel.style.maxHeight = null;
          panel.style.padding = "0 20px";
        }
      } else {
        btn.classList.remove('active');
        panel.style.maxHeight = null;
        panel.style.padding = "0 20px";
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Accordion(".accordion-item", ".accordion-panel");
});
