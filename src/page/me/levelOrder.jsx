import React, { Component } from "react";
import { Picker, Button } from 'antd-mobile';
import AppNav from "../../template/appNav"
class LevelOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datavalue1: '重庆时时彩',
            data01: [],
            datavalue2: '今天',
            data02: [],
            datavalue3: '全部状态',
            data03: [],
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
                ],
                data03: [
                    {
                        label: '已中奖',
                        value: '已中奖',
                    },
                    {
                        label: '未中奖',
                        value: '未中奖',
                    },
                    {
                        label: '已撤销',
                        value: '已撤销',
                    }
                ]

            });
        }, 120);
    };
    render() {
        const { datavalue1, datavalue2, datavalue3 } = this.state;
        const parm = {
            title: "下级订单",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (
            <div className="levelOrder">
             <AppNav data={parm} />
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
                    <li>
                        <Picker
                            data={this.state.data03}
                            cols={1}
                            onOk={v => this.setState({ datavalue3: v })}
                        >
                            <p onClick={this.onClick}>{datavalue3}<span className="arrow_b">
                            </span>
                            </p>

                        </Picker>
                    </li>
                </ul>
                <ul className="levelOrder_input">
                    <li>
                        <span> 下级账号 : </span>
                        <span> <input type="text" /> </span>
                    </li>
                    <li>
                        <span> 下级账号 : </span>
                        <span> <input type="text" /> </span>
                    </li>
                    <li>
                        <Button className="btn" type="primary">查询</Button>
                    </li>
                </ul>
                <div className="table">
                    <table cellSpacing="0px"  >
                        <thead>
                            <tr>
                                <th> 订单编号 </th>
                                <th> 奖期 </th>
                                <th> 彩投注金额(元)种 </th>
                                <th> 是否追号 </th>
                                <th> 购买时间(元) </th>
                                <th> 订单状态 </th>
                                <th> 中奖金额 </th>
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
                            </tr>
                            <tr>
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
export default LevelOrder;