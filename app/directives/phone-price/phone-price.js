export default ngModule => {

  ngModule.directive('phonePrice', /*@ngInject*/ () => {
    return {
      restrict: 'E',
      template: require('./phone-price.html'),
      replace:true,
      scope : {
        subscription : '=',
        product : '='
      }
    };
  });

};
