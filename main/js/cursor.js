// $('.box').mousemove(function(e){
//     e.preventDefault();
//     $('.red-ball').css("top", e.pageY);
//     $('.red-ball').css("left", e.pageX);

// })

$(document).ready(function(){

    $('.box').on("mouseover",function(){
        $('.box').mousemove(function(e){
            $('.red-ball').css("top", e.pageY);
            $('.red-ball').css("left", e.pageX);
        })
    })
})