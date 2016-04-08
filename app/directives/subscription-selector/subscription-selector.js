export default ngModule => {

  ngModule.directive('subscriptionSelector', /*@ngInject*/ (Products) => {
    return {
      restrict: 'E',
      template: require('./subscription-selector.html'),
      controllerAs: '$ctrl',
      scope : {
        id : '=productId'
      },
      link : function(scope, element, attrs){
          scope.product = new Products({
            'id' : scope.id
          });

          scope.product
            .$get()
            .then(() => {
              scope.selected = scope.product.subscriptions[0];
            })
      }
    };
  });

};
