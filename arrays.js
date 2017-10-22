var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var arr = []
  arr.push(element);
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

function destructivelyAddElementToBeginningOfArray(){

}
