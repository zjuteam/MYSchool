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
				  hide: { effect: "fold", duration: 500
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
	$('#dialog-form input[type="button"]').click(function() {

		var theme = $("#theme");
		var tag = $("#label");
		
		$('#down').append("<div class='newsfeed'><div class='info'><table><tr class='title'>"
				+ "<td rowspan='3'><img src='img/u271.png' /></td><td>标题:</td><td>" + theme.val()
				+ "</td></tr><tr class='last_edit'><td>上次编辑：</td><td>2013-11-12-11: 12</td></tr>"
				+ "<tr class='tag'><td>标签：</td><td>" + tag.val() + "</td></tr></table></div>"
				+ "		<div class='edit'><table><tr><td rowspan='2'><img src='img/u211_line.png' /></td><td><img src='img/u212.png' /></td><td><img src='img/u214.png' /></td></tr><tr><td>编辑</td><td>删除</td></tr></table></div></div>");
		
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