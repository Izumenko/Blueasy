$(document).ready(function(){

  $("a").click(function(e) {
    e.preventDefault();
    $('html, body').delay(300).animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  $("#my-menu").mmenu();
  var mMenuApi = $("#my-menu").data("mmenu");
  $("#menu-button").click(function(){
  	mMenuApi.open();
  })
  
});



