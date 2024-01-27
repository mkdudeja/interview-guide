// Your are given a 2-D array of characters. There is a hidden message in it.

// I B C A L K A
// D R F C A E A
// G H O E L A D
// The way to collect the message is as follows

// start at top left
// move diagonally down right
// when cannot move any more, try to switch to diagonally up right
// when cannot move any more, try switch to diagonally down right, repeat 3
// stop when cannot neither move down right or up right. the character on the path is the message
// for the input above, IROCLED should be returned.

// notes
// if no characters could be collected, return empty string

// approach
// 1- noOfCols- horizontal move
// 2- noOfRow - vertical move
// 3- combination 1&2 -

function decode(message) {
  if (!message.length) {
    return "";
  }

  const noOfRows = message.length;
  const noOfCols = Math.max(
    ...message.map(function (item) {
      return item.length;
    })
  );

  let col = 0; // col counter
  let row = 0; // row counter
  let doIncrement = true; // row direction

  const output = [];
  while (col < noOfCols) {
    const value = message[row] && message[row][col] ? message[row][col] : null;

    if (value) {
      output.push(value);
      col++;
      row = doIncrement ? row + 1 : row - 1;

      if (row === noOfRows - 1) {
        doIncrement = false;
      } else if (row === 0) {
        doIncrement = true;
      }
    } else {
      break;
    }
  }

  if (output.length) {
    return output.join("");
  }

  return "";
}

const input = [
  ["I", "B", "C", "A", "L", "K", "A"], // 7
  ["D", "R", "F", "C", "A", "E", "A"], // 7
  ["G", "H", "O", "E", "U", "A", "D"], // 7
];

console.log(decode(input)); // IROCLED
