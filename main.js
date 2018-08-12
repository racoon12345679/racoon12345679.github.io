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

/*hover title
$('img.bottom').hover(
    function(){
        $(this).css('opacity','.5');
    },
    function(){
        $(this).css('opacity','1');
    }
);*/

/* Every time the window is scrolled ... */
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.fadein').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){

              $(this).animate({'opacity':'1'},300);

          }

      });

  });

/*background move with mouseover

  var pixelToMove = 0;
  $("#background-image").mousemove(function(e) {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newValueX = (e.pageX / width) * pixelToMove;
    var newValueY = (e.pageY / height) * pixelToMove;
    $(this).css('background-position', newValueX + '%' + ' ' + newValueY + '%');
  });

  */


});
