'use strict';
let calculate_average = function(collection){
  let count = 0;
  let total = 0;
  collection.map((item)=>{
    if(item%2 === 0){
      total += item;
      count ++;
    }
  });
  return parseInt(total/count);
};

let even_group_calculate_average = function(collection){
  let arr = collection.filter((item,key)=>{
    if(key%2 === 1){
      if(item%2 === 0){
        return item
      }
    }
  });
  let obj = {};
  arr.forEach((item)=>{
    let len = item.toString().length;
    if(!obj[len]){
      obj[len] = [];
      obj[len].push(item)
    }else {
      obj[len].push(item)
    }
  });

  let result = [];
  for(let key in obj){
    result.push(calculate_average(obj[key]))
  }
  if(result.length===0){
    result.push(0)
  }
  return result
};
module.exports = even_group_calculate_average;
