const assert = require('assert');
const bnnBox = require('../../dist/core/properties/bnnBox');

describe('bnnBox()', () => {

  it('Should return a inside box model.', () => {
    const result = bnnBox('inside');

    assert.deepEqual(result, {
      'box-sizing': 'border-box'
    });
  });

  it('Should return a outside box model.', () => {
    const result = bnnBox('outside');

    assert.deepEqual(result, {
      'box-sizing': 'content-box'
    });
  });

});
