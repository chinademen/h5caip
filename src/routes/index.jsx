import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "../page/home";
import About from "../page/about";
import AccountCenter from "../page/accountCenter";
import Ssc from "../page/lottery/ssc";

import BetRecord from "../page/about/betRecord";
import TraceRecord from "../page/about/traceRecord";
import GaRecord from "../page/about/gaRecord";
import MoneyRecord from "../page/about/moneyRecord";


class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch className="route">
                    <Route exact path="/home" component={Home} />

                    <Route path="/about" component={About} />
                    <Route path="/betRecord" component={BetRecord} />
                    <Route path="/traceRecord" component={TraceRecord} />
                    <Route path="/gaRecord" component={GaRecord} />
                    <Route path="/moneyRecord" component={MoneyRecord} />

                    <Route path="/accountCenter" component={AccountCenter} />

                    <Route path="/lottery/SSC" component={Ssc} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
