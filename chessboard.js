/*
Ch 02 - Looping A Triangle:  Solve the exercise as before, but instead of logging each line to the console
create a paragraph element and add it to the document inside in the body element.
*/
/*
Ch 02 - Chessboard: Create a chessboard like before, but add elements to the page instead of logging a string.
Instead of ` ` and # characters, create <div> elements that are styled to be squares and alternate between red and black backgrounds.
You'll have to figure out which styles can be done simply with CSS and which need to be updated with JavaScript.
The chessboard should be created using a function at the end of the script so we can pass an argument to control the size, like chessboard(8).
*/
// Triangle
​
// 0. go get the div
const divEl = document.querySelector('#triangle');
​
// 1. write a loop, 7 times
// 2. increase string of '#'s
for (let string = '#'; string.length < 8; string += '#') {
  // 3. make a text node out string
  let textEl = document.createTextNode(string);
  // 4. make an element node for paragraph
  let paraEl = document.createElement('p');
  // 5. attach text node to paragraph
  paraEl.appendChild(textEl);
  // 6. attach paragraph to div
  divEl.appendChild(paraEl);
}
​
​
// Chessboard
​
const chessboard = (size) => {
  // 0. go get the div
  const boardEl = document.querySelector('#chessboard');
​
  // 1. outer loop for each row
  for (let row = 0; row < size; row++) {
    //    1. create a row element
    let rowEl = document.createElement('div');
    rowEl.classList.add('row');
    //    2. inner loop for each square
    for (let square = 0; square < size; square++) {
      //      1. create a square
      let squareEl = document.createElement('div');
      //      2. figure out if it's red or black
      if (row % 2 === 0) {
        if (square % 2 === 0) {
          squareEl.classList.add('red');
        } else {
          squareEl.classList.add('black');
        }
      } else {
        if (square % 2 === 0) {
          squareEl.classList.add('black');
        } else {
          squareEl.classList.add('red');
        }
      }
      //      3. attach the square to the row
      rowEl.appendChild(squareEl);
    }
​
    //    3. attach the row element
    boardEl.appendChild(rowEl);
  }
};
​
chessboard(8);
