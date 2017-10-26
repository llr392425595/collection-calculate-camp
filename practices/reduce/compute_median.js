'use strict';

function compute_median(collection) {
  let arr_Num = collection.sort((a,b)=>{return a-b});
  if((arr_Num.length + 1)%2 === 0){
    return arr_Num[(arr_Num.length-1)/2]
  }else {
    return (arr_Num[(arr_Num.length)/2-1]+arr_Num[(arr_Num.length)/2])/2
  }
}

module.exports = compute_median;
