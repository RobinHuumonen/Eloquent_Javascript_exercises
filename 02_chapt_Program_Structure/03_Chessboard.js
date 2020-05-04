let size = 8;
let blackWhite = "# ";
let whiteBlack = " #";
let output = "";
for (let lines = 1; lines <= size; lines++) {
  while (blackWhite.length <= size / 2) {
    blackWhite += blackWhite;
    whiteBlack += whiteBlack;
  }
  if (lines % 2 !== 0) {
    console.log(whiteBlack);
  }
  if (lines % 2 === 0) {
    console.log(blackWhite);
  }
}
/* Example ans.
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/
