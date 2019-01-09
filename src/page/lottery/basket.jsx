//追号记录
import React, { Component } from "react";
import { Picker } from 'antd-mobile';
import "../../less/lottery.scss";
class BetRecord extends Component {
    constructor(props){
        super(props);
        this.state={
            datavalue1:'2元',
            data01:[],
            datavalue2:'1',
            data:[
                {
                    play:"后三直选",//彩票名称
                    num:"8，9，0",//期数
                    total:"2",
                },
                {
                    play:"后三直选",//彩票名称
                    num:"8，9，0",//期数
                    total:"2",
                }
            ]
        };
        this.handleClickLink = this.handleClickLink.bind(this);
    }
    onClick = () => {
        setTimeout(() => {
          this.setState({
            data01:[
                {
                    label: '2元',
                    value: '2元',
                },
                {
                    label: '2角',
                    value: '2角',
                },
                {
                    label: '2分',
                    value: '2分',
                },
            ],
            data02:[
                {
                    label: '1',
                    value: '1',
                },
                {
                    label: '2',
                    value: '3',
                },
                {
                    label: '3',
                    value: '3',
                },
            ]

          });
        }, 120);
    };
    handleClickLink(link){
        this.props.history.push(link);
    } 
    render() {
        const { datavalue1,datavalue2 } = this.state
        return (
            <div className="basket">
                <div className="basketTop">
                    <p className="preid">20170124-067期</p>
                    <p className="time">00 : 05 : 32</p>
                    <p className="status">截止投注</p>
                </div>
                <div className="btn_group">
                    <p className="btn_ap">机选一注 +</p>
                    <p className="btn_empty"><span></span> 清空</p>
                </div>
                <div className="betList">
                    <ul>
                        {this.state.data.map((item, i) => {
                            return (                          
                                <li className="list_item" key={ i }>
                                    <p className="play">{item.play}</p>
                                    <p className="num">{item.num}</p>
                                    <p className="total"><span>{item.total}</span>注</p>
                                    <p className="delete"></p>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="bottom">
                        <div className="bottom_01">
                            <div>投</div>  
                            <div className="bei">
                               <div className="cell"><span></span></div>
                                <div className="beiAdd"><Picker
                                    data={this.state.data02}
                                    cols={1}
                                    onOk={v => this.setState({ datavalue2: v })}
                                    >
                                    <p onClick={this.onClick}>{datavalue2}</p>
                                </Picker></div>
                                <div className="add"><span></span></div>
                            </div>
                            <div>倍</div>      
                            <div className="traceBtn">智能追号</div>  
                            <div>模式</div>                     
                            <div className="yuan">
                                <Picker
                                    data={this.state.data01}
                                    cols={1}
                                    onOk={v => this.setState({ datavalue1: v })}
                                    >
                                    <p onClick={this.onClick}>{datavalue1}
                                    <span className="arrow_b"></span></p>
                                </Picker>
                            </div>
                        </div>
                        <div className="bottom_02">
                            <div className="left">
                                总注数<span> 20 </span>注，总金额 <span> 400.00 </span> 元<br/> 余额 <span> 8452.00 </span>元
                            </div>
                            <div className="right">
                                确认投注
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pop none">
                        <div className="popMain">
                            <p className="tit">确认投注</p>
                            <div className="top">
                                <p className="l_name">重庆时时彩</p>
                                <p className="l_pired">期号：20170129-111</p>
                            </div>                      
                            <ul>
                                <li>是否追号：<span>是</span></li>
                                <li>单倍注数：<span>1001注</span></li>
                                <li>模 式：<span>元模式</span></li>
                                <li>倍 数：<span>3倍</span></li>
                                <li>追号期数：<span>3</span></li>
                                <li>总金额： <span className="money">￥12358.05</span></li>
                            </ul>
                            <div className="btn_order"> <p>确认投注</p> </div>
                        </div>
                </div>
                <div className="pop none">
                        <div className="popMain">
                            <p className="tit">确认投注</p>
                            <div className="top">
                                <p className="l_name">重庆时时彩</p>
                                <p className="l_pired">期号：20170129-111</p>
                            </div>                      
                            <ul>
                                <li>是否追号：<span>是</span></li>
                                <li>单倍注数：<span>1001注</span></li>
                                <li>模 式：<span>元模式</span></li>
                                <li>倍 数：<span>3倍</span></li>
                                <li>追号期数：<span>3</span></li>
                                <li>总金额： <span className="money">￥12358.05</span></li>
                            </ul>
                            <div className="btn_order"> 
                                <p className="goBet">继续投注</p> 
                                <p className="goRecord">查看投注记录</p> 
                            </div>
                        </div>
                </div>
               
            </div>
        );
    }
}

export default BetRecord;