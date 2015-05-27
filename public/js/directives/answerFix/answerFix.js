app.directive('fixAnswer', function(){
	return {
		restrict: 'A',
		priority: -1,
		link: function (scope, element, attr) {
			// console.log(element[0].name, scope.$index);
			var aIndex = element[0].name + '[' +scope.$index + ']';
			element[0].name = aIndex;
			console.log(element[0].name);
		}
	}
})