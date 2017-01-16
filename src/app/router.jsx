import {Router, Route, browserHistory} from 'react-router';
import MainComponent from './main';
import Suggestions from './suggestions';
import React, {Component} from 'react'
import Maps from './maps/index';

export default class extends Component {
  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={MainComponent}></Route>
      <Route path="/suggestions" component={Suggestions}/>
      <Route path="/maps" component={Maps}/>
    </Router>
  }
}
