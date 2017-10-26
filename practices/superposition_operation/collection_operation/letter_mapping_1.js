'use strict';
function numToChar(num) {
  let remainder = num%26;
  let quotient = parseInt(num/26);

  if(quotient === 0){
    return String.fromCharCode(remainder+96)
  }else if(quotient ===1&&remainder===0){
    return 'z';
  }else if(quotient > 1&&remainder===0){
    return numToChar(quotient-1) + 'z';
  }else {
    return numToChar(quotient) + String.fromCharCode(remainder+96);
  }
}

function even_to_letter(collection) {
  let result = [];
  collection.map((item)=>{
    if(item%2===0){
      result.push(numToChar(item));
    }
  });

  return result;
}

module.exports = even_to_letter;
