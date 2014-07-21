/* jslint node: true */
/* global describe, it */

"use strict";

var expect    = require('chai').expect;
var processor = require('../../lib/processor');

describe("#process", function () {

  describe("default config", function() {
    it("returns correct output", function () {
      var config              = ['psh', 'pscolon', 'psworking', 'psspace', 'psu', 'psdollar'],
          foreground_selected = 'none',
          background_selected = 'none';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).to.equal('none');
      expect( result.promptBgColor ).to.equal('none');
      expect( result.promptCopyText ).to.equal('macbook:HalloweenBash&nbsp;jon$&nbsp;');
      expect( result.functionHelper ).to.equal('');
      expect( result.copyText ).to.equal('export PS1="\\h:\\W \\u\\\\$ "');
    });
  });

  describe("a sample config with colors", function() {
    it("returns correct output", function () {
      var config              = ['psh', 'psworking', 'pscolon', 'psspace', 'psu', 'psdollar'],
          foreground_selected = 'blue',
          background_selected = 'red';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).to.equal('blue');
      expect( result.promptBgColor ).to.equal('red');
      expect( result.promptCopyText ).to.equal('macbookHalloweenBash:&nbsp;jon$&nbsp;');
      expect( result.functionHelper ).to.equal('');
      expect( result.copyText ).to.equal('export PS1="\\[\\e[34;41m\\]\\h\\W: \\u\\\\$ \\[\\e[0m\\]"');
    });
  });

  describe("a sample config with only text color set", function() {
    it("returns correct output", function () {
      var config              = ['psh', 'pscolon', 'psworking', 'psspace', 'psu', 'psspace', 'psleftbrace', 'psv', 'psrightbrace', 'psdollar'],
          foreground_selected = 'cyan',
          background_selected = 'none';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).to.equal('cyan');
      expect( result.promptBgColor ).to.equal('none');
      expect( result.promptCopyText ).to.equal('macbook:HalloweenBash&nbsp;jon&nbsp;{3.2}$&nbsp;');
      expect( result.functionHelper ).to.equal('');
      expect( result.copyText ).to.equal('export PS1="\\[\\e[36;0m\\]\\h:\\W \\u {\\v}\\\\$ \\[\\e[0m\\]"');
    });
  });

  describe("a sample config with only background color set", function() {
    it("returns correct output", function () {
      var config              = ['pstime24hhmm', 'pshash', 'psbang', 'pscolon', 'psexitstatus', 'psworking', 'psspace', 'psn', 'psleftbrack', 'psu', 'psrightbrack', 'psdollar'],
          foreground_selected = 'none',
          background_selected = 'purple';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).to.equal('none');
      expect( result.promptBgColor ).to.equal('purple');
      expect( result.promptCopyText ).to.equal('17:13#!:0HalloweenBash&nbsp;<br>[jon]$&nbsp;');
      expect( result.functionHelper ).to.equal('');
      expect( result.copyText ).to.equal('export PS1="\\[\\e[0;45m\\]\\A#!:\\$?\\W \\n[\\u]\\\\$ \\[\\e[0m\\]"');
    });
  });

  describe("a sample config with a function used and no colors set", function() {
    it("returns correct output", function () {
      var config              = ['psh', 'pscolon', 'psworking', 'psspace', 'psu', 'psspace', 'psgit', 'psdollar'],
          foreground_selected = 'none',
          background_selected = 'none';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).to.equal('none');
      expect( result.promptBgColor ).to.equal('none');
      expect( result.promptCopyText ).to.equal('macbook:HalloweenBash&nbsp;jon&nbsp;(master)$&nbsp;');
      expect( result.functionHelper ).to.equal("function parse_git_branch { <br /> &nbsp;&nbsp; git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/' <br /> } <br />");
      expect( result.copyText ).to.equal('export PS1="\\h:\\W \\u \\$(parse_git_branch)\\\\$ "');
    });
  });

  describe("a sample config with a function used and colors set", function() {
    it("returns correct output", function () {
      var config              = ['psworking', 'pshash', 'pscolon', 'pscaret', 'pssplat', 'psquestion', 'psspace', 'pshost', 'psat', 'psleftbrace', 'psu', 'psrightbrace', 'pss', 'psgreaterthan', 'psgit', 'psdollar'],
          foreground_selected = 'black',
          background_selected = 'cyan';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).to.equal('black');
      expect( result.promptBgColor ).to.equal('cyan');
      expect( result.promptCopyText ).to.equal('HalloweenBash#:^*?&nbsp;macbook.air@{jon}-bash>(master)$&nbsp;');
      expect( result.functionHelper ).to.equal("function parse_git_branch { <br /> &nbsp;&nbsp; git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/' <br /> } <br />");
      expect( result.copyText ).to.equal('export PS1="\\[\\e[30;46m\\]\\W#:^*? \\H@{\\u}\\s>\\$(parse_git_branch)\\\\$ \\[\\e[0m\\]"');
    });
  });


  describe("a sample config with all configs, a function used, and colors set", function() {
    it("returns correct output", function () {
      var config              = ['psh', 'psat', 'psd', 'psbang', 'pshost', 'pshash', 'psgit', 'pstime12hms', 'psversion', 'pssplat', 'pss', 'psperiod', 'pstime24hms', 'psleftbrace', 'psw', 'psrightbrace', 'psworking', 'psunder', 'psl', 'pscolon', 'pszero', 'psexitstatus', 'psn', 'pscaret', 'pstime24hhmm', 'pscolon', 'psspace', 'psj', 'psdash', 'psworking', 'psv', 'pscomma', 'psleftbrack', 'pstime12ampm', 'psrightbrack', 'psquestion', 'psgreaterthan', 'psspace', 'psh', 'psu', 'psu', 'psdollar'],
          foreground_selected = 'red',
          background_selected = 'black';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).to.equal('red');
      expect( result.promptBgColor ).to.equal('black');
      expect( result.promptCopyText ).to.equal('macbook@Wed Oct 31!macbook.air#(master)05:13:303.2.48*-bash.17:13:30{~/Desktop/HalloweenBash}HalloweenBash_ttys002:00<br>^17:13:&nbsp;0-HalloweenBash3.2,[05:13 PM]?>&nbsp;macbookjonjon$&nbsp;');
      expect( result.functionHelper ).to.equal("function parse_git_branch { <br /> &nbsp;&nbsp; git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/' <br /> } <br />");
      expect( result.copyText ).to.equal('export PS1="\\[\\e[31;40m\\]\\h@\\d!\\H#\\$(parse_git_branch)\\T\\V*\\s.\\t{\\w}\\W_\\l:0\\$?\\n^\\A: \\j-\\W\\v,[\\@]?> \\h\\u\\u\\\\$ \\[\\e[0m\\]"');
    });
  });

  describe("a sample config no configs and no colors", function() {
    it("returns correct output", function () {
      var config              = [],
          foreground_selected = 'none',
          background_selected = 'none';

      var result = processor.process(config, foreground_selected, background_selected);

      expect( result.promptTextColor ).to.equal('none');
      expect( result.promptBgColor ).to.equal('none');
      expect( result.promptCopyText ).to.equal('');
      expect( result.functionHelper ).to.equal('');
      expect( result.copyText ).to.equal('export PS1=""');
    });
  });

});
