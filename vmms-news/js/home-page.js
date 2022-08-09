$(document).ready(function () {
  $('.hot-news-list,.football-fixture').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    stagePadding: 0,
    autoplay: false,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<img src='./images/icon-next.svg' alt='Next'>",
      "<img src='./images/icon-prev.svg' alt='Prev'>",
    ],
    responsive: {
      0: {
        nav: false,
      },
      768: {},
    },
  });
  
  $('.football-match-list').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    stagePadding: 0,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<img src='./images/icon-next.svg' alt='Next'>",
      "<img src='./images/icon-prev.svg' alt='Prev'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 10,
        stagePadding: 10,
        autoWidth:true,
      },
      768: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 3,
        nav: true,
      },
    },
  });
  $('.news-category-slider').owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    stagePadding: 0,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<img src='./images/icon-next.svg' alt='Next'>",
      "<img src='./images/icon-prev.svg' alt='Prev'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 10,
        stagePadding: 10,
        autoWidth:true,
      },
      768: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 2,
        nav: true,
      },
    },
  });
  $('.photo-home-list,.backstage-home-list').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    stagePadding: 0,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<img src='./images/icon-next.svg' alt='Next'>",
      "<img src='./images/icon-prev.svg' alt='Prev'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 10,
        stagePadding: 10,
        autoWidth:true,
      },
      768: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
  
});
