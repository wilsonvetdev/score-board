import React from 'react';
import './App.css';
import Header from './Header'
import Player from './Player'
import players from './PlayersArray'

function App() {

  let arrayOfPlayerComponents = players.map((player) => {
    return <Player key={player.id} name={player.name} score={player.score} />
  })

  return (
    <div className='scoreboard'>
      <Header title='Scoreboard' totalPlayers={arrayOfPlayerComponents.length} />
      { arrayOfPlayerComponents }
    </div>
  )
}

export default App;
