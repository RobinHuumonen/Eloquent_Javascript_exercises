function reverseArray(arrayIn) {
  let arrayOut = [];
  for (let value of arrayIn)
    arrayOut.unshift(value);
  return arrayOut;
}
function reverseArrayInPlace(arrayIn) {
  let tempArray = [];
  for (let i = 0; i < Math.floor(arrayIn.length / 2); i++) {
    tempArray[arrayIn.length - 1 - i] = arrayIn[i];
    tempArray[i] = arrayIn[arrayIn.length - 1 - i];
    arrayIn[i] = tempArray[i];
    arrayIn[arrayIn.length - 1 - i] = tempArray[arrayIn.length - 1 - i];
  }
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
/* Example ans.
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
*/
