$(function () {
  $("._menu ul li").on("click",$("._menu ul"),function () {
    $(this).toggleClass("active");
  })
  $("._menu ul li").eq(1).on("click",function () {
    $(this).next().slideToggle(1000);
  })
});