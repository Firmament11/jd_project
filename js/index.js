$('.myjd div').hide(); 				//我的京东
$('.coll>ol').hide();				//企业采购
$('.cutt div').hide();				//客户服务
$('.online div').hide();			//网站导航
$('.user>div').hide();  			//用户
$('.db div').hide();				//地址

//用户下的轮播
var num=0;
$('.choose .left').click(function(){
	num--;
	if(num==-1)num=0;
	$('.mid>ol').stop().animate({'left':-152*num+'px'},500);
})
$('.choose .right').click(function(){
	num++;
	if(num==4)num=3;
	$('.mid>ol').stop().animate({'left':-152*num+'px'},500);
})
//manu
$('header>ul>li').hover(function(){
	if($(this).children().eq(0).html()!=''){
		$(this).addClass('bgwhite');
		$(this).children().eq(0).show();
	}
},function(){
	if($(this).children().eq(0).html()!=''){
		$(this).removeClass('bgwhite');
		$(this).children().eq(0).hide();
	}
})
$('.db .up dd').click(function(){
		$('.db>.place').html($(this).html());
})
//轮播小圆点
// $('.big>li').hide();

$('.go1>img').hide();
$('.go1>img').eq(0).show();

	var num1=-1;
	var timer;
	function go1(){
		timer=setInterval(function(){			
			num1++;
			if(num1==8)num1=0;
			$('.go1>img').eq(num1-1).fadeOut();
			$('.go1>img').eq(num1).fadeIn();
			$('.small>li').eq(num1).siblings().css('opacity','0.4');
			$('.small>li').eq(num1).css('opacity','1');	
			$('.big>li').eq(num1).siblings().css('opacity','0');		
			$('.big>li').eq(num1).css('opacity','0.3');			
		},2000)		
	}
	go1();
	$('.go1').hover(function(){
		clearInterval(timer);
		$('.go1 li').hover(function(){
			var index=$(this).index();
            $('.small>li').eq(index).siblings().css('opacity','0.4');
			$('.small>li').eq(index).css('opacity','1');	
			$(this).siblings().css('opacity','0');		
			$(this).css('opacity','0.3');				
			$('.go1>img').eq(index).siblings('img').fadeOut();
			$('.go1>img').eq(index).fadeIn();
	},function(){})
	},function(){
		go1();
	})
	$('.go1-left').click(function(){
			num1--;
			if(num1==-2)num1=7;
			$('.go1>img').eq(num1).siblings('img').fadeOut();
			$('.go1>img').eq(num1).fadeIn();
			$('.small>li').eq(num1).siblings().css('opacity','0.4');
			$('.small>li').eq(num1).css('opacity','1');	
			$('.big>li').eq(num1).siblings().css('opacity','0');		
			$('.big>li').eq(num1).css('opacity','0.3');
		})
	$('.go1-right').click(function(){
		num1++;
		if(num1==8)num1=0;
			$('.go1>img').eq(num1).siblings('img').fadeOut();
			$('.go1>img').eq(num1).fadeIn();
			$('.small>li').eq(num1).siblings().css('opacity','0.4');
			$('.small>li').eq(num1).css('opacity','1');	
			$('.big>li').eq(num1).siblings().css('opacity','0');		
			$('.big>li').eq(num1).css('opacity','0.3');
	})
	$('.go1 span').hover(function(){
		$(this).css('background','rgba(0,0,0,0.6)');
	},function(){
		$(this).css('background','rgba(0,0,0,0.2)');
	})
	$('.go2 span').hover(function(){
		$(this).css('background','rgba(0,0,0,0.6)');
	},function(){
		$(this).css('background','rgba(0,0,0,0.2)');
	})
$('.go2 div').hide();
$('.go2 div').eq(1).show();
$('.go2 span').hide();
	var n=0;
	var timer1;
	function go2(){
		timer1=setInterval(function(){			
			n++;
			if(n==3)n=0;
			$('.go2>div').eq(n).siblings('div').fadeOut();
			$('.go2>div').eq(n).fadeIn();		
		},10000)		
	}
	go2();
	$('.go2').mouseenter(function(){
		clearInterval(timer1);
		$('.go2 span').show();
	})
	$('.go2').mouseleave(function(){
		$('.go2 span').hide();
		go2();
	})
	$('.go2-left').click(function(){
			n--;
			if(n==-1)n=2;
			$('.go2>div').eq(n).siblings('div').fadeOut();
			$('.go2>div').eq(n).fadeIn();
	})
	$('.go2-right').click(function(){
		n++;
		if(n==3)n=0;
			$('.go2>div').eq(n).siblings('div').fadeOut();
			$('.go2>div').eq(n).fadeIn();
	})


$('.two').hide();

var arr=['1.png','3.png','5.png','7.png','9.png','11.png','13.png','15.png','17.png','19.png','21.png','23.png'];

for(var i=0;i<arr.length;i++){
	$('.one li').eq(i).children('span').css('background','url(images/index/'+arr[i]+')');
	$('.one li').eq(i).children('span').css('background-size','24px 24px');
}
//banner title
$('.title').hide();
var k;
$('.banner>ul>li').hover(function(){
	k=$(this).index();
	$('.title').eq(k).siblings('.title').hide();
	$('.title').eq(k).show();
},function(){
	$('.title').eq(k).hide();
})
//middle
var m=0;
	$('.mid-left').click(function(){
			m--;
			if(m==-1){
				m=3;
				$('.middle>ul').css({'left':'-812'*m+'px'})
				m=2;
			};
			$('.middle ul').stop().animate({'left':'-812'*m+'px'},1000);
	})
	$('.mid-right').click(function(){
		m++;
		if(m==4){
			m=0;
			$('.middle>ul').css({'left':'-812'*m+'px'})
			m=1;
		};
		$('.middle>ul').stop().animate({'left':'-812'*m+'px'},1000);
	})
	$('.middle>span').hover(function(){
		$(this).css('background','rgba(0,0,0,0.6)');
	},function(){
		$(this).css('background','rgba(0,0,0,0.2)');
	})
	$('.middle>span').hover(function(){
		$(this).css('background','rgba(0,0,0,0.6)');
	},function(){
		$(this).css('background','rgba(0,0,0,0.2)');
	})
//secondkill 第二个轮播
var killnum=0;
var time2=setInterval(function(){
	killnum++;
		if(killnum==3){
			killnum=0;
			$('.behind>ul').css('left',-178*killnum+'px');
			killnum=1;
		}	
		if(killnum==0||killnum==2){
			$('.behind>ol').children().eq(0).css('background','red');
			$('.behind>ol').children().eq(1).css('background','#a1a1a1');
		}else{
			$('.behind>ol').children().eq(0).css('background','#a1a1a1');
			$('.behind>ol').children().eq(1).css('background','red');	
		}	
	$('.behind>ul').animate({'left':-178*killnum+'px'},500);
},1000)
//发现好货
var tt=0;var time2;
function toto(){
	time2=setInterval(function(){
		tt++;
		if(tt>=1200){tt=0;}
		$('.lun>ul').css('left',-1*tt+'px');
	},10)
}
toto();
	$('.good2').hover(function(){
		clearInterval(time2);
	},function(){
		toto();
	})	

//固定栏
$('.fix1').hide();
$(window).scroll(function(event) {
	if($(window).scrollTop()>=500){
		$('.fix1').slideDown();
	}else{		
		$('.fix1').slideUp();
	}
});


$('.fix3 li').eq(1).hover(function(){
	$(this).css('background','url("images/index/aa.png")');
	$(this).css('background-size', '56px 56px');
},function(){
	$(this).css('background','url("images/index/aaa.gif")');
	$(this).css('background-size', '56px 56px'); 
})

$('.fix3 li').eq(7).hide();
$(window).scroll(function(event) {
	if($(window).scrollTop()>=1200){
		$('.fix3 li').eq(7).slideDown();
	}else{		
		$('.fix3 li').eq(7).slideUp();
	}
});
$('.fix3 li').eq(7).click(function(){
	$('html,body').animate({'scrollTop':0});
});

//侧边栏

var secondkill=$('.secondkill').offset().top;
var newyear=$('.newyear').offset().top;
var good=$('.good').offset().top;

$('.fix3 li').click(function(){
	var index=$(this).index();
	if(index==0){
		$('html,body').animate({'scrollTop':secondkill-100});
	}else if(index==1){
		$('html,body').animate({'scrollTop':newyear-100});
	}else if(index==2){
		$('html,body').animate({'scrollTop':good-100});
	}
	
});


setInterval(function(){
	var Time=new Date();
	var key=new Date('2020,1,14');//获取十四号的毫秒数（从1970）
	var now=Time.getTime();
	var center=key.getTime()-now;//从现在到14号的毫秒数；
	var hours=parseInt(center/3600000);
	var minutes=parseInt((center%3600000)/60000);
	var seconds=parseInt(((center%3600000)%60000)/1000);
	$('.hours').html(hours);
	$('.minutes').html(minutes);
	$('.seconds').html(seconds);	
},1000);


