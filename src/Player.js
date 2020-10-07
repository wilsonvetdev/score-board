import React from 'react'

function Player() {
    return (
        <div className='player'>
            <span className='player-name'> Player Name Here</span>
            <div className='counter'>
                <button className='counter-action decrement'> - </button>
                <span className='counter-score'> score here: 35 </span>
                <button className='counter-action increment'> + </button>
            </div>
        </div>
    )
}

export default Player