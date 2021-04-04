// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//require("@rails/ujs").start()
//require("turbolinks").start()
require("@rails/activestorage").start()
require('datatables.net-dt');
//require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

window.jQuery = $;
window.$ = $;

$(document).ready(function () {
    //events table
    //$('#events_list').DataTable();

    //single events table
    //$("#event_id_guest_list").DataTable();

    //stream key fields
    $('.data-table').DataTable({
    });

    var btnEdit = $( ".btn-edit" );
    for(var i = 0; i < btnEdit.length; i++){
      $( ".btn-edit" ).click(function() {

        var id = $(this).attr("id");
        var streamType = $(".stream_type_"+id).val();
        switch(streamType){
          case '0':
              $(".uploadVideo_"+id).hide();
              $(".streamVideo_"+id).hide();
              break;
          case '1':
              $(".uploadVideo_"+id).show();
              $(".streamVideo_"+id).hide();
              break;
          case '2':
          case '3':
              $(".uploadVideo_"+id).hide();
              $(".streamVideo_"+id).show();
              break;
        }
      })
    }
    // var streamType = $(".stream_type_"+id).val();
    // console.log(streamType)
    // switch(streamType){
    //     case '0':
    //         $(".uploadVideo_"+id).hide();
    //         $(".streamVideo_"+id).hide();
    //         break;
    //     case '1':
    //         $(".uploadVideo_"+id).show();
    //         $(".streamVideo_"+id).hide();
    //         break;
    //     case '2':
    //         $(".uploadVideo_"+id).hide();
    //         $(".streamVideo_"+id).show();
    //         break;
    // }
    // $("#stream_type").on("change", function(){
    //   var streamType = $(".stream_type_"+id).val();
    //   switch(streamType){
    //       case '0':
    //           $(".streamValueType_"+id).html("");
    //           break;
    //       case '1':
    //           $(".streamValueType_"+id).html("<input type=\"file\" class=\"form-control\" id=\"streamKey\" accept=\"video/*\" name=\"event[stream_video]\"/>");
    //           break;
    //       case '2':
    //           $(".streamValueType_"+id).html("<input type=\"text\" class=\"form-control\" id=\"streamVideo\" placeholder=\"Enter Stream Key\" name=\"event[stream_key]\"/>");
    //           break;
    //   }
    // });

    //animation on the reaction component
    var reactionBox = $(".reaction-main-wrapper");
    if(reactionBox !== null){
      $(".like-btn").hover(function() {
          $(".reaction-icon").each(function(index, element) {
              setTimeout(function() {
                  $(element).addClass("show");
              }, index * 50);
          });
      }, function() {
          $(".reaction-icon").removeClass("show")
      });
    }

    var checkbox = document.querySelector('#terms');
    if (checkbox !== null) {
      checkbox.addEventListener('change', function (e) {
         this.checked ? $(".btn-event-code").prop('disabled', false) : $(".btn-event-code").prop('disabled', true);;
      });
    }

    //admin dashboard user_dropdown
    var dropdown_trigger = $(".user_dropdown_wrapper i");
    if(dropdown_trigger !== null){
      $(dropdown_trigger).click(function(){
        $(".user_dropdown").toggle();
      })
    }
});

window.streamValueTypeChange = function(id) {
  var streamType = $(".stream_type_"+id).val();
  switch(streamType){
      case '0':
          $(".uploadVideo_"+id).hide();
          $(".streamVideo_"+id).hide();
          break;
      case '1':
          $(".uploadVideo_"+id).show();
          $(".streamVideo_"+id).hide();
          break;
      case '2':
      case '3':
          $(".uploadVideo_"+id).hide();
          $(".streamVideo_"+id).show();
          break;
  }
}
