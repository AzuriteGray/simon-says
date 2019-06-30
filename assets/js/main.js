let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let on = true;
let win;
let gameStarted = false;
let difficulty = Vhard ;

const display = document.querySelector("#display");
const noteC = document.querySelector("#noteC");
const noteD = document.querySelector("#noteD");
const noteE = document.querySelector("#noteE");
const noteF = document.querySelector("#noteF");
const noteG = document.querySelector("#noteG");
const noteA = document.querySelector("#noteA");
const noteB = document.querySelector("#noteB");
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
    noteB: {color:"#8B00FF", clip:"clip7"},
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
                notePressSucsess(noteC,color,clip);
            }
            if (order[flash] == 2) {
                const {color, clip } = keys.noteD;
                notePressSucsess(noteD,color,clip);
            }
            if (order[flash] == 3) {
                const {color, clip } = keys.noteE;
                notePressSucsess(noteE,color,clip);
            }
            if (order[flash] == 4) {
                const {color, clip } = keys.noteF;
                notePressSucsess(noteF,color,clip);
            }
            if (order[flash] == 5) {
                const {color, clip } = keys.noteG;
                notePressSucsess(noteG,color,clip);
            }
            if (order[flash] == 6) {
                const {color, clip } = keys.noteA;
                notePressSucsess(noteA,color,clip);
            }
            if (order[flash] == 7) {
                const {color, clip } = keys.noteB;
                notePressSucsess(noteB,color,clip);
            }
            flash++;
        }, 200);
    }
}

function notePressSucsess(note,color,clip) {
    let audio =  document.getElementById(clip);
    audio.play();
    note.style.backgroundColor = color;
    
}

//pressed key colors

function clearColor() {
     noteC.style.backgroundColor = "#f5f5f5";
     noteD.style.backgroundColor = "#f5f5f5";
     noteE.style.backgroundColor = "#f5f5f5";
     noteF.style.backgroundColor = "#f5f5f5";
     noteG.style.backgroundColor = "#f5f5f5";
     noteA.style.backgroundColor = "#f5f5f5";
     noteB.style.backgroundColor = "#f5f5f5";
 }
 
function flashColor() {
     noteC.style.backgroundColor = "#FF0000";
     noteD.style.backgroundColor = "#FF7F00";
     noteE.style.backgroundColor = "#FFFF00";
     noteF.style.backgroundColor = "#00FF00";
     noteG.style.backgroundColor = "#0000FF";
     noteA.style.backgroundColor = "#4B0082";
     noteB.style.backgroundColor = "#8B00FF";
 }


//player pressing keys

noteC.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color, clip } = keys.noteC;
    if (on) {
        playerOrder.push(1);
        check();
        notePressSucsess(noteC,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

noteD.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color, clip } = keys.noteD;
    if (on) {
        playerOrder.push(2);
        check();
        notePressSucsess(noteD,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

noteE.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color, clip } = keys.noteE;
    if (on) {
        playerOrder.push(3);
        check();
        notePressSucsess(noteE,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

noteF.addEventListener('click', (event) => {
    if (gameStarted) {
     const { color, clip } = keys.noteF;
    if (on) {
        playerOrder.push(4);
        check();
        notePressSucsess(noteF,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

noteG.addEventListener('click', (event) => {
    if (gameStarted) {
    const { color, clip } = keys.noteG;
    if (on) {
        playerOrder.push(5);
        check();
        notePressSucsess(noteG,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

noteA.addEventListener('click', (event) => {
    if (gameStarted) {
     const { color, clip } = keys.noteA;
    if (on) {
        playerOrder.push(6);
        check();
        notePressSucsess(noteA,color,clip);
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
    }
});

noteB.addEventListener('click', (event) => {
    if (gameStarted) {
     const { color, clip } = keys.noteB;
    if (on) {
        playerOrder.push(7);
        check();
        notePressSucsess(noteB,color,clip);
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




