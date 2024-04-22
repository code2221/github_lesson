// battleship key:
// 0: no ship
// 1: ship, not hit
// 2: miss
// 3: hit
let board = [0,0,0,0,0,0,0,0]
let numShips = Number(prompt("How many ships do you want to place?"));
let hits = 0;
let guesses = numShips + 2;
let winStatus = "";
let shipsLeft = numShips
// In this part, we are just defining the variables that we will be using in the code. This is not inside a function, as if we did that, that would mean that it is a local scope, which is bad. This is because we want it to be a global scope so its accessible across the code. The board shows the number of spots for the ships, the numShips represents the amount of ships that are placed on the board. Hits represents the amount of hits the person got on the ships. The amount of guesses is defined by the number of ships plus 2. So, if you had 2 ships, you would then get 4 guesses. The winStatus lets the user know if they won or not in the end. ShipsLeft represents the amount of ships left after the guesses. It is equal to NumShips in the starting of the game. 

// 2PTS OBJECTIVE 1: COMPLETE THE placeShips function
function placeShips() {
  var i = 0;
  while (i < numShips) {
    var ship = randomNumber(0, board.length- 1);
    if (board[ship] == 0) {
      board[ship] = 1;
      i++;
    }
  }
}
// This function is used to randomly place ships across the board. In this code, we use the variable i and set it less than the number of ships there are. Then, you let ship be equal to randomNumber, which chooses the index to place the ship at. And, if board[ship]==0, that would mean that it would then be equal to 1. 

// hint! in order to do this, you need to use the randomNumber() function to find a random index to place each of your ships
// hint! the number of ships you need to place is stored in the numShips global variable

// 2PTS OBJECTIVE 2: COMPLETE THE fire(spot) function

// hint: first check if the board at spot has a 0 or 1. is it a hit or a miss if its 0? is it a hit or a miss if its 1?

// hint: use if statements

function fire(spot) {
 if(board[spot]==0){
   board[spot] = 2
   guesses-- 
 }
  if(board[spot]==1){
   board[spot] = 3
   guesses--
   shipsLeft--
 }
  if(guesses==0){
   winStatus = ("You lost")
 }
  if(shipsLeft==0){
   winStatus = ("You win")
 }
} 
 // It checks if there is a ship or not on the board. If there isn't a ship at that index it is a miss! It then switches that index on the board to a 2. If there is a ship, it is a hit! Then the index switches to 3. If the board spot is 0 and is clicked, the spot will then change to 2, because it was a miss as there are no ships at that spot. If the board spot is 1 and it is clicked, then the spot changes to 3, meaning that there is a ship at that spot. Additionally, in this part, we also reduce shipsLeft by 1. Also, with each function, the guesses function decreases by 1 as a guess was made. If the guesses==0, the board will display that the person lost. If the amount of ships left==0, then the user wins and that is then displayed on the board. 

// 2PTS OBJECTIVE 3: COMPLETE THE drawBoard function

// hint: loop through the array and check for each condition
// hint: change the grid based on the condition!

function drawBoard() {
  for(var i=0; i<board.length; i++){
    if(board[i] ==0){
      fill("darkblue");
    }
     if(board[i] ==1){
      fill("darkblue");
    }
    else if(board[i]==3) { 
      fill("green")
    }
    else if(board[i]==2){
      fill("red");
    }
    rect(50*i,200,50,50)
  }
}

// This function draws the board, filling in the ships, hits, and misses where they go! If board==0, the square is filled in dark blue. If board==1, the square is filled in dark blue. Also, if the board is clicked and its value is 3, the square then turns to green. If the board is clicked and its value is 2, then it would change to red. 


// 1 PT OBJECTIVE 4 COMMENT THE SKELETON CODE
// ONLY COMMENT DO NOT CHANGE CODE!!!!!

function mousePressed() {
  if (mouseY > 200 && mouseY < 250) {
    if (mouseX > 0 && mouseX < 50) {
      fire(0);
    } else if (mouseX > 50 && mouseX < 100) {
      fire(1);
    } else if (mouseX > 100 && mouseX < 150) {
      fire(2);
    } else if (mouseX > 150 && mouseX < 200) {
      fire(3);
    } else if (mouseX > 200 && mouseX < 250) {
      fire(4);
    } else if (mouseX > 250 && mouseX < 300) {
      fire(5);
    } else if (mouseX > 300 && mouseX < 350) {
      fire(6);
    } else if (mouseX > 350 && mouseX < 400) {
      fire(7);
    }
  }
}
// In this code, we are using mouse positions to allow users to click the squares on their screens. It is determined by the direction of the click. If the mouse click of the x is less than 50 and greater than 0, you have to fire the index 0. If the mouse click of the x is greater than 50 and less than 100, you have to fire the index 1. If the mouse click of the x is less than 150 and greater than 100, you have to fire the index 2. If the mouse click of the x is less than 200 and greater than 150, you have to fire the index 3. If the mouse click of the x is less than 250 and greater than 200, you have to fire the index 4. If the mouse click of the x is less than 300 and greater than 250, you have to fire the index 5. If the mouse click of the x is less than 350 and greater than 300, you have to fire the index 6. If the mouse click of the x is less than 400 and greater than 350, you have to fire the index 7. 

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// In this function, 
function setup() {
  createCanvas(400, 400);
}

// 1PT OBJECTIVE 5: CALL THE placeShips() and drawBoard() FUNCTIONS
placeShips();
console.log("hey");

function draw() {
  background("lightblue");
  textSize(20);
  text("WELCOME TO BATTLESHIP!", 70, 175);

  textSize(20);
  text(winStatus, 150, 285);
  drawBoard()
}
// In this function, we just called the placeShips function and the drawBoard function. This function contains the draw function, in which we added a colorful background and added text to display the WinStatus and welcome players to the battleship game.
