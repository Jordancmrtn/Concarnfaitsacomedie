let button = document.querySelector(".toggleButton")
let nav = document.querySelector(".nav")
let overlay = document.querySelector("#overlay")
var image = document.getElementById ("logoFb")
var largeur = window.innerWidth;


button.onclick = function(){
    nav.classList.toggle("navOpen")
    overlay.classList.toggle("overlayOpen")
}

// window.onscroll = function() {scrollFunction()};


// function scrollFunction() {
// if (largeur > 376){

//   }
// if (largeur < 376){

//     // if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     //   document.getElementById("programmation").classList.add("showprogrammation");
//     //   }
//     // if (document.body.scrollTop > 3150 || document.documentElement.scrollTop > 3150) {
//     //   document.getElementById("imgLocalisation").classList.add("imgLocalisationAfter");
//     //   } 
//   }
// }

var image = document.getElementById("photoCac");
new simpleParallax(image, {
        scale: 1.8
});
      
if(largeur > 376){
        document.getElementById("logoFb").src="img/Icon FB Bleu.png";
        console.log("test");


}
else{
        document.getElementById("logoFb").src="img/Icon FB blanc.png";
}
