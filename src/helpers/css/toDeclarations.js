const type = 'declaration';

const toDeclaration = ([property, value]) => ({ type, property, value });

const toDeclarations = obj => Object.entries(obj).map(toDeclaration);

module.exports = toDeclarations;
