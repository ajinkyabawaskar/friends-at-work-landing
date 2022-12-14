import "../styles/main.scss";

import WOW from "wow.js";
import "bootstrap";

import Logo from "../images/logo/logo.svg";
import Logo2 from "../images/logo/logo-2.svg";

new WOW().init();
const ud_header = document.querySelector(".ud-header");
const logo = document.querySelector(".navbar-brand img");
const sticky = ud_header.offsetTop;
const submenuButton = document.querySelectorAll(".nav-item-has-children");
const backToTop = document.querySelector(".back-to-top");
let navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

// ======= Sticky
window.onscroll = function () {

    if (window.pageYOffset > sticky) {
        ud_header.classList.add("sticky");
    } else {
        ud_header.classList.remove("sticky");
    }

    if (ud_header.classList.contains("sticky")) {
        logo.src = Logo2;
    } else {
        logo.src = Logo;
    }

    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
};

//===== close navbar-collapse when a  clicked

document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
    e.addEventListener("click", () => {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove("show");
    })
);
navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
});

// ===== submenu

submenuButton.forEach((elem) => {
    elem.querySelector("a").addEventListener("click", () => {
        elem.querySelector(".ud-submenu").classList.toggle("show");
    });
});

// ====== scroll top js
function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
        currentTime += increment;

        const val = Math.easeInOutQuad(currentTime, start, change, duration);

        element.scrollTop = val;

        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
};

document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
};
