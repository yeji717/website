$(document).ready(function(){


   /* ======= wheel event ======= */ 

    var speed = 1000;
	var ease = 'easeOutExpo';
	var $wrap_div = $('.wrap>div');

	match_height();

	 //브라우저가 리사이즈될 때마다 브라우저와 #wrap>div의 높이 값을 갱신
	$(window).on('resize',match_height);

	function match_height(){
		//변수 ht에 브라우저 높이 값을 저장
		var ht = $(window).height();
		//브라우저의 높이값을 #wrap>div의 높이 값으로 지정
		$wrap_div.height(ht);
		
		
	};	

	$wrap_div.on("mousewheel",function(event,delta){    
		event.preventDefault();	

		//마우스 휠을 올렸을때	
		if (delta > 0) {  
			console.log('up');
			 //변수 prev에 현재 휠을 움직인 div에서 이전 div의 offset().top위치저장
			var prev_target = $(this).prev().offset().top;

			//문서 전체를 prev에 저장된 위치로 이동
			$('html,body').stop().animate({'scrollTop':prev_target},speed,ease);
			 
		//마우스 휠을 내렸을때	 
		}else if (delta < 0) {  
			console.log('down');		
			//변수 next에 현재 휠을 움직인 div에서 다음 div의 offset().top위치 저장
			var next_target = $(this).next().offset().top;

			//문서 전체를 next에 저장된 위치로 이동
			$('html,body').stop().animate({'scrollTop':next_target},speed,ease);
		}          
     });		
    

    /* ========= box1 scroll ============ */ 

    $(".scroll").on("click",function(){
        var first = $('.box2').offset().top;

        $('html,body').stop().animate({'scrollTop':first},600);
    });
    
    /* ====== main text sliding box ======= */
    
    slidingBox('.text1', 1000, '#cc0000', 0);	
	slidingBox('.text2', 500, '#cc0000', 700);

	
	function slidingBox(item, speed, color, delay){
		$(item).append(
			$('<div class="inner">').css({
				'width':'100%','height':'100%',
				'position':'absolute', 'top':'0px','left':'-100%',
				'background':color
			}).delay(delay).animate({'left':'0%'},speed,'easeOutExpo',function(){
				$(item).css({'color':color})
				$(this).animate({'left':'100%'},speed,'easeInExpo', function(){
					$(this).remove();
				})
			})
		)
    }

 

    // 가로스크롤

   /* $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();
        $("section").stop().animate({"left":-scroll},500);
    });
    */
   

    /* =========== box 2 ========== */
    $('.next').on('click',function(e){
		e.preventDefault();
		
		//left
		$('.pan1').stop().animate({'margin-left':'-100%'},500,function(){
			$('.pan1>li').first().appendTo('.pan1');
			$('.pan1').css({'margin-left':'0%'});
		});

		//right
		$('.pan2').stop().animate({'margin-left':'-100%'},500,function(){
			$('.pan2>li').first().appendTo('.pan2');
			$('.pan2').css({'margin-left':'0%'});
			
		});
    });

    $('.prev').on('click',function(e){
		e.preventDefault();

		//left
		$('.pan1>li').last().prependTo('.pan1');
		$('.pan1').css({'margin-left':'-100%'});
		$('.pan1').stop().animate({'margin-left':'0%'},500);

		//right
		$('.pan2>li').last().prependTo('.pan2');
		$('.pan2').css({'margin-left':'-100%'});
		$('.pan2').stop().animate({'margin-left':'0%'},500,function(){
			
		});
    });
    

	/* cast 슬라이더 */
	
	var width = $(".list>li").outerWidth();
    var num = $(".list>li").length;
    var totalwidth = width*num;
    $(".list").width(totalwidth);

    var mleft = 0;
   

    var timer = setInterval(move,30);

    $(".list").on("mouseenter",function(){
        clearInterval(timer);
    });

    $(".list").on("mouseleave",function(){
        timer = setInterval(move,30);
    });

    function move(){
        mleft -=6;

        if(mleft < -width){
            $(".list>li").first().appendTo(".list");
            mleft = 0;
        }
        $(".list").css({"left":mleft});
       
    }



    
});