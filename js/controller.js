var stateMap = angular.module('interactiveMap', []);

stateMap.controller('interactiveMapCntrl', interactiveMapCntrl);

stateMap.directive('clickState', function(){
	return {
		link: function($scope, element, iAttrs, controller) {
			element.bind('click', function(){
				var newColor = getNewColor($scope.state);
				$scope.state.stateColor = newColor;
				var pathOfTheElement = element[0].querySelector('path');
				pathOfTheElement.setAttribute('class', newColor);
			});
		}
	}
});

function interactiveMapCntrl($scope){
	$scope.states = states;
}

function getNewColor(state) {
	// if state color equals red change to blue
	// if state color equals blue change to open
	// if state color equals open change to red
	console.log(state);
	if (state.stateColor == "red") {
		return "blue";
	} else if (state.stateColor == "blue") {
		return "open";
	} else if (state.stateColor == "open") {
		return "red";
	} else  {
		return console.log("error");
	}
	return "red";
}