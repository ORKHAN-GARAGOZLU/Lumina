var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//drawer

let drawerBtn = document.querySelector(".drawer");

let drawer = document.querySelector(".drawer-d");
let drawerClose = document.querySelector(".drawer-d .close");
// let body = document.querySelector("body");


drawerBtn.onclick = function () {
    drawer.classList.add("show");
    // body.classList.add("blur");
    
}

drawerClose.onclick = function () {
    drawer.classList.remove("show");
    // main.classList.remove("blur");

}







// Up

// let up = document.querySelector(".up");

//       window.addEventListener("scroll", () => {
//         let scrollY = window.scrollY;
//         if(scrollY > 300){
//           up.classList.add("show");
//         }
//         else{
//           up.classList.remove("show");
//         }

//       });
//       up.addEventListener("click", () =>{
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth"
//         });
//       });


