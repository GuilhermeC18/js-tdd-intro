const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it('is a function acepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1); 
  });
  
  it('capitalizes one Word', ()=> {
    assert.strictEqual(capitalizeFirstLetters('capital'), 'Capital');
  });

  it('works with 1 character', () => {
    assert.strictEqual(capitalizeFirstLetters('a'), 'A');
  });

  it('works with empty string', ()=> {
     assert.strictEqual(capitalizeFirstLetters(""), ""); 
  });

  it('works with multiple words', ()=>{
   assert.strictEqual(capitalizeFirstLetters("all words in a sentence"), "All Words In A Sentence");
  });
});

