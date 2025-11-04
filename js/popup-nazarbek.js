class PopupForm {
  constructor(openBtn, popupSelector, closeBtn) {
    this.openButton = document.querySelector(openBtn);
    this.popup = document.querySelector(popupSelector);
    this.closeButton = this.popup.querySelector(closeBtn);

    this.init();
  }

  init() {

    this.openButton.addEventListener('click', () => this.open());
  
    this.closeButton.addEventListener('click', () => this.close());

    this.popup.addEventListener('click', (e) => {
      if (e.target === this.popup) this.close();
    });

    const form = this.popup.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing!');
      this.close();
    });
  }

  open() {
    this.popup.style.display = 'flex';
  }

  close() {
    this.popup.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PopupForm('#openSubscribe', '#subscribePopup', '.close-popup');
});
