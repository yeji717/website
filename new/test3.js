const slide = document.querySelector('.slide');
const li = slide.getElementsByTagName('li');
console.log(li[0]);
const slideCount = li.length;
console.log(slideCount);
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;


// slide li 가로 배치

for(let i=0; i < slideCount; i++){
    li[i].style.left = 100 * i + '%' ;
}

// goToSlide 함수

function goToSlide(idx){
    slide.style.left =  -100 * idx + '%';
    li[idx].classList.add('on');
    current = idx; 
    
}


// slide prev 클릭
prev.addEventListener('click', (e) => {
    e.preventDefault();
    // goToSlide(current - 1);

    if(current == 0){
        goToSlide(current = slideCount-1);
    }else{
        goToSlide(current = current -1);
    }
})

// slide next 클릭
next.addEventListener('click', (e) => {
    e.preventDefault();
    // goToSlide(current + 1);

    if(current == slideCount-1){
        goToSlide(0);
    }else{
        goToSlide(current + 1);
    }
})

$(window).scroll(function(){
    // $("#header").addClass("on");

    // $("#contents").css({"width":"92%"});
    $("#contents").css({"width":"100%"});
    
    const scrollTop = $(this).scrollTop() + $(window).height()/1.5;
    const about = $("#about").offset().top;
    const work = $("#work").offset().top;
    const work2 = $(".work2").offset().top;
    const work_h = $("work").height();

    // console.log(work);
    // console.log(scrollTop);

    if(scrollTop > about){
        $("#about .title").addClass("on");
    }
    if(scrollTop > work){
        $("#work .title").addClass("on");
        li[0].classList.add('on');
        // $(".work1 .subtitle h2").animate({"margin-left":"8%"},1000);
        // $(".monitor").addClass('on');
        // $(".sun1").addClass('on');
        // $(".sun2").addClass('on');
    }
    if(scrollTop > work2){
        // $(".work2 .subtitle h2").animate({"margin-left":"1.5%"},1000);
        $(".animation").addClass("on");
    }
 

});

const list = document.querySelector(".w_list");



// var Emblem = {
//     init: function(el, str) {
//       var element = document.querySelector(el);
//       var text = str ? str : element.innerHTML;
//       element.innerHTML = '';
//       for (var i = 0; i < text.length; i++) {
//         var letter = text[i];
//         var span = document.createElement('span');
//         var node = document.createTextNode(letter);
//         var r = (360/text.length)*(i);
//         var x = (Math.PI/text.length).toFixed(0) * (i);
//         var y = (Math.PI/text.length).toFixed(0) * (i);
//         span.appendChild(node);
//         span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
//         span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
//         element.appendChild(span);
//       }
//     }
//   };
  
//   Emblem.init('.emblem');

const menu = $(".menu li");
const panel = $(".panel li");

$(".menu li").on('click',function(e){
    e.preventDefault();
    menu.removeClass("active");
    $(this).addClass("active");

    let index = $(this).index();
    
    panel.removeClass("on");
    panel.eq(index).addClass("on");
    // console.log(index);
});