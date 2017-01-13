'use strict'

import '../../stylesheets/global.less';
import '../../stylesheets/flight.less';

import $ from 'zepto';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import createHistory from 'history/createBrowserHistory';

import {RouteTransition} from 'react-router-transition';
import {presets} from 'react-router-transition';

import Home from 'home';
import Header from 'header';
import Flight from 'flight';
import FlightList from 'flightlist';
import Train from 'train';
import Hotel from 'hotel';

if(module.hot && process.env.NODE_ENV === 'dev-HMR') module.hot.accept();

console.log('process.env.NODE_ENV in Front-end:',process.env.NODE_ENV);

const history = createHistory();
const location = history.location;

var styles = presets.slideLeft;

// // Listen for changes to the current location.
// const unlisten = history.listen((location, action) => {
//   console.log(action, location.pathname, location);
// })

// Use push, replace, and go to navigate around.
//history.push('/home', { some: 'state' })

// To stop listening, call the function returned from listen().
//unlisten()

var App = function ({ children, location }) { //children = React.children
  
  styles = location.action === 'POP'? presets.slideRight: presets.slideLeft;

  return (
  <div>
    <Header />

    <RouteTransition
      className="transition-wrapper"
      pathname={location.pathname}
      runOnMount={false}
      {...styles}>
      {children}
    </RouteTransition>

  </div>
  )
}

render((<Router key={Math.random()} history={browserHistory} >
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>

            <Route path="flight" component={Flight}>
            </Route>

            <Route path="flight/:citys" component={FlightList}>
            </Route>

            <Route path="train" component={Train}>
            </Route>

            <Route path="hotel" component={Hotel}>
            </Route>
          </Route>
        </Router>
  ), document.getElementById('app')
)
