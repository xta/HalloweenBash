"use strict";

var processor = require('../../lib/processor');

describe("#process", function () {

  describe("default config", function() {
    it("returns correct output", function () {
      var config              = ['psh', 'pscolon', 'psworking', 'psspace', 'psu', 'psdollar'],
          foreground_selected = 'none',
          background_selected = 'none';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).toBe('none');
      expect( result.promptBgColor ).toBe('none');
      expect( result.promptCopyText ).toBe('macbook:HalloweenBash&nbsp;jon$&nbsp;');
      expect( result.functionHelper ).toBe('');
      expect( result.copyText ).toBe('export PS1="\\h:\\W \\u\\\\$ "');
    });
  });

  describe("a sample config with colors", function() {
    it("returns correct output", function () {
      var config              = ['psh', 'psworking', 'pscolon', 'psspace', 'psu', 'psdollar'],
          foreground_selected = 'blue',
          background_selected = 'red';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).toBe('blue');
      expect( result.promptBgColor ).toBe('red');
      expect( result.promptCopyText ).toBe('macbookHalloweenBash:&nbsp;jon$&nbsp;');
      expect( result.functionHelper ).toBe('');
      expect( result.copyText ).toBe('export PS1="\\[\\e[34;41m\\]\\h\\W: \\u\\\\$ \\[\\e[0m\\]"');
    });
  });

  describe("a sample config with only text color set", function() {
    it("returns correct output", function () {
      var config              = ['psh', 'pscolon', 'psworking', 'psspace', 'psu', 'psspace', 'psleftbrace', 'psv', 'psrightbrace', 'psdollar'],
          foreground_selected = 'cyan',
          background_selected = 'none';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).toBe('cyan');
      expect( result.promptBgColor ).toBe('none');
      expect( result.promptCopyText ).toBe('macbook:HalloweenBash&nbsp;jon&nbsp;{3.2}$&nbsp;');
      expect( result.functionHelper ).toBe('');
      expect( result.copyText ).toBe('export PS1="\\[\\e[36;0m\\]\\h:\\W \\u {\\v}\\\\$ \\[\\e[0m\\]"');
    });
  });

  describe("a sample config with only background color set", function() {
    it("returns correct output", function () {
      var config              = ['pstime24hhmm', 'pshash', 'psbang', 'pscolon', 'psexitstatus', 'psworking', 'psspace', 'psn', 'psleftbrack', 'psu', 'psrightbrack', 'psdollar'],
          foreground_selected = 'none',
          background_selected = 'purple';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).toBe('none');
      expect( result.promptBgColor ).toBe('purple');
      expect( result.promptCopyText ).toBe('17:13#!:0HalloweenBash&nbsp;<br>[jon]$&nbsp;');
      expect( result.functionHelper ).toBe('');
      expect( result.copyText ).toBe('export PS1="\\[\\e[0;45m\\]\\A#!:\\$?\\W \\n[\\u]\\\\$ \\[\\e[0m\\]"');
    });
  });

});
