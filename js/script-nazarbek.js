let cartCount = 0;
const burgerPrice = 2500;

function addToCart() {
    cartCount++;
    document.getElementById("count").textContent = cartCount;
    alert("Burger added to cart!");
}


function removeFromCart() {
    if (cartCount > 0) {
        cartCount--;
        document.getElementById("count").textContent = cartCount;
    } else {
        alert("Cart is already empty!");
    }
}


function calculateTotal() {
    const total = cartCount * burgerPrice;
    document.getElementById("totalResult").textContent = 
        "Total amount: " + total + " ₸";
}

function validateOrderForm() {
    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all fields!");
        return false;
    }

    alert("Thank you, " + name + "! Your order has been received.");
    return true;
}
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Устанавливаем текущую тему при загрузке страницы
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = '☀️ Light Mode';  // Текст для темной темы
} else {
  document.body.classList.add('light-mode');
  toggleButton.textContent = '🌙 Dark Mode';  // Текст для светлой темы
}

// Обработчик для кнопки переключения темы
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = '🌙 Dark Mode';
  }
});
