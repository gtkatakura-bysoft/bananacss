const assert = require('assert');
const bnnRow = require('../../dist/core/properties/bnnRow.js');

describe('bnnRow()', () => {

  // --------------------------

  it('Should return a centered responsive flex container.', () => {

    const result = bnnRow('900px');
    const expect = {
      'margin-left': 'auto',
      'margin-right': 'auto',
      'width': '100%',
      'flex-wrap': 'wrap',
      'display': 'flex',
      'max-width': '900px'
    };

    assert.deepEqual(result, expect);
  });

});
