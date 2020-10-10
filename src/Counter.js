import React from 'react'

class Counter extends React.Component {

    state = {
        score: 0
    }

    handleIncreaseScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            }
        })
    }

    handleDecreaseScore = () => {
        if(this.state.score > 0){
            this.setState( prevState => {
                return {
                    score: this.state.score - 1
                }
            })
        }
    }

    render() {
        return(
            <div className='counter'>
                <button 
                    className='counter-action decrement'
                    onClick={this.handleDecreaseScore}> 
                    - 
                </button>
                <span className='counter-score'> { this.state.score } </span>
                <button 
                    className='counter-action increment' 
                    onClick={this.handleIncreaseScore}> 
                    + 
                </button>
            </div>
        )
    }
}

export default Counter
