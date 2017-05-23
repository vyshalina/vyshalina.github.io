//For Aside Menu
$("#leftMenu").click(function(e) {
        e.preventDefault();
        $("#aside").toggleClass("toggled");
    });

//For Gallery
$(document).ready(function(){
  $('.slider').slick({
    dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav'
  });
});
$('.slider-nav').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      asNavFor: '.slider',
      dots: false,
      prevArrow: '<span class="prev"><i></i></span>',
      nextArrow: '<span class="next"><i></i></span>',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6
        }
      },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 795,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });