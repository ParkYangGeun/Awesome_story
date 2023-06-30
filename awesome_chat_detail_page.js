$(".header_top_left").on("click",function(){
    history.back();
})

var chat;
$(".input_chat").on("keyup",function(key){
    chat=$(this).val();
    if(key.keyCode==13){
        $(".registration_chat").click();
        
    }
})

var chat_clone;
var chat_change;
var re_chat;
$(".registration_chat").on("click",function(){
    if(chat!=null)
    {
        chat_clone=$(".chatting_wrap:eq(0)").clone();

        chat_change=chat_clone.find(".chat_content");
        chat_change.text(chat);
        chat=null;
        $(".input_chat").val('');
    
        $(chat_clone).appendTo(".chatting_box");
        
    }
    $("html, body").animate({ scrollTop: $(document).height() }, 500);
})

$(".content_wrap").on("click",function(){
    $(".hidden_wrap").removeClass("display_none");
})

$(".hidden_wrap").addClass("display_none");

$(".hidden_top").on("click",function(){
    $(".hidden_wrap").addClass("display_none");
})
$(".hidden_left").on("click",function(){
    $(".hidden_wrap").addClass("display_none");
})
$(".hidden_right").on("click",function(){
    $(".hidden_wrap").addClass("display_none");
})
$(".hidden_bottom").on("click",function(){
    $(".hidden_wrap").addClass("display_none");
})

$(".peanut_grade").on("click",function(){

})

var arr=[$(".give_grade1"),$(".give_grade2"), $(".give_grade3"), $(".give_grade4"), $(".give_grade5")];

function score_color(n){
    for(var i=0; i<arr.length; i++)
    {
        if(i<n)
        {
            arr[i].attr("src","img/chat_detail_score.png");
            arr[i].css("width","45.5px");
            arr[i].css("height","46px");
        }
        else
        {
            arr[i].attr("src","img/score_icon.png");
        }
    }
}

$(".peanut_grade:eq(0)").on("click",function(){
    score_color(1)
})
$(".peanut_grade:eq(1)").on("click",function(){
    score_color(2)
})
$(".peanut_grade:eq(2)").on("click",function(){
    score_color(3)
})
$(".peanut_grade:eq(3)").on("click",function(){
    score_color(4)
})
$(".peanut_grade:eq(4)").on("click",function(){
    score_color(5)
})
