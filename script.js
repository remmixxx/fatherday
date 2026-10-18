const memories = [
    {
        image: "images/image.png" ,
        date: "САМЫЕ РАННИЕ ВОСПОМИНАНИЯ",
        title: "Наша первая совместная фотография",
    },
    {
        image: "images/image1.png",
        date: "ВОСПОМИНАНИЕ № 2",
        title: "Мы с тобой в зоопарке",
  },
    {
        image: "images/image12.png",
        date: "ВОСПОМИНАНИЕ № 3",
        title: "Покатушки на квадроцикле",
    },
    {
        image: "images/image3.png",
        date: "ВОСПОМИНАНИЕ № 4",
        title: "Поездка в Санкт-Петербург",
    },
    {
        image: "images/image10.png",
        date: "ВОСПОМИНАНИЕ № 5",
        title: "Поездка в Петергоф",
    },
    {
        image: "images/image11.png",
        date: "ВОСПОМИНАНИЕ № 6",
        title: "Первая поездка на Toyota TRD",
    },
    {
        image: "images/image4.png",
        date: "ВОСПОМИНАНИЕ № 7",
        title: "Наша шахматная партия",
    },
    {
        image: "images/image5.png",
        date: "ВОСПОМИНАНИЕ № 8",
        title: "Первый поход на футбольный матч",
    },
    {
        image: "images/image6.png",
        date: "ВОСПОМИНАНИЕ № 9",
        title: "Удачная рыбалка",
    },
    {
        image: "images/image7.png",
        date: "ВОСПОМИНАНИЕ № 10",
        title: "Полет в Дубай",
    },
    {
        image: "images/image9.png",
        date: "ВОСПОМИНАНИЕ № 11",
        title: "Наш перелет во Францию",
    },
    {
        image: "images/image8.png",
        date: "ВОСПОМИНАНИЕ № 12",
        title: "Твой день рождения в Турции",
        description: "Продолжение следует..."
    },
];

let currentMemory = 0;

const memoryImage = document.getElementById("memoryImage");
const memoryDate = document.getElementById("memoryDate");
const memoryTitle = document.getElementById("memoryTitle");
const memoryDescription = document.getElementById("memoryDescription");
const memoryCounter = document.getElementById("memoryCounter");
const memoryDots = document.getElementById("memoryDots");

function showMemory(index) {
    currentMemory = (index + memories.length) % memories.length;

    const memory = memories[currentMemory];

    memoryImage.src = memory.image;
    memoryDate.textContent = memory.date;
    memoryTitle.textContent = memory.title;
    memoryDescription.textContent = memory.description;

    memoryCounter.textContent =
        String(currentMemory + 1).padStart(2, "0") +
        " / " +
        String(memories.length).padStart(2, "0");

    document.querySelectorAll(".dot").forEach(function (dot, i) {
        dot.classList.toggle("active", i === currentMemory);
    });
}

// Создаём 14 точек для быстрого выбора фотографии
memories.forEach(function (memory, index) {
    const dot = document.createElement("button");

    dot.className = "dot";
    dot.setAttribute("aria-label", "Воспоминание " + (index + 1));
    dot.addEventListener("click", function () {
        showMemory(index);
    });

    memoryDots.appendChild(dot);
});

document.getElementById("prevMemory").addEventListener("click", function () {
    showMemory(currentMemory - 1);
});

document.getElementById("nextMemory").addEventListener("click", function () {
    showMemory(currentMemory + 1);
});

// Кнопка любви
document.getElementById("loveButton").addEventListener("click", function () {
    const message = document.getElementById("loveMessage");

    message.classList.toggle("hidden");

    this.textContent = message.classList.contains("hidden")
        ? "♡ Нажми, если любишь папу"
        : "♡ Я люблю тебя, папа!";
});

// Смешная фотография
document.getElementById("smileButton").addEventListener("click", function () {
    const photo = document.getElementById("funnyPhoto");

    photo.classList.toggle("hidden");

    this.textContent = photo.classList.contains("hidden")
        ? "Нажми для улыбки"
        : "Спрятать фотографию";

    if (!photo.classList.contains("hidden")) {
        photo.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
});

// Финальное послание
document.getElementById("finalButton").addEventListener("click", function () {
    document.getElementById("finalMessage").classList.toggle("hidden");
});

// Первое воспоминание отображается сразу
showMemory(0);