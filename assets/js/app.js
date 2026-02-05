/* = ДАННЫЕ (временно фейковые) замена на API! = */

const ads = [
    {
        id: 1,
        title: "Велосипед горный",
        price: "4500 TL",
        image: "https://via.placeholder.com/300x200?text=Bike",
        description: "Отличное состояние, почти новый",
        category: "sport",
        section: "sale"
    },
    {
        id: 2,
        title: "Ноутбук Lenovo",
        price: "8500 TL",
        image: "https://via.placeholder.com/300x200?text=Laptop",
        description: "i5, 8GB RAM, SSD",
        category: "electronics",
        section: "sale"
    },
    {
        id: 3,
        title: "Услуги массажиста",
        price: "300 TL",
        image: "https://via.placeholder.com/300x200?text=Massage",
        description: "Профессиональный массаж, выезд",
        category: "massage",
        section: "services"
    },
    {
        id: 4,
        title: "Корм для собак",
        price: "150 TL",
        image: "https://via.placeholder.com/300x200?text=Pets",
        description: "Сухой корм, 10 кг",
        category: "pets",
        section: "private"
    },
    {
        id: 5,
        title: "SUP Decathlon 10 1/2",
        price: "950 TL",
        image: "https://via.placeholder.com/300x200?text=SUP",
        description: "Надувной Б/У SAP Decathlon, размер 10 1/2",
        category: "sport",
        section: "sale"
    },
    {
        id: 6,
        title: "FIAT DOBLO Trekking 2022",
        price: "485000 TL",
        image: "https://via.placeholder.com/300x200?text=FIAT+DOBLO+2022",
        description: "FIAT DOBLO Trekking, модель 2022 года, отличное состояние",
        category: "auto",
        section: "sale"
    },
    {
        id: 7,
        title: "Косметолог с выездом на дом",
        price: "500 TL",
        image: "https://via.placeholder.com/300x200?text=Cosmetology",
        description: "Макияж, окраска бровей и ресниц, коррекция формы бровей, наращивание ресниц, СПА‑массаж",
        category: "cosmetology",
        section: "services"
    },

    /* === НОВЫЕ ЧАСТНЫЕ ОБЪЯВЛЕНИЯ === */

    {
        id: 8,
        title: "Аренда авто в Мерсине",
        price: "Цена договорная",
        image: "https://via.placeholder.com/300x200?text=Rent+Car",
        description: "👍 АРЕНДА АВТО В Мерсине 🔥 Минимум формальностей. Машина за несколько минут. Оплата ₺ | ₽ | $ | €. Пишите @Mariia2728 — подберём вариант.",
        category: "transfer",
        section: "private"
    },
    {
        id: 9,
        title: "Помощь в обустройстве квартиры",
        price: "Цена договорная",
        image: "https://via.placeholder.com/300x200?text=Home+Help",
        description: "Помогаю русскоговорящим обустраивать квартиры с нуля — мебель, техника, интернет. Пишите в личные сообщения.",
        category: "health", // временно, если хочешь — создадим новую категорию
        section: "private"
    },
    {
        id: 10,
        title: "Ищу работу няни",
        price: "Цена договорная",
        image: "https://via.placeholder.com/300x200?text=Nanny",
        description: "Ищу работу няни. Высшее медобразование, опыт работы с детьми, включая ДЦП. Есть рекомендации.",
        category: "nanny",
        section: "private"
    },
    {
        id: 11,
        title: "Попутчики в аэропорт Чукурова",
        price: "Цена договорная",
        image: "https://via.placeholder.com/300x200?text=Airport",
        description: "Завтра утром еду в аэропорт Чукурова. Выезд до 8:00. Возьму попутчиков.",
        category: "transfer",
        section: "private"
    }
];

/* === ГРУППЫ КАТЕГОРИЙ (разделы) === */

const categoryGroups = {
    sale: ["clothes", "home", "sport", "auto", "electronics"],

    services: [
        // Красота и здоровье
        "hair", "cosmetology", "epilation", "massage",

        // Ремонт
        "windows", "painting", "floors", "plumbing", "ac", "electric"
    ],

    private: ["transfer", "nanny", "health", "tours", "pets"]
};

/* ============================
   ФИЛЬТРАЦИЯ ПО КАТЕГОРИИ ИЛИ РАЗДЕЛУ
============================ */

function getAdsByCategory(type) {

    // Если это раздел (sale, services, private)
    if (categoryGroups[type]) {
        return ads.filter(ad => ad.section === type);
    }

    // Если это категория
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

    // НИЧЕГО НЕ РЕНДЕРИМ автоматически!
    // Главная страница НЕ должна показывать товары.

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
