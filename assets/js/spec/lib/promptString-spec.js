/* jslint node: true */
/* global describe, it */

"use strict";

var expect        = require('chai').expect;
var promptString  = require('../../lib/promptString');

describe("#text_id", function () {
  it("returns text id", function () {
    var period_text_id = promptString.text_id('psperiod');
    expect( period_text_id ).to.equal('psperiod');
  });
});

describe("#bash_string", function () {
  it("returns bash string", function () {
    var period_bash_string = promptString.bash_string('psperiod');
    expect( period_bash_string ).to.equal('.');
  });
});

describe("#example_copy", function () {
  it("returns example copy", function () {
    var period_example_copy = promptString.example_copy('psperiod');
    expect( period_example_copy ).to.equal('.');
  });
});

describe("#long_description", function () {
  it("returns description", function () {
    var period_long_description = promptString.long_description('psperiod');
    expect( period_long_description ).to.equal('period');
  });
});

describe("#helpers", function () {
  it("returns function helper", function() {
    var helper = promptString.helpers('psgit');
    expect( helper ).to.equal("function parse_git_branch { <br /> &nbsp;&nbsp; git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/' <br /> } <br />");
  });
});
