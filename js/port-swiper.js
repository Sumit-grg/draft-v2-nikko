
 
(function($) {
    "use strict";
	$(document).ready(function() {

        $(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function() {
          $(this).parent().children(".overlay").show();
          $(".main-header").hide();
      
        });
      
      
        $(`[unique-script-id="w-w-dm-id"] .close`).click(function() {
          $(".overlay").hide();
          $(".main-header").show();
        });
      });
 
})(jQuery);

