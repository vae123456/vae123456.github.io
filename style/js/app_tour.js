// JavaScript Document
var oMenu,oBox,aA,aDiv;
var n=0;
//var href;
//href=window.location.href;
function obj(menu,preav){
	oMenu=document.getElementById(menu);
	oBox=document.getElementById(preav);
	aA=oMenu.children;
	aDiv=oBox.children;	
	for(var i=0;i<aA.length;i++){
		(function(index){
			aA[i].onclick=function(){
				n=index;
				lunBo(n);
			}
		})(i)
	}
}
$(window).on("swipeleft",function(){
		next();
	});
	$(window).on("swiperight",function(){
		prev();
	});
	function lunBo(n){
		for(var i=0;i<aA.length;i++){
			aA[i].className='menu_info';
			aDiv[i].className='hide';
		}
		aA[n].className='menu_info menu_active';
		aDiv[n].className='show';
		//window.location.href=href+'#id'+'='+n;
	}
	function next(){
		n++;
		if(n==aA.length){
			n=0;
		}
		lunBo(n);
	}
	function prev(){
		n--;
		if(n==-1){
			n=aA.length-1;
		}
		lunBo(n);
	}
$(function(){
	/*菜单个数决定宽度*/
	var num=$(".tour_menu>a").length;
	var oW=100/num;
	$(".tour_menu>a").css("width",oW+'%');
	/*去除所有的a标签class为ui*/
	$('a').removeClass('ui-link');
	/*页面的左右切换*/
	obj('menu','box');
	/*直接执行跳转到新闻*/
	var url=window.location.href;
	index=url.indexOf('id=1');
	if(index!=-1){
		n=1;
		lunBo(n);
	}
	//window.location.href=href+'#id'+'='+n;
	/*酒店图片的放大缩小*/
	var $oW=$('.old_obj li span').width();
	var h=$oW*113/164;
	$('.old_obj li span').css('height',h);
	$(window).resize(function(){
		var $oW=$('.old_obj li span').width();
		var h=$oW*113/164;
		$('.old_obj li span').css('height',h);
	})
	//点击放大图片
	$('.old_obj li span img').click(function(){
		var _src=$(this).attr('src');
		var oDiv=document.createElement('div');
		var oDiv1=document.createElement('div');
		var oDiv2=document.createElement('div');
		var oImg=document.createElement('img');
		oDiv.className='pop';
		oDiv1.className='pop_img';
		oDiv2.className='pop_bg';
		document.body.appendChild(oDiv);
		oDiv.appendChild(oDiv1);
		oDiv.appendChild(oDiv2);
		oDiv1.appendChild(oImg);
		$('.pop_img').children('img').attr('src',_src);
		$('.pop').click(function(){
			$(this).remove();
		})
	})
	//报纸
/*	var $num=$('.hide .paper li').length;
	var $aPaper=$('.hide .paper li').width();
	$('.hide .paper').css('width',$num*$aPaper);*/
	
})

