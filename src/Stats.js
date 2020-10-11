import React from 'react'
import PropTypes from 'prop-types'

function Stats(props) {

    return(
        <table className="stats">
            <tbody>
                <tr>
                <td>Players:</td>
                <td>{props.totalPlayers}</td>
                </tr>
                <tr>
                <td>Total Points:</td>
                <td>{props.totalScores}</td>
                </tr>
            </tbody>
        </table>
    )
}

Stats.propTypes = {
    totalPlayers: PropTypes.number,
    totalScores: PropTypes.number
}

export default Stats