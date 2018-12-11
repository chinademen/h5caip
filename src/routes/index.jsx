import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../page/home';
import About from '../page/about';

import Ssc from "../page/lottery/ssc"

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={ Home }/>
            <Route path="/about" component={ About }/>
            <Route path="/lottery/SSC" component={ Ssc }/>
        </div>
    </Router>
)

export default Routes;