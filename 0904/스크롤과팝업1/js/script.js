$(function(){
  var h;
   $(window).resize(function(){
     h = $(window).height();   //현재 브라우저 높이를 h 에 저장
     $('section>div').height(h);
 
   });
   $(window).trigger('resize');
 //브라주저 시작시 강제로 resize;
 
 var dTop = $("#floatdiv").offset().top; //250
 
   $(window).scroll(function(){
     var sct = $(window).scrollTop();
     $('#sTop').text(sct);
     if(sct >=100){
        $('nav').addClass('fixed');
     }else{
        $('nav').removeClass('fixed');
     }
 
     $("#floatdiv").stop().animate({top:dTop + sct},500);
   
 
 // if(sct >= $('section>div').eq(0).offset().top){
 //      $('nav ul li').removeClass('on');
 //      $('nav ul li').eq(0).addClass('on'); 
 // }
 // if(sct >= $('section>div').eq(1).offset().top){
 //   $('nav ul li').removeClass('on');
 //   $('nav ul li').eq(1).addClass('on'); 
 // }
 // if(sct >= $('section>div').eq(2).offset().top){
 //   $('nav ul li').removeClass('on');
 //   $('nav ul li').eq(2).addClass('on'); 
 // }
 // if(sct >= $('section>div').eq(3).offset().top){
 //   $('nav ul li').removeClass('on');
 //   $('nav ul li').eq(3).addClass('on'); 
 // }
 // if(sct >= $('section>div').eq(4).offset().top){
 //   $('nav ul li').removeClass('on');
 //   $('nav ul li').eq(4).addClass('on'); 
 // }
 // if(sct >= $('section>div').eq(5).offset().top){
 //   $('nav ul li').removeClass('on');
 //   $('nav ul li').eq(5).addClass('on'); 
 // }
 
 for(var i =0; i < 6; i++){
   if(sct >= $('section>div').eq(i).offset().top){
       $('nav ul li').removeClass('on');
       $('nav ul li').eq(i).addClass('on');
       $('#floatdiv ul li').removeClass('on');
       $('#floatdiv ul li').eq(i).addClass('on');
   }
 }
 
 
 
 
 });
 
 $('nav ul li').click(function(){
   var i = $(this).index();
   var offset_nav = $('section>div').eq(i).offset().top;
   // $('nav ul li').removeClass('on');
   // $(this).addClass('on');
       // $('nav ul li').removeClass('on');
       // $('nav ul li').eq(i).addClass('on');     
   $('html, body').stop().animate({scrollTop:offset_nav},1000);
 
 });
 $('#floatdiv ul li').click(function(){
   var i = $(this).index();
   var offset_div = $('section>div').eq(i).offset().top;
   // $('nav ul li').removeClass('on');
   // $(this).addClass('on');
       // $('nav ul li').removeClass('on');
       // $('nav ul li').eq(i).addClass('on');     
   $('html, body').stop().animate({scrollTop:offset_div},1000);
 
 });
 
//  $("section > div").mousewheel(function(event, d){
//   console.log(d);

//   if(d > 0) {
//     let prev = $(this).prev().offset().top;
//     $('html, body').stop().animate({scrollTop:prev},1000);
//   }
//   if(d < 0) {
//     let next = $(this).next().offset().top;
//     $('html, body').stop().animate({scrollTop:next},1000);
//   }
//  });
 

$("#popup").draggable();

// 기본적으로 처음에는 $.cookie("pop") no가 없으므로
// #popup을 보여준다.
if($.cookie('pop')!="no"){
  $('#popup').show();
}
$("#popup area:eq(0)").click(function(){
  $("#popup").fadeOut("fast");
});
$("#popup area:eq(1)").click(function(){
  //하루동안 보지 않게
  $.cookie("pop", "no", {expires:1});
  $("#popup").fadeOut("fast");
});

if($.cookie("popup") == "none" ) {
  $("#notice_wrap").hide();
}
let chk = $("#expiresChk"); // checkbox
$(".closeBtn").on("click", closePop);
function closePop() {
  if(chk.is(":checked")) { // input창이 checked가 되어있으면
    $.cookie('popup', "none", {expires:3});
  }
  $("#notice_wrap").fadeOut("fast");
}


});