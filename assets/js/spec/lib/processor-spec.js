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

  describe("a sample config with a function used and no colors set", function() {
    it("returns correct output", function () {
      var config              = ['psh', 'pscolon', 'psworking', 'psspace', 'psu', 'psspace', 'psgit', 'psdollar'],
          foreground_selected = 'none',
          background_selected = 'none';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).toBe('none');
      expect( result.promptBgColor ).toBe('none');
      expect( result.promptCopyText ).toBe('macbook:HalloweenBash&nbsp;jon&nbsp;(master)$&nbsp;');
      expect( result.functionHelper ).toBe("function parse_git_branch { <br /> &nbsp;&nbsp; git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/' <br /> } <br />");
      expect( result.copyText ).toBe('export PS1="\\h:\\W \\u \\$(parse_git_branch)\\\\$ "');
    });
  });

  describe("a sample config with a function used and colors set", function() {
    it("returns correct output", function () {
      var config              = ['psworking', 'pshash', 'pscolon', 'pscaret', 'pssplat', 'psquestion', 'psspace', 'pshost', 'psat', 'psleftbrace', 'psu', 'psrightbrace', 'pss', 'psgreaterthan', 'psgit', 'psdollar'],
          foreground_selected = 'black',
          background_selected = 'cyan';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).toBe('black');
      expect( result.promptBgColor ).toBe('cyan');
      expect( result.promptCopyText ).toBe('HalloweenBash#:^*?&nbsp;macbook.air@{jon}-bash>(master)$&nbsp;');
      expect( result.functionHelper ).toBe("function parse_git_branch { <br /> &nbsp;&nbsp; git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/' <br /> } <br />");
      expect( result.copyText ).toBe('export PS1="\\[\\e[30;46m\\]\\W#:^*? \\H@{\\u}\\s>\\$(parse_git_branch)\\\\$ \\[\\e[0m\\]"');
    });
  });

});
