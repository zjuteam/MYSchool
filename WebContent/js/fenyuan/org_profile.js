$(function() {
	clearHint();
	profileImage();
	openImgPickDialog();
});

function openImgPickDialog() {
	$('.upload_file').click(function() {
		$('#profile_image').click();
	});
}
function clearHint() {
	$('input[type="text"]').focus(function() {
		if($(this).val() == '' || $(this).val() == '标题')
			$(this).val('');
	});
	$('input[type="text"]').blur(function() {
		if($(this).val() == '') {
			$(this).val('标题');
		}
	});
	$('textarea').focus(function() {
		if($(this).val() == '正文' || $(this).val() == '')
		$(this).val('');
	});
	$('textarea').blur(function() {
		if($(this).val() == '') {
			$(this).val('正文');
		}
	});	
}

/* 在列表显式新添加的file */
function profileImage() {
	$("#profile_image").change(function(){
	    if (this.files && this.files[0]) {
	        var reader = new FileReader();
	        reader.onload = function (e) {
	        	$('.display ul').append('<li><img width = 100 height = 100 src="' + e.target.result + '"/></li>');
	        };
	        reader.readAsDataURL(this.files[0]);
	    }
	});
}