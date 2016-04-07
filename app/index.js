require('./css/theme.scss');

import angular from 'angular';
import ngResource from 'angular-resource';
import ngMocks from 'angular-mocks';

import registerDirectives from './directives';
import registerResources from './resources';
import registerFilters from './filters';

var ngModule = angular.module('app', ['ngResource', 'ngMockE2E']);

registerDirectives(ngModule);
registerResources(ngModule);
registerFilters(ngModule);

ngModule.run(function($httpBackend) {
  $httpBackend.whenRoute('GET', '/api/products/:id').respond((method, url, data) => {
    return [200, {
      'name' : 'Apple iPhone 6s 64GB Zilver',
      'price' : 729,
      'subscriptions' : [{
        'name' : 'Basis Mobiel',
        'volume' : '150 min or sms',
        'data' : 500,
        'discountdevice' : 220,
        'price' : 44,
        'discount' : 10
      },{
        'name' : 'Vooral Internet Instap',
        'volume' : '150 min or sms',
        'data' : 1000,
        'discountdevice' : 320,
        'price' : 50,
        'discount' : 11
      },{
        'name' : 'Vooral Internet Standard',
        'volume' : '200 min or sms',
        'data' : 5000,
        'discountdevice' : 380,
        'price' : 48,
        'discount' : 12
      },{
        'name' : 'Zorgeloos instap',
        'volume' : 'Unlimited',
        'data' : 1000,
        'discountdevice' : 380,
        'price' : 58,
        'discount' : 12
      }],
      'images' : [
        'products/apple-iphone-6s-gold-back.png',
        'products/apple-iphone-6s-gold-front.png',
        'products/apple-iphone-6s-gold-side.png'
      ]
    }];
  });
})
