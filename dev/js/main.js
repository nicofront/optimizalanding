$(document).ready(function() {

    let stage = 0;

    $('.header__switch').click(function(event){
        event.preventDefault();
        $('.header__menu').stop().slideToggle();
    });

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


    $(window).resize(function() {
      if(window.innerWidth > 991){
        $('.header__menu').css('display', 'table');
        $('.header__menu').css('height', 'auto');
      }else{
        $('.header__menu').css('display', 'block');
        $('.header__menu').hide();
      }
      if($('.header--home').length > 0){
        stage = $('.bgblock--stage').outerHeight();
      }
    });

    $('.showmore').click(function(event){
        var self = $(this).parent();
        event.preventDefault();
        self.find('.showmore-hint').hide();
        self.find('.showmore').hide();
        self.find('.showmore-hidden').slideDown();
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



    if($('.slider__sync').length > 0){
        $('.slider__tabs').slick({
            asNavFor: '.slider__sync',
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            focusOnSelect: true
        });
        $('.slider__sync').slick({
            asNavFor: '.slider__tabs',
            infinite: false,
            arrows: false,
            draggable: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        arrows: true,
                        draggable: true,
                        dots: true
                    }
                }
            ]
        });
    }

    if($('#form-contacto').length > 0){
        $("#form-contacto").validate({
            rules: {
                nombre: {
                    required: true,
                    minlength: 2
                },
                asunto: {
                    required: true,
                    minlength: 5
                },
                mensaje: {
                    required: true,
                    minlength: 5
                },
                correo: {
                    required: true,
                    email: true
                }
            },
            messages: {
                nombre: {
                    required: "Campo requerido",
                    minlength: "Texto muy corto"
                },
                asunto: {
                    required: "Campo requerido",
                    minlength: "Texto muy corto"
                },
                mensaje: {
                    required: "Campo requerido",
                    minlength: "Texto muy corto"
                },
                correo: {
                    required: "Campo requerido",
                    email: "Ingrese un correo válido"
                }
            }
        });
    }

    if($('#form-demo').length > 0){
        $('.slider__demo').slick({
            arrows: false,
            infinite: false,
            draggable: false
        });
        $('.btn--slick--prev').click(function (event){
            event.preventDefault();
            $('.slider__demo').slick('slickPrev');
            stepUpdate();
        });
        $('.btn--slick--next').click(function (event){
            event.preventDefault();
            $('.slider__demo').slick('slickNext');
            stepUpdate();
        });
        $("#form-demo").validate({
            ignore: [],
            rules: {
                nombre: {
                    required: true,
                    minlength: 2
                },
                apellido: {
                    required: true,
                    minlength: 5
                },
                telefono: {
                    required: true,
                    minlength: 7
                },
                correo: {
                    required: true,
                    email: true
                }
            },
            messages: {
                nombre: {
                    required: "Campo requerido",
                    minlength: "Texto muy corto"
                },
                apellido: {
                    required: "Campo requerido",
                    minlength: "Texto muy corto"
                },
                telefono: {
                    required: "Campo requerido",
                    minlength: "Texto muy corto"
                },
                correo: {
                    required: "Campo requerido",
                    email: "Ingrese un correo válido"
                }
            }
        });
    }

    function stepUpdate() {
        let currentSlide = $('.slider__demo').slick('slickCurrentSlide');
        console.log('Update!');
        $('.stepper li').removeClass('stepper__current');
        $('.stepper li').eq(currentSlide).addClass('stepper__current');
    }


}); //end ready