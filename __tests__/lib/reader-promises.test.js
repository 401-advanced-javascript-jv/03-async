'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promises.js');

describe('Promise File Reader Module', () => {
  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    return reader(files)
      .then((data) => {
        expect(data).toBeUndefined();
      })
      .catch((err) => {
        expect(err).toBeNull();
      });
  });

  it('reads 3 files', () => {
    let files = ['file1.txt', 'file2.txt', 'file3.txt'];
    return reader(files)
      .then((data) => {
        expect(Array.isArray(data)).toBeTruthy();
        expect(data.length).toEqual(3);
      })
      .catch((err) => {
        expect(err).toBeNull();
      });
  });
});
