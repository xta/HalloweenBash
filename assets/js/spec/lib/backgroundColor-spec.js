/* jslint node: true */
/* global describe, it */

"use strict";

var expect        = require('chai').expect;
var color_switch  = require('../../lib/backgroundColor');

describe("#background_color", function () {
  it("returns the correct background color value", function () {
    var background_color = color_switch.background_color('black');
    expect( background_color ).to.equal('40');
  });
});
