# LAB - 03

## Async Operation

### Author: Jesse Van Volkinburg

### Links and Resources
* [submission PR](https://www.travis-ci.com/401-advanced-javascript-jv/03-async)
* [travis](https://www.travis-ci.com/401-advanced-javascript-jv/03-async)

### Modules
#### `reader.js`
This module exports a single function.
* Usage example: `const readAll = require('reader.js');
* `readAll(files, callback)` where `files` is an array of three (3) file paths and `callback(err, data)` is an error-first callback function to run on the contents.

### Setup
* Clone the repo: `git clone https://github.com/401-advanced-javascript-jv/03-async.git`
* Enter repo dir: `cd 03-async`
* Checkout submission branch: `git checkout submission`
* Run NPM install: `npm install`

#### Running the app
* `node edit-file.js <filename>`
  * This module takes a single text file as an argument and will add a random number to the end of the file.
* `npm run module`
  * This will run the file-reader module on the files `./files/1.txt`, `./files/2.txt`, and `./files/3.txt`.
  
#### Tests
Run with `npm test`
* Assertions
  * File reader module returns an error when given a bad file
  * File reader reads 3 files
* What assertions need to be / should be made?
  * Promises need to be checked
  * Async/await needs to be checked
