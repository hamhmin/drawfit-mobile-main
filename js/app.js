$(function(){
    $('.close-btn').click(function(){
        $('#popup').fadeOut(200);
    });
    $('.gnb-btn').click(function(){
        $('.gnb').css('transform','translateX(-100%)')
    });
    $('.btn-close').click(function(){
        $('.gnb').css('transform','translateX(0%)')
    });
    $('.bi-search').click(function(){
        // 검색창 등장
        $('*').stop();
        $('.container').css({'opacity':'1','display':'flex','transition':'0.8s'});
        $('.container input').css({'display':'flex','width':'80vw','transition':'0.8s'});
        $('.search .bi-search').css({'display':'none','transition':'0.8s'});
        $('.search-x').css({'display':'block','transition':'0.8s'});
    });
    $('.search-x').click(function(){
        $('*').stop();
        $('.container').css('opacity','0');
        $('.container').css({'transition':'0.8s'});
        $('.container input').css({'width':'0px','transition':'0.8s'});
        $('.bi-search').css({'display':'block','transition':'0.8s'});
        $('.search-x').css({'display':'none','transition':'0.8s'});
    });
});