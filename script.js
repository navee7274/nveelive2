const menuButton = document.querySelector(".menu_button");
const dropdownMenu = document.querySelector(".dropdown_menu");
const headerActual = document.querySelector("header");
const headerWrap = document.querySelector(".header_wrap");

menuButton.onclick = function () {
  if (dropdownMenu.classList.contains("open")) {
    dropdownMenu.classList.remove("open");
    console.log("closed");
  } else {
    dropdownMenu.classList.add("open");
    console.log("opened");
  }
};

window.addEventListener("scroll", function () {
  headerActual.classList.toggle("sticky_header", window.scrollY > 0);
  headerWrap.classList.toggle("sticky_header_w", window.scrollY > 0);
});

document.addEventListener("click", function (e) {
  if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target) && dropdownMenu.classList.contains("open")) {
    dropdownMenu.classList.remove("open");
  }
});

function imageLoadingError(element) {
  element.src = "/img_error.webp";
}
