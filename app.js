import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'

import App from './components/App'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import Wiki from './components/Wiki'
import Lessons from './components/Lessons'

import injectTapEventPlugin from 'react-tap-event-plugin';
import BgPicture from './pic/bgWebSite.png'

import './css/global.css'
require('file?name=index.html!./index.html')

function requireAuth(nextState, replace) {
  /*
  if (localStorage.getItem('token') == null) {
    replace({
      pathname: 'login' ,
      state: {nextPathname: nextState.location.pathname}
    })
  }
  */
}

injectTapEventPlugin();
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
document.body.style.width = "100%";
document.body.style.height = "100%";
var rootElement = document.createElement('div');
document.body.appendChild(rootElement);

render((
  <Router history={browserHistory}>
    <Route path="login" component={LoginForm} />
    <Route path="/" component={App}>
      <Route path="profile" component={Profile} onEnter={requireAuth}/>
      <Route path="wiki" component={Wiki} onEnter={requireAuth}/>
      <Route path="lessons" component={Lessons} onEnter={requireAuth}/>
    </Route>
  </Router>
), rootElement)
