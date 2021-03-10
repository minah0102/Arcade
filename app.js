let gameZone = $("#game-zone");
function createMoleGridCell() {
  for (i = 0; i < 9; i++) {
    gameZone.append(`<div class="cell"></div>`);
  }
}
const mole = $('<img src="mole_cartoon.png" class="mole">');
const fasterMole = $('<img src="faster_mole.png" class="fasterMole">');
const civilianMole = $('<img src="civilian_mole.png" class="civilian-mole">');

function renderRandomMoles() {
  gameZone.empty();
  createMoleGridCell();

  let appearRandomMoles = setInterval(() => {
    $(".cell")
      .eq(Math.floor(Math.random() * 9))
      .append(mole);

    mole.show();
  }, 2000);

  setTimeout(() => {
    clearInterval(appearRandomMoles);
    mole.remove();
  }, 21000);

  let appearRandomMolesFaster = setTimeout(() => {
    appearRandomMolesFaster = setInterval(() => {
      $(".cell")
        .eq(Math.floor(Math.random() * 9))
        .append(fasterMole);

      fasterMole.show();
    }, 1000);
  }, 22000);

  setTimeout(() => {
    clearInterval(appearRandomMolesFaster);
    fasterMole.remove();
  }, 32000);

  let appearCivilianMoles = setTimeout(() => {
    appearCivilianMoles = setInterval(() => {
      $(".cell")
        .eq(Math.floor(Math.random() * 9))
        .append(civilianMole);

      civilianMole.show();
    }, 700);
  }, 33000);

  setTimeout(() => {
    gameZone.html('<h3 class="game-over">Game Over</h3>');
    clearInterval(appearCivilianMoles);
  }, 50000);

  const math = Math.floor(Math.random() * 9);
  let scoreBoard = $(".score-points");
  let score = 0;

  mole.click(function () {
    score += 10;
    console.log(`${score}`);
    scoreBoard.text(`Score: ${score}`);
    mole.hide();
  });

  fasterMole.click(function () {
    score += 20;
    console.log(`${score}`);
    scoreBoard.text(`Score: ${score}`);
    fasterMole.hide();
  });

  civilianMole.click(function () {
    score += 50;
    console.log(`${score}`);
    scoreBoard.text(`Score: ${score}`);
    civilianMole.hide();
  });
}

const startButton = $(".start-button");
startButton.click(function () {
  renderRandomMoles();
  $(".score-points").text(`Score: 0`);
});
