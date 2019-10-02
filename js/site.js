

/* Meet the team specifics */

$(document).ready( function() {
    $('.member-cell').click(function() {

        if (!$(this).hasClass("selected")) 
        {
            $(".selected").toggleClass("selected");
            $(this).toggleClass("selected");
        }
})}
)

