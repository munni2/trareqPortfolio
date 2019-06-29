/* Custom Script */

(function($){ "use strict";

/*=========================================================================
        Preloader
=========================================================================*/
    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('body').addClass("preloader_active");
        $('.preloader_spinner').delay(6000).fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(6000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').removeClass("preloader_active");
    });     

/*=========================================================================
        back to top
=========================================================================*/
    $(document).ready(function(){

        // hide #back-top first
        $("#back-top").hide();
        
        // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

            // scroll body to 0px on click
            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 1500);
                return false;
            });
        });
    });

/*=========================================================================
        counter-down
=========================================================================*/
    // jQuery(document).ready(function( $ ) {
    //     $('.counter').counterUp({
    //         delay: 10,
    //         time: 2000
    //     });
    // });
/*=========================================================================
      fittext
=========================================================================*/
    $(".slogan").fitText();
        $("#fittext2").fitText(1.2);
        $("#fittext3").fitText(1.1, { minFontSize: '50px', maxFontSize: '75px'
    });

/*=========================================================================
     scroll nav bar color effect
=========================================================================*/
$(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});
 
/*=========================================================================
     wow js
=========================================================================*/
 new WOW().init();



/*=========================================================================
    Typed Js
=========================================================================*/
// var typed = new Typed(".type", {
//   strings: [
//     "&nbsp; Munni"
//   ],
//   typeSpeed: 50,
//   backSpeed:50,
//   loop: true
// });


/*=========================================================================
    Added two div inside service section 
=========================================================================*/
// $( ".feature" ).wrap( "<div class='single-block'></div>" );
// $( ".single-block" ).wrap( "<div class='single-wrap'></div>" );


/*=========================================================================
    animated skill section 
=========================================================================*/
function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

/*=========================================================================
    color panel 
=========================================================================*/

    $(document).ready(function(){
        $(".icon").click( function(){
        event.preventDefault();
        if ( $(this).hasClass("inout") ) {
        $(".demo_pannel_box").stop().animate({left:"0px"}, 500);
        } else {
        $(".demo_pannel_box").stop().animate({left:"-200px"}, 500);
        }
        $(this).toggleClass("inout");
        return false;
        });
    });

    $(document).ready(function(){
        $("span.color-1").click(function(){
            $("body").removeClass().addClass("color-1-bar") ;
        });
        $("span.color-2").click(function(){
            $("body").removeClass().addClass("color-2-bar");
        });
        $("span.color-3").click(function(){
            $("body").removeClass().addClass("color-3-bar");
        });
        $("span.color-4").click(function(){
            $("body").removeClass().addClass("color-4-bar");
        });
        $("span.color-5").click(function(){
            $("body").removeClass().addClass("color-5-bar");
        });
        $("span.color-6").click(function(){
            $("body").removeClass().addClass("color-6-bar");
        });
        $("span.color-7").click(function(){
            $("body").removeClass().addClass("color-7-bar");
        });
        $("span.color-8").click(function(){
            $("body").removeClass().addClass("color-8-bar");
        });
        $("span.color-9").click(function(){
            $("body").removeClass().addClass("color-9-bar");
        });
    });

/*=========================================================================
    skill progress bar
=========================================================================*/

$(document).ready(function(){
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },6000);
    });
});


/*=========================================================================
    Page transation
=========================================================================*/

$(document).ready(function(){

    $('#pages').wankyPages({
        selector_prefix   : 'wanky_',                
        default_page      : '1',                   
        animation         : 'cubeLeftRight'
    });

});



/*=========================================================================
       isotope shuffle
=========================================================================*/


$(window).on('load', function(){
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('.filter button').on("click", function() {
        var value = $(this).attr('data-name');
        $grid.isotope({
            filter: value
        });
    });
});


/*=========================================================================
       scrollbar hide show
=========================================================================*/

$(window).on('load', function() {
    $(".wanky_page").addClass("antiscroll-init");
});

$(".wanky_page").mouseover(function(){
    $('.wanky_page').removeClass('antiscroll');
    $(this).addClass('antiscroll-shown');
});

$(".wanky_page").mouseout(function(){
    $('.wanky_page').removeClass('antiscroll-shown');
    $(this).addClass('antiscroll');
});










 })(jQuery);

