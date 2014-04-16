/**
 * 用于进行二级菜单的控制
 */
$(function() {
	managingOrganizations();//组织管理二级菜单
	setTypes();//设置二级菜单
	briefIntroduction();//简介二级菜单
});

function managingOrganizations(){
	$(".zzgl").hover(function(){
		if($("#tuanwei_zzgl .tuanwei_select").is(":hidden")){
			$(".zzgl .up_to_down").attr("src","../../img/tuanwei/down1.png");
		}
		else{
			$(".zzgl .up_to_down").attr("src","../../img/tuanwei/up1.png");
		}
	},function(){
		if($("#tuanwei_zzgl .tuanwei_select").is(":hidden")){
			$(".zzgl .up_to_down").attr("src","../../img/tuanwei/down.png");
		}
		else{
			$(".zzgl .up_to_down").attr("src","../../img/tuanwei/up.png");
		}
	});
	$('a.zzgl').click(function() {
		if($("#tuanwei_zzgl .tuanwei_select").is(":hidden")){
			$("#tuanwei_zzgl .tuanwei_select").show();
			$(".zzgl .up_to_down").attr("src","../../img/tuanwei/up1.png");
			$(".zzgl").hover(function(){
				$(".zzgl .up_to_down").attr("src","../../img/tuanwei/up1.png");
			},function(){
				$(".zzgl .up_to_down").attr("src","../../img/tuanwei/up.png");
			});
		}
		else{
			$("#tuanwei_zzgl .tuanwei_select").hide();
			$(".zzgl .up_to_down").attr("src","../../img/tuanwei/down1.png");
			$(".zzgl").hover(function(){
				$(".zzgl .up_to_down").attr("src","../../img/tuanwei/down1.png");
			},function(){
				$(".zzgl .up_to_down").attr("src","../../img/tuanwei/down.png");
			});
		}
	});
}


//简介二级菜单
function briefIntroduction(){
	$(".zzjj").hover(function(){
		if($("#tuanwei_jj .tuanwei_select").is(":hidden")){
			$(".zzjj .up_to_down").attr("src","../../img/tuanwei/down1.png");
		}
		else{
			$(".zzjj .up_to_down").attr("src","../../img/tuanwei/up1.png");
		}
	},function(){
		if($("#tuanwei_jj .tuanwei_select").is(":hidden")){
			$(".zzjj .up_to_down").attr("src","../../img/tuanwei/down.png");
		}
		else{
			$(".zzjj .up_to_down").attr("src","../../img/tuanwei/up.png");
		}
	});
	$('a.zzjj').click(function() {
		if($("#tuanwei_jj .tuanwei_select").is(":hidden")){
			$("#tuanwei_jj .tuanwei_select").show();
			$(".zzjj .up_to_down").attr("src","../../img/tuanwei/up1.png");
			$(".zzjj").hover(function(){
				$(".zzjj .up_to_down").attr("src","../../img/tuanwei/up1.png");
			},function(){
				$(".zzjj .up_to_down").attr("src","../../img/tuanwei/up.png");
			});
		}
		else{
			$("#tuanwei_jj .tuanwei_select").hide();
			$(".zzjj .up_to_down").attr("src","../../img/tuanwei/down1.png");
			$(".zzjj").hover(function(){
				$(".zzjj .up_to_down").attr("src","../../img/tuanwei/down1.png");
			},function(){
				$(".zzjj .up_to_down").attr("src","../../img/tuanwei/down.png");
			});
		}
	});
}

//设置二级菜单
function setTypes(){
	$(".zhsz").hover(function(){
		if($("#tuanwei_sz .tuanwei_select").is(":hidden")){
			$(".zhsz .up_to_down").attr("src","../../img/tuanwei/down1.png");
		}
		else{
			$(".zhsz .up_to_down").attr("src","../../img/tuanwei/up1.png");
		}
	},function(){
		if($("#tuanwei_sz .tuanwei_select").is(":hidden")){
			$(".zhsz .up_to_down").attr("src","../../img/tuanwei/down.png");
		}
		else{
			$(".zhsz .up_to_down").attr("src","../../img/tuanwei/up.png");
		}
	});
	$('a.zhsz').click(function() {
		if($("#tuanwei_sz .tuanwei_select").is(":hidden")){
			$("#tuanwei_sz .tuanwei_select").show();
			$(".zhsz .up_to_down").attr("src","../../img/tuanwei/up1.png");
			$(".zhsz").hover(function(){
				$(".zhsz .up_to_down").attr("src","../../img/tuanwei/up1.png");
			},function(){
				$(".zhsz .up_to_down").attr("src","../../img/tuanwei/up.png");
			});
		}
		else{
			$("#tuanwei_sz .tuanwei_select").hide();
			$(".zhsz .up_to_down").attr("src","../../img/tuanwei/down1.png");
			$(".zhsz").hover(function(){
				$(".zhsz .up_to_down").attr("src","../../img/tuanwei/down1.png");
			},function(){
				$(".zhsz .up_to_down").attr("src","../../img/tuanwei/down.png");
			});
		}
	});
}