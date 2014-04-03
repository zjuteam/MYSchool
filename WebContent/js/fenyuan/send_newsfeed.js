$(function() {
	publishNewsfeed();
});


function clearPhoneHint() {
	$('#input_phone').focus(function() {
		if($(this).val() == '输入手机号码')
			$(this).val('');
	});
	
	$('#input_phone').blur(function() {
		if($(this).val() == '') {
			$(this).val('输入手机号码');
		}
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
			      height: 502,
			      width: 640,
			      draggable: false,
			      resizable: false,
			      modal: true	/* prevent user from interacting with the rest of the page. */
		});
	});
}

function close() {
	$('input[type="button"]').click(function() {
		$('#dialog-form').dialog("close");
	});
}

function testAddNewsfeed() {
	$('#dialog-form input[type="submit"]').click(function(event) {
		event.preventDefault();
		var theme = $("#theme").val();
		var tag = $("#tag").val();
		
		$('#down').append('<div class="newsfeed">'
				+ '<div class="check">'
				+ '<input type="checkbox" />'
				+ '</div>'
				+ '<div class="info">'
				+ '<table>'
				+ '<tr  class="title">'
				+ '<td rowspan="3"><img src="../../img/fenyuan/u271.png" /></td>'
				+ '<td>标题:</td>'
				+ '<td>' + theme + '</td>'
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
				+ '<td rowspan="2"><img src="../../img/fenyuan/u211_line.png" /></td>'
				+ '<td><img src="../../img/fenyuan/u212.png" /></td>'
				+ '</tr>'
				+ '<tr>'
				+ '<td>编辑</td>'
				+ '</tr>'
				+ '	</table>'
				+ '</div>'
				+ '</div>');
		
	   $("#dialog-form").dialog( "close" );	// close dialog
	});
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