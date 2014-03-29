$(function() {
	
	openCheckList();
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

