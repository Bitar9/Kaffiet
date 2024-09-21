let cart = [];
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');

function addToCart(itemName, itemPrice) {
    const cartItem = cart.find(item => item.name === itemName);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    cartItemsEl.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItemsEl.innerHTML += `
            <li>
                ${item.name} (x${item.quantity}) - ${item.price * item.quantity} kr
                <button onclick="removeFromCart('${item.name}')">X</button>
            </li>
        `;
    });
    cartTotalEl.textContent = `Total: ${total} kr`;
    document.querySelector('.cart-count').textContent = cart.length;
}

function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCart();
}

function toggleCart() {
    cartSidebar.classList.toggle('active');
}

function scrollToShop() {
    document.getElementById('shop-items').scrollIntoView({ behavior: 'smooth' });
}
