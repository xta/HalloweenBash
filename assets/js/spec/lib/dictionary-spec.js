"use strict";

var dictionary = require('../../lib/dictionary');

describe("#lookup_bash_string", function () {
  it("returns prompt string objects dictionary", function () {

    expect(dictionary.lookup_bash_string('psperiod')).toBe('.');

  });
});
