export default ngModule => {

  ngModule.directive('subscriptionRecap', /*@ngInject*/ () => {
    return {
      restrict: 'E',
      template: require('./subscription-recap.html'),
      replace:true,
      scope : {
        subscription : '=',
        product : '='
      }
    };
  });

};
