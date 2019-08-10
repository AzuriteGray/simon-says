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
var lives = 3;

const display = document.querySelector("#display");
const keyboardC = document.querySelector("#noteC");
const keyboardD = document.querySelector("#noteD");
const keyboardE = document.querySelector("#noteE");
const keyboardF = document.querySelector("#noteF");
const keyboardG = document.querySelector("#noteG");
const keyboardA = document.querySelector("#noteA");
const keyboardB = document.querySelector("#noteB");
const keyC = new Audio("assets/audio/noteC.wav");
const keyD = new Audio("assets/audio/noteD.wav");
const keyE = new Audio("assets/audio/noteE.wav");
const keyF = new Audio("assets/audio/noteF.wav");
const keyG = new Audio("assets/audio/noteG.wav");
const keyA = new Audio("assets/audio/noteA.wav");
const keyB = new Audio("assets/audio/noteB.wav");
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
    noteA: {color:"#4B0082"},
    noteB: {color:"#8B00FF"},
    noteC: {color:"#FF0000"},
    noteD: {color:"#FF7F00"},
    noteE: {color:"#FFFF00"},
    noteF: {color:"#00FF00"},
    noteG: {color:"#0000FF"},
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
                const {color} = keys.noteC;
                notePressSucsess(keyC,color,keyboardC);
            }
            if (order[flash] == 2) {
                const {color } = keys.noteD;
                notePressSucsess(keyD,color,keyboardD);
            }
            if (order[flash] == 3) {
                const {color } = keys.noteE;
                notePressSucsess(keyE,color,keyboardE);
            }
            if (order[flash] == 4) {
                const {color } = keys.noteF;
                notePressSucsess(keyF,color,keyboardF);
            }
            if (order[flash] == 5) {
                const {color } = keys.noteG;
                notePressSucsess(keyG,color,keyboardG);
            }
            if (order[flash] == 6) {
                const {color} = keys.noteA;
                notePressSucsess(keyA,color,keyboardA);
            }
            if (order[flash] == 7) {
                const {color} = keys.noteB;
                notePressSucsess(keyB,color,keyboardB);
            }
            flash++;
        }, 200);
    }
}

function notePressSucsess(note,color,key) {
    note.play();
   key.style.backgroundColor = color;
}

//pressed key colors

function clearColor() {
     keyboardC.style.backgroundColor = "#f5f5f5";
     keyboardD.style.backgroundColor = "#f5f5f5";
     keyboardE.style.backgroundColor = "#f5f5f5";
     keyboardF.style.backgroundColor = "#f5f5f5";
     keyboardG.style.backgroundColor = "#f5f5f5";
     keyboardA.style.backgroundColor = "#f5f5f5";
     keyboardB.style.backgroundColor = "#f5f5f5";
 }
 
function flashColor() {
     keyboardC.style.backgroundColor = "#FF0000";
     keyboardD.style.backgroundColor = "#FF7F00";
     keyboardE.style.backgroundColor = "#FFFF00";
     keyboardF.style.backgroundColor = "#00FF00";
     keyboardG.style.backgroundColor = "#0000FF";
     keyboardA.style.backgroundColor = "#4B0082";
     keyboardB.style.backgroundColor = "#8B00FF";
 }


//player pressing keys

keyboardC.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color} = keys.noteC;
    if (on) {
        playerOrder.push(1);
        check();
        notePressSucsess(keyC,color,keyboardC);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyboardD.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color} = keys.noteD;
    if (on) {
        playerOrder.push(2);
        check();
        notePressSucsess(keyD,color,keyboardD);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyboardE.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color } = keys.noteE;
    if (on) {
        playerOrder.push(3);
        check();
        notePressSucsess(keyE,color,keyboardE);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyboardF.addEventListener('click', (event) => {
    if (gameStarted) {
     const { color} = keys.noteF;
    if (on) {
        playerOrder.push(4);
        check();
        notePressSucsess(keyF,color,keyboardF);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyboardG.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color} = keys.noteG;
    if (on) {
        playerOrder.push(5);
        check();
        notePressSucsess(keyG,color,keyboardG);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyboardA.addEventListener('click', (event) => {
    if (gameStarted) {
     const { color} = keys.noteA;
    if (on) {
        playerOrder.push(6);
        check();
        notePressSucsess(keyA,color,keyboardA);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

keyboardB.addEventListener('click', (event) => {
    if (gameStarted) {
     const { color} = keys.noteB;
    if (on) {
        playerOrder.push(7);
        check();
        notePressSucsess(keyB,color,keyboardB);
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
        lives--;
        flashColor();
        display.innerHTML = "<p>WRONG!</p><p>lifes left</p>"+lives;
        setTimeout(() => {
            display.innerHTML = turn;
            clearColor();
            
             
             if (lives){
                compTurn =true;
                flash =0;
                playerOrder =[];
                good =true;
                intervalId = setInterval(gameTurn, 800);
            } else {
                gameover();
            }
        },800);
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

function gameover (){
    display.innerHTML = "GAME OVER!";
    on = false;
    win = true;
    startButton.disabled = false;
   easyButton.disabled=false;
   normalButton.disabled=false;
   hardButton.disabled=false;
   VhardButton.disabled=false;
}

function winGame(){
    flashColor();
    display.innerHTML = "Congratulations!";
    on = false;
    win = true;
    startButton.disabled = false;
   easyButton.disabled=false;
   normalButton.disabled=false;
   hardButton.disabled=false;
   VhardButton.disabled=false;
}


