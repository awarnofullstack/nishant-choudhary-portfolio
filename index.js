const swiper = new Swiper('.swiper-custom-index', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-paginate',
    },
    on: {
        // Event listener for slide change
        slideChange: function () {
            // Get the active slide element
            const activeSlide = this.slides[this.activeIndex];
            // Get the background color from data attribute
            const color = activeSlide.getAttribute('data-color');
            const image = activeSlide.getAttribute('data-image');
            
            if(image === "true"){
              document.body.style.backgroundImage = "url('./assets/img/mobile-home-bg.png')";
            }else{
              document.body.style.backgroundImage = "";
            }
            // Apply the color to the body background
            document.body.style.backgroundColor = color;
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  document.body.style.backgroundColor = document.querySelector('.swiper-slide').getAttribute('data-color');