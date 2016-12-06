/**
 * Created by Lam on 16/12/6.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'


render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>

            {/* add it here, as a child of `/` */}
            <IndexRoute component={Home}/>

            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            {/* add the new route */}
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('root'))