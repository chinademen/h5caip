import React, { Component } from "react";
class About extends Component {
    render() {
        return (
            <div className="charge">
                <div className="chargeInput">充值金额 <input type="text"/></div>
                <div className="chargebtn">
                    <p className="back">返回</p>
                    <p className="conform">确认充值</p>
                </div>
                <div className="chargeTips">
                    <p>温馨提示</p>
                    <p>1 为维护您的充值权益为维护您的充值权益为维护您的充值权益为维护您的充值权益为维护您的充值权益</p>
                </div>
            </div>
        );
    }
}
export default About;