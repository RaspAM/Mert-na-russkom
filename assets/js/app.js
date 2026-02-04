/* = ДАННЫЕ (временно фейковые) замена на API! = */

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
        category: "massage"
    },
    {
        id: 4,
        title: "Корм для собак",
        price: "150 TL",
        image: "https://via.placeholder.com/300x200?text=Pets",
        description: "Сухой корм, 10 кг",
        category: "pets"
    },
    {
        id: 5,
        title: "SUP Decathlon 10 1/2",
        price: "1950 TL",
        image: "https://via.placeholder.com/300x200?text=SUP+Decathlon",
        description: " Б/У надувной SUP Decathlon, размер 10 1/2",
        category: "sport"
    },
    {
        id: 6,
        title: "FIAT DOBLO Trekking 2022",
        price: "485000 TL",
        image: "https://via.placeholder.com/300x200?text=FIAT+DOBLO+2022",
        description: "FIAT DOBLO Trekking, модель 2022 года, отличное состояние",
        category: "auto"
    },
    {
        id: 7,
        title: "Косметолог с выездом на дом",
        price: "договорная",
        image: "https://via.placeholder.com/300x200?text=Cosmetology",
        description: "Макияж; окраска бровей и ресниц; коррекция формы бровей; наращивание ресниц; завивка ресниц; косметические маски; эстетический СПА‑массаж",
        category: "cosmetology"
    }
];

/* ===   ГРУППЫ КАТЕГОРИЙ (разделы)==== */

const categoryGroups = {
    sale: ["clothes", "home", "sport", "auto", "electronics"],
    services: ["beauty", "hair", "cosmetology", "epilation", "massage"],
    repair: ["windows", "painting", "floors", "plumbing", "ac", "electric"],
    private: ["transfer", "nanny", "health", "tours", "pets"]
};

/* ============================
   ФИЛЬТРАЦИЯ ПО КАТЕГОРИИ ИЛИ РАЗДЕЛУ
============================ */

function getAdsByCategory(type) {

    // Если это раздел (sale, services, repair, private)
    if (categoryGroups[type]) {
        return ads.filter(ad => categoryGroups[type].includes(ad.category));
    }

    // Если это подкатегория (sport, pets, electronics…)
    return ads.filter(ad => ad.category === type);
}

/* ============================
   ОТОБРАЖЕНИЕ ОБЪЯВЛЕНИЙ
============================ */

function renderAds(list) {
    const container = document.getElementById("adsContainer");
    if (!container) return;

    container.innerHTML = "";

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
    // На главной странице показываем все объявления
    if (document.getElementById("adsContainer")) {
        renderAds(ads);
    }

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
