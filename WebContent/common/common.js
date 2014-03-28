var origin = ['send_activity','statistic','send_newsfeed','setting','profile'];
var trans = ['send_activity1','statistic1','send_newsfeed1','setting1','profile1'];

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

function readURL(input,targetId) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#' + targetId).attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}