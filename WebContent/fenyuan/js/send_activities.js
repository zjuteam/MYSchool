$(function() {
	publishActivities();
});

function publishActivities() {
	$('#create_acti').click(function() {
		$('#dialog-form').dialog({
				  open: function(event, ui) {
				   $(this).load('dialog/create_activity_dialog.html', function() {
				   });
				  },
				  close: function(event, ui) {
				  },
				  show: { effect: "fold", duration: 300
				  },
				  hide: { effect: "fold", duration: 500
				  },
			      height: 650,
			      width: 646,
			      draggable: false,
			      resizable: false,
			      modal: true	/* prevent user from interacting with the rest of the page. */
		});
		return false;
	});
}

function pickTime() {
	$('#start_time').datepicker();
	$('#end_time').datepicker();
}
function close() {
	$('input[type="button"]').click(function() {
		$('#dialog-form').dialog("close");
	});
}

function uploadToServer() {
	clearInterval(id);
	// 隐藏加载框
	$('#progressDialog').hide();
	// 隐藏提示字
	if($('#down').find('.activity').length == 0) {
		$('#down .no_content').hide();
	}
	var title = $('#input_title').val();
	var tag = $('#input_tag').val();
	
	$('#down').append('<div class="activity">'
			+ '<div class="check">'
			+ '<input type="checkbox" />'
			+ '</div>'
			+ '<div class="info">'
			+ '<table>'
			+ '<tr  class="title">'
			+ '<td rowspan="3"><img src="img/u220.jpg" /></td>'
			+ '<td>标题:</td>'
			+ '<td>' + title + '</td>'
			+ '</tr>'	
			+ '<tr class="last_edit">'
			+ '<td>上次编辑：</td>'
			+ '<td>2013-11-12-11：12</td>'
			+ '</tr>'
			+ '<tr class="tag">'
			+ '<td>标签：</td>'
			+ '<td>' + tag + '</td>'
			+ '	</tr>'
			+ '</table>'
			+ '</div>'
			+ '<div class="edit">'
			+ '	<table>'
			+ '<tr>'
			+ '<td rowspan="2"><img src="img/u211_line.png" /></td>'
			+ '<td><img src="img/u212.png" /></td>'
			+ '</tr>'
			+ '<tr>'
			+ '<td>编辑</td>'
			+ '</tr>'
			+ '	</table>'
			+ '</div>'
			+ '<div class="status">'
			+ '正在进行'
			+ '	</div></div>');
	
}
var id;
// 发送活动
function sendActivity() {
	$('.send').click(function() {
		// 打开加载框
		$('#progressDialog').show();
		
		id = setInterval('uploadToServer()',5000);
	});
}