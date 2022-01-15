const headingID = ["#background", "#noc",  "#slimming", "#goh", "#kua", "#vonvorys", "#other","#now"];
const headingName = ["Background", "The Official Report", "Malaysia: Death of a Democracy by John Slimming (1969)", "The May Thirteenth Incident and Democracy in Malaysia by Goh Cheng Teik (1971)", "May 13: Declassified Documents on the Malaysian Riots of 1969 by Kua Kia Soong (2007)", "Democracy Without Consensus: Communalism and Political Stability in Malaysia by Karl von Vorys (2015)", "Other academic works","Now what?"];
const headingPosition = [];
$.each(headingID, function(key, value){
    headingPosition.push($(key).offset().top);
});

var currentPositionID = 0;
  
$(window).scroll(function(){
    if(elementScrolled('.heading'){
       
       }
})