app.directive('flashCard', ['ScoreFactory', function (ScoreFactory) {
  return {
    restrict: "E",    //'A' is for attribute 'E' is for element
    templateUrl: 'js/directives/flash-cards/flash-card.html',
    link: function(scope) {
    	scope.answerQuestion = function (answer, flashCard) {
				if (!flashCard.answered) {
					flashCard.answered = true;
					flashCard.answeredCorrectly = answer.correct;
					flashCard.answeredCorrectly ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
				}
			}
    }
  };
}]);