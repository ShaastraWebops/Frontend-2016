$(document).ready(function()
{	//console.log($(".incentives>p:first-child").text(),$(".incentives>h4").text());
	//console.log($(".apply>.row>.caption:eq(0)>h3").text());
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

// Beginning of Leader modal

var ctr;
var cities = [ [   
                                { "Name" : "Tejaswin P",  
                                  "College"  : "IIT",
                                  "points"       : 234 },

                                { "Name" : "Shiva Prasad",  
                                  "College"  : "IIT",
                                  "points"       : 212 },

                                 { "Name" : "Bala TK",  
                                  "College"  : "IIT",
                                  "points"       : 134 }
                              ],                                
              		 [ 
                                { "Name" : "test",  
                                  "College"  : "IIT-B",
                                  "points"       : 2345 },

                                { "Name" : "best",  
                                  "College"  : "IIT-B",
                                  "points"       : 2346 }
                              ] 
            ];
            $("#pro").click(function()
            {
            	$("#leaderModal1").modal("hide");
            	$("#leaderModal2").modal("show");
            	//alert('here');
            });
            $("#back").click(function()
            {
            	$("#leaderModal2").modal("hide");
            	$("#leaderModal1").modal("show");
            	for(var i = 0; i < leaderTable.rows.length;)
					{   
   						leaderTable.deleteRow(i);
					}
            });
            $("#leaderModal2").on('show.bs.modal', function () {
            //alert('The modal is about to be shown.');
    		});
	//$("#leaderModal1>.modal-dialog>.modal-content>.modal-body>select").change(function()
		$("#pro").click(function()
	{	var ctr=Number($("#leaderModal1>.modal-dialog>.modal-content>.modal-body>select").val());
		var table=document.getElementById("leaderTable");
		var i;
		//console.log(ctr,typeof ctr,cities[ctr].length,cities[ctr][0].Name,typeof cities[ctr][0].Name);
		
			console.log(ctr);
			var begin=table.insertRow(0);
			begin.insertCell(0).innerHTML="Name";
			begin.insertCell(1).innerHTML="College";
			begin.insertCell(2).innerHTML="Points";
			for(i=1;i<=cities[ctr].length;i++)
			{
				var row=table.insertRow(i);
				
				row.insertCell(0).innerHTML=cities[ctr][i-1].Name;
				row.insertCell(1).innerHTML=cities[ctr][i-1].College;
				row.insertCell(2).innerHTML=cities[ctr][i-1].points;
				//console.log(typeof row.insertCell(0).innerHTML,cities[ctr][i].Name);
			}
	
	});
	$("#saurabh").popover(
	{
		title: "<h5>Saurabh's Profile</h5>",
		content:function(){return $("#saurabh_text").html();},
		placement:"auto",
		trigger:"click",
		html:true,
		viewport:"#viewport"
	});
	$("#tejaswin").popover(
	{
		title: "<h5>Tejaswin's Profile</h5>",
		content:function(){return $("#tejaswin_text").html();},
		placement:"auto",
		trigger:"click",
		html:true,
		viewport:"#viewport"
	});
});
