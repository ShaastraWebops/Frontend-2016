$(document).ready(function()
{
	/*var thumb_scroll=$("#reasons");
	var thumb_top=thumb_scroll.offset().top;*/
	var i_thumb=0;
	var i_handle0=0,i_handle1=0,i_handle2=0,i_handle3=0;
	var i_incentives=0;
	$(document).scroll(function()
	{	// Thumbnail fade in animation
		if(($("#scroll1").offset().top)<=$(document).scrollTop())
		{
			$(".thumbnail:eq(0)").animate({'opacity':'1'},"slow");
			$(".thumbnail:eq(1)").animate({'opacity':'1'},"slow");
			$(".thumbnail:eq(2)").animate({'opacity':'1'},"slow");
			
			i_thumb++;
		}
		else if(($("#scroll1").offset().top)>$(document).scrollTop()&&i_thumb==0)
		{
			$(".thumbnail:eq(0)").css("opacity",0);
			$(".thumbnail:eq(1)").css("opacity",0);
			$(".thumbnail:eq(2)").css("opacity",0);
		}
		if(($("#scroll2").offset().top)<=$(document).scrollTop())
		{
			
			$(".handle_img>ul>li:eq(0)>span>img").addClass("handle_anim").css("opacity",1);
			$(".handle_img>ul>li:eq(0)>span>p:eq(0),.handle_img>ul>li:eq(0)>span>p:eq(1)").animate(
			{
				left:'40px',
				opacity:1
			},"slow");
			
			i_handle0++;
		}
		else if(($("#scroll2").offset().top)>$(document).scrollTop()&&i_handle0==0)
		{
			$(".handle_img>ul>li:eq(0)>span>img").css("opacity",0);
			$(".handle_img>ul>li:eq(0)>span>p:eq(0)").offset({left:-80}).css("opacity",0);
			$(".handle_img>ul>li:eq(0)>span>p:eq(1)").offset({left:-80}).css("opacity",0);
			//console.log(typeof $(".handle_img>ul>li:eq(1)>span>p").offset());
		}
		/*function handle_scroll(n)
		{
			if(($(".handle_img>ul>li:eq("+n+")>span>p:eq(1)").offset().top)<=$(document).scrollTop())
			{
				$(".handle_img>ul>li:eq("+n+"1)>span>img").addClass("handle_anim").css("opacity",1);
				$(".handle_img>ul>li:eq("+n+"1)>span>p:eq(0),.handle_img>ul>li:eq("+n+")>span>p:eq(1)").animate(
				{

					left:'40px',
					opacity:1
				},"slow");
				console.log("working");
			}
			else if(($(".handle_img>ul>li:eq("+n+")>span>p:eq(1)").offset().top)>$(document).scrollTop())
		{
			$(".handle_img>ul>li:eq("+n+"1)>span>img").css("opacity",0);
			$(".handle_img>ul>li:eq("+n+"1)>span>p:eq(0)").offset({left:-80}).css("opacity",0);
			$(".handle_img>ul>li:eq("+n+"1)>span>p:eq(1)").offset({left:-80}).css("opacity",0);
			//console.log(typeof $(".handle_img>ul>li:eq(1)>span>p").offset());
			console.log("not working");
		}
		}*/
		if($(".handle_img>ul>li:eq(0)").offset().top<=$(document).scrollTop())
		{
			$(".handle_img>ul>li:eq(1)>span>img").addClass("handle_anim").css("opacity",1);
			$(".handle_img>ul>li:eq(1)>span>p:eq(0),.handle_img>ul>li:eq(1)>span>p:eq(1)").animate(
			{
				left:'0px',
				opacity:1
			},"slow");
			//console.log(i_handle1);
			i_handle1++;
		}
		else if(($(".handle_img>ul>li:eq(0)").offset().top)>$(document).scrollTop()&&i_handle1==0)
		{
			$(".handle_img>ul>li:eq(1)>span>img").css("opacity",0);
			$(".handle_img>ul>li:eq(1)>span>p:eq(0),.handle_img>ul>li:eq(1)>span>p:eq(1)").offset({left:-480}).css("opacity",0);
			//$(".handle_img>ul>li:eq(0)>span>p:eq(1)").offset({left:-80}).css("opacity",0);
			//console.log($(".handle_img>ul>li:eq(1)>span>p:eq(1)").text(),$(".handle_img>ul>li:eq(1)>span>p:eq(1)").offset());
		}

		if(($(".handle_img>ul>li:eq(1)").offset().top)<=$(document).scrollTop())
		{
			
			$(".handle_img>ul>li:eq(2)>span>img").addClass("handle_anim").css("opacity",1);
			$(".handle_img>ul>li:eq(2)>span>p:eq(0),.handle_img>ul>li:eq(2)>span>p:eq(1)").animate(
			{
				left:'40px',
				opacity:1
			},"slow");
			
			i_handle2++;
		}
		else if(($(".handle_img>ul>li:eq(1)").offset().top)>$(document).scrollTop()&&i_handle2==0)
		{
			$(".handle_img>ul>li:eq(2)>span>img").css("opacity",0);
			$(".handle_img>ul>li:eq(2)>span>p:eq(0)").offset({left:-80}).css("opacity",0);
			$(".handle_img>ul>li:eq(2)>span>p:eq(1)").offset({left:-80}).css("opacity",0);
			//console.log(typeof $(".handle_img>ul>li:eq(1)>span>p").offset());
		}


		
		if($(".handle_img>ul>li:eq(2)").offset().top<=$(document).scrollTop())
		{
			$(".handle_img>ul>li:eq(3)>span>img").addClass("handle_anim").css("opacity",1);
			$(".handle_img>ul>li:eq(3)>span>p:eq(0),.handle_img>ul>li:eq(3)>span>p:eq(1)").animate(
			{
				left:'0px',
				opacity:1
			},"slow");
			//console.log(i_handle3);
			i_handle3++;
		}
		else if(($(".handle_img>ul>li:eq(2)").offset().top)>$(document).scrollTop()&&i_handle3==0)
		{
			$(".handle_img>ul>li:eq(3)>span>img").css("opacity",0);
			$(".handle_img>ul>li:eq(3)>span>p:eq(0),.handle_img>ul>li:eq(3)>span>p:eq(1)").offset({left:-480}).css("opacity",0);
			//$(".handle_img>ul>li:eq(0)>span>p:eq(1)").offset({left:-80}).css("opacity",0);
			//console.log($(".handle_img>ul>li:eq(1)>span>p:eq(1)").text(),$(".handle_img>ul>li:eq(1)>span>p:eq(1)").offset());
		}

		if($(".handle_img>ul>li:eq(3)").offset().top<=$(document).scrollTop())
		{
			$(".incentives>ul").animate({opacity:1},"slow");
		}
		else if ($(".handle_img>ul>li:eq(3)").offset().top>$(document).scrollTop()&&i_incentives==0) {
			$(".incentives>ul").css("opacity",0);
		};
	});
});