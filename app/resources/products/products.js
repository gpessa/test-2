export default ngModule => {

  ngModule.factory('Products', function($resource) {
    return $resource('/api/products/:id', {
      'id' : '@id'
    });
  });
};
