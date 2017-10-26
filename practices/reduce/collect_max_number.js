'use strict';

function collect_max_number(collection) {
  return collection.reduce(function(preValue, curValue,index,array) {
    return preValue > curValue ? preValue : curValue;
  })
}

module.exports = collect_max_number;
