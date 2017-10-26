'use strict';

function hybrid_operation_to_uneven(collection) {
  let result = [];
  collection.forEach((item,index)=>{
    if(item%2===1){
      result.push(item*3+2)
    }
  })

  return result
}

module.exports = hybrid_operation_to_uneven;
