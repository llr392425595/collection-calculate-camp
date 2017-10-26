'use strict';

function arrayAddNumChar(arr,num) {
  arr.push(String.fromCharCode(num))
}

function get_letter_interval(number_a, number_b) {
  let result = [];
  number_a += 96;
  number_b  += 96;
  if(number_a < number_b){
    for(let i = number_a;i <= number_b;i++){
      arrayAddNumChar(result,i)
    }
  }else if(number_a > number_b){
    for(let i = number_a;i >= number_b;i--){
      arrayAddNumChar(result,i)
    }
  }else {
    arrayAddNumChar(result,number_a)
  }
  return result;
}

module.exports = get_letter_interval;
