'use strict';

angular.module('shaastra2016App')
	.directive('imageCacheDirective', function (localStorageService) {
    return function (scope, element, attrs) {

    	if(localStorage.isSupported && typeof localStorageService.get("images") != "undefined" && localStorageService.get("images")){
    	  scope.localStorageImages = localStorageService.get("images");
    	}
    	else{
    	  scope.localStorageImages = [];
    	}

    	var img = {};
      	img.src = attrs.src;
      	getBase64Image(document.getElementById(attrs.id), function(encodeImage){
      		img.storedAs = encodeImage;
      		if(scope.localStorageImages && scope.localStorageImages.indexOf(img)==-1)
			scope.localStorageImages.push(img);
			localStorageService.set("images", scope.localStorageImages);
		});
    
    	};

	});


function getBase64Image(image, callback){
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	
	image.onload = function(){
		canvas.width = image.width;
		canvas.height = image.height;
		ctx.drawImage(image, 0, 0);
		callback(canvas.toDataURL().split(',')[1]);
	}

}

