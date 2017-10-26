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

function createArr(o1,o2){
  let arr = [];
  if(o1 < o2){
    for(let i = o1;i <= o2;i++){
      arr.push(numToChar(i))
    }
  }else if(o1 > o2){
    for(let i = o1;i >= o2;i--){
      arr.push(numToChar(i))
    }
  }
  return arr;
}

function get_letter_interval_2(number_a, number_b) {
  if(number_a === number_b){
    return [numToChar(number_a)]
  }else{
    return createArr(number_a,number_b)
  }
}

module.exports = get_letter_interval_2;

