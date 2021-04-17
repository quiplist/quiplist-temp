// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//require("@rails/ujs").start()
//require("turbolinks").start()
require("@rails/activestorage").start()
require('datatables.net');
// require("chartkick/chart.js")
// require("chartkick")
// require("chart.js")
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

var filteredEvent = ["Queued", "On Going", "Done"];
var filteredUser = ["true", "false"];
var filteredGuestList = ["Pending", "Approved", "Denied"];
var filteredRaffle = ["Random Names", "Spin a Wheel", "Lotto"];
var filteredQuestionnaire = ["Multiple Choice", "Yes or No", "Indentification", "Select Letters", "Question and Answer", "Poll"];

$.fn.dataTable.ext.search.push(
  function( settings, searchData, index, rowData, counter ) {
    // Don't display rows if nothing is checked
    console.log(settings.nTable.id)
    if (settings.nTable.id === "events_list") {
      if (filteredEvent.length === 0 ) {
        return false;
      }
      if (filteredEvent.includes(searchData[4])) {
        return true;
      }
    } else if ((settings.nTable.id === "user_list") || settings.nTable.id === "admin_list") {
      if (filteredUser.length === 0 ) {
        return false;
      }
      if (filteredUser.includes(searchData[2])) {
        return true;
      }

    } else if (settings.nTable.id === "event_id_guest_list") {
      if ((filteredGuestList.length === 0) || (filteredRaffle.length === 0) || (filteredQuestionnaire.length === 0) ) {
        return false;
      }
      if ((filteredGuestList.includes(searchData[0])) || (filteredRaffle.includes(searchData[0])) || (filteredQuestionnaire.includes(searchData[0]))) {
        return true;
      }
    } else {
      return true;
    }
    return false;
  }
);

$(document).ready(function () {
    var eventDT = $('.event-data-table').DataTable({
      dom: 'fl<"event toolbar">rtip',
      pagingType: "full_numbers",
      "columnDefs": [
            {
                "targets": [ 4 ],
                "visible": false
            },
        ]
    });

    $("div.event.toolbar").html("\
      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic checkbox toggle button group\">\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterEvent\" id=\"btncheck1\" name=\"type\" value=\"Queued\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck1\">Queued</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterEvent\" id=\"btncheck2\" name=\"type\" value=\"On Going\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck2\">On Going</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterEvent\" id=\"btncheck3\" name=\"type\" value=\"Done\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck3\">Done</label>\
        </div>\
      </div>\
    ");

    $('.filterEvent').on('change', function() {
      var val = $(this).val();
      var checked = $(this).prop('checked');
      var index = filteredEvent.indexOf( val );

      if (checked && index === -1) {
        filteredEvent.push(val);
      } else if (!checked && index > -1) {
        filteredEvent.splice(index, 1);
      }
      eventDT.draw();
    });

    var userDT = $('.user-data-table').DataTable({
      dom: 'fl<"user toolbar">rtip',
      pagingType: "full_numbers",
      "columnDefs": [
            {
                "targets": [ 2 ],
                "visible": false
            },
        ]
    });

    $("div.user.toolbar").html("\
      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic checkbox toggle button group\">\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterUser\" id=\"btncheck1\" name=\"resetPassword\" value=\"true\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck1\">Reset Password</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterUser\" id=\"btncheck2\" name=\"resetPassword\" value=\"false\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck2\">All</label>\
        </div>\
      </div>\
    ");

    $('.filterUser').on('change', function() {
      var val = $(this).val();
      var checked = $(this).prop('checked');
      var index = filteredUser.indexOf( val );

      if (checked && index === -1) {
        filteredUser.push(val);
      } else if (!checked && index > -1) {
        filteredUser.splice(index, 1);
      }
      userDT.draw();
    });


    var guestDT = $('.guest-data-table').DataTable({
      dom: 'fl<"guest toolbar">rtip',
      pagingType: "full_numbers",
      "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": false
            },
        ]
    });

    $("div.guest.toolbar").html("\
      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic checkbox toggle button group\">\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterGuestList\" id=\"btncheck1\" name=\"type\" value=\"Pending\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck1\">Pending</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterGuestList\" id=\"btncheck2\" name=\"type\" value=\"Approved\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck2\">Approved</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterGuestList\" id=\"btncheck3\" name=\"type\" value=\"Denied\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck3\">Denied</label>\
        </div>\
      </div>\
    ");

    $('.filterGuestList').on('change', function() {
      var val = $(this).val();
      var checked = $(this).prop('checked');
      var index = filteredGuestList.indexOf( val );

      if (checked && index === -1) {
        filteredGuestList.push(val);
      } else if (!checked && index > -1) {
        filteredGuestList.splice(index, 1);
      }
      guestDT.draw();
    });

    var raffleDT = $('.raffle-data-table').DataTable({
      dom: 'fl<"raffle toolbar">rtip',
      pagingType: "full_numbers",
    });

    $("div.raffle.toolbar").html("\
      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic checkbox toggle button group\">\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterRaffle\" id=\"btncheck4\" name=\"type\" value=\"Random Names\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck4\">Random Names</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterRaffle\" id=\"btncheck5\" name=\"type\" value=\"Spin a Wheel\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck5\">Spin a Wheel</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterRaffle\" id=\"btncheck6\" name=\"type\" value=\"Lotto\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck6\">Lotto</label>\
        </div>\
      </div>\
    ");

    $('.filterRaffle').on('change', function() {
      var val = $(this).val();
      var checked = $(this).prop('checked');
      var index = filteredRaffle.indexOf( val );

      if (checked && index === -1) {
        filteredRaffle.push(val);
      } else if (!checked && index > -1) {
        filteredRaffle.splice(index, 1);
      }
      raffleDT.draw();
    });

    var questionnaireDT = $('.questionnaire-data-table').DataTable({
      dom: 'fl<"questionnaire toolbar">rtip',
      pagingType: "full_numbers",
    });

    $("div.questionnaire.toolbar").html("\
      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic checkbox toggle button group\">\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterQuestionnaire\" id=\"btncheck7\" name=\"type\" value=\"Multiple Choice\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck7\">Multiple Choice</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterQuestionnaire\" id=\"btncheck8\" name=\"type\" value=\"Yes or No\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck8\">Yes or No</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterQuestionnaire\" id=\"btncheck9\" name=\"type\" value=\"Indentification\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck9\">Indentification</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterQuestionnaire\" id=\"btncheck10\" name=\"type\" value=\"Select Letters\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck10\">Select Letters</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterQuestionnaire\" id=\"btncheck11\" name=\"type\" value=\"Question and Answer\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck11\">Question and Answer</label>\
        </div>\
        <div>\
          <input type=\"checkbox\" class=\"btn-check filterQuestionnaire\" id=\"btncheck12\" name=\"type\" value=\"Poll\" checked>\
          <label class=\"btn btn-outline-primary\" for=\"btncheck12\">Poll</label>\
        </div>\
      </div>\
    ");

    $('.filterQuestionnaire').on('change', function() {
      var val = $(this).val();
      var checked = $(this).prop('checked');
      var index = filteredQuestionnaire.indexOf( val );

      if (checked && index === -1) {
        filteredQuestionnaire.push(val);
      } else if (!checked && index > -1) {
        filteredQuestionnaire.splice(index, 1);
      }
      questionnaireDT.draw();
    });

    var dT = $('.data-table').DataTable({
      dom: 'flrtip',
      pagingType: "full_numbers",
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

    //admin dashboard questionnaire
    var raffle_slct = $("#raffle_choices");
    if(raffle_slct.length > 0){
        $(".multiple-choice-wrapper").addClass("show-question");

        $("#raffle_choices").on("change", function(){
            var raffle_val = $(this).val()
            switch(raffle_val) {
                // multiple choice
                case '0':
                    $(".multiple-choice-wrapper").addClass("show-question");
                    $(".yes-no-wrapper").removeClass("show-question");
                    $(".identification-wrapper").removeClass("show-question");
                    $(".poll-wrapper").removeClass("show-question");
                    $(".select-letters-wrapper").removeClass("show-question");
                    break;
                // yes or no
                case '1':
                    $(".yes-no-wrapper").addClass("show-question");
                    $(".multiple-choice-wrapper").removeClass("show-question");
                    $(".identification-wrapper").removeClass("show-question");
                    $(".poll-wrapper").removeClass("show-question");
                    $(".select-letters-wrapper").removeClass("show-question");
                    break;
                //identification
                case '2':
                    $(".identification-wrapper").addClass("show-question");
                    $(".multiple-choice-wrapper").removeClass("show-question");
                    $(".yes-no-wrapper").removeClass("show-question");
                    $(".poll-wrapper").removeClass("show-question");
                    $(".select-letters-wrapper").removeClass("show-question");
                    break;
                //select letters
                case '3':
                  $(".select-letters-wrapper").addClass("show-question");
                  $(".multiple-choice-wrapper").removeClass("show-question");
                  $(".yes-no-wrapper").removeClass("show-question");
                  $(".poll-wrapper").removeClass("show-question");
                  $(".identification-wrapper").removeClass("show-question");
                  break;
                //poll
                case '5':
                    $(".poll-wrapper").addClass("show-question");
                    $(".multiple-choice-wrapper").removeClass("show-question");
                    $(".yes-no-wrapper").removeClass("show-question");
                    $(".identification-wrapper").removeClass("show-question");
                    $(".select-letters-wrapper").removeClass("show-question");
                    break;
                default:
                    console.log("mc");
            }
        })
    }

    //admin dashboard status

    var eventForm = $('.event-status');
    if(eventForm.length > 0){
        for(var i = 0; i <= eventForm.length; i++){
            var eventValue = $('select#'+i);
            console.log(eventForm.length)
            console.log(eventValue.val())
            switch(eventValue.val()){
                case '0':
                        eventValue.addClass('queued');
                        eventValue.removeClass('going');
                        eventValue.removeClass('done');
                    break;
                case '1':
                        eventValue.addClass('going');
                        eventValue.removeClass('queued');
                        eventValue.removeClass('done');
                    break;
                case '2':
                        eventValue.addClass('done');
                        eventValue.removeClass('queued');
                        eventValue.removeClass('going');
                    break;
                default :
                    break;
            }
        }
    }

    var wheel = $('#wheel canvas');
    if(wheel.length > 0){
      var ctx = wheel[0].getContext('2d');
        // ctx.canvas.height = 600;
        // ctx.canvas.width = 600;
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
