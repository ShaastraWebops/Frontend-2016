(function(){
var app = angular.module('eventslist', []);
app.controller('eventsctrl',function(){
	this.details=lists;
});
var lists=[
{
		    'name': 'Aerofest',
		    'imgUrl': 'images/aerofest.png'
		},
		{
		    'name': 'B-events',
		    'imgUrl': 'images/bevents.png'
		},
		{
		    'name': 'Coding',
		    'imgUrl': 'images/coding.png'
		},
		{
		    'name': 'Design n Build',
		    'imgUrl': 'images/design and bulid.png'
		},
		{
		    'name': 'Department Flagship',
		    'imgUrl': 'images/aerofest.png'
		},
		{
		    'name': 'Electronic Fest',
		    'imgUrl': 'images/aerofest.png'
		},
		{
		    'name': 'Involve',
		    'imgUrl': 'images/aerofest.png'
		},
		{
		    'name': 'Quizzing',
		    'imgUrl': 'images/aerofest.png'
		},
		{
		    'name': 'Spotlight',
		    'imgUrl': 'images/aerofest.png'
		},
];
})();
