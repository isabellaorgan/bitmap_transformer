For this assignment you will be building a Bitmap reader and transformer.

It will read a Bitmap in from disk, run one or more color transforms on the bitmap and then write it out to a new file. This project will require the use of node buffers in order to manipulate binary data and your project should include tests, as well as a Gruntfile and package.json file. Also, make sure to run all your code through jshint and jscs.

The process will look something like this:


Open file using fs and read it into a buffer
Convert buffer into a Javascript Object
Run a transform on that Javascript Object.
Turn the transformed object back into a buffer.
Write that buffer to a new file.
 

You can also just directly manipulate the buffer.

 

The wikipedia article found here (Links to an external site.) describes the byte specification of a "windows bitmap file." We'll be working the simplest version, meaning no compression. Your project should be able to take a transform as a callback that will be run once the bitmap file has been read into a buffer. Your project should also include at least one transform.
