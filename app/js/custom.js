$(document)
    .ready(function () {
        $('ul.sf-menu').superfish({
            delay: 1000,
            animation: {
                opacity: 'show',
                height: 'show'
            },
            speed: 'normal',
            autoArrows: false
        })
        $('.scrollpartners').bxSlider({
            minSlides: 2,
            maxSlides: 20,
            slideWidth: 170,
            slideMargin: 10,
            ticker: true,
            speed: 25000,
            autoControls: true, 
        });
    });