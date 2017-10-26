'use strict';
let is_exist_element = function(collection,element){
  let arr = collection.filter((value,index)=>{
    if(index%2 === 0){
      return value
    }
  });

  return arr.includes(element);
};
module.exports = is_exist_element;
