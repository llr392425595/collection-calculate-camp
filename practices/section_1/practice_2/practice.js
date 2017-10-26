function collect_same_elements(collection_a, collection_b) {
  let collection_c = collection_b.reduce((pre,cur)=>{return pre.concat(cur)},[]);

  return collection_a.filter((item)=>{
    if(collection_c.includes(item)){
      return item
    }
  })
}

module.exports = collect_same_elements;
