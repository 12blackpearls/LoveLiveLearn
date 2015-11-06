
$(function () {
    			var count = $("#slider > div").length
   				var slider = 1
    			var speed=3000
    			var fadeSpeed = 300
    			var loop 
    			stop()
    			$("#1").fadeIn(fadeSpeed);
    			$('.control_next').click(right)
    			$('.control_prev').click(left)
    			$('#slider').hover(stop)
    
    			function start(){
        			loop = setInterval(next, speed)
    			}
    			function stop(){
        			clearInterval(loop)
    			}
    			function right() {
        			stop()
        			next()
        			return false
    			}

    			function left() {
        			stop()
        			prev()
        			return false
    			}

    			function prev() {
        			slider--
        			if (slider < 1) {
            			slider = count
        			}

        			$("#slider > div").fadeOut(fadeSpeed)
        			$("#" + slider).fadeIn(fadeSpeed)
    			}

    			function next() {
        			slider++
        			if (slider > count) {
            			slider = 1
        			}

        			$("#slider > div").fadeOut(fadeSpeed)
        			$("#" + slider).fadeIn(fadeSpeed)
    			}
			});