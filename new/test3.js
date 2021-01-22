
$(window).scroll(function(){
    // $("#header").addClass("on");

    // $("#contents").css({"width":"92%"});
    $("#contents").css({"width":"100%"});
    
    const scrollTop = $(this).scrollTop() + $(window).height()/1.5;
    const about = $("#about").offset().top;
    const work = $("#work").offset().top;
    const work_h = $("work").height();

    console.log(work);
    console.log(scrollTop);

    if(scrollTop > about){
        $("#about .title").addClass("on");
    }
    if(scrollTop > work){
        $("#work .title").addClass("on");
        $(".monitor").addClass('on');
        $(".sun1").addClass('on');
        $(".sun2").addClass('on');
        
    }
 

});

const list = document.querySelector(".w_list");

// console.log(list.children[0]);


// const current = 0;



// const prev = $(".L_btn");
// const next = $(".R_btn");
// const list_li = $(".w_list > li");
// const len = list_li.length;
// const class_name = 'on';
// const speed = 800;
// isBlock = true;


// prev.on("click",function(e){
//     e.preventDefault();

//     let current = list_li.filter($('.'+class_name));
//     let current_index = current.index();
//     let prev_index;

//     (current_index != 0) ? prev_index = current_index-1 : prev_index = len-1;

//     if(isBlock) showPrev(current, prev_index);
// });

// next.on("click",function(e){
//     e.preventDefault();

//     let current = list_li.filter($('.'+class_name));
//     let current_index = current.index();
//     let next_index;

//     (current_index != len-1) ? next_index = current_index+1 : next_index = 0;

//     if(isBlock) showNext(current, next_index);

// });

// function showNext(current, next_index){ 
//     isBlock = false;

//     current.stop().animate({left:'-100%'},speed,function(){
//         $(this).removeClass(class_name).hide();
//     });

//     list_li.eq(next_index).show().css({left:'100%'}).stop().animate({left:'0%'},speed,function(){
//         $(this).addClass(class_name);  
//         isBlock = true;     
//     });

//     // active_index = next_index;      
//     // activateBtn(active_index);   
// }


// function showPrev(current, prev_index){   
//     isBlock = false;

//     current.stop().animate({left:'100%'},speed,function(){
//         $(this).removeClass(class_name).hide();
//     });
//     list_li.eq(prev_index).show().css({left:'-100%'}).stop().animate({left:'0%'},speed,function(){
//         $(this).addClass(class_name);  
//         isBlock = true;     
//     });

//     // active_index = prev_index;
//     // activateBtn(active_index);
// }

