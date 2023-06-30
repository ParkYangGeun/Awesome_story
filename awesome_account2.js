$(".header_left").on("click",function(){
    history.back();
})

$(".input_text1").on("keydown",function(){
    essential_point_none(".content_box1_orangetext")
})

$(".hidden_wrap").addClass("display_none");
$(".hidden_wrap3").addClass("display_none");

function essential_point_none(n){
    $(n).addClass("display_none");
}

var hidden_flag=false;

$(".select_height").on("click",function(){
    $(".hidden_wrap").removeClass("display_none");
    hidden_flag=true;
    height=true;

    $(".select_height_top").text("키");

    $(".select_height_listbox .list_1_text").text("150~155");
    $(".select_height_listbox2 .list_1_text").text("155~160");
    $(".select_height_listbox3 .list_1_text").text("160~165");
    $(".select_height_listbox4 .list_1_text").text("165~170");
    $(".select_height_listbox5 .list_1_text").text("170~175");
    $(".select_height_listbox6 .list_1_text").text("175~180");
    $(".select_height_listbox7 .direct_input").val('');
})



$(".hidden_wrap_top").on("click",function(){

    if(hidden_flag==true){
        $(".hidden_wrap").addClass("display_none");
        $(".hidden_wrap3").addClass("display_none");
        hidden_flag=false;
    }
    select_clear()
})
$(".hidden_wrap_left").on("click",function(){

    if(hidden_flag==true){
        $(".hidden_wrap").addClass("display_none");
        $(".hidden_wrap3").addClass("display_none");
        hidden_flag=false;
    }
    select_clear()
})
$(".hidden_wrap_right").on("click",function(){

    if(hidden_flag==true){
        $(".hidden_wrap").addClass("display_none");
        $(".hidden_wrap3").addClass("display_none");
        hidden_flag=false;
    }
    select_clear()
})
$(".hidden_wrap_bottom").on("click",function(){

    if(hidden_flag==true){
        $(".hidden_wrap").addClass("display_none");
        $(".hidden_wrap3").addClass("display_none");
        hidden_flag=false;
    }
    select_clear()
})

var height_list_number=0;
var height_select_num=[];


$h3_li = $(".select_height_container3 .select_standard_listbox");
$h3_li2 = $(".select_height_container3 .select_standard_listbox2");
$h3_li3 = $(".select_height_container3 .select_standard_listbox3");
$h3_li4 = $(".select_height_container3 .select_standard_listbox4");
$h3_li5 = $(".select_height_container3 .select_standard_listbox5");

$h3_li.click(function(){
    
    if(height_select_num.length<2)
    {
        height_select_num.push(1);
    }
    else
    {
        if(height_select_num[0]==1)
        {
            $(".select_btn").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==2)
        {
            $(".select_btn2").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==3)
        {
            $(".select_btn3").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==4)
        {
            $(".select_btn4").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==5)
        {
            $(".select_btn5").attr("src","img/possible_btn.png");
        }
        height_select_num.shift();
        height_select_num.push(1);
    }
    $(".select_btn").attr("src", "img/check_green.png");
        
})
$h3_li2.click(function(){
    
    if(height_select_num.length<2)
    {
        height_select_num.push(2);
    }
    else
    {
        if(height_select_num[0]==1)
        {
            $(".select_btn").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==2)
        {
            $(".select_btn2").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==3)
        {
            $(".select_btn3").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==4)
        {
            $(".select_btn4").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==5)
        {
            $(".select_btn5").attr("src","img/possible_btn.png");
        }
        height_select_num.shift();
        height_select_num.push(2);
    }
    $(".select_btn2").attr("src", "img/check_green.png");
        
})

$h3_li3.click(function(){
    
    if(height_select_num.length<2)
    {
        height_select_num.push(3);
    }
    else
    {
        if(height_select_num[0]==1)
        {
            $(".select_btn").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==2)
        {
            $(".select_btn2").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==3)
        {
            $(".select_btn3").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==4)
        {
            $(".select_btn4").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==5)
        {
            $(".select_btn5").attr("src","img/possible_btn.png");
        }
        height_select_num.shift();
        height_select_num.push(3);
    }
    $(".select_btn3").attr("src", "img/check_green.png");
        
})

$h3_li4.click(function(){
    
    if(height_select_num.length<2)
    {
        height_select_num.push(4);
    }
    else
    {
        if(height_select_num[0]==1)
        {
            $(".select_btn").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==2)
        {
            $(".select_btn2").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==3)
        {
            $(".select_btn3").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==4)
        {
            $(".select_btn4").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==5)
        {
            $(".select_btn5").attr("src","img/possible_btn.png");
        }
        height_select_num.shift();
        height_select_num.push(4);
    }
    $(".select_btn4").attr("src", "img/check_green.png");
        
})

$h3_li5.click(function(){
    
    if(height_select_num.length<2)
    {
        height_select_num.push(5);
    }
    else
    {
        if(height_select_num[0]==1)
        {
            $(".select_btn").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==2)
        {
            $(".select_btn2").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==3)
        {
            $(".select_btn3").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==4)
        {
            $(".select_btn4").attr("src","img/possible_btn.png");
        }
        else if(height_select_num[0]==5)
        {
            $(".select_btn5").attr("src","img/possible_btn.png");
        }
        height_select_num.shift();
        height_select_num.push(5);
    }
    $(".select_btn5").attr("src", "img/check_green.png");
        
})

$(".select_height_listbox").on("click", function(){

    btn_return();
    $(".select_btn").attr("src", "img/check_green.png");
    height_list_number=1;
})

$(".select_height_listbox2").on("click", function(){

    btn_return();
    $(".select_btn2").attr("src", "img/check_green.png");
    height_list_number=2;
})

$(".select_height_listbox3").on("click", function(){

    btn_return();
    $(".select_btn3").attr("src", "img/check_green.png");
    height_list_number=3;
})

$(".select_height_listbox4").on("click", function(){

    btn_return();
    $(".select_btn4").attr("src", "img/check_green.png");
    height_list_number=4;
})

$(".select_height_listbox5").on("click", function(){

    btn_return();
    $(".select_btn5").attr("src", "img/check_green.png");
    height_list_number=5;
})
$(".select_height_listbox6").on("click", function(){

    btn_return();
    $(".select_btn6").attr("src", "img/check_green.png");
    height_list_number=6;
})

function btn_return(){
    $(".select_btn").attr("src","img/possible_btn.png");
    $(".select_btn2").attr("src","img/possible_btn.png");
    $(".select_btn3").attr("src","img/possible_btn.png");
    $(".select_btn4").attr("src","img/possible_btn.png");
    $(".select_btn5").attr("src","img/possible_btn.png");
    $(".select_btn6").attr("src","img/possible_btn.png");
    direct_height=null;
}


$(".select_height_footer").on("click",function(){

    //if(height_list_number==0)
    //$(".select_text_left").addClass("display_none");
    
    find_select();
    btn_return();


    if(hidden_flag==true){
        $(".hidden_wrap").addClass("display_none");
        hidden_flag=false;
    }
        
})

$(".select_height_footer3").on("click",function(){

    //if(height_list_number==0)
    //$(".select_text_left").addClass("display_none");
    if(standard==true)
    {
        $(".select_eval_standard .select_text_left, .select_eval_standard .select_text_right").addClass("display_none");
        $(".select_eval_standard .eval_standard_selected").empty();

        for(var j=0; j<2; j++)
        {
                if(height_select_num[j]==1)
                {
                    $(".select_eval_standard .eval_standard_selected").append(" 맛");
                }
                else if(height_select_num[j]==2)
                {
                    $(".select_eval_standard .eval_standard_selected").append(" 가격");
                }
                else if(height_select_num[j]==3)
                {
                    $(".select_eval_standard .eval_standard_selected").append(" 친절도");
                }
                else if(height_select_num[j]==4)
                {
                    $(".select_eval_standard .eval_standard_selected").append(" 화장실");
                }
                else if(height_select_num[j]==5)
                {
                    $(".select_eval_standard .eval_standard_selected").append(" 주차장");
                }
        }
        standard=false;
        $(".select_eval_standard .eval_standard_selected").removeClass("display_none");


       // var height_select_num=[];
/*
        if(height_list_number==1)
        {
            $(".select_eval_standard .eval_standard_selected").text("맛");
        }
        else if(height_list_number==2)
        {
            $(".select_eval_standard .eval_standard_selected").text("가격");
        }
        else if(height_list_number==3)
        {
            $(".select_eval_standard .eval_standard_selected").text("친절도");
        }
        else if(height_list_number==4)
        {
            $(".select_eval_standard .eval_standard_selected").text("화장실");
        }
        else if(height_list_number==5)
        {
            $(".select_eval_standard .eval_standard_selected").text("주차장");
        }
        
        standard=false;
        $(".select_eval_standard .eval_standard_selected").removeClass("display_none");

        */
    }
    btn_return();


    if(hidden_flag==true){
        $(".hidden_wrap3").addClass("display_none");
        hidden_flag=false;
    }
        
})

$(".height_selected").addClass("display_none");
$(".weight_selected").addClass("display_none");
$(".bloodtype_selected").addClass("display_none");
$(".address_selected").addClass("display_none");
$(".appearance_selected").addClass("display_none");
$(".emotion_selected").addClass("display_none");
$(".bodytype_selected").addClass("display_none");
$(".attractive_selected").addClass("display_none");



$(".hidden_wrap2").addClass("display_none");



var height = false;
var weight = false;
var bloodtype=false;
var address = false;
var apperance = false;
var emotion = false;
var bodytype = false;
var attractive = false;
var most_interest=false;
var preferd_food=false;
var standard=false;
var values=false;


function select_clear(){
    height=false;
    weight=false;
    bloodtype=false;
    address=false;
    appearance=false;
    emotion=false;
    bodytype=false;
    attractive=false;
    most_interest=false;
    preferd_food=false;
    standard=false;
    values=false;

}




function find_select(){
    if(height==true)
    {
        $(".select_height .select_text_right , .select_height .select_text_left").addClass("display_none");
        if(height_list_number==1)
        {
            $(".height_selected").text("150~155");
        }
        else if(height_list_number==2)
        {
            $(".height_selected").text("155~160");
        }
        else if(height_list_number==3)
        {
            $(".height_selected").text("160~165");
        }
        else if(height_list_number==4)
        {
            $(".height_selected").text("165~170");
        }
        else if(height_list_number==5)
        {
            $(".height_selected").text("170~175");
        }
        else if(height_list_number==6)
        {
            $(".height_selected").text("175~180");
        }
        else
        {
            $(".height_selected").text(direct_height);
        }
        height=false;
        $(".height_selected").removeClass("display_none");
    }
    else if(weight ==true)
    {
        $(".select_weight .select_text_left").addClass("display_none");

        $(".select_weight .select_text_right").addClass("display_none");

        if(height_list_number==1)
        {
            $(".select_weight .weight_selected").text("40~50");
        }
        else if(height_list_number==2)
        {
            $(".select_weight .weight_selected").text("50~60");
        }
        else if(height_list_number==3)
        {
            $(".select_weight .weight_selected").text("60~70");
        }
        else if(height_list_number==4)
        {
            $(".select_weight .weight_selected").text("70~80");
        }
        else if(height_list_number==5)
        {
            $(".select_weight .weight_selected").text("80~90");
        }
        else if(height_list_number==6)
        {
            $(".select_weight .weight_selected").text("90~100");
        }
        else
        {
            $(".select_weight .weight_selected").text(direct_height);
        }
        weight=false;
        $(".select_weight .weight_selected").removeClass("display_none");
    }
    else if(appearance==true)
    {
        $(".select_appearance .select_text_left, .select_appearance .select_text_right").addClass("display_none");

        if(height_list_number==1)
        {
            $(".select_appearance .appearance_selected").text("잘생김");
        }
        else if(height_list_number==2)
        {
            $(".select_appearance .appearance_selected").text("예쁨");
        }
        else if(height_list_number==3)
        {
            $(".select_appearance .appearance_selected").text("귀여운");
        }
        else if(height_list_number==4)
        {
            $(".select_appearance .appearance_selected").text("섹시한");
        }
        else if(height_list_number==5)
        {
            $(".select_appearance .appearance_selected").text("훈훈한");
        }
        else if(height_list_number==6)
        {
            $(".select_appearance .appearance_selected").text("청순한");
        }
        else
        {
            $(".select_appearance .appearance_selected").text(direct_height);
        }
        appearance=false;
        $(".select_appearance .appearance_selected").removeClass("display_none");
    }
    else if(emotion==true)
    {
        $(".select_emotion .select_text_left, .select_emotion .select_text_right").addClass("display_none");

        if(height_list_number==1)
        {
            $(".select_emotion .emotion_selected").text("지적인");
        }
        else if(height_list_number==2)
        {
            $(".select_emotion .emotion_selected").text("유머러스한");
        }
        else if(height_list_number==3)
        {
            $(".select_emotion .emotion_selected").text("긍정적인");
        }
        else if(height_list_number==4)
        {
            $(".select_emotion .emotion_selected").text("내성적인");
        }
        else if(height_list_number==5)
        {
            $(".select_emotion .emotion_selected").text("차분한");
        }
        else if(height_list_number==6)
        {
            $(".select_emotion .emotion_selected").text("감성적인");
        }
        else
        {
            $(".select_emotion .emotion_selected").text(direct_height);
        }
        emotion=false;
        $(".select_emotion .emotion_selected").removeClass("display_none");
    }
    else if(bodytype==true)
    {
        $(".select_bodytype .select_text_left, .select_bodytype .select_text_right").addClass("display_none");

        if(height_list_number==1)
        {
            $(".select_bodytype .bodytype_selected").text("마른");
        }
        else if(height_list_number==2)
        {
            $(".select_bodytype .bodytype_selected").text("슬림한");
        }
        else if(height_list_number==3)
        {
            $(".select_bodytype .bodytype_selected").text("보통");
        }
        else if(height_list_number==4)
        {
            $(".select_bodytype .bodytype_selected").text("통통한");
        }
        else if(height_list_number==5)
        {
            $(".select_bodytype .bodytype_selected").text("건장한");
        }
        else if(height_list_number==6)
        {
            $(".select_bodytype .bodytype_selected").text("근육질");
        }
        else
        {
            $(".select_bodytype .bodytype_selected").text(direct_height);
        }
        bodytype=false;
        $(".select_bodytype .bodytype_selected").removeClass("display_none");
    }
    else if(attractive==true)
    {
        $(".select_attractive .select_text_left, .select_attractive .select_text_right").addClass("display_none");

        if(height_list_number==1)
        {
            $(".select_attractive .attractive_selected").text("외모");
        }
        else if(height_list_number==2)
        {
            $(".select_attractive .attractive_selected").text("체형");
        }
        else if(height_list_number==3)
        {
            $(".select_attractive .attractive_selected").text("능력");
        }
        else if(height_list_number==4)
        {
            $(".select_attractive .attractive_selected").text("재력");
        }
        else if(height_list_number==5)
        {
            $(".select_attractive .attractive_selected").text("섹시");
        }
        else if(height_list_number==6)
        {
            $(".select_attractive .attractive_selected").text("애교");
        }
        else
        {
            $(".select_attractive .attractive_selected").text(direct_height);
        }
        attractive=false;
        $(".select_attractive .attractive_selected").removeClass("display_none");
    }
    else if(most_interest==true)
    {
        $(".select_most_interest .select_text_left, .select_most_interest .select_text_right").addClass("display_none");

        if(height_list_number==1)
        {
            $(".select_most_interest .most_interest_selected").text("연애");
        }
        else if(height_list_number==2)
        {
            $(".select_most_interest .most_interest_selected").text("취업");
        }
        else if(height_list_number==3)
        {
            $(".select_most_interest .most_interest_selected").text("적성");
        }
        else if(height_list_number==4)
        {
            $(".select_most_interest .most_interest_selected").text("가정사");
        }
        else if(height_list_number==5)
        {
            $(".select_most_interest .most_interest_selected").text("돈");
        }
        else if(height_list_number==6)
        {
            $(".select_most_interest .most_interest_selected").text("대인관계");
        }
        else
        {
            $(".select_most_interest .most_interest_selected").text(direct_height);
        }
        most_interest=false;
        $(".select_most_interest .most_interest_selected").removeClass("display_none");
    }

    else if(preferd_food==true)
    {
        $(".select_preferd_food .select_text_left, .select_preferd_food .select_text_right").addClass("display_none");

        if(height_list_number==1)
        {
            $(".select_preferd_food .preferd_food_selected").text("한식");
        }
        else if(height_list_number==2)
        {
            $(".select_preferd_food .preferd_food_selected").text("중식");
        }
        else if(height_list_number==3)
        {
            $(".select_preferd_food .preferd_food_selected").text("일식");
        }
        else if(height_list_number==4)
        {
            $(".select_preferd_food .preferd_food_selected").text("양식");
        }
        else if(height_list_number==5)
        {
            $(".select_preferd_food .preferd_food_selected").text("카페");
        }
        else if(height_list_number==6)
        {
            $(".select_preferd_food .preferd_food_selected").text("주류");
        }
        else
        {
            $(".select_preferd_food .preferd_food_selected").text(direct_height);
        }
        most_interest=false;
        $(".select_preferd_food .preferd_food_selected").removeClass("display_none");
    }
    
}

//$(".height_selected").on("click",function(){
//    $(".hidden_wrap").removeClass("display_none");
//    $(".direct_input").val('');
//    hidden_flag=true;
//})

var direct_height;

$(".direct_input").on("keyup",function(){
    if(height==true)
    {
        direct_height=$(".direct_input").val();    
    }
    else if(weight==true)
    {
        direct_height=$(".direct_input").val();
    }
    else if(appearance==true)
    {
        direct_height=$(".direct_input").val();
    }
    else if(emotion==true)
    {
        direct_height=$(".direct_input").val();
    }
    else if(bodytype==true)
    {
        direct_height=$(".direct_input").val();
    }
    else if(attractive==true)
    {
        direct_height=$(".direct_input").val();
    }
    else if(most_interest==true)
    {
        direct_height=$(".direct_input").val();
    }
    
})


$(".select_weight").on("click",function(){
    $(".hidden_wrap").removeClass("display_none");
    hidden_flag=true;

    weight=true;

    $(".select_height_top").text("몸무게");


    $(".select_height_listbox .list_1_text").text("40~50");
    $(".select_height_listbox2 .list_1_text").text("50~60");
    $(".select_height_listbox3 .list_1_text").text("60~70");
    $(".select_height_listbox4 .list_1_text").text("70~80");
    $(".select_height_listbox5 .list_1_text").text("80~90");
    $(".select_height_listbox6 .list_1_text").text("90~100");
    $(".select_height_listbox7 .direct_input").val('');
    btn_return();


})

$(".select_bloodtype").on("click",function(){
    $(".hidden_wrap2").removeClass("display_none");
    bloodtype=true;

})


$close=$(".close_btn");
var blood =0;

$close.click(function(){
    $(".hidden_wrap2").addClass("display_none");
    bloodtype=false;
})

$(".blood_type_a").on("click",function(){
    blood_btn_clear();
    $(".blood_type_a .select_btn_blood").attr("src","img/check_green.png");
    blood=1;
})
$(".blood_type_b").on("click",function(){
    blood_btn_clear();
    $(".blood_type_b .select_btn_blood").attr("src","img/check_green.png");
    blood=2;
})
$(".blood_type_ab").on("click",function(){
    blood_btn_clear();
    $(".blood_type_ab .select_btn_blood").attr("src","img/check_green.png");
    blood=3;
})
$(".blood_type_o").on("click",function(){
    blood_btn_clear();
    $(".blood_type_o .select_btn_blood").attr("src","img/check_green.png");
    blood=4;
})



$a_btn=$(".blood_type_a .select_btn_blood");
$b_btn=$(".blood_type_b .select_btn_blood");
$ab_btn=$(".blood_type_ab .select_btn_blood");
$o_btn=$(".blood_type_o .select_btn_blood");

function blood_btn_clear(){
    $a_btn.attr("src","img/possible_btn.png");
    $b_btn.attr("src","img/possible_btn.png");
    $ab_btn.attr("src","img/possible_btn.png");
    $o_btn.attr("src","img/possible_btn.png");
}

$(".ok_btn").on("click",function(){
    find_blood_select();

    blood_btn_clear();

    $(".hidden_wrap2").addClass("display_none");
        
    bloodtype=false;
})

function find_blood_select(){
    $(".select_bloodtype .select_text_right, .select_bloodtype .select_text_left").addClass("display_none");
    $(".select_bloodtype .bloodtype_selected").removeClass("display_none");
    if(blood==1)
    {
        $(".bloodtype_selected").text("A형");
    }
    else if(blood==2)
    {
        $(".bloodtype_selected").text("B형");
    }
    else if(blood==3)
    {
        $(".bloodtype_selected").text("AB형");
    }
    else if(blood==4)
    {
        $(".bloodtype_selected").text("O형");
    }
        
}



$(".select_appearance").on("click",function(){
    $(".hidden_wrap").removeClass("display_none");
    hidden_flag=true;
    select_clear();
    appearance=true;

    $(".select_height_top").text("외모");


    $(".select_height_listbox .list_1_text").text("잘생김");
    $(".select_height_listbox2 .list_1_text").text("예쁨");
    $(".select_height_listbox3 .list_1_text").text("귀여운");
    $(".select_height_listbox4 .list_1_text").text("섹시한");
    $(".select_height_listbox5 .list_1_text").text("훈훈한");
    $(".select_height_listbox6 .list_1_text").text("청순한");
    $(".select_height_listbox7 .direct_input").val('');
    btn_return();


})


$(".select_emotion").on("click",function(){
    $(".hidden_wrap").removeClass("display_none");
    hidden_flag=true;
    select_clear();
    emotion=true;

    $(".select_height_top").text("성격");
    $(".select_height_listbox .list_1_text").text("지적인");
    $(".select_height_listbox2 .list_1_text").text("유머러스한");
    $(".select_height_listbox3 .list_1_text").text("긍정적인");
    $(".select_height_listbox4 .list_1_text").text("내성적인");
    $(".select_height_listbox5 .list_1_text").text("차분한");
    $(".select_height_listbox6 .list_1_text").text("감성적인");
    $(".select_height_listbox7 .direct_input").val('');
    btn_return();
})

$(".select_bodytype").on("click", function(){
    $(".hidden_wrap").removeClass("display_none");
    hidden_flag=true;
    select_clear();
    bodytype=true;

    $(".select_height_top").text("체형");
    $(".select_height_listbox .list_1_text").text("마른");
    $(".select_height_listbox2 .list_1_text").text("슬림한");
    $(".select_height_listbox3 .list_1_text").text("보통");
    $(".select_height_listbox4 .list_1_text").text("통통한");
    $(".select_height_listbox5 .list_1_text").text("건장한");
    $(".select_height_listbox6 .list_1_text").text("근육질");
    $(".select_height_listbox7 .direct_input").val('');
    btn_return();
})


$(".select_attractive").on("click", function(){
    $(".hidden_wrap").removeClass("display_none");
    hidden_flag=true;
    select_clear();
    attractive=true;

    $(".select_height_top").text("매력");
    $(".select_height_listbox .list_1_text").text("외모");
    $(".select_height_listbox2 .list_1_text").text("체형");
    $(".select_height_listbox3 .list_1_text").text("능력");
    $(".select_height_listbox4 .list_1_text").text("재력");
    $(".select_height_listbox5 .list_1_text").text("섹시");
    $(".select_height_listbox6 .list_1_text").text("애교");
    $(".select_height_listbox7 .direct_input").val('');
    btn_return();
})


$(".select_most_interest").on("click", function(){
    $(".hidden_wrap").removeClass("display_none");
    hidden_flag=true;
    select_clear();
    most_interest=true;

    $(".select_height_top").text("최대관심사");
    $(".select_height_listbox .list_1_text").text("연애");
    $(".select_height_listbox2 .list_1_text").text("취업");
    $(".select_height_listbox3 .list_1_text").text("적성");
    $(".select_height_listbox4 .list_1_text").text("가정사");
    $(".select_height_listbox5 .list_1_text").text("돈");
    $(".select_height_listbox6 .list_1_text").text("대인관계");
    $(".select_height_listbox7 .direct_input").val('');
    btn_return();
})

$(".select_preferd_food").on("click", function(){
    $(".hidden_wrap").removeClass("display_none");
    hidden_flag=true;
    select_clear();
    preferd_food=true;

    $(".select_height_top").text("선호음식");
    $(".select_height_listbox .list_1_text").text("한식");
    $(".select_height_listbox2 .list_1_text").text("중식");
    $(".select_height_listbox3 .list_1_text").text("일식");
    $(".select_height_listbox4 .list_1_text").text("양식");
    $(".select_height_listbox5 .list_1_text").text("카페");
    $(".select_height_listbox6 .list_1_text").text("주류");
    $(".select_height_listbox7 .direct_input").val('');
    btn_return();
})


$(".select_eval_standard").on("click", function(){
    $(".hidden_wrap3").removeClass("display_none");
    hidden_flag=true;
    height_select_num.splice(0);
    select_clear();
    standard=true;
    

})