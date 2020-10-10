import React from 'react'
import Counter from './Counter'

function Player(props) {

    return (
        <div className='player'>
            <span className='player-name'>
                <button 
                    className="remove-player" 
                    onClick={ () => props.handleRemovePlayer(props.player.id) }
                    >
                    ✖
                </button>
                { props.player.name } 
            </span>
            <Counter score={props.player.score} id={props.player.id} changeScore={props.changeScore}/>
        </div>
    )
}

export default Player