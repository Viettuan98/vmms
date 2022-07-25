$(document).ready(function () {
    const productcat1 = $('.product-cat .menu').height();
    const productcat2 = 355;
    $('.product-cat .menu').attr('style',`height: ${productcat2}px`);;
    $('.product-cat .view-all').click(function () {
        if ($(this).hasClass('show')) {
            $(this).removeClass('show');
            $(".product-cat .menu").animate({height: productcat2});
            $(this).html('Xem thêm');
        }
        else{
            $(this).addClass('show');
            $(".product-cat .menu").animate({height: productcat1});
            $(this).text('Thu gọn');
        }
    });
    $('.filter-title i').click(function () { 
        $(this).toggleClass('show');
        if ($(this).hasClass('show')) {
            $(this).parent().next('.filter-list-value').slideDown('slow');
        }
        else{
            $('li').parents(".product-filter-item");
            $(this).parent().next('.filter-list-value').slideUp('slow');
        }
    });
    $(".product-filter-item .filter-title i").each(function (index, element) {
        if (!$(this).hasClass('show')) {
            $(this).parent().next('.filter-list-value').hide();
        }
    });
    $('.filter-list-value .filter-value').click(function () { 
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
        }
        else{
            $(this).addClass('clicked');
        }
    });
    
    $('.product-filter-item .value-all').click(function () {
        if ($(this).hasClass('show')) {
            $(this).removeClass('show');
            $(this).prev().removeClass('show-item');
            
        }
        else{
            $(this).addClass('show');
            $(this).prev().addClass('show-item');
            
        }
    });
});