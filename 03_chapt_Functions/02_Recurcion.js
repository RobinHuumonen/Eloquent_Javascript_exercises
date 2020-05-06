function isEven(N) {
  if (N < 0)
    N *= -1;
  if (N == 0)
    return true;
  if (N == 1)
    return false;
  else {
    return isEven(N - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));

/* Example ans.
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

*/
