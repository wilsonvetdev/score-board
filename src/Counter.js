import React from 'react'
import PropTypes from 'prop-types'

function Counter(props) {
    return(
        <div className='counter'>
            <button 
                className='counter-action decrement'
                onClick={() => props.changeScore(props.id, -1)}
                > 
                - 
            </button>
            <span className='counter-score'> { props.score } </span>
            <button 
                className='counter-action increment' 
                onClick={() => props.changeScore(props.id, +1)}
                > 
                + 
            </button>
        </div>
    )

}

Counter.propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
}

export default Counter
