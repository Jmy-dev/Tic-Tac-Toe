var td          = document.querySelectorAll("td");
var resetButton = document.getElementById("reset");
var table       = document.querySelector("table");
var playButton  = document.getElementById("play");
var player      = document.querySelector(".player");
var ideaimg     = document.querySelector(".idea");
var winimg      = document.querySelector(".win");
var drawimg     = document.querySelector(".draw");
var finish = true;
var counter = 0;
var X  = [];
var O  = [];
var header      = document.querySelector(".header");
var row         = document.querySelector(".rows");
var blocks = row.children;

//Start
const play =() =>{
     winimg.classList.add("hide");

  table.classList.remove("hide");
  resetButton.classList.remove("hide");
  table.classList.add("animate__bounceInDown")
  finish = false;
  playButton.classList.add("hide");

}
playButton.addEventListener("click" , play)

// game
for(var i = 0 ; i< td.length ; i++){
  td[i].addEventListener("click" ,gameCore)
}

function gameCore(){
  if(!finish){
  if(this.textContent == ""){
    if(player.textContent == "X"){
      this.textContent = "X" ;
      player.textContent = "O";
      X.push(this.attributes.class.nodeValue);
    }
    else if(player.textContent == "O"){
      this.textContent = "O";
      player.textContent = "X";
      O.push(this.attributes.class.nodeValue);
    }
    counter++;
    checkWinner(X);
    checkWinner(O);
    checkForDraw();

    // console.log(counter);

  }
}
}


// reset
resetButton.addEventListener("click",reset);
function reset(){
  // clear all the td
  for(let i = 0 ; i< td.length; i++){
    td[i].textContent = "";
  }
  player.textContent = "X";
  finish = false;
  X = [];
  O = [];
  counter = 0;
  header.innerHTML = `Player <span>${player.textContent}</span> your turn`;
        winimg.classList.add("hide");
        drawimg.classList.add("hide");
        ideaimg.classList.remove("hide");

}

function winner(){
 header.textContent = ` ${winnner} wins !!!!`;
 finish = true;
      winimg.classList.remove("hide");
     ideaimg.classList.add("hide");

}

function checkForDraw(){
  function draw(){
  header.textContent = "Ohhhh , no body wins!!";
  finish = true;
     ideaimg.classList.add("hide");
     drawimg.classList.remove("hide");


  }
  if(!finish  && counter ===9){
    draw();
  }
}

function checkWinner(arr){
 if( arr.includes("1") && arr.includes("vertical 2")&& arr.includes("3")){
   if(arr === X){ winnner = "Player1" }
   else{ winnner = "Player2" }
   winner();
 }
 else if( arr.includes("1") && arr.includes("horizontal 4")&& arr.includes("7")){
   if(arr === X){ winnner = "Player1" }
   else{ winnner = "Player2" }
   winner();
 }
 else if( arr.includes("7") && arr.includes("vertical 8")&& arr.includes("9")){
   if(arr === X){ winnner = "Player1" }
   else{ winnner = "Player2" }
   winner();
 }
 else if( arr.includes("horizontal 4") && arr.includes("vertical horizontal 5")&& arr.includes("horizontal 6")){
   if(arr === X){ winnner = "Player1" }
   else{ winnner = "Player2" }
   winner();
 }
 else if( arr.includes("vertical 2") && arr.includes("vertical horizontal 5")&& arr.includes("vertical 8")){
   if(arr === X){ winnner = "Player1" }
   else{ winnner = "Player2" }
   winner();
 }
 else if( arr.includes("3") && arr.includes("horizontal 6")&& arr.includes("9")){
   if(arr === X){ winnner = "Player1" }
   else{ winnner = "Player2" }
   winner();
 }
 else if( arr.includes("1") && arr.includes("vertical horizontal 5")&& arr.includes("9")){
   if(arr === X){ winnner = "Player1" }
   else{ winnner = "Player2" }
   winner();
 }
 else if( arr.includes("3") && arr.includes("vertical horizontal 5")&& arr.includes("7")){
   if(arr === X){ winnner = "Player1" }
   else{ winnner = "Player2" }
   winner();
 }
}
