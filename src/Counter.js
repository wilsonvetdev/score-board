import React from 'react'

function Counter() {
    return(
        <div className='counter'>
            <button className='counter-action decrement'> - </button>
            <span className='counter-score'> score here </span>
            <button className='counter-action increment'> + </button>
        </div>
    )
}

export default Counter