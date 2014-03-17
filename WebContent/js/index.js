/* index.js */
/* globals */

var rotate = null;
var intervalID = null;
var increID = 0;
var sliding = null;
var intervalTime = 3000;
var imageSpeed = 1000;

$(function(){
	setDownloadIconHover();
	registerTabboxClick();
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
			$(imageBox).animate({left:"-" + (clickID) * imageWidth + "px"},150);
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

function setDownloadIconHover() {
	$('.iphone').hover(function() {
		$(this).attr('src','img/iphone_download_mouse_over.png');
	},function() {
		$(this).attr('src','img/iphone_download_mouse_out.png');
	});
	$('.android').hover(function() {
		$(this).attr('src','img/android_download_mouse_over.png');
	},function() {
		$(this).attr('src','img/android_download_mouse_out.png');
	});
}

function registerTabboxClick() {
	$('.tuanwei').click(function() {
		if($(this).hasClass('right_select')) {
			// 改变tabbox样式
			$(this).removeClass('right_select');
			$('.shetuan').addClass('left_select');
			// 切换表单
			$('.tw_panel').show();
			$('.st_panel').hide();

		}
	});
	$('.shetuan').click(function() {
		if($(this).hasClass('left_select')) {
			$(this).removeClass('left_select');
			$('.tuanwei').addClass('right_select');
			$('.st_panel').show();
			$('.tw_panel').hide();
		}
	});
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
	$('input[type="text"]').focus(function() {
		if($(this).val() == '用户名')
			$(this).val('');
	});
	$('.tw_panel input[type="password"]').focus(function() {
		$('.pwdtip1').hide();
	});
	$('.tw_panel input[type="password"]').blur(function() {
		if($(this).val() == '') {
			$('.pwdtip1').show();
		}
	});
	$('.st_panel input[type="password"]').focus(function() {
		$('.pwdtip2').hide();
	});
	$('.st_panel input[type="password"]').blur(function() {
		if($(this).val() == '') {
			$('.pwdtip2').show();
		}
	});
	$('input[type="password"]').focus(function() {
		$('.pwdtip').hide();
	});	
	$('input[type="text"]').blur(function() {
		if($(this).val() == '') {
			$(this).val("用户名");
		}
	});


}