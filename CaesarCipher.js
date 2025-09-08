// In progress
const argv = process.argv.slice(2); // Entferne zwei Elemente
// Arg1 = The path to the Node.js executable (your installation of Node)
// Arg2 = The path to the JavaScript file being executed (your file)
// Jeder Eintrag ist ein String!
if (process.argv.length < 3) {
  console.log("Keine Auswahl getroffen! Bitte erneut versuchen.");
  process.exit(1);
}
