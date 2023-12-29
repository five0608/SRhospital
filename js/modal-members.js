$(function(){
    $(".members>a:nth-child(3)").click(function(){
        $(".modal-wrap-2").css({display:"flex"});      
    })
    $(".modal-close-2").click(function(){
        $(".modal-wrap-2").hide();
    })
})