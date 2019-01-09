import React, { Component } from "react";
import { Tabs,Button } from "antd-mobile";
import { withRouter } from 'react-router-dom';
import AppNav from "../../template/appNav"
@withRouter
class InsideIfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { title: "发件箱", },
                { title: "收件箱" },
                { title: "发邮件" },
            ]
        };
        this.handleLink = this.handleLink.bind(this);
    }
    handleLink(link) { 
        this.props.history.push(link);
    }
    render() {
        const list = [
            { name: "系统通知", titile: "重庆时时彩即将开启", time: "2018/05/03" },
            { name: "系统通知", titile: "重庆时时彩即将开启", time: "2018/05/03" }
        ]
        const tabBarUnderlineStyle = {
            'border': 'none'
        }
        const parm = {
            title: "站内信",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (
            <div className="insideIfo">
            <AppNav data={parm} />
                <Tabs tabBarInactiveTextColor="#999999" tabBarActiveTextColor="#d13737" tabBarUnderlineStyle={tabBarUnderlineStyle} swipeable={false} tabs={this.state.tabs} initialPage={0}>
                    <ul>
                        {
                            list.map((item, i) => {
                                return (
                                    <li key={i} onClick={() => { this.handleLink("/me/announcementDetail") }}>
                                        <div>
                                            <h3> {item.name} </h3>
                                            <p> {item.titile} </p>
                                        </div>
                                        <div>
                                            <p> {item.time} </p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul>
                        {
                            list.map((item, i) => {
                                return (
                                    <li key={i} onClick={() => { this.handleLink("/me/announcementDetail") }}>
                                        <div>
                                            <h3> {item.name} </h3>
                                            <p> {item.titile} </p>
                                        </div>
                                        <div>
                                            <p> {item.time} </p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="send_msg">
                        <li>
                            <span> 标题: </span>
                            <span> <input type="text" />  </span>
                        </li>
                        <li>
                            <span> 正文： </span>
                            <span> <textarea name="" id="" cols="30" rows="10"></textarea> </span>
                        </li>
                        <li>
                            <Button className="btn" type="primary">提交</Button>
                        </li>
                    </ul>
                </Tabs>
            </div>
        );
    }
}
export default InsideIfo;