/* Meet the team specifics */
preloadImages("homepage-hero.jpg","lachlan-picture.jpg","logo.png");

var memberTarget;
var memberScrollOffset;

$(window).on("load", function() {
    
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

function changePageCallbacks(pageTitle) {
    switch(pageTitle) {
        case "our-team":

                $(document.body).on('click', '.member-cell' ,function(){
                    if (!$(this).hasClass("selected")) 
                    {
                    $(".selected").toggleClass("selected");
                    $(this).toggleClass("selected");
                    var scrollOffset =  $(".member-scroll").scrollLeft() - $(".member-scroll").offset().left;
                    $(".member-scroll").animate({
                        scrollLeft: ($('#profile-' + $(this).attr("id")).position().left + scrollOffset)
                    }, 1000);
                    }
                })
        break;
}

}
