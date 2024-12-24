// login.js
$(document).ready(function(){
	// Hide initial elements
	$('.mid2').hide(); // 手机&二维码
	$('.midd').hide();
	$('.tipp').hide(); // 提示信息

	// 二维码区域的悬停效果
	$('.mid-top').hover(
		function(){
			$('.mid1').stop().animate({'left':'19px'}, 400);
			$('.mid2').stop().show(400);
		},
		function(){
			$('.mid1').stop().animate({'left':'84px'}, 400);
			$('.mid2').stop().hide(400);
		}
	);

	// 切换“扫码登录”和“账户登录”
	$('.login-all > ul > li').click(function(){
		$(this).addClass('redd').siblings().removeClass('redd');
		var index = $(this).index();
		$('.login-all > .mid, .login-all > .midd').hide();
		if(index === 0){
			$('.mid').show();
		} else {
			$('.midd').show();
		}
	});

	// 更改边框颜色的函数
	function getRed(selector){
		$(selector).css('border', '1px solid red');
	}

	function getGray(selector){
		$(selector).css('border', '1px solid #bdbdbd');
	}

	// 处理登录按钮点击事件
	$('#loginForm').on('submit', function(e){
		e.preventDefault(); // 阻止表单默认提交

		var username = $('#username').val().trim();
		var password = $('#password').val().trim();
		var flag = true;

		// 重置边框颜色
		getGray('#username');
		getGray('#password');

		// 验证输入
		if(username === '' && password === ''){
			$('.tip1').show().siblings('.tipp').hide();
			getRed('#username');
			getRed('#password');
			flag = false;
			alert('请输入账号和密码。');
		} else if(username === ''){
			$('.tip2').show().siblings('.tipp').hide();
			getRed('#username');
			getGray('#password');
			flag = false;
			alert('请输入账号。');
		} else if(password === ''){
			$('.tip3').show().siblings('.tipp').hide();
			getRed('#password');
			getGray('#username');
			flag = false;
			alert('请输入密码。');
		}

		if(flag){
			// 模拟验证
			if(username === '18624833344' && password === 'zzu2022666'){
				// 存储登录状态 (Note: This is insecure for real applications)
				localStorage.setItem('isLoggedIn', 'true');
				localStorage.setItem('nickname', 'Firmament');

				// 显示登录成功弹窗
				$('#loginSuccessModal').fadeIn(300);

				// 设置延时跳转（例如2秒后）
				setTimeout(function(){
					window.location.href = '../index.html';
				}, 2000);
			} else {
				alert('账号或密码错误，请重试。');
			}
		}
	});

	// 点击页面其他地方隐藏提示信息
	$('html').click(function(){
		$('.tipp').hide();
	});

	// 阻止点击输入框区域时隐藏提示信息
	$('.midd').click(function(event){
		event.stopPropagation();
	});

	// 重置输入框边框颜色
	$('.midd input').focus(function(){
		$(this).css('border', '1px solid #bdbdbd');
	});

	// 处理弹窗关闭按钮
	$('.close-button').click(function(){
		$('#loginSuccessModal').fadeOut(300);
	});
});
