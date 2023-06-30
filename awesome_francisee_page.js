var menu_flag=false;

var $hidden = $("hidden_menu");
var $btn = $(".menu_icon");

$btn.on("click",function(){
    if(menu_flag==false)
    {
        $("#wrap").addClass("opacity");
        $btn.toggle();
        
        $(".hidden_wrap").animate({left:'0px'},500);
        $(".hidden_right").animate({width:'50%'},300);
        $(".hidden_menu").animate({width:'50%'},500);
        
        menu_flag=true;
    }
})

$(".hidden_right").on("click",function(){
    if(menu_flag==true)
    {
        $("#wrap").removeClass("opacity");
        $btn.toggle();
        
        $(".hidden_wrap").animate({left:'-100%'},500);
        $(".hidden_right").animate({width:'100%'},500);
        $(".hidden_menu").animate({width:'0%'},500);
        menu_flag=false;
    }
})

$(".registration_wrap").addClass("display_none");

$(".question_send_btn").on("click",function(){
    $(".registration_wrap").removeClass("display_none");
})

$(".registration_left").on("click",function(){
    $(".registration_wrap").addClass("display_none");
})

$(".registration_top").on("click",function(){
    $(".registration_wrap").addClass("display_none");
})

$(".registration_right").on("click",function(){
    $(".registration_wrap").addClass("display_none");
})

$(".registration_bottom").on("click",function(){
    $(".registration_wrap").addClass("display_none");
})

$("go_couponpage_btn").on("click",function(){
    $(".registration_wrap").addClass("display_none");
    
})