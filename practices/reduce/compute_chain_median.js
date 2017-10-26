'use strict';

function compute_chain_median(collection) {
  let arr_Char = collection.split('->');
  let arr_Num = arr_Char.map((item)=>{
    return parseInt(item);
  }).sort((a,b)=>{return a-b});

  if((arr_Num.length + 1)%2 === 0){
    return arr_Num[(arr_Num.length-1)/2]
  }else {
    return (arr_Num[(arr_Num.length)/2-1]+arr_Num[(arr_Num.length)/2])/2
  }

}

module.exports = compute_chain_median;
