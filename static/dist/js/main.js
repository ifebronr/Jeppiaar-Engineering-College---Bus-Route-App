$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).parent().toggleClass("menu-active");
      $('#map').toggleClass("move-map-right");
      $('.main-container').toggleClass("move-right");
      $('body').toggleClass("overflow-hidden")
    });
  });
 