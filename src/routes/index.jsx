import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "../page/home";
import About from "../page/about";
import AccountCenter from "../page/accountCenter";
import lottery from "../page/lottery";
import aboutIndex from "../page/about/index.jsx";
import recordDetail from "../page/about/recordDetail.jsx";
import me from "../page/me"

// // 下级管理
// import LevelMangement from "../page/me/levelMangement"
// // 人工开户
// import OpeningAccount from "../page/me/openingAccount"

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch className="route">
                    <Route exact path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/accountCenter" component={AccountCenter} />
                    <Route path="/aboutype/recordDetail" component={recordDetail} />
                    <Route path="/aboutype/:type" component={aboutIndex} />
                    <Route path="/lottery/:id" component={lottery} /> 
                    <Route path="/me/:type" component={me} /> 
                </Switch>
            </Router>
        );
    }
}

export default Routes;
