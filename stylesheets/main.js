// $(document).ready(function(){     

//    var scroll_start = 0;
//    var startchange = $('#startchange');
//    var offset = startchange.offset();

//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $('#navbar').css('background-color', '#f0f0f0');
//        } else {
//           $('#navbar').css('background-color', '#1f8dd6');
//        }
//    });
// });

    $(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 520) {
          $(".navbar").css("background-color", "#1f8dd6"); 
        } else {
          $(".navbar-fixed-top").css("background-color", "transparent");
        }
      });
    });