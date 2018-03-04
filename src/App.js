import React, { Component } from 'react'
import Input from './components/Input/Input'
import axios from 'axios'
const API = 'https://www.alphavantage.co/query?'
const API_KEY = process.env.API_KEY || '7GEHGW84ZCELCFVO'

class App extends Component {

  state = {results: []}

  fetchData = (data) => {
    console.log(data);
    
    axios.get(`${API}function=TIME_SERIES_DAILY_ADJUSTED&symbol=${data}&apikey=${API_KEY}`)
      .then(results => {
        console.log(results.data)
      })
  }

  render() {
    return (
      <div>
        <h1>market view</h1>
        <Input fetchData={ this.fetchData }/>
      </div>
    )
  }
}

export default App
