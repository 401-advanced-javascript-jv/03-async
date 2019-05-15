'use strict';

const fs = require('fs');

// extract the third argument, or return an empty array
const filename = process.argv.slice(2, 3)[0];

// Empty array means no filename given, so error out
if ( !filename ) {
  throw new Error('Missing or invalid argument');
}

// flags for fs.writeFile:
// a+ = Opens file for read and append, creates file if not exists
//      Should not be used for positional writing
// r+ = Opens file for read and write (possible to specify file position)
//      Creates file if not exists
// w+ = Opens file for read and write, creates file if not exists
//      truncates file if exists
fs.readFile(filename, (err, data) => {
  if (err) { throw err; }

  // Create random input to add to the file
  let randInsert = (Math.random() * 10000).toString() + '\n';

  console.log('=======data before=======\n', data.toString());

  fs.writeFile(filename, randInsert, {flag: 'a+'}, (err) => {
    if (err) { throw err; }
    
    fs.readFile(filename, (err, data) => {
      if (err) { throw err; }
      
      console.log('=======data after=======\n', data.toString());

    });

  });

});
