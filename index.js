'use strict';

const fileReader = require('./lib/reader.js');
const fileReaderPromises = require('./lib/reader-promises.js');
const fileReaderAsync = require('./lib/reader-async.js');
const fileReaderPromiseAll = require('./lib/reader-promise-all.js');

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

fileReaderPromiseAll(files)
  .then((data) => {
    data = data.map((input) => {
      return input.toString().trim();
    });
    console.log('From Promise.all:', data);
  })
  .catch((err) => {
    throw err;
  });
