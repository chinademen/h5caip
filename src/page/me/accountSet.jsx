import React, { Component } from "react";
import AppNav from "../../template/appNav"
import { Tabs,Button } from "antd-mobile";


class LoginSct extends Component {
    render() {
        return (
            <ul className="loginSct">
                <li>
                    <span> 当前密码 </span>
                    <input type="text" />
                </li>
                <li>
                    <span> 输入新的密码 </span>
                    <input type="text" />
                </li>
                <li>
                    <span> 确认新的密码 </span>
                    <input type="text" />
                </li>
                <li>
                    <Button className="btn" type="primary">提交</Button>
                </li>
            </ul>
        )
    }
}
class MoneySct extends Component {
    render() {
        return (
            <ul className="loginSct">
                <li>
                    <span> 当前密码 </span>
                    <input type="text" />
                </li>
                <li>
                    <span> 输入新的密码 </span>
                    <input type="text" />
                </li>
                <li>
                    <span> 确认新的密码 </span>
                    <input type="text" />
                </li>
                <li>
                    <Button className="btn" type="primary">提交</Button>
                </li>
            </ul>
        )
    }
}
class BankCad extends Component {
    render() {
        return (
           <ul className="bankCad">
               <li> <span> brand01 </span> <span> **********236 </span> </li>
               <li> <span> brand02 </span> <span> **********236 </span> </li>
           </ul>
        )
    }
}
class AccountSet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: "登陆密码", },
                { title: "资金密码" },
                { title: "银行卡管理" },
            ]
        }
    }
    render() {
        const parm = {
            title: "账户设置",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }

        const tabBarUnderlineStyle = {
            'border': 'none'
        }
        return (
            <div className="accountSet">
                <AppNav data={parm} />
                <Tabs tabBarInactiveTextColor="#999999" tabBarActiveTextColor="#d13737" tabBarUnderlineStyle={tabBarUnderlineStyle} swipeable={false} tabs={this.state.tabs} initialPage={0}>
                    <LoginSct />
                    <MoneySct />
                    <BankCad />
                </Tabs>
            </div>
        );
    }
}
export default AccountSet;