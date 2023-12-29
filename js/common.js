$(function(){
    $(".main-nav").mouseenter(function(){
        $(".drop").stop().slideDown();
    })
    $(".main-nav").mouseleave(function(){
        $(".drop").stop().slideUp();
    })
})