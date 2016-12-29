var {Router, Route, browserHistory} = require('react-router');
var MainComponent = require('./main');
var React = require('react');

var App = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={MainComponent}></Route>
    </Router>
  }
})

module.exports = App
