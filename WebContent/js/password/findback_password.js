/**
 * 找回密码页面的js
 */

$(function() {
	inputClearEvent();//输入框、密码框表单验证函数
	
});
/*登录邮箱*/
function loginMailbox(){
	var mail=$("input[name='mailbox']").val();
	$("#findbackpw_account").hide();
	$("#findbackpw_mailbox").show();
	$("#findbackpw_mailbox p").html("请到 "+mail+" 查阅来自社团通的邮件，从邮件重设你的密码。");
}

/* 文本框信息格式控制 */
function inputClearEvent() {
	/*输入邮箱表单验证*/
	$('input[name="mailbox"]').focus(function() {
		if ($(this).val() == '绑定邮箱'){
			$(this).val('');
			$(this).css("color", "#333333");
		}
		$(".mailbox_warn").show();
		$("#mailbox_wword").html("输入注册邮箱");
		$(".mailbox_warn img").attr("src","../../img/password/u585.png");
	});
	$('input[name="mailbox"]').blur(function() {
		if ($(this).val() == '') {
			$(this).val("绑定邮箱");
			$(this).css("color", "#CCCCCC");
		}
		if($(this).val() != "绑定邮箱"){
			var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/; 
			if(myReg.test($(this).val())) {
				$("#mailbox_wword").html("");
				$(".mailbox_warn img").attr("src","../../img/password/u587.png");
			}				
			else{
				$(".mailbox_warn img").attr("src","../../img/password/u589.png");
				$("#mailbox_wword").html("请输入正确的邮件地址");
			}
		}
		else{
			$("#mailbox_wword").html("输入注册邮箱");
			$(".mailbox_warn img").attr("src","../../img/password/u585.png");
			$(".mailbox_warn").hide();
		}
	});
	
	/*输入密码表单验证*/
	$("input[name='password']").focus(function() {
		if ($(this).val() == '输入新密码') 
		{
			$(this).val('');
			$(this).attr("type", "password");
			$(this).css("color", "#333333");
		}
		$(".password_warn").show();
		$("#password_wword").html("6到16个字符区分大小写");
		$(".password_warn img").attr("src","../../img/password/u585.png");
	});
	$('input[name="password"]').blur(function() {
			if ($(this).val() == '') {
				$(this).val("输入新密码");
				$(this).attr("type", "text");
				$(this).css("color", "#CCCCCC");
			}
		if($(this).val() != "输入新密码"){
			if(6<=$(this).val().length&&$(this).val().length<=16) {
				$("#password_wword").html("");
				$(".password_warn img").attr("src","../../img/password/u587.png");
			}				
			else{
				$(".password_warn img").attr("src","../../img/password/u589.png");
				$("#password_wword").html("请输入正确格式的密码");
			}
		}
		else{
			$("#password_wword").html("6到16个字符区分大小写");
			$(".password_warn img").attr("src","../../img/password/u585.png");
			$(".password_warn").hide();
		}
	});
	
	
	/*再次输入密码表单验证*/
	$("input[name='password_again']").focus(function() {
		if ($(this).val() == '再次输入新密码') 
		{
			$(this).val('');
			$(this).attr("type", "password");
			$(this).css("color", "#333333");
		}
		$(".password_again_warn").show();
		$("#password_again_wword").html("再次输入你设置的密码");
		$(".password_again_warn img").attr("src","../../img/password/u585.png");
	});
	$('input[name="password_again"]').blur(function() {	
		if ($(this).val() == '') {
			$(this).val("再次输入新密码");
			$(this).attr("type", "text");
			$(this).css("color", "#CCCCCC");
		}
		if($(this).val() != "再次输入新密码"){
			if($(this).val()==$("input[name='password']").val()) {
				$("#password_again_wword").html("");
				$(".password_again_warn img").attr("src","../../img/password/u587.png");
			}				
			else{
				$(".password_again_warn img").attr("src","../../img/password/u589.png");
				$("#password_again_wword").html("两次输入的密码不一致");
			}
		}
		else{
			$("#password_again_wword").html("再次输入你设置的密码");
			$(".password_again_warn img").attr("src","../../img/password/u585.png");
			$(".password_again_warn").hide();
		}
	});
}