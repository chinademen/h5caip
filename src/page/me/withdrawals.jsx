import React, { Component } from "react";
import { Tabs, Button } from "antd-mobile";
import AppNav from "../../template/appNav"
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
        const { list } = this.state;
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

class Yue  extends Component {
    render(){
        return(
            <ul className="yue">
               <li>
                   <span> 可提金额: </span>
                   <span> 1452.03 </span>
               </li>
               <li>
                   <span> 资金密码: </span>
                   <span> <input type="text"/> </span>
               </li>
               <li>
                   <span> 银行名称: </span>
                   <span> 中国工商银行 </span>
               </li>
               <li>
                   <span> 卡/存折: </span>
                   <span> **************389 </span>
               </li>
               <li>
                   <span> 所在地区: </span>
                   <span> 广东-深圳 </span>
               </li>
               <li>
                   <span> 开户行全称: </span>
                   <span> 深圳西乡街道工商支行 </span>
               </li>
               <li>
                   <span> 提款金额: </span>
                   <span> <input type="text"/> </span>
               </li>
               <li>
                    <Button className="btn" type="primary">提交</Button>
               </li>
            </ul>
        )
    }
}

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
        const parm = {
            title: "提现",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (
            <div className="withdrawals">
             <AppNav data={parm} />
                <Tabs tabBarInactiveTextColor="#999999" tabBarActiveTextColor="#d13737" tabBarUnderlineStyle={tabBarUnderlineStyle} swipeable={false} tabs={this.state.tabs} initialPage={0}>
                    <Yue />
                    <Record />
                </Tabs>
            </div>
        );
    }
}
export default Withdrawals;