$(window).ready(function() {
    var typingBool = false;
    var typingIdx = 0;
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다
    typingTxt = typingTxt.split(""); // 한글자씩 자른다.
    if (typingBool == false) {
      // 타이핑이 진행되지 않았다면
      typingBool = true;
  
      var tyInt = setInterval(typing, 100); // 반복동작
    }
  
    function typing() {
      if (typingIdx < typingTxt.length) {
        // 타이핑될 텍스트 길이만큼 반복
        $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
        typingIdx++;
      } else {
        clearInterval(tyInt); //끝나면 반복종료
      }
    }

    
    // var slide_li = $('.intro>ul>li');
    // var num = slide_li.length;
    // var total_height = num*height;
    // var height = slide_li.outerHeight();
    // var class_name = 'on';

    // var mtop = 0;

    // var timer = setInterval(showslide,30);

    // function showslide() {

    //     mtop -=2;

    //     if(mtop < -total_height){ // list 한개의 넓이값 만큼 왼쪽 밖으로 빠질 때
	// 		slide_li.first().appendTo(".intro>ul"); //첫번째 li를 .list 뒤로 붙이기
	// 		mtop = 0; // 리스트의 시작점을 왼쪽 0으로 놓기
	// 	}
	// 	$(".intro>ul").css({"top":mtop}); //.list의 css left값에 mleft 값을 담기

    //     // var current = slide_li.filter($('.'+class_name));
    // }



  });
  