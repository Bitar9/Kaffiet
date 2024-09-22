let cart = [];
let totalPrice = 0;

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');
    
    // Clear previous items
    cartItems.innerHTML = '';

    // Add new items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} kr`;
        cartItems.appendChild(li);
    });

    // Update total price
    totalElement.textContent = `${totalPrice} kr`;
}
