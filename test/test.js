'use strict';

var buffer = require('../lib/buffer.js');
var expect = require('chai').expect;
var fs = require('fs');

describe('some test', function() {
  it('should do something', function(done) {

	});

	it('should run a test', function(done) {
		fs.readFile(__dirname + '/test', function() {
			done();
		});
	});
});