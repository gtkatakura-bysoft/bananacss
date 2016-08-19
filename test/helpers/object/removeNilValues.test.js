const assert = require('assert');
const removeNilValues = require('../../../dist/helpers/object/removeNilValues');

describe('removeNilValues()', () => {

  const expect = {
    valueZero: 0,
    valueEmpty: '',
    valueArray: [],
    valueObject: {}
  };

  const prepare = obj => Object.assign(obj, expect);

  it('Should return a object without null values', () => {
    const result = removeNilValues(prepare({
      valueNull: null,
      valueNullTwo: null
    }));

    assert.deepEqual(result, expect);
  });

  it('Should return a object without undefined values', () => {
    const result = removeNilValues(prepare({
      valueUndef: undefined,
      valueUndefTwo: undefined
    }));

    assert.deepEqual(result, expect);
  });

  it('Should return a object without nil values', () => {
    const result = removeNilValues(prepare({
      valueNull: null,
      valueNullTwo: null,
      valueUndef: undefined,
      valueUndefTwo: undefined
    }));

    assert.deepEqual(result, expect);
  });
});
