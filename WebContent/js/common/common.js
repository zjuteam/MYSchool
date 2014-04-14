/* global javascript */

/**
 * 用户提示语
 * 比如用户输入框“输入手机号码，用户名，密码等”
 */
function infoHint(id,info) {
	$(id).focus(function() {
		if($(this).val() == '' || $(this).val() == info)
			$(this).val('');
	});
	$(id).blur(function() {
		if($(this).val() == '') {
			$(this).val(info);
		}
	});
}