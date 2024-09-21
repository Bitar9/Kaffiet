let cartItems = [];
let cartTotal = 0;

function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    cartTotal += itemPrice;
    updateCart();
    toggleCart(); // Open cart when an item is added
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    cartItemsList.innerHTML = ''; // Clear current items
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: ${item.price} kr`;
        cartItemsList.appendChild(listItem);
    });
    
    cartTotalElement.textContent = `Total: ${cartTotal} kr`;
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('active');
}
