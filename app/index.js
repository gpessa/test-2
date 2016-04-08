require('./css/theme.scss');

import angular from 'angular';
import ngResource from 'angular-resource';

import registerDirectives from './directives';
import registerResources from './resources';
import registerFilters from './filters';

var ngModule = angular.module('app', ['ngResource']);

registerDirectives(ngModule);
registerResources(ngModule);
registerFilters(ngModule);
