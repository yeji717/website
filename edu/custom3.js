$(document).ready(function(){

    // $('.section1>video').play();

    /* 첫로딩시 글씨 띄우기 */
    setTimeout(function(){
        // AOS.init();
        $('.intro').addClass('on');
    },1000);

    /* scroll 클릭 시 section1로 이동 */

    

    $('.scroll').on("click",function(){
        const section2 = $('.section2').offset().top;

        $('html, body').stop().animate({'scrollTop':section2},400);
    })



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
    });

    /* review 구간 */

    // $('.review').mouseover(function(){
    //     $(this).stop().animate({width:'52%'},500);
    // });

    // $('.review').mouseleave(function(){
    //     $(this).stop().animate({width:'18%'},500);
    // });

    /* 스크롤할 때의 에니메이션 */

    $(window).on('scroll touchmove mousewheel',function(){
        
    
        // const pos1 = $('.section1').offset().top; 
        const pos2 = $('.section2').offset().top; 
        const pos3 = $('.section3').offset().top; 
        const pos4 = $('.section4').offset().top;
        const pos5 = $('.section5').offset().top;
        const pos6 = $('.section6').offset().top;

        // let scrollvalue = $(this).scrollTop();
        // console.log(scrollvalue);
        // console.log(pos3);
       
        if($(window).scrollTop()<=pos2){
       
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
            $('.con2-1-box>.title>h2').addClass('on');
      
        }

    
        if($(window).scrollTop()>=pos3/1.2){
            $('.con3-1>.title>h2').addClass('on');
        }

     
        if($(window).scrollTop()>=pos4/1.2){
            $('.con4-1>.title>h2').addClass('on');
            $('.teacher').addClass('on');
            $('.student').addClass('on');
        }

  

        if($(window).scrollTop()>=pos5/1.2){
            $('.con5-1>.title>h2').addClass('on');
        }


      
        if($(window).scrollTop()>=pos6/1.2){
            $('.con6-1>.title>h2').addClass('on');
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
    })

    /* 모바일 버튼 눌렀을 때 나오는 모바일패널 */

    $('.mobutton').on('click',function(){
        $('.mopanel').toggleClass('on');
    });

    $('.close').on('click',function(){
        $('.mopanel').removeClass('on');
    })

    /* 위로가기 버튼 클릭 */

    $('.top').on("click",function(){
        $('html,body').stop().animate({scrollTop:0},500);
    });

    /* 메뉴버튼 눌렀을 때 */

    // $('.menu-bar').on("click",function(){
    // })



    

    $(window).resize(function(){

        let windowWidth = $(window).width();
        // console.log(windowWidth);

        if(windowWidth<=768){
            $('.con4-1>div').removeClass('hover');
        }else{
            $('.con4-1>div').addClass('hover');
        }

        if(windowWidth<=480){
            if($(window).scrollTop()>0){
                $('#header').css({'background':'#fff'});
            }else{
                $('#header').css({'background':'none'});
            }
        }
    });
    
})


