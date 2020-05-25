$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).parent().toggleClass("menu-active");
      $('#map').toggleClass("move-right")
      $('body').toggleClass("overflow-hidden")
    });
  });



  console.log("hello")