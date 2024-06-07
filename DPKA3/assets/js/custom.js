$(document).ready(function(){
    $("#save_email").hide();
    $("#edit_email").click(function(){
        $("#email_profile").prop('disabled', false);
        $(this).hide();
        $("#save_email").show();
    });
    $("#save_email").click(function(){
        $("#email_profile").prop('disabled', true);
        $(this).hide();
        $("#edit_email").show();
    });
    // ---
    $("#save_phone").hide();
    $("#edit_phone").click(function(){
        $("#phone_no").prop('disabled', false);
        $(this).hide();
        $("#save_phone").show();
    });
    $("#save_phone").click(function(){
        $("#phone_no").prop('disabled', true);
        $(this).hide();
        $("#edit_phone").show();
    });
    // ---
    $("#save_password").hide();
    $("#edit_password").click(function(){
        $("#password").prop('disabled', false);
        $(this).hide();
        $("#save_password").show();
    });
    $("#save_password").click(function(){
        $("#password").prop('disabled', true);
        $(this).hide();
        $("#edit_password").show();
    });

     // ---
    $("#save_language").hide();
    $("#edit_language").click(function(){
        $("#language").prop('disabled', false);
        $(this).hide();
        $("#save_language").show();
    });
    $("#save_language").click(function(){
        $("#language").prop('disabled', true);
        $(this).hide();
        $("#edit_language").show();
    });
    // ---
    $("#save_subscribe").hide();
    $("#edit_subscribe").click(function(){
        $("#subscribe").prop('disabled', false);
        $(this).hide();
        $("#save_subscribe").show();
    });
    $("#save_subscribe").click(function(){
        $("#subscribe").prop('disabled', true);
        $(this).hide();
        $("#edit_subscribe").show();
    });


});