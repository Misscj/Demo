/*
*侧栏组件和返回顶部按钮功能
*Date: 2017-10-13
*下一步改进部分：响应式布局
*/
;$(function() 
{
	'use strict';
	var sidebar=$('#sidebar'),//选择侧栏
	mask=$('.mask'),//选择mask
	sidebar_trigger=$('#sidebar_trigger'),//触发侧栏
	backButton=$('#back-to-top');//选择返回顶部按钮
	
	function showSideBar()//显示侧栏
	{
		console.log('clicked');
		mask.fadeIn();
		sidebar.animate({'right':0});
	}
	
	function hideSideBar()//隐藏侧栏
	{
		console.log('clicked');
		mask.fadeOut();
		sidebar.animate({'right':-sidebar.width()});
	}

	sidebar_trigger.on('click',showSideBar);//监听侧栏触发器事件
	mask.on('click',hideSideBar);//监听mask事件
	backButton.on('click',function(){//监听返回顶部事件
		console.log('back');
		$('html,body').animate({
			scrollTop:0
		},800);
	});

	$(window).on('scroll',function(){//监听window的scroll事件
		//如果已滚动的部分高于窗口高度，则显示返回顶部按钮，否则隐藏
		if($(window).scrollTop()>$(window).height()){
			backButton.fadeIn()

		}else{
			backButton.fadeOut();
		}
	});
	//浏览器一刷新就触发scroll事件，让其作出判断
	$(window).trigger('scroll');
})