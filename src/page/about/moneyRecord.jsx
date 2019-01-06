import React, { Component } from "react";
import { Tabs } from "antd-mobile";



class List extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.data.map((item, i) => {
                        return (
                            <li key={i}> 
                                <span>
                                    <h3> {item.title} </h3>
                                    <p> 总额:{item.to} </p>
                                </span>
                                <span>
                                    {item.change}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

class MoneyRecord extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: "全部" },
                { title: "投注" },
                { title: "派奖" },
                { title: "充值" },
                { title: "提现" },
                { title: "转移" }
            ]
        };
    }
    render() {
        const tabBarUnderlineStyle = {
            'border': 'none'
        }
        const data = [
            { title: "投注", to: '1313.3', change: '+3' },
            { title: "派奖", to: '1313.3', change: '-2' },
            { title: "充值", to: '1313.3', change: '+3' },
            { title: "提现", to: '1313.3', change: '+6' },
            { title: "投注", to: '1313.3', change: '+8' },
            { title: "转移", to: '1313.3', change: '+9' },
        ]
        return (
            <div className="moneyRecord">
                <Tabs tabBarInactiveTextColor="#999999" tabBarActiveTextColor="#d13737" tabBarUnderlineStyle={tabBarUnderlineStyle} swipeable={false} tabs={this.state.tabs} initialPage={0}>
                    <List data={data} />
                    <List data={new Array(data[0])} />
                    <List data={new Array(data[1])} />
                    <List data={new Array(data[2])} />
                    <List data={new Array(data[3])} />
                    <List data={new Array(data[4])} />
                    <List data={new Array(data[5])} />
                </Tabs>
            </div>
        );
    }
}

export default MoneyRecord;