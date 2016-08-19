const bnnPosition = (top, right = top, bottom = top, left = top) => {
  if (top === 'center') {
    return {
      'margin-right': 'auto',
      'margin-left': 'auto',
      'display': 'block'
    };
  }

  return { top, right, bottom, left };
};

module.exports = bnnPosition;
