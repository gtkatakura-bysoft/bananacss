const assert = require('assert');
const bnnGradient = require('../../dist/core/properties/bnnGradient');

describe('bnnGradient()', () => {

  it('Should return a gradient with two colors.', () => {
    const result = bnnGradient('red', 'yellow');

    assert.deepEqual(result, {
      'background-image': 'linear-gradient(to bottom, red, yellow)'
    });
  });

  it('If the third value is vertical, should return a to bottom gradient.', () => {
    const result = bnnGradient('red', 'yellow', 'vertical');

    assert.deepEqual(result, {
      'background-image': 'linear-gradient(to bottom, red, yellow)'
    });
  });

  it('If the third value is hotizontal, should return a to left gradient.', () => {
    const result = bnnGradient('red', 'yellow', 'horizontal');

    assert.deepEqual(result, {
      'background-image': 'linear-gradient(to left, red, yellow)'
    });
  });

});
