import React, { Component } from "react";
import { InputItem } from 'antd-mobile'
import AppNav from "../../template/appNav"
class OpenAccount extends Component {

    render() {
        const parm = {
            title: "人工开户",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (
            <div className="openAccount">
             <AppNav data={parm} />
                <InputItem
                    placeholder="以字母开头,5-16位字母或者数字"
                >用户名:</InputItem>
                <InputItem
                    placeholder="18位以内的字符"
                >昵称:</InputItem>
                <InputItem
                    placeholder="6-15位字母顺序混合"
                >登录密码:</InputItem>
                <InputItem
                >确认密码:</InputItem>
            </div>
        );
    }
}

export default OpenAccount;