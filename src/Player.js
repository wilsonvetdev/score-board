import React from 'react'
import Counter from './Counter'

function Player(props) {
    return (
        <div className='player'>
            <span className='player-name'> { props.name } </span>
            <Counter />
        </div>
    )
}

export default Player