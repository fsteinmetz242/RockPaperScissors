// Testsatz: There are other Happy fish in the sea Child
// Regeln:
// Wenn ein Wort mit einem Konsonanten und einem Vokal beginnt, setze den ersten Buchstaben des Wortes an das Ende des Wortes und füge „ay“ hinzu.
//      Happy = appyh + ay = appyhay
// Wenn ein Wort mit zwei Konsonanten beginnt, verschieben Sie die beiden Konsonanten an das Ende des Wortes und fügen Sie „ay“ hinzu.
//      Example: Child = Ildch + ay = Ildchay
// Wenn ein Wort mit einem Vokal beginnt, füge das Wort „way“ am Ende des Wortes hinzu.
//      Awesome = Awesome +way = Awesomeway

// Als erstes aus der Eingabe ein Array machen
// Dann für jedes Wort prüfen ob eine Regel zutrifft. Falls ja anwenden.
// Zuletzt dann wieder String erstellen und ausgeben

regexKonsonantVokal = /^[^AEIOUÄÖÜaeiouäöü][AEIOUÄÖÜaeiouäöü]/; // Erster Buchstabe Konsonant gefolgt von Vokal
regexKonsonantKonsonant = /^[^AEIOUÄÖÜaeiouäöü][^AEIOUÄÖÜaeiouäöü]/; // Erster und zweiter Buchstabe Konsonant
regexVokalAnfang = /^[AEIOUÄÖÜaeiouäöü]/; // Erster Buchstabe Vokal

function checkWord(inputWord) {
  // Konsonant gefolgt von Vokal am Anfang
  let pigLatinWord = "";
  if (regexKonsonantVokal.test(inputWord)) {
    let arrChars = inputWord.split(""); // Wandle String in ein Array aus char
    let newKonsonant = arrChars.shift(); // Erstes Zeichen in newKonsonant
    arrChars.push(newKonsonant); // Erstes Zeichen am Schluss einfügen
    arrChars.push("a");
    arrChars.push("y");
    pigLatinWord = arrChars.join("");
  }
  // Zwei Konsonanten am Anfang
  if (regexKonsonantKonsonant.test(inputWord)) {
    let arrChars = inputWord.split(""); // Wandle String in ein Array aus char
    let newKonsonant = arrChars.shift(); // Erstes Zeichen in newKonsonant
    arrChars.push(newKonsonant);
    newKonsonant = arrChars.shift(); // Neues erstes Zeichen in newKonsonant
    arrChars.push(newKonsonant); // und wieder ans Ende.
    arrChars.push("a");
    arrChars.push("y");
    pigLatinWord = arrChars.join("");
  }
  if (regexVokalAnfang.test(inputWord)) {
    pigLatinWord = inputWord + "way";
  }
  pigLatinWords.push(pigLatinWord);
}

const argv = process.argv.slice(2); // Entferne zwei Elemente
// Arg1 = The path to the Node.js executable (your installation of Node)
// Arg2 = The path to the JavaScript file being executed (your file)
// Jeder Eintrag ist ein String!
if (process.argv.length < 3) {
  console.log("Keine Eingabe gemacht! Bitte erneut versuchen.");
  process.exit(1);
}

let pigLatinWords = [];
const wordArray = argv[0].split(" ");
// [...argv].forEach((Wort) => {
[...wordArray].forEach((singleWord) => {
  checkWord(singleWord);
});
console.log("Your text : " + argv[0]);
console.log("Is in piglatin: " + pigLatinWords.join(" "));
