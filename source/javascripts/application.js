//= require modernizr.min
//= require addeventlistener.shim
//= require fastclick
//= require ondomready.min
//= require map/style
//= require map/init
//= require_self

/* globals FastClick */

/*
 * init FastClick
 */
window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);
