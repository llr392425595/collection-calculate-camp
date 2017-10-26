function countSameElements(collection) {
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
