function every(array, test) {
  for (let element of array) {
    if (!test(element))
      return false;
  }
  return true;
}
function everyViaMethod(array, test) {
  return !array.some((element) => !test(element));
}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
console.log(everyViaMethod([1, 3, 5], n => n < 10));
// → true
console.log(everyViaMethod([2, 4, 16], n => n < 10));
// → false
console.log(everyViaMethod([], n => n < 10));
// → true
/* Example ans.
function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
*/
