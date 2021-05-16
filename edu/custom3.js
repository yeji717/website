$(document).ready(function(){

    // $('.section1>video').play();

    /* 첫로딩시 글씨 띄우기 */
    setTimeout(function(){
        // AOS.init();
        $('.intro').addClass('on');
    },1000);
    /* ======= wheel event ======= */ 

    const speed = 1000;
	const ease = 'easeOutExpo';
	const $wrap_section = $('.wrap>section');

	match_height();

	 //브라우저가 리사이즈될 때마다 브라우저와 #wrap>div의 높이 값을 갱신
	$(window).on('resize',match_height);

	function match_height(){
		//변수 ht에 브라우저 높이 값을 저장
		const ht = $(window).height();
		//브라우저의 높이값을 #wrap>div의 높이 값으로 지정
		$wrap_section.height(ht);
	};	

	$wrap_section.on("mousewheel",function(event,delta){    
		event.preventDefault();	

		//마우스 휠을 올렸을때	
		if (delta > 0) {  
			 //변수 prev에 현재 휠을 움직인 div에서 이전 div의 offset().top위치저장
			const prev_target = $(this).prev().offset().top;
			console.log(delta);
			
			//문서 전체를 prev에 저장된 위치로 이동
			$('html,body').stop().animate({'scrollTop':prev_target},speed,ease);
			 
		//마우스 휠을 내렸을때	 
		}else if (delta < 0) {  	
			//변수 next에 현재 휠을 움직인 div에서 다음 div의 offset().top위치 저장
			const next_target = $(this).next().offset().top;
			console.log(delta);
			//문서 전체를 next에 저장된 위치로 이동
			$('html,body').stop().animate({'scrollTop':next_target},speed,ease);
		}          

        const pos1 = $('.section1').offset().top; 
       
    //  $(window).on("scroll",function(){
    //      console.log($(window).scrollTop());
    //  })

     if($(window).scrollTop()>=pos1/2){
       
        slidingBox('.img-box', 500, '#f7450c', 0);

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

        setTimeout(function(){
            $('.con2-1>.title>h2').addClass('on');
        },300)
        // $('.menu li').css({'color':'#000'});
        }

        const pos2 = $('.section2').offset().top; 
        if($(window).scrollTop()>=pos2/2.5){
            $('.con3-1>.title>h2').addClass('on');
        }

        const pos3 = $('.section3').offset().top; 
        if($(window).scrollTop()>=pos3/1.2){
            $('.con4-1>.title>h2').addClass('on');
            $('.teacher').addClass('on');
            $('.student').addClass('on');
        }

        const pos4 = $('.section4').offset().top;

        if($(window).scrollTop()>=pos4/1.2){
            $('.con5-1>.title>h2').addClass('on');
        }

        const pos5 = $('.section5').offset().top;
      
        if($(window).scrollTop()>=pos5/1.2){
            const speed = 400;
            $('.sun .top').animate({'width':'100%'},speed,function(){
                $('.right').animate({'height':'100%'},speed,function(){
                    $('.bottom').animate({'width':'100%'},speed,function(){
                        $('.left').animate({'height':'100%'},speed,function(){
                            AOS.init();
                        });
                    });
                });
            });
        }
    });

    
})


