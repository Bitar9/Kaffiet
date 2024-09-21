// Sample product data
const products = [
    { id: 1, name: 'Cappuccino', price: 90, description: 'Krämig espresso toppad med skummad mjölk.' },
    { id: 2, name: 'Americano', price: 69, description: 'Stark espresso utspädd med hett vatten.' },
    { id: 3, name: 'Espresso', price: 49, description: 'Kraftfull, koncentrerad kaffe bryggd genom hett vatten.' }
];

let cart = [];

// Function to render products
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productItem = `
            <div class="product-item">
                <h3>${product.name}</h3>
                <p>${product.price} kr</p>
                <p>${product.description}</p>
                <button onclick="addToCart(${product.id})">Lägg till i kundvagnen</button>
            </div>
        `;
        productGrid.innerHTML += productItem;
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update cart
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceEl = document.getElementById('total-price');

    cartItemsDiv.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = `
            <div class="cart-item">
                <h4>${item.name} - ${item.price} kr</h4>
            </div>
        `;
        cartItemsDiv.innerHTML += cartItem;
        totalPrice += item.price;
    });

    cartCount.innerText = cart.length;
    totalPriceEl.innerText = totalPrice;
}

// Render products on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
"""

# Step 4: Saving the files to build the virtual shop page

files = {
    'virtual_shop.html': html_content,
    'shop_style.css': css_content,
    'cart.js': js_content
}

for filename, content in files.items():
    with open(f"/mnt/data/{filename}", "w") as file:
        file.write(content)

"/mnt/data/virtual_shop.html, /mnt/data/shop_style.css, /mnt/data/cart.js"
