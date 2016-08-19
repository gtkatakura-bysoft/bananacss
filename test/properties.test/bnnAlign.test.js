const assert = require('assert');
const bnnAlign = require('../../dist/core/properties/bnnAlign');

describe('bnnAlign()', () => {

  // --------------------------

  it('Should return a vertical and horizontal centralized flex container' +
    'with one value', () => {

    const result = bnnAlign('center');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
      'align-items': 'center'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a vertical and horizontal centralized flex' +
    ' container with two values', () => {

    const result = bnnAlign('center', 'center');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
      'align-items': 'center'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a flex container aligned to left with one value', () => {

    const result = bnnAlign('left');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-start'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a flex container aligned to right with one value', () => {

    const result = bnnAlign('right');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-end'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a flex container, with the content to top with' +
    ' one value', () => {

    const result = bnnAlign('top');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'align-items': 'flex-start'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a flex container, with the content to bottom with' +
    ' one value', () => {

    const result = bnnAlign('bottom');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'align-items': 'flex-end'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a flex container, with the content to' +
    ' left and top', () => {

    const result = bnnAlign('left', 'top');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-start',
      'align-items': 'flex-start'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a flex container, with the content to ' +
    'left and bottom', () => {

    const result = bnnAlign('left', 'bottom');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-start',
      'align-items': 'flex-end'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a flex container, with the content to right ' +
    'and top', () => {

    const result = bnnAlign('right', 'top');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-end',
      'align-items': 'flex-start'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a flex container, with the content to right and ' +
    'bottom', () => {

    const result = bnnAlign('right', 'bottom');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-end',
      'align-items': 'flex-end'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a flex container, with the content to center ' +
    'and bottom', () => {

    const result = bnnAlign('center', 'bottom');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
      'align-items': 'flex-end'
    };

    assert.deepEqual(result, expect);
  });

  // --------------------------

  it('Should return a flex container, with the content to right and ' +
    'center', () => {

    const result = bnnAlign('right', 'center');
    const expect = {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-end',
      'align-items': 'center'
    };

    assert.deepEqual(result, expect);
  });

});
