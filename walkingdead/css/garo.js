$(document).ready(function(){
    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();
        $("section").stop().animate({"left":-scroll},500);
    });
});