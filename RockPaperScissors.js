// Player should give his draw from command line

function getResult(sHuman, cpuChoose){
let result = '';
let wahlSpieler='';

console.log('Mensch: ' + sHuman);

    if(sHuman.toLowerCase() === 'rock'){
        console.log('rock');
        // stein o papier - schere +
        cpuChoose === 'rock' ? result='no winner' :         cpuChoose === 'paper' ? result='you win' :                 result = 'computer wins';
    }
    if(sHuman.toLowerCase() === 'paper'){
                console.log('paper');
        // stein + papier o schere -
        cpuChoose === 'rock' ? result='computer wins' :
        cpuChoose === 'paper' ? result='no winner' :
                result = 'you win';
    }

    if(sHuman.toLowerCase() === 'scissors'){
                console.log('sci');
        // stein - papier + schere o
        cpuChoose === 'rock' ? result='computer wins' :
        cpuChoose === 'paper' ? result='you win' :
                result = 'no winner';
    }

    return result;
}

const myChooses = ['rock', 'paper','scissor'];
// Eingabe prüfen Eingabe => lowercase!!
let myChoose = '';
let sHuman = '';
const argv = process.argv.slice(2);
console.log(argv);
sHuman = argv[0];

myChoose = myChooses[Math.floor(Math.random()*myChooses.length)];
console.log(`You choose: ${argv[0]} and my choose: ${myChoose}. Result ${getResult(sHuman,myChoose)} `);