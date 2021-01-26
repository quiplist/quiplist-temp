// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
$(document).ready(function () {
    //events table
    //$('#events_list').DataTable();

    //single events table
    //$("#event_id_guest_list").DataTable();

    //stream key fields

    var btnEdit = $( ".btn-edit" );
    for(var i = 0; i < btnEdit.length; i++){
      console.log(btnEdit.length)
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

    var checkbox = document.querySelector('#terms');
    checkbox.addEventListener('change', function (e) {
       this.checked ? $(".btn-event-code").prop('disabled', false) : $(".btn-event-code").prop('disabled', true);;
    });


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
          $(".uploadVideo_"+id).hide();
          $(".streamVideo_"+id).show();
          break;
  }
}

//require("@rails/ujs").start()
// require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
