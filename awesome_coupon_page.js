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
var a =$(".coupon_list li").length;
$(".coupon_empty").addClass("display_none");

$(".coupon_list li").not(".used_coupon_list, .expiration_coupon_list").on("click",function(){

    $(this).addClass("display_none");
    coupon_empty();
})

function coupon_empty(){
    if(a!=1)
    {
        a--;
    }
    else
    {
        $(".coupon_empty").removeClass("display_none");
    }
}

$(".used_coupon_list").on("click",function(){
    $(this).css("background","rgba(221,221,221,0.6)");
    $(this).css("color","silver");
    $(".used_coupon").removeClass("display_none");
    
    var delete_btn =$(this).find(".delete_btn");
    delete_btn.removeClass("display_none");
})

$(".used_coupon").addClass("display_none");
$(".delete_btn").addClass("display_none");
$(".ex_coupon").addClass("display_none");

$(".delete_btn").on("click",function(){
    //$(".used_coupon_list").addClass("display_none");
    var parents_list = $(this).parents("li").addClass("display_none");
    coupon_empty();
})

$(".expiration_coupon_list").on("click",function(){
    $(this).css("background","rgba(221,221,221,0.6)");
    $(this).css("color","silver");
    $(".ex_coupon").removeClass("display_none");
    //$(".delete_btn").removeClass("display_none");
    var delete_btn=$(this).find(".delete_btn");
    delete_btn.removeClass("display_none");
    
})
