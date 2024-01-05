$(function(){
    var $width;
    var $height;
    $width=$(".slider").width()
    $height=$width*0.2
    console.log($width)
    console.log($height)
    $(".slider").css({
        height:$height
    })

    $(window).resize(function(){
        $width=$(".slider").width()
        $height=$width*0.2
        console.log($width)
        console.log($height)
        $(".slider").css({
            height:$height
        })
    })
    

    var fadeInOutSlider=0;
    setInterval(function(){
        if(fadeInOutSlider<2){
            fadeInOutSlider++;
        }else{
            fadeInOutSlider=0;
        }
        $(".slide").eq(fadeInOutSlider).siblings().fadeOut();
        $(".slide").eq(fadeInOutSlider).fadeIn();
    },3000);
})
