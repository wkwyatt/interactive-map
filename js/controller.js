var stateMap = angular.module('interactiveMap', []);

stateMap.controller('interactiveMapCntrl', interactiveMapCntrl);

stateMap.directive('clickState', function(){
	return {
		link: function($scope, element, iAttrs, controller) {
			element.bind('click', function(){
				var newColor = getNewColor($scope.state);
				$scope.state.stateColor = newColor;
				$scope.calcVotes();
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

	$scope.stateVoted = function ($state) {

	}

	$scope.calcVotes = function () {
		$scope.redVotes = 0;
		$scope.blueVotes = 0;
		$scope.openVotes = 0;

		for (var i = 0; i < states.length; i++) {
			if(blueStates[i]){
				$scope.blueVotes += blueStates[i].electoralVotes;
			} else if(redStates[i]){
				$scope.redVotes += redStates[i].electoralVotes;
			} else if(openStates[i]){
				$scope.openVotes += openStates[i].electoralVotes;
			}
		};

		$scope.blueBar = ($scope.blueVotes / 538) * 100 + "%"; 
		$scope.openBar = ($scope.openVotes / 538) * 100 + "%";
		$scope.redBar = ($scope.redVotes / 538) * 100 + "%";

		console.log("=====votes======");
		console.log($scope.blueVotes);
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
		redStates.splice(state.id, 1);
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