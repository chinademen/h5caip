import React, { Component } from "react";
import { Tabs, Button, DatePicker } from "antd-mobile";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

class Record extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: now,
            list: [
                { a: '1212', b: '12', c: '2018/03/04', d: '2' },
                { a: '1212', b: '12', c: '2018/03/04', d: '2' },
                { a: '1212', b: '12', c: '2018/03/04', d: '2' }
            ]
        }
    }
    render() {
        const { list } = this.state
        return (
            <div className="record">
                <div className="datePicker">
                    <span>
                        2018/03/05
                    </span>
                    至
                    <span>
                        2018/03/05
                    </span>
                    <Button type="primary" inline size="small" >搜索</Button>
                </div>
                <ul>
                    <li>
                        <span> 编号 </span>
                        <span> 提款金额 </span>
                        <span> 提款时间 </span>
                        <span> 状态 </span>
                    </li>
                    {
                        list.map((item, i) => {
                            return (
                                <li key={ i }>
                                    <span> { item.a } </span>
                                    <span> { item.a } </span>
                                    <span> { item.a } </span>
                                    <span> { item.a } </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

// class List  extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render(){
//         return(

//         )
//     }
// }

class Withdrawals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: "提款余额", },
                { title: "提款记录" },
            ]
        };
    }
    render() {
        const tabBarUnderlineStyle = {
            'border': 'none'
        }
        return (
            <div className="withdrawals">
                <Tabs tabBarInactiveTextColor="#999999" tabBarActiveTextColor="#d13737" tabBarUnderlineStyle={tabBarUnderlineStyle} swipeable={false} tabs={this.state.tabs} initialPage={1}>
                    <div> 2 </div>
                    <Record />
                </Tabs>
            </div>
        );
    }
}
export default Withdrawals;