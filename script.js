const navBtn = document.getElementById('nav-btn');
const navSlide = document.getElementById('nav-slid');



navBtn.addEventListener("click", ()=>{
    navSlide.classList.toggle("hide");
    navSlide.classList.toggle("slide");
    

    
})
console.log(navSlide)