$(document).ready(function(){	
	//슬라이더
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
    
});