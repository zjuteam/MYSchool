$(function() {
	changeImgWhenHover();
	edit();
	cancel();
	changePortrait();
});

function changePortrait() {
	$("#change_portrait").change(function(){
	    if (this.files && this.files[0]) {
	        var reader = new FileReader();
	        reader.onload = function (e) {
	            $('#origin_portrait').attr('src', e.target.result);
	        };
	        reader.readAsDataURL(this.files[0]);
	    }
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