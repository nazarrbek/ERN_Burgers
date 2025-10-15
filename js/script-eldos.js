const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const successMessage = document.getElementById("form-success");

function clearErrors() {
  document.querySelectorAll(".text-danger").forEach((el) => (el.textContent = ""));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();

  let isValid = true;

  if (nameInput.value.trim() === "") {
    document.getElementById("error-name").textContent = "Please enter your name";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    document.getElementById("error-email").textContent = "Enter a valid email";
    isValid = false;
  }

  if (passwordInput.value.length < 6) {
    document.getElementById("error-password").textContent =
      "Password must be at least 6 characters";
    isValid = false;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    document.getElementById("error-confirm").textContent = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    successMessage.style.display = "block";
    successMessage.textContent = "✅ Registration successful!";
    form.reset();
  }
});

const images = [
  "url('https://images.unsplash.com/photo-1606755962773-d324e0a13085')",
  "url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071')",
  "url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90')",
  "url('https://images.unsplash.com/photo-1571091718767-18b5b1457add')",
  "url('https://images.unsplash.com/photo-1565958011702-44e2110e6db0')",
  "url('https://images.unsplash.com/photo-1615719413546-198b25453f85')"
];

let imageIndex = 0;
const changeBtn = document.getElementById("changeColorBtn");

if (changeBtn) {
  changeBtn.addEventListener("click", () => {
    document.body.style.transition = "background 1s ease";
    document.body.style.background = `${images[imageIndex]} no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
    imageIndex = (imageIndex + 1) % images.length;
  });
}

function updateDateTime() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const el = document.getElementById("datetime");
  if (el) {
    el.textContent = now.toLocaleString("en-US", options);
  }
}

setInterval(updateDateTime, 1000);
updateDateTime();
