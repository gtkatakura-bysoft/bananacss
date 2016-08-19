const assert = require('assert');
const bnnWidth = require('../../dist/core/properties/bnnWidth.js');

describe('bnnWidth()', () => {

  // --------------------------

  it('Should return a responsive combination of width' +
    ' and max-width values.', () => {

    const result = bnnWidth('300px');
    const expect = {
      'width': '100%',
      'max-width': '300px'
    };

    assert.deepEqual(result, expect);
  });

});
