//Show/Hide menu script
const body=document.body;
const btnMenu=document.querySelector('.hamburger');

btnMenu.addEventListener('click',function(e){
   e.preventDefault();
   body.classList.toggle('show');
});