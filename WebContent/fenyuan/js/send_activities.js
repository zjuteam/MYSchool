$(function() {
	changeImgWhenHover();
	publishActivities();
	close();
	pickTime();
});

function publishActivities() {
	$('#create_acti').click(function() {
		$('#dialog-form').dialog({
			      height: 650,
			      width: 646,
			      draggable: false,
			      resizable: false,
			      modal: true	/* prevent user from interacting with the rest of the page. */
		});
	});
}

function pickTime() {
	$('#start_time').datepicker();
	$('#end_time').datepicker();
}
function close() {
	$('input[type="button"]').click(function() {
		$('#dialog-form').dialog("close");
	});
}