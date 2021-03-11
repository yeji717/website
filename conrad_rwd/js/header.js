$(document).ready(function(){

    /*header 부분 */

 let isScrolled = false;

 $(window).on('scroll', function(){
     let scroll = $(this).scrollTop();
     if(scroll>0){
         $('header').addClass('on');

         if(isScrolled == false){ //스크롤이 될때
             $('#header').css({
                 'position':'fixed',
                 'background':'#fff',
                 'color':'#666',
                 'border-bottom':'1px solid #e8e8e8',
                 'margin-top':'0px'
             }); 
         }      
         isScrolled = $('.main').hasClass('on'); 

     }else{ //스크롤안될때 다시 원래 초기값으로
         $('header').removeClass('on');
         $('#header').css({
             'color':'#fff',
             'background':'none',
             'box-shadow':'none',
             'border-bottom':'none'
         });

         $('#header .logo').css({'display':'block'});
         $('#header .logo1-2').css({'display':'none'});

         isScrolled = false;

     }
 });

 /* language */

 $('.ko').click(function(){
     $('.list').toggleClass('active');
 });

 /* main menu */

 // $(".mainmenu>li>a").on("click",function(e){
 //     e.preventDefault();
 // });
 /* sub menu */

 $('.mainmenu>li').on('mouseenter focusin',function(){
     $(this).find('.submenu').css({'transform':'translateY(0)'});
     $(this).find('.submenu').css({'visibility':'visible'});
     $(this).find('.submenu').css({'opacity':'1'});
 })

 $('.mainmenu>li').on('mouseleave focusout',function(){
     $(this).find('.submenu').css({'transform':'translateY(20%)'});
     $(this).find('.submenu').css({'visibility':'hidden'});
     $(this).find('.submenu').css({'opacity':'0'});
 })

 /* sub menu (tab) */

 $('.mainmenu>li').bind('focus',function(){
     $(this).find('.submenu').css({'transform':'translateY(0)'});
     $(this).find('.submenu').css({'visibility':'visible'});
     $(this).find('.submenu').css({'opacity':'1'});
 })
 
 // $('.mainmenu>li').focus(function(){
 //     $(this).find('.submenu').css({'transform':'translateY(0)'});
 //     $(this).find('.submenu').css({'visibility':'visible'});
 //     $(this).find('.submenu').css({'opacity':'1'});
 // })

 // $('.mainmenu>li').blur(function(){
 //     $(this).find('.submenu').css({'transform':'translateY(20%)'});
 //     $(this).find('.submenu').css({'visibility':'hidden'});
 //     $(this).find('.submenu').css({'opacity':'0'});
 // })


 $('.btn').on('click', function (e) {
     e.preventDefault();
     
     $(this).toggleClass('on');
     let isOpen = $('#moPanel').hasClass('on');

     if (isOpen) {
         $('#moPanel').removeClass('on');
     } else {
         $('#moPanel').addClass('on');
     }
 });

//  $('.main').on('click',function(e){
//      e.preventDefault();
//     $(this).addClass('on');
//  });

 //2depth 탭버튼
 const $moGnb_li = $('#moGnb>li');

 $moGnb_li.on('click', function () {

     let isOn = $(this).children('a').hasClass('on');

     if (isOn) {
         $(this).children('a').removeClass('on');
         $(this).children('.sub').stop().slideUp();
     } else {
         $moGnb_li.children('a').removeClass('on');
         $moGnb_li.children('.sub').stop().slideUp();
         $(this).children('a').addClass('on');
         $(this).children('.sub').stop().slideDown();
     }
 });

});
 
 