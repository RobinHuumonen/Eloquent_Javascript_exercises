function ownFunction(value, test, update, body) {
  let current = value;
  if (test(current))
    body(current);
  else
  ownFunction(update(value), test, update, body);
}
let update = (value) => value += 1, value;
let test = (current) => current > 5;
let body = (current) => console.log(current);
let initialValue = 0;
ownFunction(initialValue, test, update, body);
/* Example ans.
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
*/
