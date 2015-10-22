'use strict';

angular.module('shaastra2016App')
  .controller('showsExhibitonsCtrl', function ($scope) {

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

    $scope.tabs = [{ 
      'name': 'Envisage', 
      'info': "Shaastra, IIT Madras presents Envisage, a novel techno cultural show specializing in defying your imagination, breaking boundaries and revolutionizing basic science and technology. After the overwhelming responses to the previous editions, Envisage is back, Bigger and Better! This time, Sit back and get ready to experience an adrenalin rush like you have never experienced before. Soak in the awesomeness as the transcendental fusion of art and technology pleasures your visual senses and stupefies you with audio effects. Being the only student organized event of its kind in the Whole Country, We proudly bet you will never ever forget your journey into Neverland, giving a new meaning to your idea of entertainment and turning projects undertaken by us into a memory you will long cherish! The work of science can be enigmatic. Have your sight deceived by animations shown using just a strip of LEDs. You will know which boxes to blame if you are unable to get sleep that night. Get ready to witness people around you floating in air. After you have a taste of the Virtual Music and Video Mixing we offer, DJs will seem old school. Ever wanted to take a selfie with a superhero, this might well be the chance. You will witness a new groundbreaking performance after watching our techno cultural show. Join us at Shaastra 2015 to share the awe and experience the Dream Kingdom!" 
    }, 
    { 
      'name': 'Air Show', 
      'info': "One of the biggest RC flying shows in the country, with planes and helicopters all twisting and twirling and fliers using the sky as the canvas for their masterpieces. This year, we bring to Chennai, some of world's best aeromodellers. Wolfgang Krahofer, Gernot Bruckmann from Austria and 14 years oldJase Dussia from USA are sure to amaze all with their 3d extreme aircraft flying. Watch the night, lit up with night flying and pyrotechnics.  We also bring the aeromodellers in and around Chennai with their best show. Shaastra Air Show never fails in leaving its spectators in Awe! This Shaastra 2015, the Show is in the Air! " 
    }, 
    { 
      'name': 'Imagine Exhibits', 
      'info': "Come drown yourself in the world where the realm of reality is expanded beyond imagination. Imaginate is a world renowned augmented reality (AR) and virtual reality (VR) technology based enterprise that offers innovative visualization products and services, which enhance the consumers experience of reality. TrialAR helps you to try out different apparel and accessories in a brick and mortar store, albeit through a kiosk (LED screen) that acts as a virtual trial room. By means of an iPad, the user can access different apparel designs and sizes and send the data wirelessly to the kiosk where a web camera accesses user's body information and immerses the user in a virtual trial experience. In today’s fast paced world, it became difficult to maintain constant relationship with families & friends especially on important occasions. GiftAR presents an immersive way of gifting to your loved ones through virtual video messages augmented on physical pictures. GiftAR is a mobile app built using Augmented Reality and social media technologies. This application enable users to send and receive personalized video gift messages. GiftAR can also be utilized as a platform for sharing information within a community or group" 
    }, 
    { 
      'name': 'Moving Planetorium', 
      'info': "The marvels of the vast, never ending space above us, brought to you in a truck. The moving planetarium, from the TamilNadu Science and Technology Centre, is simply a delight to all star gazers. With shows everyday, it is the best space tour a person can get, and come experience that only at Shaastra 2016" 
    }];


    $scope.message = "hello";

    $scope.i = 0;
    $scope.info = function (ch) {
    	$scope.i = ch;
    };

  });
