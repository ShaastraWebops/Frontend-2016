$(document).ready(function(){
var count=0;
$("#closemenu").click(function(){
  if(count==1){
    $("#menu-container").animate({right: '-200px'});
    $("#closemenu").animate({right: '30px'});
    $("#closeiconcontainer").css("display","none");
    $("#closefirstline").css("display","none");
    $("#closesecondline").css("display","none");
    $("#firstline").css("display","block");
    $("#secondline").css("display","block");
    $("#thirdline").css("display","block");
    $("#fourthline").css("display","block");
    count=count-1;
  }
  else{
    $("#menu-container").animate({right: '0px'});
    $("#closemenu").animate({right: '120px'});
    $("#closeiconcontainer").css("display","block");
    $("#closefirstline").css("display","block");
    $("#closesecondline").css("display","block");
    $("#firstline").css("display","none");
    $("#secondline").css("display","none");
    $("#thirdline").css("display","none");
    $("#fourthline").css("display","none");
    count=count+1;
  }
});
});