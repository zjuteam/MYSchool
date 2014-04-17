$(function() {
	
	openCheckList();
	deleteShow();
	confirmDelete();
	dialogEvent();
});


/* 打开查看名单对话框 */
function openCheckList() {
	$('.query').click(function() {
		$('#dialog-form').dialog({
			      minHeight: 280,
			      width: 860,
			      draggable: false,
			      resizable: false,
			      modal: true	/* prevent user from interacting with the rest of the page. */
		});
	});
	
}

/* 显示删除按钮 */
function deleteShow() {
	$('#cb').click(function() {
		if($(this).is(":checked")) {
			$('#delete_stat').show();
		} else {
			$('#delete_stat').hide();
		}
	});
}

/**
 * 是否删除
 */
function confirmDelete() {
	$('#delete_stat').click(function() {
		$('#dialog-form-confirm-send').dialog({
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
	$('.yes').click(function(event) {
		event.preventDefault();
		$("#dialog-form-confirm-send").dialog( "destroy" );	// 关闭对话框
		$('#piece').remove();
		$('#delete_stat').hide();
		$('#notification').miniNotification({effect: 'fade',time: 300}); // 删除成功提示
	});
	$('.no').click(function(event) {
		event.preventDefault();
		$('#dialog-form-confirm-send').dialog("destroy");
	});
}