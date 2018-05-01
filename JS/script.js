/* Logic behind accordian found at: http://uniondesign.ca/simple-accordion-without-jquery-ui/ */

$(document).ready(function($) {
    $('#accordion').find('.accordion-button').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');  

    });
  });

$('.iFrame').css('height', $(window).height()-'px');