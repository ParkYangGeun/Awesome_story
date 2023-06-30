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


var arr2=[$(".company_kind_score1"), $(".company_kind_score2"), $(".company_kind_score3"), $(".company_kind_score4"), $(".company_kind_score5")];

function kind_score_color2(n){
    
    for(var i=0; i<arr2.length; i++)
    {
        if(i<n)
        {
            arr2[i].attr("src","img/grade_icon.png");
        }
        else
        {
            arr2[i].attr("src","img/score_icon.png");
        }
    }
}


$(".company_kind_score1").on("click",function(){
    kind_score_color2(1);
})
$(".company_kind_score2").on("click",function(){
    kind_score_color2(2);
})
$(".company_kind_score3").on("click",function(){
    kind_score_color2(3);
})
$(".company_kind_score4").on("click",function(){
    kind_score_color2(4);
})
$(".company_kind_score5").on("click",function(){
    kind_score_color2(5);
})



$(".company_taste_score1").on("click",function(){
    score_color2(1);
})
$(".company_taste_score2").on("click",function(){
    score_color2(2);
})
$(".company_taste_score3").on("click",function(){
    score_color2(3);
})
$(".company_taste_score4").on("click",function(){
    score_color2(4);
})
$(".company_taste_score5").on("click",function(){
    score_color2(5);
})

var arr=[$(".company_taste_score1"), $(".company_taste_score2"), $(".company_taste_score3"), $(".company_taste_score4"), $(".company_taste_score5")];


function score_color2(n){
    
    for(var i=0; i<arr.length; i++)
    {
        if(i<n)
        {
            arr[i].attr("src","img/grade_icon.png");
        }
        else
        {
            arr[i].attr("src","img/score_icon.png");
        }
    }
}

/*
function score_color(n){
    if(n==1)
    {
        $(".company_taste_score1").attr("src","img/grade_icon.png");
        $(".company_taste_score2").attr("src","img/score_icon.png");
        $(".company_taste_score3").attr("src","img/score_icon.png");
        $(".company_taste_score4").attr("src","img/score_icon.png");
        $(".company_taste_score5").attr("src","img/score_icon.png");
    }
    else if(n==2)
    {
        $(".company_taste_score1").attr("src","img/grade_icon.png");
        $(".company_taste_score2").attr("src","img/grade_icon.png");
        $(".company_taste_score3").attr("src","img/score_icon.png");
        $(".company_taste_score4").attr("src","img/score_icon.png");
        $(".company_taste_score5").attr("src","img/score_icon.png");
    }
    else if(n==3)
    {
        $(".company_taste_score1").attr("src","img/grade_icon.png");
        $(".company_taste_score2").attr("src","img/grade_icon.png");
        $(".company_taste_score3").attr("src","img/grade_icon.png");
        $(".company_taste_score4").attr("src","img/score_icon.png");
        $(".company_taste_score5").attr("src","img/score_icon.png");
    }
    else if(n==4)
    {
        $(".company_taste_score1").attr("src","img/grade_icon.png");
        $(".company_taste_score2").attr("src","img/grade_icon.png");
        $(".company_taste_score3").attr("src","img/grade_icon.png");
        $(".company_taste_score4").attr("src","img/grade_icon.png");
        $(".company_taste_score5").attr("src","img/score_icon.png");
    }
    else if(n==5)
    {
        $(".company_taste_score1").attr("src","img/grade_icon.png");
        $(".company_taste_score2").attr("src","img/grade_icon.png");
        $(".company_taste_score3").attr("src","img/grade_icon.png");
        $(".company_taste_score4").attr("src","img/grade_icon.png");
        $(".company_taste_score5").attr("src","img/grade_icon.png");
    }
    
}
*/

/*
$(".company_taste_score1").on("click",function(){
    $(".company_taste_score1").attr("src","img/grade_icon.png");
    $(".company_taste_score2").attr("src","img/score_icon.png");
    $(".company_taste_score3").attr("src","img/score_icon.png");
    $(".company_taste_score4").attr("src","img/score_icon.png");
    $(".company_taste_score5").attr("src","img/score_icon.png");

})
$(".company_taste_score2").on("click",function(){
    $(".company_taste_score1").attr("src","img/grade_icon.png");
    $(".company_taste_score2").attr("src","img/grade_icon.png");
    $(".company_taste_score3").attr("src","img/score_icon.png");
    $(".company_taste_score4").attr("src","img/score_icon.png");
    $(".company_taste_score5").attr("src","img/score_icon.png");
})
$(".company_taste_score3").on("click",function(){
    $(".company_taste_score1").attr("src","img/grade_icon.png");
    $(".company_taste_score2").attr("src","img/grade_icon.png");
    $(".company_taste_score3").attr("src","img/grade_icon.png");
    $(".company_taste_score4").attr("src","img/score_icon.png");
    $(".company_taste_score5").attr("src","img/score_icon.png");
})
$(".company_taste_score4").on("click",function(){
    $(".company_taste_score1").attr("src","img/grade_icon.png");
    $(".company_taste_score2").attr("src","img/grade_icon.png");
    $(".company_taste_score3").attr("src","img/grade_icon.png");
    $(".company_taste_score4").attr("src","img/grade_icon.png");
    $(".company_taste_score5").attr("src","img/score_icon.png");
})
$(".company_taste_score5").on("click",function(){
    $(".company_taste_score1").attr("src","img/grade_icon.png");
    $(".company_taste_score2").attr("src","img/grade_icon.png");
    $(".company_taste_score3").attr("src","img/grade_icon.png");
    $(".company_taste_score4").attr("src","img/grade_icon.png");
    $(".company_taste_score5").attr("src","img/grade_icon.png");
})

*/


$(".in_toilet").on("click",function(){
    $(".select_btn1").attr("src","img/check_green.png");
    $(".in_text").css("color","aquamarine")
    $(".select_btn2").attr("src","img/possible_btn.png");
    $(".out_text").css("color","silver")
    $(".select_btn3").attr("src","img/possible_btn.png");
    $(".public_text").css("color","silver")
})

$(".out_toilet").on("click",function(){
    $(".select_btn2").attr("src","img/check_green.png");
    $(".out_text").css("color","aquamarine")
    $(".select_btn1").attr("src","img/possible_btn.png");
    $(".in_text").css("color","silver")
    $(".select_btn3").attr("src","img/possible_btn.png");
    $(".public_text").css("color","silver")
})

$(".public_toilet").on("click",function(){
    $(".select_btn3").attr("src","img/check_green.png");
    $(".public_text").css("color","aquamarine")
    $(".select_btn1").attr("src","img/possible_btn.png");
    $(".out_text").css("color","silver")
    $(".select_btn2").attr("src","img/possible_btn.png");
    $(".in_text").css("color","silver")
})




$(".parking_existence").on("click",function(){
    $(".parking_select_btn1").attr("src","img/check_green.png");
    $(".ex_text").css("color","aquamarine")
    $(".parking_select_btn2").attr("src","img/possible_btn.png");
    $(".no_text").css("color","silver")
})
$(".parking_noexistence").on("click",function(){
    $(".parking_select_btn2").attr("src","img/check_green.png");
    $(".no_text").css("color","aquamarine")
    $(".parking_select_btn1").attr("src","img/possible_btn.png");
    $(".ex_text").css("color","silver")
})


