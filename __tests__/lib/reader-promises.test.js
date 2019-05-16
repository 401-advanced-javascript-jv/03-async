// 'use strict';

// jest.mock('fs');

// const reader = require('../../lib/reader-promises.js');

// describe('File Reader Module', () => {
//   it('when given a bad file, returns an error', () => {
//     let files = ['bad.txt'];
//     // In jest, throwing errors obviously kills the app, so if you're
//     // going to throw one in a test, have the expect execute your code as a
//     // function so that you can trap it.
//     return reader(files, (err, data) => {
//       if ( err ) { throw err; }
//     })
//       .then((data) => {
//         expect(data).toBeUndefined();
//       })
//       .catch((err) => {
//         expect(err).toBeDefined();
//       });
//   });

//   it('reads 3 files', () => {
//     let files = ['file1.txt', 'file2.txt', 'file2.txt'];
//     return reader(files)
//       .then((data) => {
//         expect(data instanceof Array).toBeTruthy();
//         expect(data.length).toBe(3);
//       })
//       .catch((err) => {
//         expect(err).toBeNull();
//       });
//   });
// });

'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promises.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  });


  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    reader(files, (err,data) => {
      expect(err).toBeNull();
      console.log(Array.isArray(data));
      expect(Array.isArray(data)).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });

});
