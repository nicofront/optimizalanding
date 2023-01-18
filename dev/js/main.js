$(document).ready(function() {

    let stage = 0;

    if($('.header--home').length > 0){
        $(window).scroll(function(){
            stage = $('.bgblock--stage').outerHeight();
            if ($(window).scrollTop() >= stage){
                $('.header').removeClass('header--home');
            }else{
                $('.header').addClass('header--home');
            }
        });
    };

    $('.bars__icon').hover(function(){
        $(this).next().addClass('active');
    },function(){
        $(this).next().removeClass('active');
    });
    $('.bars__column').hover(function(){
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active');
    });


    if($('.slider__brands').length > 0){
        $('.slider__brands').slick({
        	infinite: true,
        	slidesToShow: 5,
        	slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
    }


}); //end ready