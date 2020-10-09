import React from 'react'
import Counter from './Counter'

function Player(props) {
    return (
        <div className='player'>
            <span className='player-name'> { props.name } </span>
            <Counter score={ props.score } />
        </div>
    )
}

export default Player