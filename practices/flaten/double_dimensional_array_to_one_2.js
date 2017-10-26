'use strict';

function flatten(collection) {
  return collection.reduce((acc,val) => acc.concat(Array.isArray(val)? flatten(val):val),[])
}

function double_to_one(collection) {
  let gather_collection = flatten(collection);
  let set = new Set(gather_collection);
  return [...set];
}

module.exports = double_to_one;
