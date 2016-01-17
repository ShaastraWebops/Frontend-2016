'use strict';

angular.module('shaastra2016App')
  .controller('lecturesCtrl', function ($scope, $location, $anchorScroll, $modal) {

    $scope.pageClass = 'page-lectures';

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

    $scope.message = "hello";

    $scope.scrollDown = function (element) {
      var temp = $location.hash();
      $location.hash(element);
      $anchorScroll();
      $location.hash(temp);
    };

    var speakers = [{
      id: 1,
      name: "Vinita Bali",
      title: "From Coke to Cookies: Opportunities and Challenges in my Professional Journey",
      bio: "Vinita Bali was the Managing Director of Britannia Industries Limited. She received a Bachelor's Degree in Economics from Lady Shri Ram College for Women at the University of Delhi. She then earned an MBA from Jamnalal Bajaj Institute of Management Studies. She received a scholarship to Michigan State University in the United States and served as an intern at United Nations Headquarters. Her first job was at Voltas, where she worked on the launch of the soft drink brand Rasna. She worked for the Indian division of Cadbury for 14 years, expanding the company's markets in India and Africa. In 1994, Coca Cola hired her as its Marketing Director and she was later appointed Vice President of Marketing for Latin America. During her nine years at Coke, Bali also worked as Vice President of Corporate Strategy. She left Coca-Cola in 2003 to work at the Zyman Group. She was Managing Principal and Head of the Business Strategy at the group's Atlanta location. She left in 2005 to take up the position of CEO at Indian food company Britannia Industries, where she was eventually appointed Managing Director in 2006. Under her direction, Britannia's revenue tripled to $841 million. Bali was awarded the 'Business Woman of the Year' Award at the 2009 Economic Times Awards. In 2009, she founded the Britannia Nutrition Foundation which combats child malnutrition through the distribution of fortified biscuits to Indian schoolchildren. She won a Corporate Social Responsibility Award for her work with the foundation. In 2011, Forbes named her on its list of 'Asia's 50 Power Businesswomen'.",
      dateTime: "22nd Jan, 6:30pm-8:00pm",
      venue: "Central Lecture Theatre (CLT)",
      designation: "Former Managing Director, Britannia Industries"
    },
    {
      id: 2,
      name: "Ranjini Manian",
      title: "Indian Roots: Global Wings!",
      bio: "Ranjini Manian, Founder & CEO of Global Adjustments, a premier destination service in India, is an inter-cultural coach to heads of multinational corporations and the Editor of Culturama, India’s only culture magazine for expatriates.  She founded the G.A.T.E. Global Adjustments Trust for Empowerment. She has lived in India, Japan and France. She holds a Bachelor's Degree in Psychology and French from Elphinstone College, Mumbai and a Diploma in French Literature from the University of Sorbonne, Paris. She has also served on the Women’s Leadership Board at Harvard. She is an author of several books including Doing Business in India for Dummies, Upworldly Mobile and the new best seller, Make it in India – offering Indo-US business insights. She is the recipient of a number of awards such as Top 100 Women's Achiever’s from CII.",
      dateTime: "25th Jan, 4:00pm-5:30pm",
      venue: "ICSR Auditorium",
      designation: "CEO, Global Adjustments"
    },
    {
      id: 3,
      name: "Dr. Deepak Bapna",
      title: "Payment Paradigms - How Technology shapes the Payments Industry",
      bio: "Dr. Deepak Bapna is Vice President, Technology, Visa. He joined Visa in January 2015 and is accountable for Visa Developer Platform. He joined Visa from Microsoft, where he primarily worked on the online advertising side. Deepak was also accounted for the growth on Microsoft’s Bangalore Center. Deepak has a unique blend hardware and software experience and more than 15+ years of experience establishing and leading geographical dispersed teams. After his undergraduate from IIT, he received his Master’s from Boston University and a Ph.d.in Robotics from Carnegie Mellon University. He was one of the first recipient of CMU’s “Allen Newell Award for Research Excellence”. Deepak’s interest includes payments, on-line advertising, IoT, as well as education.",
      dateTime: "23rd Jan, 2:30pm-4:00pm",
      venue: "Central Lecture Theatre (CLT)",
      designation: "Vice President, Technology, VISA"
    },
    {
      id: 4,
      name: "Dr. Thomas Colacot",
      title: "Organometallic Chemistry in Everyday Life",
      bio: "Thomas John Colacot is an internationally well respected Scientist, who is currently a Global R & D Manager/Technical Fellow at Johnson Matthey, an international chemical company which was the first one to introduce catalytic convertors in automobiles to prevent environmental pollution and also came up with the well popular and unconventional platinum containing anti-cancer drug, called cisplatin. Dr. Colacot’s work in catalysis was internationally recognized by receiving numerous awards. In 2012 he received RSC’s Applied Catalysis Award by the Royal Society of Chemistry “for exceptional contributions to the development and availability of ligands and catalysts crucial for the advancement of metal-catalysed synthetic organic chemistry.” To our knowledge Thomas is the third Indian and first malayali to receive a RSC award. The Bharataratna award winner Prof. C.N.R. Rao and Bhadma Vibhusan Award Winner Prof. G. Mehta are the earlier RSC award winners. In 2015 he received the prestigious ACS Industry Chemistry Award.",
      dateTime: "26th Jan, 11:00am-12:30pm",
      venue: "Central Lecture Theatre (CLT)",
      designation: "R & D Manager Homogenous Catalysis (Global) at Johnson Matthey"
    },
    {
      id: 5,
      name: "Dr. Kamlesh Lulla",
      title: "The Real Right Stuff: Glimpses of NASA Astronaut Training",
      bio: "Dr. Kamlesh Lulla’s distinguished career at NASA spans 27 years where he has served as a chief scientist for earth observation for space shuttle and international space station programs and directed training of NASA astronauts in earth observation sciences and earth science payloads. His research involved optical and radar remote sensing, advanced sensor development and image and data processing technologies. He holds two PhD degrees and has served in academia as a tenured university professor and directory of multi-disciplinary research centers for space remote sensing and earth sciences for over 15 years before joining NASA. Dr. Lulla received one of the highest NASA honours, The NASA Exceptional Achievement Medal in 2005. He has received numerous other awards from NASA, the US Government and various universities including the American Institute of Aeronautics and Astronautics (AIAA) and the Asia Pacific American Heritage Associations, Ellison Onizuka Award for his scientific and technical excellence at NASA.",
      dateTime: "24th Jan, 11:00am-12:30pm",
      venue: "Central Lecture Theatre (CLT)",
      designation: "Chief scientist for astronaut training for Space Shuttle flights for NASA; Director University Research, Collaborations and Partnership Office"
    },
    {
      id: 6,
      name: "Dr. Udayakumar",
      title: "Beyond Rupees: My Date with Design",
      bio: "Dr. D. Udaya Kumar is an Assistant Professor at Indian Institute of Technology Guwahati, India. He is the designer of the Indian Rupee Symbol. He has a PhD and Master’s degree in Design (Visual communication) from Industrial Design Centre, IIT Bombay. He completed his Bachelor’s degree in Architecture from School of Architecture and Planning, Anna University, Chennai. Before joining his PhD, he worked as a design head of a magazine – Intelligent Computing CHIP for renowned publishing house in Mumbai. His areas of interest include Visual Communication, Graphic Design, Typography, Type Design, Information graphics, Design Research and Architecture.",
      dateTime: "25th Jan, 11:00am-12:30pm",
      venue: "ICSR Auditorium",
      designation: "Designer of Indian Rupee Symbol"
    }];

    $scope.displayModal = function (index) {
      var speaker = speakers[index-1];
      console.log("Clicked");
      var modalInstance = $modal.open({
        templateUrl: 'myModalContentLectures.html',
          controller: 'ModalInstanceCtrlLectures',
          resolve: {
            speaker: function () {
              return speaker;
            }
          }
      });
      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      });
    };

  });

angular.module('shaastra2016App')
  .controller("ModalInstanceCtrlLectures", function ($scope, $modalInstance, speaker) {
    $scope.speaker = speaker;
    $scope.close = function(){
      $modalInstance.dismiss('cancel');
    };
  });