'use strict';

function collect_min_number(collection) {
  return collection.reduce(function(preValue, curValue,index,array) {
    return preValue > curValue ? curValue : preValue;
  })
}

module.exports = collect_min_number;
