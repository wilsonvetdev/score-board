import React from 'react'
import Player from './Player'

function Header() {
    return (
        <div>
            <header>
                <h1>Scoreboard</h1>
                <span className='stats'>Players: 1</span>
            </header>
            <Player />
        </div>
    )
}

export default Header