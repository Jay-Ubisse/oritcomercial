$(document).ready(function() {
  $('.sm').smartmenus({
    showFunction: function($ul, complete) {
      $ul.slideDown(250, complete);
    },
    hideFunction: function($ul, complete) {
      $ul.slideUp(250, complete); 
    }
  });

  $("#menu-icon").hide();

  if($(window).width() < 900){
    $("#menu-icon").show();
    $("#menu").hide();
    $("#menu-icon").click(function () {
      if ($("#menu").is(':hidden')) {
        $("#menu").slideDown(300);
      } else {
        $("#menu").slideUp(300);
      }
    });
  }
}); // end ready