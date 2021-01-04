const assert = require('assert');
const rectangle = require('../Rectangle');


describe('Rectangle', () => {
  it('checks if it is a Square', () => {
    assert.strictEqual(new rectangle(4, 4).isSquare(), true);
    assert.strictEqual(new rectangle(1, 4).isSquare(), false ); 
  });
  it('check area', () => {
    assert.strictEqual(new rectangle(2, 3).getArea(), 6);
  });
  it('check perimeter', () => {
    assert.strictEqual(new rectangle(2, 3).getPerimeter(), 10);
  });
});
