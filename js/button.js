document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const burgerCards = document.querySelectorAll(".burger-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      // Удаляем активный класс у всех кнопок
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Фильтрация карточек
      burgerCards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
