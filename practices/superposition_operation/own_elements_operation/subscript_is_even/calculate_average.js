'use strict';
var calculate_average = function(collection){
  let count = 0;
  let total = 0;
  collection.map((item)=>{
    if(item%2 === 0){
      total += item;
      count ++;
    }
  });
  return parseInt(total/count);
};
module.exports = calculate_average;
