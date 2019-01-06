//GA记录
import React, { Component } from "react";
import { Picker } from 'antd-mobile';
class GaRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datavalue1: '选择游戏',
            data01: [],
            datavalue2: '选择时间',
            data02: [],
            tableList: [
                {
                    name: "游戏名称",
                },
                {
                    name: "日期",
                },
                {
                    name: "投注",
                },
                {
                    name: "中奖",
                },
                {
                    name: "返点",
                },
                {
                    name: "盈亏",
                },
            ],
            data: [
                {
                    name: "游戏A",//名称
                    date: "2018-11-03",
                    ammount: '3200',
                    win: "2000",//
                    back: '300',
                    totle: '+600',
                },
                {
                    name: "游戏b",//名称
                    date: "2018-11-03",
                    ammount: '3200',
                    win: "2000",//
                    back: '300',
                    totle: '+600',
                },
                {
                    name: "游戏c",//名称
                    date: "2018-11-03",
                    ammount: '3200',
                    win: "2000",//
                    back: '300',
                    totle: '+600',
                },
            ]
        };
        this.handleClickLink = this.handleClickLink.bind(this);
    }
    onClick = () => {
        setTimeout(() => {
            this.setState({
                data01: [
                    {
                        label: '游戏A',
                        value: '游戏A',
                    },
                    {
                        label: '游戏B',
                        value: '游戏B',
                    },
                    {
                        label: '游戏C',
                        value: '游戏C',
                    }
                ],
                data02: [
                    {
                        label: '今天',
                        value: '今天',
                    },
                    {
                        label: '昨天',
                        value: '昨天',
                    },
                    {
                        label: '近三天',
                        value: '近三天',
                    },
                    {
                        label: '近七天',
                        value: '近七天',
                    }
                ],

            });
        }, 120);
    };
    handleClickLink(link) {
        this.props.history.push(link);
    }
    render() {
        const { datavalue1, datavalue2 } = this.state
        return (
            <div className="BetRecord AGRecord ">
                <div className="seachType">
                    <Picker
                        data={this.state.data01}
                        cols={1}
                        onOk={v => this.setState({ datavalue1: v })}
                    >
                        <p onClick={this.onClick}>{datavalue1}<span className="arrow_b"></span></p>

                    </Picker>
                    <Picker
                        data={this.state.data02}
                        cols={1}
                        onOk={v => this.setState({ datavalue2: v })}
                    >
                        <p onClick={this.onClick}>{datavalue2}<span className="arrow_b"></span></p>

                    </Picker>
                </div>
                <div className="balance"><span className="blue">总盈亏：</span><span className="red">6000.00</span></div>
                <div className="AGrecordList">
                    <table>
                        <tbody>
                            <tr>
                                {this.state.tableList.map((item, i) => {
                                    return (
                                        <td key={i}>{item.name}</td>
                                    );
                                })}
                            </tr>
                        </tbody>

                        <tbody>
                            {this.state.data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="list_item">{item.name}</td>
                                        <td className="list_item">{item.date}</td>
                                        <td className="list_item">{item.ammount}</td>
                                        <td className="list_item">{item.win}</td>
                                        <td className="list_item">{item.back}</td>
                                        <td className="list_item">{item.totle}</td>
                                    </tr>
                                );
                            })}
                        </tbody>


                    </table>
                </div>
            </div>
        );
    }
}

export default GaRecord;