board = ["", "", "", "", "", "", "", "", ""];
var xTurn = true;
game = true;

function test(id) {
  var index = id - 1;
  var box = document.getElementById(id);
  if (!game) {
    return;
  }

  if (board[index] == "") {
    if (xTurn) {
      board[index] = "X";
      box.classList.add("X");
      box.innerHTML = "X";
    } else {
      board[index] = "O";
      box.classList.add("O");
      box.innerHTML = "O";
    }
    xTurn = !xTurn;
  }
}

function checkWinner(letter) {
  var has = [];
  for (var i = 0; i < 9; i++) {
    if (board[i] == letter) {
      has.push(i);
    }
  }
}

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
