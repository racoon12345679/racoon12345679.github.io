$(document).ready(function() {
  $('.title').hide();
  /* navi title */

   $(".logo").mouseleave(function() {
    $(".title").addClass("hidden");
  });

  $(".logo").mouseover(function() {
    $("title").removeClass("hidden");
  });

  $(".logo").hover(function(){
    $('.title').show();
},function(){
    $('.title').hide();
});


/*fade*/

  $(function() {
    $('body').removeClass('fade-out');
});

});
