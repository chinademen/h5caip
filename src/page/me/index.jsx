import React, { Component } from "react";

import AccountSet from './accountSet'
import Announcement from './announcement'
import CustomerCenter from './customerCenter'
import FeedBack from './feedBack'
import InsideIfo from './insideIfo'
import LevelMangement from './levelMangement'
import LevelOrder from './levelOrder'

import OpeningAccount from './openingAccount'
import OpenLink from './openLink'
import TopUp from './topUp'
import Charge from './charge'
import Withdrawals from './withdrawals'
import Transfer from './transfer'
import VipReport from './vipReport'
import AnnouncementDetail from './announcementDetail'


class Me extends Component {
    render() {
        const { type } = this.props.match.params
        switch (type) {
            case 'accountSet':          // 账户设置
                return (<AccountSet />)
            case 'announcement':        // 平台公告
                return (<Announcement />)
            case 'customerCenter':      // 客服中心
                return (<CustomerCenter />)
            case 'vipReport':           // 会员报表
                return (<VipReport />)
            case 'feedBack':            // 意见反馈
                return (<FeedBack />)
            case 'insideIfo':           // 站内信
                return (<InsideIfo />)
            case 'levelMangement':      // 下级管理
                return (<LevelMangement />)
            case 'levelOrder':          // 下级订单
                return (<LevelOrder />)
            case 'openingAccount':      // 人工开户
                return (<OpeningAccount />)
            case 'openLink':            // 链接开户
                return (<OpenLink />)
            case 'topUp':               // 充值
                return (<TopUp />)
            case 'charge':               // 充值
                return (<Charge />)
            case 'withdrawals':         // 提现
                return (<Withdrawals />)
            case 'transfer':            // 转账
                return (<Transfer />)
            case 'announcementDetail':            // 转账
                return (<AnnouncementDetail />)
            default:
                return (<div> 无相关页面 </div>);
        }
    }
}
export default Me