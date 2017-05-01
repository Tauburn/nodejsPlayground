$(document).ready(function() {
    // Only starts the whole fading thing if the user has js enabled.
    // Firstly hides the content of the whole page.
    $("body").css("display", "none");
    //Then fades it in
    $("body").fadeIn(500);

    //This is a click function attached at the moment to all links
    //If you wanted to extend it to only certain links replace "a" with something like "a.transition" and attached 'transition' classes to the links you want it on
    $("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(500, redirectPage);
    });
    //Just reads the redirect location from the href property of the link
    function redirectPage() {
        window.location = linkLocation;
    }
});