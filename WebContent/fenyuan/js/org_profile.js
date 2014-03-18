$(function() {
	changeImgWhenHover();
	clearHint();
});

function clearHint() {
	$('input[type="text"]').focus(function() {
		if($(this).val() == '' || $(this).val() == '标题')
			$(this).val('');
	});
	$('input[type="text"]').blur(function() {
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
}