// Player should give his draw from command line

function getResult(humanChoose, computerChoose) {
  let result = "";

  if (humanChoose === "rock") {
    // stein o papier - schere +
    computerChoose === "rock"
      ? (result = "no winner")
      : computerChoose === "paper"
      ? (result = "computer wins")
      : (result = "you win");
  }
  if (humanChoose === "paper") {
    // stein + papier o schere -
    computerChoose === "rock"
      ? (result = "you win")
      : computerChoose === "paper"
      ? (result = "no winner")
      : (result = "computer wins");
  }

  if (humanChoose === "scissors") {
    // stein - papier + schere o
    computerChoose === "rock"
      ? (result = "computer wins")
      : computerChoose === "paper"
      ? (result = "you win")
      : (result = "no winner");
  }
  return result;
}

const availableChooses = ["rock", "paper", "scissor"];
let computerChoose = "";
let humanChoose = "";

const argv = process.argv.slice(2); // Entferne zwei Elemente
if (process.argv.length < 3) {
  console.log("Keine Auswahl getroffen! Bitte erneut versuchen.");
  process.exit(1);
}

humanChoose = argv[0].toLowerCase();
if (!availableChooses.includes(humanChoose)) {
  console.log(
    "Falsche Eingabe. Erlaubt sind nur " + availableChooses.join(" | ")
  );
  process.exit(1);
}

computerChoose =
  availableChooses[Math.floor(Math.random() * availableChooses.length)];
console.log(
  `You choose: ${argv[0]} and my choose: ${computerChoose}. Result ${getResult(
    humanChoose,
    computerChoose
  )} `
);
