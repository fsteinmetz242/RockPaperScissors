// Testsatz: There are other Happy fish in the sea Child
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

// Als erstes aus der Eingabe ein Array machen
// Dann für jedes Wort prüfen ob eine Regel zutrifft. Falls ja anwenden.
// Zuletzt dann wieder String erstellen und ausgeben

const newArray = [];
regexKonsonantVokal = /^[^AEIOUÄÖÜaeiouäöü][AEIOUÄÖÜaeiouäöü]/; // Erster Buchstabe Konsonant gefolgt von Vokal
regexKonsonantKonsonant = /^[^AEIOUÄÖÜaeiouäöü][^AEIOUÄÖÜaeiouäöü]/; // Erster und zweiter Buchstabe Konsonant
regexVokalAnfang = /[^AEIOUÄÖÜaeiouäöü]/; // Erster Buchstabe Vokal

[...argv].forEach((Wort) => {
  //  console.log(Wort.test(/^[^aeiouäöü][aeiouäöü]/));
  let result = "";
  // Konsonant gefolgt von Vokal am Anfang
  if (regexKonsonantVokal.test(Wort)) {
    console.log(`Vokal nach Konsonant trifft zu: ${Wort}`);

    const newWord = Wort.split(""); // Wandle String in ein Array aus char
    let newKonsonant = newWord.shift(); // Erstes Zeichen in newKonsonant
    newWord.push(newKonsonant); // Erstes Zeichen am Schluss einfügen
    newWord.push("a");
    newWord.push("y");
    console.log(newKonsonant);
    console.log(newWord);
    Wort = "";
  }
  // Zwei Konsonanten am Anfang
  console.log("Doppelkonsonant: " + Wort);
  if (regexKonsonantKonsonant.test(Wort)) {
    console.log(`Zwei Konsonanten trifft zu: ${Wort}`);
    const newWord = Wort.split(""); // Wandle String in ein Array aus char
    let newKonsonant = newWord.shift(); // Erstes Zeichen in newKonsonant
    newWord.push(newKonsonant);
    newKonsonant = newWord.shift(); // Neues erstes Zeichen in newKonsonant
    newWord.push(newKonsonant); // und wieder ans Ende.
    newWord.push("a");
    newWord.push("y");
    console.log(newKonsonant);
    console.log(newWord);
    Wort = "";
  }
  console.log("Vokal: " + Wort);
  if (regexVokalAnfang.test(Wort)) {
    console.log(`Vokal am Anfang trifft zu: ${Wort}`);
    const newWord = Wort + "way";
    console.log(newWord);
  }
});
