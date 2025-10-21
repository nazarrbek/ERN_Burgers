document.addEventListener("DOMContentLoaded", function () {
  const changeColorBtn = document.getElementById("changeColorBtn");
  const keyInfo = document.getElementById("keyInfo");

  
  // Array of background images
  const images = [
    "url('https://images.unsplash.com/photo-1606755962773-d324e0a13085')",
    "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
    "url('https://images.unsplash.com/photo-1550547660-d9450f859349')",
    "url('https://images.unsplash.com/photo-1550317138-10000687a72b')",
    "url('https://images.unsplash.com/photo-1565958011705-44e21159f42c')"
  ];

  let imageIndex = 0;

  // Function to change the background
  function changeBackground() {
    document.body.style.background = `${images[imageIndex]} no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
    imageIndex = (imageIndex + 1) % images.length;
  }

  // Event when the button is clicked
  changeColorBtn.addEventListener("click", changeBackground);

  // Keyboard event listener
  document.addEventListener("keydown", function (event) {
    if (!keyInfo) return;

    // Smooth transition
    document.body.style.transition = "background-color 0.5s ease, background 0.5s ease";

    if (event.key === "ArrowRight") {
      document.body.style.background = "none";
      document.body.style.backgroundColor = "#1ab73f"; // green
      keyInfo.textContent = "➡️ Background changed to green";
    } 
    else if (event.key === "ArrowLeft") {
      document.body.style.background = "none";
      document.body.style.backgroundColor = "#ec0808"; // red
      keyInfo.textContent = "⬅️ Background changed to red";
    } 
    else if (event.key === " ") {
      document.body.style.background = "none";
      document.body.style.backgroundColor = "#d4a50c"; // yellow
      keyInfo.textContent = "␣ Background changed to yellow";
    } 
    else {
      keyInfo.textContent = `Key pressed: ${event.key}`;
    }

    // Add animation effect
    keyInfo.classList.add("active");
    setTimeout(() => keyInfo.classList.remove("active"), 500);
  });
});


// ===== Task 7: Switch Statement Demo (by Eldos) =====

// Находим элементы
const dayInput = document.getElementById("dayInput");
const dayResult = document.getElementById("dayResult");
const checkDayBtn = document.getElementById("checkDayBtn");

// Проверяем день недели
if (checkDayBtn) {
  checkDayBtn.addEventListener("click", () => {
    const day = dayInput.value.trim().toLowerCase();
    let message = "";

    switch (day) {
      case "monday":
        message = "Start of the week! Let's be productive 💪";
        break;
      case "tuesday":
        message = "Keep going strong! 💼";
        break;
      case "wednesday":
        message = "Halfway there! 🏃‍♂️";
        break;
      case "thursday":
        message = "Almost Friday 😎";
        break;
      case "friday":
        message = "Weekend is near! 🎉";
        break;
      case "saturday":
      case "sunday":
        message = "It's the weekend! Time to relax 🛌";
        break;
      default:
        message = "Please enter a valid day (e.g., Monday)";
    }

    dayResult.textContent = message;
  });
}

// ===== Task 8: Play Sound (by Eldos) =====
const playBtn = document.getElementById("playSoundBtn");
const audio = document.getElementById("myAudio");
const soundInfo = document.getElementById("soundInfo");

if (playBtn && audio) {
  playBtn.addEventListener("click", () => {
    audio.currentTime = 0; // начинаем звук с начала
    audio.play();
    soundInfo.textContent = "🎵 Sound is playing...";
    setTimeout(() => {
      soundInfo.textContent = "Click the button to play sound 🎶";
    }, 2000); // через 2 секунды вернуть текст обратно
  });
}

// === Animation Example ===
const animateBtn = document.getElementById("animateBtn");
const burgerImage = document.getElementById("burgerImage");

if (animateBtn && burgerImage) {
  animateBtn.addEventListener("click", () => {
    burgerImage.classList.add("animate");

    // удалить класс после завершения, чтобы можно было снова анимировать
    burgerImage.addEventListener("animationend", () => {
      burgerImage.classList.remove("animate");
    }, { once: true });
  });
}

// === Burger Filter Example (forEach / map / filter) ===

// Массив бургеров
const burgers = [
  { name: "Classic Burger", price: 1800 },
  { name: "Cheese Burger", price: 2100 },
  { name: "Double Burger", price: 2500 },
  { name: "Veggie Burger", price: 1600 },
  { name: "Chicken Burger", price: 1900 },
];

// Элементы HTML
const burgerList = document.getElementById("burgerList");
const filterBtn = document.getElementById("filterBtn");
const showAllBtn = document.getElementById("showAllBtn");

// Функция отображения бургеров
function displayBurgers(burgerArray) {
  burgerList.innerHTML = "";
  burgerArray.forEach((burger) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${burger.name} — ${burger.price} ₸`;
    burgerList.appendChild(li);
  });
}

// 1️⃣ map() — добавляем 🔥 к каждому названию
const decoratedBurgers = burgers.map((burger) => ({
  name: "🔥 " + burger.name,
  price: burger.price,
}));

// 2️⃣ Отображаем все бургеры при загрузке
displayBurgers(decoratedBurgers);

// 3️⃣ filter() — показываем только дорогие
filterBtn.addEventListener("click", () => {
  const expensive = decoratedBurgers.filter((b) => b.price > 2000);
  displayBurgers(expensive);
});

// 4️⃣ Показать всех снова
showAllBtn.addEventListener("click", () => {
  displayBurgers(decoratedBurgers);
});
