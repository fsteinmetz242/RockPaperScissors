// Player should give his draw from command line

function getResult(sHuman, cpuChoose) {
  let result = "";

  if (sHuman === "rock") {
    console.log("rock");
    // stein o papier - schere +
    cpuChoose === "rock"
      ? (result = "no winner")
      : cpuChoose === "paper"
      ? (result = "you win")
      : (result = "computer wins");
  }
  if (sHuman === "paper") {
    console.log("paper");
    // stein + papier o schere -
    cpuChoose === "rock"
      ? (result = "computer wins")
      : cpuChoose === "paper"
      ? (result = "no winner")
      : (result = "you win");
  }

  if (sHuman === "scissors") {
    console.log("sci");
    // stein - papier + schere o
    cpuChoose === "rock"
      ? (result = "computer wins")
      : cpuChoose === "paper"
      ? (result = "you win")
      : (result = "no winner");
  }
  return result;
}

const myChooses = ["rock", "paper", "scissor"];
// Eingabe prüfen Eingabe => lowercase!!
let myChoose = "";
let sHuman = "";

const argv = process.argv.slice(2); // Entferne zwei Elemente
// Arg1 = The path to the Node.js executable (your installation of Node)
// Arg2 = The path to the JavaScript file being executed (your file)
console.log(
  `Anzahl Argumente ${process.argv.length} | Liste der Argumente ${argv}`
);

if (process.argv.length < 3) {
  console.log("Keine Auswahl getroffen! Bitte erneut versuchen.");
  return;
}

sHuman = argv[0].toLowerCase();

if (!myChooses.includes(sHuman)) {
  console.log("Falsche Eingabe. Erlaubt sind nur " + myChooses.join(" | "));
  return;
}

myChoose = myChooses[Math.floor(Math.random() * myChooses.length)];
console.log(
  `You choose: ${argv[0]} and my choose: ${myChoose}. Result ${getResult(
    sHuman,
    myChoose
  )} `
);
