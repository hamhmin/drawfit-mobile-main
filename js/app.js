$(function(){
    $('.close-btn').click(function(){
        $('#popup').fadeOut(200);
    });
    $('.gnb-btn').click(function(){
        $('.gnb').css('transform','translateX(-100%)')
    });
});