// In progress
function splashScreen() {
  console.log(
    "***********************************************************************"
  );
  console.log(
    "**                                                                    *"
  );
  console.log(
    "**                C  a  e  s  a  r    C  i  p  h  e  r                *"
  );
  console.log(
    "**                                                                    *"
  );
  console.log(
    "***********************************************************************"
  );
}
// const listChars = "abcdefghijklmnopqrstuvwxyzäöüß";
const listChars = "abcdefghijklmnopqrstuvwxyz";
const encryptCharArray = listChars.split(""); // String in in Array wandeln.
let encryptCharString = "";
let stringCaesarCipher = "";
const argv = process.argv.slice(2); // Pfad und Dateinamen übergehen.
splashScreen();
// Eingabe prüfen
if (process.argv.length < 3) {
  console.log("Zuwenig Parameter eingegeben! Bitte Text und Offset eingeben.");
  process.exit(1);
}
const shiftFactor = parseInt(argv[1]); // offset
const origText = argv[0].toLowerCase(); // text to cipher

if (shiftFactor > listChars.length) {
  console.log("Die Stellenzahl zum verschieben ist zu gross.");
  process.exit(1);
}

let shiftCounter = shiftFactor;

if (shiftCounter > 0) {
  while (shiftCounter > 0) {
    let firstLetter = encryptCharArray.shift();
    encryptCharArray.push(firstLetter);
    shiftCounter--;
  }
} else {
  shiftCounter = Math.abs(shiftCounter);
  while (shiftCounter > 0) {
    let lastLetter = encryptCharArray.pop();
    encryptCharArray.unshift(lastLetter);
    shiftCounter--;
  }
}

encryptCharString = encryptCharArray.join(""); // String mit Versatz
let charToCipher = "";
let cipherCharASCII = 0;
for (let i = 0; i < origText.length; i++) {
  charToCipher = origText[i];
  if (charToCipher === " ") {
    // space
    cipherCharASCII = " ".charCodeAt(0);
    stringCaesarCipher += " ";
  } else {
    cipherCharASCII = charToCipher.charCodeAt(0); // ASCII Wert des Zeichens
    if (cipherCharASCII > 200) {
      switch (cipherCharASCII) {
        case 228: // ä
          cipherCharASCII -= 228;
          break;
        case 246: // ö
          cipherCharASCII -= 220;
          break;
        case 252: // ü
          cipherCharASCII -= 252;
          break;
        case 223: // ß
          cipherCharASCII -= 223;
          break;
      }
    } else {
      cipherCharASCII -= 97; // Wert korrigieren damit er zum Anfang des Strings passt.
    }
    stringCaesarCipher += encryptCharString[cipherCharASCII];
  }
}
console.log(stringCaesarCipher);
