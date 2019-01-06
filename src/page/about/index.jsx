
import React, { Component } from "react";

import BetRecord from './betRecord'
import GaRecord from './gaRecord'
import MoneyRecord from './moneyRecord'
import TraceRecord from './traceRecord'

class AboutIndex extends Component {
    render() {
        const { type } = this.props.match.params;
        console.log(type)
        switch (type) {
            case 'betRecord':
                return (<BetRecord />)
            case 'gaRecord':
                return (<GaRecord />)
            case 'moneyRecord':
                return (<MoneyRecord />)
            case 'traceRecord':
                return (<TraceRecord />)
            default:
                return (<div> 无相关页面 </div>);
        }
    }
}
export default AboutIndex