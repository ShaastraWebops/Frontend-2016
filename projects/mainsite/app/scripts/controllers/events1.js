$(document).ready(function(){
$(".0").mouseover(function(){
    $(".0").css({color:'black'});
 });
$(".0").mouseleave(function(){
    $(".0").css({color:'white'});
});
$(".1").mouseover(function(){
    $(".1").css({color:'black'});
 });
$(".1").mouseleave(function(){
    $(".1").css({color:'white'});
});
$(".2").mouseover(function(){
    $(".2").css({color:'black'});
 });
$(".2").mouseleave(function(){
    $(".2").css({color:'white'});
});
$(".3").mouseover(function(){
    $(".3").css({color:'black'});
 });
$(".3").mouseleave(function(){
    $(".3").css({color:'white'});
});
$(".4").mouseover(function(){
    $(".4").css({color:'black'});
 });
$(".4").mouseleave(function(){
    $(".4").css({color:'white'});
});
$(".5").mouseover(function(){
    $(".5").css({color:'black'});
 });
$(".5").mouseleave(function(){
    $(".5").css({color:'white'});
});
$(".nav1").click(function(){
	$("#c").animate({opacity:'0'});
	$(".nav1").animate({width:'0px'});
	$("#cf").animate({opacity:'1'});
})
$("#left").click(function(){
	$("#c").animate({opacity:'1'});
	$(".nav1").animate({width:'250px'});
	$("#cf").animate({opacity:'0'});
});
$(".bt").click(function(){
	$("#c").animate({opacity:'0'});
	$(".nav1").animate({width:'0px'});
	$("#cf").animate({opacity:'1'});
});
});