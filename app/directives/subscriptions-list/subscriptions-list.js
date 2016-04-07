export default ngModule => {

  if (ON_TEST) {
    require('./subscriptions-list.test').default(ngModule);
  }

  ngModule.directive('subscriptionsList', /*@ngInject*/ () => {
    return {
      restrict: 'E',
      template: require('./subscriptions-list.html'),
      require : true,
      scope : {
        subscriptions : '=',
        product : '=',
        selected : '=ngModel'
      }
    };
  });

};
