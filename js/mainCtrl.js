(function(){
	var app = angular.module('app');
	app.controller('mainCtrl', function($scope){

		// function guessTheNumberCtrl($scope){
			$scope.checkGuess = function(){
				$scope.difference = $scope.pickedNum - $scope.guess;
				$scope.numGuesses += 1;
			}

			$scope.initializeGame = function(){
				$scope.numGuesses = 0;
				$scope.pickedNum = Math.floor(Math.random() * 1000 + 1);
				$scope.guess = null;
				$scope.guess = "";
				$scope.difference = null;
			}

			$scope.initializeGame();
		// }
	});
})();