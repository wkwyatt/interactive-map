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
	$scope.redStatesTotal = redStates.length;
	$scope.blueStatesTotal = blueStates.length;
	$scope.openStatesTotal = openStates.length;
}

function getNewColor(state) {
	// if state color equals red change to blue
	// if state color equals blue change to open
	// if state color equals open change to red
	console.log(state);
	if (state.stateColor == "red") {
		// add element to appropriate array and remove from old array
		redStates.splice(redStates[redStates.indexOf(state)], 1);
		blueStates[state.id] = state;
		console.log("redstates:");
		console.log(redStates);
		console.log("bluestates:");
		console.log(blueStates);
		return "blue";
	} else if (state.stateColor == "blue") {
		// add element to appropriate array and remove from old array
		blueStates.splice(blueStates[blueStates.indexOf(state)], 1);
		openStates[state.id] = state;
		return "open";
	} else if (state.stateColor == "open") {
		// add element to appropriate array and remove from old array
		openStates.splice(openStates[openStates.indexOf(state)], 1);
		redStates[state.id] = state;
		return "red";
	} else  {
		return console.log("error");
	}
	return "red";
}