jQuery(window).ready(function() {

  AOS.init();

  // ---------- perss slider -----------
  var swiperAnimation = new SwiperAnimation();
  var swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    slidesPerView: 'auto',
    initialSlide: 1,
    speed: 1000,
    loop: false,
    // centeredSlides: true,
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
  
  // ---------- perspective paralax-----------
  var cardWrap = document.getElementsByClassName('perspective');
  document.body.addEventListener('mousemove', cursorPositionHandler);
  function cursorPositionHandler(e) {
    var decimalX = e.clientX / window.innerWidth - 0.5;
    var decimalY = e.clientY / window.innerHeight - 0.5;
    TweenMax.to(cardWrap, 0.5, {
      rotationY: 5 * decimalX,
      rotationX: 5 * decimalY,
      ease: Quad.easeOut,
      transformPerspective: 700,
      transformOrigin: "center"
    });
  };

});