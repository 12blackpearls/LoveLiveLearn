
			$(function() {
  				$('a[href*=#]:not([href=#])').click(function() {
    				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      					var target = $(this.hash);
      					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      				if (target.length) {
       				 	$('html,body').animate({
          				scrollTop: target.offset().top
        			}, 1000);
        			return false;
      				}			
    			}			
  			});
		});

    $(document).ready(function() {
      var movementStrength = 25;
      var height = movementStrength / $(window).height();
      var width = movementStrength / $(window).width();
      $("#contact").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#contact').css("background-position", newvalueX+"px     "+newvalueY+"px");

      });
    });


      $(document).ready(function() {
          $(window).scroll( function(i){
              $('.hide').each( function(i){
            
                  var bottom_of_object = $(this).offset().top + $(this).height();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  if( bottom_of_window > bottom_of_object ){
                      $(this).fadeTo(1500,1);
                  }
              }); 
          });
      });

      $(window).load(function() {
        $(".loader").fadeOut("slow");
      })