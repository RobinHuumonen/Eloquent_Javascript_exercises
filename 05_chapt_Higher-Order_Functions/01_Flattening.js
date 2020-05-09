let arrays = [[1, 2, 3], [4, 5], [6]];
let current = [];
let flattened = arrays.reduce((flatten, current) => flatten.concat(current), current);
console.log(flattened);
/* Example ans.
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]
*/
