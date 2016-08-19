const bnnCol = (gridCols, margin = '0px') => {
  const [colsWidth, totalCols] = gridCols.split(/\//);
  const width = `calc(((100% * ${colsWidth}) / ${totalCols}) - (${margin} * 2))`;

  return {
    'margin-left': margin,
    'margin-right': margin,
    'width': width
  };
};

module.exports = bnnCol;
