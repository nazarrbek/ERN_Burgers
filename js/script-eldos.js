
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


const colors = ['#fff9e6', '#ffe6e6', '#e6fff7', '#f0f5ff', '#fff4e6', '#f6f0ff'];
let colorIndex = 0;
const changeBtn = document.getElementById('changeColorBtn');
if (changeBtn) {
  changeBtn.addEventListener('click', () => {
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  });
}


function updateDateTime() {
  const now = new Date();
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  const el = document.getElementById('datetime');
  if (el) {

    el.textContent = now.toLocaleString('en-US', options);
  }
}
setInterval(updateDateTime, 1000);
updateDateTime();




