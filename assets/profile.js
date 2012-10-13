/*
HalloweenBash 2012 by rexfeng
*/

$(document).ready(function() {

	// get initial state
	var start_config_avail = $('#customize').html();

	// enable sortable lists with jquery-ui
	$(function() {
    $( "#current_config, #prompt_strings" ).sortable({
      connectWith: ".connectedSortable",
      update: function(event, ui) {
      	update_page();
      }
    }).disableSelection();
  });



// var prompt = $('#prompt').html();
// var current_config = $('#current_config').html();
// var prompt_strings = $('#prompt_strings').html();
// var copytext = $('#copytext').html();

	// update page function() upon page sort
	function update_page() {

		// get current config
			var inputs = [];
			$('ul#current_config li').each(function(){
				inputs.push($(this).attr('class'));
			});

		// update bash preview & copytext
			var preview = "";
			var copygoeshere = "export PS1=\"";
			
			for (var i = 0; i < inputs.length; i++) {
				preview += psobj[inputs[i]].example_copy;
				copygoeshere += psobj[inputs[i]].bash_string;
			}

			$('#prompt').html(preview);
			$('#copytext').html(copygoeshere + "\"");

			// if bash preview text > 80 chars, then wrap

		// reset current config (prompt strings)
	}

	// on click for colors
		// ul#foregroundcolor
		// ul#backgroundcolor



	// create list of available prompt strings
	/*
							 text_id: unique a-z name of prompt string
					 bash_string: what needs to be copied into bash_profile
					example_copy: how this may look in bash preview
			long_description: a description (such as from 'man bash')
	*/
	var psobj = {					 // prompt string objects
		// "": {
		// 			         text_id: "psa", 
		// 			     bash_string: "", 
		// 			    example_copy: "", 
		// 			long_description: ""
		// 		},
		"psd": {
					         text_id: "psd", 
					     bash_string: "\\d", 
					    example_copy: "Wed Oct 31", 
					long_description: "the date in Weekday Month Date format"
		},
		// "": {
		// 			         text_id: "psdate", 
		// 			     bash_string: "", 
		// 			    example_copy: "", 
		// 			long_description: ""
		// },
		// "": {
		// 			         text_id: "pse", 
		// 			     bash_string: "", 
		// 			    example_copy: "", 
		// 			long_description: ""
		// },
		"psh": {
					         text_id: "psh", 
					     bash_string: "\\h", 
					    example_copy: "macbook", 
					long_description: "the hostname up to the first period"
		},
		"pshost": {
					         text_id: "pshost", 
					     bash_string: "\\H", 
					    example_copy: "macbook.air", 
					long_description: "the hostname"
				},
		"psj": {
					         text_id: "psj", 
					     bash_string: "\\j", 
					    example_copy: "0", 
					long_description: "the number of jobs currently managed by the shell"
		},
		"psl": {
					         text_id: "psl", 
					     bash_string: "\\l", 
					    example_copy: "ttys002", 
					long_description: "the basename of the shell’s terminal device name"
		},
		"psn": {
					         text_id: "psn", 
					     bash_string: "\\n", 
					    example_copy: "<br>", 
					long_description: "newline"
		},
		// "": {
		// 			         text_id: "psr", 
		// 			     bash_string: "\\r", 
		// 			    example_copy: "", 
		// 			long_description: "carriage return"
		// },
		"pss": {
					         text_id: "pss", 
					     bash_string: "\\s", 
					    example_copy: "-bash", 
					long_description: "the name of the shell"
				},
		"pstime24hms": {
					         text_id: "pstime24hms", 
					     bash_string: "\\t", 
					    example_copy: "17:13:30", 
					long_description: "the current time in 24-hour HH:MM:SS format"
		},
		"pstime12hms": {
					         text_id: "pstime12hms", 
					     bash_string: "\\T", 
					    example_copy: "05:13:30", 
					long_description: "the current time in 12-hour HH:MM:SS format"
		},
		"pstime12ampm": {
					         text_id: "pstime12ampm", 
					     bash_string: "\\@", 
					    example_copy: "05:13 PM", 
					long_description: "the current time in 12-hour AM PM format"
		},
		"pstime24hhmm": {
					         text_id: "pstime24hhmm", 
					     bash_string: "\\A", 
					    example_copy: "17:13", 
					long_description: "the current time in 24-hour HH:MM format"
		},
		"psu": {
					         text_id: "psu", 
					     bash_string: "\\u", 
					    example_copy: "jon", 
					long_description: "the username of the current user"
				},
		"psv": {
					         text_id: "psv", 
					     bash_string: "\\v", 
					    example_copy: "3.2", 
					long_description: "the version of bash"
		},
		"psversion": {
					         text_id: "psversion", 
					     bash_string: "\\V", 
					    example_copy: "3.2.48", 
					long_description: "the release of bash, version + patch level"
		},
		"psw": {
					         text_id: "psw", 
					     bash_string: "\\w", 
					    example_copy: "~/Desktop", 
					long_description: "the current working directory"
		},
		"psworking": {
					         text_id: "psworking", 
					     bash_string: "\\W", 
					    example_copy: "Desktop", 
					long_description: "the basename of the current working directory"
		},
		"psbang": {
					         text_id: "psbang", 
					     bash_string: "!", 
					    example_copy: "!", 
					long_description: "bang"
				},
		"pshash": {
					         text_id: "pshash", 
					     bash_string: "#", 
					    example_copy: "#", 
					long_description: "hash"
		},
		"psdollar": {
					         text_id: "psdollar", 
					     bash_string: "$", 
					    example_copy: "$", 
					long_description: "dollar sign"
		},
		// "": {
		// 			         text_id: "psoctal", 
		// 			     bash_string: "", 
		// 			    example_copy: "", 
		// 			long_description: ""
		// },
		"psbackslash": {
					         text_id: "psbackslash", 
					     bash_string: "\\\\", 
					    example_copy: "\\", 
					long_description: ""
		},
		"psleftbrack": {
					         text_id: "psleftbrack", 
					     bash_string: "[", 
					    example_copy: "[", 
					long_description: "left bracket"
				},
		"psrightbrack": {
					         text_id: "psrightbrack", 
					     bash_string: "]", 
					    example_copy: "]", 
					long_description: "right bracket"
		},
		"pszero": {
					         text_id: "pszero", 
					     bash_string: "0", 
					    example_copy: "0", 
					long_description: "zero"
		},
		"pscaret": {
					         text_id: "pscaret", 
					     bash_string: "^", 
					    example_copy: "^", 
					long_description: "caret"
		},
		"pssplat": {
					         text_id: "pssplat", 
					     bash_string: "*", 
					    example_copy: "*", 
					long_description: "splat"
		},
		"psdash": {
					         text_id: "psdash", 
					     bash_string: "-", 
					    example_copy: "-", 
					long_description: "dash"
				},
		"psunder": {
					         text_id: "psunder", 
					     bash_string: "_", 
					    example_copy: "_", 
					long_description: "underscore"
		},
		"psleftbrace": {
					         text_id: "psleftbrace", 
					     bash_string: "{", 
					    example_copy: "{", 
					long_description: "left brace"
		},
		"psrightbrace": {
					         text_id: "psrightbrace", 
					     bash_string: "}", 
					    example_copy: "}", 
					long_description: "right brace"
		},
		"pscolon": {
					         text_id: "pscolon", 
					     bash_string: ":", 
					    example_copy: ":", 
					long_description: "colon"
		},
		"pscomma": {
					         text_id: "pscomma", 
					     bash_string: ",", 
					    example_copy: ",", 
					long_description: "comma"
				},
		"psperiod": {
					         text_id: "psperiod", 
					     bash_string: ".", 
					    example_copy: ".", 
					long_description: "period"
		},
		"psquestion": {
					         text_id: "psquestion", 
					     bash_string: "?", 
					    example_copy: "?", 
					long_description: "question mark"
		},
		"psspace": {
					         text_id: "psspace", 
					     bash_string: " ", 
					    example_copy: "&nbsp;", 
					long_description: "space"
		}
	};



	// select all text
		// goes here



}); // end DOM ready
