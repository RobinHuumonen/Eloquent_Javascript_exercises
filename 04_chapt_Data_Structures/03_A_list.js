function arrayToList(arrayIn) {
  let list = null;
  for (let i = arrayIn.length - 1; i >= 0; i--) {
    list = {value: arrayIn[i], rest: list};
  }
  return list;
}
function listToArray(list) {
  let arrayOut = [];
  for (let node = list; node != null; node = node.rest) {
    arrayOut.push(node.value)
  }
  return arrayOut;
}
function prepend(element, list) {
  list = {value: element, rest: list};
  return list;
}
function nth(list, listIndex) {
  let output = listToArray(list);
  return output[listIndex];
}
// console.log(arrayToList([10, 20]));
// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(prepend(10, prepend(20, null)));
console.log(prepend(10, 3);
// console.log(nth(arrayToList([10, 20, 30]), 1));
/* Example ans.
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
*/
