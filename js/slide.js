$(function(){
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
