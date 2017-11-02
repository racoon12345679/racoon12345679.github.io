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

/*caption*/

$(document).ready(function() {
  $('.content').mouseenter(function() {
    $(this).find('span').slideToggle();
  });

  $('.content').mouseleave(function() {
    $(this).find('span').slideToggle();
  });
});



/*fade*/

  $(function() {
    $('body').removeClass('fade-out');
});

/*hover title
$('img.thumb').hover(
    function(){
        $(this).css('opacity','.5');
    },
    function(){
        $(this).css('opacity','1');
    }
);
*/

/* Every time the window is scrolled ...
  $(window).scroll( function(){

      /* Check the location of each desired element
      $('.content').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it
          if( bottom_of_window > bottom_of_object ){

              $(this).animate({'opacity':'1'},500);

          }

      });

  });
*/

});
