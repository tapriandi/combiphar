$(window).ready(function() {

  let screenWide = document.body.clientWidth;
  $('.page-image .image').css('width', (screenWide + 'px'));

  // let bannerVideo = document.getElementsByClassName('box-video');
  // document.body.addEventListener('mousemove', cursorPositionHandler);

  // function cursorPositionHandler(e) {
  //   let decimalX = e.clientX / window.innerWidth - 0.5,
  //       decimalY = e.clientY / window.innerheight - 0.5;
  //   TweenMax.to(bannerVideo, 1, {
  //     rotationX: 10 * decimalY,
  //     rotationY: 10 * decimalX,
  //     ease: Quad.easeOut,
  //     transformPerspective: 900,
  //     transformOrigin: 'center'
  //   });
  // };

  var swiperAnimation = new SwiperAnimation();
  var swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    slidesPerView: 'auto',
    initialSlide: 2,
    speed: 1000,
    spaceBetween: 40,
    loop: false,
    // mousewheel: true,
    // grabCursor: true,
    centeredSlides: true,
    mousewheel: {
      eventsTarged: ".swiper-slide",
      sensitivity: 5
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function() {
        swiperAnimation.init(this).animate();
      },
      slideChange: function() {
        swiperAnimation.init(this).animate();
      }
    }
  });
});