let button = document.querySelector(".toggleButton")
let nav = document.querySelector(".nav")
let overlay = document.querySelector("#overlay")

button.onclick = function () {
  nav.classList.toggle("navOpen")
  overlay.classList.toggle("overlayOpen")
}

var largeur = window.innerWidth;
window.onscroll = function () { scrollFunction() };

if (largeur > 376) {
  document.getElementById("logoFb").src = "img/Icon FB Bleu.png";
  document.getElementById("logoInsta").src = "img/2ndEdition/instagram.png";

}
else {
  document.getElementById("logoFb").src = "img/Icon FB blanc.png";
  document.getElementById("logoInsta").src = "img/Icon Insta Blanc.png";
}

function scrollFunction() {
  if (largeur > 376) {

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.querySelector("#logoHeader").classList.add("logoHeaderAfter");
    } else {
      document.querySelector("#logoHeader").classList.remove("logoHeaderAfter")
    }

    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
      document.getElementById("programmation").classList.add("showprogrammation");
    }

    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
      document.getElementById("imgLocalisation").classList.add("imgLocalisationAfter2");
    }
  }
  if (largeur < 376) {

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("programmation").classList.add("showprogrammation");
    }
    if (document.body.scrollTop > 3150 || document.documentElement.scrollTop > 1800) {
      document.getElementById("imgLocalisation").classList.add("imgLocalisationAfter");
    }
  }
}
