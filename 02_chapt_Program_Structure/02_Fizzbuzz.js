for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 == 0)
    output += "Fizz";
  if (i % 5 == 0)
    output += "Buzz";
  console.log(output || i);
}
/* Example ans.
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
*/
/* Example ans.

*/
