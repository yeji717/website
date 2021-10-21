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
})



  