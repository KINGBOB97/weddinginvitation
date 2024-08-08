const hamburger = document.querySelector(".navbar-toggler");
const stickytop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");
const btnClose = document.querySelector(".btn-close"); // Tambahkan ini jika elemen btnClose ada

hamburger.addEventListener("click", function () {
  stickytop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickytop.style.overflow = "hidden";
});
