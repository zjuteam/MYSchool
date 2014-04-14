$(function() {
	usefulHint();
	profileImage();
	openImgPickDialog();
	UE.getEditor('profile_content');
});

function openImgPickDialog() {
	$('.upload_file').click(function() {
		$('#profile_image').click();
	});
}
function usefulHint() {
	infoHint('#mtitle', '标题');
	infoHint('.cellphone', '输入手机号码');
}

/* 在列表显式新添加的file */
function profileImage() {
	$("#profile_image").change(
			function() {
				if (this.files && this.files[0]) {
					var reader = new FileReader();
					reader.onload = function(e) {
						$('.display ul').append(
								'<li><img width = 100 height = 100 src="'
										+ e.target.result + '"/></li>');
					};
					reader.readAsDataURL(this.files[0]);
				}
			});
}