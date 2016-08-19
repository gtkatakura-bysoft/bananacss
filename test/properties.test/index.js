const fs = require('fs');

fs.readdirSync(`${__dirname}`)
  .filter(file => file !== 'index.js')
  .forEach(file => require(`${__dirname}/${file}`));
