// JavaScript Document
/*去除所有的a标签class为ui*/
$(function(){
	$('a').removeClass('ui-link');
	/*菜单个数决定宽度*/
	var num=$(".hotel_menu>a").length;
	var oW=100/num;
	$(".hotel_menu>a").css("width",oW+'%');
		/*宽度够得时候*/
		$(window).resize(function (){
			serShow();
			})
			serShow();
		function serShow(){
			var oWidth=$(window).width();
			if(oWidth<375){
					$('.home_mkind').show();
					$('.home_kind').hide();
					/**/
					$("#over").find('i').css("width",100+'%');
					$("#over_show").show();
					$("#over_show").html('更多设施');
					/*隐藏的房间设施*/
					$("#over").find("i:gt(2)").hide();	
				}else{
					$('.home_mkind').hide();
					$('.home_kind').show();
					/**/
					$("#over").find('i').css("width",50+'%');
					$("#over").find('i').css("display","block");
					$("#over_show").hide();
					}
			}
			$("#over_show").click(function(){
						var $text=$(this).html();
						if($text=='更多设施'){
							$("#over").find("i:gt(2)").show();
							$(this).html('收起');
							}else{
								$("#over").find("i:gt(2)").hide();
								$(this).html('更多设施');
								}
						})
	/*文本的展开收起*/
	$('.present_right>.text_hide').parents('.present_right').hide()
	$('.present_right>.text_show').click(function(){
		$(this).parents('.present_right').hide();
		$('.present_right>.text_hide').parents('.present_right').show();
		})
	$('.present_right>.text_hide').click(function(){
		$(this).parents('.present_right').hide();
		$('.present_right>.text_show').parents('.present_right').show();
		})
	/**/
	})
/*旅游路线*/
var oTour , one , three = null;

window.onload=function(){
	oTour=document.getElementById("tour");
	one=oTour.children[0];
	three=oTour.lastChild;
}
$(function(){
	$(".tour").on("swipeleft",function(){
		left();
	});
	$(".tour").on("swiperight",function(){
		right();
	});
})
function left(){
	oTour=document.getElementById("tour");
	one=oTour.children[0];
	three=oTour.lastChild;
	oTour.appendChild(one);
}
function right(){
	oTour=document.getElementById("tour");
	one=oTour.children[0];
	three=oTour.lastChild;
	oTour.insertBefore(three,one);
}
/*跳转到新闻页*/
function openNew(){
		window.location.href='app_company.html?id=1';
		}