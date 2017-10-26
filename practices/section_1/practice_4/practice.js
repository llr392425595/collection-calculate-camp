function getSameElemFromTwoArr(collectionA, collectionB) {
  let len = collectionA.length;
  let result = [];
  for(let i = 0;i < len; i++){
    if(collectionB.indexOf(collectionA[i]) > -1){
      result.push(collectionA[i])
    }
  }
  return result;
}

function collect_same_elements(collection_a, object_b) {
  let arr1 = [],
    arr2 = [];
  collection_a.forEach((item,index)=>{
    if(item.key){
      arr1.push(item.key)
    }
  });
  for (let key in object_b){
    if(object_b.hasOwnProperty(key) && key === 'value'){
      arr2 = getSameElemFromTwoArr(arr1,object_b[key]);
      break;
    }
  }
  return arr2;
}

module.exports = collect_same_elements;
