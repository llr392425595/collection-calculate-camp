'use strict';

function double_to_one(collection) {
  let arr1 = (collection + '').split(',');//将数组转字符串后再以逗号分隔转为数组
  return arr1.map(function(x){
    return Number(x);
  });
}

module.exports = double_to_one;
