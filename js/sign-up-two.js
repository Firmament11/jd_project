$('.tip').hide();

$('button').click(function(){
	var flag=true;
	var username=$('main>form input').eq(0).val();
	var password1=$('main li>input').eq(1).val();
	var password2=$('main li>input').eq(2).val();
	var email=$('li>input').eq(3).val();
	if(username==''){
		$('.tip1').siblings('.tip').hide();
		$('.tip1').show();
		return false;
	}else if(password1==''){
		$('.tip2').siblings('.tip').hide();
		$('.tip2').show();
		return false;
	}else if(password2==''){
		$('.tip3').siblings('.tip').hide();
		$('.tip3').show();
		return false;
	}else if(email==''){
		$('.tip4').siblings('.tip').hide();
		$('.tip4').show();
		return false;
	}
	return flag;
});

$('form li').click(function(){
	var index=$(this).index();
	index=index/2;
	console.log(index);
	$('.tip').eq(index).hide();
});
