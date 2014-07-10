// WIP...

"use strict";

// update page function() upon page sort
  function update_page() {

    var inputs = [],
        preview = "",
        copygoeshere = "";
        helperfunctions = "";

    var color_pre,  // for copytext
        color_post,
        foreground_selected, // get currently selected element
        background_selected;

    // get current prompt string config
      $('ul#current_config li').each(function(){
        inputs.push($(this).attr('class'));
      });

    // get color configs
      $('ul#foregroundcolor li').each(function(){
        if ($(this).hasClass('selected')) {
          foreground_selected = $(this).attr("class").split(' ')[0];
        }
      });

      $('ul#backgroundcolor li').each(function(){
        if ($(this).hasClass('selected')) {
          background_selected = $(this).attr("class").split(' ')[0];
        }
      });

    // set color_pre and color_post
      if ((foreground_selected == 'none') && (background_selected == 'none')) {

        color_pre = "";
        color_post = "";

      } else {  // update css class reflect colors in #prompt & bash strings in #copytext

        var fgcolor,
            bgcolor;
        // foreground (30-37) and background (40-47)

        switch(foreground_selected) {
          case "black":
            fgcolor = "30";
            break;
          case "blue":
            fgcolor = "34";
            break;
          case "green":
            fgcolor = "32";
            break;
          case "cyan":
            fgcolor = "36";
            break;
          case "red":
            fgcolor = "31";
            break;
          case "purple":
            fgcolor = "35";
            break;
          case "brown":
            fgcolor = "33";
            break;
          case "none":
            fgcolor = "0";
            break;
          default:
            fgcolor = "0";
        }

        switch(background_selected) {
          case "black":
            bgcolor = "40";
            break;
          case "blue":
            bgcolor = "44";
            break;
          case "green":
            bgcolor = "42";
            break;
          case "cyan":
            bgcolor = "46";
            break;
          case "red":
            bgcolor = "41";
            break;
          case "purple":
            bgcolor = "45";
            break;
          case "brown":
            bgcolor = "43";
            break;
          case "none":
            bgcolor = "0";
            break;
          default:
            bgcolor = "0";
        }

        color_pre = "\\[\\e[" + fgcolor + ";" + bgcolor + "m\\]";
        color_post = "\\[\\e[0m\\]";

      }

    // update bash preview & copytext

      for (var i = 0; i < inputs.length; i++) {
        preview += psobj[inputs[i]].example_copy;
        copygoeshere += psobj[inputs[i]].bash_string;

        helper = psobj[inputs[i]].helpers;
        if (helper != undefined) {
          helperfunctions += psobj[inputs[i]].helpers;
        }
      }

      if (foreground_selected == 'none') {
        $('#prompt').css("color", default_foreground_color);
      } else {
        $('#prompt').css("color", foreground_selected);
      }

      if (background_selected == 'none') {
        $('#prompt').css("background-color", default_background_color);
      } else {
        $('#prompt').css("background-color", background_selected);
      }

      $('#prompt').html(preview);
      $('#additionaltext').html(helperfunctions);
      $('#copytext').html("export PS1=\"" + color_pre + copygoeshere + color_post + "\"");

  }
