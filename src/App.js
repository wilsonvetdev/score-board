import React from 'react';

import './App.css';
import Header from './Header'
import Player from './Player'
import playersArray from './PlayersArray'
import Form from './Form'
import Banner from './Banner'

class App extends React.Component {

  state = {
    players: playersArray
  }

  prevPlayerId = 4

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( player => player.id !== id)
      }
    })
  }

  handleAddPlayer = (playerName) => {
    let newPlayer = {
      name: playerName,
      score: 0, 
      id: this.prevPlayerId += 1
    }
    let copyOfPlayers = [...this.state.players, newPlayer]
    this.setState(() => ({
      players: copyOfPlayers
    })) 
  }

  updatePlayerFromState = (updatedPlayerObj) => {
    let copyOfPlayers = this.state.players.map((player) => {
      if(player.id === updatedPlayerObj.id) {
        return updatedPlayerObj
      } else {
        return player
      }
    })
    this.setState(() => {
      return {players: copyOfPlayers}
    })
  }

  handleScoreChange = (playerID, delta) => {
      let foundPlayer = this.state.players.find(player => player.id === playerID)
      let updatedPlayer = {...foundPlayer}
      updatedPlayer.score += delta 
      this.updatePlayerFromState(updatedPlayer)
  }

  getHighestScore = () => {
    let scores = this.state.players.map((player) => player.score)
    let highScore = Math.max(...scores)
    if (highScore) {
      return highScore;
    } 
    return null;
  }
  

  render() {

    let totalScores = this.state.players.reduce((total, player) => {
      return total + player.score
    }, 0)

    let highScore = this.getHighestScore()
    
    let arrayOfPlayerComponents = this.state.players.map((player) => {
      return <Player 
                key={player.id}
                player={player} 
                id={player.id}
                handleRemovePlayer={this.handleRemovePlayer}
                changeScore={this.handleScoreChange}
                isHighScore={highScore === player.score} 
              />
    })
  
    return (
      <div className='scoreboard'>
        <Banner />
        <Header
          totalPlayers={arrayOfPlayerComponents.length} 
          totalScores={totalScores}
        />
        { arrayOfPlayerComponents }
        <Form addPlayer={this.handleAddPlayer} />
      </div>
    )

  }
}

export default App;
