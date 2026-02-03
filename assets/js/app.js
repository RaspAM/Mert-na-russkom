/* ============================
   ДАННЫЕ (временно фейковые)
   Потом заменим на API
============================ */

const ads = [
    {
        id: 1,
        title: "Велосипед горный",
        price: "4500 TL",
        image: "https://via.placeholder.com/300x200?text=Bike",
        description: "Отличное состояние, почти новый",
        category: "sport"
    },
    {
        id: 2,
        title: "Ноутбук Lenovo",
        price: "8500 TL",
        image: "https://via.placeholder.com/300x200?text=Laptop",
        description: "i5, 8GB RAM, SSD",
        category: "electronics"
    },
    {
        id: 3,
        title: "Услуги массажиста",
        price: "300 TL",
        image: "https://via.placeholder.com/300x200?text=Massage",
        description: "Профессиональный массаж, выезд",
        category: "services"
    },
    {
        id: 4,
        title: "Корм для собак",
        price: "150 TL",
        image: "https://via.placeholder.com/300x200?text=Pets",
        description: "Сухой корм, 10 кг",
        category: "pets"
    }
];

/* ============================
   ОТОБРАЖЕНИЕ ОБЪЯВЛЕНИЙ
============================ */

function renderAds(list) {
    const container = document.getElementById("adsContainer");
    if (!container) return;

    container.innerHTML = "";

    // Если объявлений нет
    if (list.length === 0) {
        container.innerHTML = "<p>Объявлений в этой категории пока нет.</p>";
        return;
    }

    list.forEach(ad => {
        const card = document.createElement("div");
        card.className = "ad-card";

        card.innerHTML = `
            <img src="${ad.image}" alt="${ad.title}">
            <div class="ad-title">${ad.title}</div>
            <div class="ad-price">${ad.price}</div>
            <a class="ad-btn" href="ad.html?id=${ad.id}">Подробнее</a>
        `;

        container.appendChild(card);
    });
}

/* ============================
   ПОИСК
============================ */

function searchAds() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const filtered = ads.filter(ad =>
        ad.title.toLowerCase().includes(query) ||
        ad.description.toLowerCase().includes(query)
    );

    renderAds(filtered);
}

/* ============================
   СОБЫТИЯ
============================ */

document.addEventListener("DOMContentLoaded", () => {
    renderAds(ads);

    const searchBtn = document.getElementById("searchBtn");
    if (searchBtn) {
        searchBtn.addEventListener("click", searchAds);
    }

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter") searchAds();
        });
    }
});
