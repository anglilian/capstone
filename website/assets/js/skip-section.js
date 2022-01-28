$(".author-card").click(function(){
    var sectionTitle = $(this).attr("data-section");
    $("html ,body").animate({
        scrollTop: $(sectionTitle).offset().top},
                           'slow');
})

const sectionStart = document.querySelector("#authors");

const sectionStartOptions = {}

const sectionStartObserver = new IntersectionObserver(function(entries, sectionStartObserver){
    entries.forEach(entry=>{
        if (entry.isIntersecting){
        $("#returntoauthorcardbutton").css("display", "inline-flex"); 
     } else {
        $("#returntoauthorcardbutton").css("display", "none"); 
     }
    })
}, sectionStartOptions);

sectionStartObserver.observe(sectionStart);

$("#returntoauthorcardbutton").click(function(){
   $("html ,body").animate({
        scrollTop: $("#returntoauthor").offset().top},
                           'slow'); 
})

