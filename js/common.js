$(function(){
    $(".main-nav").mouseenter(function(){
        $(".drop").stop().slideDown();
    })
    $(".main-nav").mouseleave(function(){
        $(".drop").stop().slideUp();
    })
})

$(document).ready(function(){
    $(".menu-g>a").click(function(){
        if($(this).parent().find(".m-drop-down").is(":hidden")){
            $(".m-drop-down").slideUp();
            $(this).parent().find(".m-drop-down").slideDown();
            $(".arrow").removeClass("fa-angle-down").addClass("fa-angle-right")
            $(this).find(".arrow").removeClass("fa-angle-right").addClass("fa-angle-down")
        }else{
            $(".m-drop-down").slideUp();
            $(".arrow").removeClass("fa-angle-down").addClass("fa-angle-right")
        }
        
    })
    console.log(".menu-g의 수 : "+ $(".menu-g").length)   
    var $aniD=0.2;
    $(".m-open").click(function(){
        $(".mobile-content").addClass("active")
        for(var i=0; i<$(".menu-g").length ; i++){
            console.log("i : "+i)
            $aniD=$aniD+0.1;
            $(".menu-g").eq(i).find("a").css({"transition-delay":$aniD+"s"}).addClass("active")
        }
    })
    $(".m-close").click(function(){
        $(".mobile-content").removeClass("active")
        $(".menu-g>a").removeClass("active")
        $aniD=0.2;
        
    })
    
})