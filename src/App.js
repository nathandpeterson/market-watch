import React, { Component } from 'react'
import Input from './components/Input/Input'
import StockData from './components/StockData/StockData'
import axios from 'axios'
const API = 'https://www.alphavantage.co/query?'
const API_KEY = process.env.API_KEY || '7GEHGW84ZCELCFVO'

class App extends Component {

  state = {results: []}

  lastDay = (data) => {
      const keys = Object.keys(data)      
      const lastDay = data[keys[0]]
      return {date: keys[0], data: lastDay}          
  }

  handleInput = (array) => {
    const promises = array.map(symbol => {
      return axios.get(`${API}function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
    })
    return Promise.all(promises)
      .then(results => {
        const resultArray = results.map((result, i) => {
            return{ name: array[i], 
                    data: result.data['Time Series (Daily)'],
                    current: this.lastDay(result.data['Time Series (Daily)'])
                  }           
        })
        this.setState({results: resultArray})
      })
  }

  render() {
    return (
      <div>
        <h1>market view</h1>
        <Input handleInput={ this.handleInput }/>
        <StockData data={ this.state.results }/>
      </div>
    )
  }
}

export default App
