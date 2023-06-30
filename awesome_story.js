var menu_flag=false;

var $hidden = $("hidden_menu");
var $btn = $(".menu_icon");

$btn.on("click",function(){
    if(menu_flag==false)
    {
        $("#wrap").addClass("opacity");
        $btn.toggle();
        
        $(".hidden_wrap").animate({left:'0px'},500);
        $(".hidden_right").animate({width:'50%'},500);
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



/*

$(".menu_icon").on("click",function(){
    if(menu_flag==false)
    {
       // $(".hidden_wrap").addClass("block");
        $( ".hidden_wrap" ).slideToggle( "fast" );
        menu_flag=true;
    }
    
})
$(".hidden_right").on("click", function(){
    if(menu_flag==true)
    {
        $( ".hidden_wrap" ).slideToggle( "fast");
       // $(".hidden_wrap").removeClass("block");
        menu_flag=false;
    }
})
*/