'use strict';

angular.module('shaastra2016App')
  .controller('socialCtrl', function ($scope) {

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'overflow-x': 'hidden',
      'background-color': '#f3f3f3'
    });

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.message = "hello";
    var converter = new showdown.Converter(); 
      $scope.xmark = function (b) {
      return converter.makeHtml(b);
    };
    $scope.tabs = [{ 
    	'name': 'Pledge-A-Book', 
    	'info': "Pledge-A-Book campaign is Shaastra's attempt to give back to society and to create impact in the fields of education and literacy. This campaign aims to collect books which are donated by patrons of Shaastra, and use these books to set up libraries for underprivileged students.  The campaign was flagged off by renowned science writer Mr. Anil Ananthaswamy. Since then, there have been several collection drives within the campus, including one at the Terry Fox Run Chennai, all of which have received a great response.Shaastra has already confirmed associations with well-known NGO the Indian Development Foundation, and Avanti Fellows, and other associations are in the pipeline. The books collected through the campaign are being used to set up libraries for underprivileged students at IDF's Bal Gurukuls, as well as at Avanti Fellows' Learning Centres.  The Pledge-A-Book campaign is our humble attempt at bringing change and helping design the dreams of the young. We would appreciate your support in this initiative. Join us, and help be the change!"
  	}, 
  	{ 
  		'name': 'The Past', 
  		'info': "Shaastra 2015's motto was 'Designing Dreams', and to this regard, a number of initiatives were taken up and executed. Among them were movements like Computer Literacy For All, Intellectual Property Rights Awareness Drive, Ideas Challenge and Shaastra Sparsh. Computer Literacy For All, expanded from its successful 2014 edition, was a movement that aimed at productively dealing with e-waste. The computers collected by the institute were serviced and subsequently distributed in a school in the college's rural neighborhood. The Intellectual Property Rights Awareness Drivewas an initiative aimed at spreading awareness about IPR and copyright protection among the youth through fun initiatives such as quizzes and competitions. Ideas Challenge was a competition where participants attempted to solve socially-relevant problem statements suggested by NGOs and RuTAG using their technical skills and engineering knowledge. Shaastra Sparsh was a movement that associated with schools in Chennai, aimed at interacting with younger children.  In addition to such wholly independent initiatives, a number of events at Shaastra are themed with relevant social issues in the backdrop. Events which have sustainable development and environment-friendly issues as their central theme are a rapidly evolving genre at Shaastra. For example, Shaastra 2014 had Sustainable Cityscape as a key event. Shaastra Symposium, a key event in any iteration of Shaastra, serves as a platform for rigourous debate on relevant social issues. For example, Shaastra 2013 Symposium discussed 'Education and Governance', Shaastra 2014's symposium was on 'Agriculture in India'. " 
  	}];
    $scope.i = 0;
    $scope.info = function (ch) {
    	$scope.i = ch;
    };

  });
