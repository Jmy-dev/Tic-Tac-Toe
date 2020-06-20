var boxes         = document.querySelectorAll("td");
var resetButton   = document.getElementById("reset");
var table         = document.querySelector("table");
var playButton    = document.getElementById("play");
var player        = document.querySelector(".player");
var coverImage    = document.querySelector(".cover");
var winImage      = document.querySelector(".win");
var drawImage     = document.querySelector(".draw");
var header        = document.querySelector(".header");
var secondHeader  = document.querySelector(".header2");
var finish  = true;
var counter = 0;
var X  = [];
var O  = [];

//Start
playButton.addEventListener("click" , startGame)
boxes.forEach(function addListener(box){
  return box.addEventListener("click" ,handleBoxClicked);
})
//reset
resetButton.addEventListener("click",reset);

//------------------------------------------------------
function startGame(){
 switchHeaders(1);
  winImage.classList.add("hide");
  table.classList.remove("hide");
  resetButton.classList.remove("hide");
  table.classList.add("animate__bounceInDown")
  finish = false;
  playButton.classList.add("hide");
}

function reset(){
  // clear all the td
  boxes.forEach(clearBoxesContent);
  player.textContent = "X";
  finish = false;
  X = [];
  O = [];
  counter = 0;
  switchHeaders(1);
  winImage.classList.add("hide");
  drawImage.classList.add("hide");
  coverImage.classList.remove("hide");
}

function handleBoxClicked(){
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
        checkWining(X);
        checkWining(O);
        checkForDraw();
     }
   }
}
function handleWining(){
 switchHeaders(2)
 secondHeader.textContent = `${winnner} Wins!!`;
 finish = true;
 winImage.classList.remove("hide");
 coverImage.classList.add("hide");
}

function handleDraw(){
  switchHeaders(2);
  secondHeader.textContent = `Ohhh NoBody Wins!!`;
  finish = true;
  coverImage.classList.add("hide");
  drawImage.classList.remove("hide");
}

function checkForDraw(){
  if(!finish  && counter ===9){
    handleDraw();
  }
}
function clearBoxesContent(box){
  box.textContent = "";
}
function switchHeaders(state){
  if(state == 1){
    secondHeader.classList.add("hide");
    header.classList.remove("hide");
  }else if(state ==2){
    header.classList.add('hide');
    secondHeader.classList.remove('hide');
  }
}

function checkWining(arr){
 if( arr.includes("1") && arr.includes("vertical 2")&& arr.includes("3")){
   arr == X ? winnner ="Player1" : winnner ="Player2"
   handleWining();
 }
 else if( arr.includes("1") && arr.includes("horizontal 4")&& arr.includes("7")){
   arr == X ? winnner ="Player1" : winnner ="Player2" ;
   handleWining();
 }
 else if( arr.includes("7") && arr.includes("vertical 8")&& arr.includes("9")){
   arr == X ? winnner ="Player1" : winnner ="Player2"
   handleWining();
 }
 else if( arr.includes("horizontal 4") && arr.includes("vertical horizontal 5")&& arr.includes("horizontal 6")){
   arr == X ? winnner ="Player1" : winnner ="Player2"
   handleWining();
 }
 else if( arr.includes("vertical 2") && arr.includes("vertical horizontal 5")&& arr.includes("vertical 8")){
   arr == X ? winnner ="Player1" : winnner ="Player2"
   handleWining();
 }
 else if( arr.includes("3") && arr.includes("horizontal 6")&& arr.includes("9")){
   arr == X ? winnner ="Player1" : winnner ="Player2"
   handleWining();
 }
 else if( arr.includes("1") && arr.includes("vertical horizontal 5")&& arr.includes("9")){
   arr == X ? winnner ="Player1" : winnner ="Player2"
   handleWining();
 }
 else if( arr.includes("3") && arr.includes("vertical horizontal 5")&& arr.includes("7")){
    arr == X ? winnner ="Player1" : winnner ="Player2"
   handleWining();
 }
}
