'use strict';
let even_asc_odd_desc = function(collection){
  let arr_odd = [],
      arr_even = [];
  collection.forEach((item,index)=>{
    if(item%2 === 0){
      arr_even.push(item)
    }else {
      arr_odd.push(item)
    }
  });

  arr_even.sort((a,b)=>{return a-b});
  arr_odd.sort((a,b)=>{return b-a});
  return arr_even.concat(arr_odd)

};
module.exports = even_asc_odd_desc;
