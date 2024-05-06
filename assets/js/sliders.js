// Video slider
new Swiper('.video-slider', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 50,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 0,
      releaseOnEdges: true,
    },
    speed: 1200,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
});

//-------------------------------

// Product slider
new Swiper('.product-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
  
      480: {
          slidesPerView: 2,
      },
  
      768: {
          slidesPerView: 3,
      },
  
      1200: {
        slidesPerView: 4,
      }
    }
});

//-------------------------------

// Product detail slider
// var galleryThumbs = new Swiper('.gallery-thumbs', {
//     spaceBetween: 20,
//     slidesPerView: 4,
//     loop: true,
//     freeMode: true,
//     loopedSlides: 5, //looped slides should be the same
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//   });
//   var galleryTop = new Swiper('.gallery-top', {
//     spaceBetween: 20,
//     loop:true,
//     loopedSlides: 5, //looped slides should be the same
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     thumbs: {
//       swiper: galleryThumbs,
//     },
// });


// Product detail slider
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }

    
  });


//----------------------------------


//Testimonials slider
new Swiper('.slides-2', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
  
      1200: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
});

