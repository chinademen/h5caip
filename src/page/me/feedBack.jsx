import React, { Component } from "react";
import {  Button } from "antd-mobile";
class FeedBack extends Component {
    render() {
        return (
            <div className="feedBack">
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