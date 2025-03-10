document.addEventListener("DOMContentLoaded", function () {
    // Приховати завантажувач після 2 секунд
    setTimeout(() => {
        document.querySelector(".loader").classList.add("hidden");
    }, 2000);
});

// Зміна теми
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Перевірка наявності теми у localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "⇄"; // Символ для темної теми
    } else {
        document.body.classList.remove("dark-mode");
        themeToggle.textContent = "⇆"; // Символ для світлої теми
    }

    themeToggle.addEventListener("click", () => {
        // Перемикання класу dark-mode
        document.body.classList.toggle("dark-mode");

        // Зміна іконки на кнопці
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "⇄"; // Темна тема
            localStorage.setItem("theme", "dark"); // Зберігаємо стан теми
        } else {
            themeToggle.textContent = "⇆"; // Світла тема
            localStorage.setItem("theme", "light"); // Зберігаємо стан теми
        }
    });
});

// Перемикання вкладок
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Ховаємо всі вкладки
        tabContents.forEach(content => content.classList.remove("active"));

        // Видаляємо активний стан у кнопок
        tabButtons.forEach(btn => btn.classList.remove("active"));

        // Визначаємо вкладку за data-tab
        const tabId = button.getAttribute("data-tab");
        const targetTab = document.getElementById(tabId);

        if (targetTab) {
            targetTab.classList.add("active");
        }

        // Робимо кнопку активною та збільшуємо її
        button.classList.add("active");

        // Зміна фону на відповідний
        document.body.className = ""; // Очищаємо всі класи фону
        document.body.classList.add(`${tabId}-bg`); // Додаємо правильний фон
    });
});
