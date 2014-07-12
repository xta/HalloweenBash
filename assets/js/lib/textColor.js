"use strict";

exports.text_color = function(foreground_selected) {

  var fgcolor;

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

  return fgcolor;
};
