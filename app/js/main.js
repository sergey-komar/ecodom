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

      $('.project-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
      });

      $('.built-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
       
      });

      $('.ready-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
      });


})


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector(".menu");
    const mobile = document.querySelector(".nav-icon");

    mobile.addEventListener("click", function () {
      this.classList.toggle("nav-icon--active");
      menu.classList.toggle("nav--active");
    });


     // Маска для Инпута
     var element = document.getElementById('input-mask');
     
     var maskOptions = {
         mask: '+{7}(000)000-00-00'
     };
 
     if(element){
         var mask = IMask(element, maskOptions);
     }
    

    
})