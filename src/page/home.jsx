import React, { Component } from "react";
import { Tabs, Carousel } from "antd-mobile";
import "../less/home.scss";

import AppTabBar from "../template/appTabBar";

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
                            style={{ width: "100%", height:'160px', verticalAlign: "top" }}
                        />
                    </a>
                ))}
            </Carousel>
        );
    }
}

// 彩票
class Lottery extends Component {
    render() {
        return (
            <div className="home_lottery">
                <Banner />
                <h3 className="home_title"> 购彩专区 </h3>
                <ul className="home_list">
                    {["时时彩", "11选5", "快三", "低频彩","快三","11选5","时时彩"].map((item, i) => {
                        return (
                            <li key={i}>
                                <div className="list_logo"> </div>
                                <div className="list_dec">
                                    <p className="title"> {item} </p>
                                    <p className="dec"> 热门组合/13个 </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

// ga游戏
class GaGame extends Component {
    render(){
        
        return(
            <div className="home_gaGame">
                <Banner />
                <ul className="home_gaGame_list">
                    {
                        this.props.data.map((item,i)=>{
                            return(
                                <li key={ i }>
                                    <img className="home_gaGame_img" src={ item.img } alt=""/>
                                    <div className="home_gaGame_dec">
                                        <p> { item.title } </p>
                                        <p> { item.dec } </p>
                                    </div>
                                    <div className="home_gaGame_btn">
                                        <a href="http://www.alipay.com"> 开始游戏 </a>
                                        <a href="http://www.alipay.com"> 免费试玩 </a>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { title: "彩票" },
                { title: "GA游戏" },
                { title: "AG真人" },
                { title: "沙巴体育" }
            ],
            gaGameList:[
                { title:"标准水果机",img:require('../img/128.png'),dec:'一款熟悉的街机' },
                { title:"深林舞会",img:require('../img/129.png'),dec:'经典游戏,金典玩法' },
                { title:"三八杠",img:require('../img/130.png'),dec:'疯狂牌九' }
            ]
        };
    }
    render() {
        return (
            <div className="home">
                <Tabs swipeable={false} tabs={this.state.tabs} initialPage={1}>
                    <Lottery />
                    <GaGame data={ this.state.gaGameList } />
                    <div className="">3</div>
                    <div className="">4</div>
                </Tabs>
                <AppTabBar barActive={ 0 } > </AppTabBar>
            </div>
        );
    }
}

export default Home;
