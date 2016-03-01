$(document).ready(function(){

      $(window).scroll(function() { 
        if ($(document).scrollTop() > 510) {
          $(".navbar").css("background-color", "#043D5D"); 
        } else {
          $(".navbar-fixed-top").css("background-color", "transparent");
        }
      });
    });
