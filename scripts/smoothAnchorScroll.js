$(function(){
    // on hash fragment url click
    $('[href^="#"]').click(function(){
        // adds a little bit of time to the scrolling based on how far the target is from the top 
        // ensures that the scroll motion is about the same percieved velocity 
        var $smoothAnchorScrollTime = 500 + (Math.floor($($(this).attr("href")).offset().top))/2;
        // animate the page
        $('html, body').animate({
            //to scroll from the top to the href attribute 
            scrollTop: $( $(this).attr('href') ).offset().top
            // plan to make this time dynamic by calculating the offset from the top and then doing some math
        }, $smoothAnchorScrollTime);
        // prevent default
        return false;
    });    
});