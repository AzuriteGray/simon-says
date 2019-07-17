let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let on = true;
let win;
let gameStarted = false;
let difficulty = Vhard ;


const display = document.querySelector("#display");
const keyC = document.querySelector("#noteC");
const keyD = document.querySelector("#noteD");
const keyE = document.querySelector("#noteE");
const keyF = document.querySelector("#noteF");
const keyG = document.querySelector("#noteG");
const keyA = document.querySelector("#noteA");
const keyB = document.querySelector("#noteB");
const startButton = document.querySelector("#start");
const easyButton = document.querySelector("#easy");
const normalButton = document.querySelector("#normal");
const hardButton = document.querySelector("#hard");
const VhardButton = document.querySelector("#veryHard");
const note4 = document.querySelector("#easy");
const note5 = document.querySelector("#normal");
const note6 = document.querySelector("#hard");
const note7 = document.querySelector("#veryHard");
const keys = {
    noteA: {color:"#4B0082", clip:"clip6"},
    noteB: {color:"#8B00FF", clip:"../audio/noteB.wav"},
    noteC: {color:"#FF0000", clip:"clip1"},
    noteD: {color:"#FF7F00", clip:"clip2"},
    noteE: {color:"#FFFF00", clip:"clip3"},
    noteF: {color:"#00FF00", clip:"clip4"},
    noteG: {color:"#0000FF", clip:"clip5"},
};



startButton.addEventListener('click', (event) => {
      play();
});


//dificulty selector

note4.addEventListener('click', (event) => {
    difficulty = easy;
    display.innerHTML ="<p>4 notes will be used</p>";
});

note5.addEventListener('click', (event) => {
    difficulty = normal;
    display.innerHTML ="<p>5 notes will be used</p>";
});

note6.addEventListener('click', (event) => {
    difficulty = hard;
    display.innerHTML ="<p>6 notes will be used</p>";
});

note7.addEventListener('click', (event) => {
    difficulty = Vhard;
    display.innerHTML ="<p>7 notes will be used</p>";
});

// randomizer

function easy(){
    for (var i = 0; i < 20; i++) {
       order.push(Math.floor(Math.random() * 4) + 1);
}
}

function normal () {
     for (var i = 0; i < 20; i++) {
       order.push(Math.floor(Math.random() * 5) + 1);
   }
}

function hard (){
    for (var i = 0; i < 20; i++) {
       order.push(Math.floor(Math.random() * 6) + 1);
   }
}

function Vhard () {
     for (var i = 0; i < 20; i++) {
       order.push(Math.floor(Math.random() * 7) + 1);
   }
}


function play(){
   gameStarted=true;
   win = false;
   order = [];
   playerOrder = [];
   flash = 0;
   intervalId = 0;
   turn = 1;
   display.innerHTML = 1;
   good = true;
   if (difficulty == easy){
       easy();
   } else if (difficulty == normal) {
      normal();
   } else if (difficulty == hard) {
       hard();
   } else if (difficulty == Vhard) {
      Vhard();
   }
   compTurn = true;
   startButton.disabled = true;
   easyButton.disabled=true;
   normalButton.disabled=true;
   hardButton.disabled=true;
   VhardButton.disabled=true;
   intervalId = setInterval(gameTurn, 800);
} 


//computer turn 

function gameTurn() {
    on = false;
    
    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on =true;
    }
    
    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) {
                const {color, clip } = keys.noteC;
                notePressSucsess(keyC,color,clip);
            }
            if (order[flash] == 2) {
                const {color, clip } = keys.noteD;
                notePressSucsess(keyD,color,clip);
            }
            if (order[flash] == 3) {
                const {color, clip } = keys.noteE;
                notePressSucsess(keyE,color,clip);
            }
            if (order[flash] == 4) {
                const {color, clip } = keys.noteF;
                notePressSucsess(keyF,color,clip);
            }
            if (order[flash] == 5) {
                const {color, clip } = keys.noteG;
                notePressSucsess(keyG,color,clip);
            }
            if (order[flash] == 6) {
                const {color, clip } = keys.noteA;
                notePressSucsess(keyA,color,clip);
            }
            if (order[flash] == 7) {
                const {color, clip } = keys.noteB;
                notePressSucsess(keyB,color,clip);
            }
            flash++;
        }, 200);
    }
}

function notePressSucsess(note,color,clip) {
    let audio= new Audio(clip)
    audio.play();
    note.style.backgroundColor = color;
    
}

//pressed key colors

function clearColor() {
     keyC.style.backgroundColor = "#f5f5f5";
     keyD.style.backgroundColor = "#f5f5f5";
     keyE.style.backgroundColor = "#f5f5f5";
     keyF.style.backgroundColor = "#f5f5f5";
     keyG.style.backgroundColor = "#f5f5f5";
     keyA.style.backgroundColor = "#f5f5f5";
     keyB.style.backgroundColor = "#f5f5f5";
 }
 
function flashColor() {
     keyC.style.backgroundColor = "#FF0000";
     keyD.style.backgroundColor = "#FF7F00";
     keyE.style.backgroundColor = "#FFFF00";
     keyF.style.backgroundColor = "#00FF00";
     keyG.style.backgroundColor = "#0000FF";
     keyA.style.backgroundColor = "#4B0082";
     keyB.style.backgroundColor = "#8B00FF";
 }


//player pressing keys

keyC.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color, clip } = keys.noteC;
    if (on) {
        playerOrder.push(1);
        check();
        notePressSucsess(keyC,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyD.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color, clip } = keys.noteD;
    if (on) {
        playerOrder.push(2);
        check();
        notePressSucsess(keyD,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyE.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color, clip } = keys.noteE;
    if (on) {
        playerOrder.push(3);
        check();
        notePressSucsess(keyE,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyF.addEventListener('click', (event) => {
    if (gameStarted) {
     const { color, clip } = keys.noteF;
    if (on) {
        playerOrder.push(4);
        check();
        notePressSucsess(keyF,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyG.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color, clip } = keys.noteG;
    if (on) {
        playerOrder.push(5);
        check();
        notePressSucsess(keyG,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyA.addEventListener('click', (event) => {
    if (gameStarted) {
     const { color, clip } = keys.noteA;
    if (on) {
        playerOrder.push(6);
        check();
        notePressSucsess(keyA,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyB.addEventListener('click', (event) => {
    if (gameStarted) {
     const { color, clip } = keys.noteB;
    if (on) {
        playerOrder.push(7);
        check();
        notePressSucsess(keyB,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

//checking if the game is won or computer turn again

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length -1]) 
        good =false;
        
    if(playerOrder.length == 20 && good){
     winGame();
    }
     
    if (good==false) {
        flashColor();
        display.innerHTML = "NO!";
        setTimeout(() => {
            display.innerHTML = turn;
            clearColor();
            
            
             {
                compTurn =true;
                flash =0;
                playerOrder =[];
                good =true;
                intervalId = setInterval(gameTurn, 800);
            }
        },800);
        
        noise = false;
    }
    
    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        display.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }
}

//win conditions check

function winGame(){
    flashColor();
    display.innerHTML = "WIN!";
    on = false;
    win = true;
    startButton.disabled = false;
   easyButton.disabled=false;
   normalButton.disabled=false;
   hardButton.disabled=false;
   VhardButton.disabled=false;
}





//audio tests

//var context = new (window.AudioContext || window.webkitAudioContext)();

//var oscillator = context.createOscillator();

//oscillator.type = 'sine';
//oscillator.frequency.value = 440;
//oscillator.connect(context.destination);
//oscillator.start();

//var date = new Date();
//var now = date.getTime();

//noteC.play(261.63, now);             //C
//noteD.play(293.66, now + 50);       //D
//noteE.play(329.63, now + 100);         //E
//noteF.play(349.23, now + 150);       //F
//noteG.play(392.00, now + 200);         //G
//noteA.play(440.00, now + 250);       //A
//noteB.play(493.88, now + 300);         //B

const soundE = new Audio('audio/noteB.wav')

soundE.play()
console.log(soundE)

