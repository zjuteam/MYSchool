$(function() {
	changeImgWhenHover();
	edit();
	cancel();
	changePortrait();
});

function changePortrait() {
	$("#change_portrait").change(function(){
	    readURL(this,'origin_portrait');
	});
}
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