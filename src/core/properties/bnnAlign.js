const removeNilValues = require('../../helpers/object/removeNilValues');

const toJustifyContent = {
  'left': 'flex-start',
  'right': 'flex-end',
  'center': 'center'
};

const toAlignItems = {
  'top': 'flex-start',
  'bottom': 'flex-end',
  'center': 'center'
};

const bnnAlign = (horizontal, vertical = horizontal) => removeNilValues({
  'display': 'flex',
  'flex-wrap': 'wrap',
  'justify-content': toJustifyContent[horizontal],
  'align-items': toAlignItems[vertical]
});

module.exports = bnnAlign;
