const cardField = document.querySelectorAll(".card_field");
const cardText = document.querySelectorAll(".card_field h2");
if (window.innerWidth <= 480) {
  for (let j = 0; j < cardField.length; j++) {
    cardField[j].style.height = "15vh";
    cardField[j].style.marginBottom = "20px";
    cardText[j].style.fontSize = "var(--fs-400)";
  }
}
