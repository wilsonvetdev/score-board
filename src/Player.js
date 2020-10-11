import React from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'

class Player extends React.PureComponent {

    static propTypes = {
        handleRemovePlayer: PropTypes.func.isRequired, 
        changeScore: PropTypes.func.isRequired, 
        player: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            score: PropTypes.number
        }).isRequired
    } 
    //static vs define proptypes outside the class. Static is easier to see and straightforward.

    render() {
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