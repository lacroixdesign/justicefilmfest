//= require modernizr.min
//= require addeventlistener.shim
//= require fastclick
//= require ondomready.min
//= require map/style
//= require map/init
//= require_self

/* globals FastClick */

window.addEventListener('load', function() {

  // FastClick
  FastClick.attach(document.body);

}, false);
