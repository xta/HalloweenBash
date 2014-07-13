exports.background_color = function(background_selected) {

  "use strict";

  var bgcolor;

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

  return bgcolor;
};
