$(document).ready(function(){		
		
	var speed = 1000;
	var ease = 'easeOutExpo';
	var $wrap_div = $('#wrap>div');

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
		
		// if($(this).index() = '2'){
		// 	doMotion();
		// }
     });		
    
    slidingBox('.text1', 1000, '#ef5a3f', 0);	
	slidingBox('.text2', 500, '#000', 700);
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
    

	var burger = $('.button');

	burger.on('click',function(e){
		e.preventDefault();
		$('.menu').toggleClass('on');
		$(this).toggleClass('on');
	});
	
	var menu = $('.menu>ul>li');

	menu.on('click',function(e){
		e.preventDefault();
	
		var i = $(this).index();
		var offset = $wrap_div.eq(i+1).offset().top;
		
		$('html,body').stop().animate({scrollTop:offset},speed,ease);
		$('.menu').removeClass('on');
		burger.removeClass('on');
	})
	
	
    $(window).on("scroll",function(){

		var cd = $(this).scrollTop();
		
        var ab = $("#intro").offset().top;
        // alert(cd);
        if(cd>ab/2){
			$("#intro>h1").addClass('on');
			$('.balloon').addClass('on');
            doMotion();
            img();
        }
	
        var ef = $("#skill").offset().top;

		if(cd>ef/1.5){
			$("#skill>h1").addClass('on');
			$('.box2-1>div').css('transform','scale(1)');
		}
		
		var gh = $("#work").offset().top;

		if(cd>gh*1.2/1.5){
			$("#work>h1").addClass('on');
		}

		var ij = $("#contact").offset().top;

		if(cd>=ij/1.3){
			$("#contact>h1").addClass('on');
		}
	});
	
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
	$(".img>img").css({"margin-left":"0px"});
}
	
	
});















