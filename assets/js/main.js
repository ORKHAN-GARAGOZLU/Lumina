//Video slider

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

//search


let siteSearch = document.querySelector(".site-search");

let fixSearch = document.querySelector(".fix-search");

let searchClose = document.querySelector(".fix-search .search-close");



siteSearch.addEventListener("click", function(e){
  e.preventDefault();
  fixSearch.classList.add("show-search");
});

searchClose.onclick = function(){
  fixSearch.classList.remove("show-search");
}


//Navbar Submenu

// document.addEventListener("DOMContentLoaded", function() {
//   let submenuElements = document.querySelectorAll(".submenu-element");
//   let submenu = document.querySelector(".submenu");

//   submenuElements.forEach(function(element) {
//     element.addEventListener("click", function(e) {
//       e.preventDefault();
//       submenu.style.visibility = "visible";
      
//     });
//   });
// });



//select doctor

// document.addEventListener('DOMContentLoaded', function () {
//     var select = document.getElementById('Department');
//     var teamMembers = document.querySelectorAll('.team-member')
//     select.addEventListener('change', function () {
//         var selectedDepartment = select.value
        
//         teamMembers.forEach(function (member) {
//             member.style.display = 'none';
//         })
        
//         teamMembers.forEach(function (member) {
//             var department = member.querySelector('p').textContent;
//             if (department === selectedDepartment) {
//                 member.style.display = 'block';
//             }
//         });
//     });
// });

















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


