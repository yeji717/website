$(document).ready(function(){

    
    // $('#lnb nav').on('mouseenter focusin', function(){
    //     $(this).siblings('div').css({"height":"530px","opacity":"1"});
    // });

    // $('#lnb nav').on('mouseleave focusout', function(){
    //     $(this).siblings('div').css({"height":"0","opacity":"0"});
    // });

    let w_width = window.innerWidth;

    if(w_width >= 990){
        $("#gnb .inner").on('mouseenter focusin', function(){
            $(this).parent().parent().parent().children('span').css({"height":"540px","opacity":"1"});
        });
    
        $("#gnb .inner").on('mouseleave focusout', function(){
            $(this).parent().parent().parent().children('span').css({"height":"0","opacity":"0"});
        });    
    }else{
        $("#gnb .inner").on('mouseenter focusin', function(){
            $(this).parent().parent().parent().children('span').css({"height":"0","opacity":"0"});
        });
    }

    $(window).resize(function(){
        var mq1 = window.matchMedia("screen and (max-width:990px)");

        if(mq1.matches){
            // 990px 이히일때
            $("#gnb .inner").on('mouseenter focusin', function(){
                $(this).parent().parent().parent().children('span').css({"height":"0","opacity":"0"});
            });
        }else{
            // 990px 이상일때
            $("#gnb .inner").on('mouseenter focusin', function(){
                $(this).parent().parent().parent().children('span').css({"height":"540px","opacity":"1"});
            });
        
            $("#gnb .inner").on('mouseleave focusout', function(){
                $(this).parent().parent().parent().children('span').css({"height":"0","opacity":"0"});
            });
        }
    });

    /* mobutton */

    $('.mobutton').on('click', function(e) {
        e.preventDefault();

        var isOpen = $('.mopanel').hasClass('on');

        if (isOpen) {
            $('.mopanel').removeClass('on');
        } else {
            $('.mopanel').addClass('on');
        }

        $('.close').click(function(){
            $('.mopanel').removeClass('on');
            $("header").removeClass('on');
        });
    });

    /* mognb sub */

    var $mognb_li = $('.mognb>li');

    $mognb_li.on('click',function(e){
        e.preventDefault();

        var isOn = $(this).children('a').hasClass('on');

        if (isOn) {
            $(this).children('a').removeClass('on');
            $(this).children('.sub').stop().slideUp();
        } else {
            $mognb_li.children('a').removeClass('on');
            $mognb_li.children('.sub').stop().slideUp();
            $(this).children('a').addClass('on');
            $(this).children('.sub').stop().slideDown();
        }
    });

    /*-------------- footer ------------------- */


    const button = $('.footer_site_list li>a');

    $('.detail').hide();
    
    button.on("click focusout",function () {

        if($(this).siblings(".detail").is(":hidden")){
            $(".detail").hide();
            $(this).siblings(".detail").show();
            button.removeClass("on");
            $(this).addClass("on");
        }else{
            $(".detail").hide();
            button.removeClass("on");
        }
        return false;
    });  


})