export default ngModule => {

  ngModule.factory('Products', function($resource) {
    // return $resource('/api/product/:id', { IN PRODUCTION
    return $resource('/assets/api/product.json', {
      'id' : '@id'
    });
  });
};
