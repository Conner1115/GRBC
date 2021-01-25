
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
  //hide loading screen
}

function openNav(){
   $("#nav-links").classList = "nav-in";
   $("#hamburger-button").classList = "hov ham-out";
}
function closeNav(){
  $("#nav-links").classList = "nav-out";
  $("#hamburger-button").classList = "hov ham-in";
}
