'use strict';

function get_union(collection_a, collection_b) {
  let collection_c = collection_a.concat(collection_b);
  return [...new Set(collection_c)];
}


module.exports = get_union;

