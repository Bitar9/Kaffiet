let cart = [];

const products = [
    { name: "Espresso", price: 35, image: "espresso.jpg" },
    { name: "Cappuccino", price: 40, image: "cappuccino.jpg" },
    { name: "Latte", price: 45, image: "latte.jpg" },
    { name: "Croissant", price: 25, image: "croissant.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    document.getElementById('cart-toggle').addEventListener('click', toggleCart);
});

function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price} kr</p>
                    <button class="add-to-cart-btn" onclick="addToCart('${product.name}', ${product.price})">Lägg till i varukorg</button>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

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

function scrollToShop() {
    document.getElementById('shop-section').scrollIntoView({ behavior: 'smooth' });
}
