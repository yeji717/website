$(document).ready(function(){


     // 학술 정보 더보기

    //  $('.detail').on('click',function(e){
    //     e.preventDefault();
    //     $(this).siblings('.con2').toggleClass('on');
    //     if($('.con2').hasClass('on')){
    //         $('.con2').slideDown(300);
    //         $('.detail-btn .in').text('상세접기');
    //         $('.detail-btn>span').addClass('changed');
    //     }else{
    //         $('.con2').slideUp(300);
    //         $('.detail-btn .in').text('상세보기');
    //         $('.detail-btn>span').removeClass('changed');
    //     }
    //     // if($('.con2').hasClass('on')){
    //     //     $('.con2').slideDown(300);
    //     // }else{
    //     //     $('.con2').slideUp(300);
    //     // }
    // });
  

    $('.detail-btn').on("click",function(e){

        e.preventDefault();

        const isOn = $(this).siblings('.con2-box').hasClass('on');

        if (isOn) {
            $(this).siblings('.con2-box').removeClass('on');
            $(this).siblings('.con2-box').stop().slideUp();
            $('.detail-btn .in').text('상세보기');
            $('.detail-btn>span').removeClass('changed');
            
        } else {
            // $mognb_li.children('a').removeClass('on');
            // $mognb_li.children('.sub').stop().slideUp();
            $(this).siblings('.con2-box').addClass('on');
            $(this).siblings('.con2-box').stop().slideDown();
            $('.detail-btn .in').text('상세접기');
            $('.detail-btn>span').addClass('changed');
            // $('.mognb>li>.sub>.link').on('click',function(){
            //     location.href=e.target.getAttribute('href');
            // })
        }

        

        // $(this).siblings('.inner').stop().slideDown();
    })

    // select 선택했을 때 값 색상 변경 (과목, 학습목차)

    $('select').change(function(){
        $(this).css('color','#000');
    })

    // 다이어리 활동 선택했을 시 특정 문구 나오게..
    
    $('.subject').change(function(){
        let state = $(".subject option:selected").val();
        console.log(state);

        if(state == 'option1'){
            $('.option1').show();
            $('.option1').siblings().hide();
            // $('.option2').hide();
            // $('.option3').hide();
            // $('.option4').hide();
        }else if(state == 'option2'){
            $('.option2').show();
            $('.option2').siblings().hide();
        }else if(state == 'option3'){
            $('.option3').show();
            $('.option3').siblings().hide();
        }else if(state == 'option4'){
            $('.option4').show();
            $('.option4').siblings().hide();
        }
        else if(state == 'option5'){
            $('.option5').show();
            $('.option5').siblings().hide();
        }else if(state == 'option6'){
            $('.option6').show();
            $('.option6').siblings().hide();
        }else if(state == 'option7'){
            $('.option7').show();
            $('.option7').siblings().hide();
        }
        $(this).css('border','1px solid orangered')
    });

        // 모바일 tab 박스

        $('.tab-box ul li').on('click',function(e){
            e.preventDefault();
            $('.tab-box ul li').removeClass('active');
            $(this).toggleClass('active');
            // $('section').hide();
            $(this).children('section').show();
        })

    // 슬라이드
    // $('#bookwrap').width($('#bookwrap').width());
    // $('#bookwrap').height($('#bookwrap').height());
    // $('.conbox').slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     prevArrow: '<i class="slick-prev fas fa-chevron-left"></i>',
    //     nextArrow: '<i class="slick-next fas fa-chevron-right"></i>',
    // })

    $('.next').on('click',function(){
        $('.slide-wrap>ul').animate({marginLeft:'-100%'});
        // $(this).css('display','none');
    });
    $('.prev').on("click",function(){
        $('.slide-wrap>ul').animate({marginLeft:'0%'});
    });

    // book text박스

    $('.conbox li').on("click",function(){
       
        // $('.conbox li').removeClass('on');

        // $(this).toggleClass("on");

        if($(this).siblings("li").hasClass("on")){
            $(this).siblings("li").removeClass("on");
            $(this).addClass("on");
        }else{
            $(this).addClass("on");
        }
        return false;
      
    })

    // 모바일에서 3n인 슬라이드
    if($(window).width()<=480){
        $('.conbox>li:nth-child(3n)>.text').addClass('spe');
        $('.conbox>li:nth-child(4)>.text').removeClass('spe');
    }

    // 임시저장 -> 임시
    if($(window).width()<=360){
    $('.temporary').remove("임시저장","저장");
    }

  // 모바일 메뉴버튼

  $('.m-menu').on('click',function(){
    $('#line-top').toggleClass('line-top');
    $('#line-mid').toggleClass('line-mid');
    $('#line-bottom').toggleClass('line-bottom');

    $('.m-nav').toggleClass('active');
    $('.mopanel').toggleClass('active');
    $('.back').toggleClass('on');
});   

    //height값

    console.log($(window).innerHeight());

    // 임시저장, 저장 버튼 눌렀을 때 팝업

    $(".temporary").on("click",function(){
        setTimeout(function(){
            $('.tempop').fadeIn(300).delay(600).fadeOut(300);
        })
    })

    $(".save, .m-save").on("click",function(){
        setTimeout(function(){
            $('.save-pop').fadeIn(300).delay(600).fadeOut(300);
        })
    })

    // 알림 버튼 누를 때 나오는 알림창 

    $('.notice, .m-notice').on("click",function(){
        $('.con2').toggleClass('on');
    });
    $('.m-notice').on("click",function(){
        $('#wrap').toggleClass('on');
        // $('.notice-pop2').css({'display':'block'});
    });


    // viewport height? bottom 값 구하기

    // const target = $('#wrap');
    // let clientRect = target.innerHeight();
    // console.log(clientRect);

    // 오늘 하루 보지 않기 눌렀을때 색 변경

    $('.inform-bottom span').on("click",function(){
        $(this).toggleClass('on');
    })

    // 공지사항 팝업 닫기

    $('.inform-bottom>button').on("click",function(){
        $('.inform-box').css({'display':'none'});
        // $('.back').css({'display':'none'});
    })

    // if($('.inform-box').css({'display':'block'})){
    //     $('.back').css({'display':'block'});
    // }
})



