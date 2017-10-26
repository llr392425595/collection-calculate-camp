'use strict';

function amount_even(collection) {
  let result = 0;
  collection.map((item)=>{
    if(item%2 === 0){
      result += item
    }
  });

  return result
}

module.exports = amount_even;
