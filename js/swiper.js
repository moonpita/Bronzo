var galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    cssMode: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,
    speed: 1500,
    thumbs: {
      swiper: galleryThumbs
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  });