var app = angular.module('shaastra2016App');
app.controller('dashboardCtrl',function($scope)
{
($scope).events={
eventsList:[
{
	eventName:"Manual Robotics",
	teamname:"superbot",
	teammembers:[
{
	teammember1:"gfsbjbv",
	teammember2:"djgbjsd"
}]},
{
	eventName:"Autonomous Robotics",
	teamname:"super1bot",
	teammembers:[
{
		teammember1:"gfsbjbv",
		teammember2:"djgbjsd"
}]},
]};
$scope.eventDetails=function(){
$("p").replaceWith("<b>changed</b>");
console.log("hi");
};

});