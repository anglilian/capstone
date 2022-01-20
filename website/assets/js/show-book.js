$(document).ready(function(){
    showhideimg ('#slimmingbutton', "#slimmingbook");
})

function showhideimg (button, img) {
    $(button).click(function(){
        $(img).show('slow')
        setTimeout( function(){
            $(img).hide('slow')
        }, 5000)
    })
}