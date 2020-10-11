import React from 'react'
import Counter from './Counter'

class Player extends React.PureComponent {

    render() {
        console.log(this.props.player.name + ' rendered')
        return (
            <div className='player'>
                <span className='player-name'>
                    <button 
                        className="remove-player" 
                        onClick={ () => this.props.handleRemovePlayer(this.props.player.id) }
                        >
                        ✖
                    </button>
                    { this.props.player.name } 
                </span>
                <Counter score={this.props.player.score} id={this.props.player.id} changeScore={this.props.changeScore}/>
            </div>
        )
    }
}

export default Player