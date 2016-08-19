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

const bnnAlign = (horizontal, vertical = horizontal) => {
  const transformed = {
    'display': 'flex',
    'flex-wrap': 'wrap'
  };

  if (toJustifyContent[horizontal]) {
    transformed['justify-content'] = toJustifyContent[horizontal];
  }

  if (toAlignItems[vertical]) {
    transformed['align-items'] = toAlignItems[vertical];
  }

  return transformed;
};

module.exports = bnnAlign;
