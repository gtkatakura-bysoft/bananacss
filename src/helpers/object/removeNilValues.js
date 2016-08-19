const _ = require('lodash/fp');

const isNilValue = ([key, value]) => _.isNil(value);

const removeNilValues = _.flow(
  _.toPairs,
  _.filter(_.negate(isNilValue)),
  _.fromPairs
);

module.exports = removeNilValues;
