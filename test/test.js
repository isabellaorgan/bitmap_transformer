'use strict';

var transform = require('../lib/transform.js');
var expect = require('chai').expect;
var fs = require('fs');
var ourObject = require('../bitmap.js');
var assert = require('chai').assert;

describe('The wild test of the transform function appears...', function() {
  var data = new Buffer([1, 2, 3]);
  var finalData = new Buffer([2, 3, 1]);
  var pixelbytes = 3;
  var offset = 0;
  it('should record the original colors contained in the bitmap in an array and transform the array by shifting one index position to the right and appending the final index position to the beginning of the array.', function(done) {
    expect(transform(data, pixelbytes, offset)).to.eql(finalData);
    done();
	});
  it('should confirm that the original bitmap data is not equal to the transformed bitmap data', function(done){
    expect(data).to.not.equal(finalData);
    done();
  });
});

