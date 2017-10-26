'use strict';

function hybrid_operation_to_uneven(collection) {
  let arr = [];
  collection.forEach((item,index)=>{
    if(item%2===1){
      arr.push(item*3+5)
    }
  });

  return arr.reduce((pre,cur)=>{
    return pre + cur
  })

}

module.exports = hybrid_operation_to_uneven;
