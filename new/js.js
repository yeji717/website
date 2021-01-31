const menu = $(".menu li");
const panel = $(".panel li");

$(".menu li").on('click',function(){
    menu.removeClass("active");
    $(this).addClass("active");

    let index = $(this).index();
    
    panel.removeClass("on");
    panel.eq(index).addClass("on");
    // console.log(index);
});