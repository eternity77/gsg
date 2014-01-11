jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        // if (direction === 'down') {
        //     $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        // }
        // else {
        //     $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        // }

    });
 
    mywindow.scroll(function () {
        var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        
        var train = $('#train');
        var total = $(document).width() - train.width();
        console.log(total * scrollPercent / 100);
        train.css('left', total * scrollPercent / 100);
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1500, 'easeInOutQuint');
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});