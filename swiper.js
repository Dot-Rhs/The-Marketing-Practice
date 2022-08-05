var swiper = new Swiper(".mySwiper", {
    // Default parameters

    //screens less than 768px
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    direction: "horizontal",
    spaceBetween: 15,
    breakpoints: {
        //Screens from 768px
        768: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        //screens from 992px
        992: {
            slidesPerView: 2.5,
            spaceBetween: 30,
            centeredSlides: false,

        }
    },
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });
