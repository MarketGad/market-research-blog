$(document).ready(function () {
    $('.slider').slider({ full_width: true });
    $('.sidenav').sidenav();
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
