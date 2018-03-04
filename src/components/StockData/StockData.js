import React, { Component } from 'react'

class StockData extends Component {

    state = {data: []}

    componentWillReceiveProps(nextProps){
        console.log('nextprops',nextProps)  
    }

    render() {
        return <div> data </div>
    }
}

export default StockData