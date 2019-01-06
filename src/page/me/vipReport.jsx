import React, { Component } from "react";
import { Picker } from 'antd-mobile';
class VipReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datavalue1: '全部平台',
            data01: [],
            datavalue2: '今天',
            data02: []
        }
    }
    onClick = () => {
        setTimeout(() => {
            this.setState({
                data01: [
                    {
                        label: '重庆时时彩',
                        value: '重庆时时彩',
                    },
                    {
                        label: '腾讯分分彩',
                        value: '腾讯分分彩',
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
                ]

            });
        }, 120);
    };
    render() {
        const { datavalue1, datavalue2 } = this.state
        return (
            <div className="levelOrder vipReport">
                <ul className="levelOrder_title">
                    <li>
                        <Picker
                            data={this.state.data01}
                            cols={1}
                            onOk={v => this.setState({ datavalue1: v })}
                        >
                            <p onClick={this.onClick}>{datavalue1}<span className="arrow_b"></span></p>

                        </Picker>
                    </li>
                    <li>
                        <Picker
                            data={this.state.data02}
                            cols={1}
                            onOk={v => this.setState({ datavalue2: v })}
                        >
                            <p onClick={this.onClick}>{datavalue2}<span className="arrow_b">
                            </span>
                            </p>

                        </Picker>
                    </li>

                </ul>
                <ul className="levelOrder_input">
                    <li>
                        <p> 总盈亏 : 0.0 </p>
                    </li>
                    <li>
                        <div>
                            <p> 总投注 </p>
                            <p> 0.0 </p>
                        </div>
                        <div>
                            <p> 总中奖 </p>
                            <p> 0.0 </p>
                        </div>
                        <div>
                            <p> 总返点 </p>
                            <p> 0.0 </p>
                        </div>
                    </li>

                </ul>
                <div className="table">
                    <table cellspacing="0px" >
                        <thead>
                            <tr>
                                <th> 账号 </th>
                                <th> 不活跃天数 </th>
                                <th> 余额 </th>
                                <th> 充值 </th>
                                <th> 体现 </th>
                                <th> 投注 </th>
                                <th> 中奖 </th>
                                <th> 返点 </th>
                                <th> 下级佣金 </th>
                                <th> 盈亏 </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                            </tr>
                            <tr>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> 1 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}
export default VipReport;