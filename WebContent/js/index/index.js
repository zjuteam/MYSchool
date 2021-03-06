/* index.js */
/* globals */

var rotate = null;
var intervalID = null;
var increID = 0;
var sliding = null;
var intervalTime = 3000;
var imageSpeed = 1000;

function testPrompt() {
	$('input[type="submit"]').click(function(event) {
		event.preventDefault();
		var href = prompt('请问你要登录的后台是？','团委后台');
		switch(href) {
		case '团委后台':
			window.location.href="view/tuanwei/send_activities.html";
		break;
		case '分院后台':
			window.location.href="view/fenyuan/send_activities.html";
		break;
		case '社团后台':
			window.location.href="view/shetuan/send_activities.html";
		break;
		case null:
			break;
		default:
			alert('输入有误');
		break;
		}
	});
}

$(function(){
	testPrompt();
	funcHover();
	loadTime();
	slideScreen();
	autoSliding();
	funcHoverChange();
	inputClearEvent();
});

/* 自动轮转 */
function autoSliding() {
	sliding = function() {
		var imageBox = $('.imageRotation').children(".imageBox")[0];
		var imageWidth = $('.imageRotation').width();
		
		$(imageBox).animate({left:"-" + (increID)*imageWidth + "px"} , imageSpeed);
		increID++;
		increID %= 5;
	};
	intervalID = setInterval(sliding,intervalTime);	// 记录interval ID
}

function slideScreen() {
	$(".imageRotation").each(function(){
		var imageRotation = this,  // 图片轮换容器
			imageBox = $(imageRotation).children(".imageBox")[0],  // 图片容器
			imageWidth = $(imageRotation).width(),  // 图片宽度
			imageNum = $(imageBox).children().size(),  // 图片数量
			imageReelWidth = imageWidth*imageNum;  // 图片容器宽度
		// 设置 图片容器 的宽度
		$(imageBox).css({'width' : imageReelWidth + "px"});
		rotate = function(clickID) {
			// start from 0
			// first cancel interval
			clearInterval(intervalID);
			$(imageBox).stop();
			$(imageBox).animate({left:"-" + (clickID) * imageWidth + "px"},{ duration:1200,easing:'easeOutBounce' });
		};
	});
}

function funcHoverChange() {
	$('.left_side').each(function(index) {
		$(this).hover(function() {
			rotate(index);
		},function() {
			// restart interval
			increID = 0; // restart from beginning
			intervalID = setInterval(sliding, 3000);
		});
	});
}

/* 加载用时 */
function loadTime() {
	var elapse = (new Date().getTime() - start);
	$('#elapse').html(elapse);
}

function funcHover() {
	$('.left_side img').hover(function() {
		$(this).parent('.left_side').
		next('.right_side').
		children('.title').
		css('color','#87b822').
		css('margin-top','4px').
		css('margin-bottom','2px').
		next().
		css('margin-top','-4px');
	},function() {
		$(this).parent('.left_side').
		next('.right_side').
		children('.title').
		css('color','#999').
		css('margin-top','0').
		next().
		css('margin-top','8px');	
	});
}

function inputClearEvent() {
	
	$('#username').focus(function() {
		if($(this).val() == '用户名')
			$(this).val('');		
	});
	$('#username').blur(function() {
		if($(this).val() == '')
			$(this).val('用户名');		
	});
	
	$('#password').focus(function() {
		if($(this).val() == '密码') {
			$(this).val('');
			$(this).attr("type", "password");
		}
	});
	$('#password').blur(function() {
		if($(this).val() == '') {
			$(this).attr("type", "text");
			$(this).val('密码');
		}
	});

}