'use strict';
let single_element = function(collection){
  let arr = collection.filter((value,index)=>{
    if(index%2 === 1){
      return value
    }
  });

  let obj = {};
  arr.forEach((item,key)=>{
    if(!obj[item]){
      obj[item] = {};
      obj[item].num = item;
      obj[item].count = 1;
    }else {
      obj[item].count ++;
    }
  });

  let result = [];
  for(let key in obj){
    if(obj[key].count === 1){
      result.push(obj[key].num)
    }
  }
  return result
};
module.exports = single_element;
