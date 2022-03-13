$(document).ready(function(){

  $(".js-navigate").on("click", function() {
        $(".js-navigate").removeClass("disabled");
        var current = $(".deal.active");
        var findNext = $(current).next(".deal");
        var findPrev = $(current).prev(".deal");
        var button = $(this);
      
        $(current).removeClass("active");
        setTimeout(function() {
          if ($(button).hasClass("js-right")) {
            $(findNext).addClass("active");
            checkForDisable();
          } else if ($(button).hasClass("js-left")) {
            $(findPrev).addClass("active");
            checkForDisable();
          }
        }, 300);
  });
      
  function checkForDisable() {
        var current = $(".deal.active");
        if ($(current).is(".deal:last")) {
          $(".js-right").addClass("disabled");
        } else if ($(current).is(".deal:first")) {
          $(".js-left").addClass("disabled");
        }
  }

    //   var swiper = new Swiper('.swiper-container', {
    //     scrollbar: '.swiper-scrollbar',
    //     scrollbarHide: true,
    //     direction:'scrollbar',
    //     slidesPerView: 'auto',
    //     centeredSlides: true,
    //     spaceBetween: 30,
    //     grabCursor: true
    // });



  $(window).on('scroll',function(){
    const $height = $('#main').offset().top/2;
    if($(window).scrollTop()>=$height){
      $('.top-btn').css({'display':'inline-block'});
    }else{
      $('.top-btn').css({'display':'none'});
    }
  })

  $('.top-btn').on('click',function(){
    const htmloffset = $('html').offset();
    $('html, body').animate({scrollTop:htmloffset.top},400);
    // $(window).scrollTop() == 0;
  })

  $('.m_menu').on('click',function(){
    $(this).toggleClass('on');
  })
})



  