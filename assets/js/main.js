//Tab

$('.cart-plus-minus').append(
  '<div class="dec qtybutton"><i class="fa fa-minus"></i></div><div class="inc qtybutton"><i class="fa fa-plus"></i></div>'
);
$('.qtybutton').on('click', function () {
  var $button = $(this);
  var oldValue = $button.parent().find('input').val();
  if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
  } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
      } else {
          newVal = 1;
      }
  }
  $button.parent().find('input').val(newVal);
});

//------------------------------------------------------


//Menu Drawer

let drawerBtn = document.querySelector(".menu-icon");

let drawer = document.querySelector(".drawer-d");
let drawerClose = document.querySelector(".drawer-d .close");
// let body = document.querySelector("body");


drawerBtn.onclick = function () {
    drawer.classList.add("showleft");
    // body.classList.add("blur");
    
}

drawerClose.onclick = function () {
    drawer.classList.remove("showleft");
    // main.classList.remove("blur");

}

//------------------------------------------------------


//Shopping Drawer

let shoppingBtn = document.querySelector(".shopping-bag");

let shoppingDrawer = document.querySelector(".shopping-drawer");
let shoppingClose = document.querySelector(".shopping-drawer .close");


shoppingBtn.onclick = function () {
  shoppingDrawer.classList.add("showright");
}

shoppingClose.onclick = function () {
  shoppingDrawer.classList.remove("showright");
}

//------------------------------------------------------


//search


$(document).ready(function() {
  var siteSearch = $(".site-search");
  var fixSearch = $(".fix-search");
  var searchClose = $(".fix-search .search-close");

  siteSearch.on("click", function(e) {
    e.preventDefault();
    fixSearch.addClass("show-search");
  });

  searchClose.on("click", function() {
    fixSearch.removeClass("show-search");
  });
});

//------------------------------------------------------


//Blog section / Index page

jQuery(document).ready(function($) {

    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
      e.preventDefault();
        var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  })
  
});

//------------------------------------------------------


//Header Scrool

let mainHeader = document.querySelector(".main-header")
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    if(scrollY > 135){
        mainHeader.classList.add("after-scroll");
        drawerBtn.style.background = "#eeeeee";
    }
    else{
        mainHeader.classList.remove("after-scroll");
        drawerBtn.style.background = "white";
    }

});

//------------------------------------------------------


//Accordion

const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach((title) => {
    title.addEventListener("click", () => {
        const content = title.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

//------------------------------------------------------


// Up

let up = document.querySelector(".up");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if(scrollY > 300){
    up.classList.add("show");
  }
  else{
    up.classList.remove("show");
  }

});
up.addEventListener("click", () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//------------------------------------------------------


//Show Password

$(document).ready(function() {
  var showPassword = $(".show-password");
  var passwordInput = $(".password-input");

  showPassword.on("click", function() {
    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
    } else {
      passwordInput.attr("type", "password");
    }
  });
});


//-----------------------------------------------

$('#showcoupon').on('click', function () {
  $('#checkout_coupon').slideToggle(900);
});


$('#ship-box').on('click', function () {
$('#ship-box-info').slideToggle(1000);
});







