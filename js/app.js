$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '722px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '522px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
  })
  $('body').keydown(function(event) {
    /* alert(event.which); */
      if (event.which === 88) {
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
    }  
  })
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
