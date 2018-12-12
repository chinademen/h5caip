import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Ssc from "../page/lottery/ssc";
import chidRouter from "./chidRouter";

const Routes = () => (
    <Router>
        <div className="route">
            <Route path="/" component={chidRouter} />
            <Route path="/lottery/SSC" component={Ssc} />
        </div>
    </Router>
);

export default Routes;
