'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let collection_c = collection_a.concat(collection_b);
  let count_collection_c = {};
  for(let item of collection_c){
    if(!count_collection_c[item]){
      count_collection_c[item] = 1;
    }else {
      count_collection_c[item] ++;
    }
  }

  let result = [];
  for(let key in count_collection_c){
    if(count_collection_c[key] === 1){
      result.push(key)
    }
  }
  return result
}

module.exports = choose_no_common_elements;
