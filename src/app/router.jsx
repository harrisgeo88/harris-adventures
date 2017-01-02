var {Router, Route, browserHistory} = require('react-router');
var MainComponent = require('./main');
var React = require('react');
var Suggestions = require('./suggestions');

var App = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={MainComponent}></Route>
      <Route path="/suggestions" component={Suggestions}/>
    </Router>
  }
})

module.exports = App
