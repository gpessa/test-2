export default ngModule => {

  if (ON_TEST) {
    require('./subscription-buy.test').default(ngModule);
  }

  ngModule.directive('subscriptionBuy', /*@ngInject*/ () => {
    return {
      restrict: 'E',
      template: require('./subscription-buy.html'),
      replace:true,
      scope : {
        subscription : '=',
        product : '='
      }
    };
  });

};
