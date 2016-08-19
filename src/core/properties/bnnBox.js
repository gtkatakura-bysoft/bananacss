const toBoxSizing = {
  'inside': 'border-box',
  'outside': 'content-box'
};

const bnnBox = model => ({
  'box-sizing': toBoxSizing[model]
});

module.exports = bnnBox;
