# Interactive Map
Presidential race voting web app

## Summary
Angular web app that that uses Canvas to draw a map of the united states.  Users can click different states to affect the electoral voting count of each state ultimately showing multiple combinations that would result in a democratic or republican presidential election.

## Screenshots
![](https://github.com/wkwyatt/interactive-map/blob/master/election.png)

## Original Focus
The original focus of this app was to learn how to create custom Angular directives
```javascript
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
```
## Features in Progress
* Reset button for the map
* Print all combinations of available open states it would take to win the election

## Links
Make sure to link to jquery and angular
* [JQuery](https://developers.google.com/speed/libraries/)
	* https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js
* [Angular](https://developers.google.com/speed/libraries/)
	* https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js


