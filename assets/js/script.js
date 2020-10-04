(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(300);
    speechMeta();
  });

  // speech advice for blind people
  function speechAdvice() {
    $('meta').each(function() {
      if ($(this).attr('name') === 'baseURL' && 'http:' + $(this).attr('content') === window.location.href) {
        let message = 'Aide aux non-voyants avec la combinaison Control + Entrée';
        safeSpeechMessage(message);
      }
    });
  }

  // speech metadata for blind people
  function speechMeta() {
    var description;
    var title;
    
    $('meta').each(function() {
      if ($(this).attr('name') === 'description') {
        description = $(this).attr('content');
      }
      if ($(this).attr('name') === 'title') {
        title = $(this).attr('content');
      }
    });

    safeSpeechMessage(title + ' : ' + description);
  }

  function safeSpeechMessage(message) {
    if(window.speechSynthesis.getVoices().find(v => v.lang === 'fr-FR') === undefined) {
      window.speechSynthesis.addEventListener('voiceschanged', function() {
        speechMessage(message);
      });
    } else {
      speechMessage(message);
    }
  }

  function speechMessage(text) {
    var message = new SpeechSynthesisUtterance();
    message.lang = 'fr-FR';
    message.text = text;
    message.rate = 0.9;
    message.volume = 0.15;
    window.speechSynthesis.speak(message);
  }

  // headroom js
  $('.navigation').headroom();

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  $('.featured-post-slider').slick({
    dots: false,
    speed: 300,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Masonry
  setTimeout(function(){
    $('.masonry-container').masonry({
      itemSelector: '.masonry-container > div',
      columnWidth: 1
    });
  }, 500);

  setTimeout(function () {
    $('.instagram-slider').slick({
      dots: false,
      speed: 300,
      autoplay: true,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  }, 1500);

  // article reading time
  $('article').each(function () {

    let _this = $(this);

    _this.readingTime({
      readingTimeTarget: _this.find('.eta'),
      remotePath: _this.attr('data-file'),
      remoteTarget: _this.attr('data-target')
    });
  });


})(jQuery);