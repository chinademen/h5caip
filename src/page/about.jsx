import React, { Component } from "react";
import { Link } from "react-router-dom";


import "../less/about.scss";
import AppTabBar from "../template/appTabBar";
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                { title: "投注记录", url: require("../img/lm_tzjl.png") ,key:'betRecord' },
                { title: "追号记录", url: require("../img/lm_zhjl.png")  ,key:'traceRecord' },
                { title: "GA记录", url: require("../img/lm_tzjl.png")  ,key:'gaRecord' },
                { title: "资金记录", url: require("../img/lm_zbjl.png")  ,key:'moneyRecord' }
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
                                 <Link className="a" to={`/${item.key}`}>
                                    <img className="img_left" src={item.url} alt="" />
                                    <span> {item.title} </span>
                                    <img className="img_right" src={ require('../img/arrow_r.png') }alt=""/>
                                 </Link>
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
