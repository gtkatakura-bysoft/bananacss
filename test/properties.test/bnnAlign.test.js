const assert = require('assert');
const bnnAlign = require('../../dist/core/properties/bnnAlign');

describe('bnnAlign()', () => {

  it('Should return a vertical and horizontal centralized flex container with one value', () => {
    const result = bnnAlign('center');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
      'align-items': 'center'
    });
  });

  it('Should return a vertical and horizontal centralized flex container with two values', () => {
    const result = bnnAlign('center', 'center');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
      'align-items': 'center'
    });
  });

  it('Should return a flex container aligned to left with one value', () => {
    const result = bnnAlign('left');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-start'
    });
  });

  it('Should return a flex container aligned to right with one value', () => {
    const result = bnnAlign('right');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-end'
    });
  });

  it('Should return a flex container, with the content to top with one value', () => {
    const result = bnnAlign('top');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'align-items': 'flex-start'
    });
  });

  it('Should return a flex container, with the content to bottom with one value', () => {
    const result = bnnAlign('bottom');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'align-items': 'flex-end'
    });
  });

  it('Should return a flex container, with the content to left and top', () => {
    const result = bnnAlign('left', 'top');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-start',
      'align-items': 'flex-start'
    });
  });

  it('Should return a flex container, with the content to left and bottom', () => {
    const result = bnnAlign('left', 'bottom');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-start',
      'align-items': 'flex-end'
    });
  });

  it('Should return a flex container, with the content to right and top', () => {
    const result = bnnAlign('right', 'top');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-end',
      'align-items': 'flex-start'
    });
  });

  it('Should return a flex container, with the content to right and bottom', () => {
    const result = bnnAlign('right', 'bottom');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-end',
      'align-items': 'flex-end'
    });
  });

  it('Should return a flex container, with the content to center and bottom', () => {
    const result = bnnAlign('center', 'bottom');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
      'align-items': 'flex-end'
    });
  });

  it('Should return a flex container, with the content to right and center', () => {
    const result = bnnAlign('right', 'center');

    assert.deepEqual(result, {
      'display': 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'flex-end',
      'align-items': 'center'
    });
  });

});
