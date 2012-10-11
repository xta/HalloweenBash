/*
HalloweenBash 2012 by rexfeng

js to-do list
====================
[x] drag and drop, sort function
[x] detect list sort action finish

[-] map out js var prompt string object

[ ] parse CurrentConfig to be able to update Preview & Copytext

[ ] strip out <li>, turn into array
[ ] create function to turn array into <li></li> in html

[ ] ensure on change of sort, check state of everything - keep terminal display & output copy in sync
[ ] after drag event, set config settings available section to start state (as if no change)
[ ] wrap terminal text if chars > 80

[?] get current time
[ ] onclick #copytext, select all text
*/

$(document).ready(function() {



// get initial state
	var start_config_avail = $('#customize').html();

// enable sort with jquery-ui
	$(function() {
    $( "#current_config, #prompt_strings" ).sortable({
      connectWith: ".connectedSortable",
      update: function(event, ui) {
      	update_page();
//event.preventDefault(); <-- is this line needed?
      }
    }).disableSelection();
  });



// update page function() upon page sort
	function update_page() {

		var prompt = $('#prompt').html();
		var current_config = $('#current_config').html();
		var prompt_strings = $('#prompt_strings').html();
		var copytext = $('#copytext').html();

		// get current config

		// update bash preview
		// if bash preview text > 80 chars, then wrap

		// update bash_profile copytext

		// reset current config (prompt strings)
	}



// create list of available prompt strings
	/*
							 text_id: unique a-z name of prompt string
					 bash_string: what needs to be copied into bash_profile
					example_copy: how this may look in bash preview
			long_description: a description (such as from 'man bash')
	*/
	var psobj = {							// prompt string objects
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
				},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
				},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
				},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
				},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
				},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
				},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
				},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
				},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		},
		"": {
					         text_id: "", 
					     bash_string: "", 
					    example_copy: "", 
					long_description: ""
		}
	};



// convert li_to_array
	function li_to_array(li) {

	}



// convert array_to_li
	function array_to_li(array) {

	}



// select all text
	// goes here



}); // end doc ready
