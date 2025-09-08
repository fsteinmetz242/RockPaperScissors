// Player should give his draw from command line
const myChooses = ['rock', 'paper','scissor'];
let myChoose = '';
const argv = process.argv.slice(2);
console.log(argv);
myChoose = myChooses[Math.floor(Math.random()*myChooses.length)];
console.log(myChoose);