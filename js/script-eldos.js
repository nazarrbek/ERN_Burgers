// ===== Task 3: Form Validation (by Eldos) =====

// Находим элементы формы
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword"); // поле для подтверждения пароля
const successMessage = document.getElementById("form-success"); // блок для сообщения об успехе

// Функция очистки ошибок
function clearErrors() {
  // Находит все элементы с классом "text-danger" и очищает текст ошибок
  document.querySelectorAll(".text-danger").forEach((el) => (el.textContent = ""));
}

// Основная проверка при отправке формы
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Отменяем стандартную отправку формы (чтобы не перезагружалась страница)
  clearErrors();

  let isValid = true; // показывает прошла ли форма проверку

  // Проверка имени
  if (nameInput.value.trim() === "") {
    // Если поле пустое
    document.getElementById("error-name").textContent = "Please enter your name";
    isValid = false;
  }

  // Проверка email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // шаблон для проверки email
  if (!emailPattern.test(emailInput.value)) {
    // если email не совпадает с шаблоном
    document.getElementById("error-email").textContent = "Enter a valid email";
    isValid = false;
  }

  // Проверка пароля
  if (passwordInput.value.length < 6) {
    // если пароль короче 6 символов
    document.getElementById("error-password").textContent =
      "Password must be at least 6 characters"; // сообщение об ошибке
    isValid = false;
  }

  // Проверка совпадения паролей
  if (passwordInput.value !== confirmPasswordInput.value) {
    // если пароли не совпадают
    document.getElementById("error-confirm").textContent = "Passwords do not match";
    isValid = false;
  }

  // Если все проверки прошли успешно
  if (isValid) {
    successMessage.style.display = "block"; // показываем сообщение
    successMessage.textContent = "✅ Registration successful!"; 
    form.reset(); // очищаем все поля формы
  }
});

// ===== Task 4: Change Background Image (by Eldos) =====


const images = [
  "url('https://images.unsplash.com/photo-1724755820537-ad4363bf1172?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUQwJUIxJUQxJTgzJUQxJTgwJUQwJUIzJUQwJUI1JUQxJTgwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600')",
  "url('https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVEMCVCMSVEMSU4MyVEMSU4MCVEMCVCMyVEMCVCNSVEMSU4MHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600')",
  "url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90')",
  "url('https://images.unsplash.com/photo-1571091718767-18b5b1457add')",
  "url('https://images.unsplash.com/photo-1565958011702-44e2110e6db0')",
  "url('https://images.unsplash.com/photo-1615719413546-198b25453f85')"
];

let imageIndex = 0; // индекс текущей картинки
const changeBtn = document.getElementById("changeColorBtn"); // кнопка смены фона

if (changeBtn) {
  changeBtn.addEventListener("click", () => {
    document.body.style.transition = "background 1s ease"; // плавный переход
    document.body.style.background = `${images[imageIndex]} no-repeat center center fixed`; // меняем фон
    document.body.style.backgroundSize = "cover"; // растягиваем под экран
    imageIndex = (imageIndex + 1) % images.length; // переход к следующему изображению
  });
}

// ===== Task 5: Display Current Date and Time (by Eldos) =====

function updateDateTime() {
  const now = new Date(); // получаем текущее время и дату
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric", // год, месяц и день
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit", // часы, минуты и секунды
  };
  const el = document.getElementById("datetime"); // элемент для отображения даты/времени
  if (el) {
    // форматирует дату как: October 15, 2025, 06:30:10 PM
    el.textContent = now.toLocaleString("en-US", options);
  }
}

setInterval(updateDateTime, 1000); // обновляем дату и время каждую секунду
updateDateTime(); // вызываем сразу при загрузке страницы
