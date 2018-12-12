import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import { TabBar } from "antd-mobile";

import Home from "../page/home";
import About from "../page/about";
import AccountCenter from "../page/accountCenter";

class ChildRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/accountCenter" component={AccountCenter} />
                </Switch>
            </Router>
        );
    }
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home"
        };
    }
    render() {
        return (
            <div>
                <ChildRoute />
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="购彩大厅"
                        key="Life"
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selected={this.state.selectedTab === "home"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "home"
                            });
                            this.props.history.push("/home");
                        }}
                    />
                    <TabBar.Item
                        title="游戏记录"
                        key="Life"
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selected={this.state.selectedTab === "about"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "about"
                            });
                            this.props.history.push("/about");
                        }}
                    />
                    <TabBar.Item
                        title="账号中心"
                        key="Life"
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background:
                                        "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                                }}
                            />
                        }
                        selected={this.state.selectedTab === "accountCenter"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "accountCenter"
                            });
                            this.props.history.push("/accountCenter");
                        }}
                    />
                </TabBar>
            </div>
        );
    }
}

export default withRouter(Index);
