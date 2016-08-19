const toGradientDirection = {
  'horizontal': 'to left',
  'vertical': 'to bottom'
};

const bnnGradient = (color1, color2, direction = 'vertical') => ({
  'background-image': `linear-gradient(${toGradientDirection[direction]}, ${color1}, ${color2})`
});

module.exports = bnnGradient;
