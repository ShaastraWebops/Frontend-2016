'use strict';

angular.module('shaastra2016App')
  .controller('samparksCtrl', function ($scope, $routeParams) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow': 'auto'});

		var backButton = $('#back-button');
		backButton.attr('link', '/samparks');

    var converter = new showdown.Converter();
    $scope.xmark = function (b) {
      return converter.makeHtml(b);
    };

    var allSamparks = [{ 
      'id': 1,
      'name': 'Madurai', 
      'info': "<p>On the 26th and 27th of September, Engineers from around the city of Madurai assembled at Thiagarajar College of Engineering with one goal in mind: prove their tech mettle. Sampark-Madurai saw a footfall of over 800 students. The plethora of events conducted were,</p><ul class='samparks-ul'><li>Line-Follower Robotics</li><li>Reverse Coding</li><li>Rubiks Cube Open(Workshop and event)</li><li>Web-Development Workshop</li><li>Junkyard Wars</li></ul>" 
    }, 
    { 
      'id': 2,
      'name': 'Trichy', 
      'image': 'images/Trichy.jpg',
      'info': "<p>Shaastra is coming to Trichy very soon with the this year’s editon of Sampark at NIT Trichy. Workshops,events and lot more! Engineers out there, switch over to your tech-gears and get ready for an exhilarating 2-day event.</p><p>Stay tuned for updates on details of the events.!</p>" 
    },
    { 
      'id': 3,
      'name': 'Coimbatore', 
      'image': 'images/Coimbatore.jpg',
      'info': "<p>Sampark is coming soon to Coimbatore with workshops and events to weave the threads of technology. Stay tuned for updates!</p>" 
    },
    { 
      'id': 4,
      'name': 'Cochin', 
      'info': "<p>The Cochin edition of Sampark was held on the 3rd of October at Adi Shankara Institute of Engineering and Technology along with Ashwamedham 2015. This year, we had some exciting competitions and mind blowing workshops that fed the tech hungry minds. The events included were,</p><ul class='samparks-ul'><li>How Things Work</li><li>Reverse Coding</li><li>Python Workshop</li><li>Autonomous Robotics Workshop</li></ul>" 
    },
    { 
      'id': 5,
      'name': 'Bengaluru', 
      'info': "<p>Shaastra is coming to the silicon valley of India with Sampark Bengaluru. What do you expect out of the Bengaluru edition? Coding? Electronics? You name it.</p><p>Stay tuned for more updates.</p>" 
    },
    { 
      'id': 6,
      'name': 'Vizag', 
      'info': "<p>Shaastra is coming to the city of Destiny with events, workshops and more. Tryst with technology at Sampark Vizag.</p><p>Stay tuned for updates.</p>" 
    },
    { 
      'id': 7,
      'name': 'Hyderabad', 
      'image': 'images/Hyderabad.jpg',
      'info': "<p>Sampark Hyderabad was held on the 3rd and 4th of October at Vasavi Engineering College. Students from the city of Char Minar came to fortify their technical skills by attending the wide range of events and workshops. The Envisage exhibits from Shaastra were there to amaze people. The events included were,</p><ul class='samparks-ul'><li>Embedded Systems and Robotics by Codex</li><li>PCB design workshop</li><li>Line follower Robot workshop</li><li>Poster Presentation</li><li>How Things Work Quiz</li><li>Reverse Coding</li></ul>" 
    },
    { 
      'id': 8,
      'name': 'Pune', 
      'image': 'images/Pune.jpg',
      'info': "<h2>Shaastra comes to Oxford of the East</h2><p>On 11th September , Pune experienced technical extravaganza organized by Shaastra, the technical festival of IIT Madras. Being one of the biggest technical festival, Shaastra has a mission to empower youth with technology, which it has been successfully accomplishing since its inception.</p><p>Sampark is a venture by Shaastra that aims to increase awareness about role of technology in betterment of human lives. Hosting plethora of events like lectures, workshops and various competitions, the events organized give wild card entry to the winners to the finals of respective events which will be conducted in first week of January as a part of Shaastra.</p><p>Pune Sampark was one of the series of Samparks that will happen all over India. It was organized in collaboration with Meteor, Sinhgad college’s fest in Pune. It was highly successful in terms of quantity and quality of the participants. With footfall of 1600+ , Pune witnessed  various events like manual robotics workshop, how things work quiz and puzzle champ quiz.</p><p>The participants were very3 enthusiastic about the event and it was a jammed packed event. There were participants from cities as long as Mumbai, Nashik and Kolhapur for the event. One participant from Nashik said, <b><i>We specifically came to be a part of the event and we are very happy with it. We will come next year as well with better preparation.</i></b></p><p>Shaastra thanks Pune for such enthusiastic response and promises to be back next year with even better Sampark.</p>" 
    },
    { 
      'id': 9,
      'name': 'Chennai', 
      'info': "<h3><b>Data mining workshop</b></h3><p>On 25th September, students from all over Chennai city gathered at MNM Jain Engineering College to become data miners, as part of the data mining workshop conducted by Shaastra.</p><h3><b>Wireless motion controller Workshop</b></h3><p>As part of Sampark, Shaastra conducted a wireless motion controller workshop at SRM University on 25th September. It was attended by budding engineers from all over chennai and proved to be a fun filled educational event.</p>" 
    }];

    $scope.sampark = allSamparks[$routeParams.index];

  });
