var app = angular.module('shaastra2016App');
app.controller('dashboardCtrl',function($scope)
{
	$scope.myItems = [];
($scope).events={
eventsList:[
{
	eventName:"Manual Robotics",
	teamname:"SuperBot",
	teammembers:[
	'fgsgdbjds',
	'djkhgushdj',
	'ojfksakf'
]},
{
	eventName:"Autonomous Robotics",
	teamname:"Super1Bot",
	teammembers:[
		'gfsbjbv',
		'djgbjsd',
]},
]};
$scope.eventDetails=function(){
$("p").replaceWith("<b>changed</b>");
console.log("hi");
};

});