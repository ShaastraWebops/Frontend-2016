'use strict';

angular.module('shaastra2016App')
  .controller('sponsorsCtrl', function ($scope) {

    $scope.pageClass = 'page-sponsors';

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      // 'background-color': '#f3f3f3'
      'background-color': '#fff'
    });

    $scope.tab_2016 = true;
    $scope.tab_2015 = false;

    $scope.show2015 = function () {
      $scope.tab_2015 = true;
      $scope.tab_2016 = false;
    };

    $scope.show2016 = function () {
      $scope.tab_2016 = true;
      $scope.tab_2015 = false;
    };

    $scope.sponsors2016 = [{
      id: 1,
      title: 'Title Sponsor',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_300,fl_lossy,f_auto,q_80/v1452031937/sponsors/2016/Title-Sponsor/caterpillar.png',
        link1: 'http://www.caterpillar.com/'
      }]
    },
    {
      id: 2,
      title: 'Platinum Sponsor',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/fl_lossy,f_auto,q_80/v1452027927/sponsors/2016/Platinum-Sponsor/visa.png',
        link1: 'http://www.visa.co.in/index.shtml'
      }]
    },
    {
      id: 3,
      title: 'Print Partner',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_350,fl_lossy,f_auto,q_80/v1452691455/sponsors/2016/Print-Partner/newindianexpress.png',
        link1: 'http://www.newindianexpress.com'
      }]
    },    {
      id: 4,
      title: 'Stay Partner',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/v1452031701/sponsors/2016/Stay-Partner/stayzilla.jpg',
        link1: 'http://stayzilla.com/'
      }]
    },
    {
      id: 5,
      title: 'Co Sponsor',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452027724/sponsors/2016/Co-Sponsor/samsung.png',
        link1: 'http://www.samsung.com'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452027725/sponsors/2016/Co-Sponsor/vm-ware.png',
        link1: 'http://www.vmware.com'
      }]
    },
    {
      id: 6,
      title: 'Appathon-Partner',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_300,fl_lossy,f_auto,q_80/v1452027706/sponsors/2016/Appathon-Partner/rapidbizzapps.png',
        link1: 'http://rapidbizapps.com/'
      }]
    },
    {
      id: 7,
      title: 'Event Sponsor',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_crop,h_56,w_183,fl_lossy,f_auto,q_80/v1452027776/sponsors/2016/Event-Sponsor/boeing.png',
        link1: 'http://www.boeing.com/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452691844/sponsors/2016/Event-Sponsor/philips.png',
        link1: 'http://www.philips.co.in'
      },      
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_crop,h_575,w_2000/c_scale,w_250,fl_lossy,f_auto,q_80/v1452027775/sponsors/2016/Event-Sponsor/mahindra.jpg',
        link1: 'http://www.mahindra.com/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_250,fl_lossy,f_auto,q_80/v1452027776/sponsors/2016/Event-Sponsor/microsoft.png',
        link1: 'http://www.microsoft.com/en-in/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_250,fl_lossy,f_auto,q_80/v1452027776/sponsors/2016/Event-Sponsor/entranceindia.png',
        link1: 'http://www.entranceindia.com/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452027776/sponsors/2016/Event-Sponsor/rohm-semiconductor.png',
        link1: 'http://www.rohm.com/web/in/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452027776/sponsors/2016/Event-Sponsor/cypress.jpg',
        link1: 'http://www.cypress.com/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_150,fl_lossy,f_auto,q_80/v1452027776/sponsors/2016/Event-Sponsor/sap.png',
        link1: 'http://www.sap.com'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_300,fl_lossy,f_auto,q_80/v1452027776/sponsors/2016/Event-Sponsor/smartedu.jpg',
        link1: 'http://www.smartedu.co.in/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_300,fl_lossy,f_auto,q_80/v1452027775/sponsors/2016/Event-Sponsor/cognizant.jpg',
        link1: 'http://www.cognizant.com/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_100,fl_lossy,f_auto,q_80/v1452027775/sponsors/2016/Event-Sponsor/nptel.jpg',
        link1: 'http://nptel.ac.in/'
      }]
    },
    {
      id: 7,
      title: 'Workshop Sponsor',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452028011/sponsors/2016/Workshop-Sponsor/innovians-technologies.png',
        link1: 'http://www.innovianstechnologies.com'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_300,fl_lossy,f_auto,q_80/v1452028011/sponsors/2016/Workshop-Sponsor/codex-design.png',
        link1: 'http://codexdesign.in/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452028010/sponsors/2016/Workshop-Sponsor/stepsmail.png',
        link1: 'http://www.stepsmail.com'
      }]
    },
    {
      id: 8,
      title: 'Amusement Sponsor',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_250,fl_lossy,f_auto,q_80/v1452027445/sponsors/2016/Amusement-Sponsor/playerz.png',
        link1: 'http://www.playerzgaming.com'
      }]
    },
    {
      id: 9,
      title: 'Digital Storage Partner',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_crop,h_35,w_85,fl_lossy,f_auto,q_80/c_scale,w_200,fl_lossy,f_auto,q_80/v1452027746/sponsors/2016/Digital-Storage-Partner/wdlogo.png',
        link1: 'http://support.wdc.com/index.aspx'
      }]
    },
    {
      id: 10,
      title: 'Education Sponsor',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452027763/sponsors/2016/Education-Sponsor/educationau-incanada.png',
        link1: 'http://www.educationau-incanada.ca/'
      }]
    },
    {
      id: 11,
      title: 'Financial Awareness Partner',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_300,fl_lossy,f_auto,q_80/v1452027802/sponsors/2016/Financial-Awareness-Partner/icici-cfl.png',
        link1: 'http://content.icicidirect.com/'
      }]
    },
    {
      id: 11,
      title: 'Tech-Soc Case Study Sponsor',
      path: []
    },
    {
      id: 12,
      title: 'Web Hosting Partner',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452692663/sponsors/2016/Web-Hosting-Partner/bluehost.png',
        link1: 'http://in.bluehost.com'
      }]
    },
    {
      id: 13,
      title: 'Pledge-A-Book Website Design Partner',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452027942/sponsors/2016/Pledge-A-Book-Website-Design-Partner/niyati.png',
        link1: 'http://www.niyati.com'
      }]
    },
    {
      id: 14,
      title: 'Cloud Sponsor',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_150,fl_lossy,f_auto,q_80/v1452692886/sponsors/2016/Cloud-Sponsor/ibm.jpg',
        link1: 'http://www.ibm.com/'
      }]
    },
    {
      id: 15,
      title: 'Pledge-A-Book Logistics Partner',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_250,fl_lossy,f_auto,q_80/v1452693271/sponsors/2016/Pledge-A-Book-Logistics-Partner/cargoji.png',
        link1: 'http://www.cargoji.com'
      }]
    },    
    {
      id: 16,
      title: 'Digital App Sponsor',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_300,fl_lossy,f_auto,q_80/v1452027736/sponsors/2016/Digital-App-Sponsor/news-republic.png',
        link1: 'http://www.news-republic.com/'
      }]
    },
    {
      id: 17,
      title: 'Online Media Partner',
      path: [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/fl_lossy,f_auto,q_80/v1452027818/sponsors/2016/Online-Media-Partner/collegesearch.png',
        link1: 'http://www.collegesearch.in/colleges/Indian_Institute_of_Technology_(IIT)_Madras'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/fl_lossy,f_auto,q_80/v1452027818/sponsors/2016/Online-Media-Partner/dare2compete.png',
        link1: 'http://www.dare2compete.com'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/fl_lossy,f_auto,q_80/v1452027818/sponsors/2016/Online-Media-Partner/festpav.png',
        link1: 'http://www.festpav.com/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/fl_lossy,f_auto,q_80/v1452027818/sponsors/2016/Online-Media-Partner/fuccha.png',
        link1: 'http://www.fuccha.in'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/fl_lossy,f_auto,q_80/v1452027818/sponsors/2016/Online-Media-Partner/knowafest.png',
        link1: 'http://www.knowafest.com/'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_300,fl_lossy,f_auto,q_80/v1452693551/sponsors/2016/Online-Media-Partner/twenty19.png',
        link1: 'http://twenty19.com'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/fl_lossy,f_auto,q_80/v1452027818/sponsors/2016/Online-Media-Partner/thecollegefever.png',
        link1: 'http://thecollegefever.com'
      },      
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_200,fl_lossy,f_auto,q_80/v1452027913/sponsors/2016/Online-Media-Partner/springtide.jpg',
        link1: 'http://stories.springtide.in'
      }]      
    }];

    $scope.sponsors2015 = [{
      id: 0,
      title: 'Presenting Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Presenting-Sponsor/hindu.jpg',
        link1: 'http://www.thehindu.com'
      }]
    },
    {
      id: 1,
      title: 'Associate Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Associate-Sponsor/paypal.jpg',
        link1: 'http://www.paypal.com'
      }]
    },
    {
      id: 2,
      title: 'Research Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Research-Sponsor/general-electric.jpg',
        link1: 'http://www.ge.com'
      }]
    },
    {
      id: 3,
      title: 'Co Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Co-Sponsor/boeing.jpg',
        link1: 'http://www.boeing.com'
      },
      {
        image1: 'images/sponsors/2015/Co-Sponsor/eaton.jpg',
        link1: 'http://www.eaton.in'
      },
      {
        image1: 'images/sponsors/2015/Co-Sponsor/honeywell.png',
        link1: 'http://www.honeywell.com'
      },
      {
        image1: 'images/sponsors/2015/Co-Sponsor/vmware.jpg',
        link1: 'http://www.vmware.com'
      }]
    },
    {
      id: 4,
      title: 'IDP Sponsor',
      path: [{
        image1: 'images/sponsors/2015/IDP-Sponsor/cerner.jpg',
        link1: 'http://www.cerner.com'
      }]
    },
    {
      id: 5,
      title: 'Hospitality Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Hospitality-Sponsor/sbi.jpg',
        link1: 'http://www.sbi.co.in'
      }]
    },
    {
      id: 6,
      title: 'Event Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Event-Sponsor/amadasoft.png',
        link1: 'http://www.amadasoft.co'
      },
      {
        image1: 'images/sponsors/2015/Event-Sponsor/microsoft.jpg',
        link1: 'http://www.microsoft.com'
      },
      {
        image1: 'images/sponsors/2015/Event-Sponsor/murugappa.jpg',
        link1: 'www.murugappa.com'
      },
      {
        image1: 'images/sponsors/2015/Event-Sponsor/nptel.png',
        link1: 'http://www.nptel.ac.in'
      }]
    },
    {
      id: 7,
      title: 'Big Data Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Big-Data-Sponsor/cdac.png',
        link1: 'http://www.cdac.in'
      }]
    },
    {
      id: 8,
      title: 'Literature Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Literature-Sponsor/faro.png',
        link1: 'http://www.faro.com'
      }]
    },
    {
      id: 9,
      title: 'Eye Care Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Eye-Care-Sponsor/essilorindia.jpg',
        link1: 'http://www.essilorindia.com'
      }]
    },
    {
      id: 10,
      title: 'Gifting Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Gifting-Sponsor/giftxoxo.jpg',
        link1: 'http://www.giftxoxo.com'
      }]
    },
    {
      id: 11,
      title: 'Education Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Education-Sponsor/campusfrance.jpg',
        link1: 'http://www.campusfrance.org'
      },
      {
        image1: 'images/sponsors/2015/Education-Sponsor/educationau-incanada.jpg',
        link1: 'http://www.educationau-incanada.ca'
      }]
    },
    {
      id: 12,
      title: 'Financial Learning Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Financial-Learning-Sponsor/icicidirect.png',
        link1: 'http://www.icicidirect.com'
      }]
    },
    {
      id: 13,
      title: 'Prize Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Prize-Sponsor/hachetteindia.jpg',
        link1: 'http://www.hachetteindia.com'
      },
      {
        image1: 'images/sponsors/2015/Prize-Sponsor/zebronics.jpg',
        link1: 'http://www.zebronics.com'
      }]
    },
    {
      id: 14,
      title: 'Regenerative Solutions Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Regenerative-Solutions-Sponsor/regrow.png',
        link1: 'http://www.regrow.in'
      }]
    },
    {
      id: 15,
      title: 'Creativity Partner',
      path: [{
        image1: 'images/sponsors/2015/Creativity-Partner/bbgr.jpg',
        link1: 'http://www.bbgr.com'
      }]
    },
    {
      id: 16,
      title: 'Jotting Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Jotting-Sponsor/lincpen.jpg',
        link1: 'http://www.lincpen.com'
      }]
    },
    {
      id: 17,
      title: 'Stationery Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Stationery-Sponsor/mycopie.png',
        link1: 'http://www.mycopie.com'
      }]
    },
    {
      id: 18,
      title: 'Depository Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Depository-Sponsor/nsdl.jpg',
        link1: 'http://www.nsdl.co.in'
      }]
    },
    {
      id: 19,
      title: 'Data Mining Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Data-Mining-Sponsor/flutura.jpg',
        link1: 'http://www.flutura.com'
      }]
    },
    {
      id: 20,
      title: 'Science Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Science-Sponsor/functionspace.png',
        link1: 'http://www.functionspace.org'
      }]
    },
    {
      id: 21,
      title: 'Workshop Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Workshop-Sponsor/frugal-labs.png',
        link1: 'http://www.frugal-labs.com'
      },
      {
        image1: 'images/sponsors/2015/Workshop-Sponsor/innovianstechnologies.png',
        link1: 'www.innovianstechnologies.com'
      },
      {
        image1: 'images/sponsors/2015/Workshop-Sponsor/prigma.png',
        link1: 'http://www.prigma.co.in'
      }]
    },
    {
      id: 22,
      title: 'Media Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Media-Sponsor/clubfm.jpg',
        link1: 'http://www.clubfm.in'
      }]
    },
    {
      id: 21,
      title: 'Online Media Sponsor',
      path: [{
        image1: 'images/sponsors/2015/Online-Media-Sponsor/allevents.png',
        link1: 'http://www.allevents.in'
      },
      {
        image1: 'images/sponsors/2015/Online-Media-Sponsor/festpav.png',
        link1: 'www.festpav.com'
      },
      {
        image1: 'images/sponsors/2015/Online-Media-Sponsor/thecollegefever.jpg',
        link1: 'http://www.thecollegefever.com'
      }]
    }];

  });
  