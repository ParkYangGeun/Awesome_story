
var menu_flag=false;

var $hidden = $("hidden_menu");
var $btn = $(".menu_icon");

$btn.on("click",function(){
    if(menu_flag==false)
    {
        $("#wrap").addClass("opacity");
        $btn.toggle();
        
        $(".hidden_menu_wrap").animate({left:'0px'},500);
        $(".hidden_menu_right").animate({width:'50%'},300);
        $(".hidden_menu").animate({width:'50%'},500);
        
        menu_flag=true;
    }
})

$(".hidden_menu_right").on("click",function(){
    if(menu_flag==true)
    {
        $("#wrap").removeClass("opacity");
        $btn.toggle();
        
        $(".hidden_menu_wrap").animate({left:'-100%'},500);
        $(".hidden_menu_right").animate({width:'100%'},500);
        $(".hidden_menu").animate({width:'0%'},500);
        menu_flag=false;
    }
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


$(".height_selected").addClass("display_none");
$(".weight_selected").addClass("display_none");
$(".bloodtype_selected").addClass("display_none");
$(".address_selected").addClass("display_none");
$(".appearance_selected").addClass("display_none");
$(".emotion_selected").addClass("display_none");
$(".bodytype_selected").addClass("display_none");
$(".attractive_selected").addClass("display_none");



$(".hidden_wrap2").addClass("display_none");


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
$(".hidden_wrap_location").addClass("display_none");



$close=$(".close_btn");
var blood =0;

$close.click(function(){
    $(".hidden_wrap2").addClass("display_none");
    $(".hidden_wrap_date").addClass("display_none");
    $(".hidden_wrap_location").addClass("display_none");
    flag_clear();
})


$(".hidden_wrap2 .ok_btn").on("click",function(){
    find_select_type();
    flag_clear();
    $(".hidden_wrap2").addClass("display_none");
        
})

$(".hidden_wrap_date .ok_btn").on("click",function(){
    find_date();
    flag_clear();
    $(".hidden_wrap_date").addClass("display_none");
})

$(".hidden_wrap_location .ok_btn").on("click",function(){
    $(".select_location .select_text_right, .select_location .select_text_left").addClass("display_none");
    $(".hidden_wrap_location").addClass("display_none");

    $(".select_location .height_selected").text(text_city);
    $(".select_location .height_selected").css("color","rgb(242,158,59)")
    $(".select_location .height_selected").removeClass("display_none");
})



function find_select_type(){

    console.log(who_flag1);
    console.log(who_flag2);
    //console.log(select_type);
    if(who_flag1==true)
    {
        $(".select_height .select_text_right , .select_height .select_text_left").addClass("display_none");
        
        $(".select_height .height_selected").text(select_type);
        $(".select_height .height_selected").css("color","rgb(242,158,59)")
        $(".select_height .height_selected").removeClass("display_none");

    }
    else if(who_flag2==true)
    {
        $(".select_weight .select_text_right, .select_weight .select_text_left").addClass("display_none");

        $(".select_weight .weight_selected").text(select_type);
        $(".select_weight .weight_selected").css("color","rgb(242,158,59)")

        $(".select_weight .weight_selected").removeClass("display_none");
    }
}


function find_date(){
    if(date_flag1 ==true)
    {
        $(".select_date .select_text_right, .select_date .select_text_left").addClass("display_none");

        $(".select_date .height_selected").text(date_se);
        $(".select_date .height_selected").css("color","rgb(242,158,59)")
        $(".select_date .height_selected").removeClass("display_none");
    }
    else if(date_flag2==true)
    {
        $(".select_time .select_text_right, .select_time .select_text_left").addClass("display_none");

        $(".select_time .weight_selected").text(select_type);
        $(".select_time .weight_selected").css("color","rgb(242,158,59)")
        $(".select_time .weight_selected").removeClass("display_none");
    }
}


var img_n;
var fileInput;
var fileInput2;
var fileInput3;
var fileInput4;
var fileInput5;
var fileInput6;


var eq_imgwrap=0;


$(".profile_img_wrap").on("click",function(){
    eq_imgwrap=0;
    //var input = $(".user_img");
    var input_img = $(this).parent();
    var input2 = input_img.children("input:eq(0)"); //=user_img 변수

    input2.click();
    img_n = this;
    fileInput=input2;
})

fileInput = document.querySelector(".user_img");

fileInput.addEventListener("change",function(e){
    var file=e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload=function(){

        //var photoFrame = document.querySelector(".profile_img_wrap");
        img_n.style=`background : url(${reader.result}); background-size : cover`;
        $(".profile_img_wrap .profile_img1").addClass("display_none");   
    }
})

$(".hidden_wrap_date").addClass("display_none");


$(".profile_img_wrap2").on("click",function(){
    var input = $(".user_img2");
    input.click();
    img_n = this;
    console.log(img_n);
    fileInput2 = document.querySelector(".user_img2");
})

$(".profile_img_wrap3").on("click",function(){
    var input = $(".user_img3");
    input.click();
    img_n = this;
    console.log(img_n);
    fileInput3 = document.querySelector(".user_img3");
})

$(".profile_img_wrap4").on("click",function(){
    var input = $(".user_img4");
    input.click();
    img_n = this;
    console.log(img_n);
    fileInput3 = document.querySelector(".user_img4");
})

$(".profile_img_wrap5").on("click",function(){
    var input = $(".user_img5");
    input.click();
    img_n = this;
    console.log(img_n);
    fileInput3 = document.querySelector(".user_img5");
})

$(".profile_img_wrap6").on("click",function(){
    var input = $(".user_img6");
    input.click();
    img_n = this;
    console.log(img_n);
    fileInput3 = document.querySelector(".user_img6");
})



fileInput2 = document.querySelector(".user_img2");
fileInput3 = document.querySelector(".user_img3");
fileInput4 = document.querySelector(".user_img4");
fileInput5 = document.querySelector(".user_img5");
fileInput6 = document.querySelector(".user_img6");




fileInput2.addEventListener("change",function(e){
    var file=e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload=function(){

        //var photoFrame = document.querySelector(".profile_img_wrap");
        img_n.style=`background : url(${reader.result}); background-size : cover`;
        $(".profile_img_wrap2 .profile_img1").addClass("display_none");   
    }
})

fileInput3.addEventListener("change",function(e){
    var file=e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload=function(){

        //var photoFrame = document.querySelector(".profile_img_wrap");
        img_n.style=`background : url(${reader.result}); background-size : cover`;
        $(".profile_img_wrap3 .profile_img1").addClass("display_none");   
    }
})

fileInput4.addEventListener("change",function(e){
    var file=e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload=function(){

        //var photoFrame = document.querySelector(".profile_img_wrap");
        img_n.style=`background : url(${reader.result}); background-size : cover`;
        $(".profile_img_wrap4 .profile_img1").addClass("display_none");   
    }
})

fileInput5.addEventListener("change",function(e){
    var file=e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload=function(){

        //var photoFrame = document.querySelector(".profile_img_wrap");
        img_n.style=`background : url(${reader.result}); background-size : cover`;
        $(".profile_img_wrap5 .profile_img1").addClass("display_none");   
    }
})

fileInput6.addEventListener("change",function(e){
    var file=e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload=function(){

        //var photoFrame = document.querySelector(".profile_img_wrap");
        img_n.style=`background : url(${reader.result}); background-size : cover`;
        $(".profile_img_wrap6 .profile_img1").addClass("display_none");   
    }
})



var who_flag1 =false,
who_flag2 = false,
date_flag1=false,
date_flag2=false,
location_flag1=false;

function flag_clear(){
    who_flag1=false;
    who_flag2=false;
    date_flag1=false;
    date_flag2=false;
    location_flag1=false;
}


var add_img =0;

$(".profile_img_wrap4").addClass("display_none");
$(".profile_img_wrap5").addClass("display_none");
$(".profile_img_wrap6").addClass("display_none");

$(".add_img_btn").on("click",function(){
    $(".profile").css("height", "60%");
    $(".profile_img_wrap4").removeClass("display_none");
    $(".profile_img_wrap5").removeClass("display_none");
    $(".profile_img_wrap6").removeClass("display_none");
})


$(".select_height").on("click",function(){
    $(".hidden_wrap2").removeClass("display_none");
    flag_clear();
    $(".hidden_wrap2 .top_banner1").click();
})
$(".select_weight").on("click",function(){
    $(".hidden_wrap2").removeClass("display_none");
    flag_clear();
    $(".hidden_wrap2 .top_banner2").click();
})

var date_se;

$(".hidden_wrap_date .top_banner2").on("click", function(){
    flag_clear();
    date_flag2=true;
    $(".top_banner1").css("border-top","0px");
    $(".top_banner1").css("color","silver");
    $(".top_banner2").css("border-top","0.5px solid rgb(242,158,59)")
    $(".top_banner2").css("color","rgb(242,158,59)");
    $(".datepicker_wrap ul").removeClass("display_none");
})




$(".hidden_wrap_date .top_banner1").on("click", function(){
    flag_clear();
    date_flag1=true;
    $(".top_banner2").css("border-top","0px");
    $(".top_banner2").css("color","silver");
    $(".top_banner1").css("border-top","0.5px solid rgb(242,158,59)")
    $(".top_banner1").css("color","rgb(242,158,59)");
    $(".datepicker_wrap ul").addClass("display_none");
    $(".datepicker_wrap").datepicker({
        dateFormat: 'yy-mm-dd' //달력 날짜 형태
        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
        ,changeYear: true //option값 년 선택 가능
        ,changeMonth: true //option값  월 선택 가능                
        ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
        ,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
        ,buttonText: "선택" //버튼 호버 텍스트              
        ,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
        ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
        ,minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
        ,onSelect:function(d){
            var arr=d.split("/");
            var year=arr[0];
            var month=arr[1];
            var day=arr[2];

            date_se=year;
        }
    }
    );
    $(".datepicker_wrap").datepicker('setDate','today');
})

$(".select_date").on("click",function(){
    $(".hidden_wrap_date").removeClass("display_none");
    flag_clear();
    $(".hidden_wrap_date .top_banner1").click();
    date_flag1=true;
    
})

$(".select_time").on("click",function(){
    $(".hidden_wrap_date").removeClass("display_none");
    flag_clear();
    date_flag2=true;
    $(".hidden_wrap_date .top_banner2").click();
})

$(".select_location").on("click",function(){
    $(".hidden_wrap_location").removeClass("display_none");
    flag_clear();
    location_flag1=true;
})

$(".select_location_wrap .select_type1:eq(0)").on("click",function(){
    $(".hidden_wrap").removeClass("display_none");
    $(".hidden_wrap").css("z-index","999");
})

var select_type;
$(".select_type1").on("click",function(){
    $(".select_type1").css("border","0.5px solid silver");
    $(".select_type1").css("color","silver");
    $(this).css("border","0.5px solid rgb(242,158,59)");
    $(this).css("color","rgb(242,158,59");

    select_type=$(this).text();
})

$(".hidden_wrap2 .top_banner1").on("click", function(){
    who_flag=false;
    who_flag1=true;
    
    $(".top_banner2").css("border-top","0px");
    $(".top_banner2").css("color","silver");
    $(".top_banner1").css("border-top","0.5px solid rgb(242,158,59)")
    $(".top_banner1").css("color","rgb(242,158,59)")

    if(who_flag1==true)
    {
        $(".select_type1:eq(0)").text("20대");
        $(".select_type1:eq(1)").text("30대");
        $(".select_type1:eq(2)").text("20~30대");
        $(".select_type1:eq(3)").text("");
    }
})

$(".hidden_wrap2 .direct_input_type").on("keyup",function(){
    select_type=$(this).val();
})


$(".hidden_wrap2 .top_banner2").on("click", function(){
    who_flag1=false;
    who_flag2=true;
    $(".top_banner1").css("border-top","0px");
    $(".top_banner1").css("color","silver");
    $(".top_banner2").css("border-top","0.5px solid rgb(242,158,59)")
    $(".top_banner2").css("color","rgb(242,158,59)")

    if(who_flag2==true)
    {
        $(".select_type1:eq(0)").text("남1 여1");
        $(".select_type1:eq(1)").text("남2 여2");
        $(".select_type1:eq(2)").text("남3 여3");
        $(".select_type1:eq(3)").val("");
    }
    
})

var text_city;

//$(".select_height_list1:eq(0)").on("click", function(){
//    text_city=$(this).children("span").text();
//    $(this).children("img").attr("src","img/check_green.png");
//})
click_nth_list(".select_height_list1:eq(0)");
click_nth_list(".select_height_list1:eq(1)");
click_nth_list(".select_height_list1:eq(2)");
click_nth_list(".select_height_list1:eq(3)");
click_nth_list(".select_height_list1:eq(4)");
click_nth_list(".select_height_list1:eq(5)");
click_nth_list(".select_height_list1:eq(6)");
click_nth_list(".select_height_list1:eq(7)");
click_nth_list(".select_height_list1:eq(8)");
click_nth_list(".select_height_list1:eq(9)");
click_nth_list(".select_height_list1:eq(10)");
click_nth_list(".select_height_list1:eq(11)");
click_nth_list(".select_height_list1:eq(12)");
click_nth_list(".select_height_list1:eq(13)");

function click_nth_list(a){
    $(a).on("click",function(){
        text_city=$(this).children("span").text();
        $(".select_height_container img").attr("src","img/possible_btn.png");
        $(this).children("img").attr("src","img/check_green.png");
    })
}

$(".select_height_footer").on("click",function(){
    $(".select_location_wrap .select_type1:eq(0)").text(text_city);
    $(".hidden_wrap").addClass("display_none");
})

var user_location_input;

$(".input_location_text").on("keyup",function(){
    user_location_input = $(".input_location_text").val();
    console.log(user_location_input);
})

$(".hidden_wrap_food").addClass("display_none");

$(".select_food").on("click", function(){
    $(".hidden_wrap_food").removeClass("display_none");
})

var select_food_type;

$(".select_food_wrap .select_type1").on("click", function(){
    $(this).css("border","0px");
    select_food_type=$(this).text();
    var a=$(this).children(".food_type");
    $(a).css("border","0.5px solid rgb(242,158,59)")
    $(a).children("img").attr("src","img/recruitment_foodtype_select.png");
    console.log(this);
    $(".select_food_wrap .select_type1").not(this).addClass("display_none");
    $(this).parent().css("margin","0 auto");
    $(this).parent().css("float","none");
    
    
    $(".input_food").removeClass("display_none");
})
$(".input_food").addClass("display_none");

$(".hidden_wrap_food .ok_btn").on("click",function(){
    $(".select_food .select_text_right, .select_food .select_text_left").addClass("display_none");

    $(".select_food .height_selected").text(select_food_type);
    $(".select_food .height_selected").css("color","rgb(242,158,59)")
    $(".select_food .height_selected").removeClass("display_none");
    $(".hidden_wrap_food").addClass("display_none");
})
$(".hidden_wrap_food .close_btn").on("click",function(){
    $(".hidden_wrap_food").addClass("display_none");
})


$(".hidden_wrap_how .close_btn").on("click",function(){
    $(".hidden_wrap_how").addClass("display_none");
})

$(".select_how_wrap .select_type1:eq(1)").css("float","right");
$(".select_how_wrap .how_type:eq(1)").css("margin","0 auto");

$(".select_how_wrap .select_type1:eq(3)").css("float","right");
$(".select_how_wrap .how_type:eq(3)").css("margin","0 auto");

var select_how_type;

$(".hidden_wrap_how .select_type1").on("click",function(){
    $(".hidden_wrap_how .select_type1").css("border","0px");
    var b=$(this).children(".how_type");
    $(".hidden_wrap_how .how_type").css("border","0.5px solid silver")
    $(b).css("border","0.5px solid rgb(242,158,59)");
    select_how_type=$(this).text();
})

$(".hidden_wrap_how").addClass("display_none");
$(".select_how").on("click",function(){
    $(".hidden_wrap_how").removeClass("display_none");
})

$(".hidden_wrap_how .ok_btn").on("click",function(){
    $(".select_how .select_text_right, .select_how .select_text_left").addClass("display_none");

    $(".select_how .height_selected").text(select_how_type);
    $(".select_how .height_selected").css("color","rgb(242,158,59)")
    $(".select_how .height_selected").removeClass("display_none");
    $(".hidden_wrap_how").addClass("display_none");
})

$(".hidden_wrap_why .close_btn").on("click",function(){
    $(".hidden_wrap_why").addClass("display_none");
})
$(".hidden_wrap_why").addClass("display_none");

$(".select_why").on("click",function(){
    $(".hidden_wrap_why").removeClass("display_none");
})

var select_eval;


$(".select_why_wrap .select_type1:eq(0)").on("click",function(){
    $(".input_why_list").attr("placeholder","맛을 입력해주세요");
    select_eval=1;
})
$(".select_why_wrap .select_type1:eq(1)").on("click",function(){
    $(".input_why_list").attr("placeholder","가격을 입력해주세요")
    select_eval=2;
})
$(".select_why_wrap .select_type1:eq(2)").on("click",function(){
    $(".input_why_list").attr("placeholder","친절도를 입력해주세요")
    select_eval=3;
})
$(".select_why_wrap .select_type1:eq(3)").on("click",function(){
    $(".input_why_list").attr("placeholder","화장실 유무를 입력해주세요")
    select_eval=4;
})
$(".select_why_wrap .select_type1:eq(4)").on("click",function(){
    $(".input_why_list").attr("placeholder","주차장 유무를 입력해주세요")
    select_eval=5;
})
var input_eval1,
input_eval2,
input_eval3,
input_eval4,
input_eval5;

function input_clear(){
    input_eval1=null;
    input_eval2=null;
    input_eval3=null;
    input_eval4=null;
    input_eval5=null;
    $(".input_why_list").val('');
}

var taste_eval=false;
var price_eval=false;
var kind_eval=false;
var toilet_eval=false;
var parking_eval=false;

var input_total="";
$(".input_why_list").on("keyup",function(){
    if(select_eval==1)
    {
        input_eval1=$(".input_why_list").val();
        //if(input_eval1.length>0)
        console.log(input_eval1);
    }
    else if(select_eval==2)
    {
        input_eval2=$(".input_why_list").val();
    }
    else if(select_eval==3)
    {
        input_eval3=$(".input_why_list").val();
    }
    else if(select_eval==4)
    {
        input_eval4=$(".input_why_list").val();
    }
    else if(select_eval==5)
    {
        input_eval5=$(".input_why_list").val();
    }
})

$(".input_btn").on("click",function(){
    //if(select_eval==1)
    if(input_eval1!=null)
    {
        input_total+="맛 ";
        input_clear();
        
    }
    if(input_eval2!=null)
    {
        input_total+="가격 ";
        input_clear();
    }
    if(input_eval3!=null)
    {
        input_total+="친절도 ";
        input_clear();
    }
    if(input_eval4!=null)
    {
        input_total+="화장실 ";
        input_clear();
    }
    if(input_eval5!=null)
    {
        input_total+="주차장 ";
        input_clear();
    }
    
})

$(".hidden_wrap_why .ok_btn").on("click",function(){
    $(".select_why .select_text_right, .select_why .select_text_left").addClass("display_none");

    $(".select_why .height_selected").text(input_total);
    $(".select_why .height_selected").css("color","rgb(242,158,59)")
    $(".select_why .height_selected").removeClass("display_none");
    $(".hidden_wrap_why").addClass("display_none");
})
