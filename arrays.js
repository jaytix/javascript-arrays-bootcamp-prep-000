var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var arr = []
  arr.push(element);
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var arr = [];
  for (var i = 0; i < array.length; i++){
    arr.push(array[i]);
  }
  arr.push(element);
  return arr;
}