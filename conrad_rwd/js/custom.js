$(document).ready(function(){

  

    /*header 부분 */

    var isScrolled = false;

    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
        if(scroll>0){
            $('.main').addClass('on');

            if(isScrolled == false){ //스크롤이 될때
                $('#header').css({
                    'position':'fixed',
                    'background':'#fff',
                    'color':'#666',
                    'border-bottom':'1px solid #e8e8e8'
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
            $('.main').removeClass('on');
            // $('#header').css({'background':'rgba(0,0,0,0.5'});
            $('#header').css({
                'color':'#fff',
                'background':'none',
                'box-shadow':'none',
                'border-bottom':'none'
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
        // e.preventDefault();

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

    /* fade slide */
    
    // showSlide(0);

    // timer();

    // var total = $(".slide li").length;

    // $(".navi li").on("click",function(e){
    //     e.preventDefault();

    //     var i = $(this).index();
    //     showSlide(i);
    // });

    // function showSlide(index){
    //     $(".navi li a").removeClass("on");
    //     $(".navi li").eq(index).children("a").addClass("on");

    //     $(".slide li").fadeOut().removeClass("on");
    //     $(".slide li").eq(index).fadeIn().addClass("on");

    //     i = index;
    // }

    
	// function timer(){
	// 	setInterval(function(){
	// 		var n = i +1;
	// 		if(n==total)
	// 		{n=0}//비쥬얼의 갯수와 같아지면 다시 0이 되어라.

	// 		$(".navi li").eq(n).trigger("click")//컴퓨터 스스로 무엇을 진행해라.

	// 	}, 4000);

	// };
  
    var num = 0;
    var s = $('.bg li');
    var length = s.length;

    s.hide();
    $('.bg li:first-child').show();
    function slide(){
        num++;
        if(num>length-1){num=0;}
        s.eq(num-1).fadeOut();
        s.eq(num).fadeIn();
    }
    setInterval(slide,4000);


    /* con1 (promotion) */

    var btn1 = $('.con1-2>.btn_>li:first-child');
    var btn2 = $('.con1-2>.btn_>li:last-child');
   

    btn1.on("click",function(e){
        e.preventDefault();
        $('.con1-2>.pro_box>li').last().prependTo('.con1-2>.pro_box');

    });

    btn2.on("click",function(e){
        e.preventDefault();
        $('.con1-2>.pro_box>li').first().appendTo('.con1-2>.pro_box');
        
    });
 
    /* content */

   var pos = $('#con1').offset().top;
   var pos2 = $('#con2').offset().top;
   var pos3 = $('#con3').offset().top;
   var pos4 = $('#con4').offset().top;
   var pos5 = $('#con5').offset().top;
    console.log(pos);
    console.log(pos2);
    console.log(pos3);
    console.log(pos4);


   $(window).on("scroll",function(){
       var scroll = $(this).scrollTop() + $(window).height()/1.5;
  

       if(scroll > pos){
           $('#con1').addClass('on');
       }

       if(scroll > pos2){
           $('#con2').addClass('on');
       }

       if(scroll > pos3){
           $('#con3').addClass('on');
         
       }

       if(scroll > pos4){
           $('#con4').addClass('on');
       }

       if(scroll > pos5){
           $('#con5').addClass('on');
       }
   })

   /* room slider */

   $('.next').on('click',function(e){
       e.preventDefault();

       $('.room').stop().animate({'margin-left':'-100%'},500,function(){
           $('.room>li').first().appendTo('.room');
           $('.room').css({'margin-left':'0%'});
       });

       $('.ex').stop().animate({'margin-left':'-50%'},500,function(){
           $('.ex>li').first().appendTo('.ex');
           $('.ex').css({'margin-left':'0%'});
           $('.ex>li').removeClass('on');
           $('.ex>li').first().addClass('on');
       });
   });

   $('.prev').on('click',function(e){
        e.preventDefault();

        $('.room>li').last().prependTo('.room');
        $('.room').css({'margin-left':'-100%'});
        $('.room').stop().animate({'margin-left':'0%'},500);

        $('.ex>li').last().prependTo('.ex');
        $('.ex').css({'margin-left':'-50%'});
        $('.ex').stop().animate({'margin-left':'0%'},500,function(){
            $('.ex>li').removeClass('on');
            $('.ex>li').first().addClass('on');
        });
   });

   /* 시설 슬라이드 */

   $('article').on('mouseover',function(){
       $(this).stop().animate({'width':"33%"},800,function(){
           $(this).find('p').css({"opacity":"1"});
           $(this).find('a').css({"opacity":"1"});
       });
       $(this).find('img').css({"opacity":"1"},300);
   });

   $('article').on('mouseleave',function(){
       $(this).stop().animate({"width":"15%"},800);
       $(this).find('p').css({"opacity":"0"});
       $(this).find('a').css({"opacity":"0"});
       $(this).find('img').css({"opacity":"0"});
   })

   /* top button */

   $(window).scroll(function(){
       if($(this).scrollTop()>500){
           $('#top').fadeIn();
       }else{
           $('#top').fadeOut();
       }
    });

   $('#top').on("click",function(){
    $('html, body').animate({scrollTop:0},400);
    return false;
   });

   /*------------ google 지도 -------------- */

   function initialize() {

    /*
        http://openapi.map.naver.com/api/geocode.php?key=f32441ebcd3cc9de474f8081df1e54e3&encoding=euc-kr&coord=LatLng&query=서울특별시 강남구 강남대로 456
    */
    var Y_point = 37.525574; // Y 좌표
    var X_point = 126.926681; // X 좌표



    var zoomLevel = 13; // 지도의 확대 레벨 : 숫자가 클수록 확대됨

    var markerTitle = "콘래드서울"; // 현재 위치 마커에 마우스를 올렸을때 나타나는 정보
    var markerMaxWidth = 800; // 마커를 클릭했을때 나타나는 말풍선의 최대 크기

    // 말풍선 내용
    var contentString = '<div>' +
        '<h2>콘래드서울</h2>' +
        '<a href="http://www.conradseoul.co.kr/" target="_blank">http://www.conradseoul.co.kr/</a>' 
        //'<a href="http://www.daegu.go.kr" target="_blank">http://www.daegu.go.kr</a>'+ //링크도 넣을 수 있음
        '</div>';

    var myLatlng = new google.maps.LatLng(Y_point, X_point);
    var mapOptions = {
        zoom: zoomLevel,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('google'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: markerTitle
    });

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: markerMaxWidth
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    }
    initialize();
});