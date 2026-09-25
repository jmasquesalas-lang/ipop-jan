/* =====================================================
   SMOOTH SCROLL
   ===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



/* =====================================================
   NAVBAR
   ===================================================== */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8, 8, 8, 0.92)";

    } else {

        navbar.style.background =
            "rgba(8, 8, 8, 0.75)";

    }

});



/* =====================================================
   SCROLL REVEAL
   ===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   HERO PARALLAX
   ===================================================== */

const heroBackground =
    document.querySelector(".hero-background");


window.addEventListener("scroll", () => {

    if (!heroBackground) return;

    const scrollPosition =
        window.scrollY;

    heroBackground.style.transform =
        `translateY(${scrollPosition * 0.15}px)`;

});