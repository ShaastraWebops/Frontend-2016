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
      title: 'Co Sponsor',
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
      title: 'Event Sponsor',
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
    },
    {
      id: 8,
      title: 'Literature Sponsor',
      path: [{
        image: 'images/sponsors/Literature-Sponsor/faro.png',
        link: 'http://www.faro.com'        
      }]
    },
    {
      id: 9,
      title: 'Eye Care Sponsor',
      path: [{
        image: 'images/sponsors/Eye-Care-Sponsor/essilorindia.jpg',
        link: 'http://www.essilorindia.com'        
      }]
    },
    {
      id: 10,
      title: 'Gifting Sponsor',
      path: [{
        image: 'images/sponsors/Gifting-Sponsor/giftxoxo.jpg',
        link: 'http://www.giftxoxo.com'        
      }]
    },
    {
      id: 11,
      title: 'Education Sponsor',
      path: [{
        image: 'images/sponsors/Education-Sponsor/campusfrance.jpg',
        link: 'http://www.campusfrance.org'
      },
      {
        image: 'images/sponsors/Education-Sponsor/educationau-incanada.jpg',
        link: 'http://www.educationau-incanada.ca'        
      }]
    },
    {
      id: 12,
      title: 'Financial Learning Sponsor',
      path: [{
        image: 'images/sponsors/Financial-Learning-Sponsor/icicidirect.png',
        link: 'http://www.icicidirect.com'        
      }]
    },
    {
      id: 13,
      title: 'Prize Sponsor',
      path: [{
        image: 'images/sponsors/Prize-Sponsor/hachetteindia.jpg',
        link: 'http://www.hachetteindia.com'
      },
      {
        image: 'images/sponsors/Prize-Sponsor/zebronics.jpg',
        link: 'http://www.zebronics.com'        
      }]
    },
    {
      id: 14,
      title: 'Regenerative Solutions Sponsor',
      path: [{
        image: 'images/sponsors/Regenerative-Solutions-Sponsor/regrow.png',
        link: 'http://www.regrow.in'
      }]
    },
    {
      id: 15,
      title: 'Creativity Partner',
      path: [{
        image: 'images/sponsors/Creativity-Partner/bbgr.jpg',
        link: 'http://www.bbgr.com'
      }]
    },
    {
      id: 16,
      title: 'Jotting Sponsor',
      path: [{
        image: 'images/sponsors/Jotting-Sponsor/lincpen.jpg',
        link: 'http://www.lincpen.com'
      }]
    },
    {
      id: 17,
      title: 'Stationery Sponsor',
      path: [{
        image: 'images/sponsors/Stationery-Sponsor/mycopie.png',
        link: 'http://www.mycopie.com'
      }]
    },
    {
      id: 18,
      title: 'Depository Sponsor',
      path: [{
        image: 'images/sponsors/Depository-Sponsor/nsdl.jpg',
        link: 'http://www.nsdl.co.in'
      }]
    },
    {
      id: 19,
      title: 'Data Mining Sponsor',
      path: [{
        image: 'images/sponsors/Data-Mining-Sponsor/flutura.jpg',
        link: 'http://www.flutura.com'
      }]
    },
    {
      id: 20,
      title: 'Science Sponsor',
      path: [{
        image: 'images/sponsors/Science-Sponsor/functionspace.png',
        link: 'http://www.functionspace.org'
      }]
    },
    {
      id: 21,
      title: 'Workshop Sponsor',
      path: [{
        image: 'images/sponsors/Workshop-Sponsor/frugal-labs.png',
        link: 'http://www.frugal-labs.com'
      },
      {
        image: 'images/sponsors/Workshop-Sponsor/innovianstechnologies.png',
        link: 'www.innovianstechnologies.com'        
      },
      {
        image: 'images/sponsors/Workshop-Sponsor/prigma.png',
        link: 'http://www.prigma.co.in'        
      }]
    },
    {
      id: 22,
      title: 'Media Sponsor',
      path: [{
        image: 'images/sponsors/Media-Sponsor/clubfm.jpg',
        link: 'http://www.clubfm.in'
      }]
    },
    {
      id: 21,
      title: 'Online Media Sponsor',
      path: [{
        image: 'images/sponsors/Online-Media-Sponsor/allevents.png',
        link: 'http://www.allevents.in'
      },
      {
        image: 'images/sponsors/Online-Media-Sponsor/festpav.png',
        link: 'www.festpav.com'        
      },
      {
        image: 'images/sponsors/Online-Media-Sponsor/thecollegefever.jpg',
        link: 'http://www.thecollegefever.com'        
      }]
    }];

    // $scope.sponsors = logos;
  });
