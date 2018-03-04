import React, { Component } from 'react'

class Input extends Component {

    state = {input: ''}

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
        const array = input.split(',')
        const formattedArray = array.map(item => item.toUpperCase().trim())
        return formattedArray
    }

    render(){
    return  <div className="row">
                <div className="input-field col s6">
                    <form onSubmit={this.handleSubmit}>
                        <input  value={this.state.input} 
                                id="input" 
                                type="text"
                                onChange={this.handleText} />
                        <label  className="active" 
                                htmlFor="input">Stock Symbol
                        </label>
                    </form>
                </div>
            </div>
    }
}

export default Input