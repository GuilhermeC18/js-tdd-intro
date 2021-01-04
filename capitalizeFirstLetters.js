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


module.exports = capitalizeFirstLetters;