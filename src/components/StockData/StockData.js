import React, { Component } from 'react'
import './StockData.css'

class StockData extends Component {

    state = {data: []}

    tableKeys = ['1. open', '2. high', '3. low', '4. close', '5. volume']
    tableNames = ['OPEN', 'HIGH', 'LOW', 'CLOSE', 'VOLUME']

    componentWillReceiveProps(nextProps){
        this.setState({data : nextProps.data})
    }

    renderTable = (data) => {
        return this.tableNames.map((item, i) => {
            return <div key={i}>
                        <tr>
                            <td>{this.tableNames[i]}</td>
                            <td>{data[this.tableKeys[i]]}</td>
                        </tr>
                    </div>
        })
    }

    renderResults = (data) => {       
        return data.map((stock, i) => {
        const { date, data } = stock.current                      
           return   <div className="card blue-grey darken-1 stock-info" key = {i}>
                        <div className="card-content white-text">
                            <h3>{stock.name}</h3>
                            <h5 className="card-content yellow-text">Trading info for {date} </h5>
                            <table>
                                <tbody>
                                    {this.renderTable(data)}
                                </tbody>
                            </table>
                        </div>
                    </div>
        })
    }

    render() {
        return <div>  
            {this.renderResults(this.state.data)}
        </div>
    }
}

export default StockData