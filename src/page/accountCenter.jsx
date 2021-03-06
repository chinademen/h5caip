import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../less/accountCenter.scss";

import AppTabBar from "../template/appTabBar";

// 转账 充值 提现
class MoneyList extends Component {
    render() {
        return (
            <ul className="money">
                {this.props.data.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link className={`a a${i}`} to={item.path}>
                                <img src={item.img} alt="" />
                                <p> {item.title} </p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

// 报表 开户 下级 管理
class Management extends Component {
    render() {
        return (
            <ul className="management">
                {this.props.data.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link className="a" to={item.path}>
                                <img src={item.img} alt="" />
                                <p> {item.title} </p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}


// 系统设置

class Seting extends Component{
    render(){
        return(
            <ul className="setting">
                {this.props.data.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link className="a" to={item.path}>
                                <img className="left" src={item.img} alt="" />
                                <p> {item.title} </p>
                                <img className="right" src={ require('../img/arrow_r.png') } alt=""/>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        )
    }
}


class AccountCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moneyList:[
                { img:require('../img/userCenter_icon_05.png') ,title:'充值',path:'/me/topUp'},
                { img:require('../img/userCenter_icon_07.png') ,title:'提现',path:'/me/withdrawals'},
                { img:require('../img/userCenter_icon_06.png') ,title:'转账',path:'/me/transfer'},
            ],
            management:[
                { img:require('../img/userCenter_icon_08.png') ,title:'下级管理',path:'/me/levelMangement'},
                { img:require('../img/userCenter_icon_081.png') ,title:'人工开户',path:'/me/openingAccount'},
                { img:require('../img/userCenter_icon_082.png') ,title:'链接开户',path:'/me/openLink'},
                { img:require('../img/userCenter_icon_083.png') ,title:'会员报表',path:'/me/vipReport'},
                { img:require('../img/userCenter_icon_084.png') ,title:'下级订单',path:'/me/levelOrder'},
                { img:require('../img/userCenter_icon_085.png') ,title:'客服中心',path:'/me/customerCenter'}
            ],
            seting:[
                { img:require('../img/icon_1.png') ,title:'平台公告',path:'/me/announcement'},
                { img:require('../img/icon_2.png') ,title:'站内信',path:'/me/insideIfo'},
                { img:require('../img/icon_3.png') ,title:'意见反馈',path:'/me/feedBack'},
                { img:require('../img/icon_4.png') ,title:'账户设置',path:'/me/accountSet'},
                { img:require('../img/icon_5.png') ,title:'退出登录',path:'/login'},
            ]
        };
    }
    render() {
        return (
            <div className="accountCenter">
                <div className="user">
                    <div className="user_ifo">
                        <img className="user_img" src={ require('../img/id.png') } alt=""/>
                        <p className="user_name"> 测试账号 </p>
                        <p className="user_money"> 账户余额 : 8054.2719 </p>
                    </div>
                    <MoneyList data={this.state.moneyList} />
                </div>
                <Management data={this.state.management} />
                <Seting data={this.state.seting} />
                <AppTabBar barActive={2}> </AppTabBar>
            </div>
        );
    }
}

export default AccountCenter;
