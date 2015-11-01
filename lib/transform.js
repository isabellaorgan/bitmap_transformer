
'use strict';

module.exports = function (data, pixArrBytes, pixArrOffset) {
   var colorsPresent = [];

   // LOOP THROUGH PIXEL ARRAY AND STORE COLORS PRESENT IN ARRAY
   for (var i = 0; i < pixArrBytes; i++) {
    var current = data.readUInt8((pixArrOffset) + i);
    if (colorsPresent.indexOf(current)) { //checks if the current color is already included in array and pushes it to array if not
      colorsPresent.push(current);
    }
  }

  // SHIFT EACH COLOR TO ANOTHER COLOR ALREADY PRESENT IN IMAGE
  for (var i = 0; i < pixArrBytes; i++) {
    var current = data.readUInt8((pixArrOffset) + i);
    var currentTransformed;
    if (colorsPresent.indexOf(current) < (colorsPresent.length - 1)) {
      currentTransformed = colorsPresent[colorsPresent.indexOf(current) + 1];
    } else {
      currentTransformed = colorsPresent[0];
    }
    data.writeUInt8(currentTransformed, (pixArrOffset) + i);
  }
  return data;
}

