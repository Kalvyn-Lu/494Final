
window.addEventListener('scroll', function(){
    var foldOutOfiew = false;

    //Value to compare current px value of the windows top
    var yPos = $(this).scrollTop();
    //The Fold, Main area of content.
    var mainMark = $("#content").offset();
    //Reuse selector.
    var introBody = $('.intro-body');

    var calc = 1 - (yPos/mainMark.top);
    $('.brand-heading').css({
        'transform' : 'translate(0px, '+ yPos /2 +'%)'
    });
    $('.intro-text').css({
        'transform' : 'translate(0px, '+ yPos /1.5 +'%)'
    });
    introBody.css({'opacity':calc +.3});
    if(calc < .1){
        introBody.fadeOut();
        $('#nav').css({'background':'rgba(186,186,186, '+ yPos/mainMark.top+')'});
    }
    if(calc > .1){
        introBody.fadeIn();
        $('#nav').css({'background':'rgba(255,255,255, 0)'});
    }
});
