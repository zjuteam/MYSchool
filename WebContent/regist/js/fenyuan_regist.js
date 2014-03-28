/**
 * fenyuan_regist.js
 */
var oldval;
var explorer = window.navigator.userAgent ;
var screen_height=window.screen.height;
var screen_width=window.screen.width;

$(function() {
	inputClearEvent();//输入框、密码框表单验证函数
	browserCompatibilitySolve();//浏览器兼容性问题解决函数
});

/* step1页面点击下一步，转到邮箱 */
function changeToMailbox() {
	$('#activate_mailbox').dialog({
	      height: 220,
	      width: 440,
	      draggable: false,
	      resizable: false,
	      modal: true	/* prevent user from interacting with the rest of the page. */
});
	$(".ui-dialog").css("top","400px");
}
/* 激活邮箱弹出窗页面点击返回，回到Step1页面 */
function returnToStep1(){
	$('#activate_mailbox').dialog("close");
}	

/* step2页面点击下一步，转到step3 */
function changeToStep3() {
	$("#Step2_panel").hide();
	$("#step_two img").hide();
	$("#Step3_panel").show();
	$("#step_three img").css("display","block");
	$("#step_two").css("color", "#999999");
	$("#step_three").css("color", "#55BB22");
	/*$("html,body").scrollTop(0);*/
}

/* step3页面点击下一步，转到step4 */
function changeToStep4() {
	$("#Step3_panel").hide();
	$("#step_three img").hide();
	$("#Step4_panel").show();
	$("#step_four img").css("display","block");
	$("#step_three").css("color", "#999999");
	$("#step_four").css("color", "#55BB22");
	$("#u525_end").show();
	$("html,body").scrollTop(0);
}
/* step3页面点击上一步，返回step2 */
function returnToStep2(){
	$("#Step3_panel").hide();
	$("#step_three img").hide();
	$("#Step2_panel").show();
	$("#step_two img").show();
	$("#step_two").css("color", "#55BB22");
	$("html,body").scrollTop(0);	
}

/* step4页面点击上一步，返回step3 */
function returnToStep3(){
	$("#Step4_panel").hide();
	$("#step_four img").hide();
	$("#Step3_panel").show();
	$("#step_three img").show();
	$("#step_three").css("color", "#55BB22");
	$("html,body").scrollTop(0);	
}

/*step4页面完成注册，点击关闭窗口*/
function finishTheRegist(){
	window.opener=null;
	window.open('','_self');
	window.close();
}
/*是否接受《my school》协议的样式控制函数*/
function judgeUseTheDeal(){
	if($("#Step1_panel input[name='judge_use_deal']").is(":checked")){
		$("#Step1_panel input[name='nextstep']").css({"background-color":"#55BB22","cursor":"pointer"});
		$("#Step1_panel input[name='nextstep']").attr("disabled",false);
	}
	else{
		$("#Step1_panel input[name='nextstep']").css({"background-color":"#999999","cursor":"default"});
		$("#Step1_panel input[name='nextstep']").attr("disabled",true);
	}
}

/*浏览器兼容性问题解决函数*/
function browserCompatibilitySolve(){		
		//ie
		if (explorer.indexOf("MSIE") >= 0) {
		}
		//firefox 
		else if (explorer.indexOf("Firefox") >= 0) {
			$("#Step2_panel table select").css("padding-top","10px");
			$("#underline").css("top","1px");
			$(".Step_panel table td.warn_img img").css("margin-top","10px");
			$("#unload_img_word").css({"top":"22px","left":"0"});
			$("#img_camera_line").css("margin","1px 5px 0 -2px");
		}
		//Chrome
		else if(explorer.indexOf("Chrome") >= 0){

		}	
}


/*选择校区*/
function campusSelect(){
	/*下拉框样式控制*/
	if($('select[name="campus"]').val()=="请选择校区"){
		$("#Step2_panel table select").css("color","#CCCCCC");
	}
	else{
		$("#Step2_panel table select").css("color","#333333");
	}
}
/* 文本框信息格式控制 */
function inputClearEvent() {
	$('input[type="text"]').focus(function() {
		if ($(this).val() == '输入账户名' || $(this).val() == '绑定邮箱'
			|| $(this).val() == '分院名称'|| $(this).val() == '分院简称'
			|| $(this).val() == '账号负责人'|| $(this).val() == '负责人电话') 
		{
			oldval = $(this).val();
			$(this).val('');
			$(this).css("color", "#333333");
		}		
	});
	$('input[type="text"]').blur(function() {
		if (oldval == '输入账户名' || oldval == '绑定邮箱' ||
			oldval == '分院名称'|| oldval == '分院简称' || 
			oldval == '账号负责人'|| oldval == '负责人电话') {
			if ($(this).val() == '') {
				$(this).val(oldval);
				$(this).css("color", "#CCCCCC");
			}

		}
	});
	
	/* 密码框的鼠标事件处理 */
	$('input[type="text"]').focus(function() {
		if ($(this).val() == '输入密码' || $(this).val() == '再次输入密码') 
		{
			oldval = $(this).val();
			$(this).val('');
			$(this).attr("type", "password");
			$(this).css("color", "#333333");
		}
	});
	$('input[type="text"]').blur(function() {
		if (oldval == '输入密码' || oldval == '再次输入密码') {
			if ($(this).val() == '') {
				$(this).val(oldval);
				$(this).attr("type", "text");
				$(this).css("color", "#CCCCCC");
			}
		}
	});
	
	
	/*输入用户名表单验证 */
	$('input[name="account"]').focus(function() {
		$(".account_warn").show();
		$("#account_wword").html("6到18个字符区包括字母、数字、下划线");
		$(".account_warn img").attr("src","./img/u585.png");
		$("#account_wword").css("line-height","14px");
	});
	$('input[name="account"]').blur(function() {
		if($(this).val() != oldval){
			/*var regu = "^[0-9a-zA-Z\_]+$"; 
			var re = new RegExp(regu); 
			if(re.test($(this).val())&&6<=$(this).val().length&&$(this).val().length<=18) {*/
			if(6<=$(this).val().length&&$(this).val().length<=18) {
				$("#account_wword").html("");
				$(".account_warn img").attr("src","./img/u587.png");
			}				
			else{
				$(".account_warn img").attr("src","./img/u589.png");
				$("#account_wword").css({"line-height":"40px","margin-top":"0"});
				$("#account_wword").html("请输入正确格式的用户名");				
			}
		}
		else{
			$("#account_wword").html("6到18个字符区包括字母、数字、下划线");
			$(".account_warn img").attr("src","./img/u585.png");
			$("#account_wword").css("line-height","14px");
			$(".account_warn").hide();
		}
	});
	
	
	/*输入密码表单验证*/
	$("input[name='password']").focus(function() {
		$(".password_warn").show();
		$("#password_wword").html("6到16个字符区分大小写");
		$(".password_warn img").attr("src","./img/u585.png");
	});
	$('input[name="password"]').blur(function() {		
		if($(this).val() != oldval){
			if(6<=$(this).val().length&&$(this).val().length<=16) {
				$("#password_wword").html("");
				$(".password_warn img").attr("src","./img/u587.png");
			}				
			else{
				$(".password_warn img").attr("src","./img/u589.png");
				$("#password_wword").html("请输入正确格式的密码");
			}
		}
		else{
			$("#password_wword").html("6到16个字符区分大小写");
			$(".password_warn img").attr("src","./img/u585.png");
			$(".password_warn").hide();
		}
	});
	
	
	/*再次输入密码表单验证*/
	$("input[name='password_again']").focus(function() {
		$(".password_again_warn").show();
		$("#password_again_wword").html("再次输入你设置的密码");
		$(".password_again_warn img").attr("src","./img/u585.png");
	});
	$('input[name="password_again"]').blur(function() {		
		if($(this).val() != oldval){
			if($(this).val()==$("input[name='password']").val()) {
				$("#password_again_wword").html("");
				$(".password_again_warn img").attr("src","./img/u587.png");
			}				
			else{
				$(".password_again_warn img").attr("src","./img/u589.png");
				$("#password_again_wword").html("两次输入的密码不一致");
			}
		}
		else{
			$("#password_again_wword").html("再次输入你设置的密码");
			$(".password_again_warn img").attr("src","./img/u585.png");
			$(".password_again_warn").hide();
		}
	});
	
	
	/*输入邮箱表单验证*/
	$('input[name="mailbox"]').focus(function() {
		$(".mailbox_warn").show();
		$("#mailbox_wword").html("输入邮箱，激活完成注册");
		$(".mailbox_warn img").attr("src","./img/u585.png");
	});
	$('input[name="mailbox"]').blur(function() {		
		if($(this).val() != oldval){
			var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/; 
			if(myReg.test($(this).val())) {
				$("#mailbox_wword").html("");
				$(".mailbox_warn img").attr("src","./img/u587.png");
			}				
			else{
				$(".mailbox_warn img").attr("src","./img/u589.png");
				$("#mailbox_wword").html("请输入正确的邮件地址");
			}
		}
		else{
			$("#mailbox_wword").html("输入邮箱，激活完成注册");
			$(".mailbox_warn img").attr("src","./img/u585.png");
			$(".mailbox_warn").hide();
		}
	});
	
	/*输入手机号表单验证*/
	$('input[name="phone"]').focus(function() {
		$(".phone_warn").show();
		$("#phone_wword").html("输入11位手机号码");
		$(".phone_warn img").attr("src","./img/u585.png");
	});
	$('input[name="phone"]').blur(function() {		
		if($(this).val() != oldval){
			var regu =/^[1][0-9]{10}$/; 
			var re = new RegExp(regu); 
			if(re.test($(this).val())) {
				$("#phone_wword").html("");
				$(".phone_warn img").attr("src","./img/u587.png");
			}				
			else{
				$(".phone_warn img").attr("src","./img/u589.png");
				$("#phone_wword").html("请输入正确的手机号码");
			}
		}
		else{
			$("#phone_wword").html("输入11位手机号码");
			$(".phone_warn img").attr("src","./img/u585.png");
			$(".phone_warn").hide();
		}
	});
	
}