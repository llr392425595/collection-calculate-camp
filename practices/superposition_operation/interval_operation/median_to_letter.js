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

function median_to_letter(collection) {
  let len = collection.length;
  let median;
  if(len%2===1){
    median = collection[(len-1)/2];
  }else {
    median =Math.ceil((collection[len/2-1] + collection[(len)/2])/2);
  }
  return numToChar(median);
}

module.exports = median_to_letter;
