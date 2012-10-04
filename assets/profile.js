/*
HalloweenBash 2012 by rexfeng

functions
=========
keep terminal display & output copy in sync
wrap terminal text if chars > 80
get current time
onclick #copytext, select all text
*/

$(document).ready(function() {

	$(function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });


});
