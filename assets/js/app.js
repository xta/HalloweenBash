var $         = require('jquery');
                require('jquery-ui/core');
                require('jquery-ui/mouse');
                require('jquery-ui/sortable');
                require('jquery-ui/widget');
var processor = require('./lib/processor');

$(function() {

  "use strict";

  // get initial colors
  var defaultForegroundColor  = $('#prompt').css("color"),
      defaultBackgroundColor  = $('#prompt').css("background-color");

  // set config sortable & callback
  $( "#current_config, #prompt_strings" ).sortable({
    connectWith: ".connectedSortable",
    update: function(event, ui) {
      syncPage();
    }
  }).disableSelection();

  // set foreground color callback
  $('ul#foregroundcolor > li').click(function() {
    $('ul#foregroundcolor > li').removeClass('selected');
    $(this).addClass('selected');
    syncPage();
  });

  // set background color callback
  $('ul#backgroundcolor > li').click(function() {
    $('ul#backgroundcolor > li').removeClass('selected');
    $(this).addClass('selected');
    syncPage();
  });

  var syncPage = function() {

    var config              = currentConfig(),
        foregroundSelected  = selectedForegroundColor(),
        backgroundSelected  = selectedBackgroundColor(),
        result;

    result = processor.process(config, foregroundSelected, backgroundSelected);

    return updatePage(result);
  };

  var selectedForegroundColor = function() {
    var foregroundSelected;

    $('ul#foregroundcolor li').each(function(){
      if ($(this).hasClass('selected')) {
        foregroundSelected = $(this).attr("class").split(' ')[0];
      }
    });

    return foregroundSelected;
  };

  var selectedBackgroundColor = function() {
    var backgroundSelected;

    $('ul#backgroundcolor li').each(function(){
      if ($(this).hasClass('selected')) {
        backgroundSelected = $(this).attr("class").split(' ')[0];
      }
    });

    return backgroundSelected;
  };

  var currentConfig = function() {
    var config = [];

    $('ul#current_config li').each(function(){
      config.push($(this).attr('class'));
    });

    return config;
  };

  var updatePage = function(result) {
    if (result.promptTextColor === 'none') {
      $('#prompt').css("color", defaultForegroundColor);
    } else {
      $('#prompt').css("color", result.promptTextColor);
    }

    if (result.promptBgColor === 'none') {
      $('#prompt').css("background-color", defaultBackgroundColor);
    } else {
      $('#prompt').css("background-color", result.promptBgColor);
    }

    $('#prompt').html( result.promptCopyText );
    $('#additionaltext').html( result.functionHelper );
    $('#copytext').html( result.copyText );
  };

});
