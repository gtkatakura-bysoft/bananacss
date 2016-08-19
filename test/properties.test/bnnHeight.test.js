const assert = require('assert');
const bnnHeight = require('../../dist/core/properties/bnnHeight');

describe('bnnHeight()', () => {

  it('Should return a responsive combination of height and max-height values.', () => {
    const result = bnnHeight('300px');

    assert.deepEqual(result, {
      'height': '100%',
      'max-height': '300px'
    });
  });

});
