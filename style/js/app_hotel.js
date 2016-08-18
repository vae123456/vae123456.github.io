// JavaScript Document
/*菜单个数决定宽度*/
$(function(){
	Text();
	})
$(window).resize(function(){
		show();
		})
/*酒店展示瀑布流*/
	/*通过class获取元素*/
	function getByClass(parent,iClass){
		var obj=document.getElementById(parent);
		var aClass=obj.getElementsByTagName('*');
		var classArr=[];
		for(var i=0;i<aClass.length;i++){
			if(aClass[i].className==iClass){
				classArr.push(aClass[i]);
				}
			}
			return classArr;
		}
	/*找到最小的数*/
	function iMin(arr,start){
		var iMin=arr[start];
		var iMinIdex=start;
		for(var i=start;i<arr.length;i++){
			if(arr[i]<iMin){
				iMin=arr[i];
				iMinIdex=i;
				}
			}
			return iMinIdex;
		}
	/*展示*/
	function show(){
		var oShow=document.getElementById('sshow');
		var aShow=getByClass('sshow','show_info');
		var imgWidth=aShow[0].offsetWidth;
		var num=2;
		var Showminheight=[];
		for(var i=0;i<aShow.length;i++){
			if(i<num){
				Showminheight[i]=aShow[i].offsetHeight;
				}else{
					var oMin=iMin(Showminheight,0);
					aShow[i].style.position='absolute';
					aShow[i].style.top=Showminheight[oMin]+"px";
					aShow[i].style.left=aShow[oMin].offsetLeft+"px";
					Showminheight[oMin]=Showminheight[oMin]+aShow[i].offsetHeight;
					}
			}
		}
	/*图片加载*/
	var data={'data':["pictrue1","pictrue2","pictrue3","pictrue4","pictrue5","pictrue6"]};
	var text=["南京度假村酒店客房内部","三亚酒店","亚洲品牌年度领军人物大奖亚洲品牌成长100强","亚洲品牌年度领军人物大奖",
				"亚洲品牌年度领军人物大奖","亚洲品牌年度领军人物大奖"];
	function Text(){
			for(var i=0;i<data.data.length;i++){
			var oShow=document.getElementById("sshow");
			var odiv=document.createElement('div');
			odiv.className='show_info';
			oShow.appendChild(odiv);
			var oimg=document.createElement('div');
			oimg.className='info_img';
			odiv.appendChild(oimg);
			/*内部的四个子元素*/
			var oLeft=document.createElement('span');
			oLeft.className='img_left';
			oimg.appendChild(oLeft);
			var oRight=oLeft.cloneNode(true);
			oRight.className='img_right';
			oimg.appendChild(oRight);
			var oimages=document.createElement('img');
			oimages.src="style/img/hotel/"+data.data[i]+'.png';
			oimg.appendChild(oimages);
			var oText=oLeft.cloneNode(true);
			oText.className='img_text';
			oimg.appendChild(oText);
			oText.innerHTML=text[i];
			}
			oShow.lastChild.style.marginBottom=71+"px";
		}
/**/

$(function(){
	/*菜单个数决定宽度*/
	var num=$(".tour_menu>a").length;
	var oW=100/num;
	$(".tour_menu>a").css("width",oW+'%');
	/*去除所有的a标签class为ui*/
	$('a').removeClass('ui-link');
	/*页面的左右切换*/
	obj('menu','box');
	// JavaScript Document
	var oMenu,oBox,aA,aDiv;
	var n=0;
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
		aDiv[n].className='hide show';
		if(n==2||n==1){
			show();	
		}
	
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
	/*//点击放大图片
	$('.info_img').click(function(){
		var _src=$(this).children('img').attr('src');
		$('.pop').show();
		$('.pop_img').children('img').attr('src',_src);
	})
	$('.pop').click(function(){
		$(this).hide();
	})*/
	//点击放大图片
	$('.info_img').click(function(){
		var _src=$(this).children('img').attr('src');
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

