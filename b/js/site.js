/* Meet the team specifics */

$(document).ready( function() {
    setTimeout(function() {$(".home-main").toggleClass("active")}, 1000)
    setTimeout(function() {$(".home-enter").toggleClass("active").click(enterSite)}, 2000)

}
)

function enterSite() 
{
    $(".home-main").toggleClass("active")
    $(".home-enter").toggleClass("active")

    $("header").toggleClass("inactive");
    setTimeout(changePage("our-team"), 1000)
}

function changePage(pageTitle)
{
    
    $.ajax({
        url: "partials/" + pageTitle + ".html",
        context: document.main}).done(function(data) {
            $("main").html(data);
        })
        $("main").hide().removeClass("home-main").slideDown("slow");
}

