let cart = [];
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
    toggleCart(); // Auto-open cart when adding an item
}

function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - ${item.price} kr 
            <button onclick="removeFromCart('${item.name}')">Ta bort</button>`;
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });
    cartTotalElement.textContent = `Total: ${total} kr`;
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
