/*-----------------------------------------------------------------------------------

  Template Name: Blogger HTML5 Template.
  Template URI: #
  Description: Blogger is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  Author: A. M. Asif Imtiaz Udoy
  Version: 1.0

-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. Sticky Menu
  02. Jquery for home
  03. Initialize Swiper
  04. 

  

/*--------------------------------
[ End table content ]
-----------------------------------*/

$(document).ready(function () {
  
  /*-------------------------------------------
    01. Sticky Menu
  --------------------------------------------- */
  var win = $(window);
  var menu = $(".menu");
  win.on('scroll',function() {    
    var scroll = win.scrollTop();
    if (scroll < 92) {
      menu.removeClass("sticky");
    }else{
      menu.addClass("sticky");
    }
  });

  /*-------------------------------------------
    02. Jquery for home page
  --------------------------------------------- */
  if (parseInt($(window).width()) < 991.98) {
    function resetAll() {
      $('.details').removeAttr("style");
      $('.bg-img > h1').removeAttr("style");
      $('.bg-img').css('height', '100%');
      $('.news, .blog, .gallery, .videos').css('height', '10%');
      $('.my-story').css('height', '60%');
      $('.fixed-info').css('display', 'block');
    }
  }else{
    function resetAll() {
      $('.details').removeAttr("style");
      $('.bg-img > h1').removeAttr("style");
      $('.bg-img').css('width', '100%');
      $('.news, .blog, .gallery, .videos').css('width', '10%');
      $('.my-story').css('width', '60%');
      $('.fixed-info').css('display', 'block');
    }
  }

  $('.my-story > .bg-img').click(function () {
    if ($('.my-story  > .details').css('width') == '0px') {
      resetAll();
      $('.my-story  > .details').css({
        "width": "100%",
        "padding": "50px",
        "height": "100%"
      });
      $('.fixed-info').css('display', 'none');

      if (parseInt($(window).width()) < 991.98) {
        $('.my-story  > .bg-img').css('height', '30%');
        $('.my-story').css('height', '80%');
        $('.news, .blog, .gallery, .videos').css('height', '5%');
      }else{
        $('.my-story  > .bg-img').css('width', '30%');
        $('.my-story').css('width', '100%');
        $('.news, .blog, .gallery, .videos').css('width', '5%');
        $('.news, .blog, .gallery, .videos').removeClass('w-15');
        $('.bg-img > h1').css({
          "bottom": "80%",
          "transform": "translateY(50%)"
        });
      }

      $('.my-story  > .bg-img > h1').css({
        "top": "10%",
        "right": "50%",
        "writing-mode": "lr",
        "transform": "rotate(0)",
        "transform": "translateX(50%)"
      });
    } else {
      resetAll();
    }
  });

  $('.news > .bg-img').click(function () {
    if ($('.news  > .details').css('width') == '0px') {
      resetAll();
      $('.news  > .details').css({
        "width": "100%",
        "padding": "50px",
        "height": "100%"
      });
      $('.fixed-info').css('display', 'none');

      if (parseInt($(window).width()) < 991.98) {
        $('.news  > .bg-img').css('height', '30%');
        $('.news').css('height', '80%');
        $('.my-story, .blog, .gallery, .videos').css('height', '5%');
      }else{
        
        $('.news  > .bg-img').css('width', '30%');
        $('.news').css('width', '100%');
        $('.my-story, .blog, .gallery, .videos').css('width', '5%');
        $('.news, .blog, .gallery, .videos').removeClass('w-15');
        $('.bg-img > h1').css({
          "bottom": "80%",
          "transform": "translateY(50%)"
        });
      }
      $('.news  > .bg-img > h1').css({
        "top": "10%",
        "right": "50%",
        "writing-mode": "lr",
        "transform": "rotate(0)",
        "transform": "translateX(50%)"
      });
    } else {
      resetAll();
    }
  });

  $('.blog > .bg-img').click(function () {
    if ($('.blog  > .details').css('width') == '0px') {
      resetAll();
      $('.blog  > .details').css({
        "width": "100%",
        "padding": "50px",
        "height": "100%"
      });
      $('.fixed-info').css('display', 'none');

      if (parseInt($(window).width()) < 991.98) {
        $('.blog  > .bg-img').css('height', '30%');
        $('.blog').css('height', '80%');
        $('.news, .my-story, .gallery, .videos').css('height', '5%');
      }else{
        $('.blog  > .bg-img').css('width', '30%');
        $('.blog').css('width', '100%');
        $('.my-story, .news, .gallery, .videos').css('width', '5%');
        $('.news, .blog, .gallery, .videos').removeClass('w-15');
        $('.bg-img > h1').css({
          "bottom": "80%",
          "transform": "translateY(50%)"
        });
      }

      $('.blog  > .bg-img > h1').css({
        "top": "10%",
        "right": "50%",
        "writing-mode": "lr",
        "transform": "rotate(0)",
        "transform": "translateX(50%)"
      });
    } else {
      resetAll();
    }
  });

  $('.gallery > .bg-img').click(function () {
    if ($('.gallery  > .details').css('width') == '0px') {
      resetAll();
      $('.gallery  > .details').css({
        "width": "100%",
        "padding": "50px",
        "height": "100%"
      });
      $('.fixed-info').css('display', 'none');
      
      if (parseInt($(window).width()) < 991.98) {
        $('.gallery  > .bg-img').css('height', '30%');
        $('.gallery').css('height', '80%');
        $('.my-story, .news, .blog, .videos').css('height', '5%');
      }else{
        $('.gallery  > .bg-img').css('width', '30%');
        $('.gallery').css('width', '100%');
        $('.my-story, .news, .blog, .videos').css('width', '5%');
        $('.news, .blog, .gallery, .videos').removeClass('w-15');
        $('.bg-img > h1').css({
          "bottom": "80%",
          "transform": "translateY(50%)"
        });
      }
      
      $('.gallery  > .bg-img > h1').css({
        "top": "10%",
        "right": "50%",
        "writing-mode": "lr",
        "transform": "rotate(0)",
        "transform": "translateX(50%)"
      });
    } else {
      resetAll();
    }
  });

  $('.videos > .bg-img').click(function () {
    if ($('.videos  > .details').css('width') == '0px') {
      resetAll();
      $('.videos  > .details').css({
        "width": "100%",
        "padding": "50px",
        "height": "100%"
      });
      $('.fixed-info').css('display', 'none');
      
      if (parseInt($(window).width()) < 991.98) {
        $('.videos  > .bg-img').css('height', '30%');
        $('.videos').css('height', '80%');
        $('.my-story, .news, .blog, .gallery').css('height', '5%');
      }else{
        $('.videos  > .bg-img').css('width', '30%');
        $('.videos').css('width', '100%');
        $('.my-story, .news, .blog, .gallery').css('width', '5%');
        $('.news, .blog, .gallery, .videos').removeClass('w-15');
        $('.bg-img > h1').css({
          "bottom": "80%",
          "transform": "translateY(50%)"
        });
      }
      
      $('.videos  > .bg-img > h1').css({
        "top": "10%",
        "right": "50%",
        "writing-mode": "lr",
        "transform": "rotate(0)",
        "transform": "translateX(50%)"
      });
      
    } else {
      resetAll();
    }
  });

    /*-------------------------------------------
      03. Initialize Swiper
    --------------------------------------------- */
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 900,
        modifier: 1.5,
        slideShadows: false,
      },
      autoplay: {
        delay: 3000,
      },
    });

});