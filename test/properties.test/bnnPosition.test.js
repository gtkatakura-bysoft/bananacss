const assert = require('assert');
const bnnPosition = require('../../dist/core/properties/bnnPosition');

describe('bnnPosition()', () => {

  // --------------------------

  it('Should return a top,right,bottom and left with four specific' +
    ' value.', () => {

    const result = bnnPosition('10px', '20px', '30px', '40px');
    const expect = {
      'top': '10px',
      'right': '20px',
      'bottom': '30px',
      'left': '40px'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a top,right,bottom and left with one specific' +
    ' value.', () => {

    const result = bnnPosition('10px');
    const expect = {
      'top': '10px',
      'right': '10px',
      'bottom': '10px',
      'left': '10px'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('If the value is center, should return a block centered element', () => {

    const result = bnnPosition('center');
    const expect = {
      'display': 'block',
      'margin-left': 'auto',
      'margin-right': 'auto'
    };

    assert.deepEqual(result, expect);
  });

});
