'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter((item)=>{
    for(let factor of collection_b){
      if(item%factor === 0){
        return item
      }
    }
  })
}

module.exports = choose_divisible_integer;
