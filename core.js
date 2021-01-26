const $ = (prop) => document.querySelector(prop);
const $$ = (prop) => document.querySelectorAll(prop);
function animateElement(element, animation){
  $(element).style.animation = animation;
  $(element).style.animationFillMode = "forwards";
}
function cssVar(Var, Val){
  $(":root").style.setProperty(Var, Val);
}

document.documentElement.onload = function(){
  //display loading screen
}
window.onload = function(){
  $("#loader").style.transition = "0.5s";
  $("#loader").style.opacity = 0;
  setTimeout(function(){
    $("#loader").style.display = "none";
  },500)
}

function openNav(){
   $("#nav-links").classList = "nav-in";
   $("#hamburger-button").classList = "hov ham-out";
}
function closeNav(){
  $("#nav-links").classList = "nav-out";
  $("#hamburger-button").classList = "hov ham-in";
}
