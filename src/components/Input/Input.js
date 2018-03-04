import React, { Component } from 'react'

class Input extends Component {

    state = {input: ''}

    handleText = (e) => {
        e.preventDefault()
        this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // send input to API
        console.log(this.state.input)
        this.setState({input:''})
    }

    render(){
    return  <div className="row">
                <div className="input-field col s6">
                    <form onSubmit={this.handleSubmit}>
                        <input  value={this.state.input} 
                                id="input" 
                                type="text"
                                onChange={this.handleText} 
                                onSubmit={this.handleSubmit}
                                className="validate" />
                        <label  className="active" 
                                htmlFor="input">Stock Symbol
                        </label>
                    </form>
                </div>
            </div>
    }
}

export default Input