export default ngModule => {

  if (ON_TEST) {
    require('./phone-price.test').default(ngModule);
  }

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
