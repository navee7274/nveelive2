const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const logoImage = document.querySelector(".logo_image");
const headingOne = document.querySelector("article h1");
const navLinks = document.querySelectorAll("ul li");
const navLinksMain = document.querySelector(".nav_links");
const mainNav = document.querySelector(".main_nav");

let lastScroll = 0;

let scrollCheck1 = document.documentElement.scrollTop < lastScroll;

if (window.innerWidth <= 480) {
  headingOne.style.fontSize = "var(--fs-300)"; ///
  headingOne.style.marginBottom = "15px"; ///
  logo.style.marginBottom = "10px"; ///
  header.style.flexDirection = "column"; ///
  header.style.paddingInline = "5%"; ///
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.padding = "2px 5px"; ////
  }
  mainNav.style.width = "100%";
  navLinksMain.classList.add("flexClass");
  navLinksMain.style.justifyContent = "space-between";
  document.querySelector("article").style.paddingInline = "5%";

  window.onscroll = function (e) {
    let scrollCheck1 = document.documentElement.scrollTop < lastScroll;
    let scrollCheck2 = document.documentElement.scrollTop < 200;

    if (scrollCheck1 && scrollCheck2) {
      logo.classList.remove("hiddenTransform");
    } else {
      logo.classList.add("hiddenTransform");
    }
    lastScroll = document.documentElement.scrollTop;
  };
}
