$(document).ready(function(){
    $(".nav-link, .header-arrow").on("click",function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            
        $('body,html').animate({scrollTop: top}, 800);
    });

    var grid = $('#grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        masonry: {
            horizontalOrder: true
        }
    });

    $('.slider').slick({
        infinite: true,
        arrows: false,
        dots: true
    });
});
    