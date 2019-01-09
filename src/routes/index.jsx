import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


import Home from "../page/home";
import About from "../page/about";
import AccountCenter from "../page/accountCenter";
import lottery from "../page/lottery";
import basket from "../page/lottery/basket.jsx";
import aboutIndex from "../page/about/index.jsx";
import recordDetail from "../page/about/recordDetail.jsx";
import traceDetail from "../page/about/traceDetail.jsx";
import me from "../page/me"

import login from "../page/login"

// // 下级管理
// import LevelMangement from "../page/me/levelMangement"
// // 人工开户
// import OpeningAccount from "../page/me/openingAccount"

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch className="route">
                    <Route exact path="/login" component={login} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/accountCenter" component={AccountCenter} />
                    <Route exact path="/aboutype/recordDetail" component={recordDetail} />
                    <Route exact path="/aboutype/traceDetail" component={traceDetail} />
                    <Route exact path="/aboutype/:type" component={aboutIndex} />
                    <Route exact path="/lottery/:id" component={lottery} /> 
                    <Route exact path="/basket" component={basket} />
                    <Route exact path="/me/:type" component={me} /> 
                </Switch>
            </Router>
        );
    }
}

export default Routes;
