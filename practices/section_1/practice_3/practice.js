function collect_same_elements(collection_a, object_b) {
  let collection_c = [];
  for(let key in object_b){
    if (key === 'value'){
      collection_c = object_b[key]
    }
  }

  return collection_a.filter((item)=>{
    if(collection_c.includes(item)){
      return item
    }
  })
}

module.exports = collect_same_elements;
