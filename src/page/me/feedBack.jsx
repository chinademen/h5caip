import React, { Component } from "react";
import {  Button } from "antd-mobile";
import AppNav from "../../template/appNav"
class FeedBack extends Component {
    render() {
        const parm = {
            title: "意见反馈",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (
            <div className="feedBack">
             <AppNav data={parm} />
                <ul>
                    <li> 
                        <span> 标题: </span>
                        <span> <input type="text"/>  </span>
                    </li>
                    <li> 
                        <span> 正文： </span>
                        <span> <textarea name="" id="" cols="30" rows="10"></textarea> </span>
                    </li>
                    <li>
                        <Button className="btn" type="primary">提交</Button>
                    </li>
                </ul>
            </div>
        );
    }
}
export default FeedBack;