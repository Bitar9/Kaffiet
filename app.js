// Sample Product Data
const products = [
    { name: "Cappuccino", price: 90, image: "coffee-1.jpg" },
    { name: "Americano", price: 69, image: "coffee-2.jpg" },
    { name: "Espresso", price: 49, image: "coffee-3.jpg" },
];

// Load Products Dynamically
window.onload = () => {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        productGrid.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price} kr</p>
                <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            </div>
        </div>
        `;
    });
};

// Shopping Cart Functionality
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.name} - ${item.price} kr</li>`;
    });
    document.getElementById('cart-total').innerText = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('cart-count').innerText = cart.length;
    toggleCart();
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('open');
}
