require('./css/theme.scss');

import angular from 'angular';
import ngResource from 'angular-resource';

// Collecting directives
import registerDirectives from './directives';
//Collecting resources
import registerResources from './resources';
//Collecting filters
import registerFilters from './filters';

var ngModule = angular.module('app', ['ngResource']);

// Registering resources into the module
registerDirectives(ngModule);
registerResources(ngModule);
registerFilters(ngModule);
