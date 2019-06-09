let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let on = false;
let win;

const display = document.querySelector("#display");
const noteC = document.querySelector("#noteC");
const noteD = document.querySelector("#noteD");
const noteE = document.querySelector("#noteE");
const noteF = document.querySelector("#noteF");
const noteG = document.querySelector("#noteG");
const noteA = document.querySelector("#noteA");
const noteB = document.querySelector("#noteB");
const startButton = document.querySelector("#start");



startButton.addEventListener('click', (event) => {
      play();
});

function play(){
   win = false;
   order = [];
   playerOrder = [];
   flash = 0;
   intervalId = 0;
   turn = 1;
   display.innerHTML = 1;
   good = true;
   for (var i = 0; i < 20; i++) {
       order.push(Math.floor(Math.random() * 7) + 1);
   }
   compTurn = true;
   
   intervalId = setInterval(gameTurn, 800);
}

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
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            if (order[flash] == 5) five();
            if (order[flash] == 6) six();
            if (order[flash] == 7) seven();
            flash++;
        }, 200);
    }
}

function one() {
    if (noise) {
        let audio = document.getElementById("clip1");
        audio.play();
    }
    noise = true;
    noteC.style.backgroundColor = "lightgreen";
}

function two() {
    if (noise) {
        let audio = document.getElementById("clip2");
        audio.play();
    }
    noise = true;
    noteD.style.backgroundColor = "tomato";
}

function three() {
    if (noise) {
        let audio = document.getElementById("clip3");
        audio.play();
    }
    noise = true;
    noteE.style.backgroundColor = "yellow";
}

function four() {
    if (noise) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    noteF.style.backgroundColor = "lightskyblue";
}

function five() {
    if (noise) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    noteG.style.backgroundColor = "lightskyblue";
}

function six() {
    if (noise) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    noteA.style.backgroundColor = "lightskyblue";
}

function seven() {
    if (noise) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    noteB.style.backgroundColor = "lightskyblue";
}

function clearColor() {
     noteC.style.backgroundColor = "darkgreen";
     noteD.style.backgroundColor = "darkred";
     noteE.style.backgroundColor = "goldenrod";
     noteF.style.backgroundColor = "darkblue";
     noteG.style.backgroundColor = "darkblue";
     noteA.style.backgroundColor = "darkblue";
     noteB.style.backgroundColor = "darkblue";
 }
 
function flashColor() {
     noteC.style.backgroundColor = "lightgreen";
     noteD.style.backgroundColor = "tomato";
     noteE.style.backgroundColor = "yellow";
     noteF.style.backgroundColor = "lightskyblue";
     noteG.style.backgroundColor = "lightskyblue";
     noteA.style.backgroundColor = "lightskyblue";
     noteB.style.backgroundColor = "lightskyblue";
 }
 
noteC.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
});

noteD.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
});

noteE.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
});

noteF.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
});

noteG.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(5);
        check();
        five();
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
});

noteA.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(6);
        check();
        six();
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
});

noteB.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(7);
        check();
        seven();
        if(!win) {
            setTimeout(() =>{
                clearColor();
            },300);
        }
    }
});


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

function winGame(){
    flashColor();
    display.innerHTML = "WIN!";
    on = false;
    win = true;
}