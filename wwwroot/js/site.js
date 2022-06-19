// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('img').click(function () {
        $(this).addClass('animate__animated animate__shakeY');
        let change = $(this);
        $.ajax({
            type: "GET",
            url: "@Url.Action("GetImage")",
            dataType: "JSON",
            async: false,
            success: function (result) {
                if ($(change).attr('id') == 'img-one') {
                    $('#img-two').attr('src', result[0]['url'])
                } else {
                    $('#img-one').attr('src', result[0]['url'])
                }
            },
            error: function(err) {
                console.log(err)
            }
        })
        $(this).on('animationend', function () {
            $(this).removeClass('animate__animated animate__shakeY');
        } )
    });
})
