const navBtn = document.getElementById('nav-btn');
const navSlide = document.getElementById('nav-slid');



navBtn.addEventListener("click", ()=>{
    navSlide.classList.toggle("show");
    navBtn.classList.contains("fa-bars")? navBtn.classList.replace("fa-bars" ,"fa-x"):navBtn.classList.replace("fa-x", "fa-bars")
})
console.log(navSlide)