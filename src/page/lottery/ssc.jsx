import React, { Component } from "react";
import { Tabs, Flex, Grid } from "antd-mobile";

import "../../less/lottery.scss";

// 彩种组件
class LotteryTypes extends Component {
    chooseNumber() {
        return (
            <div>
                <span> 大 </span>
                <span> 小 </span>
                <span> 单 </span>
                <span> 双 </span>
                <span> 全 </span>
                <span> 清 </span>
            </div>
        );
    }
    number() {
        const data = Array.from(new Array(10)).map((_val, i) => ({
            text: `${i}`
        }));
        return (
            <div>
                <Grid
                    itemStyle={{ height: "0.6rem", background: "#f8f8f8" }}
                    className="grid"
                    activeStyle={false}
                    data={data}
                    columnNum={5}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div className="item_number"> {dataItem.text} </div>
                    )}
                />
            </div>
        );
    }
    render() {
        return (
            <div>
                <Flex className="lottery_time">
                    <Flex.Item
                        className="lottery_time_item"
                        justify="center"
                        align="center"
                    >
                        <p> 20181211-1115 </p>
                        <p> 92190 </p>
                    </Flex.Item>
                    <Flex.Item
                        className="lottery_time_item"
                        justify="center"
                        align="center"
                    >
                        <p> 20181211-1115 </p>
                        <p> 00:00:24 </p>
                    </Flex.Item>
                </Flex>
                
                {["万", "千", "百", "十", "个"].map((val, i) => {
                    return (
                        <div className="lottery_weishu" key={i}>
                            <div className="lottery_weishu_title">
                                <div className="title">{val}位</div>
                                <div className="type">
                                    {this.chooseNumber()}
                                </div>
                            </div>
                            <div className="lottery_weishu_number">
                                {this.number()}
                            </div>
                        </div>
                    );
                })}
                <div className="lottery_tabBar">
                    <div className="left">19600.000/0.0%</div>
                    <div className="mid">0注</div>
                    <div className="right"> 确认 </div>
                </div>
            </div>
        );
    }
}

// 开奖组件
class OpenLottery extends Component {
    render() {
        const dataList = Array.from(new Array(23)).map(_val => ({
            issue: "20181212-015",
            openNumber: "466575",
            andValue: "12",
            group: "组三",
            size: "大大大"
        }));
        return (
            <div className="openLottery_list">
                <ul>
                    <li> 期号 </li>
                    <li> 开奖号码 </li>
                    <li> 和值 </li>
                    <li> 组选 </li>
                    <li> 大小 </li>
                </ul>
                {dataList.map((item, i) => {
                    return (
                        <ul key={i}>
                            <li> {item.issue} </li>
                            <li> {item.openNumber} </li>
                            <li> {item.andValue} </li>
                            <li> {item.group} </li>
                            <li> {item.size} </li>
                        </ul>
                    );
                })}
            </div>
        );
    }
}

// 玩法说明
class GameShows extends Component {
    render() {
        const dataList = Array.from(new Array(5)).map(_val => ({
            title: "前二丶后二",
            list: [
                {
                    name: "前二直选",
                    dec:"在万位、千位、百位、十位、个位上的任意位置，选择1个号码作为一注，选号与相同位置上的开奖号码一致，即中奖。中奖金额为18.5元。"
                },
                {
                    name: "前二直选",
                    dec:"在万位、千位、百位、十位、个位上的任意位置，选择1个号码作为一注，选号与相同位置上的开奖号码一致，即中奖。中奖金额为18.5元。"
                }
            ]
        }));
        return (
            <div className="gameShows_list">
                {
                    dataList.map((item,i)=>{
                        return(
                            <div key={ i }>
                                <div className="title"> { item.title } </div>
                                <ul>
                                    {
                                        item.list.map((val,e)=>{
                                            return(
                                                <li  key={ e }> 
                                                    <span> { val.name } </span> 
                                                    <span> { val.dec } </span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

class SSC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [{ title: "彩种" }, { title: "开奖" }, { title: "玩法说明" }]
        };
    }
    render() {
        const tabBarUnderlineStyle ={
            border:'1px solid #3d9bff'
        }

        return (
            <div>
                <Tabs tabBarInactiveTextColor="#999999" tabBarUnderlineStyle={tabBarUnderlineStyle} tabBarActiveTextColor="#3d9bff" tabs={this.state.tabs} initialPage={0} >
                    <div className="lottery_number">
                        <LotteryTypes />
                    </div>
                    <div className="open_lottery">
                        <OpenLottery />
                    </div>
                    <div className="game_show">
                        <GameShows />
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default SSC;
