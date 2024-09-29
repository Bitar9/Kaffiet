let cart = [];

const products = [
    { name: "Americano", price: 35, image: "/images/Americano.png" },
    { name: "Cappuccino", price: 40, image: "/images/Cappuccino.png" },
    { name: "Capri Sun", price: 20, image: "/images/capri_sun.png" },
    { name: "Pepsi", price: 15, image: "/images/pepsi.png" },
    { name: "Sandwich", price: 50, image: "/images/sandwich.png" }
];

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});

function renderProducts() {
    const grid = document.getElementById("product-grid");
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Price: ${product.price} kr</p>
                <button class="add-to-cart-btn" onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    cart.push(product);
    updateCart();
    toggleCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} kr`;
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total;
}

function toggleCart() {
    const cartSidebar = document.getElementById("cart-sidebar");
    cartSidebar.classList.toggle("open");
}

function scrollToShop() {
    document.getElementById("shop-section").scrollIntoView({ behavior: "smooth" });
}
