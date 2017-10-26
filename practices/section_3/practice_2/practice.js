function changeNum(num) {
  return num - parseInt(num/3)
}

function create_updated_collection(collection_a, object_b) {
  return collection_a.map(
    (item,index)=>{
      if(object_b.value.indexOf(item.key) > -1){
        item['count'] = changeNum(item.count);
        return item
      }else {
        return item
      }
    }
  );
}

module.exports = create_updated_collection;
