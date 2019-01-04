
import React, { Component } from "react";
import Ssc from './ssc'

class LotteryId extends Component {
    render() {
        const { id } = this.props.match.params
        switch (id) {
            case '1':
                return (<Ssc />)
            default:
                return (<div> 无相关页面 </div>);
        }
    }
}
export default LotteryId