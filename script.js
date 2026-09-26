// =========================
// SAPA
// =========================

function sapa() {
    alert("Halo! Senang berkenalan dengan kamu 👋");
}


// =========================
// MENU MOBILE
// =========================

function toggleMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("active");
}

function closeMenu() {
    const menu = document.getElementById("menu");

    menu.classList.remove("active");
}


// =========================
// DARK / LIGHT MODE
// =========================

function toggleTheme() {

    const body = document.body;

    const button = document.querySelector(".theme-toggle");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {

        button.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        button.textContent = "☀️";

        localStorage.setItem("theme", "dark");
    }
}


// =========================
// LOAD THEME
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    const themeButton =
        document.querySelector(".theme-toggle");

    if (themeButton) {
        themeButton.textContent = "🌙";
    }
}


// =========================
// ANIMASI SCROLL
// =========================

const elements = document.querySelectorAll(
    ".section, .project, .skill"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach((element) => {

    observer.observe(element);

});


// =========================
// TYPING EFFECT
// =========================

const texts = [
    "Pelajar",
    "Web Developer Pemula",
    "HTML Learner",
    "CSS Learner",
    "JavaScript Learner"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const typing =
        document.getElementById("typing");

    if (!typing) return;

    const currentText =
        texts[textIndex];

    if (!deleting) {

        typing.textContent =
            currentText.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (
            charIndex ===
            currentText.length
        ) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;
        }

    } else {

        typing.textContent =
            currentText.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (
                textIndex === texts.length
            ) {

                textIndex = 0;

            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );
}

typingEffect();


// =========================
// TAHUN FOOTER
// =========================

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}
