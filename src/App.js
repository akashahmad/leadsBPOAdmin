import React from 'react';
import Hajira from './hajira/hajira'
import Login from './Login/Loginpage.js'
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
           <Switch>
          <Route path={"/"} exact={true} component={Login}/>
        <Route path={"/table"} component={Hajira}/>
        </Switch>
        </BrowserRouter>

  )
}

export default App;
