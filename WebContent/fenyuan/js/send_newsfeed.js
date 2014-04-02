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
				+ '<td rowspan="3"><img src="img/u271.png" /></td>'
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
				+ '<td rowspan="2"><img src="img/u211_line.png" /></td>'
				+ '<td><img src="img/u212.png" /></td>'
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