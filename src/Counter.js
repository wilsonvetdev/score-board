import React from 'react'

class Counter extends React.Component {
    render() {
        return(
            <div className='counter'>
                <button className='counter-action decrement'> - </button>
                <span className='counter-score'> { this.props.score } </span>
                <button className='counter-action increment'> + </button>
            </div>
        )
    }
}

export default Counter
