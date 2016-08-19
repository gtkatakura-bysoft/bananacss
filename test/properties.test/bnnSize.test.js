const assert = require('assert');
const bnnSize = require('../../dist/core/properties/bnnSize');

describe('bnnSize()', () => {

  // --------------------------

  it('Should return a width and height with one specific value.', () => {

    const result = bnnSize('10px');
    const expect = {
      'width': '10px',
      'height': '10px'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a width and height with two specific values.', () => {

    const result = bnnSize('10px', '50px');
    const expect = {
      'width': '10px',
      'height': '50px'
    };

    assert.deepEqual(result, expect);
  });

});
