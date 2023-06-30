$(".header_left").on("click",function(){
    history.back();
})

$(".select_user_height").addClass("display_none");


$(".select_man").addClass("select");

$(".select_man").on("click",function(){
    if($(".select_man").hasClass("select")==false)
    $(".select_woman").removeClass("select");
    $(".select_man").addClass("select");
})

$(".select_woman").on("click",function(){
    $(".select_man").removeClass("select");
    $(".select_woman").addClass("select");
})

var str1
var str2;
var str3;
/*
$(".input_text1").on("keyup",function(){

    str1=$(".input_text1").val();

    console.log(str1);
})*/


$(".input_text1").on("keyup",function(){
    str1=$(".input_text1").val();

    if(str1.indexOf("@")!=-1&&str1.indexOf(".")!=-1){
        check_true(".possible_btn");
    }
})

$(".input_text2").on("keyup",function(){
    
    str2=$(".input_text2").val();
    check_true(".possible_btn2");
    
   // console.log(str2);
})

$(".input_text3").on("keyup",function(){

    str2=$(".input_text2").val();
    str3=$(".input_text3").val();

    if(str2 === str3)
    {
        check_true(".possible_btn3");
    }
    else{
        check_false(".possible_btn3");
    }
  //  console.log(str3);
})


var check_flag1=false;
var check_flag2=false;

$(".approve_wrap1").on("click",function(){
    if(check_flag1==false)
    {
        check_true(".possible_btn4");
        check_flag1=true;
    }
    else
    {
        check_origin(".possible_btn4");
        check_flag1=false;
    }
})

$(".approve_wrap2").on("click",function(){
    if(check_flag2==false)
    {
        check_true(".possible_btn5");
        check_flag2=true;
    }
    else
    {
        check_origin(".possible_btn5");
        check_flag2=false;
    }
})

function check_true(btn_img){
        $(btn_img).attr("src","img/check_green.png");
        $(btn_img).attr("width", "15px");
        $(btn_img).attr("height", "15px");
}

function check_false(btn_img){
    $(btn_img).attr("src","img/check_error.png");
    $(btn_img).attr("width","15px");
    $(btn_img).attr("height","15px");
}

function check_origin(btn_img){
    $(btn_img).attr("src","img/possible_btn.png");
}

    /*
    var n=0;



    for(var i=0; i<str.length; i++)
    {
        if(str[i]===str2[i])
            n++;
    }

    if(n==str.length)
    {
        $(".possible_btn3").attr("src","img/check_green.png");
        $(".possible_btn3").attr("width", "15px");
        $(".possible_btn3").attr("height", "15px");
    }
*/
/*

    if($(".input_text1").text()===$(".input_text2").text())
    {
        console.log($(".input_text2").toString());
        $(".possible_btn3").attr("src","img/check_green.png");
        $(".possible_btn3").attr("width", "15px");
        $(".possible_btn3").attr("height", "15px");
    }*/
