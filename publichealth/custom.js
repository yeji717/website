$(document).ready(function(){

    // 메인 메뉴

    $('#lnb nav').on('mouseenter focusin', function(){
        $(this).siblings('div').css({"height":"530px","opacity":"1"});
    });

    $('#lnb nav').on('mouseleave focusout', function(){
        $(this).siblings('div').css({"height":"0","opacity":"0"});
    });

    // $('#lnb nav>ul').on('mouseenter focusin',function(){
    //     $(this).css({"overflow":"visible"});
    //     // $(this).siblings('ul').css({"opacity":"1"});
    // })
    // $('#lnb nav').focusin(function(){
    //     $(this).css({"background":"red"});
    // });


    // 탭 메뉴

    const $tab_list = $('.con2-1');

      $tab_list.find('ul ul').hide();
      $tab_list.find('li.active>ul').show();

      function tabMenu(e){
          e.preventDefault();

          const $this = $(this);
          $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
      }

      $tab_list.find('ul>li>a').click(tabMenu).focus(tabMenu);

   
    /* mobutton */

    $('.mobutton').on('click', function(e) {
        e.preventDefault();

        $('.mopanel').addClass('on');
        $("header").addClass('on');

    /* mognb close */

    $('.close').click(function(){
        $('.mopanel').removeClass('on');
        $("header").removeClass('on');
    });
    });

    /* mognb sub */

    const $mognb_li = $('.mognb>li');

    $mognb_li.on('click',function(e){
        // e.preventDefault();

        const isOn = $(this).children('a').hasClass('on');

        if (isOn) {
            $(this).children('a').removeClass('on');
            $(this).children('.sub').stop().slideUp();
        } else {
            $mognb_li.children('a').removeClass('on');
            $mognb_li.children('.sub').stop().slideUp();
            $(this).children('a').addClass('on');
            $(this).children('.sub').stop().slideDown();
            $('.mognb>li>.sub>.link').on('click',function(){
                location.href=e.target.getAttribute('href');
            })
        }

       
    });

   
    /*-----------------     banner 1    ------------------ */

    // active_index = 0;
    $banner_li = $('.banner>li');
    $prev = $('.prev');
    $next = $('.next');
    len = $banner_li.length;
    class_name = 'on';
    speed = 300;
    isBlock = true;


    $next.on('click',function(e){
        e.preventDefault();

        let $current = $banner_li.filter($('.'+class_name));
        let current_index = $current.index();
        let next_index;
        (current_index != len-1) ? next_index = current_index+1 : next_index = 0;
        if(isBlock) showNext($current, next_index);
    });

    $prev.on('click',function(e){
        e.preventDefault();

        let $current = $banner_li.filter($('.'+class_name));
        let current_index = $current.index();
        let prev_index;

        (current_index != 0) ? prev_index = current_index-1 : prev_index = len-1;
        if(isBlock) showPrev($current, prev_index);
    });

    function showNext($current, next_index){ 
        isBlock = false;
    
        $current.stop().animate({left:'-100%'},speed,function(){
            $(this).removeClass(class_name).hide();
        });
        $banner_li.eq(next_index).show().css({left:'100%'}).stop().animate({left:'0%'},speed,function(){
            $(this).addClass(class_name);  
            isBlock = true;     
        });
    
        // active_index = next_index;      
        // activateBtn(active_index);   
    }
    
    
    function showPrev($current, prev_index){   
        isBlock = false;
    
        $current.stop().animate({left:'100%'},speed,function(){
            $(this).removeClass(class_name).hide();
        });
        $banner_li.eq(prev_index).show().css({left:'-100%'}).stop().animate({left:'0%'},speed,function(){
            $(this).addClass(class_name);  
            isBlock = true;     
        });
    
        // active_index = prev_index;
        // activateBtn(active_index);
    }

    /*---------------- con2-3 ---------------- */

    active_index = 0;
    $slide2_li = $('.slide2>li');
    $prev_3 = $('.prev4');
    $next_3 = $('.next4');
    len3 = $slide2_li.length;
    class_name = 'on';
    speed = 300;
    isBlock = true;

    $next_3.on('click',function(e){
        e.preventDefault();

        let $current = $slide2_li.filter($('.'+class_name));
        let current_index = $current.index();
        let next_index;

        (current_index != len3-1) ? next_index = current_index+1 : next_index = 0;
        if(isBlock) showNext_3($current, next_index);

    })

    $prev_3.on('click',function(e){
        e.preventDefault();

        let $current = $slide2_li.filter($('.'+class_name));
        let current_index = $current.index();
        let prev_index;

        (current_index != 0) ? prev_index = current_index-1 : prev_index = len3-1;
        if(isBlock) showPrev_3($current, prev_index);
    });

    function showNext_3($current, next_index){ 
        isBlock = false;
    
        $current.stop().animate({left:'-100%'},speed,function(){
            $(this).removeClass(class_name).hide();
        });
        $slide2_li.eq(next_index).show().css({left:'100%'}).stop().animate({left:'0%'},speed,function(){
            $(this).addClass(class_name);  
            isBlock = true;     
        });
    
        active_index = next_index;      
        // activateBtn(active_index);   
    }
    
    
    function showPrev_3($current, prev_index){   
        isBlock = false;
    
        $current.stop().animate({left:'100%'},speed,function(){
            $(this).removeClass(class_name).hide();
        });
        $slide2_li.eq(prev_index).show().css({left:'-100%'}).stop().animate({left:'0%'},speed,function(){
            $(this).addClass(class_name);  
            isBlock = true;     
        });
    
        active_index = prev_index;
        // activateBtn(active_index);
    }


    /*---------------- con3-2 ---------------- */

    active_index = 0;
    $slide_li = $('.slide>li');
    $prev_2 = $('.prev3');
    $next_2 = $('.next3');
    len2 = $slide_li.length;
    class_name = 'on';
    speed = 300;
    isBlock = true;

    $next_2.on('click',function(e){
        e.preventDefault();

        let $current = $slide_li.filter($('.'+class_name));
        let current_index = $current.index();
        let next_index;

        (current_index != len2-1) ? next_index = current_index+1 : next_index = 0;
        if(isBlock) showNext_2($current, next_index);

    })

    $prev_2.on('click',function(e){
        e.preventDefault();

        let $current = $slide_li.filter($('.'+class_name));
        let current_index = $current.index();
        let prev_index;

        (current_index != 0) ? prev_index = current_index-1 : prev_index = len2-1;
        if(isBlock) showPrev_2($current, prev_index);
    });

    function showNext_2($current, next_index){ 
        isBlock = false;
    
        $current.stop().animate({left:'-100%'},speed,function(){
            $(this).removeClass(class_name).hide();
        });
        $slide_li.eq(next_index).show().css({left:'100%'}).stop().animate({left:'0%'},speed,function(){
            $(this).addClass(class_name);  
            isBlock = true;     
        });
    
        active_index = next_index;      
        // activateBtn(active_index);   
    }
    
    
    function showPrev_2($current, prev_index){   
        isBlock = false;
    
        $current.stop().animate({left:'100%'},speed,function(){
            $(this).removeClass(class_name).hide();
        });
        $slide_li.eq(prev_index).show().css({left:'-100%'}).stop().animate({left:'0%'},speed,function(){
            $(this).addClass(class_name);  
            isBlock = true;     
        });
    
        active_index = prev_index;
        // activateBtn(active_index);
    }


    /* -------------------- banner 2 --------------- */

    var wid = $(".banner2>ul>li").outerWidth(); //li 하나의 넓이값 구하기
	var num = $(".banner2>ul>li").length; //전체 li 갯수값
	var totalWid = wid*num; //전체 리스트의 넓이값
	$(".banner2>ul").width(totalWid); //.width(값) 전체 넓이값을 동적으로 구해준다.

	// alert(totalWid);

	let mleft = 0;

	
	let timer = setInterval(move,30);
	
	$(".banner2").on("mouseenter",function(){
		clearInterval(timer); //setInterval값을 멈추기
	});
	
	$(".banner2").on("mouseleave",function(){
		timer = setInterval(move,20); //0.02초마다 move 함수를 반복해서 실행하기
	});
	
	$(".prev2").on("click",function(e){
		e.preventDefault();
		$(".banner2>ul>li").last().prependTo(".banner2>ul");
	});
	
	$(".next2").on("click",function(e){
		e.preventDefault();
		$(".banner2>ul>li").first().appendTo(".banner2>ul");
	});
	
	function move(){
		mleft -=2; //현재 mleft값을 -2씩 앞으로 빼내기

		if(mleft < -wid){ // list 한개의 넓이값 만큼 왼쪽 밖으로 빠질 때
			$(".banner2>ul>li").first().appendTo(".banner2>ul"); //첫번째 li를 .list 뒤로 붙이기
			mleft = 0; // 리스트의 시작점을 왼쪽 0으로 놓기
		}
		$(".banner2>ul").css({"left":mleft}); //.list의 css left값에 mleft 값을 담기
	
        }
        

        /*-------------- footer ------------------- */

        const button = $('.footer_site_list>li');
        
            button.on('click',function(e){
                e.preventDefault();
                // if($(this).parent().siblings().children('.detail').hasClass('on')){removeClass('on')};
                // button.removeClass('on');
                $(this).toggleClass('on');
                // $('.detail').css({'display':'block'});
        });

})