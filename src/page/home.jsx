import React, { Component } from "react";
import { Tabs, Carousel  } from "antd-mobile";
import { withRouter } from 'react-router-dom';
import "../less/home.scss";

import AppTabBar from "../template/appTabBar";
import AppNav from "../template/appNav"

// 轮播
class Banner extends Component {
    render() {
        return (
            <Carousel autoplay={false} infinite>
                {[0, 1, 2].map((val, i) => (
                    <a key={i} href="http://www.alipay.com">
                        <img
                            src={require("../img/banner.png")}
                            alt=""
                            style={{ width: "100%", height:'180px', verticalAlign: "top" }}
                        />
                    </a>
                ))}
            </Carousel>
        );
    }
}

// 彩票
@withRouter
class Lottery extends Component {
    constructor(props){
        super(props);
        this.handleClickLink = this.handleClickLink.bind(this);
    }
    handleClickLink(link){
        this.props.history.push(link);
    }   
    render() {
        return (
            <div className="home_lottery">
                <Banner />
                <h3 className="home_title"> 购彩专区 </h3>
                <ul className="home_list">
                    {["重庆时时彩", "重庆11选5", "重庆快三", "重庆低频彩","重庆快三","重庆11选5"].map((item, i) => {
                        return (
                            <li key={i} onClick={()=> { this.handleClickLink('/lottery/1') }}>
                                <div className="list_logo"></div>
                                <div className="list_dec">
                                    <p className="title"> {item} </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

// Game 游戏
class Game extends Component {
    render(){
        return(
            <div className="home_Game">
              <div className={`home_Game_bg ${this.props.data}`}>  </div>
              <div className={`home_Game_btn ${this.props.data}`}> 开始游戏 </div>
            </div>
        )
    }
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { title: "彩票", },
                { title: "真人" },
                { title: "体育" },
                { title: "棋牌" }
            ]
        };
    }
    render() {
        const tabBarUnderlineStyle ={
            'border':'none'
        }
        const parm = {
            title:"金三角彩票",
            classNameLeft:"service",
            classNameRight:"report",
            show:false
        }
        return (
            <div className="home">
                <AppNav data={parm} />
                <Tabs tabBarInactiveTextColor="#999999" tabBarActiveTextColor="#d13737" tabBarUnderlineStyle={ tabBarUnderlineStyle } swipeable={false} tabs={this.state.tabs} initialPage={0}>
                    <Lottery />
                    <Game data='agame_bg' />
                    <Game data='sport_bg' />
                    <Game data='aj_bg' />
                </Tabs>
                <AppTabBar barActive={ 0 } > </AppTabBar>
            </div>
        );
    }
}

export default Home;
