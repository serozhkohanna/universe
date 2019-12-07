import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

import HomePage from './ui/pages/HomePage/HomePage';
import InfoPage from './ui/pages/InfoPage/InfoPage';
import PlannerPage from './ui/pages/PlannerPage/PlannerPage';

import { HOME, HOW_IT_WORKS, FILL_DATA, PLANNER } from './constants/routes.js';


import { Switch, Route, withRouter } from 'react-router-dom';

class App extends Component {
    render () {
        return <div className='page'>
            <Switch>
                <Route exact path={HOME} component={HomePage} />
                <Route exact path={HOW_IT_WORKS} component={HomePage} />
                <Route exact path={FILL_DATA} component={InfoPage} />
                <Route exact path={PLANNER} component={PlannerPage} />
            </Switch>
        </div>;
    }
}

export default withRouter(App);
