$(document).ready(function () {
    $('.slider').slider({ full_width: true });
    $('.sidenav').sidenav();
    $('#search-icon').click(function (e) {
        $('#search-icon').hide();
        $('#comp-menu').hide();
        $('#search-div').fadeIn();
        $('#search-txt').focus();
    });
    $('#close-icon').click(function (e) {
        $('#search-div').fadeOut();
        $('#comp-menu').fadeIn();
        $('#search-icon').fadeIn();
    });
    $("#search-txt").blur(function (e) {
        $('#search-div').fadeOut();
        $('#search-icon').fadeIn();
        $('#comp-menu').fadeIn();
    })
    $(".editorpick-button").click(function (e) {
        $('.editorpick-button').addClass("editorpickactive");
        $('.latest-button').removeClass("editorpickactive");
        $('.editorpick-content').css("display", "block");
        $('.latest-content').css("display", "none");
    })
    $(".latest-button").click(function (e) {
        $('.editorpick-button').removeClass("editorpickactive");
        $('.latest-button').addClass("editorpickactive");
        $('.latest-content').css("display", "block");
        $('.editorpick-content').css("display", "none");
    })
    $('.myreviews').carousel({
        numVisible: 5,
        shift: 55,
        padding: 10,
    });
});
// JavaScript for label effects only
$(window).load(function () {
    $(".col-3 input").val("");

    $(".input-effect input").focusout(function () {
        if ($(this).val() != "") {
            $(this).addClass("has-content");
        } else {
            $(this).removeClass("has-content");
        }
    })
});
function toggleModal() {
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}
