app.directive('flash-card', function() {
  return {
    restrict: "E",    //'A' is for attribute 'E' is for element
    template: 'js/directives/flash-card/flash-card.html',
    link: function(scope, element, attrs, controller) {  //runs on the dom tree when its linked
      //use element to access the dom node and interact with the
      // elements events (i.e. .onclick)
    }

  }; //<-- directive definition
});