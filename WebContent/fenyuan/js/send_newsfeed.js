$(function() {
	changeImgWhenHover();
	publishNewsfeed();
	close();
});

function publishNewsfeed() {
	$('#create_acti').click(function() {
		$('#dialog-form').dialog({
			      height: 472,
			      width: 640,
			      draggable: false,
			      resizable: false,
			      modal: true	/* prevent user from interacting with the rest of the page. */
		});
	});
}

function close() {
	$('input[type="button"]').click(function() {
		$('#dialog-form').dialog("close");
	});
}