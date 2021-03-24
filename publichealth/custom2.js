$(document).ready(function(){

    
    $('#lnb nav').on('mouseenter focusin', function(){
        $(this).siblings('div').css({"height":"530px","opacity":"1"});
    });

    $('#lnb nav').on('mouseleave focusout', function(){
        $(this).siblings('div').css({"height":"0","opacity":"0"});
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

    var button = $('.footer_site_list>li');
        
    button.on('click',function(e){
        e.preventDefault();
        // if($(this).parent().siblings().children('.detail').hasClass('on')){removeClass('on')};
        // button.removeClass('on');
        $(this).toggleClass('on');
        // $('.detail').css({'display':'block'});
});


})