class PopupForm {
  constructor(openBtn, popupSelector, closeBtn) {
    this.openButton = document.querySelector(openBtn);
    this.popup = document.querySelector(popupSelector);
    this.closeButton = this.popup.querySelector(closeBtn);

    this.init();
  }

  init() {
    // открыть
    this.openButton.addEventListener('click', () => this.open());
    // закрыть по крестику
    this.closeButton.addEventListener('click', () => this.close());
    // закрыть по клику вне окна
    this.popup.addEventListener('click', (e) => {
      if (e.target === this.popup) this.close();
    });
    // обработка формы
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
