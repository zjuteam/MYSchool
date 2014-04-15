$(function() {
	cancel();
	changePortrait();
	dialogEvent();
	openFilePickDialog();

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

function openFilePickDialog() {
	$('.left .modify_portrait a').click(function(event) {
		event.preventDefault();
		$('#change_portrait').click();
	});
}
/* 帐号设置编辑保存 */
function save() {
	$('input[type="submit"]').click(function() {
		// 保存
	});
}
/* 帐号设置编辑取消 */
function cancel() {
	$('input[type="button"]').click(function() {
		
		$('#dialog-form').dialog({
		      height: 220,
		      width: 400,
		      draggable: false,
		      resizable: false,
		      modal: true	/* prevent user from interacting with the rest of the page. */
	});
	});
}
/* 对话框是否事件 */
function dialogEvent() {
	$('.yes').click(function() {
		window.location.href="account_setting.html";
	});
	$('.no').click(function() {
		$('#dialog-form').dialog("close");
	});
}