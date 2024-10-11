(function( $ ){     
   var navOffset = jQuery("navbar").offset().top; 
   jQuery(window).scroll(function() {
       var scrollPos = jQuery(window).scrollTop();
        if (scrollPos >= navOffset) {
            jQuery("navbar").addClass("fixed");
        } else {
            jQuery("navbar").removeClass("fixed");
        }
    });
})(jQuery);