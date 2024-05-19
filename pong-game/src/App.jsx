import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [playersInfo, setPlayersInfo] = useState();

  function handlesubmit(e) {         	
	e.preventDefault();
	setPlayersInfo({
	  player1: document.getElementById('player1').value,
	  player2: document.getElementById('player2').value,
	  player3: document.getElementById('player3').value,
	  player4: document.getElementById('player4').value
	})
	return ;                         	
  }

  function checkPlayersName(e) {
    e.preventDefault();
	console.log(playersInfo);
  }
  return (
    <>
      <div>
	  	<h1>Welcome to Pong Game!</h1>
	  	<form id="RegisterPlayers" onSubmit={handlesubmit}>
      	  <label htmlFor="player1">Player1:</label>
      	  <input type="text" id="player1" name="player1" required/><br/><br/>

      	  <label htmlFor="player2">Player2:</label>
      	  <input type="text" id="player2" name="player2" required/><br/><br/>

      	  <label htmlFor="player3">Player3:</label>
      	  <input type="text" id="player3" name="player3" required/><br/><br/>

      	  <label htmlFor="player4">Player4:</label>
      	  <input type="text" id="player4" name="player4" required/><br/><br/>

      	  <button type="submit">Game Start!</button>
    	</form>
		<button onClick={checkPlayersName}>
		  check!
		</button>
	  </div>
    </>
  );
}

export default App
