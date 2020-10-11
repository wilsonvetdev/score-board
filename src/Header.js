import React from 'react'
import PropTypes from 'prop-types'
import Stats from './Stats'
import Stopwatch from './Stopwatch'

function Header(props) {

    return (
        <div>
            <header>
                <Stats totalPlayers={props.totalPlayers} totalScores={props.totalScores} />
                <h1>{props.title}</h1>
                <Stopwatch />
            </header>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    totalPlayers: PropTypes.number
}

export default Header