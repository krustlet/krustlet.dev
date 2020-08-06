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

  // adding wows
  $('.krustparty').on('click', '.control-wa a.fa-plus', function(e) {
    var nLeft = Math.floor(Math.random()*(window.innerWidth)+0);
    var nWow = '<span class="wow wow-wa" style="left: ' + nLeft + 'px; top: 70px;"></span>';
    $(".krustparty").append(nWow);
  });
  $('.krustparty').on('click', '.control-rust a.fa-plus', function(e) {
    var nLeft = Math.floor(Math.random()*(window.innerWidth)+0);
    var nWow = '<span class="wow wow-rust" style="left: ' + nLeft + 'px; top: 70px;"></span>';
    $(".krustparty").append(nWow);
  });
  $('.krustparty').on('click', '.control-k8s a.fa-plus', function(e) {
    var nLeft = Math.floor(Math.random()*(window.innerWidth)+0);
    var nWow = '<span class="wow wow-k8s" style="left: ' + nLeft + 'px; top: 70px;"></span>';
    $(".krustparty").append(nWow);
  });

  // removing wows
  $('.krustparty').on('click', '.control-wa a.fa-minus', function(e) {
    $(".krustparty > .wow-wa:last-child").remove();
  });
  $('.krustparty').on('click', '.control-rust a.fa-minus', function(e) {
    $(".krustparty > .wow-rust:last-child").remove();
  });
  $('.krustparty').on('click', '.control-k8s a.fa-minus', function(e) {
    $(".krustparty > .wow-k8s:last-child").remove();
  });

});
