$(function() {
	changeImgWhenHover();
	edit();
	cancel();
});

function edit() {
	$('#edit').children().click(function() {
		$('#container').hide();
		$('#edit_container').show();		
	});
}

function cancel() {
	$('input[type="button"]').click(function() {
		// show dialog
		$(this).dialog();
		//$('#container').show();
		//$('#edit_container').hide();		
	});
}