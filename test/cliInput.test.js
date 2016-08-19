const assert = require('assert');
const exec = require('child_process').exec;
const fs = require('fs');

describe('$ banana <input_path>', () => {

  // Compile the .bnn file
  before((done) => {
    exec('node dist/bin test/fixtures/style.bnn', () => done());
  });

  it('Should be return the compiled .CSS file', () => {
    const result = fs.readFileSync('test/fixtures/style.css', 'utf8').replace(/\r\n/g, '\n');
    const expect = fs.readFileSync('test/fixtures/expects/style.css', 'utf8').replace(/\r\n/g, '\n');

    assert.equal(result, expect);
  });

  // Delete the .css result
  after((done) => {
    fs.unlink('test/fixtures/style.css');
    done();
  });

});
