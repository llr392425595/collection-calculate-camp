'use strict';

function spilt_to_zero(number, interval) {
  let arr = [];
  for(let num = number;parseFloat((num+interval).toFixed(1)) > 0;num -=interval){
    arr.push(parseFloat(num.toFixed(1)));
  }
  return arr
}

module.exports = spilt_to_zero;
