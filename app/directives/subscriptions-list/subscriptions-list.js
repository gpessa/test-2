export default ngModule => {

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
