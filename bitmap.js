'use strict';

var fs = require('fs');
var transform = require(__dirname + '/lib/transform.js');
var fileName = 'bitmap1.bmp';
var transformedFileName = 'bitmap_tranformed.bmp';

fs.readFile(fileName, function(err, data) {
  if (err) {
    throw err;
  }

  // READ META DATA FROM BITMAP
  //var ourObject = {};
  //ourObject.hopefullyBM = data.toString('utf8', 0, 2);
  //module.exports = ourObject;
  //console.log(ourObject.hopefullyBM);
  var pixArrOffset = data.readUInt32LE(10); //Byte offset of pixel array in bitmap
  var bytesPerPixel = data.readUInt16LE(28)/8;
  var pixArrWidth = data.readInt32LE(18);
  var pixArrHeight = data.readInt32LE(22);
  var pixArrBytes = pixArrWidth * pixArrHeight * bytesPerPixel;

  // TRANSFORM PIXEL ARRAY

  var transformedBuffer = transform(data, pixArrBytes, pixArrOffset);

  // WRITE TRANSFORMED PIXEL ARRAY INTO NEW BITMAP FILE

  fs.writeFile('bitmap_tranformed.bmp', transformedBuffer, function(err) {
    if (err) {
      throw err;
    }
    if (!err) {
      console.log('Transformed ' + fileName + ' into ' + transformedFileName + '!');
    }
  });
});
