import React, { Component } from 'react'

class Input extends Component {

    state = {input: []}

    handleText = (e) => {
        e.preventDefault()
        this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const symbolArray = this.createArray(this.state.input)
        this.props.handleInput(symbolArray)
        this.setState({input:''})
    }

    createArray = (input) => {
        if(!input.length) return []
        const array = input.split(',')
        const formattedArray = array.map(item => item.toUpperCase().trim())
        return formattedArray
    }


    render(){
    return  <div className="row container">
                <div className="input-container col s12">
                    <form onSubmit={this.handleSubmit}>
                        <input  value={this.state.input} 
                                id="input" 
                                type="text"
                                className="input-field"
                                onChange={this.handleText} />
                        <label  className="active" 
                                htmlFor="input">enter stock symbols separated by commas
                        </label>
                    </form>
                </div>
            </div>
    }
}

export default Input