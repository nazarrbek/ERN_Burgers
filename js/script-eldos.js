// Ждём, пока вся страница загрузится — Wait until the entire page loads
document.addEventListener("DOMContentLoaded", function () {

  // Находим кнопку "changeColorBtn" по ID — Find the button by its ID
  const changeColorBtn = document.getElementById("changeColorBtn");

  // Находим элемент для отображения информации о клавишах — Find the element that shows key info
  const keyInfo = document.getElementById("keyInfo");

  // Массив фонов — список картинок — Array of background images
  const images = [
    "url('https://images.unsplash.com/photo-1606755962773-d324e0a13085')",
    "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
    "url('https://images.unsplash.com/photo-1550547660-d9450f859349')",
    "url('https://images.unsplash.com/photo-1550317138-10000687a72b')",
    "url('https://images.unsplash.com/photo-1565958011705-44e21159f42c')"
  ];

  let imageIndex = 0; // индекс текущей картинки — current image index

  // Функция для смены фона — Function to change background
  function changeBackground() {
    document.body.style.background = `${images[imageIndex]} no-repeat center center fixed`; // установить фон — set background
    document.body.style.backgroundSize = "cover"; // растянуть на весь экран — make it cover full screen
    imageIndex = (imageIndex + 1) % images.length; // перейти к следующей — move to next image
  }

  // При нажатии на кнопку — сменить фон — When button is clicked, change background
  changeColorBtn.addEventListener("click", changeBackground);

  // Слушаем нажатия клавиш — Listen for keyboard events
  document.addEventListener("keydown", function (event) {
    if (!keyInfo) return; // если элемента нет — выйти — exit if element not found

    // Плавная смена фона — Smooth background transition
    document.body.style.transition = "background-color 0.5s ease, background 0.5s ease";

    if (event.key === "ArrowRight") { // стрелка вправо — right arrow
      document.body.style.background = "none";
      document.body.style.backgroundColor = "#1ab73f"; // зелёный фон — green background
      keyInfo.textContent = "➡️ Background changed to green"; // сообщение — message
    } 
    else if (event.key === "ArrowLeft") { // стрелка влево — left arrow
      document.body.style.background = "none";
      document.body.style.backgroundColor = "#ec0808"; // красный фон — red background
      keyInfo.textContent = "⬅️ Background changed to red";
    } 
    else if (event.key === " ") { // пробел — space key
      document.body.style.background = "none";
      document.body.style.backgroundColor = "#d4a50c"; // жёлтый фон — yellow background
      keyInfo.textContent = "␣ Background changed to yellow";
    } 
    else { // любая другая клавиша — any other key
      keyInfo.textContent = `Key pressed: ${event.key}`;
    }

    // Добавляем анимацию к тексту — Add animation to text
    keyInfo.classList.add("active");
    setTimeout(() => keyInfo.classList.remove("active"), 500); // убрать через 0.5 сек — remove after 0.5s
  });
});


// ===== Task 7: Switch Statement Demo (by Eldos) =====

// Находим элементы формы — Find form elements
const dayInput = document.getElementById("dayInput"); // поле ввода — input field
const dayResult = document.getElementById("dayResult"); // место для результата — result output
const checkDayBtn = document.getElementById("checkDayBtn"); // кнопка проверки — check button

// Проверка, что кнопка существует — Check if button exists
if (checkDayBtn) {
  // При нажатии на кнопку — выполняем проверку — When button clicked, run check
  checkDayBtn.addEventListener("click", () => {
    const day = dayInput.value.trim().toLowerCase(); // получаем текст, делаем строчным — get input and lowercase
    let message = ""; // переменная для результата — variable for result

    // Проверяем день недели — Check day of the week
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

    dayResult.textContent = message; // выводим результат — display result
  });
}


// ===== Task 8: Play Sound (by Eldos) =====
const playBtn = document.getElementById("playSoundBtn"); // кнопка воспроизведения — play button
const audio = document.getElementById("myAudio"); // аудиофайл — audio element
const soundInfo = document.getElementById("soundInfo"); // текстовое сообщение — info text

if (playBtn && audio) {
  playBtn.addEventListener("click", () => {
    audio.currentTime = 0; // начать с начала — start from beginning
    audio.play(); // воспроизвести — play sound
    soundInfo.textContent = "🎵 Sound is playing..."; // сообщение — message
    setTimeout(() => {
      soundInfo.textContent = "Click the button to play sound 🎶"; // вернуть текст — reset message
    }, 2000); // через 2 секунды — after 2 seconds
  });
}


// === Animation Example ===
const animateBtn = document.getElementById("animateBtn"); // кнопка анимации — animation button
const burgerImage = document.getElementById("burgerImage"); // картинка бургера — burger image

if (animateBtn && burgerImage) {
  animateBtn.addEventListener("click", () => {
    burgerImage.classList.add("animate"); // добавить класс анимации — add animation class

    // После завершения анимации удалить класс — remove class after animation
    burgerImage.addEventListener("animationend", () => {
      burgerImage.classList.remove("animate");
    }, { once: true }); // слушатель срабатывает один раз — run once
  });
}


// === Burger Filter Example (forEach / map / filter) ===

// Массив бургеров с ценами — Array of burgers with prices
const burgers = [
  { name: "Classic Burger", price: 1800 },
  { name: "Cheese Burger", price: 2100 },
  { name: "Double Burger", price: 2500 },
  { name: "Veggie Burger", price: 1600 },
  { name: "Chicken Burger", price: 1900 },
];

// Элементы списка и кнопок — HTML elements for list and buttons
const burgerList = document.getElementById("burgerList");
const filterBtn = document.getElementById("filterBtn");
const showAllBtn = document.getElementById("showAllBtn");

// Функция отображения бургеров — Function to display burgers
function displayBurgers(burgerArray) {
  burgerList.innerHTML = ""; // очистить список — clear list
  burgerArray.forEach((burger) => { // пройтись по каждому бургеру — loop through burgers
    const li = document.createElement("li"); // создать элемент списка — create list item
    li.classList.add("list-group-item"); // добавить класс — add CSS class
    li.textContent = `${burger.name} — ${burger.price} ₸`; // добавить текст — set text
    burgerList.appendChild(li); // добавить в HTML — append to list
  });
}

// map() — добавляем 🔥 к названию — add 🔥 to names
const decoratedBurgers = burgers.map((burger) => ({
  name: "🔥 " + burger.name,
  price: burger.price,
}));

// Отображаем все бургеры при загрузке — Show all burgers on load
displayBurgers(decoratedBurgers);

// filter() — фильтруем дорогие (>2000) — filter expensive burgers (>2000)
filterBtn.addEventListener("click", () => {
  const expensive = decoratedBurgers.filter((b) => b.price > 2000);
  displayBurgers(expensive);
});

// Показать всех снова — Show all burgers again
showAllBtn.addEventListener("click", () => {
  displayBurgers(decoratedBurgers);
});
