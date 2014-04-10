/**
 * 标签设置——活动标签
 */
$(function() {
	newTag();//新建标签
});

function newTag(){
	$('#create_news').click(function() {
		$('#dialog-form').dialog({
				 open: function(event, ui) {
				   $(this).load('dialog/create_newtag_dialog.html', function() {
				   });
				  },
				  close: function(event, ui) {
				  },	
				  show: { effect: "fold", duration: 300
				  },
			      height: 290,
			      width: 530,
			      draggable: false,
			      resizable: false,
			      modal: true	/* prevent user from interacting with the rest of the page. */
		});
	});
}
/*点击取消按钮后关闭弹出框*/
function close() {
	$('input[type="button"]').click(function() {
		$('#dialog-form').dialog("close");
	});
}
/*判断单选框应默认选择哪一标签*/
function judgeTheSelectedTag(){
	if($("#up .active").width()==123){
		$("input[id='activity_tag']").attr("checked",true);
	}
	else if($("#up .newsfeed").width()==123){
		$("input[id='newsfeed_tag']").attr("checked",true);
	}
	else if($("#up .shetuan").width()==123){
		$("input[id='shetuan_tag']").attr("checked",true);
	}
	
}
/*点击了确认后出现“新建成功”的提示*/
function submitForm(){
$('#dialog-form input[type="submit"]').click(function(event) {	
	    event.preventDefault();
		$("#dialog-form").dialog( "close" );	// 关闭对话框		
		$('#notification').miniNotification({effect: 'fade',time: 300});	
	});
}

function dialogInit() {
	close();
	judgeTheSelectedTag();
	submitForm();
}