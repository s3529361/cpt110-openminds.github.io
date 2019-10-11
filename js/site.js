/* Meet the team specifics */
if ($("body").data("title") === "index") {preloadImages("homepage-hero.jpg","lachlan-picture.jpg","logo.png");}
var memberTarget;
var memberScrollOffset;

$(document).ready(function() {
    if ($("body").data("title") === "our-team") {
        $(document.body).on('click', '.member-cell' ,function(){
        if (!$(this).hasClass("selected")) 
        {
        $(".selected").toggleClass("selected");
        $(this).toggleClass("selected");
        var scrollOffset =  $(".member-scroll").scrollLeft() - $(".member-scroll").offset().left;
        $(".member-scroll").animate({
            scrollLeft: ($('#profile-' + $(this).attr("id")).position().left + scrollOffset)
        }, 500);
        }
    })}
}

)

$(window).on("load", function() {
    if ($("body").data("title") === "index") {
        if (!document.referrer.startsWith(location.origin)) {
            setTimeout(function() {$(".home-main").toggleClass("active")}, 1000)
            setTimeout(function() {$(".home-enter").toggleClass("active").click(enterSite)}, 2000)
        } else {
            $("header").toggleClass("inactive").toggleClass("noanim");
            $.ajax({
                url: "partials/home.html",
                cache: false,
                context: document.main}).done(function(data) {
                    $("main").html(data).removeClass("home-main");
                },
                )
    
    
    }
    }
}
)

function enterSite() 
{
    $(".home-main").toggleClass("active")
    $(".home-enter").toggleClass("active")

    $("header").toggleClass("inactive");
    
    $.ajax({
        url: "partials/home.html",
        cache: false,
        context: document.main}).done(function(data) {
            $("main").html(data).hide().removeClass("home-main").slideDown("slow");
            changePageCallbacks(pageTitle)
        },
        )

        
}





    function preloadImages() {
        for (var i = 0; i < arguments.length; i++) {
          $("<img />").attr("src", "img/" + arguments[i]);
        }
      }
