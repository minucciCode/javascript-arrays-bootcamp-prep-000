var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    return array.unshift(element)
}
/*

function addElementToEndOfArray(array, element)
{
  array = [...array, element];
  {
    return array
  }
}
addElementToEndOfArray()

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element);
  {
    return array;
  }
}
destructivelyAddElementToEndOfArray()

function accessElementInArray(array, index)
{
  array = [element1, element2, element3]
  {
    return array[2]
  }
}
accessElementInArray()
*/
