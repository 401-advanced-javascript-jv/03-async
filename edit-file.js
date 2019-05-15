'use strict';

const fs = require('fs');

// extract the third argument, or return an empty array
const filename = process.args.slice(2, 3);

// Empty array means no filename given, so error out
if ( !Array.isArray(files) || files.length ) {
  throw new Error('Missing or invalid argument');
}

// flags for open:
// a+ = Opens file for read and append, creates file if not exists
//      Should not be used for positional writing
// r+ = Opens file for read and write (positional specification possible)
//      Creates file if not exists
// w+ = Opens file for read and write, creates file if not exists
//      truncates file if exists
fs.open(filename, 'a+', (err, fileData) => {

});
