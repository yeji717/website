$(document).ready(function(){

    /* mobutton */

    $('.mobutton').on('click', function(e) {
        e.preventDefault();

        var isOpen = $('.mopanel').hasClass('on');

        if (isOpen) {
            $('.mopanel').removeClass('on');
        } else {
            $('.mopanel').addClass('on');
        }

        $(this).toggleClass('active');
        // $(this).siblings('mopanel').css({'right':'0'});
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