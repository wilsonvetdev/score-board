import React from 'react'
import Counter from './Counter'

function Player() {
    return (
        <div className='player'>
            <span className='player-name'> Player Name Here</span>
            <Counter />
        </div>
    )
}

export default Player