import { useState, useEffect } from 'react';

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['Rock', 'Paper', 'Scissors'];

  const handleClick =(value) => {
    setUserChoice(value);
    generateComputerChoice();
  }

  const generateComputerChoice = () => {
    const randomNum = [Math.floor(Math.random() * choices.length)];
    const randomChoice = choices[randomNum];
    setComputerChoice(randomChoice);
  }

  useEffect(() => {
    {
      switch(userChoice + computerChoice) {
        case 'ScissorsPaper':
        case 'RockScissors':
        case 'PaperRock':
            setResult('YOU WIN!');
            break;
        case 'PaperScissors':
        case 'ScissorsRock':
        case 'RockPaper':
          setResult('YOU LOSE!');
          break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
          setResult("It's a draw. Try again!");
          break;
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <div>
      <h2>Rock Paper Scissors</h2>
      <hr /> 
      <h1>User Choice Is: <br/>
        <span style={{color: "cadetblue"}}>{userChoice}</span>
      </h1>
      <h1>Computer Choice Is: <br/>
        <span style={{color: "cadetblue"}}>{computerChoice}</span>
      </h1>
        {choices.map((choice, index) => 
          <button key={index} onClick={()=> handleClick(choice)}>{choice}</button>
        )}
        <h1 style={{color: "tan"}}>{result}</h1>
    </div>
  );
}

export default App;
