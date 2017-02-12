require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/app';
import MailContainer from './components/mail-container';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/inbox" component={() => (<MailContainer folder="inbox"/>)}/>
            <Route path="/spam" component={() => (<MailContainer folder="spam"/>)}/>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(routes,document.getElementById('app'));
})
