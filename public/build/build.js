;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/* Dependencies */

var giStatus = module.exports = {};

giStatus.connected = function(connectionStatus) {
  var statusEl = $('#gi-status');

  switch (connectionStatus) {
    case true:
      statusEl.removeClass('label-danger');
      statusEl.addClass('label-success');
      statusEl.find('.glyphicon').removeClass('glyphicon-thumbs-down');
      statusEl.find('.glyphicon').addClass('glyphicon-thumbs-up');
      break;
    case false:
      statusEl.addClass('label-danger');
      statusEl.removeClass('label-success');
      statusEl.find('.glyphicon').removeClass('glyphicon-thumbs-up');
      statusEl.find('.glyphicon').addClass('glyphicon-thumbs-down');
  }
};
},{}],2:[function(require,module,exports){

/* global goinstant */

'use strict';

/* Dependencies */

var giStatus = require('./gi_status');

var url = 'https://goinstant.net/mattcreager/land-ho';
var platform = new goinstant.Platform(url);

platform.connect(function (err) {
  if (err) {
    giStatus.connected(false);
    console.log('Error connecting to platform:', err);
    return;
  }

  giStatus.connected(true);
});
},{"./gi_status":1}]},{},[2])
;