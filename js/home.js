$(document).ready(function() {
    $("#icon-navbar").click(function() {
        $("#span-btn").toggleClass('fa-times');
        $("#span-btn").toggleClass('fa-bars');
    });

    $("#btn-mess").click(function() {
      $("#chat").toggle();
    });

    $("#close-btn").click(function() {
        $("#chat").hide();
      });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })

    $('.hapolearn-slick').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed : 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      prevArrow: $('.left'),
      nextArrow: $('.right'),

      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
