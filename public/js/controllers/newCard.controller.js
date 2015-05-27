app.controller('NewCardController', function ($scope, FlashCardsFactory){
	$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
	}

	$scope.errorMessages = {
		Q: "Question is a required field",
		C: "Category is a required field",
		QS: "Question is too short",
		AL: "Answer is too long"
	};

	$scope.setNewCard = function (newCard){

		FlashCardsFactory.createNewCard(newCard).then(function (response){
			console.log(response);
			$scope.newCard.question = null;
			$scope.newCard.category = null;
			$scope.newCard.answers = [];
		});
	};

	console.log("test", $scope.flashCards);
});