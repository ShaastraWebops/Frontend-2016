'use strict';

angular.module('shaastra2016App')
  .controller('sponsorsCtrl', function ($scope) {

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

    $scope.sponsTitle = "Shaastra 2015 Sponsors";

    $scope.sponsors = [];

    $scope.sponsors = [{
      id: 0,
      title: 'Presenting Sponsor',
      path: [{
        image: 'images/sponsors/Presenting-Sponsor/hindu.jpg',
        link: 'http://www.thehindu.com'
      }]
    },
    {
      id: 1,
      title: 'Associate Sponsor',
      path: [{
        image: 'images/sponsors/Associate-Sponsor/paypal.jpg',
        link: 'http://www.paypal.com'
      }]
    },
    {
      id: 2,
      title: 'Research Sponsor',
      path: [{
        image: 'images/sponsors/Research-Sponsor/general-electric.jpg',
        link: 'http://www.ge.com'        
      }]
    },
    {
      id: 3,
      title: 'Co-Sponsor',
      path: [{
        image: 'images/sponsors/Co-Sponsor/boeing.jpg',
        link: 'http://www.boeing.com'
      },
      {
        image: 'images/sponsors/Co-Sponsor/eaton.jpg',
        link: 'http://www.eaton.in'        
      },
      {
        image: 'images/sponsors/Co-Sponsor/honeywell.png',
        link: 'http://www.honeywell.com'        
      },
      {
        image: 'images/sponsors/Co-Sponsor/vmware.jpg',
        link: 'http://www.vmware.com'        
      }]
    },
    {
      id: 4,
      title: 'IDP Sponsor',
      path: [{
        image: 'images/sponsors/IDP-Sponsor/cerner.jpg',
        link: 'http://www.cerner.com'
      }]
    },
    {
      id: 5,
      title: 'Hospitality Sponsor',
      path: [{
        image: 'images/sponsors/Hospitality-Sponsor/sbi.jpg',
        link: 'http://www.sbi.co.in'
      }]
    },
    {
      id: 6,
      title: 'Event-Sponsor',
      path: [{
        image: 'images/sponsors/Event-Sponsor/amadasoft.png',
        link: 'http://www.amadasoft.co'
      },
      {
        image: 'images/sponsors/Event-Sponsor/microsoft.jpg',
        link: 'http://www.microsoft.com'        
      },
      {
        image: 'images/sponsors/Event-Sponsor/murugappa.jpg',
        link: 'www.murugappa.com'        
      },
      {
        image: 'images/sponsors/Event-Sponsor/nptel.png',
        link: 'http://www.nptel.ac.in'        
      }]
    },
    {
      id: 7,
      title: 'Big Data Sponsor',
      path: [{
        image: 'images/sponsors/Big-Data-Sponsor/cdac.png',
        link: 'http://www.cdac.in'        
      }]
    }];

    // $scope.sponsors = logos;
  });
