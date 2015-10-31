'use strict'

var fs = require('fs');
var fileName = 'bitmap1.bmp';
var transformedFileName = 'bitmap_tranformed.bmp';
var pixArrOffset = 1078; //Byte offset of pixel array in bitmap
var bytesPerPixel = 1;
var pixArrWidth = 100;
var pixArrHeight = 100;
var pixArrBytes = pixArrWidth * pixArrHeight * bytesPerPixel;
var transformedBuffer;

function transform(uint) {
if (uint === 22) return 12;
return uint;
}

fs.readFile(fileName, function (err, data) {
  if (err) throw err;
  for (var i = 0; i < pixArrBytes; i++) {
    var current = data.readUInt8((pixArrOffset) + i);
    var currentTransformed = transform(current);
    data.writeUInt8(currentTransformed, (pixArrOffset) + i);
  }
  transformedBuffer = data;
  // return transformedBuffer;

  fs.writeFile('bitmap_tranformed.bmp', transformedBuffer, function (err){
    if (err) throw err;
    if (!err) console.log('transformed ' + fileName + ' into ' + transformedFileName + '!');
  });
});
