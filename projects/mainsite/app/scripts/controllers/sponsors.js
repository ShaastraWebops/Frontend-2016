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

    $scope.tab_2016 = false;
    $scope.tab_2015 = true;
    $scope.tab_2014 = false;

    $scope.show2015 = function () {
      $scope.tab_2015 = true;
      $scope.tab_2016 = false;
      $scope.tab_2014 = false;
    };

    $scope.show2016 = function () {
      $scope.tab_2016 = true;
      $scope.tab_2015 = false;
      $scope.tab_2014 = false; 
    };

    $scope.show2014 = function () {
      $scope.tab_2016 = false;
      $scope.tab_2015 = false; 
       $scope.tab_2014 = true; 
    };

    $scope.sponsTitle = "Shaastra 2015 Sponsors";

    $scope.sponsors = [];

    $scope.sponsors = [{
      id: 0,
      title: 'Presenting Sponsor',
      path: [{
        image1: 'images/sponsors/Presenting-Sponsor/hindu.jpg',
        link1: 'http://www.thehindu.com'
      }]
    },
    {
      id: 1,
      title: 'Associate Sponsor',
      path: [{
        image1: 'images/sponsors/Associate-Sponsor/paypal.jpg',
        link1: 'http://www.paypal.com'
      }]
    },
    {
      id: 2,
      title: 'Research Sponsor',
      path: [{
        image1: 'images/sponsors/Research-Sponsor/general-electric.jpg',
        link1: 'http://www.ge.com'
      }]
    },
    {
      id: 3,
      title: 'Co Sponsor',
      path: [{
        image1: 'images/sponsors/Co-Sponsor/boeing.jpg',
        link1: 'http://www.boeing.com'
      },
      {
        image1: 'images/sponsors/Co-Sponsor/eaton.jpg',
        link1: 'http://www.eaton.in'
      },
      {
        image1: 'images/sponsors/Co-Sponsor/honeywell.png',
        link1: 'http://www.honeywell.com'
      },
      {
        image1: 'images/sponsors/Co-Sponsor/vmware.jpg',
        link1: 'http://www.vmware.com'
      }]
    },
    {
      id: 4,
      title: 'IDP Sponsor',
      path: [{
        image1: 'images/sponsors/IDP-Sponsor/cerner.jpg',
        link1: 'http://www.cerner.com'
      }]
    },
    {
      id: 5,
      title: 'Hospitality Sponsor',
      path: [{
        image1: 'images/sponsors/Hospitality-Sponsor/sbi.jpg',
        link1: 'http://www.sbi.co.in'
      }]
    },
    {
      id: 6,
      title: 'Event Sponsor',
      path: [{
        image1: 'images/sponsors/Event-Sponsor/amadasoft.png',
        link1: 'http://www.amadasoft.co'
      },
      {
        image1: 'images/sponsors/Event-Sponsor/microsoft.jpg',
        link1: 'http://www.microsoft.com'
      },
      {
        image1: 'images/sponsors/Event-Sponsor/murugappa.jpg',
        link1: 'www.murugappa.com'
      },
      {
        image1: 'images/sponsors/Event-Sponsor/nptel.png',
        link1: 'http://www.nptel.ac.in'
      }]
    },
    {
      id: 7,
      title: 'Big Data Sponsor',
      path: [{
        image1: 'images/sponsors/Big-Data-Sponsor/cdac.png',
        link1: 'http://www.cdac.in'
      }]
    },
    {
      id: 8,
      title: 'Literature Sponsor',
      path: [{
        image1: 'images/sponsors/Literature-Sponsor/faro.png',
        link1: 'http://www.faro.com'
      }]
    },
    {
      id: 9,
      title: 'Eye Care Sponsor',
      path: [{
        image1: 'images/sponsors/Eye-Care-Sponsor/essilorindia.jpg',
        link1: 'http://www.essilorindia.com'
      }]
    },
    {
      id: 10,
      title: 'Gifting Sponsor',
      path: [{
        image1: 'images/sponsors/Gifting-Sponsor/giftxoxo.jpg',
        link1: 'http://www.giftxoxo.com'
      }]
    },
    {
      id: 11,
      title: 'Education Sponsor',
      path: [{
        image1: 'images/sponsors/Education-Sponsor/campusfrance.jpg',
        link1: 'http://www.campusfrance.org'
      },
      {
        image1: 'images/sponsors/Education-Sponsor/educationau-incanada.jpg',
        link1: 'http://www.educationau-incanada.ca'
      }]
    },
    {
      id: 12,
      title: 'Financial Learning Sponsor',
      path: [{
        image1: 'images/sponsors/Financial-Learning-Sponsor/icicidirect.png',
        link1: 'http://www.icicidirect.com'
      }]
    },
    {
      id: 13,
      title: 'Prize Sponsor',
      path: [{
        image1: 'images/sponsors/Prize-Sponsor/hachetteindia.jpg',
        link1: 'http://www.hachetteindia.com'
      },
      {
        image1: 'images/sponsors/Prize-Sponsor/zebronics.jpg',
        link1: 'http://www.zebronics.com'
      }]
    },
    {
      id: 14,
      title: 'Regenerative Solutions Sponsor',
      path: [{
        image1: 'images/sponsors/Regenerative-Solutions-Sponsor/regrow.png',
        link1: 'http://www.regrow.in'
      }]
    },
    {
      id: 15,
      title: 'Creativity Partner',
      path: [{
        image1: 'images/sponsors/Creativity-Partner/bbgr.jpg',
        link1: 'http://www.bbgr.com'
      }]
    },
    {
      id: 16,
      title: 'Jotting Sponsor',
      path: [{
        image1: 'images/sponsors/Jotting-Sponsor/lincpen.jpg',
        link1: 'http://www.lincpen.com'
      }]
    },
    {
      id: 17,
      title: 'Stationery Sponsor',
      path: [{
        image1: 'images/sponsors/Stationery-Sponsor/mycopie.png',
        link1: 'http://www.mycopie.com'
      }]
    },
    {
      id: 18,
      title: 'Depository Sponsor',
      path: [{
        image1: 'images/sponsors/Depository-Sponsor/nsdl.jpg',
        link1: 'http://www.nsdl.co.in'
      }]
    },
    {
      id: 19,
      title: 'Data Mining Sponsor',
      path: [{
        image1: 'images/sponsors/Data-Mining-Sponsor/flutura.jpg',
        link1: 'http://www.flutura.com'
      }]
    },
    {
      id: 20,
      title: 'Science Sponsor',
      path: [{
        image1: 'images/sponsors/Science-Sponsor/functionspace.png',
        link1: 'http://www.functionspace.org'
      }]
    },
    {
      id: 21,
      title: 'Workshop Sponsor',
      path: [{
        image1: 'images/sponsors/Workshop-Sponsor/frugal-labs.png',
        link1: 'http://www.frugal-labs.com'
      },
      {
        image1: 'images/sponsors/Workshop-Sponsor/innovianstechnologies.png',
        link1: 'www.innovianstechnologies.com'
      },
      {
        image1: 'images/sponsors/Workshop-Sponsor/prigma.png',
        link1: 'http://www.prigma.co.in'
      }]
    },
    {
      id: 22,
      title: 'Media Sponsor',
      path: [{
        image1: 'images/sponsors/Media-Sponsor/clubfm.jpg',
        link1: 'http://www.clubfm.in'
      }]
    },
    {
      id: 21,
      title: 'Online Media Sponsor',
      path: [{
        image1: 'images/sponsors/Online-Media-Sponsor/allevents.png',
        link1: 'http://www.allevents.in'
      },
      {
        image1: 'images/sponsors/Online-Media-Sponsor/festpav.png',
        link1: 'www.festpav.com'
      },
      {
        image1: 'images/sponsors/Online-Media-Sponsor/thecollegefever.jpg',
        link1: 'http://www.thecollegefever.com'
      }]
    }];

    // $scope.sponsors = logos;
  });
  