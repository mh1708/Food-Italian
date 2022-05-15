$(document).ready(function() {
    $(".navbar-toggle").click(function(e) {
        e.preventDefault();
        $(".header-menu").slideToggle("slow");
    });

    function hide_search() {
        $(".header-menu").slideUp("slow");

    }
    $(window).resize(function() {
        hide_search();
    });
    $(window).scroll(function() {
        hide_search();
    });
});