let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
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
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");





startButton.addEventListener('click', (event) => {
  if (on || win) {
      play();
  }  
});

function play(){
   win = false;
   order = [];
   playerOrder = [];
   flash = 0;
   intervalId = 0;
   turn = 1;
   turnCounter.innerHTML = 1;
   good = true;
   for (var i = 0; i < 20; i++) {
       order.push(Math.floor(Math.random() * 4) + 1);
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
            flash++;
        }, 200);
    }