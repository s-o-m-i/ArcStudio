var swiperNodes = "";
var pagination = "<div class=swiper-pagination></div>";
var next_prev_buttons =
  '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';
var scrollbar = '<div class="swiper-scrollbar"></div>';
var swiperNodes = swiperNodes.concat(pagination, next_prev_buttons);
/* loop throw all swipers on the page */
$(".swiper-container").each(function (index) {
  $(this).append(swiperNodes);
});



var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: false,
    loop: true,
    centeredSlides: false,
    // Enable lazy loading
    lazy: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1,
        spaceBetween: 10,
        noSwiping: false,
        allowSlidePrev: true,
        allowSlideNext: true,
      },
      767: {
        /* when window >= 767px - webflow tablet */ slidesPerView: 2,
        spaceBetween: 20,
        noSwiping: false,
        allowSlidePrev: true,
        allowSlideNext: true,
      },
      998: {
        /* when window >= 988px - webflow desktop */ slidesPerView: 3,
        spaceBetween: 20,
        noSwiping: true,
        allowSlidePrev: false,
        allowSlideNext: false,
      },
    },
    /* uncomment if you want autoplay slider
autoplay: {
  delay: 3000,
},
*/
    /* uncomment if you want scrollbar
 scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
*/
  });

  $(document).ready(function () {
    console.log("ready!");
    //Click event
    setTimeout(function () {
      $("#1").click();
    }, 1);
  });

  $("#popup-form").click(function () {
    $("#email").focus();
  });