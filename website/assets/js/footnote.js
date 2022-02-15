$(".footnote-button").each(function(i, btn){
    if (i!=0){
     $(this).attr("data-footnote-identifier",i);
    $(this).text(i);   
    }
})

var ID;

var check_pos = function() {
    var middle_of_screen = $(window).height()/2 + $(window).scrollTop();
    var button = $("[data-footnote-identifier="+ID+"]");  
    var buttonDim = button[0].getBoundingClientRect();
    $(".footnote-tip").css("left", $("aside").width()/2);
    if (button.offset().top > middle_of_screen){
      $("aside").css("bottom", $(window).height()-buttonDim.bottom+10);
      $("aside").css("top", "auto");
        $(".footnote-tip").css("top", $("#footnote-div").height()+20);
        $(".footnote-tip").css("box-shadow", "4px 2px 2px 0px rgba(0,0,0,0.2)");
    } else {
      $("aside").css("top", buttonDim.bottom+10); 
      $("aside").css("bottom", "auto");
        $(".footnote-tip").css("top", -10);
        $(".footnote-tip").css("box-shadow", "-4px -2px 2px 0px rgba(0,0,0,0.2)");
    }
    var left_of_footnote = buttonDim.left - $("aside").width()/2;
    var right_of_footnote = buttonDim.right + $("aside").width()/2;  
    if (left_of_footnote < 0){
        $("aside").css("left", 10);
    } else if (right_of_footnote > $(window).width()){
        $("aside").css("left", $(window).width() - $("aside").width()-10);
    } else{
        $("aside").css("left", buttonDim.left - $("aside").width()/2);
    }
};

$(document).on("click", function () {
    if ($(event.target).hasClass("footnote-button")){ 
        if (($("aside").hasClass("active") && ($(event.target).attr("data-footnote-identifier")===ID))){
            $("aside").removeClass("active");
        } 
        else{
            $("aside").addClass("active");
            ID = $(event.target).attr("data-footnote-identifier");
            var content = $(event.target).attr("data-footnote-content");
            $("#footnote-text").html(content);
            check_pos();
        }
    }   
    else if (!$(event.target).hasClass('footnote-content-wrapper')){
        $("aside").removeClass('active');
    };
})

$(window).scroll(function(){
    if ($("aside").hasClass("active")){
        check_pos();
    }
})