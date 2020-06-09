var playerChoose = 0, prizeUnder,score=0;
var doors = ["1", "2", "3"]; // candidates for Monty to open
var otherDoor = ["1", "2", "3"]; // candidates for player to switch

//Calculate the prize on page reload, or load whatever floats your value...
document.addEventListener('DOMContentLoaded', function() {
    shufflePrize();
}, false);

function selectDoor1() {
  playerSelected(1);
}

function selectDoor2() {
  playerSelected(2);
}

function selectDoor3() {
  playerSelected(3);
}

function shufflePrize(){
  prizeUnder = Math.floor((Math.random() * 3) + 1);  //Select a random door to put the prize under
  doors = doors.filter(item => item !== prizeUnder+"");  // drop the door with a prize from the eligible doors array
}

function openDoor(){
 document.getElementById("door"+doors[0]).innerHTML =  '<img id= "door'+doors[0]+'" src="img/door_open.jpg" alt="">';  //change the door picture on the open one
 document.getElementById(doors[0]).innerHTML =  '<a class="disable" onclick="selectDoor'+doors[0]+'()" href="#">Door Number '+doors[0]+'</a>'; // make the link unclickable
 otherDoor = otherDoor.filter(item => item !== doors[0]);  // drop the door player choose from the eligible doors array
 document.getElementById("graph"+doors[0]).innerHTML =  '<div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>';  //change the graph
 document.getElementById("graph"+otherDoor[0]).innerHTML =  '<div class="progress-bar bg-success" role="progressbar" style="width: 67%;" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100">67%</div>';  //change the graph
}

function playerSelected(selected) {
  playerChoose = selected;
  doors = doors.filter(item => item !== playerChoose + "");  // drop the door player choose from the eligible doors array
  otherDoor = otherDoor.filter(item => item !== playerChoose + "");  // drop the door player choose from the eligible doors array
  document.getElementById(selected).innerHTML =  '<a class="disable" onclick="selectDoor'+selected+'()" href="#">Door Number '+selected+'</a>'; //make the link unclickable
  openDoor();
}

function switchPrompt() {
  var txt;
  if (confirm("Would you like to switch to the Door Number "+otherDoor[0])) {
    playerChoose = otherDoor[0];
  } else {
    return;
  }
}

function openPrizeDoor(){
  if (playerChoose == 0 ) {
    alert("Please choose a door.");
  }
  else {
    document.getElementById("masterButton").innerHTML = '<a onclick="resetGame();" class="btn btn-warning btn-lg" href="#" role="button">Again</a>'; //Change the button to say play again
    switchPrompt(); //Ask the player to switch
    document.getElementById("door"+prizeUnder).innerHTML =  '<img id= "door'+prizeUnder+'" src="img/door_won.jpg" alt="">';  //change the door picture to the winner picture
    if (parseInt(playerChoose) == parseInt(prizeUnder)) {
      score++;
      document.getElementById("scoreDisplay").innerHTML =  'Score: '+score;  //change the door picture to the winner picture
      alert("You Won! Congratulations.");
    }
    else alert("Better luck next time.");
    }
}

function resetGame() {

  //Reset the master button
  document.getElementById("masterButton").innerHTML = '<a onclick="openPrizeDoor();" class="btn btn-primary btn-lg" href="#" role="button">Open the Door Monty!</a>';

  //change the door picture on the closed one
  document.getElementById("door1").innerHTML =  '<img id= "door1" src="img/door_closed.jpg" alt="">';
  document.getElementById("door2").innerHTML =  '<img id= "door2" src="img/door_closed.jpg" alt="">';
  document.getElementById("door3").innerHTML =  '<img id= "door3" src="img/door_closed.jpg" alt="">';

  //make the link clickable
  document.getElementById("1").innerHTML =  '<button onclick="selectDoor1()" type="button" class="btn btn-danger">Door Number 1</button>';
  document.getElementById("2").innerHTML =  '<button onclick="selectDoor2()" type="button" class="btn btn-danger">Door Number 2</button>';
  document.getElementById("3").innerHTML =  '<button onclick="selectDoor3()" type="button" class="btn btn-danger">Door Number 3</button>';

  //reset the graphs
  document.getElementById("graph1").innerHTML =  '<div class="progress-bar" role="progressbar" style="width: 33%;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">33%</div>';
  document.getElementById("graph2").innerHTML =  '<div class="progress-bar" role="progressbar" style="width: 33%;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">33%</div>';
  document.getElementById("graph3").innerHTML =  '<div class="progress-bar" role="progressbar" style="width: 33%;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">33%</div>';

  //Reset parameters
  shufflePrize();
  playerChoose = 0;
  doors = ["1", "2", "3"];
  otherDoor = ["1", "2", "3"];

}
