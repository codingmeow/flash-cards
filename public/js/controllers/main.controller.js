app.controller('MainController', function ($rootScope, $scope, FlashCardsFactory, ScoreFactory) {

	$scope.loading = false;
	// console.log("WHILE loading", $scope.loading);

	FlashCardsFactory.getFlashCards().then(function (data){

		$scope.flashCards = data;

		$scope.loading = true;
		// console.log("AFTER IT LOADS", $scope.loading);

	});

	$rootScope.$on('newCard', function (event, data){
		$scope.flashCards.push(data);
	})
	// $scope.$watch('', function(){

	// })

	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];

	$scope.getCategoryCards = function (category) {
		$scope.loading = false;
		FlashCardsFactory.getFlashCards(category).then(function (data){
			$scope.flashCards = data;
			$scope.currentCategory = category;
			$scope.loading = true;
			if (!category){
				ScoreFactory.correct = 0;
				ScoreFactory.incorrect = 0;
			}
		});
	}

});
