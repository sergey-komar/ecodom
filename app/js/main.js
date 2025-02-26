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
        responsive: [
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
         
        ]
      });



      $('.built-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 968,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,

            }
          },
         
        ]
       
      });



      $('.ready-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
      });


})


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector(".menu");
    const mobile = document.querySelector(".nav-icon");

    mobile.addEventListener("click", function () {
      this.classList.toggle("nav-icon--active");
      menu.classList.toggle("nav--active");
      document.body.classList.toggle('overflow');
    });


    const btn = document.querySelector('.btnUp');

      btn.addEventListener('click', ()=>{
      window.scrollTo({
          top: 0, 
          behavior: 'smooth' 

          });
      });


      function up() {
        window.addEventListener('scroll', () => {
              if(window.scrollY > 690){
              btn.classList.add('btnUp-visible');
              }else{
              btn.classList.remove('btnUp-visible');
              }
          })
        }
      up();

      
     // Маска для Инпута
     var element = document.getElementById('input-mask');
     
     var maskOptions = {
         mask: '+{7}(000)000-00-00'
     };
 
     if(element){
         var mask = IMask(element, maskOptions);
     }
    

     const header = document.querySelector(".header-fixed");

     if (header) {
       window.addEventListener("scroll", () => {
         if (window.scrollY > 10) {
           header.classList.add("header-bg");
         } else {
           header.classList.remove("header-bg");
         }
       });
     }
    
})