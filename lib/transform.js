'use strict';

module.exports = function(buffer) {

	for (var i = 0; i < 256; i +=1) {
		invert(buffer);
	}
	return buffer;
};

function invert(buffer) {
	var something = ();
	buffer.writeUInt8LE(255 - red.rgb);
	buffer.writeUInt8LE(255 - green.rgb);
	buffer.writeUInt8LE(255 - blue.rgb);
};

