function countBs(str) {
  return countChar(str, "B")
}
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char)
      count++;
  }
  return count;
}
console.log(countBs("BBBaaa"));
console.log(countChar("kakkerlak", "k"));
/* Example ans.
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
*/
