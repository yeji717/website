$(window).load(function() {     
	$('#loading').delay('1300').fadeOut();   

}); 
	$(document).ready(function(){	

	

		
		var speed = 1000;
		var ease = 'easeOutExpo';
		var $wrap_div = $('#wrap>div');
	
		// match_height();
	
		//  //브라우저가 리사이즈될 때마다 브라우저와 #wrap>div의 높이 값을 갱신
		// $(window).on('resize',match_height);
	
		// function match_height(){
		// 	//변수 ht에 브라우저 높이 값을 저장
		// 	var ht = $(window).height();
		// 	//브라우저의 높이값을 #wrap>div의 높이 값으로 지정
		// 	$wrap_div.height(ht);
			
			
		// };	
	
		
		// $wrap_div.on("mousewheel",function(event,delta){    
		// 	event.preventDefault();	
	
		// 	//마우스 휠을 올렸을때	
		// 	if (delta > 0) {  
		// 		console.log('up');
		// 		 //변수 prev에 현재 휠을 움직인 div에서 이전 div의 offset().top위치저장
		// 		var prev_target = $(this).prev().offset().top;
	
		// 		//문서 전체를 prev에 저장된 위치로 이동
		// 		$('html,body').stop().animate({'scrollTop':prev_target},speed,ease);
				 
		// 	//마우스 휠을 내렸을때	 
		// 	}else if (delta < 0) {  
		// 		console.log('down');		
		// 		//변수 next에 현재 휠을 움직인 div에서 다음 div의 offset().top위치 저장
		// 		var next_target = $(this).next().offset().top;
	
		// 		//문서 전체를 next에 저장된 위치로 이동
		// 		$('html,body').stop().animate({'scrollTop':next_target},speed,ease);
		// 	}    
			
		
		//  });		
		
		slidingBox('.text1', 1000, '#ef5a3f', 700);	
		slidingBox('.text2', 700, '#000', 1000);
		slidingBox('.text3', 500, '#000', 900);	
		
		function slidingBox(item, speed, color, delay){
			$(item).append(
				$('<div class="inner">').css({
					'width':'100%','height':'100%',
					'position':'absolute', 'left':'0px','top':'-100%',
					'background':color
				}).delay(delay).animate({'top':'0%'},speed,'easeOutExpo',function(){
					$(item).css({'color':color})
					$(this).animate({'top':'100%'},speed,'easeInExpo', function(){
						$(this).remove();
					})
				})
			)
		}
		
	/* 메인메뉴 버튼(햄버거) */
		var burger = $('.burger');
	
		burger.on('click',function(e){
			e.preventDefault();
			$('.menu').toggleClass('on');
			$('.button').toggleClass('on');
		});
		
	/* 메뉴 활성화 */	
		var menu = $('.menu>ul>li');
	
		menu.on('click',function(e){
			e.preventDefault();
		
			var i = $(this).index();
			var offset = $wrap_div.eq(i+1).offset().top;
			
			$('html,body').stop().animate({scrollTop:offset},speed,ease);
			$('.menu').removeClass('on');
			$('.button').removeClass('on');
		})
		
		/* 스크롤 될때 제목 */

		$(window).on("scroll",function(){
	
			var scrollTop = $(this).scrollTop() + $(window).height();
			
			var a = $("#intro").offset().top;
			var b = $("#skill").offset().top;
			var c = $("#work").offset().top;
			var d = $("#contact").offset().top;
		  
		    if(scrollTop > a){
				$("#intro>h1").addClass('on');
				$('.balloon').addClass('on');
		        doMotion();
		        img();
		    }
		
			if(scrollTop > b){
				$("#skill>h1").addClass('on');
				$('.box2-1>div').css('transform','scale(1)');
			}
		
			if(scrollTop > c){
				$("#work>h1").addClass('on');
			}
	
			if(scrollTop > d){
				$("#contact>h1").addClass('on');
			}
		});
	
		
		// var pos1 = $('.scroll').eq(0).offset().top;
		// var pos2 = $('.scroll').eq(1).offset().top;
		// var pos3 = $('.scroll').eq(2).offset().top;
		// var pos4 = $('.scroll').eq(3).offset().top;

	
		// $(window).on('scroll',function(){
	
		// 	var scroll = $(this).scrollTop();
	
		// 	if(scroll>=pos1 && scroll<pos2){
		// 		$("#intro>h1").addClass('on');
		// 		$('.balloon').addClass('on');
		// 		doMotion();
		// 		img();
		// 	}
	
		// 	if(scroll>=pos2 && scroll<pos3){
		// 		$("#skill>h1").addClass('on');
		// 		$('.box2-1>div').css('transform','scale(1)');
		// 	}
	
		// 	if(scroll>=pos3 && scroll<pos4){
		// 		$("#work>h1").addClass('on');
		// 	}
	
		// 	if(scroll>=pos4){
		// 		$("#contact>h1").addClass('on');
		// 	}

		// })
		
		var speed = 1000;
		function doMotion(){
	
		$(".top").animate({"width" : "100%"}, speed, function(){
			$(".right").animate({"height" : "100%"}, speed, function(){
				$(".bottom").animate({"width" : "100%"}, speed, function(){
					$(".left").animate({"height" : "100%"}, speed);
				});
			});
		});
	}
	
	function img(){
		$(".img>.yeji1").css({"margin-left":"0px"});
	}
		
	var mq1 = window.matchMedia("screen and (max-width: 960px)");
	// var mq2 = window.matchMedia("screen and (max-width: 1920px)");
	
	if(mq1.matches){

		$('.work ul li').off();

		var scroll1 = $('.work1').offset().top;
		var scroll2 = $('.work2').offset().top;
		var scroll3 = $('.work3').offset().top;
	
		$(window).scroll(function(){
	
			var scroll = $(this).scrollTop();
	
			if(scroll >= scroll1/1.3){
				$('.work1>img').css({'margin-left':'0'});
				$('.work1 .inner').css({'opacity':'1','margin-top':'0'});        
			}
	
			if(scroll >= scroll2/1.3){
				$('.work2>img').css({'margin-left':'0'});
				$('.work2 .inner').css({'opacity':'1','margin-top':'0'});        
			}
	
			if(scroll >= scroll3/1.3){
				$('.work3>img').css({'margin-left':'0'});
				$('.work3 .inner').css({'opacity':'1','margin-top':'0'});        
			}
		})

	}


	});
	


















