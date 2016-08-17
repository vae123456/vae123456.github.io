// JavaScript Document
$(function(){
	/*表单提示内容*/
	$.fn.Foc=function(){
		var $aInp=$(this).find('input').eq(0);
		var $aLab=$(this).find('label').eq(0);
		$aInp.focus(function(){
			$aLab.css('display',"none");
			$(this).parent().next().text('');
			})
		$aInp.blur(function(){
			if($aInp.val()==''){
				$aLab.css('display',"block");
				switch($aLab.html()){
					case '手环推广码':
						$(this).parent().next().text('请填写手环推广码');
						break;
					case '手机验证码':
						$(this).parent().next().text('手机验证码不能为空');
						break;
					case '图片验证码':
						$(this).parent().next().text('请正确填写验证码');
						break;
					case '收件人姓名':
						$(this).parent().next().text('请填写收件人姓名');
						break;
					case '收件人详细地址':
						$(this).parent().next().text('请填写完整的收件人地址');
						break;
					}
				}
			})
	}
	
	$('.number').each(function() {
        $(this).Foc();
    })
	//判断手机号
	$('.number_photo').blur(function(){
		var tel=this.value;
		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
		if(!reg.test(tel)){
			$('.number_photo').parent().next().text('请正确填写手机号码');
		}
	})
	/*提交申请为灰*/
	$('.btn_check[type=checkbox]').click(function(){
		var $aCheck=$('.btn_check[type=checkbox]').attr('checked');
		if($aCheck=='checked'){
			$('#checked').css('background','#cccccc');
			$('#checked').attr('disabled',true);
			$aCheck=$('.btn_check[type=checkbox]').attr('checked',false);
		}else{
			$('#checked').css('background','#00683d');
			$('#checked').attr('disabled',false);
			$aCheck=$('.btn_check[type=checkbox]').attr('checked',true);
		}
	})
	/*分享协议*/
	$('.txt').click(function(){
		$('.share').show();
		$('.share i').click(function(){
			$('.share').hide();
		})
	})
	/*提交信息*/
	$('#info').click(function(){
		$('.confirm').show();
	})
	$('#return').click(function(){
		$('.confirm').hide();
	})
	/*提交表单*/
	$('#checked').click(function(){
		$('.tab').hide();
		$('.tab').eq(1).show();
		$('.menu a').eq(1).addClass('menu_active');
		$('.move a').eq(1).addClass('move_active');
	})
	$('#three').click(function(){
		$('.tab').hide();
		$('.tab').eq(2).show();
		$('.menu a').eq(2).addClass('menu_active');
		$('.move a').eq(2).addClass('move_active');
	})
})