'use strict';

function compute_average(collection) {
  let count = 1;
  let summary = collection.reduce((pre,cur,index,arr)=>{
    count ++;
    return pre + cur;
  });
 return summary/count;
}

module.exports = compute_average;
