'use strict';

// the .promises subset of the 'fs' module uses inbuilt Node.js
// promises for filesystem operations.
const fs = require('fs').promises;

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  return readAll([...files]);
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @returns the file data buffer
 */
const readOne = (file) => {
  return fs.readFile(file);
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = async (paths) => {
  let contents = [];

  try {
    console.log(`Async Read: ${paths[0]}`);
    let data = await readOne(paths[0]);
    contents.push(data.toString().trim());
  }
  catch (err) {
    return null;
  }
  try {
    console.log(`Async Read: ${paths[1]}`);
    let data = await readOne(paths[1]);
    contents.push(data.toString().trim());
  }
  catch (err) {
    return null;
  }
  try {
    console.log(`Async Read: ${paths[2]}`);
    let data = await readOne(paths[2]);
    contents.push(data.toString().trim());
  }
  catch (err) {
    return null;
  }
  return contents;

};
