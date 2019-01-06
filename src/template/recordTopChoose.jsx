import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Picker } from 'antd-mobile';
import "../less/template.scss";
class AppTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: [
                {
                    title: "购彩大厅",
                    unSelected: require("../img/unsetzhuye.svg"),
                    selected: require("../img/setzhuye.svg"),
                    key: "home"
                },
                {
                    title: "游戏记录",
                    unSelected: require("../img/unsetjilu.svg"),
                    selected: require("../img/setjilu.svg"),
                    key: "about"
                },
                {
                    title: "账号中心",
                    unSelected: require("../img/unseticonzh.svg"),
                    selected: require("../img/seticonzh.svg"),
                    key: "accountCenter"
                }
            ]
        };
    }
    render() {
        return (
            <div className="appTabBar">
                <ul>
                    {this.state.datalist.map((item, i) => {
                        return (
                            <li key={i}>
                                {this.props.barActive === i ? (
                                    <Link className="a" to={`/${item.key}`}>
                                        <img src={item.selected} alt="" />
                                        <p className="active"> {item.title} </p>
                                    </Link>
                                ) : (
                                    <Link className="a" to={`/${item.key}`}>
                                        <img src={item.unSelected} alt="" />
                                        <p> {item.title} </p>
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default AppTabBar;
