$(document).ready(function () {
    $(".non-visible-text").hide();
    $(document).on('click', ".read", function () {
        var moreLessButton = $(".non-visible-text").is(":visible") ? 'Read More' : 'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".card-content").find(".non-visible-text").toggle();
        $(this).parent(".card-content").find(".visible-text").toggle();
    });
});