// $('footer').hide();
$('.address div').children('.A').hide();
// $('.address div').children('.usually').hide();
$('.tip1').hide();
$('.tip2').hide();
$('.tip3').hide();
$('.tip4').hide();
$('.tip-right').hide();
$('.address>div').hide();
$('.many').hover(function(){
	$('.address').css('border-right','1px solid #000');
	$('.many').css('border','1px solid #000');
	$('.many').children().click(function(){
		$('.address').css('border-right','1px solid #dddddd');
		$('.many').css('border','1px solid #dddddd');
		$(this).siblings().removeClass('border');
		$(this).addClass('border');
		if($('.address').hasClass('border')){
			$('.address').css('border-right','1px solid #000');
		}
		return false;
	})
},function(){
	if($('.address').hasClass('border')){
		$('.address').css('border-right','1px solid #000');
		$('.many').css('border','1px solid #dddddd');
	}else{
		$('.address').css('border-right','1px solid #dddddd');
		$('.many').css('border','1px solid #dddddd');
	}	
	
})

$('html').click(function(){
	$('.many').children().removeClass('border');
	$('.address').css('border-right','1px solid #dddddd');
	$('.many').css('border','1px solid #dddddd');
})
$('.address p').eq(0).children().click(function(){
	$(this).siblings().removeClass('red');
	$(this).addClass('red');
	var index=$(this).index();
	var num=$(this).text();
	$('.address p').eq(1).text(num);
	$('.address ol').eq(index).siblings('ol').hide();
	$('.address ol').eq(index).show();
});

var arr=['a.png','a.png','b.png','c.png','d.png','e.png','f.png','g.png','h.png','j.png'];
var arr1=['b.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png']
for(var i=0;i<$(arr).length;i++){
	$('.usually>li').eq(i).children('span').eq(0).css('background','url(../images/flag/'+arr[i]+')');
	$('.usually>li').eq(i).children('span').eq(0).css('background-size','22px 16px');
}
for(var i=0;i<$(arr1).length;i++){
	$('.A>li').eq(i).children('span').eq(0).css('background','url(../images/flag/'+arr1[i]+')');
	$('.A>li').eq(i).children('span').eq(0).css('background-size','22px 16px');
}
$('.address ol>li').click(function(){
	// $('.address>.first').text($(this).text());
		$('.address>.first').text($(this).children().eq(1).text());
		$('.address>.second').text($(this).children().eq(2).text());
})
$('.address').click(function(){
	$('.address>div').show();	
})
$('html').click(function(){
	$('.address>div').hide();	
});
//输入框
$('.many>input').click(function(){
	$('.address>div').hide();	
});

$('.many>input').focus(function(){
	$('.tip1').show();
	$('.tip1').siblings('.tip').hide();
})


//手机号
var deg=/^[0-9]{11}$/;
$('.many>input').blur(function(){
	$('.tip1').hide();
	if($('.many>input').val()!=''){
		if(!$('.many>input').val().match(deg)){
			$('.tip3').show();
		}else{
			$('.tip-right').show();
		}		
	}
})
$('button').click(function(){
	var flag=true;
	var d=$('.many>input').val();
	if(d==''){
		$('.tip2').show();
		flag=false;
	}else if(!$('.many>input').val().match(deg)){
		flag=false;
	}
	return flag;
});