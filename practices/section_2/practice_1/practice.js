function count_same_elements(collection) {
  let arr = [],
    result = [];
  collection.forEach((item)=>{
    if(!arr[item]){
      arr[item] = {};
      arr[item].key = item;
      arr[item].count = 1;
    }else {
      arr[item].count++
    }
  });
  for(let key in arr){
    result.push(arr[key])
  }
  return result;
}

module.exports = count_same_elements;
