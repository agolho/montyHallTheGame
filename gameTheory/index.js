var yourLast=2, opponentMove, score=0, scoreOpp=0;

function cooperate() {
  document.getElementById("youDisplay").innerHTML = 'You: Cooperate';
  dilemma(1);
}

function defect() {
  document.getElementById("youDisplay").innerHTML = 'You: Defect';
  dilemma(0);
}

function opponent(){
  switch (yourLast) {
    case 0: opponentMove = 0;
    document.getElementById("opponentDisplay").innerHTML = 'Opponent: Defects';
      break;
    case 1: opponentMove = 1;
    document.getElementById("opponentDisplay").innerHTML = 'Opponent: Cooperates';
      break;
    case 2: opponentMove = 1;
    document.getElementById("opponentDisplay").innerHTML = 'Opponent: Cooperates';
      break;
    default:
  }
}

function dilemma(decision){
  opponent();
  if (decision == 0) {
    if (opponentMove == 0) {
      score -= 1;
      scoreOpp -= 1;
      document.getElementById("roundScore").innerHTML = '-1';
    }
    if (opponentMove == 1) {
      score += 3;
      scoreOpp -= 3;
      document.getElementById("roundScore").innerHTML = '+3';
    }

  }
  if (decision == 1) {
    if (opponentMove == 0) {
      score -= 3;
      scoreOpp += 3;
      document.getElementById("roundScore").innerHTML = '-3';
    }
    if (opponentMove == 1) {
      score += 1;
      scoreOpp += 1;
      document.getElementById("roundScore").innerHTML = '+1';
    }
  }
  yourLast = decision;
  document.getElementById("scoreDisplay").innerHTML = 'Your Score: '+score;
  document.getElementById("oppScoreDisplay").innerHTML = 'Opponent`s Score: '+scoreOpp;
}
