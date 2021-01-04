const assert = require("assert"); 

function capitalizeFirstLetters(input) {
    let output = '';
    for (let i = 0 ; i < input.length ; i++) {
      if(i === 0) {
        output += input[i].toUpperCase();
      }
      else if(input[i] === " ") {
        output += input[i] + input[i + 1].toUpperCase();
      } 
      else if(input[i] != " " && output[i] != input[i].toUpperCase()) {
          output += input[i];
      }
    }
    
    return output;
};

//TDD testing 

//function exists with the right name
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

//takes one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

//capitalizes one word 
assert.strictEqual(capitalizeFirstLetters("capital"), "Capital");

//capitalizes one letter 
assert.strictEqual(capitalizeFirstLetters("a"), "A"); 

//capitalizes all words in a sentence 
assert.strictEqual(capitalizeFirstLetters("all words in a sentence"), "All Words In A Sentence");
