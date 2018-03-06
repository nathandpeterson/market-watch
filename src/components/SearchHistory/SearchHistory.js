import React, { Component } from 'react'
import SearchCard from './SearchCard.js'

class SearchHistory extends Component {
    state = {search: []}

    clear = (e) => {
        e.preventDefault()
        localStorage.setItem('search', '')
        this.setState({search: []})
    }

    renderSearches = () => {
        return this.state.search.map((symbol, i )=> {
           return <SearchCard key={i} symbol={symbol} /> 
        })
    }

    componentDidMount(){
        const searchString = localStorage.getItem('search')
        
        if(searchString) {
            const search = JSON.parse(searchString)            
            this.setState({search})
        }
    }

    render(){
    if(!this.state.search.length) return <div />
       return   <div className='row container'>
                    <p>here are some of your recent searches. click to add to input</p>
                    {this.renderSearches()}
                    <a  className='waves-effect waves-light btn'
                        onClick={this.addAll}>add all</a>
                    <a  className='waves-effect waves-light btn'
                        onClick={this.clear}>clear searches</a>
                </div>
    }
}

export default SearchHistory