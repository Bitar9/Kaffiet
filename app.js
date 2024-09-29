// Product Data
const produkter = [
    { namn: "Americano", pris: 35, bild: "/images/Americano.png", beskrivning: "En klassisk Americano för kaffeälskare." },
    { namn: "Cappuccino", pris: 40, bild: "/images/Cappuccino.png", beskrivning: "Len och skummig Cappuccino." },
    { namn: "Capri Sun", pris: 20, bild: "/images/capri_sun.png", beskrivning: "En fräsch Capri Sun att njuta av." },
    { namn: "Pepsi", pris: 15, bild: "/images/pepsi.png", beskrivning: "Kyld och kolsyrad Pepsi för att släcka törsten." },
    { namn: "Sandwich", pris: 50, bild: "/images/sandwich.png", beskrivning: "Färsk och läcker smörgås." }
    // Lägg till fler produkter här (totalt upp till 15)
];

// Rendera produkter i butiken
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
                <button class="inspect-btn" onclick="inspekteraVara('${produkt.namn}')">Inspektera vara</button>
            </div>
        `;
        grid.appendChild(kort);
    });
}

// Inspektionsmodal
function inspekteraVara(produktNamn) {
    const produkt = produkter.find(p => p.namn === produktNamn);
    const modal = document.getElementById("modal");
    const modalBild = document.getElementById("modal-image");
    const modalTitel = document.getElementById("modal-title");
    const modalBeskrivning = document.getElementById("modal-description");
    const modalPris = document.getElementById("modal-price");

    modalBild.src = produkt.bild;
    modalTitel.textContent = produkt.namn;
    modalBeskrivning.textContent = produkt.beskrivning;
    modalPris.textContent = produkt.pris;

    modal.style.display = "flex";
}

// Stäng modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Scrolla till butik
function scrollToShop() {
    document.getElementById("shop-section").scrollIntoView({ behavior: "smooth" });
}
