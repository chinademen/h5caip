import React, { Component } from "react";
import { Button } from "antd-mobile";
import AppNav from "../../template/appNav"
class OpenLink extends Component {
    render() {
        const parm = {
            title: "链接开户",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (
            <div className="openLink">
             <AppNav data={parm} />
                <ul>
                    <li>
                        <span> 账号类型 :  </span>
                        <span>
                            <form action="" method="get">
                                <label><input name="Fruit" type="radio" value="" /> 代理 </label>
                                <label><input name="Fruit" type="radio" value="" /> 普通用户 </label>
                            </form>
                        </span>
                    </li>
                    <li>
                        <span> 推广渠道 : </span>
                        <span> <input type="text" /> </span>
                    </li>
                    <li>
                        <Button className="btn" type="primary">点击设置返点</Button>
                    </li>
                </ul>
            </div>
        );
    }
}
export default OpenLink;