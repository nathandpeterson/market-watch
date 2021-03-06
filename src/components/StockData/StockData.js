import React, { Component } from 'react'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory'

class StockData extends Component {

    state = {data: []}

    tableKeys = ['1. open', '2. high', '3. low', '4. close', '5. volume']
    tableNames = ['OPEN', 'HIGH', 'LOW', 'CLOSE', 'VOLUME']

    componentWillReceiveProps(nextProps){        
        this.setState({data : nextProps.data})
    }

    renderTable = (data) => {
        return this.tableNames.map((item, i) => {
                return  <tr key={i}>
                            <td>{this.tableNames[i]}</td>
                            <td>{data[this.tableKeys[i]]}</td>
                        </tr>
        })
    }

    renderChart = ({labels, dataSet}) => {
        const dates = labels.map(date => {
            const x = date.split('-')
            const y = x.slice(1)
            return y.join('/')
        }).reverse()
        // Data needs to be reversed since API gives it to us from present backwards
        const reversedData = dataSet.reverse()
        const dataFormat = reversedData.map((str, i )=> {
           return {y: parseFloat(str), x: dates[i] } 
        })        
        return <div>
                    <h5 className="blue-text">Ten stock day performance from {dates[0]} to {dates[9]}</h5>
                    <VictoryChart width={650} height={200}
                                    theme={VictoryTheme.material}> 
                        <VictoryLine 
                            style={{data: { stroke: "#c43a31" },
                                    parent: { border: "1px solid #ccc"} }}
                            data={dataFormat} />
                    </VictoryChart>
                </div>
    }

    renderResults = (data) => {       
        return data.map((stock, i) => {
        const { date, data } = stock.current                      
            return  <div key = {i} className="col"> 
                        <div className="card darken-1 stock-info animated fadeInUp">
                            <div className="card-content">
                                <h3>{stock.name}</h3>
                                <h5 className="blue-text">Trading info for {date} </h5>
                                <table>
                                    <tbody>
                                        {this.renderTable(data)}
                                    </tbody>
                                </table>
                                        {this.renderChart(stock.lastTen)}
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