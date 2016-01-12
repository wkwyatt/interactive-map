var stateMap = angular.module('interactiveMap', []);

stateMap.controller('interactiveMapCntrl', interactiveMapCntrl);

stateMap.directive('clickState', function(){
	return {
		link: function($scope, element, iAttrs, controller) {
			element.bind('click', function(){
				// var newColor = getNewColor($scope.state);
				// $scope.state.stateColor = newColor;
				// var pathOfTheElement = element[0].querySelector('path');
				// pathOfTheElement.setAttribute('class', newColor);
			});
		}
	}
});

function interactiveMapCntrl($scope) {
	console.log(defaultStates);
	$scope.states = states;
	$scope.redStatesTotal = redStates.length;
	$scope.blueStatesTotal = blueStates.length;
	$scope.openStatesTotal = openStates.length;

	$scope.stateVoted = function($state) {
		var newColor = getNewColor($state);
		$state.stateColor = newColor;
		// var pathOfTheElement = element[0].querySelector('path');
		// pathOfTheElement.setAttribute('class', newColor);
		$scope.calcVotes();
	}

	$scope.calcVotes = function () {
		$scope.redVotes = 0;
		$scope.blueVotes = 0;
		$scope.openVotes = 0;

		for (var i = 0; i < states.length; i++) {
			if(blueStates.indexOf(states[i]) > -1){
				$scope.blueVotes += blueStates[blueStates.indexOf(states[i])].electoralVotes;
			} 
			if(redStates.indexOf(states[i]) > -1){
				$scope.redVotes += redStates[redStates.indexOf(states[i])].electoralVotes;
			} 
			if (openStates.indexOf(states[i]) > -1){
				$scope.openVotes += openStates[openStates.indexOf(states[i])].electoralVotes;
			}
		}

		$scope.blueBar = ($scope.blueVotes / 540) * 100 + "%"; 
		$scope.openBar = ($scope.openVotes / 540) * 100 + "%";
		$scope.redBar = ($scope.redVotes / 540) * 100 + "%";
	}

	$scope.reset = function(){
		window.location.reload(false); 
	}

	$scope.calcVotes();
}

function getNewColor(state) {
	// if state color equals red change to blue
	// if state color equals blue change to open
	// if state color equals open change to red
	console.log(state);
	if (state.stateColor == "red") {
		// add element to appropriate array and remove from old array
		redStates.splice(redStates.indexOf(state), 1);
		blueStates.push(state);
		return "blue";
	} else if (state.stateColor == "blue") {
		// add element to appropriate array and remove from old array
		blueStates.splice(blueStates.indexOf(state), 1);
		openStates.push(state);
		return "open";
	} else if (state.stateColor == "open") {
		// add element to appropriate array and remove from old array
		openStates.splice(openStates.indexOf(state), 1);
		redStates.push(state);
		return "red";
	} else  {
		return console.log("error");
	}
	return "red";
}