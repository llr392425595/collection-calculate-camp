function analyse(item) {
  let obj = {};
  if(item.indexOf('-') > -1 || item.indexOf(':') > -1) {
    obj.firstChar = item.substr(0,1);
    obj.sumChar = item.substr(item.length-1,1);
    obj.amount = parseInt(obj.sumChar);
  }else if(item.indexOf('[') > -1){
    obj.firstChar = item.substr(0,1);
    obj.sumChar = item.slice(2,-1);
    obj.amount = parseInt(obj.sumChar);
  }
  return obj;
}

function count_same_elements(collection) {
  let arr = [],
    result = [];
  collection.forEach((item)=>{
    if(item.length === 1){
      if(!arr[item]){
        arr[item] = {};
        arr[item].name = item;
        arr[item].summary = 1;
      }else {
        arr[item].summary++
      }
    }else {
      let obj = analyse(item);
      if(!arr[obj.firstChar]){
        arr[obj.firstChar] = {};
        arr[obj.firstChar].name = obj.firstChar;
        arr[obj.firstChar].summary = obj.amount;
      }else {
        arr[obj.firstChar].summary += obj.amount;
      }
    }
  });
  for(let key in arr){
    result.push(arr[key])
  }
  return result;
}

module.exports = count_same_elements;
