// JavaScript for handling cart functionality

const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Sample data for featured food items
const featuredFoodItems = [
    { name: 'Pizza', price: 10.99 },
    { name: 'izza', price: 11.99 },
    { name: 'zza', price: 20.99 },
    

    
    // Add more featured food items here
];

// Initialize cart
const cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

// Function to update the cart
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name}: $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
}

// Event listener for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-item');
        const itemPrice = featuredFoodItems.find(item => item.name === itemName).price;
        addToCart(itemName, itemPrice);
    });
});

// Event listener for "Proceed to Checkout" button
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
    // You can implement the checkout process here (e.g., payment processing)
    alert('Checkout functionality is not implemented in this demo.');
});
