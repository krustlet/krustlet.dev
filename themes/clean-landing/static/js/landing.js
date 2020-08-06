$(document).ready(function(){

  $.fn.randoParty = function(){ 
    alert('You have successfully randomized a party wow!');

    var tLeft = Math.floor(Math.random()*(window.innerWidth)+0);
    $(el).css({ left: tLeft });
  }
  
  // preloader
  $(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});

    // start the party
    $(".wow").each(function(i,el){
      var tLeft = Math.floor(Math.random()*(window.innerWidth)+0),
        tTop  = Math.floor(Math.random()*(window.innerHeight)+50);
      $(el).css({ left: tLeft });
    });
  });

  // show or hide the party
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

  // add or remove wow stuff
  var nLeft = Math.floor(Math.random()*(window.innerWidth)+0);
  var wowRange = ['wa', 'rust', 'k8s'];
  var randomWow = wowRange[Math.floor(Math.random()*wowRange.length)];
  var nWow = '<span class="wow wow-' + wowRange[Math.floor(Math.random()*wowRange.length)] + '" style="left: ' + nLeft + 'px"></span>';

  $('.krustparty').on('click', 'a.fa-plus', function () {
    $(".krustparty").append(nWow);
  });

});
