let kundvagn = [];

const produkter = [
    { namn: "Slat Bulle (utan smör , pålägg)", pris: 5, bild: "Slat-bulle.png" },
    { namn: "Hel Bulle med pålägg", pris: 10, bild: "Bulle.png" },
    { namn: "Capri Sun", pris: 5, bild: "caprisun.png" },  // Fixed the filename
    { namn: "Billys Pan pizza Veggie", pris: 15, bild: "billy_Veggie.png" },
    { namn: "Billys Pan pizza Original", pris: 15, bild: "billy_original.png" },
    { namn: "Glass", pris: 5, bild: "glass.png" },
    { namn: "Pancake med Sylt (1 st)", pris: 15, bild: "pancake.png" },
    { namn: "Popcorn", pris: 5, bild: "popcorn.png" }
    // Added missing commas between the objects
];

document.addEventListener("DOMContentLoaded", () => {
    renderaProdukter();
});

/* function renderaProdukter() {
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
*/
/*
/function laggTillIKundvagn(produktNamn) {
    const produkt = produkter.find(p => p.namn === produktNamn);
    kundvagn.push(produkt);
    uppdateraKundvagn();
    toggleCart();
}

// function uppdateraKundvagn() {
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
*/
function scrollToShop() {
    document.getElementById("shop-section").scrollIntoView({ behavior: "smooth" });
}
