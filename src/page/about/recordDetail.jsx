// 注单详情
import React, { Component } from "react";
import AppNav from "../../template/appNav"
class recordDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    orderNum:'BNC122546853',
                    name:"重庆时时彩",//彩票名称
                    period:"20012568",//期数
                    state:"未中奖",//中奖状态
                    date:"2018-11-03 12:00:03",
                    ammount:'3200',
                    type:"2元",
                    num:'23568',
                    prize:'0.0',
                    play:'五星直选',
                    detail:'2 3 5 8 6',
                    noteNum:'8',
                    id:'3'
                }
            ]
        };
    }
    render() {
        const parm = {
            title: "详情",
            classNameLeft: "",
            classNameRight: "",
            show: true
        }
        return (

           
            <div className="recordDetail">
             <AppNav data={parm} />
                {this.state.data.map((item) => {
                    return (                          
                        <div className="detailWrap">
                            <div className="detailTop">
                                <span>{item.name}</span>
                                <span className="orderNum">{item.period}</span>
                                <span className="state">{item.state}</span>
                            </div>
                            <div className="detailMain">
                                <p>订单编号 ：{item.orderNum} </p>
                                <p>购买时间 ：{item.date} </p>
                                <p>投注倍数 ：{item.orderNum} </p>
                                <p>订单金额 ：{item.ammount} </p>
                                <p>模式 ：{item.type} </p>
                                <p>开奖号码 ：{item.num} </p>
                                <p>中奖金额 ：{item.prize} </p>                            
                            </div>
                            <p className="specail">
                                <p className="detail">投注明细 : </p>   
                                <span>{item.play}</span><span className="noteNum">{item.detail}</span><span className="noteNum">{item.noteNum}注</span>
                            </p>
                            <div className="btn">撤单</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default recordDetail;