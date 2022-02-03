const getUserChoice =(userInput)=>{
    userInput = userInput.toLowerCase();
    if(userInput==='rock'){
      return userInput;
    }
    else if (userInput==='scissors') {
    return userInput;
    }
    else if (userInput==='paper'){
      return userInput;
    }
    else{
      console.log('Error!');
    }
    };
    
    
    function getComputerChoice(){
      const randomNumber =Math.floor(Math.random()) * 3;
      switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
        case 2:
        return 'scissors';}
    };
    
    
    const determineWinner=(userChoice,computerChoice) => {
      if (userChoice===computerChoice){
        return 'game was a tie';
      };
      if (userChoice==='rock'){
        if (computerchoice==='paper'){
          return 'Computer has won';
        }
      }
      else {
        return 'user has won';
      }
      if(userChoice==='paper'){
        if(computerChoice==='rock'){
          return 
        }
      }
      if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    };
    const playGame=()=>{
      const userChoice=getUserChoice();
      const computerChoice=getComputerChoice();
      console.log(getUserChoice('scissors'));
      console.log(getComputerChoice('scissors'));
      console.log(determineWinner());
    };
    