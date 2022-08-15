$(document).ready(function () {
  $('.menu .menu-item-has-child .toggle').click(function () {
    $(this).toggleClass('show');

    if ($(this).hasClass('show')) {
      $(this).next('.sub-menu').slideDown(300);
    } else {
      $(this).next('.sub-menu').slideUp(300);
    }
  });
  if ($(window).width() < 1024) {
    $('.menu-bars').click(function () {
      $('.mobile-sidebar').toggleClass('mobile-sidebar-toggle');
      $('.menu-bars-close').toggleClass('menu-bars-close--toggle');
    });

    $('.menu-bars-close,.mobile-sidebar-close').click(function () {
      $('.mobile-sidebar').removeClass('mobile-sidebar-toggle');
      $('.menu-bars-close').removeClass('menu-bars-close--toggle');
    });
    $(window).scroll(function () {
      var pos_body = $('html,body').scrollTop();
      if (pos_body > 80) {
        $('.header').addClass('stuck');
      } else if (pos_body <= 0) {
        $('.header').removeClass('stuck');
      }
    });
  }
  if ($(window).width() > 1024) {
    $(window).scroll(function () {
      var pos_body = $('html,body').scrollTop();
      if (pos_body > 170) {
        $('.header').addClass('stuck');
      } else if (pos_body <= 0) {
        $('.header').removeClass('stuck');
      }
    });
    $('.box-product .box-product__image').hover(
      function () {
        $(this).next('.box-product-tooltip').addClass('toggle');
      },
      function () {
        $(this).next('.box-product-tooltip').removeClass('toggle');
      }
    );
    $('.box-product-tooltip').hover(
      function () {
        $(this).addClass('toggle');
      },
      function () {
        $(this).removeClass('toggle');
      }
    );
  }
  $('.btn-minus').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
      value = value - 1;
    } else {
      value = 1;
    }

    $input.val(value);
  });

  $('.btn-plus').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
      value = 100;
    }

    $input.val(value);
  });
});

document.querySelector('.menu-all').addEventListener('click', () => {
  document.querySelector('.menu-category').classList.toggle('show');
});

document.querySelector('.menu-category-close').addEventListener('click', () => {
  document.querySelector('.menu-category').classList.remove('show');
});
