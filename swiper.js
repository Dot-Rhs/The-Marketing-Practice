var swiper = new Swiper('.mySwiper', {
	// Default parameters

	// screens less than 768px
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  direction: 'horizontal',
  spaceBetween: 15,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
  speed: 1000,
  breakpoints: {
		// Screens from 768px
    768: {
      slidesPerView: 1.3,
      spaceBetween: 20,
      navigation: {
        enabled: false
      }
    },
		// screens from 992px
    992: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      centeredSlides: false,
      navigation: {
        enabled: true
      }
    }
  },
  navigation: {
    nextEl: '.swiper-button-next'
  }
});
