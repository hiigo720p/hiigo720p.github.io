// Navbar Resposive
const navbar = document.getElementById("click");

function showMenu() {
  click.style.right = "0";
}

function hideMenu() {
  click.style.right = "-230px";
}

//
//

// Jika diklik diluar hamburgernya nav-nya hilang
const hamburger = document.querySelector("#hamburger_menu");
const navBar = document.querySelector(".navbar-list");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navBar.contains(e.target)) {
    click.style.right = "-230px";
  }
});

//
//

// sticky navbar
window.addEventListener("scroll", function () {
  var navSticky = document.querySelector(".navbar");
  navSticky.classList.toggle("sticky", window.scrollY > 0);
});

// scroll delay reveal javascript
const sr = ScrollReveal({
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(" .navbar", {delay: 140, origin: "top"});
sr.reveal(" .content-hero", {delay: 190, origin: "left"});
sr.reveal(" .social-media", {delay: 100, origin: "bottom"});
sr.reveal(" .footer-home", {delay: 100, origin: "bottom"});

sr.reveal(" .heading", {delay: 100, origin: "left"});
sr.reveal(" .about", {delay: 100, origin: "top"});
sr.reveal(" .heading-span", {delay: 100, origin: "top"});
sr.reveal(" .education", {delay: 150, origin: "top"});
sr.reveal(" .technology", {delay: 150, origin: "top"});
sr.reveal(" .tools", {delay: 150, origin: "top"});

sr.reveal(" .portfolio", {delay: 100, origin: "top"});
