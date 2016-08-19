const assert = require('assert');
const bnnCol = require('../../dist/core/properties/bnnCol');

describe('bnnCol()', () => {

  // --------------------------

  it('Should return a corresponding width with calc()' +
    ' and margins gutters.', () => {

    const result = bnnCol('3/12', '5px');
    const expect = {
      'width': 'calc(((100% * 3) / 12) - (5px * 2))',
      'margin-right': '5px',
      'margin-left': '5px'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a corresponding width with calc()' +
    ' and 0px of gutters.', () => {

    const result = bnnCol('3/12');

    const expect = {
      'width': 'calc(((100% * 3) / 12) - (0px * 2))',
      'margin-right': '0px',
      'margin-left': '0px'
    };

    assert.deepEqual(result, expect);
  });

});
