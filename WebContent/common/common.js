var origin = ['发送活动','统计','发布资讯','设置','简介'];
var trans = ['发送活动1','统计1','发布资讯1','设置1','简介1'];

function changeImgWhenHover() {
	$('.item').each(function(index) {
		$(this).hover(function() {
			$(this).children().attr('src','../fenyuan/img/' + trans[index] + '.png');
		},function() {
			if(!$(this).hasClass('selected'))
				$(this).children().attr('src','../fenyuan/img/' + origin[index] + '.png');
		});
	});
}