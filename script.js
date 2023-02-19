const swiper = new Swiper('.swiper', {

    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });