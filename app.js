const mole = $("<div class='mole'></div>");
const gameZone = $("#game-zone");
const startButton = $(".start-button");
let score = 0;
let gameOver = false;

const moleGrid = [
  ["e", "e", "e"],
  ["e", "e", "e"],
  ["e", "e", "e"],
];

function createMoleGridCell() {
  for (i = 0; i < 9; i++) {
    gameZone.append(`<div class="cell"></div>`);
  }
}
createMoleGridCell();

function renderRandomMoles() {
  const math = Math.floor(Math.random() * 9);
  $(".cell").empty();

  setInterval(() => {
    
    $(".cell")
      .eq(Math.floor(Math.random() * 9))
      .append(mole);

    mole.on("click", function () {
      //debugger
      mole.remove();
      score++;
      $(".score-points").text(`Score: ${score}`);

      // function scoring() {
      //   if (
      //     mole.click(function () {
      //       mole.remove();
      //     })
      //   ) {
      //     score++.click(mole);
      //     $(".score-points").text(`Score: ${score}`);
      //   } else {
      //     $('.score-points').stop();
      //     //score no update
      //   }
      // }
      // scoring();
    });
    
  }, 2000);
  //setTimeout(() => gameOver = true, 10000);
}

function startGame() {
  startButton.click(() => renderRandomMoles());
}
startGame();

//call setInterval in global scope

//create mole cell - el in a row
//have div

//renderGrid() - clear out grid, loop over moleGrid - for each el of mole grid
//append that into the grid - call these in set interval

//randomize the mole appeared in moleGrid

//click mole - score points
