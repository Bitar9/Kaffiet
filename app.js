let kundvagn = [];

const produkter = [
    { namn: "Americano", pris: 35, bild: "/images/Americano.png" },
    { namn: "Cappuccino", pris: 40, bild: "/images/Cappuccino.png" },
    { namn: "Capri Sun", pris: 20, bild: "/images/capri_sun.png" },
    { namn: "Pepsi", pris: 15, bild: "/images/pepsi.png" },
    { namn: "Sandwich", pris: 50, bild: "/images/sandwich.png" }
];

document.addEventListener("DOMContentLoaded", () => {
    renderaProdukter();
});

function renderaProdukter() {
    const grid = document.getElementById("product-grid");
    produkter.forEach(produkt => {
        const kort = document.createElement("div");
        kort.classList.add("product-card");
        kort.innerHTML = `
            <img src="${produkt.bild}" alt="${produkt.namn}">
            <div class="product-info">
                <h3>${produkt.namn}</h3>
                <p>Pris: ${produkt.pris} kr</p>
                <button class="add-to-cart-btn" onclick="laggTillIKundvagn('${produkt.namn}')">Lägg till i kundvagn</button>
            </div>
        `;
        grid.appendChild(kort);
    });
}

function laggTillIKundvagn(produktNamn) {
    const produkt = produkter.find(p => p.namn === produktNamn);
    kundvagn.push(produkt);
    uppdateraKundvagn();
    toggleCart();
}

function uppdateraKundvagn() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;
    kundvagn.forEach(item => {
        total += item.pris;
        const li = document.createElement("li");
        li.textContent = `${item.namn} - ${item.pris} kr`;
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
