board = ["", "", "", "", "", "", "", "", ""];
var xTurn = true;
game = true;

function play(id) {
  var index = id - 1;
  var box = document.getElementById(id);
  var turnText = document.getElementById("Playtext");
  if (!game) {
    return;
  }

  if (board[index] == "") {
    if (xTurn) {
      turnText.innerHTML = "O";
      board[index] = "X";
      box.classList.add("X");
      box.innerHTML = "X";
    } else {
      turnText.innerHTML = "X";
      board[index] = "O";
      box.classList.add("O");
      box.innerHTML = "O";
    }

    xTurn = !xTurn;
  }
  checkWinner();
}

function checkWinner() {
  if (win.some(same)) {
    game = false;
    var winText = document.getElementById("Wintext");
    if (xTurn) {
      winText.innerHTML = "O";
    } else {
      winText.innerHTML = "X";
    }
  }
}

function reset() {
  var winText = document.getElementById("Wintext");
  winText.innerHTML = " ";
  board = ["", "", "", "", "", "", "", "", ""];
  xTurn = true;
  game = true;

  for (var i = 0; i < 9; i++) {
    var index = i + 1;
    var box = document.getElementById(index);
    box.innerHTML = " ";
    box.classList.remove("X");
    box.classList.remove("O");
  }

  var playText = document.getElementById("Playtext");
  playText.innerHTML = "X";
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

function same(combo) {
  var first = combo[0];
  var second = combo[1];
  var third = combo[2];

  console.log(first);
  console.log(second);
  console.log(third);

  console.log("--------------------------------------------");

  if (board[first] == "" || board[second] == "" || board[third] == "") {
    return false;
  } else {
    console.log(board[first]);
    console.log(board[second]);
    console.log(board[third]);

    console.log(board[first] == board[second] && board[first] == board[third]);

    console.log("--------------------------------------------");
    return board[first] == board[second] && board[first] == board[third];
  }
}
