import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './containers/login/loginpage'
import {Provider} from './store';
import { BrowserRouter , Route, Switch } from "react-router-dom";
ReactDOM.render(<div>
    <Provider>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path={"/"} component={App}/>
            </Switch>
        </BrowserRouter>
    </Provider>
</div>, document.getElementById('root'));
