'use strict';

function find_element_last_subscript(collection, element) {
  let arr = [];
  collection.forEach((item,index)=>{
    if(item === element){
      arr.push(index);
    }
  });

  return arr[arr.length-1];
}

module.exports = find_element_last_subscript;
