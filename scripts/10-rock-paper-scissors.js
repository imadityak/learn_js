let score = JSON.parse(localStorage.getItem('score')) || {
          loses: 0,
          wins: 0,
          ties: 0
        }; // default operator

        updateScoreElement();

      function playGame(playerMove){
        const computerMove = pickComputerMove();
        let result = '';
        if(playerMove === 'scissors'){
          if(computerMove === 'rock'){
            result = 'You Lose.';
          }else if(computerMove === 'paper'){
            result = 'You Win.';
          }else{
            result = 'Tie.'; 
          }
        } else if(playerMove === 'rock'){
          if(computerMove === 'rock'){
            result = 'Tie.';
          }else if(computerMove === 'paper'){
            result = 'You Lose.';
          }else{
            result = 'You Win.'; 
          }
        } else if(playerMove === 'paper'){
          if(computerMove === 'rock'){
            result = 'You Win.';
          }else if(computerMove === 'paper'){
            result = 'Tie.';
          }else{
            result = 'You Lose.';
          }
        }
        // score
        if(result === 'You Win.'){
          score.wins ++;
        }else if(result === 'You Lose.'){
          score.loses ++;
        }else if(result === 'Tie.'){
          score.ties ++;
        }
        localStorage.setItem('score', JSON.stringify(score));
        document.querySelector('.js-result').innerHTML = result; 
        document.querySelector('.js-moves').innerHTML = `You
          <img src="images/${playerMove}-emoji.png" class="move-icon">
          <img src="images/${computerMove}-emoji.png" class="move-icon">
          Computer`;
        updateScoreElement();
      }

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
      }

      function pickComputerMove(){
        const randomNumber = Math.random();
        let computerMove = '';
        if(randomNumber >=0 && randomNumber < 1/3){
          computerMove = 'rock';
        } else if(randomNumber >= 1/3 && randomNumber<2/3){
          computerMove = 'paper';
        } else if(randomNumber >= 2/4 && randomNumber <1){
        computerMove = 'scissors';
        }
        return computerMove;
      }