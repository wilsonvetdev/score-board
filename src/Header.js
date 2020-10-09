import React from 'react'

function Header(props) {
    return (
        <div>
            <header>
                <h1>{props.title}</h1>
                <span className="stats">Players: {props.totalPlayers}</span>
            </header>
        </div>
    )
}

export default Header