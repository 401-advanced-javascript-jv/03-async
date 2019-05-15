'use strict';

const fs = require('fs');

// extract the third argument, or return an empty array
const filename = process.argv.slice(2, 3)[0];

// Empty array means no filename given, so error out
if ( !filename ) {
  throw new Error('Missing or invalid argument');
}

// flags for fs.open:
// a+ = Opens file for read and append, creates file if not exists
//      Should not be used for positional writing
// r+ = Opens file for read and write (possible to specify file position)
//      Creates file if not exists
// w+ = Opens file for read and write, creates file if not exists
//      truncates file if exists
fs.readFile(filename, (err, data) => {
  
  if (err) { throw err; }

  // Make a random string and convert it to a Buffer
  // Buffers are what we use to write to a file.
  let randInsert = (Math.random() * 10000).toString() + '\n';

  console.log(data.toString());

  fs.writeFile(filename, randInsert, {flag: 'a+'}, (err) => {
    if (err) { throw err; }
    
    fs.readFile(filename, (err, data) => {
      if (err) { throw err; }
      
      console.log(data.toString());

    });

  });

});
