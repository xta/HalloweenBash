"use strict";

/* HalloweenBash by rexfeng */
$(document).ready(function() {

  // get initial configs state
  var start_config_avail = $('#customize').html(),
      default_foreground_color = $('#prompt').css("color"),
      default_background_color = $('#prompt').css("background-color");

  // enable sortable lists with jquery-ui
  $(function() {
    $( "#current_config, #prompt_strings" ).sortable({
      connectWith: ".connectedSortable",
      update: function(event, ui) {
        update_page();
      }
    }).disableSelection();
  });

  // on click for #colorpick for each <ul>
  $('ul#foregroundcolor > li').click(function() {
    $('ul#foregroundcolor > li').removeClass('selected');
    $(this).addClass('selected');
    update_page();
  });

  $('ul#backgroundcolor > li').click(function() {
    $('ul#backgroundcolor > li').removeClass('selected');
    $(this).addClass('selected');
    update_page();
  });

}); // end DOM ready
