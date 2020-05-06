function range(start, end) {
  let output = [];
  for (let i = 0; i <= end - start; i++) {
    output[i] = start + i;
  }
  return output;
}
function sum(arrayToSum) {
  let sum = 0;
  for (let value of arrayToSum) {
    sum += value;
  }
  return sum;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));
/* Example ans.
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
*/
