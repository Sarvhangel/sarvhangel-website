(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(300);
  });

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

  // Dark mode
  const toggle = document.getElementById("dark-mode-toggle");
  const darkTheme = document.getElementById("dark-mode-theme");

  toggle.addEventListener("click", () => {
    if (toggle.className.indexOf("sun") > 0) {
      setTheme("dark");
    } else if (toggle.className.indexOf("moon") > 0) {
      setTheme("light");
    }
  });

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  function setTheme(mode) {
    localStorage.setItem("theme", mode);
    if (mode === "dark") {
      darkTheme.disabled = false;
      toggle.className = toggle.className.replace("sun", "moon");
    } else if (mode === "light") {
      darkTheme.disabled = true;
      toggle.className = toggle.className.replace("moon", "sun");
    }
  }

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