'use strict';

function compare_collections(collection_a, collection_b) {
  let a = collection_a.sort().toString();
  let b = collection_b.sort().toString();

  return a===b;
}

module.exports = compare_collections;
