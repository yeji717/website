
$(document).ready(function(){

    var width = $(".list>li").outerWidth();
    var num = $(".list>li").length;
    var totalwidth = width*num;
    $(".list").width(totalwidth);

    var mleft = 0;
   

    var timer = setInterval(move,10);

    $(".box4").on("mouseenter",function(){
        clearInterval(timer);
    });

    $(".box4").on("mouseleave",function(){
        timer = setInterval(move,10);
    });

    function move(){
        mleft -=2;

        if(mleft < -width){
            $(".list>li").first().appendTo(".list");
            mleft = 0;
        }
        $(".list").css({"left":mleft});
       
    }
})