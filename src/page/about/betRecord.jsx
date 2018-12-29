import React, { Component } from "react";
import { Picker } from 'antd-mobile';
class BetRecord extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    onClick = () => {
        setTimeout(() => {
          this.setState({
            data:[
                {
                    label: '春',
                    value: '春',
                }
            ]
          });
        }, 120);
    };
    render() {
        return (
            <div className="seachType">
                <Picker
                    data={this.state.data}
                    cols={1}
                    onOk={v => console.log(v)}
                >
                    <span onClick={this.onClick}>全部彩种</span>
                </Picker>
                <Picker
                    data={this.state.data}
                    cols={1}
                    onOk={v => console.log(v)}
                >
                    <span onClick={this.onClick}>今天</span>
                </Picker>
                <Picker
                    data={this.state.data}
                    cols={1}
                    onOk={v => console.log(v)}
                >
                    <span onClick={this.onClick}>全部状态</span>
                </Picker>
            </div>
        );
    }
}

export default BetRecord;