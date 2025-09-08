// Player should give his draw from command line

function getResult(humanChoose, computerChoose) {
  let result = "";

  if (humanChoose === "rock") {
    // stein o papier - schere +
    computerChoose === "rock"
      ? (result = "no winner")
      : computerChoose === "paper"
      ? (result = "you win")
      : (result = "computer wins");
  }
  if (humanChoose === "paper") {
    // stein + papier o schere -
    computerChoose === "rock"
      ? (result = "computer wins")
      : computerChoose === "paper"
      ? (result = "no winner")
      : (result = "you win");
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
// Eingabe prüfen Eingabe => lowercase!!
let computerChoose = "";
let humanChoose = "";

const argv = process.argv.slice(2); // Entferne zwei Elemente
// Arg1 = The path to the Node.js executable (your installation of Node)
// Arg2 = The path to the JavaScript file being executed (your file)
// Jeder Eintrag ist ein String!
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
