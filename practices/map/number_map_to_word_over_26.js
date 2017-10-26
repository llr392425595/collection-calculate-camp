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

let number_map_to_word_over_26 = function(collection){
  return collection.map((item)=>{
    return numToChar(item);
  });
};
module.exports = number_map_to_word_over_26;
