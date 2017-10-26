function countSameElements(collection) {
  let arr = [],
    result = [];
  collection.forEach((item)=>{
    if(item.length === 1){
      if(!arr[item]){
        arr[item] = {};
        arr[item].key = item;
        arr[item].count = 1;
      }else {
        arr[item].count++
      }
    }else {
      let obj = {};
      obj.firstChar = item.substr(0,1);
      obj.lastChar = item.substr(item.length-1,1);
      obj.amount = parseInt(obj.lastChar);
      if(!arr[obj.firstChar]){
        arr[obj.firstChar] = {};
        arr[obj.firstChar].key = obj.firstChar;
        arr[obj.firstChar].count = obj.amount;
      }else {
        arr[obj.firstChar].count += obj.amount;
      }
    }
  });
  for(let key in arr){
    result.push(arr[key])
  }
  return result;
}

function changeNum(num) {
  return num - parseInt(num/3)
}

function updatedCollection(collectionA, objectB) {
  return collectionA.map(
    (item,index)=>{
      if(objectB.value.indexOf(item.key) > -1){
        item['count'] = changeNum(item.count);
        return item
      }else {
        return item
      }
    }
  );
}
function create_updated_collection(collection_a, object_b) {
  let collectionC = countSameElements(collection_a);
  return updatedCollection(collectionC,object_b);
}

module.exports = create_updated_collection;
