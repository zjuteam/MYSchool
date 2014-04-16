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

/* step3页面点击上一步，返回step2 */
function returnToStep2(){
	window.history.go(-1);
}

/* step4页面点击上一步，返回step3 */
function returnToStep3(){
	window.history.go(-1);
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
			$("#underline").css("top","1px");
			$("#Step2_panel table select").css("padding-top","10px");
		}
		//Chrome
		else if(explorer.indexOf("Chrome") >= 0){

		}	
}


/*选择校区*/
function campusSelect(){
	/*下拉框样式控制*/
	if($('select[name="campus"]').val()=="请选择校区"){
		$("#select_campus select").css("color","#CCCCCC");
	}
	else{
		$("#select_campus select").css("color","#333333");
	}
}


/*选择标签类型*/
function labelStyleSelect(){
	/*下拉框样式控制*/
	if($('select[name="label_style"]').val()=="请选择标签类型"){
		$("#select_label_style select").css("color","#CCCCCC");
	}
	else{
		$("#select_label_style select").css("color","#333333");
	}
}

/* 文本框信息格式控制 */
function inputClearEvent() {
	
	/*输入用户名表单验证 */
	$('input[name="account"]').focus(function() {
		if ($(this).val() == '输入账户名'){
			$(this).val('');
			$(this).css("color", "#333333");
		}		
		$(".account_warn").show();
		$("#account_wword").html("6到18个字符区包括字母、数字、下划线");
		$(".account_warn img").attr("src","../../img/regist/u585.png");
		$("#account_wword").css("line-height","14px");
	});
    
	$('input[name="account"]').blur(function() {
		if ($(this).val() == '') {
			$(this).val("输入账户名");
			$(this).css("color", "#CCCCCC");
		}
		if($(this).val() != "输入账户名"){
			/*var regu = "^[0-9a-zA-Z\_]+$"; 
			var re = new RegExp(regu); 
			if(re.test($(this).val())&&6<=$(this).val().length&&$(this).val().length<=18) {*/
			if(6<=$(this).val().length&&$(this).val().length<=18) {
				$("#account_wword").html("");
				$(".account_warn img").attr("src","../../img/regist/u587.png");
			}				
			else{
				$(".account_warn img").attr("src","../../img/regist/u589.png");
				$("#account_wword").css({"line-height":"40px","margin-top":"0"});
				$("#account_wword").html("请输入正确格式的用户名");				
			}
		}
		else{
			$("#account_wword").html("6到18个字符区包括字母、数字、下划线");
			$(".account_warn img").attr("src","../../img/regist/u585.png");
			$("#account_wword").css("line-height","14px");
			$(".account_warn").hide();
		}
	});
	
	
	/*输入密码表单验证*/
	$("input[name='password']").focus(function() {
		if ($(this).val() == '输入密码') 
		{
			$(this).val('');
			$(this).attr("type", "password");
			$(this).css("color", "#333333");
		}
		$(".password_warn").show();
		$("#password_wword").html("6到16个字符区分大小写");
		$(".password_warn img").attr("src","../../img/regist/u585.png");
	});
	$('input[name="password"]').blur(function() {
			if ($(this).val() == '') {
				$(this).val("输入密码");
				$(this).attr("type", "text");
				$(this).css("color", "#CCCCCC");
			}
		if($(this).val() != "输入密码"){
			if(6<=$(this).val().length&&$(this).val().length<=16) {
				$("#password_wword").html("");
				$(".password_warn img").attr("src","../../img/regist/u587.png");
			}				
			else{
				$(".password_warn img").attr("src","../../img/regist/u589.png");
				$("#password_wword").html("请输入正确格式的密码");
			}
		}
		else{
			$("#password_wword").html("6到16个字符区分大小写");
			$(".password_warn img").attr("src","../../img/regist/u585.png");
			$(".password_warn").hide();
		}
	});
	
	
	/*再次输入密码表单验证*/
	$("input[name='password_again']").focus(function() {
		if ($(this).val() == '再次输入密码') 
		{
			$(this).val('');
			$(this).attr("type", "password");
			$(this).css("color", "#333333");
		}
		$(".password_again_warn").show();
		$("#password_again_wword").html("再次输入你设置的密码");
		$(".password_again_warn img").attr("src","../../img/regist/u585.png");
	});
	$('input[name="password_again"]').blur(function() {	
		if ($(this).val() == '') {
			$(this).val("再次输入密码");
			$(this).attr("type", "text");
			$(this).css("color", "#CCCCCC");
		}
		if($(this).val() != "再次输入密码"){
			if($(this).val()==$("input[name='password']").val()) {
				$("#password_again_wword").html("");
				$(".password_again_warn img").attr("src","../../img/regist/u587.png");
			}				
			else{
				$(".password_again_warn img").attr("src","../../img/regist/u589.png");
				$("#password_again_wword").html("两次输入的密码不一致");
			}
		}
		else{
			$("#password_again_wword").html("再次输入你设置的密码");
			$(".password_again_warn img").attr("src","../../img/regist/u585.png");
			$(".password_again_warn").hide();
		}
	});
	
	
	/*输入邮箱表单验证*/
	$('input[name="mailbox"]').focus(function() {
		if ($(this).val() == '绑定邮箱'){
			$(this).val('');
			$(this).css("color", "#333333");
		}
		$(".mailbox_warn").show();
		$("#mailbox_wword").html("输入邮箱，激活完成注册");
		$(".mailbox_warn img").attr("src","../../img/regist/u585.png");
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
				$(".mailbox_warn img").attr("src","../../img/regist/u587.png");
			}				
			else{
				$(".mailbox_warn img").attr("src","../../img/regist/u589.png");
				$("#mailbox_wword").html("请输入正确的邮件地址");
			}
		}
		else{
			$("#mailbox_wword").html("输入邮箱，激活完成注册");
			$(".mailbox_warn img").attr("src","../../img/regist/u585.png");
			$(".mailbox_warn").hide();
		}
	});
	
	
	/*分院名称表单验证 */
	$("input[name='fenyuan_name']").focus(function() {
		if ( $(this).val() == '分院名称') 
		{
			$(this).val('');
			$(this).css("color", "#333333");
		}		
	});
	$("input[name='fenyuan_name']").blur(function() {
			if ($(this).val() == '') {
				$(this).val('分院名称');
				$(this).css("color", "#CCCCCC");
		}
	});
	if($('input[name="fenyuan_name"]').val()!='分院名称'){
    	$('input[name="fenyuan_name"]').css("color", "#333333");
    }
	
	/*社团名称表单验证 */
	$("input[name='shetuan_name']").focus(function() {
		if ( $(this).val() == '社团名称') 
		{
			$(this).val('');
			$(this).css("color", "#333333");
		}		
	});
	$("input[name='shetuan_name']").blur(function() {
			if ($(this).val() == '') {
				$(this).val('社团名称');
				$(this).css("color", "#CCCCCC");
		}
	});
	if($('input[name="shetuan_name"]').val()!='社团名称'){
    	$('input[name="shetuan_name"]').css("color", "#333333");
    }
	
	/*分院简称表单验证 */
	$("input[name='fenyuan_shortname']").focus(function() {
		if ( $(this).val() == '分院简称') 
		{
			$(this).val('');
			$(this).css("color", "#333333");
		}		
	});
	$("input[name='fenyuan_shortname']").blur(function() {
			if ($(this).val() == '') {
				$(this).val('分院简称');
				$(this).css("color", "#CCCCCC");
		}
	});
	if($('input[name="fenyuan_shortname"]').val()!='分院简称'){
    	$('input[name="fenyuan_shortname"]').css("color", "#333333");
    }
	
	/*社团简称表单验证 */
	$("input[name='shetuan_shortname']").focus(function() {
		if ( $(this).val() == '社团简称') 
		{
			$(this).val('');
			$(this).css("color", "#333333");
		}		
	});
	$("input[name='shetuan_shortname']").blur(function() {
			if ($(this).val() == '') {
				$(this).val('社团简称');
				$(this).css("color", "#CCCCCC");
		}
	});
	if($('input[name="shetuan_shortname"]').val()!='社团简称'){
    	$('input[name="shetuan_shortname"]').css("color", "#333333");
    }
	
	/*账号负责人表单验证 */
	$("input[name='principal']").focus(function() {
		if ( $(this).val() == '账号负责人') 
		{
			$(this).val('');
			$(this).css("color", "#333333");
		}		
	});
	$("input[name='principal']").blur(function() {
			if ($(this).val() == '') {
				$(this).val('账号负责人');
				$(this).css("color", "#CCCCCC");
		}
	});
	if($('input[name="principal"]').val()!='账号负责人'){
    	$('input[name="principal"]').css("color", "#333333");
    }
	
	/*社团负责人表单验证 */
	$("input[name='shetuan_principal']").focus(function() {
		if ( $(this).val() == '社团负责人') 
		{
			$(this).val('');
			$(this).css("color", "#333333");
		}		
	});
	$("input[name='shetuan_principal']").blur(function() {
			if ($(this).val() == '') {
				$(this).val('社团负责人');
				$(this).css("color", "#CCCCCC");
		}
	});
	if($('input[name="shetuan_principal"]').val()!='社团负责人'){
    	$('input[name="shetuan_principal"]').css("color", "#333333");
    }
	
	/*输入手机号表单验证*/
	$('input[name="phone"]').focus(function() {
		if ( $(this).val() == '负责人电话') 
		{
			$(this).val('');
			$(this).css("color", "#333333");
		}
		$(".phone_warn").show();
		$("#phone_wword").html("输入11位手机号码");
		$(".phone_warn img").attr("src","../../img/regist/u585.png");
	});
	$('input[name="phone"]').blur(function() {	
		if ($(this).val() == '') {
			$(this).val('负责人电话');
			$(this).css("color", "#CCCCCC");
			}
		if($(this).val() != '负责人电话'){
			var regu =/^[1][0-9]{10}$/; 
			var re = new RegExp(regu); 
			if(re.test($(this).val())) {
				$("#phone_wword").html("");
				$(".phone_warn img").attr("src","../../img/regist/u587.png");
			}				
			else{
				$(".phone_warn img").attr("src","../../img/regist/u589.png");
				$("#phone_wword").html("请输入正确的手机号码");
			}
		}
		else{
			$("#phone_wword").html("输入11位手机号码");
			$(".phone_warn img").attr("src","../../img/regist/u585.png");
			$(".phone_warn").hide();
		}
	});
	if($('input[name="phone"]').val()!='负责人电话'){
    	$('input[name="phone"]').css("color", "#333333");
    }
	
	/*挂靠单位表单验证 */
	$("input[name='attached_institutions']").focus(function() {
		if ( $(this).val() == '挂靠单位') 
		{
			$(this).val('');
			$(this).css("color", "#333333");
		}		
	});
	$("input[name='attached_institutions']").blur(function() {
			if ($(this).val() == '') {
				$(this).val('挂靠单位');
				$(this).css("color", "#CCCCCC");
		}
	});
	if($('input[name="attached_institutions"]').val()!='挂靠单位'){
    	$('input[name="attached_institutions"]').css("color", "#333333");
    }
		
	/*选择校区*/
	if($('select[name="campus"]').val()!="请选择校区"){
		$("#select_campus select").css("color","#333333");
    }
	
	/*选择标签类型*/
	if($('select[name="label_style"]').val()!="请选择标签类型"){
		$("#select_label_style select").css("color","#333333");
	}

}