

/*----------------------BURGER-------------*/

$(document).ready(function () {
    $('.burger, .mask3').click(function () {
      $('.mask3').toggleClass('closed');
      $('.menu').toggleClass('nav-mobil');
      $('.burger').toggleClass('open');
      $('.site-header').toggleClass('opacity');

      
    });
    $( "li" ).click(function() {
      $( ".menu" ).removeClass("nav-mobil");
      $('.mask3').removeClass('closed');
      $('.burger').removeClass('open');

    });
  });

  /*==================================FAncy box================*/

  $(document).ready(function() {

    /* This is basic - uses default settings */
    
    $("a#single_image").fancybox({
      'transitionIn'	:	'elastic',
      'transitionOut'	:	'elastic',
      'speedIn'		:	600, 
      'speedOut'		:	200, 
      'overlayShow'	:	false
    });
    
    /* Using custom settings */
    
    $("a#inline").fancybox({
      'hideOnContentClick': true
    });
  
    /* Apply fancybox to multiple items */
    
    $("a.group").fancybox({
      'transitionIn'	:	'elastic',
      'transitionOut'	:	'elastic',
      'speedIn'		:	600, 
      'speedOut'		:	200, 
      'overlayShow'	:	false
    });
    
  });
