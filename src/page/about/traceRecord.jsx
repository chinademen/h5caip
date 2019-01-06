//追号记录
import React, { Component } from "react";
import { Picker } from 'antd-mobile';
import AppTabBar from "../../template/appTabBar";
import { withRouter } from 'react-router-dom';

@withRouter
class TraceRecord extends Component {
    constructor(props){
        super(props);
        this.state={
            datavalue1:'重庆时时彩',
            data01:[],
            datavalue2:'今天',
            data02:[],
            datavalue3:'全部状态',
            data03:[],
            data:[
                {
                    name:"重庆时时彩",//彩票名称
                    period:"20012568",//期数
                    state:"进行中",//状态
                    date:"2018-11-03 12:00:03",
                    ammount:'3200',
                    id:'3'
                },
                {
                    name:"重庆时时彩",//彩票名称
                    period:"20012568",//期数
                    state:"进行中",//状态
                    date:"2018-11-03 12:00:03",
                    ammount:'3300',
                    id:'6'
                },
                {
                    name:"重庆时时彩",//彩票名称
                    period:"20012568",//期数
                    state:"已完成",//中奖状态
                    date:"2018-11-03 12:00:03",
                    ammount:'3400',
                    id:'4'
                },
            ]
        };
        this.handleClickLink = this.handleClickLink.bind(this);
    }
    onClick = () => {
        setTimeout(() => {
          this.setState({
            data01:[
                {
                    label: '重庆时时彩',
                    value: '重庆时时彩',
                },
                {
                    label: '腾讯分分彩',
                    value: '腾讯分分彩',
                }
            ],
            data02:[
                {
                    label: '今天',
                    value: '今天',
                },
                {
                    label: '昨天',
                    value: '昨天',
                },
                {
                    label: '近三天',
                    value: '近三天',
                },
                {
                    label: '近七天',
                    value: '近七天',
                }
            ],
            data03:[
                {
                    label: '进行中',
                    value: '进行中',
                },
                {
                    label: '已完成',
                    value: '已完成',
                },
                {
                    label: '未开始',
                    value: '未开始',
                }
            ]

          });
        }, 120);
    };
    handleClickLink(link){
        this.props.history.push(link);
    } 
    render() {
        const { datavalue1,datavalue2,datavalue3 } = this.state
        return (
            <div className="BetRecord">
                <div className="seachType">
                    <Picker
                        data={this.state.data01}
                        cols={1}
                        onOk={v => this.setState({ datavalue1: v })}
                    >
                        <p onClick={this.onClick}>{ datavalue1 }<span className="arrow_b"></span></p>
                        
                    </Picker>
                    <Picker
                        data={this.state.data02}
                        cols={1}
                        onOk={v => this.setState({ datavalue2: v })}
                    >
                        <p onClick={this.onClick}>{datavalue2}<span className="arrow_b"></span></p>
                        
                    </Picker>
                    <Picker
                        data={this.state.data03}
                        cols={1}
                        onOk={v => this.setState({ datavalue3: v })}
                    >
                        <p onClick={this.onClick}>{datavalue3}<span className="arrow_b"></span></p>
                        
                    </Picker>
                </div>
                <div className="recordList">
                    <ul>
                        {this.state.data.map((item, i) => {
                            return (                          
                                <li className="list_item" key={ i }>
                                        <div className="recordMain"   onClick={()=> { this.handleClickLink('/aboutype/traceDetail?id='+item.id) }}>
                                            <div className="record_t">
                                                <p className="name fl">{item.name} <span className="period">{item.period}期</span></p>
                                                <p className="state fr red">{item.state}</p>
                                            </div>
                                            <div className="record_b">
                                                <p className="date fl">{item.date}</p>
                                                <p className="ammount fr">投注金额：{item.ammount}元</p>
                                            </div>
                                        </div>
                                        <div className="arrow_r"><span></span></div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <AppTabBar barActive={ 1 } > </AppTabBar>
            </div>
        );
    }
}

export default TraceRecord;