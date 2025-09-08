// Future Extension
const argv = process.argv.slice(2); // Entferne zwei Elemente
// Arg1 = The path to the Node.js executable (your installation of Node)
// Arg2 = The path to the JavaScript file being executed (your file)
// Jeder Eintrag ist ein String!
if (process.argv.length < 3) {
  console.log("Keine Eingabe gemacht! Bitte erneut versuchen.");
  process.exit(1);
}

// Regeln:
// Wenn ein Wort mit einem Konsonanten und einem Vokal beginnt, setze den ersten Buchstaben des Wortes an das Ende des Wortes und füge „ay“ hinzu.
//      Happy = appyh + ay = appyhay
// Wenn ein Wort mit zwei Konsonanten beginnt, verschieben Sie die beiden Konsonanten an das Ende des Wortes und fügen Sie „ay“ hinzu.
//      Example: Child = Ildch + ay = Ildchay
// Wenn ein Wort mit einem Vokal beginnt, füge das Wort „way“ am Ende des Wortes hinzu.
//      Awesome = Awesome +way = Awesomeway
// Testen??
