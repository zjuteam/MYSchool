var editor;

$(function() {
	publishActivities();

});

function publishActivities() {
	$('#create_acti').click(function() {
		$('#dialog-form').dialog({
				  open: function(event, ui) {
				   $(this).load('dialog/create_activity_dialog.html', function() {
						infoHint('#cellphone','输入手机号码');
						infoHint('#input_title','少于16个字');
						editor = UE.getEditor('activity_content');
				   });
				  },
				  close: function(event, ui) {
				  },
				  show: { effect: "fold", duration: 300
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
	// 通知栏
	$('#notification').miniNotification({effect: 'fade',time: 300});
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
			+ '<input type="checkbox" onclick="alert(0)"/>'
			+ '</div>'
			+ '<div class="info">'
			+ '<table>'
			+ '<tr  class="title">'
			+ '<td rowspan="3"><img src="../../img/shetuan/u220.jpg" /></td>'
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
			+ '<td rowspan="2"><img src="../../img/shetuan/u211_line.png" /></td>'
			+ '<td><img src="../../img/shetuan/u212.png" /></td>'
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
		
		id = setInterval('uploadToServer()',1500);
	});
}

/* added from newsfeed */
function usefulHint() {
	infoHint('#theme','少于16个字');
	infoHint('.cellphone','输入手机号码');
}

function editNewsfeed() {
	$('#edit_newsfeed').click(function(event) {
		event.preventDefault();
		$('#dialog-form').dialog({
			 open: function(event, ui) {
			   $(this).load('dialog/create_newsfeed_dialog.html', function() {
			   });
			  },
			  close: function(event, ui) {
			  },	
			  show: { effect: "fold", duration: 300
			  },
		      height: 660,
		      width: 640,
		      draggable: false,
		      resizable: false,
		      modal: true	/* prevent user from interacting with the rest of the page. */
	});
	});
}
function publishNewsfeed() {
	$('#create_news').click(function() {
		$('#dialog-form').dialog({
				 open: function(event, ui) {
				   $(this).load('dialog/create_newsfeed_dialog.html', function() {
				   });
				  },
				  close: function(event, ui) {
				  },	
				  show: { effect: "fold", duration: 300
				  },
			      height: 660,
			      width: 640,
			      draggable: false,
			      resizable: false,
			      modal: true	/* prevent user from interacting with the rest of the page. */
		});
	});
}

function close() {
	$('.cancel').click(function(event) {
		event.preventDefault();
		$('#dialog-form').dialog("destroy");
		editor.destroy();
	});
}


/* 对话框是否事件 */
function dialogEvent() {
	$('.yes').click(function(event) {
		event.preventDefault();
		$("#dialog-form-confirm-send").dialog( "destroy" );	// 关闭对话框
		$("#dialog-form").dialog( "destroy" );	// 关闭对话框
		editor.destroy();	/* 销毁ueditor */
		$('#progressDialog').show();	// 打开加载框
		id = setInterval('publish()',1500); // 模拟网络操作 1500ms	
	});
	$('.no').click(function(event) {
		event.preventDefault();
		$('#dialog-form-confirm-send').dialog("close");
	});
}

function publishNewsFeedConfirmDialog() {
	$('#publish_newsfeed').click(function(event) {
		event.preventDefault();
		$('#dialog-form-confirm-send').dialog({
		      height: 220,
		      width: 400,
		      draggable: false,
		      resizable: false,
		      modal: true	/* prevent user from interacting with the rest of the page. */
	});
	});
	
	$('.preview').click(function(event) {
		event.preventDefault();
		$('#dialog-form-confirm-send').dialog({
		      height: 220,
		      width: 400,
		      draggable: false,
		      resizable: false,
		      modal: true	/* prevent user from interacting with the rest of the page. */
	});
	});
}
function publish() {
	
	uploadToServer();
		
	
}

function confirmDelete() {
	$('#confirm_delete').click(function() {
		$('#dialog-confirm').dialog({
			 height: 223,
		      width: 403,
		      draggable: false,
		      resizable: false,
		      modal: true
		});
		$('#dialog-confirm').css('border-radius','6px');
	});
}

var originPic;
var id; // interval id

function openFilePickDialog() {
	$('#dialog-form .upload').click(function(event) {
		event.preventDefault();
		$('#pic').click();
	});
}

function changeImg() {
	$('#changeImg').click(function(event) {
		event.preventDefault();
		$('#snapshot1').show();
		$('#snapshot2').hide();
		$('#snapshot3').hide();
	});
}
function save() {
	
	$('.save').click(function(event) {
		
		event.preventDefault();		// 取消默认的行为
		
		$('#snapshot1').hide();		// 显示第三张快照
		$('#snapshot2').hide();
		$('#snapshot3').show();
		
		originPic.cancelSelection();	// 点击保存按钮时，会取消图片选择区域
		
		// 设置用户选择的最终图形
	    $('#final2 img').css({
	        width: $('#preview img').css('width'),
	        height: $('#preview img').css('height'),
	        marginLeft: $('#preview img').css('marginLeft'),
	        marginTop: $('#preview img').css('marginTop')
	    });
	});
}

function del() {
	$('.delete').click(function(event) {
		event.preventDefault();
		originPic.cancelSelection();	// 点击保存按钮时，会取消图片选择区域
		$('#snapshot1').show();
		$('#snapshot2').hide();
	});
}

/* 验证表单 */
function validate() {
	$('#form').validate({
		rules: {
			theme: "required",
			body: "required"
		},
		messages: {
			theme: "请填写标题                       标题需要少于16字",
			body: "请填写正文"
		},
		 highlight: function(element, errorClass) {
			  $(element).css('outline','1px dotted red');
		 }
	});
	
}
function preview(img, selection) {
    if (!selection.width || !selection.height)
        return;
    
    var scaleX = 110 / selection.width;
    var scaleY = 110 / selection.height;

    $('#preview img').css({
        width: Math.round(scaleX * 220),		
        height: Math.round(scaleY * 120),		
        marginLeft: -Math.round(scaleX * selection.x1),
        marginTop: -Math.round(scaleY * selection.y1)
    });

}
function pickImg() {
	$("#pic").change(function(){
	    if (this.files && this.files[0]) {
	    	
	    	// 扩展名判断 (jpg, png, gif, bmp)
	    	var fileName = this.files[0].name;
	    	var extention = fileName.substr(fileName.indexOf('.') + 1);
	    	var pattern = /(jpg|png|gif|bmp)/;
	    	if(!pattern.test(extention)) {
	    		alert("支持的图片类型：jpg, png, gif, bmp");
	    		return;
	    	}
	    	
	        var reader = new FileReader();
	        reader.onload = function (e) {
	            $('#originPic').attr('src', e.target.result);
	            $('#final').attr('src',e.target.result);
	            $('#final2 img').attr('src',e.target.result);
	        };
	        reader.readAsDataURL(this.files[0]);
	    }
	    $('#snapshot1').hide();
	    $('#snapshot2').show();
	    
		originPic = $('#originPic').imgAreaSelect({
			aspectRatio: '1:1',
	        handles: true,
	        maxHeight:  110,
	        instance: true, /* 允许返回一个引用对象，进而可以调用相应的API方法 */
	        maxWidth: 110,
	        onSelectChange: preview,
	        onSelectEnd: function (img, selection) {
	            $('input[name="x1"]').val(selection.x1);
	            $('input[name="y1"]').val(selection.y1);
	            $('input[name="x2"]').val(selection.x2);
	            $('input[name="y2"]').val(selection.y2); 
	        }
	    });
	});
}

function dialogInit() {
	// hide snapshot2,3
	$('#snapshot2').hide();
	$('#snapshot3').hide();
	changeImg();
	save();
	del();
	close();
	confirmDelete();
	usefulHint();
	openFilePickDialog();
	pickImg();
	publishNewsFeedConfirmDialog();
	dialogEvent();
	pickTime();
}