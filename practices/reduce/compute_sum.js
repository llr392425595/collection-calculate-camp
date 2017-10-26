'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((pre,cur,index,arr)=>{
    return pre + cur
  })
}

module.exports = calculate_elements_sum;

