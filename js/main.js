const mobileMenu = document.querySelector("nav .mobile-menu");
const menuIcon = document.querySelector("nav .menu-icon");
const menuCloseIcon = document.querySelector("nav .mobile-menu .close-icon");

menuIcon.onclick = function () {
  mobileMenu.classList.add("active");
};

menuCloseIcon.onclick = function () {
  mobileMenu.classList.remove("active");
};
