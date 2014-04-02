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
	$(function() {
		// hide snapshot2,3
		$('#snapshot2').hide();
		$('#snapshot3').hide();
		changeImg();
		save();
		del();
		close();
		testAddNewsfeed();
		confirmDelete();
		clearPhoneHint();
		openFilePickDialog();
		pickImg();
		validate();
	});