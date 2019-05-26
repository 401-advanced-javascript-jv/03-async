'use strict';

const fileReader = require('./lib/reader.js');
const fileReaderPromises = require('./lib/reader-promises.js');
const fileReaderAsync = require('./lib/reader-async.js');

// Obtain and assert input
let files = process.argv.slice(2);

if (!(files instanceof Array && files.length)) {
  throw new Error('Invalid Args');
}

fileReader(files, (err, data) => {
  if (err) {
    throw err;
  }
  console.log('From Callback:', data);
});

fileReaderPromises(files)
  .then((data) => {
    console.log('From Promises:', data);
  })
  .catch((err) => {
    throw err;
  });

fileReaderAsync(files)
  .then((data) => {
    console.log('From Async:', data);
  })
  .catch((err) => {
    throw err;
  });
