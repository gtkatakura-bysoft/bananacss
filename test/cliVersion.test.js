const assert = require('assert');
const exec = require('child_process').exec;
const pkg = require( '../package.json' );

describe('$ banana --version', () => {

  it('Should be return the program version', () => {
    exec('node dist/bin/index --version', (error, stdout) => {
      const result = stdout.replace('\n', '');
      const expect = pkg.version;

      assert.equal(result, expect);
    });
  });
});
