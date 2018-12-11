import React, { Component } from 'react';
import Routes from './routes/index';
import { Provider } from 'mobx-react';
import stores from './mobx/index'



class App extends Component {
    render() {
        return (
            <div className="app">
                <Provider {...stores}>
                    <Routes />
                </Provider>
            </div>
        );
    }
}

export default App;

