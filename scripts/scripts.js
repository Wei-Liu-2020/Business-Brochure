//Show/Hide hamburger menu script
const body=document.body;
const btnMenu=document.querySelector('.hamburger');

btnMenu.addEventListener('click',function(e){
   e.preventDefault();
   body.classList.toggle('show');
});

//Show/Hide menu section script
document.getElementById("taco-title").addEventListener("click", toggleTacos);
document.getElementById("starter-title").addEventListener("click", toggleStarters);
document.getElementById("vegan-title").addEventListener("click", toggleVegans);
document.getElementById("burrito-title").addEventListener("click", toggleBurritos);
document.getElementById("drink-title").addEventListener("click", toggleDrinks);

function toggleTacos(){
   document.getElementById("taco-section").style.display = "block";
   document.getElementById("starter-section").style.display = "none";
   document.getElementById("vegan-section").style.display = "none";
   document.getElementById("burrito-section").style.display = "none";
   document.getElementById("drink-section").style.display = "none";
}
function toggleStarters(){
   document.getElementById("taco-section").style.display = "none";
   document.getElementById("starter-section").style.display = "block";
   document.getElementById("vegan-section").style.display = "none";
   document.getElementById("burrito-section").style.display = "none";
   document.getElementById("drink-section").style.display = "none";
}
function toggleVegans(){
   document.getElementById("taco-section").style.display = "none";
   document.getElementById("starter-section").style.display = "none";
   document.getElementById("vegan-section").style.display = "block";
   document.getElementById("burrito-section").style.display = "none";
   document.getElementById("drink-section").style.display = "none";
}
function toggleBurritos(){
   document.getElementById("taco-section").style.display = "none";
   document.getElementById("starter-section").style.display = "none";
   document.getElementById("vegan-section").style.display = "none";
   document.getElementById("burrito-section").style.display = "block";
   document.getElementById("drink-section").style.display = "none";
}
function toggleDrinks(){
   document.getElementById("taco-section").style.display = "none";
   document.getElementById("starter-section").style.display = "none";
   document.getElementById("vegan-section").style.display = "none";
   document.getElementById("burrito-section").style.display = "none";
   document.getElementById("drink-section").style.display = "block";
}
