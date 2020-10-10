import React from 'react'
import Stats from './Stats'
import Stopwatch from './Stopwatch'

function Header(props) {
    return (
        <div>
            <header>
                <Stats totalPlayers={props.totalPlayers} totalScores={props.totalScores} />
                <h1>{props.title}</h1>
            </header>
        </div>
    )
}

export default Header