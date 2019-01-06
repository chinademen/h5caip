import React, { Component } from "react";
import { Tabs, Button, Picker } from "antd-mobile";


class Xiaji extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value1: '主钱包',
            value2: 'GA游戏',
        }
    }
    onClick = () => {
        setTimeout(() => {
            this.setState({
                data: [
                    {
                        label: '主钱包',
                        value: '主钱包',
                    },
                    {
                        label: 'GA游戏',
                        value: 'GA游戏',
                    }
                ]
            });
        }, 120);
    };
    render() {
        return (
            <ul className="xiaji">
                <li>
                    <span> 转给下级: </span>
                    <span> <input type="text" placeholder="选择下级" /> </span>
                </li>
                <li>
                    <span> 转账类别: </span>
                    <span>
                        <form action="" method="get">
                            <label><input name="Fruit" type="radio" value="" /> 给下级优惠 </label>
                            <label><input name="Fruit" type="radio" value="" /> 给下级充值 </label>
                        </form>
                    </span>
                </li>
                <li>
                    <span> 开户人姓名: </span>
                    <span> <input type="text" placeholder="转出方安全资料中的姓名" /> </span>
                </li>
                <li>
                    <span> 转账金额: </span>
                    <span> <input type="text" placeholder="整数位最大8位,小数2位" /> </span>
                </li>
                <li>
                    <span> 资金密码: </span>
                    <span> <input type="text" placeholder="请输入提款密码" /> </span>
                </li>
                <li>
                    <Button className="btn" type="primary">转移</Button>
                </li>
            </ul>
        )
    }
}

class Pingtai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value1: '主钱包',
            value2: 'GA游戏',
        }
    }
    onClick = () => {
        setTimeout(() => {
            this.setState({
                data: [
                    {
                        label: '主钱包',
                        value: '主钱包',
                    },
                    {
                        label: 'GA游戏',
                        value: 'GA游戏',
                    }
                ]
            });
        }, 120);
    };
    render() {
        return (
            <ul className="pingtai">
                <li>
                    <span> 转移: </span>
                    <span>
                        从
                        <Picker
                            data={this.state.data}
                            cols={1}
                            onOk={v => console.log(v)}
                        >
                            <b onClick={this.onClick}>{this.state.value1}</b>
                        </Picker>
                        到
                        <Picker
                            data={this.state.data}
                            cols={1}
                            onOk={v => console.log(v)}
                        >
                            <b onClick={this.onClick}>{this.state.value2}</b>
                        </Picker>
                    </span>
                </li>
                <li>
                    <span> 转入金额: </span>
                    <span> <input type="text" /> </span>
                </li>
                <li>
                    <span> 资金密码: </span>
                    <span> <input type="text" /> </span>
                </li>
                <li>
                    <Button className="btn" type="primary">转移</Button>
                </li>
            </ul>
        )
    }
}

class Transfer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: "平台转账", },
                { title: "下级转账" },
            ]
        };
    }
    render() {
        const tabBarUnderlineStyle = {
            'border': 'none'
        }
        return (
            <div className="transfer">
                <Tabs tabBarInactiveTextColor="#999999" tabBarActiveTextColor="#d13737" tabBarUnderlineStyle={tabBarUnderlineStyle} swipeable={false} tabs={this.state.tabs} initialPage={0}>
                    <Pingtai />
                    <Xiaji />
                </Tabs>
            </div>
        );
    }
}
export default Transfer;