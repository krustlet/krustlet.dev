$(document).ready(function(){
  
  // preloader
  $(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});

    // party
    $(".wow").each(function(i,el){
      var tLeft = Math.floor(Math.random()*(window.innerWidth)+0),
        tTop  = Math.floor(Math.random()*(window.innerHeight)+50);
      $(el).css({position:'absolute', left: tLeft });
    });
  });

  $('.begone a.fa-pause').on('click', function(){
    $('.krustparty').addClass('cease');
    $('.controls').removeClass('active');
    $('.begone a.fa-play').removeClass('hidden');
    $(this).addClass('hidden');
  });

  $('.begone a.fa-play').on('click', function(){
    $('.krustparty').removeClass('cease');
    $('.controls').addClass('active');
    $('.begone a.fa-pause').removeClass('hidden');
    $(this).addClass('hidden');
  });

});
