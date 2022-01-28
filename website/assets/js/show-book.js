$(document).ready(function(){
    showhideimg ('#slimmingbutton', "#slimmingbook");
})
$(document).ready(function(){
    showhideimg ('#gohbutton', "#gohbook");
})
$(document).ready(function(){
    showhideimg ('#kuabutton', "#kuabook");
})
$(document).ready(function(){
    showhideimg ('#vonvorysbutton', "#vonvorysbook");
})

function showhideimg (button, img) {
    $(button).click(function(){
        $(img).show('slow')
        setTimeout( function(){
            $(img).hide('slow')        }, 5000)
    })
}