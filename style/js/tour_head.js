// JavaScript Document
$(function(){
	var oSh=$('.tour_name>span').height();
	$('.tour_name>span').css('margin-top',-oSh/2);
	$(window).resize(function(){
		var oSh=$('.tour_name>span').height();
		$('.tour_name>span').css('margin-top',-oSh/2);
	})
	var oHotelh=$('.hotel_name>span').height();
	$('.hotel_name>span').css('margin-top',-oHotelh/2);
	$(window).resize(function(){
		var oHotelh=$('.hotel_name>span').height();
		$('.hotel_name>span').css('margin-top',-oHotelh/2);
	})
	//房间图片详情;
	conten();
	function conten(){
		var oWidth=$(window).width();
		if(oWidth>550){
			var oPrev=$('.tour_info');
			var aW=$(oPrev).eq(1).width();
			for(var i=0;i<oPrev.length;i++){
				var oH=aW*179/134;
				$(oPrev).eq(i).css('height',oH)
			}
		}
		else{
			var oPrev=$('.tour_info');
			for(var i=0;i<oPrev.length;i++){
				var aW=$(oPrev).eq(i).width();
				var oH=aW*179/134;
				$(oPrev).eq(i).css('height',oH)
			}
		}
	}
	//屏幕切换 获取高度,
	$(window).resize(function(){
		conten();
	})
	//左右切换 获取高度
	$(function(){
		$(".tour").on("swipeleft",function(){
			conten();
		});
		$(".tour").on("swiperight",function(){
			conten();
		});
	})
	/*酒店图片的放大缩小*/
	var $oW=$('.stroke_img li').width();
	var h=$oW*113/164;
	$('.stroke_img li').css('height',h);
	$(window).resize(function(){
		var $oW=$('.stroke_img li').width();
		var h=$oW*113/164;
		$('.stroke_img li').css('height',h);
	})
	//点击放大图片
	$('.stroke_img li img').click(function(){
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
	
})