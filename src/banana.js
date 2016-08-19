'use strict';

const _ = require('lodash')
const fs = require('fs');
const css = require('css');
const toDeclarations = require('./helpers/css/toDeclarations');

/**
 * Get config for dependecies injectio and run all bnn modules
 * @module src/banana
 * @param {object} config - Modules for dependecies injection
 */
const Banana = ({ bnnImport, bnnVariable, compress, ...bnnPropertiesConfig }) => {

  const bnnProperties = Object.entries(bnnPropertiesConfig)
    .filter(([key, value]) => value)
    .map(([key]) => [key, require(`./core/properties/${key}`)])
    .reduce((reduced, [name, bnnProperty]) => {
      const hyphenName = _.snakeCase(name).replace(/_/g, '-');
      reduced[hyphenName] = bnnProperty;
      return reduced;
    }, {});

  /**
   * Iteration in AST and run all modules
   * @method render
   * @param {string} inputPath - input file path
   * @param {array} stylesheet - AST stylesheet
   */
  return {
    render: (inputPath, stylesheet) => {

      const ast = css.parse(stylesheet);
      const rules = ast.stylesheet.rules;

      // Search for all the @import and generate a single AST
      rules.forEach((rule, index) => {
        if (rule.import) {
          if (bnnImport) {
            const bnnImport = require('../src/core/bnnImport.js');
            bnnImport(inputPath, rule.import, rules, index);
          }
        }
      });

      // Search for all global variables and compile
      rules.forEach((rule, index) => {
        if ('' + rule.selectors === ':root') {
          if (bnnVariable) {
            require('../src/core/bnnVariable.js')(rule, rules, index);
          }
        }
      });

      // Search for all banana properties and compile
      rules.forEach(({ selectors, declarations }) => {
        if (selectors) {
          for (let declaration = null, i = 0; (declaration = declarations[i]); i++) {
            const bnnProperty = bnnProperties[declaration.property];

            if (bnnProperty) {
              const parameters = declaration.value.split(' ');
              const newProperties = bnnProperty(...parameters);
              const newDeclarations = toDeclarations(newProperties);

              declarations.splice(i, 1, ...newDeclarations);
            }
          }
        }
      });

      return css.stringify(ast, { compress });

    }
  };

};

module.exports = Banana;
