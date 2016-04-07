export default ngModule => {

  if (ON_TEST) {
    require('./product-image.test').default(ngModule);
  }

  ngModule.directive('productImage', /*@ngInject*/ () => {
    return {
      restrict: 'E',
      template: require('./product-image.html'),
      replace:true,
      scope : {
        images : '='
      },
      link : function(scope, element, attrs){
        scope.selected = 0;

        scope.select = function(index){
          scope.selected = index;
        }
      }
    };
  });

};
