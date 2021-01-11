// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$(document).ready(function () {
    //events table
    $('#events_list').DataTable();

    //single events table
    $("#event_id_guest_list").DataTable();

    //stream key fields
    $("#streamValueType").html("<input type=\"file\" class=\"form-control\" id=\"streamKey\" accept=\"video/*\" required/>");
    $("#stream_type").on("change", function(){
        var streamType = $(this).val();
        switch(streamType){
            case 'Live Streaming':
                $("#streamValueType").html("<input type=\"text\" class=\"form-control\" id=\"streamVideo\" placeholder=\"Enter Stream Key*\" required/>");
                break;
            case 'Video':
                $("#streamValueType").html("<input type=\"file\" class=\"form-control\" id=\"streamKey\" accept=\"video/*\" required/>");
                break;
        }
    })
});
