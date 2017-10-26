'use strict';

function average_uneven(collection) {
  let count = 0;
  let total = 0;
  collection.map((item)=>{
    if(item%2 === 1){
      total += item;
      count ++;
    }
  });

  return parseInt(total/count);
}

module.exports = average_uneven;
