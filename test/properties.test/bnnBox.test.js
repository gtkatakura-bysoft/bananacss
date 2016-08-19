const assert = require('assert');
const bnnBox = require('../../dist/core/properties/bnnBox');

describe('bnnBox()', () => {

  // --------------------------

  it('Should return a inside box model.', () => {

    const result = bnnBox('inside');
    const expect = {
      'box-sizing': 'border-box'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a outside box model.', () => {

    const result = bnnBox('outside');
    const expect = {
      'box-sizing': 'content-box'
    };

    assert.deepEqual(result, expect);
  });

});
