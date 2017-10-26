'use strict';
function sliceArray(array) {
  let result = [];
  for (let x = 0; x < Math.ceil(array.length / 3); x++) {
    let start = x * 3;
    let end = start + 3;
    result.push(array.slice(start, end));
  }
  return result;
}

function order(arr) {
  if(arr[2]){
    let result = [];
    result[0] = arr[1];
    result[1] = arr[2];
    result[2] = arr[0];
    return result
  }else {
    return arr
  }

}

function rank_by_two_large_one_small(collection){
  let sortedArr = collection.sort((a,b)=>{return a-b});
  let groupedArr = sliceArray(sortedArr);
  let result = [];
  for(let item of groupedArr){
    result = result.concat(order(item))
  }
  return result
}
module.exports = rank_by_two_large_one_small;



