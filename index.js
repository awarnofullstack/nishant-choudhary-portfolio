const swiper = new Swiper('.swiper-custom-index', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
        // Event listener for slide change
        slideChange: function () {
            // Get the active slide element
            const activeSlide = this.slides[this.activeIndex];
            // Get the background color from data attribute
            const color = activeSlide.getAttribute('data-color');
            
            // Apply the color to the body background
            document.body.style.backgroundColor = color;
        },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  document.body.style.backgroundColor = document.querySelector('.swiper-slide').getAttribute('data-color');