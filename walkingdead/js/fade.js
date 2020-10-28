$(document).ready(function(){
  
    var pos = $('header').offset().top;
    console.log(pos);

    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();
        
        if(scroll>=pos/2){
            $('section').addClass('on');
        }
    });
});