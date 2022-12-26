document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#layer button").addEventListener("click", function () {
		document.querySelector("#layer").style.display = "none";
	});
});


/* 문서의 요소(태그)가 다 준비되면 실행해 */
/* $(값) <- 제이쿼리 객체 <- 제이쿼리 함수를 실행할수 있음  */
$(function () {
	$(".full_menu, .nav li").mouseover(function () {
    $(".full_menu").stop().slideDown(600);
  });
	$(".full_menu, .nav li").mouseleave(function () {
    $(".full_menu").stop().slideUp(600);
  });

  $(".full_cover>ul>li").mouseover(function(){
    var i=$(this).index(); // 원뎁스 li 중 마우스 올라간 요소의 번호를 i에 할당 
    /* .eq(n) n번째 요소 취득 */
    /* 투뎁스 i번째에 마우스 오버시 원뎁스 i번째 find()하위탐색*/
    $(".nav li").eq(i).find(".line").css("width","100%");
  })
  $(".full_cover>ul>li").mouseleave(function(){
    var i=$(this).index(); 
    $(".nav li").eq(i).find(".line").css("width","0%");
  })
  $(".nav li").mouseover(function(){
    $(this).find(".line").css("width","100%");
  })
  $(".nav li").mouseleave(function(){
    $(this).find(".line").css("width","0%");
  })
  $("#header .mo").click(function(){
    $("mo_menu").stop().slideToggle(fast);
  })
}); //jQuery