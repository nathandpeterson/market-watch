import React, { Component } from 'react'

class StockData extends Component {

    state = {data: []}

    tableKeys = ['1. open', '2. high', '3. low', '4. close', '5. volume']
    tableNames = ['OPEN', 'HIGH', 'LOW', 'CLOSE', 'VOLUME']

    componentWillReceiveProps(nextProps){        
        this.setState({data : nextProps.data})
    }

    renderTable = (data) => {
        return this.tableNames.map((item, i) => {
            return      <tr key={i}>
                            <td>{this.tableNames[i]}</td>
                            <td>{data[this.tableKeys[i]]}</td>
                        </tr>
        })
    }


    renderResults = (data) => {       
        return data.map((stock, i) => {
        const { date, data } = stock.current                      
            return  <div key = {i} className="col"> 
                        <div className="card blue-grey darken-1 stock-info animated fadeInUp">
                            <div className="card-content white-text">
                                <h3>{stock.name}</h3>
                                <h5 className="blue-text">Trading info for {date} </h5>
                                <table>
                                    <tbody>
                                        {this.renderTable(data)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        })
    }

    render() {
        return  <div className="container row">
                    {this.renderResults(this.state.data)}
                </div>
    }
}

export default StockData