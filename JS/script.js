/* Logic behind accordian found at: http://uniondesign.ca/simple-accordion-without-jquery-ui/ */

$(document).ready(function($) {
    $('#accordion').find('.accordion-button').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');  

    });

     $('#accordionA').find('#tyler').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');  

    });

     /*this is to make sure that the video size changes depending on the size of the scren*/
    $('.iFrame').css('height', $(window).height()-'px');

    
  });

