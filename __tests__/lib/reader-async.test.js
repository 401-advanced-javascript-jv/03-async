'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-async.js');

describe('Async file reader module', () => {
  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];

    reader(files)
      .then((data) => {
        expect(data).toBeUndefined();
      })
      .catch((err) => {
        expect(err).toBeNull();
      });
  });

  it('reads 3 files', () => {
    let files = ['file1.txt', 'file2.txt', 'file3.txt'];

    reader(files)
      .then((data) => {
        console.log(data.length);
        expect(data.length).toEqual(3);
      })
      .catch((err) => {
        expect(err).toBeUndefined();
      });
  });
});
