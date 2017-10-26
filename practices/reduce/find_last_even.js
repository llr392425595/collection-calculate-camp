'use strict';

function find_last_even(collection) {
  let arr = [];
  collection.forEach((item,index)=>{
    if(item%2 === 0){
      arr.push(item);
    }
  });

  return arr[arr.length-1];
}

module.exports = find_last_even;
