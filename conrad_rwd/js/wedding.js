$(document).ready(function(){
    
    
    
    /*header 부분 */

    
    var isScrolled = false;

    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
        if(scroll>0){
            $('header').addClass('on');

            if(isScrolled == false){ //스크롤이 될때
                $('#header').css({
                    'position':'fixed',
                    'background':'#fff',
                    'color':'#666',
                    'border-bottom':'1px solid #e8e8e8',
                    'margin-top':'0px'
                    // 'background':'#011638',
                    // 'box-shadow':'2px 2px 8px #5c5c5d'
                }); 

                // $('.gnb .mainmenu>li').mouseenter().css({
                //     'color':'#fff'
                // });

                // $('.gnb .mainmenu>li').css({
                //     'width':'12.5%'
                // })
                // $('#header .logo').css({'display':'none'});
                // $('#header .logo1-2').css({'display':'block'});
            }      
            isScrolled = $('.main').hasClass('on'); 

        }else{ //스크롤안될때 다시 원래 초기값으로
            $('header').removeClass('on');
            // $('#header').css({'background':'rgba(0,0,0,0.5'});
            $('#header').css({
                'color':'#fff',
                'background':'none',
                'box-shadow':'none',
                'border-bottom':'none',
                'margin-top':'30px'
            });
            // $('#header').css({'color':'#fff'});
            // $('#header').css({'background':'none'})
            // $('#header').css({ 'box-shadow':'none'});
            $('#header .logo').css({'display':'block'});
            $('#header .logo1-2').css({'display':'none'});
                

            // $('.gnb .mainmenu>li').css({
            //     'width':'14%'
            // })
            isScrolled = false;

        }
    });

    /* sub menu */

    $('.mainmenu>li').on('mouseover',function(){
        $(this).find('.submenu').css({'transform':'translateY(0)'});
        $(this).find('.submenu').css({'visibility':'visible'});
        $(this).find('.submenu').css({'opacity':'1'});
    })

    $('.mainmenu>li').on('mouseleave',function(){
        $(this).find('.submenu').css({'transform':'translateY(20%)'});
        $(this).find('.submenu').css({'visibility':'hidden'});
        $(this).find('.submenu').css({'opacity':'0'});
    })

    $('.btn').on('click', function (e) {
        e.preventDefault();
        
        $(this).toggleClass('on');

        var isOpen = $('#moPanel').hasClass('on');

        if (isOpen) {
            $('#moPanel').removeClass('on');
        } else {
            $('#moPanel').addClass('on');
        }
    });


    //2depth 탭버튼
    var $moGnb_li = $('#moGnb>li');

    $moGnb_li.on('click', function (e) {
        e.preventDefault();

        var isOn = $(this).children('a').hasClass('on');

        if (isOn) {
            $(this).children('a').removeClass('on');
            $(this).children('.sub').stop().slideUp();
        } else {
            $moGnb_li.children('a').removeClass('on');
            $moGnb_li.children('.sub').stop().slideUp();
            $(this).children('a').addClass('on');
            $(this).children('.sub').stop().slideDown();
        }
    });

    
});