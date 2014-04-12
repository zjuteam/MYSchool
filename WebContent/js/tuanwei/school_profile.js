/**
 * 校园简介
 */
var filenum=1;
$(function() {
	clearHint();
	profileImage();
	openImgPickDialog();
});

function openImgPickDialog() {
	$('.upload_file').click(function() {
		$('#profile_image').click();
	});
}
function clearHint() {
	$('input[name="title"]').focus(function() {
		if($(this).val() == '' || $(this).val() == '标题')
			$(this).val('');
	});
	$('input[name="title"]').blur(function() {
		if($(this).val() == '') {
			$(this).val('标题');
		}
	});
	$('textarea').focus(function() {
		if($(this).val() == '正文' || $(this).val() == '')
		$(this).val('');
	});
	$('textarea').blur(function() {
		if($(this).val() == '') {
			$(this).val('正文');
		}
	});	
	
	$('#input_phone').focus(function() {
		if($(this).val() == '输入手机号码')
			{
			$(this).val('');
			$('#input_phone').css("color","#333");
			}					
	});
	
	$('#input_phone').blur(function() {
		if($(this).val() == '') {
			$(this).val('输入手机号码');
			$('#input_phone').css("color","#CCC");
		}		
	});
}

/* 在列表显式新添加的file */
function profileImage() {
	$("#profile_image").change(function(){
	    if (this.files && this.files[0]) {
	    	// 扩展名判断 (jpg, png, gif, bmp)
	    	var fileName = this.files[0].name;
	    	var extention = fileName.substr(fileName.indexOf('.') + 1);
	    	var pattern = /(jpg|png|gif|bmp)/;
	    	if(!pattern.test(extention)) {
	    		alert("支持的图片类型：jpg, png, gif, bmp");
	    		return;
	    	}
	    	if(filenum>4){
	        	alert("最多添加四张图片");
	        	return;
	        }
	        var reader = new FileReader();
	        reader.onload = function (e) {
	        	$('.display ul').append('<li><img width = 100 height = 100 src="' + e.target.result + '"/></li>');
	        	filenum=filenum+1;	        	
	        };
	        reader.readAsDataURL(this.files[0]);
	    }
	});
}