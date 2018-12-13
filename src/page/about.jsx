import React, { Component } from "react";
import "../less/about.scss";
import AppTabBar from "../template/appTabBar";
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                { title: "投注记录", url: require("../img/lm_tzjl.png") },
                { title: "追号记录", url: require("../img/lm_zhjl.png") },
                { title: "GA记录", url: require("../img/lm_tzjl.png") },
                { title: "资金记录", url: require("../img/lm_zbjl.png") }
            ]
        };
    }

    render() {
        return (
            <div className="about">
                <ul className="about_ul">
                    {this.state.dataList.map((item, i) => {
                        return (
                            <li key={ i }>
                                <img className="img_left" src={item.url} alt="" />
                                <span> {item.title} </span>
                                <img className="img_right" src={ require('../img/arrow_r.png') }alt=""/>
                            </li>
                        );
                    })}
                </ul>
                <AppTabBar barActive={ 1 } > </AppTabBar>
            </div>
        );
    }
}

export default About;
