'use strict';

const util = require('util');
const fs = require('fs');
let contents = [];

const promReadFile = util.promisify(fs.readFile);

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  return readAll([...files]);
  // contents = [];
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 */
const readOne = (file) => {
  return promReadFile(file);
};

/**
 * Reads and returns a Promise which resolves to the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths) => {
  contents = [];

  for (let path of paths) {
    contents.push(readOne(path));
  }

  return Promise.all(contents);

};
