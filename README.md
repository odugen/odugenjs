odugenjs
=============

small set of javascript files used by me.

od
-----------

### waitAndRun
will check condition and run callback when condition returns true.
usage

	var condition = function(){
		return $('#id').is(':visible')
	};
	
	var callback = function(){
		alert('Run');
	};
	od.waitAndRun(condition, callback, 500);

this code will check if element with id is visible each 500 milliseconds, and run callback when it becomes visible.

modal
-----------

This is basic binding for twitter-bootstrap modal dialog
Bind it to any boolean value. And it will be shown when boolean returns true

	<!-- modal dialog -->
    <div class="modal" data-bind="modal: showActivities">
	...
	</div>