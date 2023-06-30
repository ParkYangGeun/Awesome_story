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
$(".hidden_notice_list").addClass("display_none");
var spread_flag = false;
$(".main_content1").first().on("click",function(){
    
    if(spread_flag==false)
    {
        //$(".hidden_notice_list").removeClass("display_none");
        $(".hidden_notice_list").slideDown(300);
        $(".event_spread_icon2").attr("src","img/spread_in_icon.png");
        spread_flag=true;
    }
    else{
        //$(".hidden_notice_list").addClass("display_none");
        $(".hidden_notice_list").slideUp(300);
        $(".event_spread_icon2").attr("src","img/notice_text_spread_btn.png");
        spread_flag=false;
    }
})

$(".close_btn").on("click",function(){
    $(".hidden_notice_list").slideUp(300);
        $(".event_spread_icon2").attr("src","img/notice_text_spread_btn.png");
        spread_flag=false;
})

$(".coupon_empty").addClass("display_none");