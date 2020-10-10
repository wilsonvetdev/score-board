import React from 'react'

class Form extends React.Component {

    state = {
        value: ''
    }


    handleValueChange = (event) => {
        let copyOfState = {...this.state}
        copyOfState.value = event.target.value
        this.setState( () => {
            return copyOfState
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPlayer(this.state.value)
        let copyOfState = {...this.state}
        copyOfState.value = ''
        this.setState({
            value: copyOfState.value 
        })
    }

    render(){
        console.log(this.state.value)
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name"
                />
                <input
                    type="submit"
                    value="Add player"
                />
            </form>
        )
    }
}

export default Form