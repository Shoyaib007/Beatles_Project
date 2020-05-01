$(document).ready(function(){
    var tp = $(".top");
     var b = $("#header").offset().top;
    var c = $("#header");
    
    tp.click(function(){
        $("html,body").animate({
            'scrollTop':'0'
        });
    });
    
    $(window).scroll(function(){
        var a = $(this).scrollTop();
        if( a !=0){
            tp.fadeIn();
        }
            else{
             tp.fadeOut();  
            }
        });
//    back to top
    
    
    $(window).scroll(function(){
    var d = $(this).scrollTop();
        if(b < d ){
            c.addClass("sticky");
        }
        else{
            c.removeClass("sticky");
        }
    });
//   sticky menu
     new WOW().init();
//    wow plagin
   
 });






