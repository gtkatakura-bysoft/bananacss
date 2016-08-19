const assert = require('assert');
const bnnGradient = require('../../dist/core/properties/bnnGradient');

describe('bnnGradient()', () => {

  // --------------------------

  it('Should return a gradient with two colors.', () => {

    const result = bnnGradient('red', 'yellow');
    const expect = {
      'background-image': 'linear-gradient(to bottom, red, yellow)'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('If the third value is vertical, should return a to bottom' +
    ' gradient.', () => {

    const result = bnnGradient('red', 'yellow', 'vertical');
    const expect = {
      'background-image': 'linear-gradient(to bottom, red, yellow)'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('If the third value is hotizontal, should return a to left' +
    ' gradient.', () => {

    const result = bnnGradient('red', 'yellow', 'horizontal');
    const expect = {
      'background-image': 'linear-gradient(to left, red, yellow)'
    };

    assert.deepEqual(result, expect);
  });

});
