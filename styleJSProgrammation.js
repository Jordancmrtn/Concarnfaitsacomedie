let button = document.querySelector(".toggleButton")
let nav = document.querySelector(".nav")
let overlay = document.querySelector("#overlay")
var image = document.getElementById ("logoFb")
var largeur = window.innerWidth;


button.onclick = function(){
    nav.classList.toggle("navOpen")
    overlay.classList.toggle("overlayOpen")
}
      
if(largeur > 376){
        document.getElementById("logoFb").src="img/Icon FB Bleu.png";
        console.log("test");


}
else{
        document.getElementById("logoFb").src="img/Icon FB blanc.png";
}
