// offcanvas
// $("#offcanvasNavbar2 a").click(function(){
//   $('.offcanvas').offcanvas('hide');
// });

// Toggle
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

// Owl-Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:150,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            margin:10,
        },
        600:{
            items:2,
            nav:true,
            margin:10,
        },
        1000:{
            items:3,
            nav:true,
        }
    }
})





// Scroll-To-Top
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
  
    $('.scroll-top').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 100);
        return false;
    });
  
  });

