/* jslint node: true */
/* global describe, it */

"use strict";

var expect        = require('chai').expect;
var color_switch  = require('../../lib/textColor');

describe("#text_color", function () {
  it("returns the correct text color value", function () {
    var text_color = color_switch.text_color('black');
    expect( text_color ).to.equal('30');
  });
});
