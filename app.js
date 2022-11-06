/* Fonction des animations d'entrées */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
/* Fonction des animations d'entrées */


/* Anim On Click du burger */
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
});
/* Anim On Click du burger */

/* Fonction du burger */

    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navbar-active');
    });

    nav.addEventListener('click', () => {
        hamburger.classList.toggle("is-active");
        nav.classList.toggle("navbar-active");
    });
/* Fonction du burger */


