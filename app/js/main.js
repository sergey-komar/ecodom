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

      $('.project-slider-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
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

      $('.ready-slider-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
       
      });
    

      Fancybox.bind("[data-fancybox]", {
        // Your custom options
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
     var element1 = document.getElementById('input-mask1');
     var element2 = document.getElementById('input-mask2');
     var element3 = document.getElementById('input-mask3');
     var element4 = document.getElementById('input-mask4');
     
     var maskOptions = {
         mask: '+{7}(000)000-00-00'
     };
 
     if(element1){
         var mask1 = IMask(element1, maskOptions);
     }
     if(element2){
         var mask2 = IMask(element2, maskOptions);
     }
     if(element3){
         var mask3 = IMask(element3, maskOptions);
     }
     if(element4){
         var mask4 = IMask(element4, maskOptions);
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


     const builthousesHidden = document.querySelector('.builthouses-box--hidden');
     const builthousesBtn = document.querySelector('.builthouses__button');

     if(builthousesBtn && builthousesHidden){
      builthousesBtn.addEventListener('click', () => {
        builthousesHidden.classList.add('builthouses-open');
        builthousesBtn.classList.add('builthouses-btn-none')
       })
     }

     const saleHidden = document.querySelector('.sale-box--hidden');
     const saleBtn = document.querySelector('.sale__button');

     if(saleBtn && saleHidden){
      saleBtn.addEventListener('click', function () {
        saleHidden.classList.add('sale-open');
        $('.ready-slider-slider').slick('setPosition');
        saleBtn.classList.add('builthouses-btn-none')
       })
     }
   

     const modalBtnHeading = document.querySelectorAll('.btn-click-heading');
     const modalHeading = document.querySelector('.modal-heading');
     const modalCloseHeading = document.querySelector('.modal__close-heading');


         modalBtnHeading.forEach(btn =>{
             btn.addEventListener('click', ()=>{
                 modalHeading.classList.add('show');
                 modalHeading.classList.remove('hide');
                 document.body.style.overflow = 'hidden';
             })
         });

         modalCloseHeading.addEventListener('click', ()=>{
                 modalHeading.classList.add('hide');
                 modalHeading.classList.remove('show');
                 document.body.style.overflow = '';
         });

         modalHeading.addEventListener('click', (e)=>{
             if(e.target == modalHeading){
                 modalHeading.classList.add('hide');
                 modalHeading.classList.remove('show');
                 document.body.style.overflow = '';
             }
         });

         document.addEventListener('keydown', (e)=>{
             if(e.code == 'Escape' && modalHeading.classList.contains('show')){
                 modalHeading.classList.add('hide');
                 modalHeading.classList.remove('show');
                 document.body.style.overflow = '';
             }
         })

        
     const modalBtnProject = document.querySelectorAll('.btn-click-project');
     const modalProject = document.querySelector('.modal-project');
     const modalCloseBtnProject = document.querySelector('.modal__close-project');


         modalBtnProject.forEach(btn =>{
             btn.addEventListener('click', ()=>{
                 modalProject.classList.add('show');
                 modalProject.classList.remove('hide');
                 document.body.style.overflow = 'hidden';
             })
         });

         modalCloseBtnProject.addEventListener('click', ()=>{
                 modalProject.classList.add('hide');
                 modalProject.classList.remove('show');
                 document.body.style.overflow = '';
         });

         modalProject.addEventListener('click', (e)=>{
             if(e.target == modalProject){
                 modalProject.classList.add('hide');
                 modalProject.classList.remove('show');
                 document.body.style.overflow = '';
             }
         });

         document.addEventListener('keydown', (e)=>{
             if(e.code == 'Escape' && modalProject.classList.contains('show')){
                 modalProject.classList.add('hide');
                 modalProject.classList.remove('show');
                 document.body.style.overflow = '';
             }
         })

        
     const modalBtnReady = document.querySelectorAll('.btn-click-ready');
     const modalReady = document.querySelector('.modal-ready');
     const modalCloseBtnReady = document.querySelector('.modal__close-ready');


         modalBtnReady.forEach(btn =>{
             btn.addEventListener('click', ()=>{
                 modalReady.classList.add('show');
                 modalReady.classList.remove('hide');
                 document.body.style.overflow = 'hidden';
             })
         });

         modalCloseBtnReady.addEventListener('click', ()=>{
                 modalReady.classList.add('hide');
                 modalReady.classList.remove('show');
                 document.body.style.overflow = '';
         });

         modalReady.addEventListener('click', (e)=>{
             if(e.target == modalReady){
                 modalReady.classList.add('hide');
                 modalReady.classList.remove('show');
                 document.body.style.overflow = '';
             }
         });

         document.addEventListener('keydown', (e)=>{
             if(e.code == 'Escape' && modalReady.classList.contains('show')){
                 modalReady.classList.add('hide');
                 modalReady.classList.remove('show');
                 document.body.style.overflow = '';
             }
         })

        
     const modalBtn = document.querySelectorAll('.btn-click');
     const modal = document.querySelector('.modal');
     const modalCloseBtn = document.querySelector('.modal__close');


         modalBtn.forEach(btn =>{
             btn.addEventListener('click', ()=>{
                 modal.classList.add('show');
                 modal.classList.remove('hide');
                 document.body.style.overflow = 'hidden';
             })
         });

         modalCloseBtn.addEventListener('click', ()=>{
                 modal.classList.add('hide');
                 modal.classList.remove('show');
                 document.body.style.overflow = '';
         });

         modal.addEventListener('click', (e)=>{
             if(e.target == modal){
                 modal.classList.add('hide');
                 modal.classList.remove('show');
                 document.body.style.overflow = '';
             }
         });

         document.addEventListener('keydown', (e)=>{
             if(e.code == 'Escape' && modal.classList.contains('show')){
                 modal.classList.add('hide');
                 modal.classList.remove('show');
                 document.body.style.overflow = '';
             }
         })

        
          new WOW().init();



        
      
    
})
