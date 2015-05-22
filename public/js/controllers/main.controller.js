app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	FlashCardsFactory.getFlashCards().then(function (data){
		$scope.flashCards = data;
	});

	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			flashCard.answeredCorrectly ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
		}
	}

	$scope.getCategoryCards = function (category) {
		FlashCardsFactory.getFlashCards(category).then(function (data){
			$scope.flashCards = data;
			$scope.currentCategory = category;
		});
	}

});

app.controller('StatsController', function($scope, ScoreFactory) {
    $scope.scores = ScoreFactory;
})

