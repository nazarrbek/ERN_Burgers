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
