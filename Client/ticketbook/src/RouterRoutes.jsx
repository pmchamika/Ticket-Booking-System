import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Home from './Home';
import App from './components/App';

//Handles the page routing
const RouterRoutes = () => (
    <Switch>
        <Route exact path="/" component={withRouter(Home)}/>
        <Route exact path="/App" component={withRouter(App)} />

    </Switch>

)

export default RouterRoutes;