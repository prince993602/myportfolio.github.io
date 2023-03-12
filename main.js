function tg(){
document.getElementsByClassName("manus")[0].style.left="-20px";
// document.getElementsByClassName("toggle")[0].style.left="200px";
  
}
function clos(){
    document.getElementsByClassName("manus")[0].style.left="-280px";  
}
function logo(){
    window.open("index.html");
}
// function inr(){
//     document.getElementsByClassName("port-manus")[0].style.height="200px";  

// }
function tgl(){
    document.getElementsByClassName("hidel")[0].style.left="0px";  
    document.getElementsByClassName("hidel")[0].style.rotate="-90deg"; 
    document.getElementsByClassName("port-manus")[0].style.height="200px";  
    document.getElementsByClassName("hidel")[0].style.visibility="hidden";  
}

function up(){
    document.getElementsByClassName("port-manus")[0].style.height="65px";  
    document.getElementsByClassName("hidel")[0].style.visibility="visible";
    document.getElementsByClassName("hidel")[0].style.rotate="0deg"; 

}
window.addEventListener("scroll",function (){
   if(window.pageYOffset > 160){
    this.document.getElementsByClassName("top")[0].style.opacity="1";
   }else{
    this.document.getElementsByClassName("top")[0].style.opacity="0";

   }
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwxSsJ1eB_LwS0n0MeXAwJqfUu58ElD2fY9oUJXQOYHDRvhZLb3ICS7DGpFuThi9hWu/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for feedback..."))
    .catch(error => console.error('Error!', error.message))
})