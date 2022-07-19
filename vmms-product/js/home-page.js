$(document).ready(function () {
  $('.slider-home,.customer-review-list').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        nav: false,
      },
      768: {},
    },
  });
  $('.product-lists.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    stagePadding: 15,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 2,
        nav: false,
        margin: 10,
        stagePadding: 10,
      },
      768: {
        items: 3,
        nav: true,
      },
      992: {
        items: 4,
        nav: true,
      },
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
  $('.customer-brand-list').owlCarousel({
    items: 6,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    stagePadding: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 2,
        nav: false,
        margin: 15,
      },
      768: {
        items: 4,
        margin: 15,
        nav: false,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
  $('.news-home-list').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    stagePadding: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 15,
      },
      768: {
        items: 2,
        margin: 15,
        nav: false,
      },
      992: {},
    },
  });
  $('.header-bottom .vertical-menu-title').hover(
    function () {
      $('.header-bottom .vertical-menu-list').addClass('show');
    },
    function () {
      $('.header-bottom .vertical-menu-list').removeClass('show');
    }
  );
  $('.header-bottom .vertical-menu-list').hover(
    function () {
      $(this).addClass('show');
    },
    function () {
      $(this).removeClass('show');
    }
  );
  $('.header-bottom .vertical-menu-list .nav-vertical-item').hover(
    function () {
      $(
        '.header-bottom .vertical-menu-list .nav-vertical-list .nav-vertical-sub.active'
      ).removeClass('active');
      let getnav = $(this).attr('data-order');
      $(`.${getnav}`).addClass('active');
    },
    function () {
      // out
    }
  );
});
