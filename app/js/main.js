$(function () {
    $('.heading').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,

        responsive: [
          {
            breakpoint: 968,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false
            }
          },
         
        ]
      });
})


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector(".menu");
    const mobile = document.querySelector(".nav-icon");

    mobile.addEventListener("click", function () {
      this.classList.toggle("nav-icon--active");
      menu.classList.toggle("nav--active");
    });

    
})