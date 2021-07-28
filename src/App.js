import { useState } from 'react';

const App = () => {
  const[userChoice, setUserChoice] = useState(null);
  const choices = ['rock', 'paper', 'scissors'];

  const handleClick =(value) => {
    setUserChoice(value)

  }

  return (
    <div>
      <h2>Rock Paper Scissors</h2>
      <hr /> 
      <h1>User Choice Is: {userChoice}</h1>
      <h1>Computer Choice Is:</h1>
        {choices.map((choice, index) => 
          <button key={index} onClick={()=> handleClick(choice)}>{choice}</button>
        )}
    </div>
  );
}

export default App;
