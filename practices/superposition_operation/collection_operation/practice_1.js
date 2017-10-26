'use strict';

function hybrid_operation(collection) {
  collection.unshift(0);
  let result = collection.reduce((pre,cur)=>{
    return pre + cur * 3 + 2
  });
  return result
}

module.exports = hybrid_operation;

